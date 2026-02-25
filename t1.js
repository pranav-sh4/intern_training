function fetchData(callback) {
    setTimeout(()=> {
        const data = { id: 1, message: "Data fetched successfully!"};
        callback(data);
    }, 2000);
}

fetchData((result)=> {
    console.log("Response received: ", result);
});