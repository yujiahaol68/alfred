import * as express from 'express';
import * as builder from 'botbuilder';
import * as dotenv from 'dotenv';
import {
  registerBootService,
  loadConfig,
} from './bot/bootstrap';
import { Express } from 'express';

async function boot() {
  dotenv.config();
  const container = await registerBootService();

  const app:Express = container.resolve('express');
  app.listen(process.env.BOT_PORT, () => {
      console.log('Alfred on http://localhost:3978');
  });

  const connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD,
  });

  app.post('/api/messages', connector.listen());

  const bot = new builder.UniversalBot(connector, (session) => {
    session.send('You said: %s', session.message.text);
    console.log(process.env.MSG);
  });

}

boot();