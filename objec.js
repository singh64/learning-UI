function backG1()
{
	document.body.style.background = "Red";
	let timerId = setTimeout(backG2,1000);
}
function backG2()
{
	
	document.body.style.background = "Green";
	let timerId = setTimeout(backG1,1000);

}

backG1();
