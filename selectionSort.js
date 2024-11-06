// Сортировка выбором (Selection Sort)

const array = [
    0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3,
    32,
];

let count = 0;

function findSmallestIndex(array) {
    let smallestElement = array[0];
    let smallestIndex = 0;

    for (let i = 1; i < array.length; i++) {
        if (array[i] < smallestElement) {
            smallestElement = array[i];
            smallestIndex = i;
        }

        count += 1;
    }

    return smallestIndex;
}

function selectionSort(array) {
    const sortedArray = [];
    const copyArray = [...array];

    for (let i = 0; i < array.length; i++) {
        const smallestIndex = findSmallestIndex(copyArray);
        sortedArray.push(copyArray.splice(smallestIndex, 1)[0]);
    }

    return sortedArray;
}

console.log('Selection Sort:', selectionSort(array));
console.log('Count:', count);
