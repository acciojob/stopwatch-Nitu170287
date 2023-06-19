//your code here
let secele = document.querySelector(".second")
//console.log(secele)
let minele = document.querySelector(".minute")
//console.log(minele)
let hrele = document.querySelector(".hour")
let interval;
let sec =0
let min=0
let hr =0
let startBtn =document.querySelector(".start")
let stopBtn =document.getElementById("stop")
console.log(startBtn)
startBtn.addEventListener("click",start)
	function start(){
	interval = setInterval(function(){
		if(sec<59){
		sec+=1
		secele.innerHTML = sec <10 ? "0"+sec:sec
	}else{
		sec=0;
		secele.innerHTML = sec <10 ? "0"+sec:sec
			if(min<59){
		min+=1
		minele.innerHTML = min<10?"0"+min:min+":"
	}else{
				min=0;
				minele.innerHTML = min<10?"0"+min:min+":"
		if(hr<59){
			hr+=1
			hrele.innerHTML = hr<10?"0"+hr:hr+":"
		}
	}
	}
	
	},1000)
	
	
}


function pause(){
	clearInterval(interval)
	startBtn.style.pointerEvent="visible"
}

function stop(){
	clearInterval(interval)
	sec=0;
	min=0;
	hr=0
	secele.innerHTML ="00"
	minele.innerHTML ="00:"
	hrele.innerHTML ="00:"
}





