let user = {
    name : 'nicolas',
    lastName : 'cordoba',
    age : 23,
    email : 'nicolascordoba97@hotmail.com',
    location : 'bucaramanga',
    blogs : ['The relationship between education and income', 'Top 10 hamburgers in bucaramanga']
};

console.log(user.name);
console.log(user['name']);

const nombre = 'name';

console.log(user[nombre]);

user.age = 35;
console.log(user.age)
user['age'] = 35;
console.log(user.age)