import * as request from 'superagent';
import { config } from '../../config';

class ServiceRequester {
  private static _instance:ServiceRequester;

  constructor(chattingServiceUrl:string) {
    this.chatterUrl = chattingServiceUrl;
  }

  public static getInstance(serviceSource:any) {
    ServiceRequester._instance = ServiceRequester._instance || new ServiceRequester(serviceSource.chatter_bot_url);
    return ServiceRequester._instance;
  }

  private chatterUrl:string;

  public getResponse(msg:string) {

  }
}

export const ServiceMessenger = ServiceRequester.getInstance(config.services);