
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>
/**
 * Model Proposicao
 * 
 */
export type Proposicao = $Result.DefaultSelection<Prisma.$ProposicaoPayload>
/**
 * Model Denuncia
 * 
 */
export type Denuncia = $Result.DefaultSelection<Prisma.$DenunciaPayload>
/**
 * Model DenunciaVoto
 * 
 */
export type DenunciaVoto = $Result.DefaultSelection<Prisma.$DenunciaVotoPayload>
/**
 * Model DenunciaComentario
 * 
 */
export type DenunciaComentario = $Result.DefaultSelection<Prisma.$DenunciaComentarioPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.proposicao`: Exposes CRUD operations for the **Proposicao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Proposicaos
    * const proposicaos = await prisma.proposicao.findMany()
    * ```
    */
  get proposicao(): Prisma.ProposicaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.denuncia`: Exposes CRUD operations for the **Denuncia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Denuncias
    * const denuncias = await prisma.denuncia.findMany()
    * ```
    */
  get denuncia(): Prisma.DenunciaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.denunciaVoto`: Exposes CRUD operations for the **DenunciaVoto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DenunciaVotos
    * const denunciaVotos = await prisma.denunciaVoto.findMany()
    * ```
    */
  get denunciaVoto(): Prisma.DenunciaVotoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.denunciaComentario`: Exposes CRUD operations for the **DenunciaComentario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DenunciaComentarios
    * const denunciaComentarios = await prisma.denunciaComentario.findMany()
    * ```
    */
  get denunciaComentario(): Prisma.DenunciaComentarioDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.0.0
   * Query Engine version: 0c19ccc313cf9911a90d99d2ac2eb0280c76c513
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Session: 'Session',
    Post: 'Post',
    Comment: 'Comment',
    AuditLog: 'AuditLog',
    Proposicao: 'Proposicao',
    Denuncia: 'Denuncia',
    DenunciaVoto: 'DenunciaVoto',
    DenunciaComentario: 'DenunciaComentario'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "session" | "post" | "comment" | "auditLog" | "proposicao" | "denuncia" | "denunciaVoto" | "denunciaComentario"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
      Proposicao: {
        payload: Prisma.$ProposicaoPayload<ExtArgs>
        fields: Prisma.ProposicaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProposicaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposicaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProposicaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposicaoPayload>
          }
          findFirst: {
            args: Prisma.ProposicaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposicaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProposicaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposicaoPayload>
          }
          findMany: {
            args: Prisma.ProposicaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposicaoPayload>[]
          }
          create: {
            args: Prisma.ProposicaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposicaoPayload>
          }
          createMany: {
            args: Prisma.ProposicaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProposicaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposicaoPayload>[]
          }
          delete: {
            args: Prisma.ProposicaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposicaoPayload>
          }
          update: {
            args: Prisma.ProposicaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposicaoPayload>
          }
          deleteMany: {
            args: Prisma.ProposicaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProposicaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProposicaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposicaoPayload>[]
          }
          upsert: {
            args: Prisma.ProposicaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposicaoPayload>
          }
          aggregate: {
            args: Prisma.ProposicaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProposicao>
          }
          groupBy: {
            args: Prisma.ProposicaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProposicaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProposicaoCountArgs<ExtArgs>
            result: $Utils.Optional<ProposicaoCountAggregateOutputType> | number
          }
        }
      }
      Denuncia: {
        payload: Prisma.$DenunciaPayload<ExtArgs>
        fields: Prisma.DenunciaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DenunciaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DenunciaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DenunciaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DenunciaPayload>
          }
          findFirst: {
            args: Prisma.DenunciaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DenunciaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DenunciaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DenunciaPayload>
          }
          findMany: {
            args: Prisma.DenunciaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DenunciaPayload>[]
          }
          delete: {
            args: Prisma.DenunciaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DenunciaPayload>
          }
          update: {
            args: Prisma.DenunciaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DenunciaPayload>
          }
          deleteMany: {
            args: Prisma.DenunciaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DenunciaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DenunciaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DenunciaPayload>[]
          }
          aggregate: {
            args: Prisma.DenunciaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDenuncia>
          }
          groupBy: {
            args: Prisma.DenunciaGroupByArgs<ExtArgs>
            result: $Utils.Optional<DenunciaGroupByOutputType>[]
          }
          count: {
            args: Prisma.DenunciaCountArgs<ExtArgs>
            result: $Utils.Optional<DenunciaCountAggregateOutputType> | number
          }
        }
      }
      DenunciaVoto: {
        payload: Prisma.$DenunciaVotoPayload<ExtArgs>
        fields: Prisma.DenunciaVotoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DenunciaVotoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DenunciaVotoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DenunciaVotoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DenunciaVotoPayload>
          }
          findFirst: {
            args: Prisma.DenunciaVotoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DenunciaVotoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DenunciaVotoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DenunciaVotoPayload>
          }
          findMany: {
            args: Prisma.DenunciaVotoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DenunciaVotoPayload>[]
          }
          create: {
            args: Prisma.DenunciaVotoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DenunciaVotoPayload>
          }
          createMany: {
            args: Prisma.DenunciaVotoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DenunciaVotoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DenunciaVotoPayload>[]
          }
          delete: {
            args: Prisma.DenunciaVotoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DenunciaVotoPayload>
          }
          update: {
            args: Prisma.DenunciaVotoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DenunciaVotoPayload>
          }
          deleteMany: {
            args: Prisma.DenunciaVotoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DenunciaVotoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DenunciaVotoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DenunciaVotoPayload>[]
          }
          upsert: {
            args: Prisma.DenunciaVotoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DenunciaVotoPayload>
          }
          aggregate: {
            args: Prisma.DenunciaVotoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDenunciaVoto>
          }
          groupBy: {
            args: Prisma.DenunciaVotoGroupByArgs<ExtArgs>
            result: $Utils.Optional<DenunciaVotoGroupByOutputType>[]
          }
          count: {
            args: Prisma.DenunciaVotoCountArgs<ExtArgs>
            result: $Utils.Optional<DenunciaVotoCountAggregateOutputType> | number
          }
        }
      }
      DenunciaComentario: {
        payload: Prisma.$DenunciaComentarioPayload<ExtArgs>
        fields: Prisma.DenunciaComentarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DenunciaComentarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DenunciaComentarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DenunciaComentarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DenunciaComentarioPayload>
          }
          findFirst: {
            args: Prisma.DenunciaComentarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DenunciaComentarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DenunciaComentarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DenunciaComentarioPayload>
          }
          findMany: {
            args: Prisma.DenunciaComentarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DenunciaComentarioPayload>[]
          }
          create: {
            args: Prisma.DenunciaComentarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DenunciaComentarioPayload>
          }
          createMany: {
            args: Prisma.DenunciaComentarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DenunciaComentarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DenunciaComentarioPayload>[]
          }
          delete: {
            args: Prisma.DenunciaComentarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DenunciaComentarioPayload>
          }
          update: {
            args: Prisma.DenunciaComentarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DenunciaComentarioPayload>
          }
          deleteMany: {
            args: Prisma.DenunciaComentarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DenunciaComentarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DenunciaComentarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DenunciaComentarioPayload>[]
          }
          upsert: {
            args: Prisma.DenunciaComentarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DenunciaComentarioPayload>
          }
          aggregate: {
            args: Prisma.DenunciaComentarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDenunciaComentario>
          }
          groupBy: {
            args: Prisma.DenunciaComentarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<DenunciaComentarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.DenunciaComentarioCountArgs<ExtArgs>
            result: $Utils.Optional<DenunciaComentarioCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    session?: SessionOmit
    post?: PostOmit
    comment?: CommentOmit
    auditLog?: AuditLogOmit
    proposicao?: ProposicaoOmit
    denuncia?: DenunciaOmit
    denunciaVoto?: DenunciaVotoOmit
    denunciaComentario?: DenunciaComentarioOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    posts: number
    comments: number
    denuncias: number
    denunciaVotos: number
    denunciaComentarios: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
    denuncias?: boolean | UserCountOutputTypeCountDenunciasArgs
    denunciaVotos?: boolean | UserCountOutputTypeCountDenunciaVotosArgs
    denunciaComentarios?: boolean | UserCountOutputTypeCountDenunciaComentariosArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDenunciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DenunciaWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDenunciaVotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DenunciaVotoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDenunciaComentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DenunciaComentarioWhereInput
  }


  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    comments: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | PostCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * Count Type DenunciaCountOutputType
   */

  export type DenunciaCountOutputType = {
    votos: number
    comentarios: number
  }

  export type DenunciaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    votos?: boolean | DenunciaCountOutputTypeCountVotosArgs
    comentarios?: boolean | DenunciaCountOutputTypeCountComentariosArgs
  }

  // Custom InputTypes
  /**
   * DenunciaCountOutputType without action
   */
  export type DenunciaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DenunciaCountOutputType
     */
    select?: DenunciaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DenunciaCountOutputType without action
   */
  export type DenunciaCountOutputTypeCountVotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DenunciaVotoWhereInput
  }

  /**
   * DenunciaCountOutputType without action
   */
  export type DenunciaCountOutputTypeCountComentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DenunciaComentarioWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    avatar: string | null
    race: string | null
    gender: string | null
    ageRange: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    avatar: string | null
    race: string | null
    gender: string | null
    ageRange: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    avatar: number
    race: number
    gender: number
    ageRange: number
    interestTopics: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    avatar?: true
    race?: true
    gender?: true
    ageRange?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    avatar?: true
    race?: true
    gender?: true
    ageRange?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    avatar?: true
    race?: true
    gender?: true
    ageRange?: true
    interestTopics?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    avatar: string | null
    race: string | null
    gender: string | null
    ageRange: string | null
    interestTopics: string[]
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    avatar?: boolean
    race?: boolean
    gender?: boolean
    ageRange?: boolean
    interestTopics?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    denuncias?: boolean | User$denunciasArgs<ExtArgs>
    denunciaVotos?: boolean | User$denunciaVotosArgs<ExtArgs>
    denunciaComentarios?: boolean | User$denunciaComentariosArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    avatar?: boolean
    race?: boolean
    gender?: boolean
    ageRange?: boolean
    interestTopics?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    avatar?: boolean
    race?: boolean
    gender?: boolean
    ageRange?: boolean
    interestTopics?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    avatar?: boolean
    race?: boolean
    gender?: boolean
    ageRange?: boolean
    interestTopics?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "avatar" | "race" | "gender" | "ageRange" | "interestTopics" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    denuncias?: boolean | User$denunciasArgs<ExtArgs>
    denunciaVotos?: boolean | User$denunciaVotosArgs<ExtArgs>
    denunciaComentarios?: boolean | User$denunciaComentariosArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      posts: Prisma.$PostPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      denuncias: Prisma.$DenunciaPayload<ExtArgs>[]
      denunciaVotos: Prisma.$DenunciaVotoPayload<ExtArgs>[]
      denunciaComentarios: Prisma.$DenunciaComentarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      avatar: string | null
      race: string | null
      gender: string | null
      ageRange: string | null
      interestTopics: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    denuncias<T extends User$denunciasArgs<ExtArgs> = {}>(args?: Subset<T, User$denunciasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DenunciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    denunciaVotos<T extends User$denunciaVotosArgs<ExtArgs> = {}>(args?: Subset<T, User$denunciaVotosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DenunciaVotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    denunciaComentarios<T extends User$denunciaComentariosArgs<ExtArgs> = {}>(args?: Subset<T, User$denunciaComentariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DenunciaComentarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly race: FieldRef<"User", 'String'>
    readonly gender: FieldRef<"User", 'String'>
    readonly ageRange: FieldRef<"User", 'String'>
    readonly interestTopics: FieldRef<"User", 'String[]'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * User.denuncias
   */
  export type User$denunciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Denuncia
     */
    select?: DenunciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Denuncia
     */
    omit?: DenunciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DenunciaInclude<ExtArgs> | null
    where?: DenunciaWhereInput
    orderBy?: DenunciaOrderByWithRelationInput | DenunciaOrderByWithRelationInput[]
    cursor?: DenunciaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DenunciaScalarFieldEnum | DenunciaScalarFieldEnum[]
  }

  /**
   * User.denunciaVotos
   */
  export type User$denunciaVotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DenunciaVoto
     */
    select?: DenunciaVotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DenunciaVoto
     */
    omit?: DenunciaVotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DenunciaVotoInclude<ExtArgs> | null
    where?: DenunciaVotoWhereInput
    orderBy?: DenunciaVotoOrderByWithRelationInput | DenunciaVotoOrderByWithRelationInput[]
    cursor?: DenunciaVotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DenunciaVotoScalarFieldEnum | DenunciaVotoScalarFieldEnum[]
  }

  /**
   * User.denunciaComentarios
   */
  export type User$denunciaComentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DenunciaComentario
     */
    select?: DenunciaComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DenunciaComentario
     */
    omit?: DenunciaComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DenunciaComentarioInclude<ExtArgs> | null
    where?: DenunciaComentarioWhereInput
    orderBy?: DenunciaComentarioOrderByWithRelationInput | DenunciaComentarioOrderByWithRelationInput[]
    cursor?: DenunciaComentarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DenunciaComentarioScalarFieldEnum | DenunciaComentarioScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    userId: number
    token: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    createdAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    createdAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    userId: string
    token: string
    expiresAt: Date
    createdAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "token" | "expiresAt" | "createdAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      token: string
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly token: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    title: number
    content: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PostMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    title: string
    content: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    comments?: boolean | Post$commentsArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    comments?: boolean | Post$commentsArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      comments: Prisma.$CommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comments<T extends Post$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Post$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly title: FieldRef<"Post", 'String'>
    readonly content: FieldRef<"Post", 'String'>
    readonly userId: FieldRef<"Post", 'String'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post.comments
   */
  export type Post$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    content: string | null
    userId: string | null
    postId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    content: string | null
    userId: string | null
    postId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    content: number
    userId: number
    postId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommentMinAggregateInputType = {
    id?: true
    content?: true
    userId?: true
    postId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    content?: true
    userId?: true
    postId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    content?: true
    userId?: true
    postId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: string
    content: string
    userId: string
    postId: string
    createdAt: Date
    updatedAt: Date
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    userId?: boolean
    postId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    userId?: boolean
    postId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    userId?: boolean
    postId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    content?: boolean
    userId?: boolean
    postId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "userId" | "postId" | "createdAt" | "updatedAt", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      userId: string
      postId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'String'>
    readonly content: FieldRef<"Comment", 'String'>
    readonly userId: FieldRef<"Comment", 'String'>
    readonly postId: FieldRef<"Comment", 'String'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
    readonly updatedAt: FieldRef<"Comment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    action: string | null
    entity: string | null
    entityId: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    action: string | null
    entity: string | null
    entityId: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    action: number
    entity: number
    entityId: number
    changes: number
    createdAt: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    action?: true
    entity?: true
    entityId?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    action?: true
    entity?: true
    entityId?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    action?: true
    entity?: true
    entityId?: true
    changes?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    action: string
    entity: string
    entityId: string
    changes: JsonValue | null
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    changes?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    changes?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    changes?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    changes?: boolean
    createdAt?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "action" | "entity" | "entityId" | "changes" | "createdAt", ExtArgs["result"]["auditLog"]>

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      action: string
      entity: string
      entityId: string
      changes: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly entity: FieldRef<"AuditLog", 'String'>
    readonly entityId: FieldRef<"AuditLog", 'String'>
    readonly changes: FieldRef<"AuditLog", 'Json'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
  }


  /**
   * Model Proposicao
   */

  export type AggregateProposicao = {
    _count: ProposicaoCountAggregateOutputType | null
    _avg: ProposicaoAvgAggregateOutputType | null
    _sum: ProposicaoSumAggregateOutputType | null
    _min: ProposicaoMinAggregateOutputType | null
    _max: ProposicaoMaxAggregateOutputType | null
  }

  export type ProposicaoAvgAggregateOutputType = {
    id: number | null
    numero: number | null
    ano: number | null
    codTipo: number | null
  }

  export type ProposicaoSumAggregateOutputType = {
    id: number | null
    numero: number | null
    ano: number | null
    codTipo: number | null
  }

  export type ProposicaoMinAggregateOutputType = {
    id: number | null
    uri: string | null
    siglaTipo: string | null
    numero: number | null
    ano: number | null
    codTipo: number | null
    descricaoTipo: string | null
    ementa: string | null
    ementaDetalhada: string | null
    keywords: string | null
    dataApresentacao: Date | null
    uriOrgaoNumerador: string | null
    urlInteiroTeor: string | null
    uriPropAnterior: string | null
    uriPropPrincipal: string | null
    uriPropPosterior: string | null
    statusData: Date | null
    statusSequencia: string | null
    uriRelator: string | null
    codOrgao: string | null
    siglaOrgao: string | null
    uriOrgao: string | null
    regime: string | null
    descricaoTramitacao: string | null
    idTipoTramitacao: string | null
    descricaoSituacao: string | null
    idSituacao: string | null
    despacho: string | null
    statusApreciacao: string | null
    statusUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProposicaoMaxAggregateOutputType = {
    id: number | null
    uri: string | null
    siglaTipo: string | null
    numero: number | null
    ano: number | null
    codTipo: number | null
    descricaoTipo: string | null
    ementa: string | null
    ementaDetalhada: string | null
    keywords: string | null
    dataApresentacao: Date | null
    uriOrgaoNumerador: string | null
    urlInteiroTeor: string | null
    uriPropAnterior: string | null
    uriPropPrincipal: string | null
    uriPropPosterior: string | null
    statusData: Date | null
    statusSequencia: string | null
    uriRelator: string | null
    codOrgao: string | null
    siglaOrgao: string | null
    uriOrgao: string | null
    regime: string | null
    descricaoTramitacao: string | null
    idTipoTramitacao: string | null
    descricaoSituacao: string | null
    idSituacao: string | null
    despacho: string | null
    statusApreciacao: string | null
    statusUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProposicaoCountAggregateOutputType = {
    id: number
    uri: number
    siglaTipo: number
    numero: number
    ano: number
    codTipo: number
    descricaoTipo: number
    ementa: number
    ementaDetalhada: number
    keywords: number
    dataApresentacao: number
    uriOrgaoNumerador: number
    urlInteiroTeor: number
    uriPropAnterior: number
    uriPropPrincipal: number
    uriPropPosterior: number
    statusData: number
    statusSequencia: number
    uriRelator: number
    codOrgao: number
    siglaOrgao: number
    uriOrgao: number
    regime: number
    descricaoTramitacao: number
    idTipoTramitacao: number
    descricaoSituacao: number
    idSituacao: number
    despacho: number
    statusApreciacao: number
    statusUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProposicaoAvgAggregateInputType = {
    id?: true
    numero?: true
    ano?: true
    codTipo?: true
  }

  export type ProposicaoSumAggregateInputType = {
    id?: true
    numero?: true
    ano?: true
    codTipo?: true
  }

  export type ProposicaoMinAggregateInputType = {
    id?: true
    uri?: true
    siglaTipo?: true
    numero?: true
    ano?: true
    codTipo?: true
    descricaoTipo?: true
    ementa?: true
    ementaDetalhada?: true
    keywords?: true
    dataApresentacao?: true
    uriOrgaoNumerador?: true
    urlInteiroTeor?: true
    uriPropAnterior?: true
    uriPropPrincipal?: true
    uriPropPosterior?: true
    statusData?: true
    statusSequencia?: true
    uriRelator?: true
    codOrgao?: true
    siglaOrgao?: true
    uriOrgao?: true
    regime?: true
    descricaoTramitacao?: true
    idTipoTramitacao?: true
    descricaoSituacao?: true
    idSituacao?: true
    despacho?: true
    statusApreciacao?: true
    statusUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProposicaoMaxAggregateInputType = {
    id?: true
    uri?: true
    siglaTipo?: true
    numero?: true
    ano?: true
    codTipo?: true
    descricaoTipo?: true
    ementa?: true
    ementaDetalhada?: true
    keywords?: true
    dataApresentacao?: true
    uriOrgaoNumerador?: true
    urlInteiroTeor?: true
    uriPropAnterior?: true
    uriPropPrincipal?: true
    uriPropPosterior?: true
    statusData?: true
    statusSequencia?: true
    uriRelator?: true
    codOrgao?: true
    siglaOrgao?: true
    uriOrgao?: true
    regime?: true
    descricaoTramitacao?: true
    idTipoTramitacao?: true
    descricaoSituacao?: true
    idSituacao?: true
    despacho?: true
    statusApreciacao?: true
    statusUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProposicaoCountAggregateInputType = {
    id?: true
    uri?: true
    siglaTipo?: true
    numero?: true
    ano?: true
    codTipo?: true
    descricaoTipo?: true
    ementa?: true
    ementaDetalhada?: true
    keywords?: true
    dataApresentacao?: true
    uriOrgaoNumerador?: true
    urlInteiroTeor?: true
    uriPropAnterior?: true
    uriPropPrincipal?: true
    uriPropPosterior?: true
    statusData?: true
    statusSequencia?: true
    uriRelator?: true
    codOrgao?: true
    siglaOrgao?: true
    uriOrgao?: true
    regime?: true
    descricaoTramitacao?: true
    idTipoTramitacao?: true
    descricaoSituacao?: true
    idSituacao?: true
    despacho?: true
    statusApreciacao?: true
    statusUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProposicaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proposicao to aggregate.
     */
    where?: ProposicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proposicaos to fetch.
     */
    orderBy?: ProposicaoOrderByWithRelationInput | ProposicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProposicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proposicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proposicaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Proposicaos
    **/
    _count?: true | ProposicaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProposicaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProposicaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProposicaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProposicaoMaxAggregateInputType
  }

  export type GetProposicaoAggregateType<T extends ProposicaoAggregateArgs> = {
        [P in keyof T & keyof AggregateProposicao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProposicao[P]>
      : GetScalarType<T[P], AggregateProposicao[P]>
  }




  export type ProposicaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProposicaoWhereInput
    orderBy?: ProposicaoOrderByWithAggregationInput | ProposicaoOrderByWithAggregationInput[]
    by: ProposicaoScalarFieldEnum[] | ProposicaoScalarFieldEnum
    having?: ProposicaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProposicaoCountAggregateInputType | true
    _avg?: ProposicaoAvgAggregateInputType
    _sum?: ProposicaoSumAggregateInputType
    _min?: ProposicaoMinAggregateInputType
    _max?: ProposicaoMaxAggregateInputType
  }

  export type ProposicaoGroupByOutputType = {
    id: number
    uri: string
    siglaTipo: string
    numero: number
    ano: number
    codTipo: number
    descricaoTipo: string
    ementa: string
    ementaDetalhada: string | null
    keywords: string | null
    dataApresentacao: Date | null
    uriOrgaoNumerador: string | null
    urlInteiroTeor: string | null
    uriPropAnterior: string | null
    uriPropPrincipal: string | null
    uriPropPosterior: string | null
    statusData: Date | null
    statusSequencia: string | null
    uriRelator: string | null
    codOrgao: string | null
    siglaOrgao: string | null
    uriOrgao: string | null
    regime: string | null
    descricaoTramitacao: string | null
    idTipoTramitacao: string | null
    descricaoSituacao: string | null
    idSituacao: string | null
    despacho: string | null
    statusApreciacao: string | null
    statusUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProposicaoCountAggregateOutputType | null
    _avg: ProposicaoAvgAggregateOutputType | null
    _sum: ProposicaoSumAggregateOutputType | null
    _min: ProposicaoMinAggregateOutputType | null
    _max: ProposicaoMaxAggregateOutputType | null
  }

  type GetProposicaoGroupByPayload<T extends ProposicaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProposicaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProposicaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProposicaoGroupByOutputType[P]>
            : GetScalarType<T[P], ProposicaoGroupByOutputType[P]>
        }
      >
    >


  export type ProposicaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uri?: boolean
    siglaTipo?: boolean
    numero?: boolean
    ano?: boolean
    codTipo?: boolean
    descricaoTipo?: boolean
    ementa?: boolean
    ementaDetalhada?: boolean
    keywords?: boolean
    dataApresentacao?: boolean
    uriOrgaoNumerador?: boolean
    urlInteiroTeor?: boolean
    uriPropAnterior?: boolean
    uriPropPrincipal?: boolean
    uriPropPosterior?: boolean
    statusData?: boolean
    statusSequencia?: boolean
    uriRelator?: boolean
    codOrgao?: boolean
    siglaOrgao?: boolean
    uriOrgao?: boolean
    regime?: boolean
    descricaoTramitacao?: boolean
    idTipoTramitacao?: boolean
    descricaoSituacao?: boolean
    idSituacao?: boolean
    despacho?: boolean
    statusApreciacao?: boolean
    statusUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["proposicao"]>

  export type ProposicaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uri?: boolean
    siglaTipo?: boolean
    numero?: boolean
    ano?: boolean
    codTipo?: boolean
    descricaoTipo?: boolean
    ementa?: boolean
    ementaDetalhada?: boolean
    keywords?: boolean
    dataApresentacao?: boolean
    uriOrgaoNumerador?: boolean
    urlInteiroTeor?: boolean
    uriPropAnterior?: boolean
    uriPropPrincipal?: boolean
    uriPropPosterior?: boolean
    statusData?: boolean
    statusSequencia?: boolean
    uriRelator?: boolean
    codOrgao?: boolean
    siglaOrgao?: boolean
    uriOrgao?: boolean
    regime?: boolean
    descricaoTramitacao?: boolean
    idTipoTramitacao?: boolean
    descricaoSituacao?: boolean
    idSituacao?: boolean
    despacho?: boolean
    statusApreciacao?: boolean
    statusUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["proposicao"]>

  export type ProposicaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uri?: boolean
    siglaTipo?: boolean
    numero?: boolean
    ano?: boolean
    codTipo?: boolean
    descricaoTipo?: boolean
    ementa?: boolean
    ementaDetalhada?: boolean
    keywords?: boolean
    dataApresentacao?: boolean
    uriOrgaoNumerador?: boolean
    urlInteiroTeor?: boolean
    uriPropAnterior?: boolean
    uriPropPrincipal?: boolean
    uriPropPosterior?: boolean
    statusData?: boolean
    statusSequencia?: boolean
    uriRelator?: boolean
    codOrgao?: boolean
    siglaOrgao?: boolean
    uriOrgao?: boolean
    regime?: boolean
    descricaoTramitacao?: boolean
    idTipoTramitacao?: boolean
    descricaoSituacao?: boolean
    idSituacao?: boolean
    despacho?: boolean
    statusApreciacao?: boolean
    statusUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["proposicao"]>

  export type ProposicaoSelectScalar = {
    id?: boolean
    uri?: boolean
    siglaTipo?: boolean
    numero?: boolean
    ano?: boolean
    codTipo?: boolean
    descricaoTipo?: boolean
    ementa?: boolean
    ementaDetalhada?: boolean
    keywords?: boolean
    dataApresentacao?: boolean
    uriOrgaoNumerador?: boolean
    urlInteiroTeor?: boolean
    uriPropAnterior?: boolean
    uriPropPrincipal?: boolean
    uriPropPosterior?: boolean
    statusData?: boolean
    statusSequencia?: boolean
    uriRelator?: boolean
    codOrgao?: boolean
    siglaOrgao?: boolean
    uriOrgao?: boolean
    regime?: boolean
    descricaoTramitacao?: boolean
    idTipoTramitacao?: boolean
    descricaoSituacao?: boolean
    idSituacao?: boolean
    despacho?: boolean
    statusApreciacao?: boolean
    statusUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProposicaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uri" | "siglaTipo" | "numero" | "ano" | "codTipo" | "descricaoTipo" | "ementa" | "ementaDetalhada" | "keywords" | "dataApresentacao" | "uriOrgaoNumerador" | "urlInteiroTeor" | "uriPropAnterior" | "uriPropPrincipal" | "uriPropPosterior" | "statusData" | "statusSequencia" | "uriRelator" | "codOrgao" | "siglaOrgao" | "uriOrgao" | "regime" | "descricaoTramitacao" | "idTipoTramitacao" | "descricaoSituacao" | "idSituacao" | "despacho" | "statusApreciacao" | "statusUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["proposicao"]>

  export type $ProposicaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Proposicao"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uri: string
      siglaTipo: string
      numero: number
      ano: number
      codTipo: number
      descricaoTipo: string
      ementa: string
      ementaDetalhada: string | null
      keywords: string | null
      dataApresentacao: Date | null
      uriOrgaoNumerador: string | null
      urlInteiroTeor: string | null
      uriPropAnterior: string | null
      uriPropPrincipal: string | null
      uriPropPosterior: string | null
      statusData: Date | null
      statusSequencia: string | null
      uriRelator: string | null
      codOrgao: string | null
      siglaOrgao: string | null
      uriOrgao: string | null
      regime: string | null
      descricaoTramitacao: string | null
      idTipoTramitacao: string | null
      descricaoSituacao: string | null
      idSituacao: string | null
      despacho: string | null
      statusApreciacao: string | null
      statusUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["proposicao"]>
    composites: {}
  }

  type ProposicaoGetPayload<S extends boolean | null | undefined | ProposicaoDefaultArgs> = $Result.GetResult<Prisma.$ProposicaoPayload, S>

  type ProposicaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProposicaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProposicaoCountAggregateInputType | true
    }

  export interface ProposicaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Proposicao'], meta: { name: 'Proposicao' } }
    /**
     * Find zero or one Proposicao that matches the filter.
     * @param {ProposicaoFindUniqueArgs} args - Arguments to find a Proposicao
     * @example
     * // Get one Proposicao
     * const proposicao = await prisma.proposicao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProposicaoFindUniqueArgs>(args: SelectSubset<T, ProposicaoFindUniqueArgs<ExtArgs>>): Prisma__ProposicaoClient<$Result.GetResult<Prisma.$ProposicaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Proposicao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProposicaoFindUniqueOrThrowArgs} args - Arguments to find a Proposicao
     * @example
     * // Get one Proposicao
     * const proposicao = await prisma.proposicao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProposicaoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProposicaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProposicaoClient<$Result.GetResult<Prisma.$ProposicaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proposicao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposicaoFindFirstArgs} args - Arguments to find a Proposicao
     * @example
     * // Get one Proposicao
     * const proposicao = await prisma.proposicao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProposicaoFindFirstArgs>(args?: SelectSubset<T, ProposicaoFindFirstArgs<ExtArgs>>): Prisma__ProposicaoClient<$Result.GetResult<Prisma.$ProposicaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proposicao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposicaoFindFirstOrThrowArgs} args - Arguments to find a Proposicao
     * @example
     * // Get one Proposicao
     * const proposicao = await prisma.proposicao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProposicaoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProposicaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProposicaoClient<$Result.GetResult<Prisma.$ProposicaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Proposicaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposicaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Proposicaos
     * const proposicaos = await prisma.proposicao.findMany()
     * 
     * // Get first 10 Proposicaos
     * const proposicaos = await prisma.proposicao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const proposicaoWithIdOnly = await prisma.proposicao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProposicaoFindManyArgs>(args?: SelectSubset<T, ProposicaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposicaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Proposicao.
     * @param {ProposicaoCreateArgs} args - Arguments to create a Proposicao.
     * @example
     * // Create one Proposicao
     * const Proposicao = await prisma.proposicao.create({
     *   data: {
     *     // ... data to create a Proposicao
     *   }
     * })
     * 
     */
    create<T extends ProposicaoCreateArgs>(args: SelectSubset<T, ProposicaoCreateArgs<ExtArgs>>): Prisma__ProposicaoClient<$Result.GetResult<Prisma.$ProposicaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Proposicaos.
     * @param {ProposicaoCreateManyArgs} args - Arguments to create many Proposicaos.
     * @example
     * // Create many Proposicaos
     * const proposicao = await prisma.proposicao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProposicaoCreateManyArgs>(args?: SelectSubset<T, ProposicaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Proposicaos and returns the data saved in the database.
     * @param {ProposicaoCreateManyAndReturnArgs} args - Arguments to create many Proposicaos.
     * @example
     * // Create many Proposicaos
     * const proposicao = await prisma.proposicao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Proposicaos and only return the `id`
     * const proposicaoWithIdOnly = await prisma.proposicao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProposicaoCreateManyAndReturnArgs>(args?: SelectSubset<T, ProposicaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposicaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Proposicao.
     * @param {ProposicaoDeleteArgs} args - Arguments to delete one Proposicao.
     * @example
     * // Delete one Proposicao
     * const Proposicao = await prisma.proposicao.delete({
     *   where: {
     *     // ... filter to delete one Proposicao
     *   }
     * })
     * 
     */
    delete<T extends ProposicaoDeleteArgs>(args: SelectSubset<T, ProposicaoDeleteArgs<ExtArgs>>): Prisma__ProposicaoClient<$Result.GetResult<Prisma.$ProposicaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Proposicao.
     * @param {ProposicaoUpdateArgs} args - Arguments to update one Proposicao.
     * @example
     * // Update one Proposicao
     * const proposicao = await prisma.proposicao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProposicaoUpdateArgs>(args: SelectSubset<T, ProposicaoUpdateArgs<ExtArgs>>): Prisma__ProposicaoClient<$Result.GetResult<Prisma.$ProposicaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Proposicaos.
     * @param {ProposicaoDeleteManyArgs} args - Arguments to filter Proposicaos to delete.
     * @example
     * // Delete a few Proposicaos
     * const { count } = await prisma.proposicao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProposicaoDeleteManyArgs>(args?: SelectSubset<T, ProposicaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proposicaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposicaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Proposicaos
     * const proposicao = await prisma.proposicao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProposicaoUpdateManyArgs>(args: SelectSubset<T, ProposicaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proposicaos and returns the data updated in the database.
     * @param {ProposicaoUpdateManyAndReturnArgs} args - Arguments to update many Proposicaos.
     * @example
     * // Update many Proposicaos
     * const proposicao = await prisma.proposicao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Proposicaos and only return the `id`
     * const proposicaoWithIdOnly = await prisma.proposicao.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProposicaoUpdateManyAndReturnArgs>(args: SelectSubset<T, ProposicaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposicaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Proposicao.
     * @param {ProposicaoUpsertArgs} args - Arguments to update or create a Proposicao.
     * @example
     * // Update or create a Proposicao
     * const proposicao = await prisma.proposicao.upsert({
     *   create: {
     *     // ... data to create a Proposicao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Proposicao we want to update
     *   }
     * })
     */
    upsert<T extends ProposicaoUpsertArgs>(args: SelectSubset<T, ProposicaoUpsertArgs<ExtArgs>>): Prisma__ProposicaoClient<$Result.GetResult<Prisma.$ProposicaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Proposicaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposicaoCountArgs} args - Arguments to filter Proposicaos to count.
     * @example
     * // Count the number of Proposicaos
     * const count = await prisma.proposicao.count({
     *   where: {
     *     // ... the filter for the Proposicaos we want to count
     *   }
     * })
    **/
    count<T extends ProposicaoCountArgs>(
      args?: Subset<T, ProposicaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProposicaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Proposicao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposicaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProposicaoAggregateArgs>(args: Subset<T, ProposicaoAggregateArgs>): Prisma.PrismaPromise<GetProposicaoAggregateType<T>>

    /**
     * Group by Proposicao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposicaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProposicaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProposicaoGroupByArgs['orderBy'] }
        : { orderBy?: ProposicaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProposicaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProposicaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Proposicao model
   */
  readonly fields: ProposicaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Proposicao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProposicaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Proposicao model
   */
  interface ProposicaoFieldRefs {
    readonly id: FieldRef<"Proposicao", 'Int'>
    readonly uri: FieldRef<"Proposicao", 'String'>
    readonly siglaTipo: FieldRef<"Proposicao", 'String'>
    readonly numero: FieldRef<"Proposicao", 'Int'>
    readonly ano: FieldRef<"Proposicao", 'Int'>
    readonly codTipo: FieldRef<"Proposicao", 'Int'>
    readonly descricaoTipo: FieldRef<"Proposicao", 'String'>
    readonly ementa: FieldRef<"Proposicao", 'String'>
    readonly ementaDetalhada: FieldRef<"Proposicao", 'String'>
    readonly keywords: FieldRef<"Proposicao", 'String'>
    readonly dataApresentacao: FieldRef<"Proposicao", 'DateTime'>
    readonly uriOrgaoNumerador: FieldRef<"Proposicao", 'String'>
    readonly urlInteiroTeor: FieldRef<"Proposicao", 'String'>
    readonly uriPropAnterior: FieldRef<"Proposicao", 'String'>
    readonly uriPropPrincipal: FieldRef<"Proposicao", 'String'>
    readonly uriPropPosterior: FieldRef<"Proposicao", 'String'>
    readonly statusData: FieldRef<"Proposicao", 'DateTime'>
    readonly statusSequencia: FieldRef<"Proposicao", 'String'>
    readonly uriRelator: FieldRef<"Proposicao", 'String'>
    readonly codOrgao: FieldRef<"Proposicao", 'String'>
    readonly siglaOrgao: FieldRef<"Proposicao", 'String'>
    readonly uriOrgao: FieldRef<"Proposicao", 'String'>
    readonly regime: FieldRef<"Proposicao", 'String'>
    readonly descricaoTramitacao: FieldRef<"Proposicao", 'String'>
    readonly idTipoTramitacao: FieldRef<"Proposicao", 'String'>
    readonly descricaoSituacao: FieldRef<"Proposicao", 'String'>
    readonly idSituacao: FieldRef<"Proposicao", 'String'>
    readonly despacho: FieldRef<"Proposicao", 'String'>
    readonly statusApreciacao: FieldRef<"Proposicao", 'String'>
    readonly statusUrl: FieldRef<"Proposicao", 'String'>
    readonly createdAt: FieldRef<"Proposicao", 'DateTime'>
    readonly updatedAt: FieldRef<"Proposicao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Proposicao findUnique
   */
  export type ProposicaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposicao
     */
    select?: ProposicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposicao
     */
    omit?: ProposicaoOmit<ExtArgs> | null
    /**
     * Filter, which Proposicao to fetch.
     */
    where: ProposicaoWhereUniqueInput
  }

  /**
   * Proposicao findUniqueOrThrow
   */
  export type ProposicaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposicao
     */
    select?: ProposicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposicao
     */
    omit?: ProposicaoOmit<ExtArgs> | null
    /**
     * Filter, which Proposicao to fetch.
     */
    where: ProposicaoWhereUniqueInput
  }

  /**
   * Proposicao findFirst
   */
  export type ProposicaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposicao
     */
    select?: ProposicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposicao
     */
    omit?: ProposicaoOmit<ExtArgs> | null
    /**
     * Filter, which Proposicao to fetch.
     */
    where?: ProposicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proposicaos to fetch.
     */
    orderBy?: ProposicaoOrderByWithRelationInput | ProposicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proposicaos.
     */
    cursor?: ProposicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proposicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proposicaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proposicaos.
     */
    distinct?: ProposicaoScalarFieldEnum | ProposicaoScalarFieldEnum[]
  }

  /**
   * Proposicao findFirstOrThrow
   */
  export type ProposicaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposicao
     */
    select?: ProposicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposicao
     */
    omit?: ProposicaoOmit<ExtArgs> | null
    /**
     * Filter, which Proposicao to fetch.
     */
    where?: ProposicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proposicaos to fetch.
     */
    orderBy?: ProposicaoOrderByWithRelationInput | ProposicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proposicaos.
     */
    cursor?: ProposicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proposicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proposicaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proposicaos.
     */
    distinct?: ProposicaoScalarFieldEnum | ProposicaoScalarFieldEnum[]
  }

  /**
   * Proposicao findMany
   */
  export type ProposicaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposicao
     */
    select?: ProposicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposicao
     */
    omit?: ProposicaoOmit<ExtArgs> | null
    /**
     * Filter, which Proposicaos to fetch.
     */
    where?: ProposicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proposicaos to fetch.
     */
    orderBy?: ProposicaoOrderByWithRelationInput | ProposicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Proposicaos.
     */
    cursor?: ProposicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proposicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proposicaos.
     */
    skip?: number
    distinct?: ProposicaoScalarFieldEnum | ProposicaoScalarFieldEnum[]
  }

  /**
   * Proposicao create
   */
  export type ProposicaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposicao
     */
    select?: ProposicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposicao
     */
    omit?: ProposicaoOmit<ExtArgs> | null
    /**
     * The data needed to create a Proposicao.
     */
    data: XOR<ProposicaoCreateInput, ProposicaoUncheckedCreateInput>
  }

  /**
   * Proposicao createMany
   */
  export type ProposicaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Proposicaos.
     */
    data: ProposicaoCreateManyInput | ProposicaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Proposicao createManyAndReturn
   */
  export type ProposicaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposicao
     */
    select?: ProposicaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Proposicao
     */
    omit?: ProposicaoOmit<ExtArgs> | null
    /**
     * The data used to create many Proposicaos.
     */
    data: ProposicaoCreateManyInput | ProposicaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Proposicao update
   */
  export type ProposicaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposicao
     */
    select?: ProposicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposicao
     */
    omit?: ProposicaoOmit<ExtArgs> | null
    /**
     * The data needed to update a Proposicao.
     */
    data: XOR<ProposicaoUpdateInput, ProposicaoUncheckedUpdateInput>
    /**
     * Choose, which Proposicao to update.
     */
    where: ProposicaoWhereUniqueInput
  }

  /**
   * Proposicao updateMany
   */
  export type ProposicaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Proposicaos.
     */
    data: XOR<ProposicaoUpdateManyMutationInput, ProposicaoUncheckedUpdateManyInput>
    /**
     * Filter which Proposicaos to update
     */
    where?: ProposicaoWhereInput
    /**
     * Limit how many Proposicaos to update.
     */
    limit?: number
  }

  /**
   * Proposicao updateManyAndReturn
   */
  export type ProposicaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposicao
     */
    select?: ProposicaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Proposicao
     */
    omit?: ProposicaoOmit<ExtArgs> | null
    /**
     * The data used to update Proposicaos.
     */
    data: XOR<ProposicaoUpdateManyMutationInput, ProposicaoUncheckedUpdateManyInput>
    /**
     * Filter which Proposicaos to update
     */
    where?: ProposicaoWhereInput
    /**
     * Limit how many Proposicaos to update.
     */
    limit?: number
  }

  /**
   * Proposicao upsert
   */
  export type ProposicaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposicao
     */
    select?: ProposicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposicao
     */
    omit?: ProposicaoOmit<ExtArgs> | null
    /**
     * The filter to search for the Proposicao to update in case it exists.
     */
    where: ProposicaoWhereUniqueInput
    /**
     * In case the Proposicao found by the `where` argument doesn't exist, create a new Proposicao with this data.
     */
    create: XOR<ProposicaoCreateInput, ProposicaoUncheckedCreateInput>
    /**
     * In case the Proposicao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProposicaoUpdateInput, ProposicaoUncheckedUpdateInput>
  }

  /**
   * Proposicao delete
   */
  export type ProposicaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposicao
     */
    select?: ProposicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposicao
     */
    omit?: ProposicaoOmit<ExtArgs> | null
    /**
     * Filter which Proposicao to delete.
     */
    where: ProposicaoWhereUniqueInput
  }

  /**
   * Proposicao deleteMany
   */
  export type ProposicaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proposicaos to delete
     */
    where?: ProposicaoWhereInput
    /**
     * Limit how many Proposicaos to delete.
     */
    limit?: number
  }

  /**
   * Proposicao without action
   */
  export type ProposicaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposicao
     */
    select?: ProposicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposicao
     */
    omit?: ProposicaoOmit<ExtArgs> | null
  }


  /**
   * Model Denuncia
   */

  export type AggregateDenuncia = {
    _count: DenunciaCountAggregateOutputType | null
    _avg: DenunciaAvgAggregateOutputType | null
    _sum: DenunciaSumAggregateOutputType | null
    _min: DenunciaMinAggregateOutputType | null
    _max: DenunciaMaxAggregateOutputType | null
  }

  export type DenunciaAvgAggregateOutputType = {
    upvotes: number | null
    downvotes: number | null
  }

  export type DenunciaSumAggregateOutputType = {
    upvotes: number | null
    downvotes: number | null
  }

  export type DenunciaMinAggregateOutputType = {
    id: string | null
    userId: string | null
    titulo: string | null
    descricao: string | null
    status: string | null
    upvotes: number | null
    downvotes: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DenunciaMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    titulo: string | null
    descricao: string | null
    status: string | null
    upvotes: number | null
    downvotes: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DenunciaCountAggregateOutputType = {
    id: number
    userId: number
    titulo: number
    descricao: number
    medias: number
    status: number
    tags: number
    upvotes: number
    downvotes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DenunciaAvgAggregateInputType = {
    upvotes?: true
    downvotes?: true
  }

  export type DenunciaSumAggregateInputType = {
    upvotes?: true
    downvotes?: true
  }

  export type DenunciaMinAggregateInputType = {
    id?: true
    userId?: true
    titulo?: true
    descricao?: true
    status?: true
    upvotes?: true
    downvotes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DenunciaMaxAggregateInputType = {
    id?: true
    userId?: true
    titulo?: true
    descricao?: true
    status?: true
    upvotes?: true
    downvotes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DenunciaCountAggregateInputType = {
    id?: true
    userId?: true
    titulo?: true
    descricao?: true
    medias?: true
    status?: true
    tags?: true
    upvotes?: true
    downvotes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DenunciaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Denuncia to aggregate.
     */
    where?: DenunciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Denuncias to fetch.
     */
    orderBy?: DenunciaOrderByWithRelationInput | DenunciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DenunciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Denuncias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Denuncias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Denuncias
    **/
    _count?: true | DenunciaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DenunciaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DenunciaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DenunciaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DenunciaMaxAggregateInputType
  }

  export type GetDenunciaAggregateType<T extends DenunciaAggregateArgs> = {
        [P in keyof T & keyof AggregateDenuncia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDenuncia[P]>
      : GetScalarType<T[P], AggregateDenuncia[P]>
  }




  export type DenunciaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DenunciaWhereInput
    orderBy?: DenunciaOrderByWithAggregationInput | DenunciaOrderByWithAggregationInput[]
    by: DenunciaScalarFieldEnum[] | DenunciaScalarFieldEnum
    having?: DenunciaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DenunciaCountAggregateInputType | true
    _avg?: DenunciaAvgAggregateInputType
    _sum?: DenunciaSumAggregateInputType
    _min?: DenunciaMinAggregateInputType
    _max?: DenunciaMaxAggregateInputType
  }

  export type DenunciaGroupByOutputType = {
    id: string
    userId: string
    titulo: string
    descricao: string | null
    medias: string[]
    status: string
    tags: string[]
    upvotes: number
    downvotes: number
    createdAt: Date
    updatedAt: Date
    _count: DenunciaCountAggregateOutputType | null
    _avg: DenunciaAvgAggregateOutputType | null
    _sum: DenunciaSumAggregateOutputType | null
    _min: DenunciaMinAggregateOutputType | null
    _max: DenunciaMaxAggregateOutputType | null
  }

  type GetDenunciaGroupByPayload<T extends DenunciaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DenunciaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DenunciaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DenunciaGroupByOutputType[P]>
            : GetScalarType<T[P], DenunciaGroupByOutputType[P]>
        }
      >
    >


  export type DenunciaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    titulo?: boolean
    descricao?: boolean
    medias?: boolean
    status?: boolean
    tags?: boolean
    upvotes?: boolean
    downvotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    votos?: boolean | Denuncia$votosArgs<ExtArgs>
    comentarios?: boolean | Denuncia$comentariosArgs<ExtArgs>
    _count?: boolean | DenunciaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["denuncia"]>


  export type DenunciaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    titulo?: boolean
    descricao?: boolean
    medias?: boolean
    status?: boolean
    tags?: boolean
    upvotes?: boolean
    downvotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["denuncia"]>

  export type DenunciaSelectScalar = {
    id?: boolean
    userId?: boolean
    titulo?: boolean
    descricao?: boolean
    medias?: boolean
    status?: boolean
    tags?: boolean
    upvotes?: boolean
    downvotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DenunciaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "titulo" | "descricao" | "medias" | "status" | "tags" | "upvotes" | "downvotes" | "createdAt" | "updatedAt", ExtArgs["result"]["denuncia"]>
  export type DenunciaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    votos?: boolean | Denuncia$votosArgs<ExtArgs>
    comentarios?: boolean | Denuncia$comentariosArgs<ExtArgs>
    _count?: boolean | DenunciaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DenunciaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DenunciaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Denuncia"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      votos: Prisma.$DenunciaVotoPayload<ExtArgs>[]
      comentarios: Prisma.$DenunciaComentarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      titulo: string
      descricao: string | null
      medias: string[]
      status: string
      tags: string[]
      upvotes: number
      downvotes: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["denuncia"]>
    composites: {}
  }

  type DenunciaGetPayload<S extends boolean | null | undefined | DenunciaDefaultArgs> = $Result.GetResult<Prisma.$DenunciaPayload, S>

  type DenunciaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DenunciaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DenunciaCountAggregateInputType | true
    }

  export interface DenunciaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Denuncia'], meta: { name: 'Denuncia' } }
    /**
     * Find zero or one Denuncia that matches the filter.
     * @param {DenunciaFindUniqueArgs} args - Arguments to find a Denuncia
     * @example
     * // Get one Denuncia
     * const denuncia = await prisma.denuncia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DenunciaFindUniqueArgs>(args: SelectSubset<T, DenunciaFindUniqueArgs<ExtArgs>>): Prisma__DenunciaClient<$Result.GetResult<Prisma.$DenunciaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Denuncia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DenunciaFindUniqueOrThrowArgs} args - Arguments to find a Denuncia
     * @example
     * // Get one Denuncia
     * const denuncia = await prisma.denuncia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DenunciaFindUniqueOrThrowArgs>(args: SelectSubset<T, DenunciaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DenunciaClient<$Result.GetResult<Prisma.$DenunciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Denuncia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DenunciaFindFirstArgs} args - Arguments to find a Denuncia
     * @example
     * // Get one Denuncia
     * const denuncia = await prisma.denuncia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DenunciaFindFirstArgs>(args?: SelectSubset<T, DenunciaFindFirstArgs<ExtArgs>>): Prisma__DenunciaClient<$Result.GetResult<Prisma.$DenunciaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Denuncia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DenunciaFindFirstOrThrowArgs} args - Arguments to find a Denuncia
     * @example
     * // Get one Denuncia
     * const denuncia = await prisma.denuncia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DenunciaFindFirstOrThrowArgs>(args?: SelectSubset<T, DenunciaFindFirstOrThrowArgs<ExtArgs>>): Prisma__DenunciaClient<$Result.GetResult<Prisma.$DenunciaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Denuncias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DenunciaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Denuncias
     * const denuncias = await prisma.denuncia.findMany()
     * 
     * // Get first 10 Denuncias
     * const denuncias = await prisma.denuncia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const denunciaWithIdOnly = await prisma.denuncia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DenunciaFindManyArgs>(args?: SelectSubset<T, DenunciaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DenunciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Delete a Denuncia.
     * @param {DenunciaDeleteArgs} args - Arguments to delete one Denuncia.
     * @example
     * // Delete one Denuncia
     * const Denuncia = await prisma.denuncia.delete({
     *   where: {
     *     // ... filter to delete one Denuncia
     *   }
     * })
     * 
     */
    delete<T extends DenunciaDeleteArgs>(args: SelectSubset<T, DenunciaDeleteArgs<ExtArgs>>): Prisma__DenunciaClient<$Result.GetResult<Prisma.$DenunciaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Denuncia.
     * @param {DenunciaUpdateArgs} args - Arguments to update one Denuncia.
     * @example
     * // Update one Denuncia
     * const denuncia = await prisma.denuncia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DenunciaUpdateArgs>(args: SelectSubset<T, DenunciaUpdateArgs<ExtArgs>>): Prisma__DenunciaClient<$Result.GetResult<Prisma.$DenunciaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Denuncias.
     * @param {DenunciaDeleteManyArgs} args - Arguments to filter Denuncias to delete.
     * @example
     * // Delete a few Denuncias
     * const { count } = await prisma.denuncia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DenunciaDeleteManyArgs>(args?: SelectSubset<T, DenunciaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Denuncias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DenunciaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Denuncias
     * const denuncia = await prisma.denuncia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DenunciaUpdateManyArgs>(args: SelectSubset<T, DenunciaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Denuncias and returns the data updated in the database.
     * @param {DenunciaUpdateManyAndReturnArgs} args - Arguments to update many Denuncias.
     * @example
     * // Update many Denuncias
     * const denuncia = await prisma.denuncia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Denuncias and only return the `id`
     * const denunciaWithIdOnly = await prisma.denuncia.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DenunciaUpdateManyAndReturnArgs>(args: SelectSubset<T, DenunciaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DenunciaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>


    /**
     * Count the number of Denuncias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DenunciaCountArgs} args - Arguments to filter Denuncias to count.
     * @example
     * // Count the number of Denuncias
     * const count = await prisma.denuncia.count({
     *   where: {
     *     // ... the filter for the Denuncias we want to count
     *   }
     * })
    **/
    count<T extends DenunciaCountArgs>(
      args?: Subset<T, DenunciaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DenunciaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Denuncia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DenunciaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DenunciaAggregateArgs>(args: Subset<T, DenunciaAggregateArgs>): Prisma.PrismaPromise<GetDenunciaAggregateType<T>>

    /**
     * Group by Denuncia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DenunciaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DenunciaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DenunciaGroupByArgs['orderBy'] }
        : { orderBy?: DenunciaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DenunciaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDenunciaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Denuncia model
   */
  readonly fields: DenunciaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Denuncia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DenunciaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    votos<T extends Denuncia$votosArgs<ExtArgs> = {}>(args?: Subset<T, Denuncia$votosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DenunciaVotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comentarios<T extends Denuncia$comentariosArgs<ExtArgs> = {}>(args?: Subset<T, Denuncia$comentariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DenunciaComentarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Denuncia model
   */
  interface DenunciaFieldRefs {
    readonly id: FieldRef<"Denuncia", 'String'>
    readonly userId: FieldRef<"Denuncia", 'String'>
    readonly titulo: FieldRef<"Denuncia", 'String'>
    readonly descricao: FieldRef<"Denuncia", 'String'>
    readonly medias: FieldRef<"Denuncia", 'String[]'>
    readonly status: FieldRef<"Denuncia", 'String'>
    readonly tags: FieldRef<"Denuncia", 'String[]'>
    readonly upvotes: FieldRef<"Denuncia", 'Int'>
    readonly downvotes: FieldRef<"Denuncia", 'Int'>
    readonly createdAt: FieldRef<"Denuncia", 'DateTime'>
    readonly updatedAt: FieldRef<"Denuncia", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Denuncia findUnique
   */
  export type DenunciaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Denuncia
     */
    select?: DenunciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Denuncia
     */
    omit?: DenunciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DenunciaInclude<ExtArgs> | null
    /**
     * Filter, which Denuncia to fetch.
     */
    where: DenunciaWhereUniqueInput
  }

  /**
   * Denuncia findUniqueOrThrow
   */
  export type DenunciaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Denuncia
     */
    select?: DenunciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Denuncia
     */
    omit?: DenunciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DenunciaInclude<ExtArgs> | null
    /**
     * Filter, which Denuncia to fetch.
     */
    where: DenunciaWhereUniqueInput
  }

  /**
   * Denuncia findFirst
   */
  export type DenunciaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Denuncia
     */
    select?: DenunciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Denuncia
     */
    omit?: DenunciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DenunciaInclude<ExtArgs> | null
    /**
     * Filter, which Denuncia to fetch.
     */
    where?: DenunciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Denuncias to fetch.
     */
    orderBy?: DenunciaOrderByWithRelationInput | DenunciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Denuncias.
     */
    cursor?: DenunciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Denuncias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Denuncias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Denuncias.
     */
    distinct?: DenunciaScalarFieldEnum | DenunciaScalarFieldEnum[]
  }

  /**
   * Denuncia findFirstOrThrow
   */
  export type DenunciaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Denuncia
     */
    select?: DenunciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Denuncia
     */
    omit?: DenunciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DenunciaInclude<ExtArgs> | null
    /**
     * Filter, which Denuncia to fetch.
     */
    where?: DenunciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Denuncias to fetch.
     */
    orderBy?: DenunciaOrderByWithRelationInput | DenunciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Denuncias.
     */
    cursor?: DenunciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Denuncias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Denuncias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Denuncias.
     */
    distinct?: DenunciaScalarFieldEnum | DenunciaScalarFieldEnum[]
  }

  /**
   * Denuncia findMany
   */
  export type DenunciaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Denuncia
     */
    select?: DenunciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Denuncia
     */
    omit?: DenunciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DenunciaInclude<ExtArgs> | null
    /**
     * Filter, which Denuncias to fetch.
     */
    where?: DenunciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Denuncias to fetch.
     */
    orderBy?: DenunciaOrderByWithRelationInput | DenunciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Denuncias.
     */
    cursor?: DenunciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Denuncias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Denuncias.
     */
    skip?: number
    distinct?: DenunciaScalarFieldEnum | DenunciaScalarFieldEnum[]
  }

  /**
   * Denuncia update
   */
  export type DenunciaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Denuncia
     */
    select?: DenunciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Denuncia
     */
    omit?: DenunciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DenunciaInclude<ExtArgs> | null
    /**
     * The data needed to update a Denuncia.
     */
    data: XOR<DenunciaUpdateInput, DenunciaUncheckedUpdateInput>
    /**
     * Choose, which Denuncia to update.
     */
    where: DenunciaWhereUniqueInput
  }

  /**
   * Denuncia updateMany
   */
  export type DenunciaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Denuncias.
     */
    data: XOR<DenunciaUpdateManyMutationInput, DenunciaUncheckedUpdateManyInput>
    /**
     * Filter which Denuncias to update
     */
    where?: DenunciaWhereInput
    /**
     * Limit how many Denuncias to update.
     */
    limit?: number
  }

  /**
   * Denuncia updateManyAndReturn
   */
  export type DenunciaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Denuncia
     */
    select?: DenunciaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Denuncia
     */
    omit?: DenunciaOmit<ExtArgs> | null
    /**
     * The data used to update Denuncias.
     */
    data: XOR<DenunciaUpdateManyMutationInput, DenunciaUncheckedUpdateManyInput>
    /**
     * Filter which Denuncias to update
     */
    where?: DenunciaWhereInput
    /**
     * Limit how many Denuncias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DenunciaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Denuncia delete
   */
  export type DenunciaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Denuncia
     */
    select?: DenunciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Denuncia
     */
    omit?: DenunciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DenunciaInclude<ExtArgs> | null
    /**
     * Filter which Denuncia to delete.
     */
    where: DenunciaWhereUniqueInput
  }

  /**
   * Denuncia deleteMany
   */
  export type DenunciaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Denuncias to delete
     */
    where?: DenunciaWhereInput
    /**
     * Limit how many Denuncias to delete.
     */
    limit?: number
  }

  /**
   * Denuncia.votos
   */
  export type Denuncia$votosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DenunciaVoto
     */
    select?: DenunciaVotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DenunciaVoto
     */
    omit?: DenunciaVotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DenunciaVotoInclude<ExtArgs> | null
    where?: DenunciaVotoWhereInput
    orderBy?: DenunciaVotoOrderByWithRelationInput | DenunciaVotoOrderByWithRelationInput[]
    cursor?: DenunciaVotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DenunciaVotoScalarFieldEnum | DenunciaVotoScalarFieldEnum[]
  }

  /**
   * Denuncia.comentarios
   */
  export type Denuncia$comentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DenunciaComentario
     */
    select?: DenunciaComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DenunciaComentario
     */
    omit?: DenunciaComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DenunciaComentarioInclude<ExtArgs> | null
    where?: DenunciaComentarioWhereInput
    orderBy?: DenunciaComentarioOrderByWithRelationInput | DenunciaComentarioOrderByWithRelationInput[]
    cursor?: DenunciaComentarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DenunciaComentarioScalarFieldEnum | DenunciaComentarioScalarFieldEnum[]
  }

  /**
   * Denuncia without action
   */
  export type DenunciaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Denuncia
     */
    select?: DenunciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Denuncia
     */
    omit?: DenunciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DenunciaInclude<ExtArgs> | null
  }


  /**
   * Model DenunciaVoto
   */

  export type AggregateDenunciaVoto = {
    _count: DenunciaVotoCountAggregateOutputType | null
    _avg: DenunciaVotoAvgAggregateOutputType | null
    _sum: DenunciaVotoSumAggregateOutputType | null
    _min: DenunciaVotoMinAggregateOutputType | null
    _max: DenunciaVotoMaxAggregateOutputType | null
  }

  export type DenunciaVotoAvgAggregateOutputType = {
    voto: number | null
  }

  export type DenunciaVotoSumAggregateOutputType = {
    voto: number | null
  }

  export type DenunciaVotoMinAggregateOutputType = {
    id: string | null
    denunciaId: string | null
    userId: string | null
    voto: number | null
    createdAt: Date | null
  }

  export type DenunciaVotoMaxAggregateOutputType = {
    id: string | null
    denunciaId: string | null
    userId: string | null
    voto: number | null
    createdAt: Date | null
  }

  export type DenunciaVotoCountAggregateOutputType = {
    id: number
    denunciaId: number
    userId: number
    voto: number
    createdAt: number
    _all: number
  }


  export type DenunciaVotoAvgAggregateInputType = {
    voto?: true
  }

  export type DenunciaVotoSumAggregateInputType = {
    voto?: true
  }

  export type DenunciaVotoMinAggregateInputType = {
    id?: true
    denunciaId?: true
    userId?: true
    voto?: true
    createdAt?: true
  }

  export type DenunciaVotoMaxAggregateInputType = {
    id?: true
    denunciaId?: true
    userId?: true
    voto?: true
    createdAt?: true
  }

  export type DenunciaVotoCountAggregateInputType = {
    id?: true
    denunciaId?: true
    userId?: true
    voto?: true
    createdAt?: true
    _all?: true
  }

  export type DenunciaVotoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DenunciaVoto to aggregate.
     */
    where?: DenunciaVotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DenunciaVotos to fetch.
     */
    orderBy?: DenunciaVotoOrderByWithRelationInput | DenunciaVotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DenunciaVotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DenunciaVotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DenunciaVotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DenunciaVotos
    **/
    _count?: true | DenunciaVotoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DenunciaVotoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DenunciaVotoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DenunciaVotoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DenunciaVotoMaxAggregateInputType
  }

  export type GetDenunciaVotoAggregateType<T extends DenunciaVotoAggregateArgs> = {
        [P in keyof T & keyof AggregateDenunciaVoto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDenunciaVoto[P]>
      : GetScalarType<T[P], AggregateDenunciaVoto[P]>
  }




  export type DenunciaVotoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DenunciaVotoWhereInput
    orderBy?: DenunciaVotoOrderByWithAggregationInput | DenunciaVotoOrderByWithAggregationInput[]
    by: DenunciaVotoScalarFieldEnum[] | DenunciaVotoScalarFieldEnum
    having?: DenunciaVotoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DenunciaVotoCountAggregateInputType | true
    _avg?: DenunciaVotoAvgAggregateInputType
    _sum?: DenunciaVotoSumAggregateInputType
    _min?: DenunciaVotoMinAggregateInputType
    _max?: DenunciaVotoMaxAggregateInputType
  }

  export type DenunciaVotoGroupByOutputType = {
    id: string
    denunciaId: string
    userId: string
    voto: number
    createdAt: Date
    _count: DenunciaVotoCountAggregateOutputType | null
    _avg: DenunciaVotoAvgAggregateOutputType | null
    _sum: DenunciaVotoSumAggregateOutputType | null
    _min: DenunciaVotoMinAggregateOutputType | null
    _max: DenunciaVotoMaxAggregateOutputType | null
  }

  type GetDenunciaVotoGroupByPayload<T extends DenunciaVotoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DenunciaVotoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DenunciaVotoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DenunciaVotoGroupByOutputType[P]>
            : GetScalarType<T[P], DenunciaVotoGroupByOutputType[P]>
        }
      >
    >


  export type DenunciaVotoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    denunciaId?: boolean
    userId?: boolean
    voto?: boolean
    createdAt?: boolean
    denuncia?: boolean | DenunciaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["denunciaVoto"]>

  export type DenunciaVotoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    denunciaId?: boolean
    userId?: boolean
    voto?: boolean
    createdAt?: boolean
    denuncia?: boolean | DenunciaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["denunciaVoto"]>

  export type DenunciaVotoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    denunciaId?: boolean
    userId?: boolean
    voto?: boolean
    createdAt?: boolean
    denuncia?: boolean | DenunciaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["denunciaVoto"]>

  export type DenunciaVotoSelectScalar = {
    id?: boolean
    denunciaId?: boolean
    userId?: boolean
    voto?: boolean
    createdAt?: boolean
  }

  export type DenunciaVotoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "denunciaId" | "userId" | "voto" | "createdAt", ExtArgs["result"]["denunciaVoto"]>
  export type DenunciaVotoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    denuncia?: boolean | DenunciaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DenunciaVotoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    denuncia?: boolean | DenunciaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DenunciaVotoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    denuncia?: boolean | DenunciaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DenunciaVotoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DenunciaVoto"
    objects: {
      denuncia: Prisma.$DenunciaPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      denunciaId: string
      userId: string
      voto: number
      createdAt: Date
    }, ExtArgs["result"]["denunciaVoto"]>
    composites: {}
  }

  type DenunciaVotoGetPayload<S extends boolean | null | undefined | DenunciaVotoDefaultArgs> = $Result.GetResult<Prisma.$DenunciaVotoPayload, S>

  type DenunciaVotoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DenunciaVotoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DenunciaVotoCountAggregateInputType | true
    }

  export interface DenunciaVotoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DenunciaVoto'], meta: { name: 'DenunciaVoto' } }
    /**
     * Find zero or one DenunciaVoto that matches the filter.
     * @param {DenunciaVotoFindUniqueArgs} args - Arguments to find a DenunciaVoto
     * @example
     * // Get one DenunciaVoto
     * const denunciaVoto = await prisma.denunciaVoto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DenunciaVotoFindUniqueArgs>(args: SelectSubset<T, DenunciaVotoFindUniqueArgs<ExtArgs>>): Prisma__DenunciaVotoClient<$Result.GetResult<Prisma.$DenunciaVotoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DenunciaVoto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DenunciaVotoFindUniqueOrThrowArgs} args - Arguments to find a DenunciaVoto
     * @example
     * // Get one DenunciaVoto
     * const denunciaVoto = await prisma.denunciaVoto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DenunciaVotoFindUniqueOrThrowArgs>(args: SelectSubset<T, DenunciaVotoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DenunciaVotoClient<$Result.GetResult<Prisma.$DenunciaVotoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DenunciaVoto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DenunciaVotoFindFirstArgs} args - Arguments to find a DenunciaVoto
     * @example
     * // Get one DenunciaVoto
     * const denunciaVoto = await prisma.denunciaVoto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DenunciaVotoFindFirstArgs>(args?: SelectSubset<T, DenunciaVotoFindFirstArgs<ExtArgs>>): Prisma__DenunciaVotoClient<$Result.GetResult<Prisma.$DenunciaVotoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DenunciaVoto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DenunciaVotoFindFirstOrThrowArgs} args - Arguments to find a DenunciaVoto
     * @example
     * // Get one DenunciaVoto
     * const denunciaVoto = await prisma.denunciaVoto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DenunciaVotoFindFirstOrThrowArgs>(args?: SelectSubset<T, DenunciaVotoFindFirstOrThrowArgs<ExtArgs>>): Prisma__DenunciaVotoClient<$Result.GetResult<Prisma.$DenunciaVotoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DenunciaVotos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DenunciaVotoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DenunciaVotos
     * const denunciaVotos = await prisma.denunciaVoto.findMany()
     * 
     * // Get first 10 DenunciaVotos
     * const denunciaVotos = await prisma.denunciaVoto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const denunciaVotoWithIdOnly = await prisma.denunciaVoto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DenunciaVotoFindManyArgs>(args?: SelectSubset<T, DenunciaVotoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DenunciaVotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DenunciaVoto.
     * @param {DenunciaVotoCreateArgs} args - Arguments to create a DenunciaVoto.
     * @example
     * // Create one DenunciaVoto
     * const DenunciaVoto = await prisma.denunciaVoto.create({
     *   data: {
     *     // ... data to create a DenunciaVoto
     *   }
     * })
     * 
     */
    create<T extends DenunciaVotoCreateArgs>(args: SelectSubset<T, DenunciaVotoCreateArgs<ExtArgs>>): Prisma__DenunciaVotoClient<$Result.GetResult<Prisma.$DenunciaVotoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DenunciaVotos.
     * @param {DenunciaVotoCreateManyArgs} args - Arguments to create many DenunciaVotos.
     * @example
     * // Create many DenunciaVotos
     * const denunciaVoto = await prisma.denunciaVoto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DenunciaVotoCreateManyArgs>(args?: SelectSubset<T, DenunciaVotoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DenunciaVotos and returns the data saved in the database.
     * @param {DenunciaVotoCreateManyAndReturnArgs} args - Arguments to create many DenunciaVotos.
     * @example
     * // Create many DenunciaVotos
     * const denunciaVoto = await prisma.denunciaVoto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DenunciaVotos and only return the `id`
     * const denunciaVotoWithIdOnly = await prisma.denunciaVoto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DenunciaVotoCreateManyAndReturnArgs>(args?: SelectSubset<T, DenunciaVotoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DenunciaVotoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DenunciaVoto.
     * @param {DenunciaVotoDeleteArgs} args - Arguments to delete one DenunciaVoto.
     * @example
     * // Delete one DenunciaVoto
     * const DenunciaVoto = await prisma.denunciaVoto.delete({
     *   where: {
     *     // ... filter to delete one DenunciaVoto
     *   }
     * })
     * 
     */
    delete<T extends DenunciaVotoDeleteArgs>(args: SelectSubset<T, DenunciaVotoDeleteArgs<ExtArgs>>): Prisma__DenunciaVotoClient<$Result.GetResult<Prisma.$DenunciaVotoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DenunciaVoto.
     * @param {DenunciaVotoUpdateArgs} args - Arguments to update one DenunciaVoto.
     * @example
     * // Update one DenunciaVoto
     * const denunciaVoto = await prisma.denunciaVoto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DenunciaVotoUpdateArgs>(args: SelectSubset<T, DenunciaVotoUpdateArgs<ExtArgs>>): Prisma__DenunciaVotoClient<$Result.GetResult<Prisma.$DenunciaVotoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DenunciaVotos.
     * @param {DenunciaVotoDeleteManyArgs} args - Arguments to filter DenunciaVotos to delete.
     * @example
     * // Delete a few DenunciaVotos
     * const { count } = await prisma.denunciaVoto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DenunciaVotoDeleteManyArgs>(args?: SelectSubset<T, DenunciaVotoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DenunciaVotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DenunciaVotoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DenunciaVotos
     * const denunciaVoto = await prisma.denunciaVoto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DenunciaVotoUpdateManyArgs>(args: SelectSubset<T, DenunciaVotoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DenunciaVotos and returns the data updated in the database.
     * @param {DenunciaVotoUpdateManyAndReturnArgs} args - Arguments to update many DenunciaVotos.
     * @example
     * // Update many DenunciaVotos
     * const denunciaVoto = await prisma.denunciaVoto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DenunciaVotos and only return the `id`
     * const denunciaVotoWithIdOnly = await prisma.denunciaVoto.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DenunciaVotoUpdateManyAndReturnArgs>(args: SelectSubset<T, DenunciaVotoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DenunciaVotoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DenunciaVoto.
     * @param {DenunciaVotoUpsertArgs} args - Arguments to update or create a DenunciaVoto.
     * @example
     * // Update or create a DenunciaVoto
     * const denunciaVoto = await prisma.denunciaVoto.upsert({
     *   create: {
     *     // ... data to create a DenunciaVoto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DenunciaVoto we want to update
     *   }
     * })
     */
    upsert<T extends DenunciaVotoUpsertArgs>(args: SelectSubset<T, DenunciaVotoUpsertArgs<ExtArgs>>): Prisma__DenunciaVotoClient<$Result.GetResult<Prisma.$DenunciaVotoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DenunciaVotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DenunciaVotoCountArgs} args - Arguments to filter DenunciaVotos to count.
     * @example
     * // Count the number of DenunciaVotos
     * const count = await prisma.denunciaVoto.count({
     *   where: {
     *     // ... the filter for the DenunciaVotos we want to count
     *   }
     * })
    **/
    count<T extends DenunciaVotoCountArgs>(
      args?: Subset<T, DenunciaVotoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DenunciaVotoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DenunciaVoto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DenunciaVotoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DenunciaVotoAggregateArgs>(args: Subset<T, DenunciaVotoAggregateArgs>): Prisma.PrismaPromise<GetDenunciaVotoAggregateType<T>>

    /**
     * Group by DenunciaVoto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DenunciaVotoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DenunciaVotoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DenunciaVotoGroupByArgs['orderBy'] }
        : { orderBy?: DenunciaVotoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DenunciaVotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDenunciaVotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DenunciaVoto model
   */
  readonly fields: DenunciaVotoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DenunciaVoto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DenunciaVotoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    denuncia<T extends DenunciaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DenunciaDefaultArgs<ExtArgs>>): Prisma__DenunciaClient<$Result.GetResult<Prisma.$DenunciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DenunciaVoto model
   */
  interface DenunciaVotoFieldRefs {
    readonly id: FieldRef<"DenunciaVoto", 'String'>
    readonly denunciaId: FieldRef<"DenunciaVoto", 'String'>
    readonly userId: FieldRef<"DenunciaVoto", 'String'>
    readonly voto: FieldRef<"DenunciaVoto", 'Int'>
    readonly createdAt: FieldRef<"DenunciaVoto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DenunciaVoto findUnique
   */
  export type DenunciaVotoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DenunciaVoto
     */
    select?: DenunciaVotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DenunciaVoto
     */
    omit?: DenunciaVotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DenunciaVotoInclude<ExtArgs> | null
    /**
     * Filter, which DenunciaVoto to fetch.
     */
    where: DenunciaVotoWhereUniqueInput
  }

  /**
   * DenunciaVoto findUniqueOrThrow
   */
  export type DenunciaVotoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DenunciaVoto
     */
    select?: DenunciaVotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DenunciaVoto
     */
    omit?: DenunciaVotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DenunciaVotoInclude<ExtArgs> | null
    /**
     * Filter, which DenunciaVoto to fetch.
     */
    where: DenunciaVotoWhereUniqueInput
  }

  /**
   * DenunciaVoto findFirst
   */
  export type DenunciaVotoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DenunciaVoto
     */
    select?: DenunciaVotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DenunciaVoto
     */
    omit?: DenunciaVotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DenunciaVotoInclude<ExtArgs> | null
    /**
     * Filter, which DenunciaVoto to fetch.
     */
    where?: DenunciaVotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DenunciaVotos to fetch.
     */
    orderBy?: DenunciaVotoOrderByWithRelationInput | DenunciaVotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DenunciaVotos.
     */
    cursor?: DenunciaVotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DenunciaVotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DenunciaVotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DenunciaVotos.
     */
    distinct?: DenunciaVotoScalarFieldEnum | DenunciaVotoScalarFieldEnum[]
  }

  /**
   * DenunciaVoto findFirstOrThrow
   */
  export type DenunciaVotoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DenunciaVoto
     */
    select?: DenunciaVotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DenunciaVoto
     */
    omit?: DenunciaVotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DenunciaVotoInclude<ExtArgs> | null
    /**
     * Filter, which DenunciaVoto to fetch.
     */
    where?: DenunciaVotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DenunciaVotos to fetch.
     */
    orderBy?: DenunciaVotoOrderByWithRelationInput | DenunciaVotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DenunciaVotos.
     */
    cursor?: DenunciaVotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DenunciaVotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DenunciaVotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DenunciaVotos.
     */
    distinct?: DenunciaVotoScalarFieldEnum | DenunciaVotoScalarFieldEnum[]
  }

  /**
   * DenunciaVoto findMany
   */
  export type DenunciaVotoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DenunciaVoto
     */
    select?: DenunciaVotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DenunciaVoto
     */
    omit?: DenunciaVotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DenunciaVotoInclude<ExtArgs> | null
    /**
     * Filter, which DenunciaVotos to fetch.
     */
    where?: DenunciaVotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DenunciaVotos to fetch.
     */
    orderBy?: DenunciaVotoOrderByWithRelationInput | DenunciaVotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DenunciaVotos.
     */
    cursor?: DenunciaVotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DenunciaVotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DenunciaVotos.
     */
    skip?: number
    distinct?: DenunciaVotoScalarFieldEnum | DenunciaVotoScalarFieldEnum[]
  }

  /**
   * DenunciaVoto create
   */
  export type DenunciaVotoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DenunciaVoto
     */
    select?: DenunciaVotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DenunciaVoto
     */
    omit?: DenunciaVotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DenunciaVotoInclude<ExtArgs> | null
    /**
     * The data needed to create a DenunciaVoto.
     */
    data: XOR<DenunciaVotoCreateInput, DenunciaVotoUncheckedCreateInput>
  }

  /**
   * DenunciaVoto createMany
   */
  export type DenunciaVotoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DenunciaVotos.
     */
    data: DenunciaVotoCreateManyInput | DenunciaVotoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DenunciaVoto createManyAndReturn
   */
  export type DenunciaVotoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DenunciaVoto
     */
    select?: DenunciaVotoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DenunciaVoto
     */
    omit?: DenunciaVotoOmit<ExtArgs> | null
    /**
     * The data used to create many DenunciaVotos.
     */
    data: DenunciaVotoCreateManyInput | DenunciaVotoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DenunciaVotoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DenunciaVoto update
   */
  export type DenunciaVotoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DenunciaVoto
     */
    select?: DenunciaVotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DenunciaVoto
     */
    omit?: DenunciaVotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DenunciaVotoInclude<ExtArgs> | null
    /**
     * The data needed to update a DenunciaVoto.
     */
    data: XOR<DenunciaVotoUpdateInput, DenunciaVotoUncheckedUpdateInput>
    /**
     * Choose, which DenunciaVoto to update.
     */
    where: DenunciaVotoWhereUniqueInput
  }

  /**
   * DenunciaVoto updateMany
   */
  export type DenunciaVotoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DenunciaVotos.
     */
    data: XOR<DenunciaVotoUpdateManyMutationInput, DenunciaVotoUncheckedUpdateManyInput>
    /**
     * Filter which DenunciaVotos to update
     */
    where?: DenunciaVotoWhereInput
    /**
     * Limit how many DenunciaVotos to update.
     */
    limit?: number
  }

  /**
   * DenunciaVoto updateManyAndReturn
   */
  export type DenunciaVotoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DenunciaVoto
     */
    select?: DenunciaVotoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DenunciaVoto
     */
    omit?: DenunciaVotoOmit<ExtArgs> | null
    /**
     * The data used to update DenunciaVotos.
     */
    data: XOR<DenunciaVotoUpdateManyMutationInput, DenunciaVotoUncheckedUpdateManyInput>
    /**
     * Filter which DenunciaVotos to update
     */
    where?: DenunciaVotoWhereInput
    /**
     * Limit how many DenunciaVotos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DenunciaVotoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DenunciaVoto upsert
   */
  export type DenunciaVotoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DenunciaVoto
     */
    select?: DenunciaVotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DenunciaVoto
     */
    omit?: DenunciaVotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DenunciaVotoInclude<ExtArgs> | null
    /**
     * The filter to search for the DenunciaVoto to update in case it exists.
     */
    where: DenunciaVotoWhereUniqueInput
    /**
     * In case the DenunciaVoto found by the `where` argument doesn't exist, create a new DenunciaVoto with this data.
     */
    create: XOR<DenunciaVotoCreateInput, DenunciaVotoUncheckedCreateInput>
    /**
     * In case the DenunciaVoto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DenunciaVotoUpdateInput, DenunciaVotoUncheckedUpdateInput>
  }

  /**
   * DenunciaVoto delete
   */
  export type DenunciaVotoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DenunciaVoto
     */
    select?: DenunciaVotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DenunciaVoto
     */
    omit?: DenunciaVotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DenunciaVotoInclude<ExtArgs> | null
    /**
     * Filter which DenunciaVoto to delete.
     */
    where: DenunciaVotoWhereUniqueInput
  }

  /**
   * DenunciaVoto deleteMany
   */
  export type DenunciaVotoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DenunciaVotos to delete
     */
    where?: DenunciaVotoWhereInput
    /**
     * Limit how many DenunciaVotos to delete.
     */
    limit?: number
  }

  /**
   * DenunciaVoto without action
   */
  export type DenunciaVotoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DenunciaVoto
     */
    select?: DenunciaVotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DenunciaVoto
     */
    omit?: DenunciaVotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DenunciaVotoInclude<ExtArgs> | null
  }


  /**
   * Model DenunciaComentario
   */

  export type AggregateDenunciaComentario = {
    _count: DenunciaComentarioCountAggregateOutputType | null
    _min: DenunciaComentarioMinAggregateOutputType | null
    _max: DenunciaComentarioMaxAggregateOutputType | null
  }

  export type DenunciaComentarioMinAggregateOutputType = {
    id: string | null
    denunciaId: string | null
    userId: string | null
    texto: string | null
    createdAt: Date | null
  }

  export type DenunciaComentarioMaxAggregateOutputType = {
    id: string | null
    denunciaId: string | null
    userId: string | null
    texto: string | null
    createdAt: Date | null
  }

  export type DenunciaComentarioCountAggregateOutputType = {
    id: number
    denunciaId: number
    userId: number
    texto: number
    medias: number
    createdAt: number
    _all: number
  }


  export type DenunciaComentarioMinAggregateInputType = {
    id?: true
    denunciaId?: true
    userId?: true
    texto?: true
    createdAt?: true
  }

  export type DenunciaComentarioMaxAggregateInputType = {
    id?: true
    denunciaId?: true
    userId?: true
    texto?: true
    createdAt?: true
  }

  export type DenunciaComentarioCountAggregateInputType = {
    id?: true
    denunciaId?: true
    userId?: true
    texto?: true
    medias?: true
    createdAt?: true
    _all?: true
  }

  export type DenunciaComentarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DenunciaComentario to aggregate.
     */
    where?: DenunciaComentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DenunciaComentarios to fetch.
     */
    orderBy?: DenunciaComentarioOrderByWithRelationInput | DenunciaComentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DenunciaComentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DenunciaComentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DenunciaComentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DenunciaComentarios
    **/
    _count?: true | DenunciaComentarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DenunciaComentarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DenunciaComentarioMaxAggregateInputType
  }

  export type GetDenunciaComentarioAggregateType<T extends DenunciaComentarioAggregateArgs> = {
        [P in keyof T & keyof AggregateDenunciaComentario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDenunciaComentario[P]>
      : GetScalarType<T[P], AggregateDenunciaComentario[P]>
  }




  export type DenunciaComentarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DenunciaComentarioWhereInput
    orderBy?: DenunciaComentarioOrderByWithAggregationInput | DenunciaComentarioOrderByWithAggregationInput[]
    by: DenunciaComentarioScalarFieldEnum[] | DenunciaComentarioScalarFieldEnum
    having?: DenunciaComentarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DenunciaComentarioCountAggregateInputType | true
    _min?: DenunciaComentarioMinAggregateInputType
    _max?: DenunciaComentarioMaxAggregateInputType
  }

  export type DenunciaComentarioGroupByOutputType = {
    id: string
    denunciaId: string
    userId: string
    texto: string
    medias: string[]
    createdAt: Date
    _count: DenunciaComentarioCountAggregateOutputType | null
    _min: DenunciaComentarioMinAggregateOutputType | null
    _max: DenunciaComentarioMaxAggregateOutputType | null
  }

  type GetDenunciaComentarioGroupByPayload<T extends DenunciaComentarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DenunciaComentarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DenunciaComentarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DenunciaComentarioGroupByOutputType[P]>
            : GetScalarType<T[P], DenunciaComentarioGroupByOutputType[P]>
        }
      >
    >


  export type DenunciaComentarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    denunciaId?: boolean
    userId?: boolean
    texto?: boolean
    medias?: boolean
    createdAt?: boolean
    denuncia?: boolean | DenunciaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["denunciaComentario"]>

  export type DenunciaComentarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    denunciaId?: boolean
    userId?: boolean
    texto?: boolean
    medias?: boolean
    createdAt?: boolean
    denuncia?: boolean | DenunciaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["denunciaComentario"]>

  export type DenunciaComentarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    denunciaId?: boolean
    userId?: boolean
    texto?: boolean
    medias?: boolean
    createdAt?: boolean
    denuncia?: boolean | DenunciaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["denunciaComentario"]>

  export type DenunciaComentarioSelectScalar = {
    id?: boolean
    denunciaId?: boolean
    userId?: boolean
    texto?: boolean
    medias?: boolean
    createdAt?: boolean
  }

  export type DenunciaComentarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "denunciaId" | "userId" | "texto" | "medias" | "createdAt", ExtArgs["result"]["denunciaComentario"]>
  export type DenunciaComentarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    denuncia?: boolean | DenunciaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DenunciaComentarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    denuncia?: boolean | DenunciaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DenunciaComentarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    denuncia?: boolean | DenunciaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DenunciaComentarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DenunciaComentario"
    objects: {
      denuncia: Prisma.$DenunciaPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      denunciaId: string
      userId: string
      texto: string
      medias: string[]
      createdAt: Date
    }, ExtArgs["result"]["denunciaComentario"]>
    composites: {}
  }

  type DenunciaComentarioGetPayload<S extends boolean | null | undefined | DenunciaComentarioDefaultArgs> = $Result.GetResult<Prisma.$DenunciaComentarioPayload, S>

  type DenunciaComentarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DenunciaComentarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DenunciaComentarioCountAggregateInputType | true
    }

  export interface DenunciaComentarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DenunciaComentario'], meta: { name: 'DenunciaComentario' } }
    /**
     * Find zero or one DenunciaComentario that matches the filter.
     * @param {DenunciaComentarioFindUniqueArgs} args - Arguments to find a DenunciaComentario
     * @example
     * // Get one DenunciaComentario
     * const denunciaComentario = await prisma.denunciaComentario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DenunciaComentarioFindUniqueArgs>(args: SelectSubset<T, DenunciaComentarioFindUniqueArgs<ExtArgs>>): Prisma__DenunciaComentarioClient<$Result.GetResult<Prisma.$DenunciaComentarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DenunciaComentario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DenunciaComentarioFindUniqueOrThrowArgs} args - Arguments to find a DenunciaComentario
     * @example
     * // Get one DenunciaComentario
     * const denunciaComentario = await prisma.denunciaComentario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DenunciaComentarioFindUniqueOrThrowArgs>(args: SelectSubset<T, DenunciaComentarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DenunciaComentarioClient<$Result.GetResult<Prisma.$DenunciaComentarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DenunciaComentario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DenunciaComentarioFindFirstArgs} args - Arguments to find a DenunciaComentario
     * @example
     * // Get one DenunciaComentario
     * const denunciaComentario = await prisma.denunciaComentario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DenunciaComentarioFindFirstArgs>(args?: SelectSubset<T, DenunciaComentarioFindFirstArgs<ExtArgs>>): Prisma__DenunciaComentarioClient<$Result.GetResult<Prisma.$DenunciaComentarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DenunciaComentario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DenunciaComentarioFindFirstOrThrowArgs} args - Arguments to find a DenunciaComentario
     * @example
     * // Get one DenunciaComentario
     * const denunciaComentario = await prisma.denunciaComentario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DenunciaComentarioFindFirstOrThrowArgs>(args?: SelectSubset<T, DenunciaComentarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__DenunciaComentarioClient<$Result.GetResult<Prisma.$DenunciaComentarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DenunciaComentarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DenunciaComentarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DenunciaComentarios
     * const denunciaComentarios = await prisma.denunciaComentario.findMany()
     * 
     * // Get first 10 DenunciaComentarios
     * const denunciaComentarios = await prisma.denunciaComentario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const denunciaComentarioWithIdOnly = await prisma.denunciaComentario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DenunciaComentarioFindManyArgs>(args?: SelectSubset<T, DenunciaComentarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DenunciaComentarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DenunciaComentario.
     * @param {DenunciaComentarioCreateArgs} args - Arguments to create a DenunciaComentario.
     * @example
     * // Create one DenunciaComentario
     * const DenunciaComentario = await prisma.denunciaComentario.create({
     *   data: {
     *     // ... data to create a DenunciaComentario
     *   }
     * })
     * 
     */
    create<T extends DenunciaComentarioCreateArgs>(args: SelectSubset<T, DenunciaComentarioCreateArgs<ExtArgs>>): Prisma__DenunciaComentarioClient<$Result.GetResult<Prisma.$DenunciaComentarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DenunciaComentarios.
     * @param {DenunciaComentarioCreateManyArgs} args - Arguments to create many DenunciaComentarios.
     * @example
     * // Create many DenunciaComentarios
     * const denunciaComentario = await prisma.denunciaComentario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DenunciaComentarioCreateManyArgs>(args?: SelectSubset<T, DenunciaComentarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DenunciaComentarios and returns the data saved in the database.
     * @param {DenunciaComentarioCreateManyAndReturnArgs} args - Arguments to create many DenunciaComentarios.
     * @example
     * // Create many DenunciaComentarios
     * const denunciaComentario = await prisma.denunciaComentario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DenunciaComentarios and only return the `id`
     * const denunciaComentarioWithIdOnly = await prisma.denunciaComentario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DenunciaComentarioCreateManyAndReturnArgs>(args?: SelectSubset<T, DenunciaComentarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DenunciaComentarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DenunciaComentario.
     * @param {DenunciaComentarioDeleteArgs} args - Arguments to delete one DenunciaComentario.
     * @example
     * // Delete one DenunciaComentario
     * const DenunciaComentario = await prisma.denunciaComentario.delete({
     *   where: {
     *     // ... filter to delete one DenunciaComentario
     *   }
     * })
     * 
     */
    delete<T extends DenunciaComentarioDeleteArgs>(args: SelectSubset<T, DenunciaComentarioDeleteArgs<ExtArgs>>): Prisma__DenunciaComentarioClient<$Result.GetResult<Prisma.$DenunciaComentarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DenunciaComentario.
     * @param {DenunciaComentarioUpdateArgs} args - Arguments to update one DenunciaComentario.
     * @example
     * // Update one DenunciaComentario
     * const denunciaComentario = await prisma.denunciaComentario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DenunciaComentarioUpdateArgs>(args: SelectSubset<T, DenunciaComentarioUpdateArgs<ExtArgs>>): Prisma__DenunciaComentarioClient<$Result.GetResult<Prisma.$DenunciaComentarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DenunciaComentarios.
     * @param {DenunciaComentarioDeleteManyArgs} args - Arguments to filter DenunciaComentarios to delete.
     * @example
     * // Delete a few DenunciaComentarios
     * const { count } = await prisma.denunciaComentario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DenunciaComentarioDeleteManyArgs>(args?: SelectSubset<T, DenunciaComentarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DenunciaComentarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DenunciaComentarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DenunciaComentarios
     * const denunciaComentario = await prisma.denunciaComentario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DenunciaComentarioUpdateManyArgs>(args: SelectSubset<T, DenunciaComentarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DenunciaComentarios and returns the data updated in the database.
     * @param {DenunciaComentarioUpdateManyAndReturnArgs} args - Arguments to update many DenunciaComentarios.
     * @example
     * // Update many DenunciaComentarios
     * const denunciaComentario = await prisma.denunciaComentario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DenunciaComentarios and only return the `id`
     * const denunciaComentarioWithIdOnly = await prisma.denunciaComentario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DenunciaComentarioUpdateManyAndReturnArgs>(args: SelectSubset<T, DenunciaComentarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DenunciaComentarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DenunciaComentario.
     * @param {DenunciaComentarioUpsertArgs} args - Arguments to update or create a DenunciaComentario.
     * @example
     * // Update or create a DenunciaComentario
     * const denunciaComentario = await prisma.denunciaComentario.upsert({
     *   create: {
     *     // ... data to create a DenunciaComentario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DenunciaComentario we want to update
     *   }
     * })
     */
    upsert<T extends DenunciaComentarioUpsertArgs>(args: SelectSubset<T, DenunciaComentarioUpsertArgs<ExtArgs>>): Prisma__DenunciaComentarioClient<$Result.GetResult<Prisma.$DenunciaComentarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DenunciaComentarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DenunciaComentarioCountArgs} args - Arguments to filter DenunciaComentarios to count.
     * @example
     * // Count the number of DenunciaComentarios
     * const count = await prisma.denunciaComentario.count({
     *   where: {
     *     // ... the filter for the DenunciaComentarios we want to count
     *   }
     * })
    **/
    count<T extends DenunciaComentarioCountArgs>(
      args?: Subset<T, DenunciaComentarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DenunciaComentarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DenunciaComentario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DenunciaComentarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DenunciaComentarioAggregateArgs>(args: Subset<T, DenunciaComentarioAggregateArgs>): Prisma.PrismaPromise<GetDenunciaComentarioAggregateType<T>>

    /**
     * Group by DenunciaComentario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DenunciaComentarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DenunciaComentarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DenunciaComentarioGroupByArgs['orderBy'] }
        : { orderBy?: DenunciaComentarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DenunciaComentarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDenunciaComentarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DenunciaComentario model
   */
  readonly fields: DenunciaComentarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DenunciaComentario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DenunciaComentarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    denuncia<T extends DenunciaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DenunciaDefaultArgs<ExtArgs>>): Prisma__DenunciaClient<$Result.GetResult<Prisma.$DenunciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DenunciaComentario model
   */
  interface DenunciaComentarioFieldRefs {
    readonly id: FieldRef<"DenunciaComentario", 'String'>
    readonly denunciaId: FieldRef<"DenunciaComentario", 'String'>
    readonly userId: FieldRef<"DenunciaComentario", 'String'>
    readonly texto: FieldRef<"DenunciaComentario", 'String'>
    readonly medias: FieldRef<"DenunciaComentario", 'String[]'>
    readonly createdAt: FieldRef<"DenunciaComentario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DenunciaComentario findUnique
   */
  export type DenunciaComentarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DenunciaComentario
     */
    select?: DenunciaComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DenunciaComentario
     */
    omit?: DenunciaComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DenunciaComentarioInclude<ExtArgs> | null
    /**
     * Filter, which DenunciaComentario to fetch.
     */
    where: DenunciaComentarioWhereUniqueInput
  }

  /**
   * DenunciaComentario findUniqueOrThrow
   */
  export type DenunciaComentarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DenunciaComentario
     */
    select?: DenunciaComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DenunciaComentario
     */
    omit?: DenunciaComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DenunciaComentarioInclude<ExtArgs> | null
    /**
     * Filter, which DenunciaComentario to fetch.
     */
    where: DenunciaComentarioWhereUniqueInput
  }

  /**
   * DenunciaComentario findFirst
   */
  export type DenunciaComentarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DenunciaComentario
     */
    select?: DenunciaComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DenunciaComentario
     */
    omit?: DenunciaComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DenunciaComentarioInclude<ExtArgs> | null
    /**
     * Filter, which DenunciaComentario to fetch.
     */
    where?: DenunciaComentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DenunciaComentarios to fetch.
     */
    orderBy?: DenunciaComentarioOrderByWithRelationInput | DenunciaComentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DenunciaComentarios.
     */
    cursor?: DenunciaComentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DenunciaComentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DenunciaComentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DenunciaComentarios.
     */
    distinct?: DenunciaComentarioScalarFieldEnum | DenunciaComentarioScalarFieldEnum[]
  }

  /**
   * DenunciaComentario findFirstOrThrow
   */
  export type DenunciaComentarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DenunciaComentario
     */
    select?: DenunciaComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DenunciaComentario
     */
    omit?: DenunciaComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DenunciaComentarioInclude<ExtArgs> | null
    /**
     * Filter, which DenunciaComentario to fetch.
     */
    where?: DenunciaComentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DenunciaComentarios to fetch.
     */
    orderBy?: DenunciaComentarioOrderByWithRelationInput | DenunciaComentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DenunciaComentarios.
     */
    cursor?: DenunciaComentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DenunciaComentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DenunciaComentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DenunciaComentarios.
     */
    distinct?: DenunciaComentarioScalarFieldEnum | DenunciaComentarioScalarFieldEnum[]
  }

  /**
   * DenunciaComentario findMany
   */
  export type DenunciaComentarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DenunciaComentario
     */
    select?: DenunciaComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DenunciaComentario
     */
    omit?: DenunciaComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DenunciaComentarioInclude<ExtArgs> | null
    /**
     * Filter, which DenunciaComentarios to fetch.
     */
    where?: DenunciaComentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DenunciaComentarios to fetch.
     */
    orderBy?: DenunciaComentarioOrderByWithRelationInput | DenunciaComentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DenunciaComentarios.
     */
    cursor?: DenunciaComentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DenunciaComentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DenunciaComentarios.
     */
    skip?: number
    distinct?: DenunciaComentarioScalarFieldEnum | DenunciaComentarioScalarFieldEnum[]
  }

  /**
   * DenunciaComentario create
   */
  export type DenunciaComentarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DenunciaComentario
     */
    select?: DenunciaComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DenunciaComentario
     */
    omit?: DenunciaComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DenunciaComentarioInclude<ExtArgs> | null
    /**
     * The data needed to create a DenunciaComentario.
     */
    data: XOR<DenunciaComentarioCreateInput, DenunciaComentarioUncheckedCreateInput>
  }

  /**
   * DenunciaComentario createMany
   */
  export type DenunciaComentarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DenunciaComentarios.
     */
    data: DenunciaComentarioCreateManyInput | DenunciaComentarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DenunciaComentario createManyAndReturn
   */
  export type DenunciaComentarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DenunciaComentario
     */
    select?: DenunciaComentarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DenunciaComentario
     */
    omit?: DenunciaComentarioOmit<ExtArgs> | null
    /**
     * The data used to create many DenunciaComentarios.
     */
    data: DenunciaComentarioCreateManyInput | DenunciaComentarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DenunciaComentarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DenunciaComentario update
   */
  export type DenunciaComentarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DenunciaComentario
     */
    select?: DenunciaComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DenunciaComentario
     */
    omit?: DenunciaComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DenunciaComentarioInclude<ExtArgs> | null
    /**
     * The data needed to update a DenunciaComentario.
     */
    data: XOR<DenunciaComentarioUpdateInput, DenunciaComentarioUncheckedUpdateInput>
    /**
     * Choose, which DenunciaComentario to update.
     */
    where: DenunciaComentarioWhereUniqueInput
  }

  /**
   * DenunciaComentario updateMany
   */
  export type DenunciaComentarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DenunciaComentarios.
     */
    data: XOR<DenunciaComentarioUpdateManyMutationInput, DenunciaComentarioUncheckedUpdateManyInput>
    /**
     * Filter which DenunciaComentarios to update
     */
    where?: DenunciaComentarioWhereInput
    /**
     * Limit how many DenunciaComentarios to update.
     */
    limit?: number
  }

  /**
   * DenunciaComentario updateManyAndReturn
   */
  export type DenunciaComentarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DenunciaComentario
     */
    select?: DenunciaComentarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DenunciaComentario
     */
    omit?: DenunciaComentarioOmit<ExtArgs> | null
    /**
     * The data used to update DenunciaComentarios.
     */
    data: XOR<DenunciaComentarioUpdateManyMutationInput, DenunciaComentarioUncheckedUpdateManyInput>
    /**
     * Filter which DenunciaComentarios to update
     */
    where?: DenunciaComentarioWhereInput
    /**
     * Limit how many DenunciaComentarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DenunciaComentarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DenunciaComentario upsert
   */
  export type DenunciaComentarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DenunciaComentario
     */
    select?: DenunciaComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DenunciaComentario
     */
    omit?: DenunciaComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DenunciaComentarioInclude<ExtArgs> | null
    /**
     * The filter to search for the DenunciaComentario to update in case it exists.
     */
    where: DenunciaComentarioWhereUniqueInput
    /**
     * In case the DenunciaComentario found by the `where` argument doesn't exist, create a new DenunciaComentario with this data.
     */
    create: XOR<DenunciaComentarioCreateInput, DenunciaComentarioUncheckedCreateInput>
    /**
     * In case the DenunciaComentario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DenunciaComentarioUpdateInput, DenunciaComentarioUncheckedUpdateInput>
  }

  /**
   * DenunciaComentario delete
   */
  export type DenunciaComentarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DenunciaComentario
     */
    select?: DenunciaComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DenunciaComentario
     */
    omit?: DenunciaComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DenunciaComentarioInclude<ExtArgs> | null
    /**
     * Filter which DenunciaComentario to delete.
     */
    where: DenunciaComentarioWhereUniqueInput
  }

  /**
   * DenunciaComentario deleteMany
   */
  export type DenunciaComentarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DenunciaComentarios to delete
     */
    where?: DenunciaComentarioWhereInput
    /**
     * Limit how many DenunciaComentarios to delete.
     */
    limit?: number
  }

  /**
   * DenunciaComentario without action
   */
  export type DenunciaComentarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DenunciaComentario
     */
    select?: DenunciaComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DenunciaComentario
     */
    omit?: DenunciaComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DenunciaComentarioInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    avatar: 'avatar',
    race: 'race',
    gender: 'gender',
    ageRange: 'ageRange',
    interestTopics: 'interestTopics',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    token: 'token',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    content: 'content',
    userId: 'userId',
    postId: 'postId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    action: 'action',
    entity: 'entity',
    entityId: 'entityId',
    changes: 'changes',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const ProposicaoScalarFieldEnum: {
    id: 'id',
    uri: 'uri',
    siglaTipo: 'siglaTipo',
    numero: 'numero',
    ano: 'ano',
    codTipo: 'codTipo',
    descricaoTipo: 'descricaoTipo',
    ementa: 'ementa',
    ementaDetalhada: 'ementaDetalhada',
    keywords: 'keywords',
    dataApresentacao: 'dataApresentacao',
    uriOrgaoNumerador: 'uriOrgaoNumerador',
    urlInteiroTeor: 'urlInteiroTeor',
    uriPropAnterior: 'uriPropAnterior',
    uriPropPrincipal: 'uriPropPrincipal',
    uriPropPosterior: 'uriPropPosterior',
    statusData: 'statusData',
    statusSequencia: 'statusSequencia',
    uriRelator: 'uriRelator',
    codOrgao: 'codOrgao',
    siglaOrgao: 'siglaOrgao',
    uriOrgao: 'uriOrgao',
    regime: 'regime',
    descricaoTramitacao: 'descricaoTramitacao',
    idTipoTramitacao: 'idTipoTramitacao',
    descricaoSituacao: 'descricaoSituacao',
    idSituacao: 'idSituacao',
    despacho: 'despacho',
    statusApreciacao: 'statusApreciacao',
    statusUrl: 'statusUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProposicaoScalarFieldEnum = (typeof ProposicaoScalarFieldEnum)[keyof typeof ProposicaoScalarFieldEnum]


  export const DenunciaScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    titulo: 'titulo',
    descricao: 'descricao',
    medias: 'medias',
    status: 'status',
    tags: 'tags',
    upvotes: 'upvotes',
    downvotes: 'downvotes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DenunciaScalarFieldEnum = (typeof DenunciaScalarFieldEnum)[keyof typeof DenunciaScalarFieldEnum]


  export const DenunciaVotoScalarFieldEnum: {
    id: 'id',
    denunciaId: 'denunciaId',
    userId: 'userId',
    voto: 'voto',
    createdAt: 'createdAt'
  };

  export type DenunciaVotoScalarFieldEnum = (typeof DenunciaVotoScalarFieldEnum)[keyof typeof DenunciaVotoScalarFieldEnum]


  export const DenunciaComentarioScalarFieldEnum: {
    id: 'id',
    denunciaId: 'denunciaId',
    userId: 'userId',
    texto: 'texto',
    medias: 'medias',
    createdAt: 'createdAt'
  };

  export type DenunciaComentarioScalarFieldEnum = (typeof DenunciaComentarioScalarFieldEnum)[keyof typeof DenunciaComentarioScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    race?: StringNullableFilter<"User"> | string | null
    gender?: StringNullableFilter<"User"> | string | null
    ageRange?: StringNullableFilter<"User"> | string | null
    interestTopics?: StringNullableListFilter<"User">
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    posts?: PostListRelationFilter
    comments?: CommentListRelationFilter
    denuncias?: DenunciaListRelationFilter
    denunciaVotos?: DenunciaVotoListRelationFilter
    denunciaComentarios?: DenunciaComentarioListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    race?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    ageRange?: SortOrderInput | SortOrder
    interestTopics?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    posts?: PostOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    denuncias?: DenunciaOrderByRelationAggregateInput
    denunciaVotos?: DenunciaVotoOrderByRelationAggregateInput
    denunciaComentarios?: DenunciaComentarioOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    race?: StringNullableFilter<"User"> | string | null
    gender?: StringNullableFilter<"User"> | string | null
    ageRange?: StringNullableFilter<"User"> | string | null
    interestTopics?: StringNullableListFilter<"User">
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    posts?: PostListRelationFilter
    comments?: CommentListRelationFilter
    denuncias?: DenunciaListRelationFilter
    denunciaVotos?: DenunciaVotoListRelationFilter
    denunciaComentarios?: DenunciaComentarioListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    race?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    ageRange?: SortOrderInput | SortOrder
    interestTopics?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    race?: StringNullableWithAggregatesFilter<"User"> | string | null
    gender?: StringNullableWithAggregatesFilter<"User"> | string | null
    ageRange?: StringNullableWithAggregatesFilter<"User"> | string | null
    interestTopics?: StringNullableListFilter<"User">
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    token?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    token?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: StringFilter<"Post"> | string
    title?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    userId?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    comments?: CommentListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    comments?: CommentOrderByRelationAggregateInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    title?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    userId?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    comments?: CommentListRelationFilter
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Post"> | string
    title?: StringWithAggregatesFilter<"Post"> | string
    content?: StringWithAggregatesFilter<"Post"> | string
    userId?: StringWithAggregatesFilter<"Post"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    userId?: StringFilter<"Comment"> | string
    postId?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    post?: PostOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    content?: StringFilter<"Comment"> | string
    userId?: StringFilter<"Comment"> | string
    postId?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comment"> | string
    content?: StringWithAggregatesFilter<"Comment"> | string
    userId?: StringWithAggregatesFilter<"Comment"> | string
    postId?: StringWithAggregatesFilter<"Comment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    entity?: StringFilter<"AuditLog"> | string
    entityId?: StringFilter<"AuditLog"> | string
    changes?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    changes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    action?: StringFilter<"AuditLog"> | string
    entity?: StringFilter<"AuditLog"> | string
    entityId?: StringFilter<"AuditLog"> | string
    changes?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    changes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    entity?: StringWithAggregatesFilter<"AuditLog"> | string
    entityId?: StringWithAggregatesFilter<"AuditLog"> | string
    changes?: JsonNullableWithAggregatesFilter<"AuditLog">
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type ProposicaoWhereInput = {
    AND?: ProposicaoWhereInput | ProposicaoWhereInput[]
    OR?: ProposicaoWhereInput[]
    NOT?: ProposicaoWhereInput | ProposicaoWhereInput[]
    id?: IntFilter<"Proposicao"> | number
    uri?: StringFilter<"Proposicao"> | string
    siglaTipo?: StringFilter<"Proposicao"> | string
    numero?: IntFilter<"Proposicao"> | number
    ano?: IntFilter<"Proposicao"> | number
    codTipo?: IntFilter<"Proposicao"> | number
    descricaoTipo?: StringFilter<"Proposicao"> | string
    ementa?: StringFilter<"Proposicao"> | string
    ementaDetalhada?: StringNullableFilter<"Proposicao"> | string | null
    keywords?: StringNullableFilter<"Proposicao"> | string | null
    dataApresentacao?: DateTimeNullableFilter<"Proposicao"> | Date | string | null
    uriOrgaoNumerador?: StringNullableFilter<"Proposicao"> | string | null
    urlInteiroTeor?: StringNullableFilter<"Proposicao"> | string | null
    uriPropAnterior?: StringNullableFilter<"Proposicao"> | string | null
    uriPropPrincipal?: StringNullableFilter<"Proposicao"> | string | null
    uriPropPosterior?: StringNullableFilter<"Proposicao"> | string | null
    statusData?: DateTimeNullableFilter<"Proposicao"> | Date | string | null
    statusSequencia?: StringNullableFilter<"Proposicao"> | string | null
    uriRelator?: StringNullableFilter<"Proposicao"> | string | null
    codOrgao?: StringNullableFilter<"Proposicao"> | string | null
    siglaOrgao?: StringNullableFilter<"Proposicao"> | string | null
    uriOrgao?: StringNullableFilter<"Proposicao"> | string | null
    regime?: StringNullableFilter<"Proposicao"> | string | null
    descricaoTramitacao?: StringNullableFilter<"Proposicao"> | string | null
    idTipoTramitacao?: StringNullableFilter<"Proposicao"> | string | null
    descricaoSituacao?: StringNullableFilter<"Proposicao"> | string | null
    idSituacao?: StringNullableFilter<"Proposicao"> | string | null
    despacho?: StringNullableFilter<"Proposicao"> | string | null
    statusApreciacao?: StringNullableFilter<"Proposicao"> | string | null
    statusUrl?: StringNullableFilter<"Proposicao"> | string | null
    createdAt?: DateTimeFilter<"Proposicao"> | Date | string
    updatedAt?: DateTimeFilter<"Proposicao"> | Date | string
  }

  export type ProposicaoOrderByWithRelationInput = {
    id?: SortOrder
    uri?: SortOrder
    siglaTipo?: SortOrder
    numero?: SortOrder
    ano?: SortOrder
    codTipo?: SortOrder
    descricaoTipo?: SortOrder
    ementa?: SortOrder
    ementaDetalhada?: SortOrderInput | SortOrder
    keywords?: SortOrderInput | SortOrder
    dataApresentacao?: SortOrderInput | SortOrder
    uriOrgaoNumerador?: SortOrderInput | SortOrder
    urlInteiroTeor?: SortOrderInput | SortOrder
    uriPropAnterior?: SortOrderInput | SortOrder
    uriPropPrincipal?: SortOrderInput | SortOrder
    uriPropPosterior?: SortOrderInput | SortOrder
    statusData?: SortOrderInput | SortOrder
    statusSequencia?: SortOrderInput | SortOrder
    uriRelator?: SortOrderInput | SortOrder
    codOrgao?: SortOrderInput | SortOrder
    siglaOrgao?: SortOrderInput | SortOrder
    uriOrgao?: SortOrderInput | SortOrder
    regime?: SortOrderInput | SortOrder
    descricaoTramitacao?: SortOrderInput | SortOrder
    idTipoTramitacao?: SortOrderInput | SortOrder
    descricaoSituacao?: SortOrderInput | SortOrder
    idSituacao?: SortOrderInput | SortOrder
    despacho?: SortOrderInput | SortOrder
    statusApreciacao?: SortOrderInput | SortOrder
    statusUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProposicaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uri?: string
    AND?: ProposicaoWhereInput | ProposicaoWhereInput[]
    OR?: ProposicaoWhereInput[]
    NOT?: ProposicaoWhereInput | ProposicaoWhereInput[]
    siglaTipo?: StringFilter<"Proposicao"> | string
    numero?: IntFilter<"Proposicao"> | number
    ano?: IntFilter<"Proposicao"> | number
    codTipo?: IntFilter<"Proposicao"> | number
    descricaoTipo?: StringFilter<"Proposicao"> | string
    ementa?: StringFilter<"Proposicao"> | string
    ementaDetalhada?: StringNullableFilter<"Proposicao"> | string | null
    keywords?: StringNullableFilter<"Proposicao"> | string | null
    dataApresentacao?: DateTimeNullableFilter<"Proposicao"> | Date | string | null
    uriOrgaoNumerador?: StringNullableFilter<"Proposicao"> | string | null
    urlInteiroTeor?: StringNullableFilter<"Proposicao"> | string | null
    uriPropAnterior?: StringNullableFilter<"Proposicao"> | string | null
    uriPropPrincipal?: StringNullableFilter<"Proposicao"> | string | null
    uriPropPosterior?: StringNullableFilter<"Proposicao"> | string | null
    statusData?: DateTimeNullableFilter<"Proposicao"> | Date | string | null
    statusSequencia?: StringNullableFilter<"Proposicao"> | string | null
    uriRelator?: StringNullableFilter<"Proposicao"> | string | null
    codOrgao?: StringNullableFilter<"Proposicao"> | string | null
    siglaOrgao?: StringNullableFilter<"Proposicao"> | string | null
    uriOrgao?: StringNullableFilter<"Proposicao"> | string | null
    regime?: StringNullableFilter<"Proposicao"> | string | null
    descricaoTramitacao?: StringNullableFilter<"Proposicao"> | string | null
    idTipoTramitacao?: StringNullableFilter<"Proposicao"> | string | null
    descricaoSituacao?: StringNullableFilter<"Proposicao"> | string | null
    idSituacao?: StringNullableFilter<"Proposicao"> | string | null
    despacho?: StringNullableFilter<"Proposicao"> | string | null
    statusApreciacao?: StringNullableFilter<"Proposicao"> | string | null
    statusUrl?: StringNullableFilter<"Proposicao"> | string | null
    createdAt?: DateTimeFilter<"Proposicao"> | Date | string
    updatedAt?: DateTimeFilter<"Proposicao"> | Date | string
  }, "id" | "uri">

  export type ProposicaoOrderByWithAggregationInput = {
    id?: SortOrder
    uri?: SortOrder
    siglaTipo?: SortOrder
    numero?: SortOrder
    ano?: SortOrder
    codTipo?: SortOrder
    descricaoTipo?: SortOrder
    ementa?: SortOrder
    ementaDetalhada?: SortOrderInput | SortOrder
    keywords?: SortOrderInput | SortOrder
    dataApresentacao?: SortOrderInput | SortOrder
    uriOrgaoNumerador?: SortOrderInput | SortOrder
    urlInteiroTeor?: SortOrderInput | SortOrder
    uriPropAnterior?: SortOrderInput | SortOrder
    uriPropPrincipal?: SortOrderInput | SortOrder
    uriPropPosterior?: SortOrderInput | SortOrder
    statusData?: SortOrderInput | SortOrder
    statusSequencia?: SortOrderInput | SortOrder
    uriRelator?: SortOrderInput | SortOrder
    codOrgao?: SortOrderInput | SortOrder
    siglaOrgao?: SortOrderInput | SortOrder
    uriOrgao?: SortOrderInput | SortOrder
    regime?: SortOrderInput | SortOrder
    descricaoTramitacao?: SortOrderInput | SortOrder
    idTipoTramitacao?: SortOrderInput | SortOrder
    descricaoSituacao?: SortOrderInput | SortOrder
    idSituacao?: SortOrderInput | SortOrder
    despacho?: SortOrderInput | SortOrder
    statusApreciacao?: SortOrderInput | SortOrder
    statusUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProposicaoCountOrderByAggregateInput
    _avg?: ProposicaoAvgOrderByAggregateInput
    _max?: ProposicaoMaxOrderByAggregateInput
    _min?: ProposicaoMinOrderByAggregateInput
    _sum?: ProposicaoSumOrderByAggregateInput
  }

  export type ProposicaoScalarWhereWithAggregatesInput = {
    AND?: ProposicaoScalarWhereWithAggregatesInput | ProposicaoScalarWhereWithAggregatesInput[]
    OR?: ProposicaoScalarWhereWithAggregatesInput[]
    NOT?: ProposicaoScalarWhereWithAggregatesInput | ProposicaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Proposicao"> | number
    uri?: StringWithAggregatesFilter<"Proposicao"> | string
    siglaTipo?: StringWithAggregatesFilter<"Proposicao"> | string
    numero?: IntWithAggregatesFilter<"Proposicao"> | number
    ano?: IntWithAggregatesFilter<"Proposicao"> | number
    codTipo?: IntWithAggregatesFilter<"Proposicao"> | number
    descricaoTipo?: StringWithAggregatesFilter<"Proposicao"> | string
    ementa?: StringWithAggregatesFilter<"Proposicao"> | string
    ementaDetalhada?: StringNullableWithAggregatesFilter<"Proposicao"> | string | null
    keywords?: StringNullableWithAggregatesFilter<"Proposicao"> | string | null
    dataApresentacao?: DateTimeNullableWithAggregatesFilter<"Proposicao"> | Date | string | null
    uriOrgaoNumerador?: StringNullableWithAggregatesFilter<"Proposicao"> | string | null
    urlInteiroTeor?: StringNullableWithAggregatesFilter<"Proposicao"> | string | null
    uriPropAnterior?: StringNullableWithAggregatesFilter<"Proposicao"> | string | null
    uriPropPrincipal?: StringNullableWithAggregatesFilter<"Proposicao"> | string | null
    uriPropPosterior?: StringNullableWithAggregatesFilter<"Proposicao"> | string | null
    statusData?: DateTimeNullableWithAggregatesFilter<"Proposicao"> | Date | string | null
    statusSequencia?: StringNullableWithAggregatesFilter<"Proposicao"> | string | null
    uriRelator?: StringNullableWithAggregatesFilter<"Proposicao"> | string | null
    codOrgao?: StringNullableWithAggregatesFilter<"Proposicao"> | string | null
    siglaOrgao?: StringNullableWithAggregatesFilter<"Proposicao"> | string | null
    uriOrgao?: StringNullableWithAggregatesFilter<"Proposicao"> | string | null
    regime?: StringNullableWithAggregatesFilter<"Proposicao"> | string | null
    descricaoTramitacao?: StringNullableWithAggregatesFilter<"Proposicao"> | string | null
    idTipoTramitacao?: StringNullableWithAggregatesFilter<"Proposicao"> | string | null
    descricaoSituacao?: StringNullableWithAggregatesFilter<"Proposicao"> | string | null
    idSituacao?: StringNullableWithAggregatesFilter<"Proposicao"> | string | null
    despacho?: StringNullableWithAggregatesFilter<"Proposicao"> | string | null
    statusApreciacao?: StringNullableWithAggregatesFilter<"Proposicao"> | string | null
    statusUrl?: StringNullableWithAggregatesFilter<"Proposicao"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Proposicao"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Proposicao"> | Date | string
  }

  export type DenunciaWhereInput = {
    AND?: DenunciaWhereInput | DenunciaWhereInput[]
    OR?: DenunciaWhereInput[]
    NOT?: DenunciaWhereInput | DenunciaWhereInput[]
    id?: StringFilter<"Denuncia"> | string
    userId?: StringFilter<"Denuncia"> | string
    titulo?: StringFilter<"Denuncia"> | string
    descricao?: StringNullableFilter<"Denuncia"> | string | null
    medias?: StringNullableListFilter<"Denuncia">
    status?: StringFilter<"Denuncia"> | string
    tags?: StringNullableListFilter<"Denuncia">
    upvotes?: IntFilter<"Denuncia"> | number
    downvotes?: IntFilter<"Denuncia"> | number
    createdAt?: DateTimeFilter<"Denuncia"> | Date | string
    updatedAt?: DateTimeFilter<"Denuncia"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    votos?: DenunciaVotoListRelationFilter
    comentarios?: DenunciaComentarioListRelationFilter
  }

  export type DenunciaOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrderInput | SortOrder
    medias?: SortOrder
    status?: SortOrder
    tags?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    votos?: DenunciaVotoOrderByRelationAggregateInput
    comentarios?: DenunciaComentarioOrderByRelationAggregateInput
  }

  export type DenunciaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DenunciaWhereInput | DenunciaWhereInput[]
    OR?: DenunciaWhereInput[]
    NOT?: DenunciaWhereInput | DenunciaWhereInput[]
    userId?: StringFilter<"Denuncia"> | string
    titulo?: StringFilter<"Denuncia"> | string
    descricao?: StringNullableFilter<"Denuncia"> | string | null
    medias?: StringNullableListFilter<"Denuncia">
    status?: StringFilter<"Denuncia"> | string
    tags?: StringNullableListFilter<"Denuncia">
    upvotes?: IntFilter<"Denuncia"> | number
    downvotes?: IntFilter<"Denuncia"> | number
    createdAt?: DateTimeFilter<"Denuncia"> | Date | string
    updatedAt?: DateTimeFilter<"Denuncia"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    votos?: DenunciaVotoListRelationFilter
    comentarios?: DenunciaComentarioListRelationFilter
  }, "id">

  export type DenunciaOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrderInput | SortOrder
    medias?: SortOrder
    status?: SortOrder
    tags?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DenunciaCountOrderByAggregateInput
    _avg?: DenunciaAvgOrderByAggregateInput
    _max?: DenunciaMaxOrderByAggregateInput
    _min?: DenunciaMinOrderByAggregateInput
    _sum?: DenunciaSumOrderByAggregateInput
  }

  export type DenunciaScalarWhereWithAggregatesInput = {
    AND?: DenunciaScalarWhereWithAggregatesInput | DenunciaScalarWhereWithAggregatesInput[]
    OR?: DenunciaScalarWhereWithAggregatesInput[]
    NOT?: DenunciaScalarWhereWithAggregatesInput | DenunciaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Denuncia"> | string
    userId?: StringWithAggregatesFilter<"Denuncia"> | string
    titulo?: StringWithAggregatesFilter<"Denuncia"> | string
    descricao?: StringNullableWithAggregatesFilter<"Denuncia"> | string | null
    medias?: StringNullableListFilter<"Denuncia">
    status?: StringWithAggregatesFilter<"Denuncia"> | string
    tags?: StringNullableListFilter<"Denuncia">
    upvotes?: IntWithAggregatesFilter<"Denuncia"> | number
    downvotes?: IntWithAggregatesFilter<"Denuncia"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Denuncia"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Denuncia"> | Date | string
  }

  export type DenunciaVotoWhereInput = {
    AND?: DenunciaVotoWhereInput | DenunciaVotoWhereInput[]
    OR?: DenunciaVotoWhereInput[]
    NOT?: DenunciaVotoWhereInput | DenunciaVotoWhereInput[]
    id?: StringFilter<"DenunciaVoto"> | string
    denunciaId?: StringFilter<"DenunciaVoto"> | string
    userId?: StringFilter<"DenunciaVoto"> | string
    voto?: IntFilter<"DenunciaVoto"> | number
    createdAt?: DateTimeFilter<"DenunciaVoto"> | Date | string
    denuncia?: XOR<DenunciaScalarRelationFilter, DenunciaWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DenunciaVotoOrderByWithRelationInput = {
    id?: SortOrder
    denunciaId?: SortOrder
    userId?: SortOrder
    voto?: SortOrder
    createdAt?: SortOrder
    denuncia?: DenunciaOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type DenunciaVotoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    denunciaId_userId?: DenunciaVotoDenunciaIdUserIdCompoundUniqueInput
    AND?: DenunciaVotoWhereInput | DenunciaVotoWhereInput[]
    OR?: DenunciaVotoWhereInput[]
    NOT?: DenunciaVotoWhereInput | DenunciaVotoWhereInput[]
    denunciaId?: StringFilter<"DenunciaVoto"> | string
    userId?: StringFilter<"DenunciaVoto"> | string
    voto?: IntFilter<"DenunciaVoto"> | number
    createdAt?: DateTimeFilter<"DenunciaVoto"> | Date | string
    denuncia?: XOR<DenunciaScalarRelationFilter, DenunciaWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "denunciaId_userId">

  export type DenunciaVotoOrderByWithAggregationInput = {
    id?: SortOrder
    denunciaId?: SortOrder
    userId?: SortOrder
    voto?: SortOrder
    createdAt?: SortOrder
    _count?: DenunciaVotoCountOrderByAggregateInput
    _avg?: DenunciaVotoAvgOrderByAggregateInput
    _max?: DenunciaVotoMaxOrderByAggregateInput
    _min?: DenunciaVotoMinOrderByAggregateInput
    _sum?: DenunciaVotoSumOrderByAggregateInput
  }

  export type DenunciaVotoScalarWhereWithAggregatesInput = {
    AND?: DenunciaVotoScalarWhereWithAggregatesInput | DenunciaVotoScalarWhereWithAggregatesInput[]
    OR?: DenunciaVotoScalarWhereWithAggregatesInput[]
    NOT?: DenunciaVotoScalarWhereWithAggregatesInput | DenunciaVotoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DenunciaVoto"> | string
    denunciaId?: StringWithAggregatesFilter<"DenunciaVoto"> | string
    userId?: StringWithAggregatesFilter<"DenunciaVoto"> | string
    voto?: IntWithAggregatesFilter<"DenunciaVoto"> | number
    createdAt?: DateTimeWithAggregatesFilter<"DenunciaVoto"> | Date | string
  }

  export type DenunciaComentarioWhereInput = {
    AND?: DenunciaComentarioWhereInput | DenunciaComentarioWhereInput[]
    OR?: DenunciaComentarioWhereInput[]
    NOT?: DenunciaComentarioWhereInput | DenunciaComentarioWhereInput[]
    id?: StringFilter<"DenunciaComentario"> | string
    denunciaId?: StringFilter<"DenunciaComentario"> | string
    userId?: StringFilter<"DenunciaComentario"> | string
    texto?: StringFilter<"DenunciaComentario"> | string
    medias?: StringNullableListFilter<"DenunciaComentario">
    createdAt?: DateTimeFilter<"DenunciaComentario"> | Date | string
    denuncia?: XOR<DenunciaScalarRelationFilter, DenunciaWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DenunciaComentarioOrderByWithRelationInput = {
    id?: SortOrder
    denunciaId?: SortOrder
    userId?: SortOrder
    texto?: SortOrder
    medias?: SortOrder
    createdAt?: SortOrder
    denuncia?: DenunciaOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type DenunciaComentarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DenunciaComentarioWhereInput | DenunciaComentarioWhereInput[]
    OR?: DenunciaComentarioWhereInput[]
    NOT?: DenunciaComentarioWhereInput | DenunciaComentarioWhereInput[]
    denunciaId?: StringFilter<"DenunciaComentario"> | string
    userId?: StringFilter<"DenunciaComentario"> | string
    texto?: StringFilter<"DenunciaComentario"> | string
    medias?: StringNullableListFilter<"DenunciaComentario">
    createdAt?: DateTimeFilter<"DenunciaComentario"> | Date | string
    denuncia?: XOR<DenunciaScalarRelationFilter, DenunciaWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type DenunciaComentarioOrderByWithAggregationInput = {
    id?: SortOrder
    denunciaId?: SortOrder
    userId?: SortOrder
    texto?: SortOrder
    medias?: SortOrder
    createdAt?: SortOrder
    _count?: DenunciaComentarioCountOrderByAggregateInput
    _max?: DenunciaComentarioMaxOrderByAggregateInput
    _min?: DenunciaComentarioMinOrderByAggregateInput
  }

  export type DenunciaComentarioScalarWhereWithAggregatesInput = {
    AND?: DenunciaComentarioScalarWhereWithAggregatesInput | DenunciaComentarioScalarWhereWithAggregatesInput[]
    OR?: DenunciaComentarioScalarWhereWithAggregatesInput[]
    NOT?: DenunciaComentarioScalarWhereWithAggregatesInput | DenunciaComentarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DenunciaComentario"> | string
    denunciaId?: StringWithAggregatesFilter<"DenunciaComentario"> | string
    userId?: StringWithAggregatesFilter<"DenunciaComentario"> | string
    texto?: StringWithAggregatesFilter<"DenunciaComentario"> | string
    medias?: StringNullableListFilter<"DenunciaComentario">
    createdAt?: DateTimeWithAggregatesFilter<"DenunciaComentario"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    avatar?: string | null
    race?: string | null
    gender?: string | null
    ageRange?: string | null
    interestTopics?: UserCreateinterestTopicsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    denuncias?: DenunciaCreateNestedManyWithoutUserInput
    denunciaVotos?: DenunciaVotoCreateNestedManyWithoutUserInput
    denunciaComentarios?: DenunciaComentarioCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    avatar?: string | null
    race?: string | null
    gender?: string | null
    ageRange?: string | null
    interestTopics?: UserCreateinterestTopicsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    denuncias?: DenunciaUncheckedCreateNestedManyWithoutUserInput
    denunciaVotos?: DenunciaVotoUncheckedCreateNestedManyWithoutUserInput
    denunciaComentarios?: DenunciaComentarioUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    race?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    ageRange?: NullableStringFieldUpdateOperationsInput | string | null
    interestTopics?: UserUpdateinterestTopicsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    denuncias?: DenunciaUpdateManyWithoutUserNestedInput
    denunciaVotos?: DenunciaVotoUpdateManyWithoutUserNestedInput
    denunciaComentarios?: DenunciaComentarioUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    race?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    ageRange?: NullableStringFieldUpdateOperationsInput | string | null
    interestTopics?: UserUpdateinterestTopicsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    denuncias?: DenunciaUncheckedUpdateManyWithoutUserNestedInput
    denunciaVotos?: DenunciaVotoUncheckedUpdateManyWithoutUserNestedInput
    denunciaComentarios?: DenunciaComentarioUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    avatar?: string | null
    race?: string | null
    gender?: string | null
    ageRange?: string | null
    interestTopics?: UserCreateinterestTopicsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    race?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    ageRange?: NullableStringFieldUpdateOperationsInput | string | null
    interestTopics?: UserUpdateinterestTopicsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    race?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    ageRange?: NullableStringFieldUpdateOperationsInput | string | null
    interestTopics?: UserUpdateinterestTopicsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    userId: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    userId: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPostsInput
    comments?: CommentCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    id?: string
    title: string
    content: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCommentsInput
    post: PostCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    content: string
    userId: string
    postId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyInput = {
    id?: string
    content: string
    userId: string
    postId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    id?: string
    action: string
    entity: string
    entityId: string
    changes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    action: string
    entity: string
    entityId: string
    changes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    changes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    changes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    action: string
    entity: string
    entityId: string
    changes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    changes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    changes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProposicaoCreateInput = {
    id: number
    uri: string
    siglaTipo: string
    numero: number
    ano: number
    codTipo: number
    descricaoTipo: string
    ementa: string
    ementaDetalhada?: string | null
    keywords?: string | null
    dataApresentacao?: Date | string | null
    uriOrgaoNumerador?: string | null
    urlInteiroTeor?: string | null
    uriPropAnterior?: string | null
    uriPropPrincipal?: string | null
    uriPropPosterior?: string | null
    statusData?: Date | string | null
    statusSequencia?: string | null
    uriRelator?: string | null
    codOrgao?: string | null
    siglaOrgao?: string | null
    uriOrgao?: string | null
    regime?: string | null
    descricaoTramitacao?: string | null
    idTipoTramitacao?: string | null
    descricaoSituacao?: string | null
    idSituacao?: string | null
    despacho?: string | null
    statusApreciacao?: string | null
    statusUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProposicaoUncheckedCreateInput = {
    id: number
    uri: string
    siglaTipo: string
    numero: number
    ano: number
    codTipo: number
    descricaoTipo: string
    ementa: string
    ementaDetalhada?: string | null
    keywords?: string | null
    dataApresentacao?: Date | string | null
    uriOrgaoNumerador?: string | null
    urlInteiroTeor?: string | null
    uriPropAnterior?: string | null
    uriPropPrincipal?: string | null
    uriPropPosterior?: string | null
    statusData?: Date | string | null
    statusSequencia?: string | null
    uriRelator?: string | null
    codOrgao?: string | null
    siglaOrgao?: string | null
    uriOrgao?: string | null
    regime?: string | null
    descricaoTramitacao?: string | null
    idTipoTramitacao?: string | null
    descricaoSituacao?: string | null
    idSituacao?: string | null
    despacho?: string | null
    statusApreciacao?: string | null
    statusUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProposicaoUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uri?: StringFieldUpdateOperationsInput | string
    siglaTipo?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    codTipo?: IntFieldUpdateOperationsInput | number
    descricaoTipo?: StringFieldUpdateOperationsInput | string
    ementa?: StringFieldUpdateOperationsInput | string
    ementaDetalhada?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    dataApresentacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    uriOrgaoNumerador?: NullableStringFieldUpdateOperationsInput | string | null
    urlInteiroTeor?: NullableStringFieldUpdateOperationsInput | string | null
    uriPropAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    uriPropPrincipal?: NullableStringFieldUpdateOperationsInput | string | null
    uriPropPosterior?: NullableStringFieldUpdateOperationsInput | string | null
    statusData?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statusSequencia?: NullableStringFieldUpdateOperationsInput | string | null
    uriRelator?: NullableStringFieldUpdateOperationsInput | string | null
    codOrgao?: NullableStringFieldUpdateOperationsInput | string | null
    siglaOrgao?: NullableStringFieldUpdateOperationsInput | string | null
    uriOrgao?: NullableStringFieldUpdateOperationsInput | string | null
    regime?: NullableStringFieldUpdateOperationsInput | string | null
    descricaoTramitacao?: NullableStringFieldUpdateOperationsInput | string | null
    idTipoTramitacao?: NullableStringFieldUpdateOperationsInput | string | null
    descricaoSituacao?: NullableStringFieldUpdateOperationsInput | string | null
    idSituacao?: NullableStringFieldUpdateOperationsInput | string | null
    despacho?: NullableStringFieldUpdateOperationsInput | string | null
    statusApreciacao?: NullableStringFieldUpdateOperationsInput | string | null
    statusUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProposicaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uri?: StringFieldUpdateOperationsInput | string
    siglaTipo?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    codTipo?: IntFieldUpdateOperationsInput | number
    descricaoTipo?: StringFieldUpdateOperationsInput | string
    ementa?: StringFieldUpdateOperationsInput | string
    ementaDetalhada?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    dataApresentacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    uriOrgaoNumerador?: NullableStringFieldUpdateOperationsInput | string | null
    urlInteiroTeor?: NullableStringFieldUpdateOperationsInput | string | null
    uriPropAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    uriPropPrincipal?: NullableStringFieldUpdateOperationsInput | string | null
    uriPropPosterior?: NullableStringFieldUpdateOperationsInput | string | null
    statusData?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statusSequencia?: NullableStringFieldUpdateOperationsInput | string | null
    uriRelator?: NullableStringFieldUpdateOperationsInput | string | null
    codOrgao?: NullableStringFieldUpdateOperationsInput | string | null
    siglaOrgao?: NullableStringFieldUpdateOperationsInput | string | null
    uriOrgao?: NullableStringFieldUpdateOperationsInput | string | null
    regime?: NullableStringFieldUpdateOperationsInput | string | null
    descricaoTramitacao?: NullableStringFieldUpdateOperationsInput | string | null
    idTipoTramitacao?: NullableStringFieldUpdateOperationsInput | string | null
    descricaoSituacao?: NullableStringFieldUpdateOperationsInput | string | null
    idSituacao?: NullableStringFieldUpdateOperationsInput | string | null
    despacho?: NullableStringFieldUpdateOperationsInput | string | null
    statusApreciacao?: NullableStringFieldUpdateOperationsInput | string | null
    statusUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProposicaoCreateManyInput = {
    id: number
    uri: string
    siglaTipo: string
    numero: number
    ano: number
    codTipo: number
    descricaoTipo: string
    ementa: string
    ementaDetalhada?: string | null
    keywords?: string | null
    dataApresentacao?: Date | string | null
    uriOrgaoNumerador?: string | null
    urlInteiroTeor?: string | null
    uriPropAnterior?: string | null
    uriPropPrincipal?: string | null
    uriPropPosterior?: string | null
    statusData?: Date | string | null
    statusSequencia?: string | null
    uriRelator?: string | null
    codOrgao?: string | null
    siglaOrgao?: string | null
    uriOrgao?: string | null
    regime?: string | null
    descricaoTramitacao?: string | null
    idTipoTramitacao?: string | null
    descricaoSituacao?: string | null
    idSituacao?: string | null
    despacho?: string | null
    statusApreciacao?: string | null
    statusUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProposicaoUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    uri?: StringFieldUpdateOperationsInput | string
    siglaTipo?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    codTipo?: IntFieldUpdateOperationsInput | number
    descricaoTipo?: StringFieldUpdateOperationsInput | string
    ementa?: StringFieldUpdateOperationsInput | string
    ementaDetalhada?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    dataApresentacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    uriOrgaoNumerador?: NullableStringFieldUpdateOperationsInput | string | null
    urlInteiroTeor?: NullableStringFieldUpdateOperationsInput | string | null
    uriPropAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    uriPropPrincipal?: NullableStringFieldUpdateOperationsInput | string | null
    uriPropPosterior?: NullableStringFieldUpdateOperationsInput | string | null
    statusData?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statusSequencia?: NullableStringFieldUpdateOperationsInput | string | null
    uriRelator?: NullableStringFieldUpdateOperationsInput | string | null
    codOrgao?: NullableStringFieldUpdateOperationsInput | string | null
    siglaOrgao?: NullableStringFieldUpdateOperationsInput | string | null
    uriOrgao?: NullableStringFieldUpdateOperationsInput | string | null
    regime?: NullableStringFieldUpdateOperationsInput | string | null
    descricaoTramitacao?: NullableStringFieldUpdateOperationsInput | string | null
    idTipoTramitacao?: NullableStringFieldUpdateOperationsInput | string | null
    descricaoSituacao?: NullableStringFieldUpdateOperationsInput | string | null
    idSituacao?: NullableStringFieldUpdateOperationsInput | string | null
    despacho?: NullableStringFieldUpdateOperationsInput | string | null
    statusApreciacao?: NullableStringFieldUpdateOperationsInput | string | null
    statusUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProposicaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uri?: StringFieldUpdateOperationsInput | string
    siglaTipo?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    codTipo?: IntFieldUpdateOperationsInput | number
    descricaoTipo?: StringFieldUpdateOperationsInput | string
    ementa?: StringFieldUpdateOperationsInput | string
    ementaDetalhada?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    dataApresentacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    uriOrgaoNumerador?: NullableStringFieldUpdateOperationsInput | string | null
    urlInteiroTeor?: NullableStringFieldUpdateOperationsInput | string | null
    uriPropAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    uriPropPrincipal?: NullableStringFieldUpdateOperationsInput | string | null
    uriPropPosterior?: NullableStringFieldUpdateOperationsInput | string | null
    statusData?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statusSequencia?: NullableStringFieldUpdateOperationsInput | string | null
    uriRelator?: NullableStringFieldUpdateOperationsInput | string | null
    codOrgao?: NullableStringFieldUpdateOperationsInput | string | null
    siglaOrgao?: NullableStringFieldUpdateOperationsInput | string | null
    uriOrgao?: NullableStringFieldUpdateOperationsInput | string | null
    regime?: NullableStringFieldUpdateOperationsInput | string | null
    descricaoTramitacao?: NullableStringFieldUpdateOperationsInput | string | null
    idTipoTramitacao?: NullableStringFieldUpdateOperationsInput | string | null
    descricaoSituacao?: NullableStringFieldUpdateOperationsInput | string | null
    idSituacao?: NullableStringFieldUpdateOperationsInput | string | null
    despacho?: NullableStringFieldUpdateOperationsInput | string | null
    statusApreciacao?: NullableStringFieldUpdateOperationsInput | string | null
    statusUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DenunciaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    medias?: DenunciaUpdatemediasInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    tags?: DenunciaUpdatetagsInput | string[]
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDenunciasNestedInput
    votos?: DenunciaVotoUpdateManyWithoutDenunciaNestedInput
    comentarios?: DenunciaComentarioUpdateManyWithoutDenunciaNestedInput
  }

  export type DenunciaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    medias?: DenunciaUpdatemediasInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    tags?: DenunciaUpdatetagsInput | string[]
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votos?: DenunciaVotoUncheckedUpdateManyWithoutDenunciaNestedInput
    comentarios?: DenunciaComentarioUncheckedUpdateManyWithoutDenunciaNestedInput
  }

  export type DenunciaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    medias?: DenunciaUpdatemediasInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    tags?: DenunciaUpdatetagsInput | string[]
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DenunciaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    medias?: DenunciaUpdatemediasInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    tags?: DenunciaUpdatetagsInput | string[]
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DenunciaVotoCreateInput = {
    id?: string
    voto: number
    createdAt?: Date | string
    denuncia: DenunciaCreateNestedOneWithoutVotosInput
    user: UserCreateNestedOneWithoutDenunciaVotosInput
  }

  export type DenunciaVotoUncheckedCreateInput = {
    id?: string
    denunciaId: string
    userId: string
    voto: number
    createdAt?: Date | string
  }

  export type DenunciaVotoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    voto?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    denuncia?: DenunciaUpdateOneRequiredWithoutVotosNestedInput
    user?: UserUpdateOneRequiredWithoutDenunciaVotosNestedInput
  }

  export type DenunciaVotoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    denunciaId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    voto?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DenunciaVotoCreateManyInput = {
    id?: string
    denunciaId: string
    userId: string
    voto: number
    createdAt?: Date | string
  }

  export type DenunciaVotoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    voto?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DenunciaVotoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    denunciaId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    voto?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DenunciaComentarioCreateInput = {
    id?: string
    texto: string
    medias?: DenunciaComentarioCreatemediasInput | string[]
    createdAt?: Date | string
    denuncia: DenunciaCreateNestedOneWithoutComentariosInput
    user: UserCreateNestedOneWithoutDenunciaComentariosInput
  }

  export type DenunciaComentarioUncheckedCreateInput = {
    id?: string
    denunciaId: string
    userId: string
    texto: string
    medias?: DenunciaComentarioCreatemediasInput | string[]
    createdAt?: Date | string
  }

  export type DenunciaComentarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    medias?: DenunciaComentarioUpdatemediasInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    denuncia?: DenunciaUpdateOneRequiredWithoutComentariosNestedInput
    user?: UserUpdateOneRequiredWithoutDenunciaComentariosNestedInput
  }

  export type DenunciaComentarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    denunciaId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    medias?: DenunciaComentarioUpdatemediasInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DenunciaComentarioCreateManyInput = {
    id?: string
    denunciaId: string
    userId: string
    texto: string
    medias?: DenunciaComentarioCreatemediasInput | string[]
    createdAt?: Date | string
  }

  export type DenunciaComentarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    medias?: DenunciaComentarioUpdatemediasInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DenunciaComentarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    denunciaId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    medias?: DenunciaComentarioUpdatemediasInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type DenunciaListRelationFilter = {
    every?: DenunciaWhereInput
    some?: DenunciaWhereInput
    none?: DenunciaWhereInput
  }

  export type DenunciaVotoListRelationFilter = {
    every?: DenunciaVotoWhereInput
    some?: DenunciaVotoWhereInput
    none?: DenunciaVotoWhereInput
  }

  export type DenunciaComentarioListRelationFilter = {
    every?: DenunciaComentarioWhereInput
    some?: DenunciaComentarioWhereInput
    none?: DenunciaComentarioWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DenunciaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DenunciaVotoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DenunciaComentarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    race?: SortOrder
    gender?: SortOrder
    ageRange?: SortOrder
    interestTopics?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    race?: SortOrder
    gender?: SortOrder
    ageRange?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    race?: SortOrder
    gender?: SortOrder
    ageRange?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostScalarRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    changes?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ProposicaoCountOrderByAggregateInput = {
    id?: SortOrder
    uri?: SortOrder
    siglaTipo?: SortOrder
    numero?: SortOrder
    ano?: SortOrder
    codTipo?: SortOrder
    descricaoTipo?: SortOrder
    ementa?: SortOrder
    ementaDetalhada?: SortOrder
    keywords?: SortOrder
    dataApresentacao?: SortOrder
    uriOrgaoNumerador?: SortOrder
    urlInteiroTeor?: SortOrder
    uriPropAnterior?: SortOrder
    uriPropPrincipal?: SortOrder
    uriPropPosterior?: SortOrder
    statusData?: SortOrder
    statusSequencia?: SortOrder
    uriRelator?: SortOrder
    codOrgao?: SortOrder
    siglaOrgao?: SortOrder
    uriOrgao?: SortOrder
    regime?: SortOrder
    descricaoTramitacao?: SortOrder
    idTipoTramitacao?: SortOrder
    descricaoSituacao?: SortOrder
    idSituacao?: SortOrder
    despacho?: SortOrder
    statusApreciacao?: SortOrder
    statusUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProposicaoAvgOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    ano?: SortOrder
    codTipo?: SortOrder
  }

  export type ProposicaoMaxOrderByAggregateInput = {
    id?: SortOrder
    uri?: SortOrder
    siglaTipo?: SortOrder
    numero?: SortOrder
    ano?: SortOrder
    codTipo?: SortOrder
    descricaoTipo?: SortOrder
    ementa?: SortOrder
    ementaDetalhada?: SortOrder
    keywords?: SortOrder
    dataApresentacao?: SortOrder
    uriOrgaoNumerador?: SortOrder
    urlInteiroTeor?: SortOrder
    uriPropAnterior?: SortOrder
    uriPropPrincipal?: SortOrder
    uriPropPosterior?: SortOrder
    statusData?: SortOrder
    statusSequencia?: SortOrder
    uriRelator?: SortOrder
    codOrgao?: SortOrder
    siglaOrgao?: SortOrder
    uriOrgao?: SortOrder
    regime?: SortOrder
    descricaoTramitacao?: SortOrder
    idTipoTramitacao?: SortOrder
    descricaoSituacao?: SortOrder
    idSituacao?: SortOrder
    despacho?: SortOrder
    statusApreciacao?: SortOrder
    statusUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProposicaoMinOrderByAggregateInput = {
    id?: SortOrder
    uri?: SortOrder
    siglaTipo?: SortOrder
    numero?: SortOrder
    ano?: SortOrder
    codTipo?: SortOrder
    descricaoTipo?: SortOrder
    ementa?: SortOrder
    ementaDetalhada?: SortOrder
    keywords?: SortOrder
    dataApresentacao?: SortOrder
    uriOrgaoNumerador?: SortOrder
    urlInteiroTeor?: SortOrder
    uriPropAnterior?: SortOrder
    uriPropPrincipal?: SortOrder
    uriPropPosterior?: SortOrder
    statusData?: SortOrder
    statusSequencia?: SortOrder
    uriRelator?: SortOrder
    codOrgao?: SortOrder
    siglaOrgao?: SortOrder
    uriOrgao?: SortOrder
    regime?: SortOrder
    descricaoTramitacao?: SortOrder
    idTipoTramitacao?: SortOrder
    descricaoSituacao?: SortOrder
    idSituacao?: SortOrder
    despacho?: SortOrder
    statusApreciacao?: SortOrder
    statusUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProposicaoSumOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    ano?: SortOrder
    codTipo?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DenunciaCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    medias?: SortOrder
    status?: SortOrder
    tags?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DenunciaAvgOrderByAggregateInput = {
    upvotes?: SortOrder
    downvotes?: SortOrder
  }

  export type DenunciaMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    status?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DenunciaMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    status?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DenunciaSumOrderByAggregateInput = {
    upvotes?: SortOrder
    downvotes?: SortOrder
  }

  export type DenunciaScalarRelationFilter = {
    is?: DenunciaWhereInput
    isNot?: DenunciaWhereInput
  }

  export type DenunciaVotoDenunciaIdUserIdCompoundUniqueInput = {
    denunciaId: string
    userId: string
  }

  export type DenunciaVotoCountOrderByAggregateInput = {
    id?: SortOrder
    denunciaId?: SortOrder
    userId?: SortOrder
    voto?: SortOrder
    createdAt?: SortOrder
  }

  export type DenunciaVotoAvgOrderByAggregateInput = {
    voto?: SortOrder
  }

  export type DenunciaVotoMaxOrderByAggregateInput = {
    id?: SortOrder
    denunciaId?: SortOrder
    userId?: SortOrder
    voto?: SortOrder
    createdAt?: SortOrder
  }

  export type DenunciaVotoMinOrderByAggregateInput = {
    id?: SortOrder
    denunciaId?: SortOrder
    userId?: SortOrder
    voto?: SortOrder
    createdAt?: SortOrder
  }

  export type DenunciaVotoSumOrderByAggregateInput = {
    voto?: SortOrder
  }

  export type DenunciaComentarioCountOrderByAggregateInput = {
    id?: SortOrder
    denunciaId?: SortOrder
    userId?: SortOrder
    texto?: SortOrder
    medias?: SortOrder
    createdAt?: SortOrder
  }

  export type DenunciaComentarioMaxOrderByAggregateInput = {
    id?: SortOrder
    denunciaId?: SortOrder
    userId?: SortOrder
    texto?: SortOrder
    createdAt?: SortOrder
  }

  export type DenunciaComentarioMinOrderByAggregateInput = {
    id?: SortOrder
    denunciaId?: SortOrder
    userId?: SortOrder
    texto?: SortOrder
    createdAt?: SortOrder
  }

  export type UserCreateinterestTopicsInput = {
    set: string[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type PostCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type DenunciaCreateNestedManyWithoutUserInput = {
    connect?: DenunciaWhereUniqueInput | DenunciaWhereUniqueInput[]
  }

  export type DenunciaVotoCreateNestedManyWithoutUserInput = {
    create?: XOR<DenunciaVotoCreateWithoutUserInput, DenunciaVotoUncheckedCreateWithoutUserInput> | DenunciaVotoCreateWithoutUserInput[] | DenunciaVotoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DenunciaVotoCreateOrConnectWithoutUserInput | DenunciaVotoCreateOrConnectWithoutUserInput[]
    createMany?: DenunciaVotoCreateManyUserInputEnvelope
    connect?: DenunciaVotoWhereUniqueInput | DenunciaVotoWhereUniqueInput[]
  }

  export type DenunciaComentarioCreateNestedManyWithoutUserInput = {
    create?: XOR<DenunciaComentarioCreateWithoutUserInput, DenunciaComentarioUncheckedCreateWithoutUserInput> | DenunciaComentarioCreateWithoutUserInput[] | DenunciaComentarioUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DenunciaComentarioCreateOrConnectWithoutUserInput | DenunciaComentarioCreateOrConnectWithoutUserInput[]
    createMany?: DenunciaComentarioCreateManyUserInputEnvelope
    connect?: DenunciaComentarioWhereUniqueInput | DenunciaComentarioWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type DenunciaUncheckedCreateNestedManyWithoutUserInput = {
    connect?: DenunciaWhereUniqueInput | DenunciaWhereUniqueInput[]
  }

  export type DenunciaVotoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DenunciaVotoCreateWithoutUserInput, DenunciaVotoUncheckedCreateWithoutUserInput> | DenunciaVotoCreateWithoutUserInput[] | DenunciaVotoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DenunciaVotoCreateOrConnectWithoutUserInput | DenunciaVotoCreateOrConnectWithoutUserInput[]
    createMany?: DenunciaVotoCreateManyUserInputEnvelope
    connect?: DenunciaVotoWhereUniqueInput | DenunciaVotoWhereUniqueInput[]
  }

  export type DenunciaComentarioUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DenunciaComentarioCreateWithoutUserInput, DenunciaComentarioUncheckedCreateWithoutUserInput> | DenunciaComentarioCreateWithoutUserInput[] | DenunciaComentarioUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DenunciaComentarioCreateOrConnectWithoutUserInput | DenunciaComentarioCreateOrConnectWithoutUserInput[]
    createMany?: DenunciaComentarioCreateManyUserInputEnvelope
    connect?: DenunciaComentarioWhereUniqueInput | DenunciaComentarioWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateinterestTopicsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type PostUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type DenunciaUpdateManyWithoutUserNestedInput = {
    set?: DenunciaWhereUniqueInput | DenunciaWhereUniqueInput[]
    disconnect?: DenunciaWhereUniqueInput | DenunciaWhereUniqueInput[]
    delete?: DenunciaWhereUniqueInput | DenunciaWhereUniqueInput[]
    connect?: DenunciaWhereUniqueInput | DenunciaWhereUniqueInput[]
    update?: DenunciaUpdateWithWhereUniqueWithoutUserInput | DenunciaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DenunciaUpdateManyWithWhereWithoutUserInput | DenunciaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DenunciaScalarWhereInput | DenunciaScalarWhereInput[]
  }

  export type DenunciaVotoUpdateManyWithoutUserNestedInput = {
    create?: XOR<DenunciaVotoCreateWithoutUserInput, DenunciaVotoUncheckedCreateWithoutUserInput> | DenunciaVotoCreateWithoutUserInput[] | DenunciaVotoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DenunciaVotoCreateOrConnectWithoutUserInput | DenunciaVotoCreateOrConnectWithoutUserInput[]
    upsert?: DenunciaVotoUpsertWithWhereUniqueWithoutUserInput | DenunciaVotoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DenunciaVotoCreateManyUserInputEnvelope
    set?: DenunciaVotoWhereUniqueInput | DenunciaVotoWhereUniqueInput[]
    disconnect?: DenunciaVotoWhereUniqueInput | DenunciaVotoWhereUniqueInput[]
    delete?: DenunciaVotoWhereUniqueInput | DenunciaVotoWhereUniqueInput[]
    connect?: DenunciaVotoWhereUniqueInput | DenunciaVotoWhereUniqueInput[]
    update?: DenunciaVotoUpdateWithWhereUniqueWithoutUserInput | DenunciaVotoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DenunciaVotoUpdateManyWithWhereWithoutUserInput | DenunciaVotoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DenunciaVotoScalarWhereInput | DenunciaVotoScalarWhereInput[]
  }

  export type DenunciaComentarioUpdateManyWithoutUserNestedInput = {
    create?: XOR<DenunciaComentarioCreateWithoutUserInput, DenunciaComentarioUncheckedCreateWithoutUserInput> | DenunciaComentarioCreateWithoutUserInput[] | DenunciaComentarioUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DenunciaComentarioCreateOrConnectWithoutUserInput | DenunciaComentarioCreateOrConnectWithoutUserInput[]
    upsert?: DenunciaComentarioUpsertWithWhereUniqueWithoutUserInput | DenunciaComentarioUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DenunciaComentarioCreateManyUserInputEnvelope
    set?: DenunciaComentarioWhereUniqueInput | DenunciaComentarioWhereUniqueInput[]
    disconnect?: DenunciaComentarioWhereUniqueInput | DenunciaComentarioWhereUniqueInput[]
    delete?: DenunciaComentarioWhereUniqueInput | DenunciaComentarioWhereUniqueInput[]
    connect?: DenunciaComentarioWhereUniqueInput | DenunciaComentarioWhereUniqueInput[]
    update?: DenunciaComentarioUpdateWithWhereUniqueWithoutUserInput | DenunciaComentarioUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DenunciaComentarioUpdateManyWithWhereWithoutUserInput | DenunciaComentarioUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DenunciaComentarioScalarWhereInput | DenunciaComentarioScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type DenunciaUncheckedUpdateManyWithoutUserNestedInput = {
    set?: DenunciaWhereUniqueInput | DenunciaWhereUniqueInput[]
    disconnect?: DenunciaWhereUniqueInput | DenunciaWhereUniqueInput[]
    delete?: DenunciaWhereUniqueInput | DenunciaWhereUniqueInput[]
    connect?: DenunciaWhereUniqueInput | DenunciaWhereUniqueInput[]
    update?: DenunciaUpdateWithWhereUniqueWithoutUserInput | DenunciaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DenunciaUpdateManyWithWhereWithoutUserInput | DenunciaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DenunciaScalarWhereInput | DenunciaScalarWhereInput[]
  }

  export type DenunciaVotoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DenunciaVotoCreateWithoutUserInput, DenunciaVotoUncheckedCreateWithoutUserInput> | DenunciaVotoCreateWithoutUserInput[] | DenunciaVotoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DenunciaVotoCreateOrConnectWithoutUserInput | DenunciaVotoCreateOrConnectWithoutUserInput[]
    upsert?: DenunciaVotoUpsertWithWhereUniqueWithoutUserInput | DenunciaVotoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DenunciaVotoCreateManyUserInputEnvelope
    set?: DenunciaVotoWhereUniqueInput | DenunciaVotoWhereUniqueInput[]
    disconnect?: DenunciaVotoWhereUniqueInput | DenunciaVotoWhereUniqueInput[]
    delete?: DenunciaVotoWhereUniqueInput | DenunciaVotoWhereUniqueInput[]
    connect?: DenunciaVotoWhereUniqueInput | DenunciaVotoWhereUniqueInput[]
    update?: DenunciaVotoUpdateWithWhereUniqueWithoutUserInput | DenunciaVotoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DenunciaVotoUpdateManyWithWhereWithoutUserInput | DenunciaVotoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DenunciaVotoScalarWhereInput | DenunciaVotoScalarWhereInput[]
  }

  export type DenunciaComentarioUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DenunciaComentarioCreateWithoutUserInput, DenunciaComentarioUncheckedCreateWithoutUserInput> | DenunciaComentarioCreateWithoutUserInput[] | DenunciaComentarioUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DenunciaComentarioCreateOrConnectWithoutUserInput | DenunciaComentarioCreateOrConnectWithoutUserInput[]
    upsert?: DenunciaComentarioUpsertWithWhereUniqueWithoutUserInput | DenunciaComentarioUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DenunciaComentarioCreateManyUserInputEnvelope
    set?: DenunciaComentarioWhereUniqueInput | DenunciaComentarioWhereUniqueInput[]
    disconnect?: DenunciaComentarioWhereUniqueInput | DenunciaComentarioWhereUniqueInput[]
    delete?: DenunciaComentarioWhereUniqueInput | DenunciaComentarioWhereUniqueInput[]
    connect?: DenunciaComentarioWhereUniqueInput | DenunciaComentarioWhereUniqueInput[]
    update?: DenunciaComentarioUpdateWithWhereUniqueWithoutUserInput | DenunciaComentarioUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DenunciaComentarioUpdateManyWithWhereWithoutUserInput | DenunciaComentarioUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DenunciaComentarioScalarWhereInput | DenunciaComentarioScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutPostInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type CommentUpdateManyWithoutPostNestedInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutPostInput | CommentUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutPostInput | CommentUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutPostInput | CommentUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutPostInput | CommentUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutPostInput | CommentUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutPostInput | CommentUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type PostCreateNestedOneWithoutCommentsInput = {
    create?: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput
    connect?: PostWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type PostUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput
    upsert?: PostUpsertWithoutCommentsInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutCommentsInput, PostUpdateWithoutCommentsInput>, PostUncheckedUpdateWithoutCommentsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DenunciaUpdatemediasInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DenunciaUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutDenunciasNestedInput = {
    create?: XOR<UserCreateWithoutDenunciasInput, UserUncheckedCreateWithoutDenunciasInput>
    connectOrCreate?: UserCreateOrConnectWithoutDenunciasInput
    upsert?: UserUpsertWithoutDenunciasInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDenunciasInput, UserUpdateWithoutDenunciasInput>, UserUncheckedUpdateWithoutDenunciasInput>
  }

  export type DenunciaVotoUpdateManyWithoutDenunciaNestedInput = {
    create?: XOR<DenunciaVotoCreateWithoutDenunciaInput, DenunciaVotoUncheckedCreateWithoutDenunciaInput> | DenunciaVotoCreateWithoutDenunciaInput[] | DenunciaVotoUncheckedCreateWithoutDenunciaInput[]
    connectOrCreate?: DenunciaVotoCreateOrConnectWithoutDenunciaInput | DenunciaVotoCreateOrConnectWithoutDenunciaInput[]
    upsert?: DenunciaVotoUpsertWithWhereUniqueWithoutDenunciaInput | DenunciaVotoUpsertWithWhereUniqueWithoutDenunciaInput[]
    createMany?: DenunciaVotoCreateManyDenunciaInputEnvelope
    set?: DenunciaVotoWhereUniqueInput | DenunciaVotoWhereUniqueInput[]
    disconnect?: DenunciaVotoWhereUniqueInput | DenunciaVotoWhereUniqueInput[]
    delete?: DenunciaVotoWhereUniqueInput | DenunciaVotoWhereUniqueInput[]
    connect?: DenunciaVotoWhereUniqueInput | DenunciaVotoWhereUniqueInput[]
    update?: DenunciaVotoUpdateWithWhereUniqueWithoutDenunciaInput | DenunciaVotoUpdateWithWhereUniqueWithoutDenunciaInput[]
    updateMany?: DenunciaVotoUpdateManyWithWhereWithoutDenunciaInput | DenunciaVotoUpdateManyWithWhereWithoutDenunciaInput[]
    deleteMany?: DenunciaVotoScalarWhereInput | DenunciaVotoScalarWhereInput[]
  }

  export type DenunciaComentarioUpdateManyWithoutDenunciaNestedInput = {
    create?: XOR<DenunciaComentarioCreateWithoutDenunciaInput, DenunciaComentarioUncheckedCreateWithoutDenunciaInput> | DenunciaComentarioCreateWithoutDenunciaInput[] | DenunciaComentarioUncheckedCreateWithoutDenunciaInput[]
    connectOrCreate?: DenunciaComentarioCreateOrConnectWithoutDenunciaInput | DenunciaComentarioCreateOrConnectWithoutDenunciaInput[]
    upsert?: DenunciaComentarioUpsertWithWhereUniqueWithoutDenunciaInput | DenunciaComentarioUpsertWithWhereUniqueWithoutDenunciaInput[]
    createMany?: DenunciaComentarioCreateManyDenunciaInputEnvelope
    set?: DenunciaComentarioWhereUniqueInput | DenunciaComentarioWhereUniqueInput[]
    disconnect?: DenunciaComentarioWhereUniqueInput | DenunciaComentarioWhereUniqueInput[]
    delete?: DenunciaComentarioWhereUniqueInput | DenunciaComentarioWhereUniqueInput[]
    connect?: DenunciaComentarioWhereUniqueInput | DenunciaComentarioWhereUniqueInput[]
    update?: DenunciaComentarioUpdateWithWhereUniqueWithoutDenunciaInput | DenunciaComentarioUpdateWithWhereUniqueWithoutDenunciaInput[]
    updateMany?: DenunciaComentarioUpdateManyWithWhereWithoutDenunciaInput | DenunciaComentarioUpdateManyWithWhereWithoutDenunciaInput[]
    deleteMany?: DenunciaComentarioScalarWhereInput | DenunciaComentarioScalarWhereInput[]
  }

  export type DenunciaVotoUncheckedUpdateManyWithoutDenunciaNestedInput = {
    create?: XOR<DenunciaVotoCreateWithoutDenunciaInput, DenunciaVotoUncheckedCreateWithoutDenunciaInput> | DenunciaVotoCreateWithoutDenunciaInput[] | DenunciaVotoUncheckedCreateWithoutDenunciaInput[]
    connectOrCreate?: DenunciaVotoCreateOrConnectWithoutDenunciaInput | DenunciaVotoCreateOrConnectWithoutDenunciaInput[]
    upsert?: DenunciaVotoUpsertWithWhereUniqueWithoutDenunciaInput | DenunciaVotoUpsertWithWhereUniqueWithoutDenunciaInput[]
    createMany?: DenunciaVotoCreateManyDenunciaInputEnvelope
    set?: DenunciaVotoWhereUniqueInput | DenunciaVotoWhereUniqueInput[]
    disconnect?: DenunciaVotoWhereUniqueInput | DenunciaVotoWhereUniqueInput[]
    delete?: DenunciaVotoWhereUniqueInput | DenunciaVotoWhereUniqueInput[]
    connect?: DenunciaVotoWhereUniqueInput | DenunciaVotoWhereUniqueInput[]
    update?: DenunciaVotoUpdateWithWhereUniqueWithoutDenunciaInput | DenunciaVotoUpdateWithWhereUniqueWithoutDenunciaInput[]
    updateMany?: DenunciaVotoUpdateManyWithWhereWithoutDenunciaInput | DenunciaVotoUpdateManyWithWhereWithoutDenunciaInput[]
    deleteMany?: DenunciaVotoScalarWhereInput | DenunciaVotoScalarWhereInput[]
  }

  export type DenunciaComentarioUncheckedUpdateManyWithoutDenunciaNestedInput = {
    create?: XOR<DenunciaComentarioCreateWithoutDenunciaInput, DenunciaComentarioUncheckedCreateWithoutDenunciaInput> | DenunciaComentarioCreateWithoutDenunciaInput[] | DenunciaComentarioUncheckedCreateWithoutDenunciaInput[]
    connectOrCreate?: DenunciaComentarioCreateOrConnectWithoutDenunciaInput | DenunciaComentarioCreateOrConnectWithoutDenunciaInput[]
    upsert?: DenunciaComentarioUpsertWithWhereUniqueWithoutDenunciaInput | DenunciaComentarioUpsertWithWhereUniqueWithoutDenunciaInput[]
    createMany?: DenunciaComentarioCreateManyDenunciaInputEnvelope
    set?: DenunciaComentarioWhereUniqueInput | DenunciaComentarioWhereUniqueInput[]
    disconnect?: DenunciaComentarioWhereUniqueInput | DenunciaComentarioWhereUniqueInput[]
    delete?: DenunciaComentarioWhereUniqueInput | DenunciaComentarioWhereUniqueInput[]
    connect?: DenunciaComentarioWhereUniqueInput | DenunciaComentarioWhereUniqueInput[]
    update?: DenunciaComentarioUpdateWithWhereUniqueWithoutDenunciaInput | DenunciaComentarioUpdateWithWhereUniqueWithoutDenunciaInput[]
    updateMany?: DenunciaComentarioUpdateManyWithWhereWithoutDenunciaInput | DenunciaComentarioUpdateManyWithWhereWithoutDenunciaInput[]
    deleteMany?: DenunciaComentarioScalarWhereInput | DenunciaComentarioScalarWhereInput[]
  }

  export type DenunciaCreateNestedOneWithoutVotosInput = {
    connect?: DenunciaWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDenunciaVotosInput = {
    create?: XOR<UserCreateWithoutDenunciaVotosInput, UserUncheckedCreateWithoutDenunciaVotosInput>
    connectOrCreate?: UserCreateOrConnectWithoutDenunciaVotosInput
    connect?: UserWhereUniqueInput
  }

  export type DenunciaUpdateOneRequiredWithoutVotosNestedInput = {
    connect?: DenunciaWhereUniqueInput
    update?: XOR<XOR<DenunciaUpdateToOneWithWhereWithoutVotosInput, DenunciaUpdateWithoutVotosInput>, DenunciaUncheckedUpdateWithoutVotosInput>
  }

  export type UserUpdateOneRequiredWithoutDenunciaVotosNestedInput = {
    create?: XOR<UserCreateWithoutDenunciaVotosInput, UserUncheckedCreateWithoutDenunciaVotosInput>
    connectOrCreate?: UserCreateOrConnectWithoutDenunciaVotosInput
    upsert?: UserUpsertWithoutDenunciaVotosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDenunciaVotosInput, UserUpdateWithoutDenunciaVotosInput>, UserUncheckedUpdateWithoutDenunciaVotosInput>
  }

  export type DenunciaComentarioCreatemediasInput = {
    set: string[]
  }

  export type DenunciaCreateNestedOneWithoutComentariosInput = {
    connect?: DenunciaWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDenunciaComentariosInput = {
    create?: XOR<UserCreateWithoutDenunciaComentariosInput, UserUncheckedCreateWithoutDenunciaComentariosInput>
    connectOrCreate?: UserCreateOrConnectWithoutDenunciaComentariosInput
    connect?: UserWhereUniqueInput
  }

  export type DenunciaComentarioUpdatemediasInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DenunciaUpdateOneRequiredWithoutComentariosNestedInput = {
    connect?: DenunciaWhereUniqueInput
    update?: XOR<XOR<DenunciaUpdateToOneWithWhereWithoutComentariosInput, DenunciaUpdateWithoutComentariosInput>, DenunciaUncheckedUpdateWithoutComentariosInput>
  }

  export type UserUpdateOneRequiredWithoutDenunciaComentariosNestedInput = {
    create?: XOR<UserCreateWithoutDenunciaComentariosInput, UserUncheckedCreateWithoutDenunciaComentariosInput>
    connectOrCreate?: UserCreateOrConnectWithoutDenunciaComentariosInput
    upsert?: UserUpsertWithoutDenunciaComentariosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDenunciaComentariosInput, UserUpdateWithoutDenunciaComentariosInput>, UserUncheckedUpdateWithoutDenunciaComentariosInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostCreateWithoutUserInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutUserInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostCreateManyUserInputEnvelope = {
    data: PostCreateManyUserInput | PostCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutUserInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    post: PostCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutUserInput = {
    id?: string
    content: string
    postId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutUserInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentCreateManyUserInputEnvelope = {
    data: CommentCreateManyUserInput | CommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DenunciaVotoCreateWithoutUserInput = {
    id?: string
    voto: number
    createdAt?: Date | string
    denuncia: DenunciaCreateNestedOneWithoutVotosInput
  }

  export type DenunciaVotoUncheckedCreateWithoutUserInput = {
    id?: string
    denunciaId: string
    voto: number
    createdAt?: Date | string
  }

  export type DenunciaVotoCreateOrConnectWithoutUserInput = {
    where: DenunciaVotoWhereUniqueInput
    create: XOR<DenunciaVotoCreateWithoutUserInput, DenunciaVotoUncheckedCreateWithoutUserInput>
  }

  export type DenunciaVotoCreateManyUserInputEnvelope = {
    data: DenunciaVotoCreateManyUserInput | DenunciaVotoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DenunciaComentarioCreateWithoutUserInput = {
    id?: string
    texto: string
    medias?: DenunciaComentarioCreatemediasInput | string[]
    createdAt?: Date | string
    denuncia: DenunciaCreateNestedOneWithoutComentariosInput
  }

  export type DenunciaComentarioUncheckedCreateWithoutUserInput = {
    id?: string
    denunciaId: string
    texto: string
    medias?: DenunciaComentarioCreatemediasInput | string[]
    createdAt?: Date | string
  }

  export type DenunciaComentarioCreateOrConnectWithoutUserInput = {
    where: DenunciaComentarioWhereUniqueInput
    create: XOR<DenunciaComentarioCreateWithoutUserInput, DenunciaComentarioUncheckedCreateWithoutUserInput>
  }

  export type DenunciaComentarioCreateManyUserInputEnvelope = {
    data: DenunciaComentarioCreateManyUserInput | DenunciaComentarioCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    token?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type PostUpsertWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostUpdateWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
  }

  export type PostUpdateManyWithWhereWithoutUserInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutUserInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: StringFilter<"Post"> | string
    title?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    userId?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
  }

  export type CommentUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
  }

  export type CommentUpdateManyWithWhereWithoutUserInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    userId?: StringFilter<"Comment"> | string
    postId?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
  }

  export type DenunciaUpdateWithWhereUniqueWithoutUserInput = {
    where: DenunciaWhereUniqueInput
    data: XOR<DenunciaUpdateWithoutUserInput, DenunciaUncheckedUpdateWithoutUserInput>
  }

  export type DenunciaUpdateManyWithWhereWithoutUserInput = {
    where: DenunciaScalarWhereInput
    data: XOR<DenunciaUpdateManyMutationInput, DenunciaUncheckedUpdateManyWithoutUserInput>
  }

  export type DenunciaScalarWhereInput = {
    AND?: DenunciaScalarWhereInput | DenunciaScalarWhereInput[]
    OR?: DenunciaScalarWhereInput[]
    NOT?: DenunciaScalarWhereInput | DenunciaScalarWhereInput[]
    id?: StringFilter<"Denuncia"> | string
    userId?: StringFilter<"Denuncia"> | string
    titulo?: StringFilter<"Denuncia"> | string
    descricao?: StringNullableFilter<"Denuncia"> | string | null
    medias?: StringNullableListFilter<"Denuncia">
    status?: StringFilter<"Denuncia"> | string
    tags?: StringNullableListFilter<"Denuncia">
    upvotes?: IntFilter<"Denuncia"> | number
    downvotes?: IntFilter<"Denuncia"> | number
    createdAt?: DateTimeFilter<"Denuncia"> | Date | string
    updatedAt?: DateTimeFilter<"Denuncia"> | Date | string
  }

  export type DenunciaVotoUpsertWithWhereUniqueWithoutUserInput = {
    where: DenunciaVotoWhereUniqueInput
    update: XOR<DenunciaVotoUpdateWithoutUserInput, DenunciaVotoUncheckedUpdateWithoutUserInput>
    create: XOR<DenunciaVotoCreateWithoutUserInput, DenunciaVotoUncheckedCreateWithoutUserInput>
  }

  export type DenunciaVotoUpdateWithWhereUniqueWithoutUserInput = {
    where: DenunciaVotoWhereUniqueInput
    data: XOR<DenunciaVotoUpdateWithoutUserInput, DenunciaVotoUncheckedUpdateWithoutUserInput>
  }

  export type DenunciaVotoUpdateManyWithWhereWithoutUserInput = {
    where: DenunciaVotoScalarWhereInput
    data: XOR<DenunciaVotoUpdateManyMutationInput, DenunciaVotoUncheckedUpdateManyWithoutUserInput>
  }

  export type DenunciaVotoScalarWhereInput = {
    AND?: DenunciaVotoScalarWhereInput | DenunciaVotoScalarWhereInput[]
    OR?: DenunciaVotoScalarWhereInput[]
    NOT?: DenunciaVotoScalarWhereInput | DenunciaVotoScalarWhereInput[]
    id?: StringFilter<"DenunciaVoto"> | string
    denunciaId?: StringFilter<"DenunciaVoto"> | string
    userId?: StringFilter<"DenunciaVoto"> | string
    voto?: IntFilter<"DenunciaVoto"> | number
    createdAt?: DateTimeFilter<"DenunciaVoto"> | Date | string
  }

  export type DenunciaComentarioUpsertWithWhereUniqueWithoutUserInput = {
    where: DenunciaComentarioWhereUniqueInput
    update: XOR<DenunciaComentarioUpdateWithoutUserInput, DenunciaComentarioUncheckedUpdateWithoutUserInput>
    create: XOR<DenunciaComentarioCreateWithoutUserInput, DenunciaComentarioUncheckedCreateWithoutUserInput>
  }

  export type DenunciaComentarioUpdateWithWhereUniqueWithoutUserInput = {
    where: DenunciaComentarioWhereUniqueInput
    data: XOR<DenunciaComentarioUpdateWithoutUserInput, DenunciaComentarioUncheckedUpdateWithoutUserInput>
  }

  export type DenunciaComentarioUpdateManyWithWhereWithoutUserInput = {
    where: DenunciaComentarioScalarWhereInput
    data: XOR<DenunciaComentarioUpdateManyMutationInput, DenunciaComentarioUncheckedUpdateManyWithoutUserInput>
  }

  export type DenunciaComentarioScalarWhereInput = {
    AND?: DenunciaComentarioScalarWhereInput | DenunciaComentarioScalarWhereInput[]
    OR?: DenunciaComentarioScalarWhereInput[]
    NOT?: DenunciaComentarioScalarWhereInput | DenunciaComentarioScalarWhereInput[]
    id?: StringFilter<"DenunciaComentario"> | string
    denunciaId?: StringFilter<"DenunciaComentario"> | string
    userId?: StringFilter<"DenunciaComentario"> | string
    texto?: StringFilter<"DenunciaComentario"> | string
    medias?: StringNullableListFilter<"DenunciaComentario">
    createdAt?: DateTimeFilter<"DenunciaComentario"> | Date | string
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    email: string
    name?: string | null
    avatar?: string | null
    race?: string | null
    gender?: string | null
    ageRange?: string | null
    interestTopics?: UserCreateinterestTopicsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    denuncias?: DenunciaCreateNestedManyWithoutUserInput
    denunciaVotos?: DenunciaVotoCreateNestedManyWithoutUserInput
    denunciaComentarios?: DenunciaComentarioCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    email: string
    name?: string | null
    avatar?: string | null
    race?: string | null
    gender?: string | null
    ageRange?: string | null
    interestTopics?: UserCreateinterestTopicsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    denuncias?: DenunciaUncheckedCreateNestedManyWithoutUserInput
    denunciaVotos?: DenunciaVotoUncheckedCreateNestedManyWithoutUserInput
    denunciaComentarios?: DenunciaComentarioUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    race?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    ageRange?: NullableStringFieldUpdateOperationsInput | string | null
    interestTopics?: UserUpdateinterestTopicsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    denuncias?: DenunciaUpdateManyWithoutUserNestedInput
    denunciaVotos?: DenunciaVotoUpdateManyWithoutUserNestedInput
    denunciaComentarios?: DenunciaComentarioUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    race?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    ageRange?: NullableStringFieldUpdateOperationsInput | string | null
    interestTopics?: UserUpdateinterestTopicsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    denuncias?: DenunciaUncheckedUpdateManyWithoutUserNestedInput
    denunciaVotos?: DenunciaVotoUncheckedUpdateManyWithoutUserNestedInput
    denunciaComentarios?: DenunciaComentarioUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPostsInput = {
    id?: string
    email: string
    name?: string | null
    avatar?: string | null
    race?: string | null
    gender?: string | null
    ageRange?: string | null
    interestTopics?: UserCreateinterestTopicsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    denuncias?: DenunciaCreateNestedManyWithoutUserInput
    denunciaVotos?: DenunciaVotoCreateNestedManyWithoutUserInput
    denunciaComentarios?: DenunciaComentarioCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: string
    email: string
    name?: string | null
    avatar?: string | null
    race?: string | null
    gender?: string | null
    ageRange?: string | null
    interestTopics?: UserCreateinterestTopicsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    denuncias?: DenunciaUncheckedCreateNestedManyWithoutUserInput
    denunciaVotos?: DenunciaVotoUncheckedCreateNestedManyWithoutUserInput
    denunciaComentarios?: DenunciaComentarioUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type CommentCreateWithoutPostInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutPostInput = {
    id?: string
    content: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutPostInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput>
  }

  export type CommentCreateManyPostInputEnvelope = {
    data: CommentCreateManyPostInput | CommentCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    race?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    ageRange?: NullableStringFieldUpdateOperationsInput | string | null
    interestTopics?: UserUpdateinterestTopicsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    denuncias?: DenunciaUpdateManyWithoutUserNestedInput
    denunciaVotos?: DenunciaVotoUpdateManyWithoutUserNestedInput
    denunciaComentarios?: DenunciaComentarioUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    race?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    ageRange?: NullableStringFieldUpdateOperationsInput | string | null
    interestTopics?: UserUpdateinterestTopicsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    denuncias?: DenunciaUncheckedUpdateManyWithoutUserNestedInput
    denunciaVotos?: DenunciaVotoUncheckedUpdateManyWithoutUserNestedInput
    denunciaComentarios?: DenunciaComentarioUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CommentUpsertWithWhereUniqueWithoutPostInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutPostInput, CommentUncheckedUpdateWithoutPostInput>
    create: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutPostInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutPostInput, CommentUncheckedUpdateWithoutPostInput>
  }

  export type CommentUpdateManyWithWhereWithoutPostInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutPostInput>
  }

  export type UserCreateWithoutCommentsInput = {
    id?: string
    email: string
    name?: string | null
    avatar?: string | null
    race?: string | null
    gender?: string | null
    ageRange?: string | null
    interestTopics?: UserCreateinterestTopicsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    denuncias?: DenunciaCreateNestedManyWithoutUserInput
    denunciaVotos?: DenunciaVotoCreateNestedManyWithoutUserInput
    denunciaComentarios?: DenunciaComentarioCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: string
    email: string
    name?: string | null
    avatar?: string | null
    race?: string | null
    gender?: string | null
    ageRange?: string | null
    interestTopics?: UserCreateinterestTopicsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    denuncias?: DenunciaUncheckedCreateNestedManyWithoutUserInput
    denunciaVotos?: DenunciaVotoUncheckedCreateNestedManyWithoutUserInput
    denunciaComentarios?: DenunciaComentarioUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type PostCreateWithoutCommentsInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutCommentsInput = {
    id?: string
    title: string
    content: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCreateOrConnectWithoutCommentsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    race?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    ageRange?: NullableStringFieldUpdateOperationsInput | string | null
    interestTopics?: UserUpdateinterestTopicsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    denuncias?: DenunciaUpdateManyWithoutUserNestedInput
    denunciaVotos?: DenunciaVotoUpdateManyWithoutUserNestedInput
    denunciaComentarios?: DenunciaComentarioUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    race?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    ageRange?: NullableStringFieldUpdateOperationsInput | string | null
    interestTopics?: UserUpdateinterestTopicsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    denuncias?: DenunciaUncheckedUpdateManyWithoutUserNestedInput
    denunciaVotos?: DenunciaVotoUncheckedUpdateManyWithoutUserNestedInput
    denunciaComentarios?: DenunciaComentarioUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostUpsertWithoutCommentsInput = {
    update: XOR<PostUpdateWithoutCommentsInput, PostUncheckedUpdateWithoutCommentsInput>
    create: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutCommentsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutCommentsInput, PostUncheckedUpdateWithoutCommentsInput>
  }

  export type PostUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutDenunciasInput = {
    id?: string
    email: string
    name?: string | null
    avatar?: string | null
    race?: string | null
    gender?: string | null
    ageRange?: string | null
    interestTopics?: UserCreateinterestTopicsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    denunciaVotos?: DenunciaVotoCreateNestedManyWithoutUserInput
    denunciaComentarios?: DenunciaComentarioCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDenunciasInput = {
    id?: string
    email: string
    name?: string | null
    avatar?: string | null
    race?: string | null
    gender?: string | null
    ageRange?: string | null
    interestTopics?: UserCreateinterestTopicsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    denunciaVotos?: DenunciaVotoUncheckedCreateNestedManyWithoutUserInput
    denunciaComentarios?: DenunciaComentarioUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDenunciasInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDenunciasInput, UserUncheckedCreateWithoutDenunciasInput>
  }

  export type UserUpsertWithoutDenunciasInput = {
    update: XOR<UserUpdateWithoutDenunciasInput, UserUncheckedUpdateWithoutDenunciasInput>
    create: XOR<UserCreateWithoutDenunciasInput, UserUncheckedCreateWithoutDenunciasInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDenunciasInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDenunciasInput, UserUncheckedUpdateWithoutDenunciasInput>
  }

  export type UserUpdateWithoutDenunciasInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    race?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    ageRange?: NullableStringFieldUpdateOperationsInput | string | null
    interestTopics?: UserUpdateinterestTopicsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    denunciaVotos?: DenunciaVotoUpdateManyWithoutUserNestedInput
    denunciaComentarios?: DenunciaComentarioUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDenunciasInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    race?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    ageRange?: NullableStringFieldUpdateOperationsInput | string | null
    interestTopics?: UserUpdateinterestTopicsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    denunciaVotos?: DenunciaVotoUncheckedUpdateManyWithoutUserNestedInput
    denunciaComentarios?: DenunciaComentarioUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DenunciaVotoCreateWithoutDenunciaInput = {
    id?: string
    voto: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutDenunciaVotosInput
  }

  export type DenunciaVotoUncheckedCreateWithoutDenunciaInput = {
    id?: string
    userId: string
    voto: number
    createdAt?: Date | string
  }

  export type DenunciaVotoCreateOrConnectWithoutDenunciaInput = {
    where: DenunciaVotoWhereUniqueInput
    create: XOR<DenunciaVotoCreateWithoutDenunciaInput, DenunciaVotoUncheckedCreateWithoutDenunciaInput>
  }

  export type DenunciaVotoUpsertWithWhereUniqueWithoutDenunciaInput = {
    where: DenunciaVotoWhereUniqueInput
    update: XOR<DenunciaVotoUpdateWithoutDenunciaInput, DenunciaVotoUncheckedUpdateWithoutDenunciaInput>
    create: XOR<DenunciaVotoCreateWithoutDenunciaInput, DenunciaVotoUncheckedCreateWithoutDenunciaInput>
  }

  export type DenunciaVotoCreateManyDenunciaInputEnvelope = {
    data: DenunciaVotoCreateManyDenunciaInput | DenunciaVotoCreateManyDenunciaInput[]
    skipDuplicates?: boolean
  }

  export type DenunciaVotoUpdateWithWhereUniqueWithoutDenunciaInput = {
    where: DenunciaVotoWhereUniqueInput
    data: XOR<DenunciaVotoUpdateWithoutDenunciaInput, DenunciaVotoUncheckedUpdateWithoutDenunciaInput>
  }

  export type DenunciaVotoUpdateManyWithWhereWithoutDenunciaInput = {
    where: DenunciaVotoScalarWhereInput
    data: XOR<DenunciaVotoUpdateManyMutationInput, DenunciaVotoUncheckedUpdateManyWithoutDenunciaInput>
  }

  export type DenunciaComentarioCreateWithoutDenunciaInput = {
    id?: string
    texto: string
    medias?: DenunciaComentarioCreatemediasInput | string[]
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutDenunciaComentariosInput
  }

  export type DenunciaComentarioUncheckedCreateWithoutDenunciaInput = {
    id?: string
    userId: string
    texto: string
    medias?: DenunciaComentarioCreatemediasInput | string[]
    createdAt?: Date | string
  }

  export type DenunciaComentarioCreateOrConnectWithoutDenunciaInput = {
    where: DenunciaComentarioWhereUniqueInput
    create: XOR<DenunciaComentarioCreateWithoutDenunciaInput, DenunciaComentarioUncheckedCreateWithoutDenunciaInput>
  }

  export type DenunciaComentarioUpsertWithWhereUniqueWithoutDenunciaInput = {
    where: DenunciaComentarioWhereUniqueInput
    update: XOR<DenunciaComentarioUpdateWithoutDenunciaInput, DenunciaComentarioUncheckedUpdateWithoutDenunciaInput>
    create: XOR<DenunciaComentarioCreateWithoutDenunciaInput, DenunciaComentarioUncheckedCreateWithoutDenunciaInput>
  }

  export type DenunciaComentarioCreateManyDenunciaInputEnvelope = {
    data: DenunciaComentarioCreateManyDenunciaInput | DenunciaComentarioCreateManyDenunciaInput[]
    skipDuplicates?: boolean
  }

  export type DenunciaComentarioUpdateWithWhereUniqueWithoutDenunciaInput = {
    where: DenunciaComentarioWhereUniqueInput
    data: XOR<DenunciaComentarioUpdateWithoutDenunciaInput, DenunciaComentarioUncheckedUpdateWithoutDenunciaInput>
  }

  export type DenunciaComentarioUpdateManyWithWhereWithoutDenunciaInput = {
    where: DenunciaComentarioScalarWhereInput
    data: XOR<DenunciaComentarioUpdateManyMutationInput, DenunciaComentarioUncheckedUpdateManyWithoutDenunciaInput>
  }

  export type UserCreateWithoutDenunciaVotosInput = {
    id?: string
    email: string
    name?: string | null
    avatar?: string | null
    race?: string | null
    gender?: string | null
    ageRange?: string | null
    interestTopics?: UserCreateinterestTopicsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    denuncias?: DenunciaCreateNestedManyWithoutUserInput
    denunciaComentarios?: DenunciaComentarioCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDenunciaVotosInput = {
    id?: string
    email: string
    name?: string | null
    avatar?: string | null
    race?: string | null
    gender?: string | null
    ageRange?: string | null
    interestTopics?: UserCreateinterestTopicsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    denuncias?: DenunciaUncheckedCreateNestedManyWithoutUserInput
    denunciaComentarios?: DenunciaComentarioUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDenunciaVotosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDenunciaVotosInput, UserUncheckedCreateWithoutDenunciaVotosInput>
  }

  export type DenunciaUpdateToOneWithWhereWithoutVotosInput = {
    where?: DenunciaWhereInput
    data: XOR<DenunciaUpdateWithoutVotosInput, DenunciaUncheckedUpdateWithoutVotosInput>
  }

  export type DenunciaUpdateWithoutVotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    medias?: DenunciaUpdatemediasInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    tags?: DenunciaUpdatetagsInput | string[]
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDenunciasNestedInput
    comentarios?: DenunciaComentarioUpdateManyWithoutDenunciaNestedInput
  }

  export type DenunciaUncheckedUpdateWithoutVotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    medias?: DenunciaUpdatemediasInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    tags?: DenunciaUpdatetagsInput | string[]
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comentarios?: DenunciaComentarioUncheckedUpdateManyWithoutDenunciaNestedInput
  }

  export type UserUpsertWithoutDenunciaVotosInput = {
    update: XOR<UserUpdateWithoutDenunciaVotosInput, UserUncheckedUpdateWithoutDenunciaVotosInput>
    create: XOR<UserCreateWithoutDenunciaVotosInput, UserUncheckedCreateWithoutDenunciaVotosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDenunciaVotosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDenunciaVotosInput, UserUncheckedUpdateWithoutDenunciaVotosInput>
  }

  export type UserUpdateWithoutDenunciaVotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    race?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    ageRange?: NullableStringFieldUpdateOperationsInput | string | null
    interestTopics?: UserUpdateinterestTopicsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    denuncias?: DenunciaUpdateManyWithoutUserNestedInput
    denunciaComentarios?: DenunciaComentarioUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDenunciaVotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    race?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    ageRange?: NullableStringFieldUpdateOperationsInput | string | null
    interestTopics?: UserUpdateinterestTopicsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    denuncias?: DenunciaUncheckedUpdateManyWithoutUserNestedInput
    denunciaComentarios?: DenunciaComentarioUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutDenunciaComentariosInput = {
    id?: string
    email: string
    name?: string | null
    avatar?: string | null
    race?: string | null
    gender?: string | null
    ageRange?: string | null
    interestTopics?: UserCreateinterestTopicsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    denuncias?: DenunciaCreateNestedManyWithoutUserInput
    denunciaVotos?: DenunciaVotoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDenunciaComentariosInput = {
    id?: string
    email: string
    name?: string | null
    avatar?: string | null
    race?: string | null
    gender?: string | null
    ageRange?: string | null
    interestTopics?: UserCreateinterestTopicsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    denuncias?: DenunciaUncheckedCreateNestedManyWithoutUserInput
    denunciaVotos?: DenunciaVotoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDenunciaComentariosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDenunciaComentariosInput, UserUncheckedCreateWithoutDenunciaComentariosInput>
  }

  export type DenunciaUpdateToOneWithWhereWithoutComentariosInput = {
    where?: DenunciaWhereInput
    data: XOR<DenunciaUpdateWithoutComentariosInput, DenunciaUncheckedUpdateWithoutComentariosInput>
  }

  export type DenunciaUpdateWithoutComentariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    medias?: DenunciaUpdatemediasInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    tags?: DenunciaUpdatetagsInput | string[]
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDenunciasNestedInput
    votos?: DenunciaVotoUpdateManyWithoutDenunciaNestedInput
  }

  export type DenunciaUncheckedUpdateWithoutComentariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    medias?: DenunciaUpdatemediasInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    tags?: DenunciaUpdatetagsInput | string[]
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votos?: DenunciaVotoUncheckedUpdateManyWithoutDenunciaNestedInput
  }

  export type UserUpsertWithoutDenunciaComentariosInput = {
    update: XOR<UserUpdateWithoutDenunciaComentariosInput, UserUncheckedUpdateWithoutDenunciaComentariosInput>
    create: XOR<UserCreateWithoutDenunciaComentariosInput, UserUncheckedCreateWithoutDenunciaComentariosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDenunciaComentariosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDenunciaComentariosInput, UserUncheckedUpdateWithoutDenunciaComentariosInput>
  }

  export type UserUpdateWithoutDenunciaComentariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    race?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    ageRange?: NullableStringFieldUpdateOperationsInput | string | null
    interestTopics?: UserUpdateinterestTopicsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    denuncias?: DenunciaUpdateManyWithoutUserNestedInput
    denunciaVotos?: DenunciaVotoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDenunciaComentariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    race?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    ageRange?: NullableStringFieldUpdateOperationsInput | string | null
    interestTopics?: UserUpdateinterestTopicsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    denuncias?: DenunciaUncheckedUpdateManyWithoutUserNestedInput
    denunciaVotos?: DenunciaVotoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SessionCreateManyUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type PostCreateManyUserInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateManyUserInput = {
    id?: string
    content: string
    postId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DenunciaVotoCreateManyUserInput = {
    id?: string
    denunciaId: string
    voto: number
    createdAt?: Date | string
  }

  export type DenunciaComentarioCreateManyUserInput = {
    id?: string
    denunciaId: string
    texto: string
    medias?: DenunciaComentarioCreatemediasInput | string[]
    createdAt?: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DenunciaUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    medias?: DenunciaUpdatemediasInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    tags?: DenunciaUpdatetagsInput | string[]
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votos?: DenunciaVotoUpdateManyWithoutDenunciaNestedInput
    comentarios?: DenunciaComentarioUpdateManyWithoutDenunciaNestedInput
  }

  export type DenunciaUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    medias?: DenunciaUpdatemediasInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    tags?: DenunciaUpdatetagsInput | string[]
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votos?: DenunciaVotoUncheckedUpdateManyWithoutDenunciaNestedInput
    comentarios?: DenunciaComentarioUncheckedUpdateManyWithoutDenunciaNestedInput
  }

  export type DenunciaUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    medias?: DenunciaUpdatemediasInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    tags?: DenunciaUpdatetagsInput | string[]
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DenunciaVotoUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    voto?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    denuncia?: DenunciaUpdateOneRequiredWithoutVotosNestedInput
  }

  export type DenunciaVotoUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    denunciaId?: StringFieldUpdateOperationsInput | string
    voto?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DenunciaVotoUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    denunciaId?: StringFieldUpdateOperationsInput | string
    voto?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DenunciaComentarioUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    medias?: DenunciaComentarioUpdatemediasInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    denuncia?: DenunciaUpdateOneRequiredWithoutComentariosNestedInput
  }

  export type DenunciaComentarioUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    denunciaId?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    medias?: DenunciaComentarioUpdatemediasInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DenunciaComentarioUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    denunciaId?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    medias?: DenunciaComentarioUpdatemediasInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyPostInput = {
    id?: string
    content: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DenunciaVotoUpdateWithoutDenunciaInput = {
    id?: StringFieldUpdateOperationsInput | string
    voto?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDenunciaVotosNestedInput
  }

  export type DenunciaVotoUncheckedUpdateWithoutDenunciaInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    voto?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DenunciaVotoCreateManyDenunciaInput = {
    id?: string
    userId: string
    voto: number
    createdAt?: Date | string
  }

  export type DenunciaVotoUncheckedUpdateManyWithoutDenunciaInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    voto?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DenunciaComentarioUpdateWithoutDenunciaInput = {
    id?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    medias?: DenunciaComentarioUpdatemediasInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDenunciaComentariosNestedInput
  }

  export type DenunciaComentarioUncheckedUpdateWithoutDenunciaInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    medias?: DenunciaComentarioUpdatemediasInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DenunciaComentarioCreateManyDenunciaInput = {
    id?: string
    userId: string
    texto: string
    medias?: DenunciaComentarioCreatemediasInput | string[]
    createdAt?: Date | string
  }

  export type DenunciaComentarioUncheckedUpdateManyWithoutDenunciaInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    medias?: DenunciaComentarioUpdatemediasInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}