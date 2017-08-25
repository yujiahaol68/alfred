import { Connection } from '../../interfaces';

class ServiceContainer {
  protected readonly connections:Connection[] = [];

  public create(connection:Connection) : void {
    if (this.has(connection.name))
      throw new Error('Service exist! Create new service failed.');
    this.connections.push(connection);
  }

  protected has(name:string) : boolean {
    return this.connections.find(connection => connection.name === name) ? true : false;
  }

  protected find(name:string) : Connection | undefined {
    return this.connections.find(connection => connection.name === name);
  }

  public resolve(serviceName:string) : any {
    const service = this.find(serviceName);
    if (service)
      return service.connectionInstance;
    throw new Error('Not found service!');
  }
}

export { ServiceContainer };