import _ from 'lodash';

/**
 * Swap two indices in an array.
 * @param {Array} arr
 * @param {Number} a Index of the first item
 * @param {Number} b Index of the second item
 * @returns {Array} copy of the swapped array.
 */
export const swap = (arr = [], a = 0, b = 0) => {
    const result = arr.slice();
    const tmp = result[a];
    result[a] = result[b];
    result[b] = tmp;
    return result;
};

/**
 * Move an item to the end of the array, or before the first item which matches cb.
 * @param {Array} arr
 * @param {Number} i Index of the item
 * @param {Function} cb Comparator to find the index
 * @returns {Array} copy of the updated array.
 */
export const moveToLast = (arr, i, cb) => {
    const result = arr.slice();
    const item = result[i];
    // Remove the item
    result.splice(i, 1);
    // Insert it before the first item that the cb returns true for, or the end of the array.
    const firstIndex = _.findIndex(result, cb);
    const idx = firstIndex === -1 ? result.length : firstIndex;
    result.splice(idx, 0, item);
    return result;
};

/**
 * Remove an item from an array.
 * @param {Array} arr
 * @param {Object} item The item to remove
 * @returns {Array} copy of the updated array.
 */
export const remove = (arr, item) => {
    const i = arr.indexOf(item);
    if (i === -1) {
        return arr;
    }
    const result = arr.slice();
    result.splice(i, 1);
    return result;
};
