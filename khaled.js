document.getElementById("khs");
console.log(document.getElementById("khs").innerHTML);
var title1 = document.getElementById("khs");
title1.innerHTML="change by js"
console.log(title1.innerHTML)
title1.style.color="red";
title1.style.backgroundColor="green";
var newdiv = document.getElementById("newdiv");
newdiv.innerHTML=`<h1>  h1 by js </h1>`;
var h11 = document.getElementsByClassName("h11");
console.log(h11);
//h11[1].innerHTML=("this is from java");
for(let i=0;i<=h11.length;i++){
    if(i%2==0){h11[i].innerHTML='this for loop java';
        h11[i].style.color="red";
    }
    else{h11[i].innerHTML='this for loop java' ;
        h11[i].style.color="blue";
        }


}



