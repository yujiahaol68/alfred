import {
  EntityRecognizer,
} from 'botbuilder';

export class LuisManager {
  public static getEntityContent(args:any, entityName:string) {
    const entity = EntityRecognizer.findEntity(args.intent.entities, entityName);
    return entity.entity;
  }
}