import {} from 'jest';
import { ServiceContainer } from '../src/bot/core/ServiceContainer';

describe('Service IOC container', () => {
  const container = new ServiceContainer();

  it('should get service instance that have already registered', () => {
    container.create({
      name: 'testService',
      connectionInstance: new Date(),
    });
    const serviceWanted = container.resolve('testService');
    expect(serviceWanted).toBeInstanceOf(Date);
  });

  it('should throw error if register service that have exist', () => {
    container.create({
      name: 'service',
      connectionInstance: new Date(),
    });
    expect(() => {
      container.create({
        name: 'service',
        connectionInstance: new Date(),
      });
    }).toThrowError();
  });

  it('should throw error if resolve an service does not exist', () => {
    expect(() => {
      container.resolve('notExistService');
    }).toThrowError();
  });

});