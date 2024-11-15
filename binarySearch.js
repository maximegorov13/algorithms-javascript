// Бинарный поиск (Binary Search)

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let count = 0;

function binarySearch(array, item) {
    let start = 0;
    let end = array.length;

    while (start <= end) {
        count += 1;

        const middle = Math.floor((start + end) / 2);
        const guess = array[middle];

        if (guess === item) {
            return middle;
        } else if (guess > item) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }

    return null;
}

console.log('Binary Search:', binarySearch(array, 10));
console.log('Count:', count);
