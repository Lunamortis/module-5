//CalculatorController.js

"use strict";

//by model

const Calculator = require('../Models/Calculator')
const myCalculator = new Calculator();

exports.addOperationByTwoParams = (req, res) => {
    try {
      const number1 = parseInt(req.query.number1);
      const number2 = parseInt(req.query.number2);
      const sum = myCalculator.add(number1, number2);
      res.status(200);
      res.json({ success: true, data: sum });
    } catch (e) {
      throw Error(e.message);
    }
  };

  exports.subtractOperationByTwoParams = (req, res) => {
    try {
        const number1 = parseInt(req.query.number1);
        const number2 = parseInt(req.query.number2);
        const subtract = myCalculator.subtract(number1, number2);
        res.status(200);
        res.json({ success: true, data: subtract });
    } catch (e) {
        throw Error(e.message);
    }
    };

    exports.multiplyOperationByTwoParams = (req, res) => {
        try {
            const number1 = parseInt(req.query.number1);
            const number2 = parseInt(req.query.number2);
            const multiply = myCalculator.multiply(number1, number2);
            res.status(200);
            res.json({ success: true, data: multiply });
        } catch (e) {
            throw Error(e.message);
        }
        };

        exports.divideOperationByTwoParams = (req, res) => {
            try {
                const number1 = parseInt(req.query.number1);
                const number2 = parseInt(req.query.number2)
                const divide = myCalculator.divide(number1, number2);
                res.status(200);
                res.json({ success: true, data: divide });
            } catch (e) {
                throw Error(e.message);
            }
            };

// addByList

exports.addByList = (req, res) => {
    try {
        const numberList = req.query.numberList;
        const add = myCalculator.addByList(numberList);
        res.status(200);
        res.json({ success: true, data: add });
    } catch (e) {
        throw Error(e.message);
    }
    };
    

exports.subtractByList = (req, res) => {
    try {
        const listElements = JSON.parse(req.query.list).numbers;

        const totalSubtract = myCalculator.subtractByList(listElements);
        res.status(200);
        res.json({ success: true, data: totalSubtract });
    } catch (e) {
        throw Error(e.message);
    }
};

exports.multiplyByList = (req, res) => {
    try {
        const listElements = JSON.parse(req.query.list).numbers;
        let sum = 1;
        listElements.forEach((item) => {
            sum *= item;
        });

        res.status(200);
        res.json({ success: true, data: sum });
    } catch (e) {
        throw Error(e.message);
    }
};

exports.divideByList = (req, res) => {
    try {
        const listElements = JSON.parse(req.query.list).numbers;
        let totalDivide = listElements[0];
        for (let i = 1; i < listElements.length; i++) {
            totalDivide -= listElements[i];
        }

        res.status(200);
        res.json({ success: true, data: totalDivide });
    } catch (e) {
        throw Error(e.message);
    }
};

//byParam

exports.addOperationByTwoParams = (req, res) => {
    try {
        const number1 = parseInt(req.query.number1);
        const number2 = parseInt(req.query.number2);
        const sum = number1 + number2;
        res.status(200);
        res.json({ success: true, data: sum });
    } catch (e) {
        throw Error(e.message);
    }
};

exports.subtractObjectByTwoParams = (req, res) => {
    try {
        const number1 = parseInt(req.query.number1);
        const number2 = parseInt(req.query.number2);
        const difference = number1 - number2;
        res.status(200);
        res.json({ success: true, data: difference });
    } catch (e) {
        throw Error(e.message);
    }
};
exports.multiplyObjectByTwoPrams = (req, res) => {
    try {
        const number1 = parseInt(req.query.number1);
        const number2 = parseInt(req.query.number2);
        const product = number1 * number2;
        res.status(200);
        res.json({ success: true, data: product });
    } catch (e) {
        throw Error(e.message);
    }
};


exports.divideObjectByTwoPrams = (req, res) => {
    try {
        const number1 = parseInt(req.query.number1);
        const number2 = parseInt(req.query.number2);
        const quotient = number1 / number2;
        res.status(200);
        res.json({ success: true, data: quotient });
    } catch (e) {
        throw Error(e.message);
    }
};

