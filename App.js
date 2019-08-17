function tagBuilder(typeOfElement, className) {
    var newElement = document.createElement(typeOfElement);
    newElement.className = className;
    return newElement;
}

function tagTextDecorator(btnElement, textValue) {
    btnElement.appendChild(document.createTextNode(textValue));
    return btnElement;
}

var App = document.getElementById("App");

var CalculatorWrapper = tagBuilder("div", "Calculator");
var resultView = tagTextDecorator(tagBuilder("div", "ResultView"), "0");

var ACButton = tagTextDecorator(tagBuilder("button", "fnAC"), "AC");
var plusMinusButton = tagTextDecorator(tagBuilder("button", "fnPlusMinus"), "+/-");
var percentButton = tagTextDecorator(tagBuilder("button", "fnPercent"), "%");
var divButton = tagTextDecorator(tagBuilder("button", "fnDiv"), "/");

var sevenNumberBtn = tagTextDecorator(tagBuilder("button", "fn7"), "7");
var eightNumberBtn = tagTextDecorator(tagBuilder("button", "fn8"), "8");
var nineNumberBtn = tagTextDecorator(tagBuilder("button", "fn9"), "9");
var multNumberBtn = tagTextDecorator(tagBuilder("button", "fnX"), "X");

var fourNumberBtn = tagTextDecorator(tagBuilder("button", "fn4"), "4");
var fiveNumberBtn = tagTextDecorator(tagBuilder("button", "fn5"), "5");
var sixNumberBtn = tagTextDecorator(tagBuilder("button", "fn6"), "6");
var minNumberBtn = tagTextDecorator(tagBuilder("button", "fn-"), "-");

var oneNumberBtn = tagTextDecorator(tagBuilder("button", "fn1"), "1");
var twoNumberBtn = tagTextDecorator(tagBuilder("button", "fn2"), "2");
var threeNumberBtn = tagTextDecorator(tagBuilder("button", "fn3"), "3");
var plusNumberBtn = tagTextDecorator(tagBuilder("button", "fn+"), "+");

var zeroNumberBtn = tagTextDecorator(tagBuilder("button", "fn0"), "0");
var periodNumberBtn = tagTextDecorator(tagBuilder("button", "fn."), ".");
var equalNumberBtn = tagTextDecorator(tagBuilder("button", "fn="), "=");


App.appendChild(CalculatorWrapper);
CalculatorWrapper.appendChild(resultView);

CalculatorWrapper.appendChild(ACButton);
CalculatorWrapper.appendChild(plusMinusButton);
CalculatorWrapper.appendChild(percentButton);
CalculatorWrapper.appendChild(divButton);

CalculatorWrapper.appendChild(sevenNumberBtn);
CalculatorWrapper.appendChild(eightNumberBtn);
CalculatorWrapper.appendChild(nineNumberBtn);
CalculatorWrapper.appendChild(multNumberBtn);

CalculatorWrapper.appendChild(fourNumberBtn);
CalculatorWrapper.appendChild(fiveNumberBtn);
CalculatorWrapper.appendChild(sixNumberBtn);
CalculatorWrapper.appendChild(minNumberBtn);

CalculatorWrapper.appendChild(oneNumberBtn);
CalculatorWrapper.appendChild(twoNumberBtn);
CalculatorWrapper.appendChild(threeNumberBtn);
CalculatorWrapper.appendChild(plusNumberBtn);

CalculatorWrapper.appendChild(zeroNumberBtn);
CalculatorWrapper.appendChild(periodNumberBtn);
CalculatorWrapper.appendChild(equalNumberBtn);