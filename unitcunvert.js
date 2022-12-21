var form = document.querySelector('form');
form.addEventListener('submit', function(e){
var feet = Document.querySelector('#feet');
var results = document.querySelector('#results');
e.preventDefault()
feet = parseInt(feet.value);

if(isNaN(feet)){
    results.textContent="please enter a valid number!";
}
else if(feet<=0){
    results.textContent = "please enter a feet value > 0";
}
else {
    var converted_value = feet * 30.48;
    results.textContent = `${converted_value} cm`;
    document.querySelector('#feet').value = '';
}
})