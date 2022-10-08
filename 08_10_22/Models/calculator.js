class Calculator {
    constructor() {
      this.id = Date.now();
    }
  
    #log = (value) => {
      console.log(value);
    };
  
    add = (num1, num2) => {
      const value = num1 + num2;
      this.#log(value);
      return value;
    };
  
    addByListArr = (arr) => {
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
    
  }





  
  module.exports = Calculator;