const sides=document.querySelectorAll('.side-input');
const hypotenuseBtn=document.querySelector('.calculate-btn')
const outputHypotenuse=document.querySelector('.print-output');

function calculateSumOfSquares(a,b){
	const sumOfSquares=a*a+b*b;
	return sumOfSquares;
}

function calculateHypotenuse(){
	const sumOfSquares=calculateSumOfSquares(Number(sides[0].value),Number(sides[1].value));
	const lengthOfHypotenuse=Math.sqrt(sumOfSquares);
	outputHypotenuse.innerText="The lenght of the hypotenuse is " +lengthOfHypotenuse;
}

hypotenuseBtn.addEventListener('click',calculateHypotenuse);