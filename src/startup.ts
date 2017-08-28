import { UniversalBot } from 'botbuilder';
import { config } from './config';
import { registerBootService } from './bot/bootstrap';

async function boot() {
  const container = await registerBootService();

  const app = container.resolve('express');
  const connector = container.resolve('botConnector');

  app.post('/api/messages', connector.listen());
  app.listen(config.botFramework.port, () => {
      console.log(`Alfred on http://localhost:${config.botFramework.port}`);
  });

  const bot = new UniversalBot(connector);
}

boot();