
// BUDGET CONTROLLER
var budgetController = (function() {

    // Some code

})();

// UI CONTROLLER
var UIController = (function(){

    var DOMstrings = {
        inputType: '.add__type',
        inputDescr: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // Will be either 'inc' or 'exp'
                description: document.querySelector(DOMstrings.inputDescr).value,
                value: document.querySelector(DOMstrings.inputValue).value
            }
        },
        getDOMstrings: function() {
            return DOMstrings;
        }
    }

})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl){

    var setupEventListeners = function() {     
        var DOM = UIController.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(e) {
            if( e.keyCode === 13 || e.which === 13 ) {
                ctrlAddItem();
            }
        });
    }

    var ctrlAddItem = function() {
        // 1. Get the field input data
        var input = UICtrl.getInput();

        // 2. Add item to the budget controller

        // 3. Add item to the UI controller

        // 4. Calculate the budget

        // 5. Display the budget on the UI

    }; 

    return {
        init: function() {
            setupEventListeners();
        }
    };

})(budgetController, UIController);

controller.init();