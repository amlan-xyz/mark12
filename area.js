const firstSide=document.querySelector('#side1');
const secondSide=document.querySelector('#side2');
const thirdSide=document.querySelector('#side3');
const calculateArea=document.querySelector('.calculate-btn');
const outputArea=document.querySelector('.print-output');


function findArea(){
	const firstSideValue = Number(firstSide.value);
  	const secondSideValue = Number(secondSide.value);
  	const thirdSideValue = Number(thirdSide.value);

	  if (firstSideValue + secondSideValue > thirdSideValue &&
		secondSideValue + thirdSideValue > firstSideValue &&
		firstSideValue + thirdSideValue > secondSideValue){
			const S=(firstSideValue+secondSideValue+thirdSideValue)/2;

			const result = Math.sqrt(
			S *(S - firstSideValue) *(S - secondSideValue) *(S - thirdSideValue));
			outputArea.innerText="Area of the triangle is "+result.toFixed(2);
		}else{
			outputArea.innerText="Enter a valid side lengths";
		}
}

calculateArea.addEventListener('click',findArea);