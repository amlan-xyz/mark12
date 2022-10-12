const sides=document.querySelectorAll('.side-input');
const hypotenuseBtn=document.querySelector('.calculate-btn')
const outputHypotenuse=document.querySelector('.print-output');

function calculateSumOfSquares(a,b){
	const sumOfSquares=a*a+b*b;
	return sumOfSquares;
}

function calculateHypotenuse(){
	var base=Number(sides[0].value);
	var height=Number(sides[1].value)
	if(base<=0 || height<=0){
		outputHypotenuse.innerText="Please enter positive and non-zero values ";
	}else{
		const sumOfSquares=calculateSumOfSquares(base,height);
		const lengthOfHypotenuse=Math.sqrt(sumOfSquares);
		outputHypotenuse.innerText="The lenght of the hypotenuse is " +lengthOfHypotenuse.toFixed(2);
	}
	
}

hypotenuseBtn.addEventListener('click',calculateHypotenuse);