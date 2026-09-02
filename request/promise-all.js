
const step = (message, works = true) => {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!works) {
                reject('works not available');
                return;
            }
            console.log(message);
            resolve(message);
        }, 200);
    })
}

Promise.all([
    step('step 1: upload image'),
    step('step 2: resize image'),
    step('step 3: apply filter'),
    step('step 4: save image', )
])
    .then(() => console.log('all steps completed'))
    .catch((error) => console.log(error));