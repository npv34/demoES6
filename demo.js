

/* function start(callback1, callback2) { // callstack = doing
    setTimeout(() => {
        console.log("Starting........");
        callback1(callback2); // doing(end)
    }, 2000)
}

function doing(callback) { // callstack = end
    setTimeout(() => {
        console.log("Doing........");
        callback(); // end()
    }, 1000)
}

function end() {
    setTimeout(() => {
        console.log("Ending........");
    }, 1500)
}

start(doing, end);
 */


// Xy ly bat dong bo: bien doan code bat dong bo -> chay dong bo
/*
pure function
c1: callback function
c2: Su dung Promise

 */
function start() {
    const pms = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Starting........");
            resolve(10);
        }, 2000)
    })
    return pms;
}

function doing() {
    const pms = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Doing........");
            resolve(50);
        }, 1000)
    })
    return pms;
}

function end() {
    const pms = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Ending........");
            resolve();
        }, 1500)
    })
    return pms;
}

// start().then(r1 => {
//     doing().then(r2 => {
//         end().then(r3 => console.log("done........"));
//     })
// })

// c3 su dung async/await

async function init() {
    const r1 = await start();
    const r2 = await doing();
    const r3 = await end();
}

init();