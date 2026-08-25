function simpleFor(arr, callback) {
    for (const item of arr) {
        callback(item);
    }
}

const foodList = ["sushi", "meat", "sandwich"];

simpleFor(foodList, (food) => {
    console.log(food + " is delicious!");
})