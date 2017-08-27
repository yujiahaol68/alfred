import { httpService } from './connections/express';
import { ServiceContainer } from './core/ServiceContainer';
import * as dotenv from 'dotenv';

const registerBootService = async () => {
  const container = new ServiceContainer();
  container.create(httpService);
  return container;
};

const loadConfig = async () => {
  dotenv.config();
};

export {
  registerBootService,
  loadConfig,
};