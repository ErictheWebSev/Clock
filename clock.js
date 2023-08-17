function clock() {
	let hour = document.getElementById("hours");
	let minute = document.getElementById("minutes");
	let second =  document.getElementById("seconds");
	let session = "AM";
	
	let h = new Date().getHours();
	let m = new Date().getMinutes();
	let s = new Date().getSeconds();
	
	if (h == 0) {
		h = 12;
	}
	
	if (h > 12) {
		h = h - 12;
		session = "PM";
	} 
	
	hour.innerHTML = h;
	minute.innerHTML = m;
	second.innerHTML = s;
	document.getElementById('session').innerHTML = session;
}
	let interval = setInterval(clock, 1000);