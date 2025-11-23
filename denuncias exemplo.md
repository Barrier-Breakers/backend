1. Tabela denuncias

Precisa suportar:

dono

texto

mídias

votos

localização (obrigatório para raio)

tags

timestamps

Use PostgreSQL + PostGIS.

create table denuncias (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  titulo text not null,
  descricao text,
  medias text[] default '{}',                -- array de URLs do storage
  status text not null default 'aberta',     -- aberta/resolvida/fechada/etc.
  tags text[] default '{}',                  -- tags automáticas + do usuário

  location geography(Point, 4326) not null,  -- ESSENCIAL pra busca por raio

  upvotes integer not null default 0,
  downvotes integer not null default 0,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);


Trigger para updated_at:

create trigger update_denuncia_timestamp
before update on denuncias
for each row execute procedure moddatetime (updated_at);

2. Tabela denuncia_votos

Você precisa manter voto único por usuário. Nunca confie em counters diretos.

create table denuncia_votos (
  id uuid primary key default gen_random_uuid(),
  denuncia_id uuid not null references denuncias(id) on delete cascade,
  user_id uuid not null references users(id) on delete cascade,

  voto smallint not null,   -- -1 = downvote, 1 = upvote

  created_at timestamptz not null default now(),

  unique(denuncia_id, user_id) -- garante um voto por usuário
);


Depois você recalcula up/down em views ou materialized views se quiser performance.

3. Tabela denuncia_comentarios

Simples.

create table denuncia_comentarios (
  id uuid primary key default gen_random_uuid(),
  denuncia_id uuid not null references denuncias(id) on delete cascade,
  user_id uuid not null references users(id) on delete cascade,

  texto text not null,
  medias text[] default '{}',

  created_at timestamptz not null default now()
);

4. Busca por raio

Consulta padrão Supabase (PostGIS):

select *
from denuncias
where ST_DWithin(
  location,
  ST_MakePoint(:lng, :lat)::geography,
  :raio_metros
);


Isso retorna:

denúncias do usuário

denúncias dentro do raio

Se quiser incluir SEMPRE as denúncias do usuário mesmo que estejam fora do raio:

select *
from denuncias
where
  user_id = :user_id
  or ST_DWithin(location, ST_MakePoint(:lng, :lat)::geography, :raio_metros);