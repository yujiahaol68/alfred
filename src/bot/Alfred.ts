import { Turing } from './Turing';
import * as Bot from '../interfaces';

export class Alfred extends Turing {
  constructor(profile:Bot.BotProfile) {
    super(profile);
  }
}