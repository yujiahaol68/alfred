import { Turing } from './Turing';
import * as Bot from '../interfaces';
import { Session } from 'botbuilder';

export class Alfred extends Turing {

  private readonly _master:Bot.MasterProfile;

  constructor(botProfile:Bot.BotProfile, masterProfile:Bot.MasterProfile) {
    super(botProfile);
    this._master = masterProfile;
  }

  public getMasterProfile() : Bot.MasterProfile {
    return this._master;
  }

  public setMemory(container:Session, type:string, rawData:any) {
    // TODO: object data should be serialized first
    // data should be key-value pair
    const value = rawData.value;
    const key = rawData.key;
    switch (type) {
      case 'user':
        container.userData[key] = value;
        break;
      case 'dialog':
        container.dialogData[key] = value;
        break;
      case 'share':
        container.conversationData[key] = value;
        break;
      case 'secret':
        container.privateConversationData[key] = value;
        break;
      default:
        throw new Error('Please specify correct Session field to store data');
    }
  }

}