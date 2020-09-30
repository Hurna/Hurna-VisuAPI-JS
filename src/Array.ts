import { Visualizer } from './';

export default class Array extends Visualizer {
  /**
   * Set an array to visualize.
   *
   * @param array
   */
  set(_array?: any[]) {
    this.command('set', arguments);
  }

  /**
   * Add/Move a ptr on a element of the array
   *
   * @param x the index to put the pointer on
   */
  setPtr(_key: string, _x?: number) {
    this.command('setPtr', arguments);
  }

  /**
   * Swap two elements of the array
   *
   * @param a first element, should be a ptr key or an index.
   * @param b second element, should be a ptr key or an index.
   */
  swap(_a: string | number, _b: string | number) {
    this.command('swap', arguments);
  }

  /**
   * Notify that a value has been changed.
   *
   * @param x The index of the array.
   * @param v The new value to change to.
   */
  patch(_x: number, _v?: any) {
    this.command('patch', arguments);
  }

  /**
   * Stop notifying that a value has been changed.
   *
   * @param x The index of the array.
   */
  depatch(_x: number) {
    this.command('depatch', arguments);
  }

  /**
   * Select a range of the array.
   *
   * @param bx The index to select inclusively from.
   * @param ex The index to select inclusively to. If omitted, it will only select index `sx`.
   */
  select(_bx: number, _ex?: number) {
    this.command('select', arguments);
  }

  /**
   * Stop selecting a range of the array.
   *
   * @param bx The index to stop selecting inclusively from.
   * @param ex The index to stop selecting inclusively to. If omitted, it will only stop selecting index `sx`.
   */
  deselect(_bx: number, _ex?: number) {
    this.command('deselect', arguments);
  }

  /**
   * Select a scope on the array.
   *
   * @param bx The index to select inclusively from.
   * @param ex The index to select inclusively to. If omitted, it will select index from `sx` to end.
   */
  selectScope(_bx: number, _ex?: number) {
    this.command('selectScope', arguments);
  }

  /**
   * Stop selecting the scope of the array.
   *
   */
  deselectScope() {
    this.command('deselectScope', arguments);
  }
}
