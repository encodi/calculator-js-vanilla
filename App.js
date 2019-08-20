function tagBuilder(typeOfElement, className) {
    var newElement = document.createElement(typeOfElement);
    newElement.className = className;
    return newElement;
}

function tagTextDecorator(btnElement, textValue) {
    btnElement.appendChild(document.createTextNode(textValue));
    return btnElement;
}

// Generating DOM elements
var App = document.getElementById("App");

var CalculatorWrapper = tagBuilder("div", "Calculator");
var resultView = tagTextDecorator(tagBuilder("div", "ResultView"), "0");

var ACButton = tagTextDecorator(tagBuilder("button", "fnAC"), "AC");
var plusMinusButton = tagTextDecorator(tagBuilder("button", "fnPlusMinus"), "+/-");
var percentButton = tagTextDecorator(tagBuilder("button", "fnPercent"), "%");
var divButton = tagTextDecorator(tagBuilder("button", "fnDiv"), "/");

var sevenNumberBtn = tagTextDecorator(tagBuilder("button", "fnSeven"), "7");
var eightNumberBtn = tagTextDecorator(tagBuilder("button", "fnEight"), "8");
var nineNumberBtn = tagTextDecorator(tagBuilder("button", "fnNine"), "9");
var multNumberBtn = tagTextDecorator(tagBuilder("button", "fnX"), "X");

var fourNumberBtn = tagTextDecorator(tagBuilder("button", "fnFour"), "4");
var fiveNumberBtn = tagTextDecorator(tagBuilder("button", "fnFive"), "5");
var sixNumberBtn = tagTextDecorator(tagBuilder("button", "fnSix"), "6");
var minNumberBtn = tagTextDecorator(tagBuilder("button", "fnMin"), "-");

var oneNumberBtn = tagTextDecorator(tagBuilder("button", "fnOne"), "1");
var twoNumberBtn = tagTextDecorator(tagBuilder("button", "fnTwo"), "2");
var threeNumberBtn = tagTextDecorator(tagBuilder("button", "fnThree"), "3");
var plusNumberBtn = tagTextDecorator(tagBuilder("button", "fnPlus"), "+");

var zeroNumberBtn = tagTextDecorator(tagBuilder("button", "fnZero"), "0");
var periodNumberBtn = tagTextDecorator(tagBuilder("button", "fnPeriod"), ".");
var equalNumberBtn = tagTextDecorator(tagBuilder("button", "fnEqual"), "=");

// Drawing DOM in browser
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


// App State
let state = {
    prevNumber: null,
    number: null,
    operation: null,
    btnCounter: 0,
    result: "0"
};
const initialState = Object.assign({}, state);

// Result element
const result = document.getElementsByClassName("ResultView")[0];

// Event Handling
ACButton.addEventListener("click", () => {
    state = Object.assign(state, initialState)
    result.innerHTML = state.result;
});

plusMinusButton.addEventListener("click", () => {
    state = Object.assign(state, {
        operation: "+"
    });
});

percentButton.addEventListener("click", () => {
    state = Object.assign(state, {
        operation: "%",
        btnCounter: 0
    });
});

divButton.addEventListener("click", () => {
    state = Object.assign(state, {
        operation: "/",
        btnCounter: 0
    });
});

sevenNumberBtn.addEventListener("click", () => {
    if (state.number != null) {
        if (state.operation != null) { 
            if (state.btnCounter > 0) {
                state = Object.assign(state, {
                    number: state.number + '7'
                });
                state.btnCounter = state.btnCounter + 1;
            } else {
                state = Object.assign(state, {
                    prevNumber: state.number,
                    number: '7',
                    btnCounter: 0
                });
            }
        } else {
            state = Object.assign(state, {
                number: state.number + '7'
            });
            state.btnCounter = state.btnCounter + 1;
        }
    } else {
        state = Object.assign(state, {
            number: '7'
        });
        state.btnCounter = state.btnCounter + 1;
    }
    result.innerHTML = state.number;
});

eightNumberBtn.addEventListener("click", () => {
    if (state.number != null) {
        if (state.operation != null) { 
            if (state.btnCounter > 0) {
                state = Object.assign(state, {
                    number: state.number + '8'
                });
                state.btnCounter = state.btnCounter + 1;
            } else {
                state = Object.assign(state, {
                    prevNumber: state.number,
                    number: '8',
                    btnCounter: 0
                });
            }
        } else {
            state = Object.assign(state, {
                number: state.number + '8'
            });
            state.btnCounter = state.btnCounter + 1;
        }
    } else {
        state = Object.assign(state, {
            number: '8'
        });
        state.btnCounter = state.btnCounter + 1;
    }
    result.innerHTML = state.number;
});

nineNumberBtn.addEventListener("click", () => {
    if (state.number != null) {
        if (state.operation != null) { 
            if (state.btnCounter > 0) {
                state = Object.assign(state, {
                    number: state.number + '9'
                });
                state.btnCounter = state.btnCounter + 1;
            } else {
                state = Object.assign(state, {
                    prevNumber: state.number,
                    number: '9',
                    btnCounter: 0
                });
            }
        } else {
            state = Object.assign(state, {
                number: state.number + '9'
            });
            state.btnCounter = state.btnCounter + 1;
        }
    } else {
        state = Object.assign(state, {
            number: '9'
        });
        state.btnCounter = state.btnCounter + 1;
    }
    result.innerHTML = state.number;
});

multNumberBtn.addEventListener("click", () => {
    state = Object.assign(state, {
        operation: "*",
        btnCounter: 0
    });
});

fourNumberBtn.addEventListener("click", () => {
    if (state.number != null) {
        if (state.operation != null) { 
            if (state.btnCounter > 0) {
                state = Object.assign(state, {
                    number: state.number + '4'
                });
                state.btnCounter = state.btnCounter + 1;
            } else {
                state = Object.assign(state, {
                    prevNumber: state.number,
                    number: '4',
                    btnCounter: 0
                });
            }
        } else {
            state = Object.assign(state, {
                number: state.number + '4'
            });
            state.btnCounter = state.btnCounter + 1;
        }
    } else {
        state = Object.assign(state, {
            number: '4'
        });
        state.btnCounter = state.btnCounter + 1;
    }
    result.innerHTML = state.number;
});

fiveNumberBtn.addEventListener("click", () => {
    if (state.number != null) {
        if (state.operation != null) { 
            if (state.btnCounter > 0) {
                state = Object.assign(state, {
                    number: state.number + '5'
                });
                state.btnCounter = state.btnCounter + 1;
            } else {
                state = Object.assign(state, {
                    prevNumber: state.number,
                    number: '5',
                    btnCounter: 0
                });
            }
        } else {
            state = Object.assign(state, {
                number: state.number + '5'
            });
            state.btnCounter = state.btnCounter + 1;
        }
    } else {
        state = Object.assign(state, {
            number: '5'
        });
        state.btnCounter = state.btnCounter + 1;
    }
    result.innerHTML = state.number;
});

sixNumberBtn.addEventListener("click", () => {
    if (state.number != null) {
        if (state.operation != null) { 
            if (state.btnCounter > 0) {
                state = Object.assign(state, {
                    number: state.number + '6'
                });
                state.btnCounter = state.btnCounter + 1;
            } else {
                state = Object.assign(state, {
                    prevNumber: state.number,
                    number: '6',
                    btnCounter: 0
                });
            }
        } else {
            state = Object.assign(state, {
                number: state.number + '6'
            });
            state.btnCounter = state.btnCounter + 1;
        }
    } else {
        state = Object.assign(state, {
            number: '6'
        });
        state.btnCounter = state.btnCounter + 1;
    }
    result.innerHTML = state.number;
});

minNumberBtn.addEventListener("click", () => {
    state = Object.assign(state, {
        operation: "-",
        btnCounter: 0
    });
});

oneNumberBtn.addEventListener("click", () => {
    console.log(state);
    if (state.number != null) {
        if (state.operation != null) { 
            if (state.btnCounter > 0) {
                state = Object.assign(state, {
                    number: state.number + '1'
                });
                state.btnCounter = state.btnCounter + 1;
            } else {
                state = Object.assign(state, {
                    prevNumber: state.number,
                    number: '1'
                });
                state.btnCounter = state.btnCounter + 1;
            }
        } else {
            state = Object.assign(state, {
                number: state.number + '1'
            });
            state.btnCounter = state.btnCounter + 1;
        }
    } else {
        state = Object.assign(state, {
            number: '1'
        });
        state.btnCounter = state.btnCounter + 1;
    }
    console.log(state);
    result.innerHTML = state.number;
});

twoNumberBtn.addEventListener("click", () => {
    if (state.number != null) {
        if (state.operation != null) { 
            if (state.btnCounter > 0) {
                state = Object.assign(state, {
                    number: state.number + '2'
                });
                state.btnCounter = state.btnCounter + 1;
            } else {
                state = Object.assign(state, {
                    prevNumber: state.number,
                    number: '2',
                    btnCounter: 0
                });
            }
        } else {
            state = Object.assign(state, {
                number: state.number + '2'
            });
            state.btnCounter = state.btnCounter + 1;
        }
    } else {
        state = Object.assign(state, {
            number: '2'
        });
        state.btnCounter = state.btnCounter + 1;
    }
    result.innerHTML = state.number;
});

threeNumberBtn.addEventListener("click", () => {
    if (state.number != null) {
        if (state.operation != null) { 
            if (state.btnCounter > 0) {
                state = Object.assign(state, {
                    number: state.number + '3'
                });
                state.btnCounter = state.btnCounter + 1;
            } else {
                state = Object.assign(state, {
                    prevNumber: state.number,
                    number: '3',
                    btnCounter: 0
                });
            }
        } else {
            state = Object.assign(state, {
                number: state.number + '3'
            });
            state.btnCounter = state.btnCounter + 1;
        }
    } else {
        state = Object.assign(state, {
            number: '3'
        });
        state.btnCounter = state.btnCounter + 1;
    }
    result.innerHTML = state.number;
});

plusNumberBtn.addEventListener("click", () => {
    state = Object.assign(state, {
        operation: "+",
        btnCounter: 0
    });
    console.log(state);
});

zeroNumberBtn.addEventListener("click", () => {
    if (state.number != null) {
        if (state.operation != null) { 
            if (state.btnCounter > 0) {
                state = Object.assign(state, {
                    number: state.number + '0'
                });
                state.btnCounter = state.btnCounter + 1;
            } else {
                state = Object.assign(state, {
                    prevNumber: state.number,
                    number: '0',
                    btnCounter: 0
                });
            }
        } else {
            vObject.assign(state, {
                number: state.number + '0'
            });
            state.btnCounter = state.btnCounter + 1;
        }
    } else {
        state = Object.assign(state, {
            number: '0'
        });
        state.btnCounter = state.btnCounter + 1;
    }
    result.innerHTML = state.number;
});

periodNumberBtn.addEventListener("click", () => {
    if (state.number != null) { 
        state = Object.assign(state, {
            number: state.number + '.'
        });
    } else {
        state = Object.assign(state, {
            number: '0.'
        });
    }
});

equalNumberBtn.addEventListener("click", () => {
    if (state.operation != null && state.prevNumber != null && state.number) {
        switch(state.operation) {
            case '+':
                state = Object.assign(state, {
                    result: parseInt(state.number, 10) + parseInt(state.prevNumber, 10)
                });
                break;
            case '-':
                state = Object.assign(state, {
                    result: parseInt(state.number, 10) - parseInt(state.prevNumber, 10)
                });
                break;
            case '*':
                state = Object.assign(state, {
                    result: parseInt(state.number, 10) * parseInt(state.prevNumber, 10)
                });
                break;
            case '/':
                state = Object.assign(state, {
                    result: parseInt(state.prevNumber, 10) / parseInt(state.number, 10)
                });
                break;
            case '%':
                state = Object.assign(state, {
                    result: (parseInt(state.prevNumber, 10) * parseInt(state.number, 10)) / 100,
                });
                break;
        }
    }   
    console.log(state);
    result.innerHTML = state.result;
    state = Object.assign(state, initialState);
});
