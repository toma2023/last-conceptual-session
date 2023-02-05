function radianToDegree(radian){
    const PI = 3.14159265359;
    const degree = (radian *(180/PI)).toFixed(2);
    
 return degree;   
}
let result = radianToDegree(199);
console.log(result);