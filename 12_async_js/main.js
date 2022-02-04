const getTodos = (resource) => {

    return new Promise((resolve, reject)=>{
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () =>{
            if(request.readyState === 4 && request.status === 200){
                const data = JSON.parse(request.responseText)
                resolve(data);
            } else if(request.readyState === 4){
                reject('Error getting resource');
            }
        });
        
            request.open('GET', resource);
            request.send()
    });
};

getTodos('https://jsonplaceholder.typicode.com/todos/1').then((data)=>{
    console.log('Promise resolved: ', data)
    return getTodos('https://jsonplaceholder.typicode.com/todos/2')
    }).then((data)=>{
        console.log('Promise 2 resolved', data);
        return getTodos('https://jsonplaceholder.typicode.com/todos/3')
    }).then((data)=>{
            console.log('Promise 3 solved:', data)
    }).catch((error)=>{
    console.log('Promise rejected:', error)
});

//Promise Example

/* const getSomething = () =>{

    return new Promise((resolve, reject)=>{
        //fetch something, network request, aca deberia atrapar los datos
        //resolve('some data');
        reject('some error');
    })
}; */

/* getSomething().then((data)=>{
    console.log(data);
}, (error)=>{
    console.log(error);
}); */

/* getSomething().then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})
 */