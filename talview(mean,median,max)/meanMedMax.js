let largeNo = function(array) {
    let max = array[0];
      for( let i=1;i<array.length;i++){
        if(array[i]>max)
          max=input[i];
      }
      
      return max;
    };
    
    let mean = function(array) {
     let arraySum = 0;
      for (var i=0; i<array.length; i++) {
       arraySum += array[i];
      };
      return arraySum;
    };
    
     
    var median = function(array) {
        array = array.sort();
        if (array.length % 2 === 0) { 
          return (array[array.length/2] + array[(array.length / 2) - 1]) / 2;
        }
        else {
          return array[(array.length - 1) / 2]; }
      };
    
    let array = [8,1,6,2,6,4,2,0,7]
    
    console.log("largeNo : "  +largeNo(array))
    console.log("mean : "  +mean(array))
    console.log("median : "   +median(array))
    