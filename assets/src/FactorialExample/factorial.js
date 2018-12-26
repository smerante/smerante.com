var fact =[1,1];
function factorial(n)
{	
	
	document.getElementById("id1").innerHTML = "Didn't have to recurse! Saved Time and Space!";
	factorialFunc(n);
	document.getElementById("Factorial").innerHTML = " "+fact[n];
}
function factorialFunc(n)
{
	if (n === 0) {
		return fact[1];
	  }
	  if((fact.length - 1) < n){
	  	 document.getElementById("id1").innerHTML = "Had to recurse";
	  	  return fact[n] = factorialFunc(n-1)*n;
	  }
	  else
	  {
	  	   return fact[n];
	  }
}
function delay(ms) {
        var cur_d = new Date();
        var cur_ticks = cur_d.getTime();
        var ms_passed = 0;
        while(ms_passed < ms) {
            var d = new Date();  
            var ticks = d.getTime();
            ms_passed = ticks - cur_ticks;
            d = null;  
        }
    }
