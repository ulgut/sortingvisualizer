export const bubbleSort = (array) => {
    const arrayLength = array.length;
    const animations = [];
    for (let a = 0; a < arrayLength; a++) {
        let swapped = false;
        for (let i = 0; i < array.length - a - 1; i++) {
            if (array[i] > array[i + 1]) {
                const temp = array[i + 1];
                array[i + 1] = array[i];
                animations.push([i + 1, array[i]]);
                array[i] = temp;
                animations.push([i, temp]);
                swapped = true;
            }
        }
        if (swapped === false) {
            return animations;
        }
    }
};
