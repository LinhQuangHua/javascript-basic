// Promise(sync, async)

// Async: setTimeout, setInterval, fetch, XMLHttpRequest, request animation frame

var promise = new Promise(
    //Executor
    function (resolve, reject) {
        resolve(
            {
                id: '1',
                name: 'Javascript'
            }
        );
        // reject('Not found!');
    }
);

promise
    .then(function (courses) {
        console.log(courses);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        console.log('Done!');
    });

