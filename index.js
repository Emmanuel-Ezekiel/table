
function change(){
	var basic = "$54";
	var standard = "$50.4";
	var business = "$46.8";

	document.getElementById("1").innerHTML = basic;
	document.getElementById("2").innerHTML = standard;
	document.getElementById("3").innerHTML = business;
}

function onClick() {
    var basic = "$4.5";
	var standard = "$4.2";
	var business = "$3.9";

	document.getElementById("1").innerHTML = basic;
	document.getElementById("2").innerHTML = standard;
	document.getElementById("3").innerHTML = business;
}


const btns = Array.from(document.querySelectorAll('.btn-month'));

const toggleClass = (e) => {
  for (var el of btns) {
    el.classList.remove('--selected')
  }
  e.currentTarget.classList.add('--selected')
}

for (var el of btns) {
  el.addEventListener('click', toggleClass)
}