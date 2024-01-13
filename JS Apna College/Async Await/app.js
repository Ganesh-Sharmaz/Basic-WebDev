function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve(200);

        }, 2000);
    });
}

async function getAllData() {
    const timeout = 5000;
    for( let i=1; i<=5; i++){
        await getData(i);
    }
}
