//task 01 :
function iterate(value) {
    return new Promise((resolve) =>
        setTimeout(() => {
            resolve(value);
        }, 1000)
    );
}
asyncfunction iterateWithAsyncAwait(arr) {
    for (const value of arr) {
        let result = await iterate(value)
        console.log(result);
    }
}
let values = [1, 2, 3, 4, 5];
iterateWithAsyncAwait(values);

//task 02
function fetchData() {
    return new Promise((resolve) =>
        setTimeout(() => {
            resolve({ data: "this is a simulation of data from an API" });
        }, 4000)
    );
}
async function awaitCall() {
    console.log("Starting ....");
    let data = await fetchData();
    console.log(data)
    console.log("End");
}  
// awaitCall();
console.log("Starting...")
fetchData()
    .then((data) => console.log(data))
    .finally(() => console.log("End..."))
    .catch((err) => console.log(err));

// task 03
function fetchData2(test) {
    return new Promise((resolve, reject) =>
        setTimeout(() => {
            if (test) {
                resolve({ data: "this is a simulation of data from an API" });
            } else {
                reject("Error 404")
            }
        }, 4000)
    );
}
async function awaitCall2(){
    try {
         console.log("Starting...")   
    } catch (error) {
  }
}
// task 04
function Call1(){
    return new Promisee((resolve) =>
        setTimeout(() => {
            resolve({ data: "CALL FROM API 1" });
        }, 3000)
    );
}
    function Call2(){
    return new Promisee((resolve) =>
        setTimeout(() => {
            resolve({ data: "CALL FROM API 1" });
        }, 3000)
    );
    }

