const correctAnswer = ['B', 'A', 'B', 'B']; 
const form = document.querySelector('.quiz-form');
const scoreResult = document.querySelector('.result');

form.addEventListener('submit', e=>{
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    //Check Answers

    userAnswers.forEach((answer, index) =>{
        if(answer === correctAnswer[index]){
            score += 100/userAnswers.length; //You cand add as much questions as you want and you dony have to change the number
        }

        //Show Result on Page

        scrollTo(0,0); //Nos hace scroll hasta la coordenada indicada (0,0)

        scoreResult.classList.remove('d-none'); //Elimina la etiqueta de d-none de Bookstrap haciendo que se vea lo que está dentro del contenedor

        let output = 0;
        const timer = setInterval(() => {
            scoreResult.querySelector('span').textContent = `${output}%`;
            if(output === score){
                clearInterval(timer);
            } else{
               output++; 
            }           
        }, 10); //Set interval toma como primer argumento una call back function la cual se va a repetir cada tanto lo establezcamos en el segundo argumento, 10ms en este caso. En este caso tomamos el span y cambiamos su contenido de texto por el output que inicia en 0 y cuando sea igual al puntaje obtenido se ejecuta clearInterval que vuelve este intervalo a 0
    });    
});