/**
 * Inserts an item to an existing array at a particular position
 * shifting the rest of the items.
 *
 * This is a pure function and doesn't change the original
 * parameters.
 *
 * @param {Array} arr Input array.
 * @param {number} index Index where to insert the item.
 * @param {any} item The item to insert.
 *
 * @return {Array} The new array with the item inserted.
 */
export function insertItemAtIndex(arr, index, item) {
	// 🧸 Use Array.prototype.slice to create two arrays
	// 🧸 Use spread operator to join them with the new item
	// 🧸 At the index.
}

/**
 * Reorder an array by taking an existing item at an index
 * and put it at a new index, shifting the rest of the items.
 *
 * @param {Array} arr Input array.
 * @param {number} from Index of the item to reorder.
 * @param {number} to The new position where to insert it.
 */
export function reOrderArray(arr, from, to) {
	// If from and to are just the same, then just
	// return a copy of the array
	if (from === to) {
		return [...arr];
	}
	// If from or to are out of bound, then throw an error
	if (from >= arr.length || from < 0) {
		throw new Error('from has to be within array length');
	}
	if (to >= arr.length || to < 0) {
		throw new Error('to has to be within array length');
	}
	// // Let's take the item to move
	// const itemToMove = arr[from];
	// // Now the parts of the array to move
	// // differs based on whether from is greater than to or not
	// if (from > to) {
	// 	// The first part is 0 -> to - 1
	// 	// Second part is the item to move
	// 	// Third part is to -> from - 1
	// 	// Last is from -> end
	// 	return [
	// 		...arr.slice(0, to),
	// 		itemToMove,
	// 		...arr.slice(to, from),
	// 		...arr.slice(from + 1),
	// 	];
	// }

	// // Since from < to
	// // First part is 0 -> from -1
	// // Second part is from + 1 -> to
	// // Third part is item to move
	// // Last is to +1 -> end
	// return [
	// 	...arr.slice(0, from),
	// 	...arr.slice(from + 1, to + 1),
	// 	itemToMove,
	// 	...arr.slice(to + 1),
	// ];

	// Or we could use splice on an copy array
	const newArr = [...arr];
	// 🎙️ So in the first operation
	// 🎙️ newArr.splice(from, 1)
	// 🎙️ We delete 1 item from `from` of the array and store it
	// 🎙️ Then in the second operation
	// 🎙️ newArr.splice(to, 0, ...)
	// 🎙️ We delete 0 items from `to` and put the deleted
	// 🎙️ item there.
	newArr.splice(to, 0, ...newArr.splice(from, 1));
	return newArr;
}

/**
 * Get the email from all users and return them as an array.
 *
 * @param {Array} data Data of users.
 * @returns {string[]} Array of emails.
 */
export function getEmails(data) {
	return data.map(item => item.email);
}
