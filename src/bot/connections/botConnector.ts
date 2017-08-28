import { Connection } from './../../interfaces/global_interfaces';
import { ChatConnector } from 'botbuilder';
import { config } from './../../config';

export const botConnector:Connection = {
  name: 'botConnector',
  connectionInstance: new ChatConnector({
    appId: config.botFramework.microsoft_app_id,
    appPassword: config.botFramework.microsoft_app_password,
  }),
};