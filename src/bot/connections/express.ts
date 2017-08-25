import * as Express from 'express';
import { Connection } from '../../interfaces/global_interfaces';

export const httpService:Connection = {
  name: 'express',
  connectionInstance: Express(),
};