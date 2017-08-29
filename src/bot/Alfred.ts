import { Turing } from './Turing';
import * as Bot from '../interfaces';
import { UniversalBot } from 'botbuilder';

export class Alfred extends Turing {

  private universe:UniversalBot;

  constructor(profile:Bot.BotProfile, universe:UniversalBot) {
    super(profile);
    this.universe = universe;
  }

}