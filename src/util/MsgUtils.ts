import {
  Session,
  EntityRecognizer,
} from 'botbuilder';

export class MsgUtils {

  private static regularExp = {
    email: new RegExp('/.+@.+\..+/g'),
    phoneNumber: new RegExp('/^1[34578]\d{9}$/'),
  };

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
    switch (type) {
      case 'email':
        return this.searchFor(this.regularExp.email, msg);
      case 'phoneNumber':
        return this.searchFor(this.regularExp.phoneNumber, msg);
      default:
        throw new Error('Not match any type of regular expression');
    }
  }

  private static searchFor(reg:RegExp, msg:string) {
    const results = reg.exec(msg);
    if (results) {
      return {
        matched: true,
        keyword: results[0],
      };
    } else {
      return {
        matched: false,
      };
    }
  }

}