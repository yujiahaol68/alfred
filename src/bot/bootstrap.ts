import { httpService } from './connections/express';
import { ServiceContainer } from './core/ServiceContainer';
import * as dotenv from 'dotenv';
import * as path from 'path';

const registerBootService = async () => {
  const container = new ServiceContainer();
  container.create(httpService);
  return container;
};

const loadConfig = async () => {
  dotenv.config({ path: path.join(__dirname, '..', '..') });
};

export {
  registerBootService,
  loadConfig,
};