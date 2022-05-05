/**
 * module with any math function, learn more {@tutorial Get-Started} 
 *  @module MyMath 
 *  @author isaac Grimaldo <isaacgrimaldo432@gmail.com>
 *  @copyright IsaacDev
 */


/**
 *  make the sum  of the x and y 
 * @param {number} x  first number
 * @param {number} y  second number
 * @returns {number} result of the sum between  x & y
 * @example
 * import myMath from "MyMath";
 * const result = myMath.add(5 , 2)
 * console.log(result)// => 7 
 */

const add = ( x  , y) => {
   return x + y 
}


/**
 *  calculated the potency's value in a specific potency
 * @param {number} base base number 
 * @param {number} exp  potency number
 * @returns  {number} result calculate result 
 * 
 * @example 
 *import myMath from "MyMath";
 * const result = myMath.pow(5 , 2) 
 * console.log(result)// => 25
 * 
 */
const pow = ( base ,  exp  ) => {
    let tem;
    let last  = base;

    if(exp === 0){
        return 0
    }

     for ( let i=0; i < (exp -1 ) ; i++ ){
          tem = last * base ;
          last = tem;
     }

     return last;
}



module.exports= {
    add,
    pow,
}