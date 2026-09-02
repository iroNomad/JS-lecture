
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

step('step 1: upload image')
    .then(() => step('step 2: resize image'))
    .then(() => step('step 3: apply filter'))
    .then(() => step('step 4: save image'), false)
    .catch((error) => console.log(error))
    .finally(() => console.log('all steps completed'));