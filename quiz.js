const quizForm=document.querySelector('.quiz-form');
const submit_quiz_ans=document.querySelector('#submit-quiz-answer');
const output_quiz=document.querySelector('.output-quiz');

const correctQuizAnswers=["90°","right angle","one right angle","12, 16, 20","Equilateral triangle"];

function calculateQuizScore(){
	let score=0;
	let index=0;

	
	const formResults=new FormData(quizForm);
	for(let value of formResults.values()){
		if(value===correctQuizAnswers[index]){
			score++;
		}
		index++;
	}

	output_quiz.innerText="Your score is "+score;
}

submit_quiz_ans.addEventListener('click',calculateQuizScore);