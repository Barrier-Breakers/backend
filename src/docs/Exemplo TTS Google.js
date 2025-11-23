const textToSpeech = require('@google-cloud/text-to-speech');
const fs = require('fs');
const util = require('util');

// Cria o cliente (use v1beta1 para garantir acesso aos modelos mais recentes como Chirp)
const client = new textToSpeech.TextToSpeechClient({
    // Opcional: se você não usou variável de ambiente, aponte a chave aqui
    // keyFilename: './google-credentials.json' 
});

async function gerarAudioComChirp(textoParaLer) {
  
  // Configuração da Requisição
  const request = {
    input: { text: textoParaLer },
    
    // AQUI ESTÁ O SEGREDO DO CHIRP
    voice: {
      languageCode: 'pt-BR',
      // Você precisa pegar o ID exato da voz Chirp que gostou.
      // Geralmente segue o padrão: "pt-BR-Chirp-3-Female" ou similar.
      // Se não souber o nome exato, use a função de listar vozes abaixo para descobrir.
      name: 'pt-BR-Chirp-3-Female', // Exemplo hipotético (verifique o ID real)
    },
    
    audioConfig: {
      audioEncoding: 'MP3', // Ou 'LINEAR16' para WAV, 'OGG_OPUS' para web
      speakingRate: 1.0,    // Velocidade
      pitch: 0.0,           // Tom
    },
  };

  try {
    console.log('Processando áudio com Chirp...');
    
    // Faz a chamada à API
    const [response] = await client.synthesizeSpeech(request);
    
    // Salva o arquivo (ou retorna o buffer para seu frontend)
    const writeFile = util.promisify(fs.writeFile);
    const nomeArquivo = 'output_chirp.mp3';
    
    await writeFile(nomeArquivo, response.audioContent, 'binary');
    console.log(`Áudio salvo com sucesso em: ${nomeArquivo}`);
    
    return response.audioContent; // Retorna o buffer se quiser enviar via API
    
  } catch (error) {
    console.error('Erro ao gerar áudio:', error);
  }
}

// --- EXECUTANDO O TESTE ---
const textoResumo = "O Deputado Zé Trovão protocolou um requerimento solicitando uma Moção de Aplauso para a Cabo Emily Rosane Pereira.";

gerarAudioComChirp(textoResumo);