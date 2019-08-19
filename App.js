var App = document.getElementById("App");
var CalculatorWrapper = tagBuilder("div", "Calculator");

var calculatorStructure = {
    result: {
        inputType: "div",
        className: "ResultView",
        initialValue: "0"
    },
    acBtn: {
        className: "fnAC",
        initialValue: "AC"
    },
    plusMinusBtn: {
        className: "fnPlusMinus",
        initialValue: "+/-"
    },
    percentBtn: {
        className: "fnPercent",
        initialValue: "%"
    },
    divisionBtn: {
        className: "fnDiv",
        initialValue: "/"
    },
    key7Btn: {
        className: "fnSeven",
        initialValue: "7"
    },
    key8Btn: {
        className: "fnEight",
        initialValue: "8"
    },
    key9Btn: {
        className: "fnNine",
        initialValue: "9"
    },
    keyXBtn: {
        className: "fnX",
        initialValue: "X"
    },
    key4Btn: {
        className: "fnFour",
        initialValue: "4"
    },
    key5Btn: {
        className: "fnFive",
        initialValue: "5"
    },
    key6Btn: {
        className: "fnSix",
        initialValue: "6"
    },
    keyMinusBtn: {
        className: "fnMin",
        initialValue: "-"
    },
    key1Btn: {
        className: "fnOne",
        initialValue: "1"
    },
    key2Btn: {
        className: "fnTwo",
        initialValue: "2"
    },
    key3Btn: {
        className: "fnThree",
        initialValue: "3"
    },
    keyPlusBtn: {
        className: "fnPlus",
        initialValue: "+"
    },
    keyZeroBtn: {
        className: "fnZero",
        initialValue: "0"
    },
    keyPeriodBtn: {
        className: "fnPeriod",
        initialValue: "."
    },
    keyEqualBtn: {
        className: "fnEqual",
        initialValue: "="
    }
};

var calculatorElements = calculatorElementsBuilder(calculatorStructure);
calculatorCreator(App, CalculatorWrapper, calculatorElements);