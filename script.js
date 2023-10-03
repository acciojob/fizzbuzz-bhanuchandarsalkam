//your JS code here. If required.
function search(n){
	for(let i=1;i<=n;i++){
		if(i%3==0){
			console.log("Fizz");
		}
		else if(i%5==0){
			console.log("Buzz");
        }
		else if(i%3==0&&i%5==0){
			console.log("FizzBuzz");
		}
		else{
			console.log(i);
		}
	}
}
alert(search(20));