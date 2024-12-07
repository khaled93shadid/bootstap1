var form1 = document.getElementById('form');
form1.addEventListener('submit',function(event){
event.preventDefault();
var num1 = document.getElementById('num1').value
console.log(num1)
localStorage.setItem('num1',num1)
XPathResult.innerhtml="you search about"+localStorage.getItem('num1')
}) 