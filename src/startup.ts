import * as express from 'express';
import * as builder from 'botbuilder';

const app = express();

app.listen(process.env.bot_port || 3978, () => {
    console.log('Alfred on http://localhost:3978');
});

const connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD,
});

app.post('/api/messages', connector.listen());

const bot = new builder.UniversalBot(connector, (session) => {
    session.send('You said: %s', session.message.text);
});