
/**
 *   Class to create a new programer
 * 
 *  @see https://google.com
 *  
 *  @example 
 * import Programmer from "classes";
 * const  newProgrammer =  new Programmer({name:"isaac", lastName:"Perez", friends:[{name:"pedro"}]}, "typescript");
 * 
 * //  we called the getInfo  method to print programmer's info on  the console 
 * newProgrammer.getInfo(); //  `i am isaac and my favorite programming language is typescript`
 *  
 * @todo   Add new method to change the favorite programming language  
 * @todo  add mew method to change the fullName 
 * @tutorial Get-Started
 */
class Programmer {
     
    /** 
     *  @param  {User} user  user's info to create the programmer 
     *  @param  {string} language  favorite programming language
     */
    constructor( user , language ){
        /**
         *  save the programmer's full name
         *  @type {string} 
         */
         this.fullName = user.name + " " + user.lastName;
         
         /**
          * save the programmer's favorite programming lenguaje 
          * @type {string} 
          */
         this.language = language; 
    }
    
    /**
     *  return all programmer's information 
     *  @returns {void} print info in console
     */
    getInfo(){
        console.log(`i am  ${this.fullName} and my favorite programming language is ${this.language}`);
    }
}

/**
 * know more here {@link Programmer}
 */
const  programmer1 = new Programmer({name:"isaac", lastName:"Perez", friends:[{name:"pedro"}]}, "typescript");
programmer1.getInfo();


export default Programmer