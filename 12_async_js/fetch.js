/* fetch('https://jsonplaceholder.typicode.com/todos/1').then((response)=>{
    console.log('Resolved', response);
    return response.json();
}).then((data) =>{
    console.log(data);
}).catch((error)=>{
    console.log('rejected', error);
}); */

const getTodos =  async () => {

    const response = await fetch('https://jsonplaceholder.typicode.com/todoss/1');

    if(response.status !== 200){
        throw new Error('cannot fetch the data');
    }

    const data = await response.json();
    return data;

};

getTodos()
    .then(data =>console.log('resolved:', data))
    .catch(error => console.log('rejected:', error.message));