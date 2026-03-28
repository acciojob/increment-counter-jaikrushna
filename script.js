var cnt =0;
var counter = document.getElementById("count");
var but = document.getElementById("btn");

but.addEventListener("click", ()=> {
	cnt++;
	counter.innerText=cnt;
})
