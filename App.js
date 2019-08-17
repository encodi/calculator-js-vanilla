function tagBuilder(typeOfElement, className) {
    var newElement = document.createElement(typeOfElement);
    newElement.className = className;
    return newElement;
}

function tagBtnTextDecorator(btnElement, textValue) {
    btnElement.appendChild(document.createTextNode(textValue));
    return btnElement;
}

var App = document.getElementById("App");

var CalculatorWrapper = tagBuilder("div", "Calculator");
var resultView = tagBuilder("div", "ResultView");

var ACButton = tagBtnTextDecorator(tagBuilder("button", "fnAC"), "AC");

App.appendChild(CalculatorWrapper);
CalculatorWrapper.appendChild(resultView);
CalculatorWrapper.appendChild(ACButton);

