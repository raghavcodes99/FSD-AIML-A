// const promise = new Promise((resolve , reject)=>{
// setTimeout(()=>{
// resolve("hlo there")
// },2000)

// }).then(resolve=>{
//    console.log(resolve) ;

// }).catch(ere=>{
//     console.log(ere)
// })

function login({ username, password }) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            resolve({ username, password });
            console.log("hlo there")
        }, 1000);
    });
}

function getdata({ username }) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const age = 56;
            resolve({ username, age });
        }, 1000);
    });
}

function Calculatedata({ username, age }) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ username, age, result: "this is my age multiply by " + age * 5 });
        }, 1000);
    });
}

function sendsms({ username, age, result }) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const message = "this is my sms " + age + " and result is: " + result;
            console.log(message); // log here
            resolve(message);
        }, 1000);
    });
}

login({ username: "john", password: "1234" })
    .then(data => getdata(data))
    .then(data => Calculatedata(data))
    .then(data => sendsms(data))
    // .then(finalMsg => {
    //     console.log(finalMsg);
    // })
    .catch(err => {
        console.error("Error:", err);
    });