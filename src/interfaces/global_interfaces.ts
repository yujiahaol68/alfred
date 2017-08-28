export interface BotProfile {
  fullName:string;
  nickName?:string;
  birthday:string;
  title:string;
  shortIntroduction:string;
  longIntroduction?:string[];
  job?:string;
}

export interface MasterProfile {
  fullName:string;
  name:string;
  country?:string;
  nickName?:string;
  shortIntroduction:string;
}

export interface Connection {
  name:string;
  connectionInstance:any;
}

interface BotConfig {
  microsoft_app_id:string;
  microsoft_app_password:string;
  port:number;
}

interface ServiceConfig {
  luis_app_url:string;
}

export interface Config {
  botFramework:BotConfig;
  services:ServiceConfig;
}