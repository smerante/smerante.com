setInterval(setDate,1000);
onload = setDate;
function setDate()
{
	var time = document.getElementById("time");
	var d = new Date();
	time.innerHTML = d;
}
//TestChange