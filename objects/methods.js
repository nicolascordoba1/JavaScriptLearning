let user = {
    name : 'nicolas',
    lastName : 'cordoba',
    age : 23,
    email : 'nicolascordoba97@hotmail.com',
    location : 'bucaramanga',
    blogs : ['The relationship between education and income', 'Top 10 hamburgers in bucaramanga'],

    login(){
        console.log('The user logged in');
    },

    logBlogs(){
        console.log('Se han escrito los siguientes blogs');
        this.blogs.forEach(blog => {
            console.log(blog);
        });
    }
};

user.logBlogs();
console.log(this);
