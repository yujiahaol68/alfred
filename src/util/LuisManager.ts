import {
  EntityRecognizer,
} from 'botbuilder';

export class LuisManager {

  public static getEntityContent(args:any, entityName:string) {
    const entity = EntityRecognizer.findEntity(args.intent.entities, entityName);
    if (!entity) return undefined;
    return entity.entity ? entity.entity : undefined;
  }

  public static getDate(args:any) : Date | null {
    return EntityRecognizer.parseTime(args.intent.entities);
  }
}