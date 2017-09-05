import {
  Session,
  EntityRecognizer,
} from 'botbuilder';

export class MsgUtils {
  public static sayAsSend(session:Session, msg:string) {
    return session.say(msg, msg);
  }

  public static getDateFromUtterance(msg:string) : Date | null {
    return EntityRecognizer.parseTime(msg);
  }

  public static meanYes(msg:string) : boolean {
    return EntityRecognizer.parseBoolean(msg);
  }

  public static has(msg:string, matches:string) : boolean {
    const reg = new RegExp(matches, 'gi');
    return reg.test(msg);
  }

  public static extract(type:string, msg:string) {
    // TODO: ues regular expression to extract specify str
  }

}