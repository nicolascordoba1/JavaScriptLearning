const greet = () => 'Hello world';
const result = greet();
console.log(result);

let people = ['nicolas', 'santiago', 'raymond', 'andrea'];

const logValue = (person, index) => {
    console.log(`${index} - ${person}`);
}

people.forEach(logValue);