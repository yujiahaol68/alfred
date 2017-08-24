import * as Bot from '../interfaces/global_interfaces';
export abstract class Turing {
  public name:string;
  public nickName:string;
  public birthday:string;
  public shortIntroduction:string;
  public longIntroduction:string[];
  constructor(profile:Bot.BotProfile) {
    this.name = profile.fullName;
    this.nickName = profile.nickName || 'chatbot';
    this.birthday = profile.birthday;
    this.shortIntroduction = profile.shortIntroduction;
    this.longIntroduction = profile.longIntroduction || [];
  }
}