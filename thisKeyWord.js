class Calculator {
    
    
    /** 
     * @param {number} value
     */
    constructor(value) {
      this.value = value;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value){
       result= result+value;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value){
       result= result-value;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */  
    multiply(value) {
        result= result * value;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        result= result / value;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        result= result ** value;
    }
    
    /** 
     * @return {number}
     */
    getResult() {
        return result;
    }
}

let calc   = new Calculator();
calc()