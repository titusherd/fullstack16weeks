//resolve and reject are functions that are passed to the executor function. similar to return. 

//using resolve because we are returning a value. and need to pass it to the then method and catch method.

function getData() {
    return new Promise((resolve, reject) => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((pendingData) => {
                // console.log(pendingData);
                return pendingData
            })
            .then((result) => {
                resolve(result.json())
            })
            .catch((error) => {
                reject(error)
            })
    })
}

getData()
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })
