function customSortDescending(arr) {
    const n = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] < arr[i + 1]) {
                // Swap elements if they are in the wrong order (ascending order)
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return arr;
}

const inputArray = [5, 2, 9, 1, 5, 6];
const sortedArray = customSortDescending(inputArray);
console.log(sortedArray); // Output: [9, 6, 5, 5, 2, 1]
