const angle_input=document.querySelectorAll('.angle-input')
const check_traingle=document.querySelector('.check-triangle-btn');
const check_traingle_output=document.querySelector('.check-triangle-output')

// for checking if it is a triangle or not


function calculateAngleSum(angle1,angle2,angle3){
	let sum=angle1+angle2+angle3;
	return sum;
}

function isTriangle(){
	var angle_1=Number(angle_input[0].value);
	var angle_2=Number(angle_input[1].value);
	var angle_3=Number(angle_input[2].value);

	if(angle_1<=0 || angle_2<=0 || angle_3<=0){
		check_traingle_output.innerText="Please enter positive and non-zero angle values";
	}else{
		let sumOfAngles=calculateAngleSum(angle_1,angle_2,angle_3);
		if(sumOfAngles===180){
			check_traingle_output.innerText="It is a triangle";
		}else{
			check_traingle_output.innerText="It is not a triangle";
		}
	}

	
}

check_traingle.addEventListener('click',isTriangle);


