function insertionSort(arr: number[]) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i]
        while (arr[i - 1] > key && i > 0) {
            if (arr[i - 1] > key) {
                arr[i] = arr[i - 1]
                i--
            }
        }
        arr[i] = key
    }
    console.log(arr)
}

function selectionSort(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
        let min = arr[i]
        let indexOfMin = i
        for (let j = i; j < arr.length; j++) {
            if (min > arr[j + 1]) {
                min = arr[j + 1]
                indexOfMin = j + 1
            }
        }
        arr[indexOfMin] = arr[i]
        arr[i] = min
    }
    console.log(arr)
}

function bubbleSort(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[i]] = [arr[i], arr[j]]
            }
        }
    }
    console.log(arr)
}

function bubbleSortInsert(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            for (let j = i; j >= 0; j--) {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
            }
        }
    }
    console.log(arr)
}
let arr = [9, 5, 7, 3, 9, 1, 4, 3, 8, 1, 5, 7, 4];
bubbleSortInsert(arr)
// bubbleSort(arr)
// selectionSort(arr)
// insertionSort(arr)