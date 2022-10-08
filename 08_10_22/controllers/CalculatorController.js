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

  exports.addByList = (req, res) => {
    try {
      const listElements = JSON.parse(req.query.list).numbers;
  
      const sum = myCalculator.addByListArr(listElements);
  
      res.status(200);
      res.json({ success: true, data: sum });
    } catch (e) {
      throw Error(e.message);
    }
  };

// addByList

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

