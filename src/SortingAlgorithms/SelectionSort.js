export const selectionSort = (array) => {
    const animations = [];
    for (let i = 0; i < array.length; i++) {
        let min = i;
        console.log(min);
        for (let a = i + 1; a < array.length; a++) {
            if (array[a] < array[min]) {
                min = a;
            }
        }
        const temp = array[i];
        array[i] = array[min];
        animations.push([i, array[min]]);
        array[min] = temp;
        animations.push([min, temp]);
    }
    return animations;
};
