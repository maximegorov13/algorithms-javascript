// Рекурсивный бинарный поиск (Recursive Binary Search)

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let count = 0;

function binarySearch(array, item, start = 0, end = array.length - 1) {
    count += 1;

    if (start > end) return null;

    const middle = Math.floor((start + end) / 2);
    const guess = array[middle];

    if (guess === item) {
        return middle;
    } else if (guess > item) {
        return binarySearch(array, item, start, middle - 1);
    } else {
        return binarySearch(array, item, middle + 1, end);
    }
}

console.log('Recursive Binary Search:', binarySearch(array, 10));
console.log('Count:', count);
