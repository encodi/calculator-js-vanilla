
function tagBuilder(typeOfElement, className) {
    const newElement = document.createElement(typeOfElement);
    newElement.className = className;
    return newElement;
}

function tagTextDecorator(btnElement, textValue) {
    btnElement.appendChild(document.createTextNode(textValue));
    return btnElement;
}

function calculatorElementsBuilder(btnStructure) {
    const newCalculatorStructure = Object.keys(btnStructure).map((btnKey) => {
        let btn = btnStructure[btnKey];
        return tagTextDecorator(tagBuilder(((btn && btn.inputType) ? btn.inputType : "button"), btn.className), btn.initialValue);
    });
    return newCalculatorStructure;
}

function calculatorEventHandler(element, resultElement) {
    element.addEventListener("click", (e) => {
        result = parseInt(e.target.innerHTML, 10);
        console.log(result, previousValue, clickCounter);
        if (!isNaN(result) && clickCounter < 9) {
            if (clickCounter === 0 || (clickCounter > 0 && previousValue === 0)) {
                resultElement.innerHTML = result;
                clickCounter = 0;
            } else {
                resultElement.innerHTML += result;
            }
            previousValue = parseInt(resultElement.innerHTML, 10);
            clickCounter++;
        }
        switch (e.target.className) {
            case 'fnAC':
                previousValue = 0;
                newValue = 0;
                resultElement.innerHTML = "0";
                result = 0;
                clickCounter = 0;
                break;
            case 'fnPlusMinus':
                newValue = -1*previousValue;
                resultElement.innerHTML = newValue;
                previousValue = newValue;
                break;
            default:
                break;
        }
    });
}

let clickCounter = 0;
let previousValue = 0;
let newValue = 0;
function calculatorCreator(app, wrapper, elements) {
    app.appendChild(wrapper);
    let resultElement = null;
    
    elements.forEach((element) => {
        if (element.className === "ResultView") {
            resultElement = element;
        }
        CalculatorWrapper.appendChild(element);
        calculatorEventHandler(element, resultElement);
    });
}