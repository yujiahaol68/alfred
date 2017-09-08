import {} from 'jest';
import { LuisManager } from '../src/util/LuisManager';

const argsSample = {
  intent: {
    query: 'remind me to call my dad tomorrow',
    topScoringIntent: {
        intent: 'Reminder',
        score: 0.9337804,
    },
    intents: [
        {
            intent: 'Reminder',
            score: 0.9337804,
        },
        {
            intent: 'None',
            score: 0.0900467858,
        },
        {
            intent: 'LocationFinder',
            score: 0.009403142,
        },
        {
            intent: 'BookFlight',
            score: 0.002218235,
        },
        {
            intent: 'FoodOrder',
            score: 1.519075E-07,
        },
    ],
    entities: [
        {
            entity: 'tomorrow',
            type: 'builtin.datetime.date',
            startIndex: 25,
            endIndex: 32,
            resolution: {
                date: '2017-05-05',
            },
        },
        {
            entity: 'Call my dad',
            type: 'reminder.text',
        },
    ],
  },
};

describe('LUIS helper Class', () => {

  it('should get the content of some entity', () => {
    const entityContent = LuisManager.getEntityContent(argsSample, 'builtin.datetime.date');
    expect(entityContent).toBe('tomorrow');
  });

  it('should return date in the utterance', () => {
    const entityContent = LuisManager.getDate(argsSample);
    expect(entityContent).toBeInstanceOf(Date);
  });

});