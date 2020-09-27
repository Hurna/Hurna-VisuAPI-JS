const MAX_COMMANDS = 1000000;
const MAX_OBJECTS = 10;

/**
 * @ignore
 */
interface Command {
  key: string | null,
  method: string,
  args: Array<any>,
}

export default abstract class Commander {
  /**
   * @ignore
   */
  public static commands: Command[] = [];
  private static objectCount = 0;
  private readonly key: string;

  protected constructor(iArguments: IArguments) {
    Commander.objectCount++;
    const className = (<any>this).constructor.name;
    this.key = Math.random().toString(36).substring(7),
    this.command(className, iArguments);
  }

  /**
   * @ignore
   */
  public static init() {
    this.commands = [];
    this.objectCount = 0;
  }

  protected static command(key: string | null, method: string, iArguments: IArguments) {
    const args = Array.from(iArguments);
    this.commands.push({
      key,
      method,
      args: JSON.parse(JSON.stringify(args)),
    });
    
    if (this.commands.length > MAX_COMMANDS) throw new Error('Too Many Commands');
    if (this.objectCount > MAX_OBJECTS) throw new Error('Too Many Objects');
  }

  /**
   * Remove the tracer.
   */
  destroy() {
    Commander.objectCount--;
    this.command('destroy', arguments);
  }

  protected command(method: string, iArguments: IArguments) {
    Commander.command(this.key, method, iArguments);
  }

  protected toJSON() {
    return this.key;
  }
}
