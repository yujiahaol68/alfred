import { httpService } from './connections/express';
import { botConnector } from './connections/botConnector';
import { ServiceContainer } from './core/ServiceContainer';

export const registerBootService = async () => {
  const container = new ServiceContainer();
  container.create(httpService);
  container.create(botConnector);
  return container;
};