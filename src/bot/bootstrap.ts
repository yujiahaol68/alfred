import { LibModuleReady } from './../interfaces/dialog_interfaces';
import { httpService } from './connections/express';
import { botConnector } from './connections/botConnector';
import { Container } from './core/ServiceContainer';
import { LibFactory } from './core/LibraryFactory';
import * as nSkill from './library';
import { config } from '../config';
import {
  UniversalBot,
  LuisRecognizer,
} from 'botbuilder';

import * as _ from 'lodash';

const registerBootService = async () => {
  Container.create(httpService);
  Container.create(botConnector);
};

const httpServiceInit = async () => {
  const app = Container.resolve('express');
  const connector = Container.resolve('botConnector');

  app.post('/api/messages', connector.listen());
  app.listen(config.botFramework.port, () => {
      console.log(`Alfred on http://localhost:${config.botFramework.port}`);
  });
};

const botInit = async () => {
  const connector = Container.resolve('botConnector');

  const bot = new UniversalBot(connector);
  bot.recognizer(new LuisRecognizer(config.services.luis_app_url));

  const nLib:LibModuleReady[] = _.values(nSkill);
  LibFactory.createLibs(nLib);

  bot.library(LibFactory.getRootLib());
};

export {
  registerBootService,
  httpServiceInit,
  botInit,
};