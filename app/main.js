function computeFactorial(num) {
   var factorial = 1;
   while (num>1){
   	factorial = factorial*num;
   	num=num-1;
   }
   return factorial; 
}