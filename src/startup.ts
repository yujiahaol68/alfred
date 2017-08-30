import {
  UniversalBot,
  LuisRecognizer,
  Middleware,
} from 'botbuilder';
import { config } from './config';
import { registerBootService } from './bot/bootstrap';
import { Container } from './bot/core/ServiceContainer';
import { LibFactory } from './bot/core/LibraryFactory';
import { greeting } from './bot/library/self/dialog';

async function boot() {
  await registerBootService();

  const app = Container.resolve('express');
  const connector = Container.resolve('botConnector');

  app.post('/api/messages', connector.listen());
  app.listen(config.botFramework.port, () => {
      console.log(`Alfred on http://localhost:${config.botFramework.port}`);
  });

  const bot = new UniversalBot(connector);
  bot.recognizer(new LuisRecognizer(config.services.luis_app_url));
  bot.use(Middleware.sendTyping());

  LibFactory.createLibs(greeting);
  bot.library(LibFactory.getRootLib());
}

boot();