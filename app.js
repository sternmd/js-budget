
// BUDGET CONTROLLER
var budgetController = (function() {
    
    var Expense = function(id, descr, value) {
        this.id = id;
        this.descr = descr;
        this.value = value;
    };

    var Income = function(id, descr, value) {
        this.id = id;
        this.descr = descr;
        this.value = value;
    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };

    return {
        addItem: function(type, descr, val) {
            var newItem, ID;

            // Create new ID
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }           

            // Create new item based on 'inc' or 'exp' type
            if ( type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }

            // Push into our new data structure
            data.allItems[type].push(newItem);
            return newItem;
            
        },

        testing: function() {
            console.log(data);
        }
    }

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
        var input, newItem;
        // 1. Get the field input data
        input = UICtrl.getInput();

        // 2. Add item to the budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);

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