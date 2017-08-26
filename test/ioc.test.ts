import {} from 'jest';
import { ServiceContainer } from '../src/bot/core/ServiceContainer';

test('Service IOC container', () => {
  it('should have service that have already registed', () => {
    const container = new ServiceContainer();
    container.create({
      name: 'testService',
      connectionInstance: new Date(),
    });
    const serviceWanted = container.resolve('testService');
    expect(serviceWanted).toBeInstanceOf(Date);
  });
});