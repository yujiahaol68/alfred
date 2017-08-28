import { httpService } from './connections/express';
import { botConnector } from './connections/botConnector';
import { Container } from './core/ServiceContainer';

export const registerBootService = async () => {
  Container.create(httpService);
  Container.create(botConnector);
};