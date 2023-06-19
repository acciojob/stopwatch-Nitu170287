//your code here
let sec = document.querySelector(".second")
console.log(sec)
let min = document.querySelector(".minute")
console.log(min)
let hr = document.querySelector(".hour")
let interval;
interval = setInterval(start(),1000)
function start(){
	if(sec>59){
		sec+=1
		sec.innerHTML = sec >10 ? "0"+sec:sec
	}else{
		sec=0;
		sec.innerHTML = sec >10 ? "0"+sec:sec
	}
	if(min>59){
		min+=1
		min.innerHTML = min>10?"0"+min:min+":"
	}else{
		hr(hr>59){
			hr+=1
			hr.innerHTML = hr>10?"0"+hr:hr+":"
		}
	}
}
let start =document.getElementById("start")
let stop =document.getElementById("stop")

function stop(interval){
	clearInterval(interval)
	start.style.pointerEvent="visible"
}





