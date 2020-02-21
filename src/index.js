module.exports = function reverse (n) {
	let bool = 0;
	if(n<0)bool=1;
	if(bool)n=Math.abs(n);
  let a = 0;
  while(n>10){
  	a+=(n%10);
  	a*=10;
  	n/=10;
  	n= Math.trunc(n);
  }
  if(n==10)a=a*10+1;
  if(n!=10)a+=n;
  return a;
}
