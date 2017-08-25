export interface BotProfile {
  fullName:string;
  nickName?:string;
  birthday:string;
  title:string;
  shortIntroduction:string;
  longIntroduction?:string[];
  job?:string;
}

export interface Connection {
  name:string;
  connectionInstance:any;
}