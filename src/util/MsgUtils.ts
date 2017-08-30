import { Session } from 'botbuilder';

export class MsgUtils {
  public static sendAsSay(session:Session, msg:string) {
    session.say(msg, msg);
  }

  public static onlyAlpha(msg:string) {

  }
}