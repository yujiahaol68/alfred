import {} from 'jest';
import { MsgUtils } from '../src/util/MsgUtils';

describe('msg helper class', () => {

  it('should parse correct DateTime from sentence', () => {
    const parsedTime = MsgUtils.getDateFromUtterance('I will meet you at 10am tomorrow');
    const nowTime = new Date();

    expect(parsedTime.getHours()).toBe(10);

    if (parsedTime.getMonth() === nowTime.getMonth()) {
      expect(parsedTime.getDay()).toBe(nowTime.getDay() + 1);
    } else {
      expect(parsedTime.getMonth()).toBe(nowTime.getMonth() + 1);
    }

  });

  it('should parse boolean value from sentence', () => {
    expect(MsgUtils.meanYes('OK')).toBeTruthy();
    expect(MsgUtils.meanYes('yes please')).toBeTruthy();
    expect(MsgUtils.meanYes('do not')).toBeFalsy();
  });

});