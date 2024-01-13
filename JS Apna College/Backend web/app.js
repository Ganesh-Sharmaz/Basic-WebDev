// class user {
//     constructor(name, email){
//         this.name = name;
//         this.email = email;
   
//     }
//     viewData () {
//         console.log("user name is", this.name)
//         console.log("user email is", this.email)
//     }
    
    
// }

// let user1 = new user('Ganesh', 'shashanklhr@gmail.com')

// class admin extends user {
//     constructor(name, email){
//         super(name, email)
//     }
// }


function getData (dataId, getNextData){
    setTimeout(() => {
        console.log("data", dataId);
        if (getNextData){
            getNextData();

        }
        
    }, 2000)

}

getData(1,() => {
    getData(2, () => {
        getData(3, () => {
            getData(4, () => {
                getData(5,() => {
                    getData(6, () => {
                        getData(7, () => {
                            getData(8, () => {
                                getData(9,() => {
                                    getData(10, () => {
                                        getData(11, () => {
                                            getData(12, () => {
                                                getData(13)
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})
