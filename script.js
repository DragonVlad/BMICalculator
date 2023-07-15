let weight = document.getElementById('weight'),
    height = document.getElementById('height'),
    resultText = document.querySelector('.resultText'),
    resultTitle = document.querySelector('.resultTitle'),
    resultComment = document.querySelector('.resultComment');

    
function calculate(){
	if(weight.value == '' || height.value == ''){
		resultText.innerText = 'Empty field is existing!';
		resultTitle.innerText = '';
		resultComment.innerText = '';
		
	} else if(Number.isNaN(Number(weight.value)) || Number.isNaN(Number(height.value))){
		resultText.innerText = 'The field contains an invalid value';
		resultTitle.innerText = '';
		resultComment.innerText = '';
	} else {
		resultTitle.innerText = 'Ваш ИМТ: ';
		let [bmi, result] = getBMI();
		resultText.innerText = bmi;
		resultComment.innerText = result;
	}
}

function getBMI() {
	let bmi = (Number(weight.value) / (Number(height.value) ** 2)).toFixed(1);
	let result = (bmi < 18.5) ? 'Underweight' : 
			 (bmi >= 18.5 && bmi <= 24.9) ? 'Healthy' :
			 (bmi >= 25 && bmi <= 29.9) ? 'Overweight' : 
			 (bmi >= 30 && bmi <= 34.9) ? 'Obese' :
			  'Extremely obese';
	return [bmi, result];
}