module.exports.all = function all(promisesArray) {
    if (!Array.isArray(promisesArray)) {
        return Promise.reject(new TypeError('Input must be an array of promises'));
    }

    return new Promise((resolve, reject) => {
        const results = [];
        let completed = 0;

        promisesArray.forEach((promise, index) => {
            Promise.resolve(promise)
                .then((value) => {
                    results[index] = value;
                    if (++completed === promisesArray.length) {
                        resolve(results);
                    }
                })
                .catch(reject);
        });

        if (promisesArray.length === 0) {
            resolve([]);
        }
    });
};
