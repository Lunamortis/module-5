class Calculator {
    constructor() {
      //Generate random number
      this.id = Math.random()
      //this.id = Date.now();
    }
  
    #log = (value) => {
      console.log(this.id+': '+value); //this way you know which calc library instance is running the operations
    };
  
    add = (num1, num2) => {
      const value = num1 + num2;
      this.#log(value);
      return value;
    };
  
    addByList = (arr) => {
      let sum = 0;
      arr.forEach((item) => {
        sum += item;
      });
      return sum;
    };

    subtract = (num1, num2) => {
        const value = num1 - num2;
        this.#log(value);
        return value;
        };

    subtractByList = (arr) => {
        let totalSubtract = arr[0];
        for (let i = 1; i < arr.length; i++) {
            totalSubtract -= arr[i];
        }
        return totalSubtract;
    };
    
    multiply = (num1, num2) => {
        const value = num1 * num2;
        this.#log(value);
        return value;
        };

    multiplyByList = (arr) => {
        let sum = 1;
        arr.forEach((item) => {
            sum *= item;
        });
        return sum;
    };

    divide = (num1, num2) => {
        const value = num1 / num2;
        this.#log(value);
        return value;
        };

    divideByList = (arr) => {
        let totalDivide = arr[0];
        for (let i = 1; i < arr.length; i++) {
            totalDivide -= arr[i];
        }
        return totalDivide;
    };  

  }





  
  module.exports = Calculator;