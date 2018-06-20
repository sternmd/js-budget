
// BUDGET CONTROLLER
var budgetController = (function() {

    // Some code

})();

// UI CONTROLLER
var UIController = (function(){

    // Some code

})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl){

    var ctrlAddItem = function() {
        // 1. Get the field input data

        // 2. Add item to the budget controller

        // 3. Add item to the UI controller

        // 4. Calculate the budget

        // 5. Display the budget on the UI

    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(e) {
        if( e.keyCode === 13 || e.which === 13 ) {
            ctrlAddItem();
        }
    })

})(budgetController, UIController);