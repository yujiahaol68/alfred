import { UniversalBot } from 'botbuilder';
import { config } from './config';
import { registerBootService } from './bot/bootstrap';
import { Container } from './bot/core/ServiceContainer';

async function boot() {
  await registerBootService();

  const app = Container.resolve('express');
  const connector = Container.resolve('botConnector');

  app.post('/api/messages', connector.listen());
  app.listen(config.botFramework.port, () => {
      console.log(`Alfred on http://localhost:${config.botFramework.port}`);
  });

  const bot = new UniversalBot(connector);
}

boot();