import { Commander } from './';

export default abstract class Visualizer extends Commander {
  /**
   * Create a visualizer.
   *
   * @param title
   */
  constructor(title?: string) {
    super(arguments);
  }

  /**
   * Pause to show changes in all visualizers.
   *
   * @param lineNumber The line number to indicate when paused. If omitted,
     the line calling this method will be indicated.
   */
  static delay(lineNumber?: Number) {
    this.command(null, 'delay', arguments);
  }

  /**
   * Reset the visualizer.
   */
  reset() {
    this.command('reset', arguments);
  }
}
