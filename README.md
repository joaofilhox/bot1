# Bot Simples de WhatsApp
Este é um bot simples para WhatsApp que responde a duas mensagens específicas. Ele utiliza as bibliotecas `whatsapp-web.js` e `qrcode-terminal`.

## Pré-requisitos

Antes de começar, verifique se você atende aos seguintes requisitos:

- Node.js instalado na sua máquina.
- Conta no WhatsApp com dois números, um para ler o QR Code e outro para testar o bot.

## Instalação

1. Clone este repositório do GitHub:

   ```bash
   https://github.com/joaofilhox/bot1.git
   ```

2. Navegue até a pasta do projeto:

   ```bash
   cd bot1
   ```

3. Instale as dependências do projeto:

   ```bash
   npm install
   ```

## Uso

1. Execute o seguinte comando para iniciar o bot:

   ```bash
   npm run dev
   ```

2. No terminal, será exibido um QR Code. Utilize o WhatsApp do número correspondente para escanear o QR Code e conectar o bot.

3. Após conectar, você pode enviar as mensagens para testar o bot. As mensagens suportadas são:

   - **"Olá"**: O bot responderá com "Olá meu nome é John!"
   - **"Tchau"**: O bot responderá com "Tchau!"

## Notas

- Certifique-se de que o número do WhatsApp utilizado para testar o bot está adicionado à lista de contatos do número usado para ler o QR Code.
- Este é um bot muito simples e responde apenas às mensagens mencionadas.

Aproveite o seu bot WhatsApp! Se precisar de mais ajuda, consulte a documentação das bibliotecas `whatsapp-web.js` e `qrcode-terminal`.
