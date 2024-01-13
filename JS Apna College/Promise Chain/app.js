const getData = (data) => {
    console.log("fetching data", data)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", data)
            resolve("success")
        }, 2000)
    })
}

// Promise Chain

getData(1).then((res) =>{
    console.log(res)
    return getData(2)
    
}).then((res) => {
    console.log(res)
    return getData(3)
    
}).then((res) =>{
    console.log(res)
    return getData(4)
    
}).then((res) => {
    console.log(res)
    return getData(5)
    
}).then((res) =>{
    console.log(res)
    return getData(6)
    
}).then((res) => {
    console.log(res)
    return getData(7)
    
}).then((res) =>{
    console.log(res)
    return getData(8)
    
}).then((res) => {
    console.log(res)
    return getData(9)
    
})


// const asyncFunc1 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data 1")
//             resolve("success")
//         }, 3000);
//     } );
// }

// const asyncFunc2 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data 2")
//             resolve("success")
//         }, 3000);
//     } );
// }

// const asyncFunc3 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data 3")
//             resolve("success")
//         }, 3000);
//     } );
// }

// const asyncFunc4 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data 4")
//             resolve("success")
//         }, 3000);
//     } );
// }

// const asyncFunc5 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data 5")
//             resolve("success")
//         }, 3000);
//     } );
// }

// const asyncFunc6 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data 6")
//             resolve("success")
//         }, 3000);
//     } );
// }

// const asyncFunc7 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data 7")
//             resolve("success")
//         }, 3000);
//     } );
// }



// console.log("fetching data 1...");
// asyncFunc1().then((res) => {
//     console.log(res)
//     console.log("fetching data 2")
//     asyncFunc2().then((res) => {
//         console.log(res);
//         console.log("fetching data 3")
//         asyncFunc3().then((res) => {
//             console.log(res);
//             console.log("fetching data 4")
//             asyncFunc4().then((res) => {
//                 console.log(res);
//                 console.log("fetching data 5")
//                 asyncFunc5().then((res) => {
//                     console.log(res);
//                     console.log("fetching data 6")
//                     asyncFunc6().then((res) => {
//                         console.log(res);
//                         console.log("fetching data 7")
//                         asyncFunc7().then((res) => {
//                             console.log(res);
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })

