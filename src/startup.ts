import * as express from 'express';
import * as builder from 'botbuilder';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();

app.listen(process.env.BOT_PORT, () => {
    console.log('Alfred on http://localhost:3978');
});

const connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD,
});

app.post('/api/messages', connector.listen());

const bot = new builder.UniversalBot(connector);

exports = app;