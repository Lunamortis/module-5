//router.js

"use strict";

// const { userPostAPI } = require("../controllers/UserController");

module.exports = (app) => {
    var calculator = require("../controllers/CalculatorController");
   

    //Root router
    app.get("/", (req, res) => {
        res.send("Main Page");
    });

    //Calculator Operations

    app.route("/operation/addByTwoParams").get(calculator.addOperationByTwoParams);
    app.route("/operation/addByList").get(calculator.addByList);
    app.route("/operation/subtractByList").get(calculator.subtractByList);
    app.route("/operation/multiplyByList").get(calculator.multiplyByList);
    app.route("/operation/divideByList").get(calculator.divideByList);
    app.route("/operation/subtractByTwoParams").get(calculator.subtractObjectByTwoParams);
    app.route("/operation/multiplyByTwoParams").get(calculator.multiplyObjectByTwoPrams);
    app.route("/operation/divideByTwoParams").get(calculator.divideObjectByTwoPrams);
    
    // Handling 404 request from the client
    app.use((req, res, next) => {
        res.status(404).send("<h1>Page not found on the server</h1>");
    });
};
