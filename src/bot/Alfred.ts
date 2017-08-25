import { Turing } from './Turing';
import * as Bot from '../interfaces';
class Alfred extends Turing {
  constructor(profile:Bot.BotProfile) {
    super(profile);
  }
}

export { Alfred };