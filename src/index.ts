import qrcode from 'qrcode-terminal';
import { Client, LocalAuth } from 'whatsapp-web.js';

const client = new Client({
  authStrategy: new LocalAuth()
});

client.on('qr', qr => {
  qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
  console.log('Client is ready!');
});

client.on('message', message => {
  const content: string = message.body;
  
  if (content === "Olá") {
    client.sendMessage(message.from, "Olá meu nome jhon!");
  } 
  if(content === "tchau") {
    client.sendMessage(message.from, `Tchau!`)
  }

});

client.initialize();
