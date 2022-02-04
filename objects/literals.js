/* const blogs = [
    {title: 'The relationship between education and income', likes: 30},
    {title: 'Top 10 hamburgers in bucaramanga', likes: 25}
]

console.log(blogs) */

let user = {
    name : 'nicolas',
    lastName : 'cordoba',
    age : 23,
    email : 'nicolascordoba97@hotmail.com',
    location : 'bucaramanga',
    blogs : [
        {title: 'The relationship between education and income', likes: 30},
        {title: 'Top 10 hamburgers in bucaramanga', likes: 25}
    ],

    login(){
        console.log('The user logged in');
    },

    logBlogs(){
        console.log('Se han escrito los siguientes blogs');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        });
    }
};

user.logBlogs();