async function getData() {
    // http response    
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    // http response => json
    const data = await res.json();
    // return data;
    console.log(data);
}

getData();

// why this is not working? => karna kalo gapake await, dia bakal langsung return pendingData yang berisi promise.
// async function getData() {
//     // http response    
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     // http response => json
//     const data = await res.json();
//     return data;
// }

// console.log(getData());