const angle_input=document.querySelectorAll('.angle-input')
const check_traingle=document.querySelector('.check-triangle-btn');
const check_traingle_output=document.querySelector('.check-triangle-output')

// for checking if it is a triangle or not


function calculateAngleSum(angle1,angle2,angle3){
	let sum=angle1+angle2+angle3;
	return sum;
}

function isTriangle(){
	let sumOfAngles=calculateAngleSum(Number(angle_input[0].value),Number(angle_input[1].value),Number(angle_input[2].value));
	console.log(sumOfAngles)
	if(sumOfAngles===180){
		check_traingle_output.innerText="It is a triangle";
	}else{
		check_traingle_output.innerText="It is not a triangle";
	}
}

check_traingle.addEventListener('click',isTriangle);


