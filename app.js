//Delgetstei ajillah controller
var uiController = (function() {

})();

//Sanhuutei ajillah controller
var financeController = (function() {

})();

//Programmiin holbogch controller
var appController = (function(uiController, financeController) {
    var ctrlAddItem = function() {
        // 1. Oruulah ugugdluudiig delgetsnees olj avna.
        console.log('delgetsees ugugdluu avah heseg..');

        // 2. Olj avsan ugugdluuldee sanhuugiin controllert damjuulj tend hadgalna.
        // 3. Olj avsan ugugdluudee web deer tohiroh hesegt gargana.
        // 4. Tusviig tootsoolno.
        // 5. Etssiin uldegdel tootsoog delgetsend gargana.
    }
    document.querySelector('.add__btn').addEventListener('click', function(){ 
        ctrlAddItem(); 
    });
    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13) ctrlAddItem(); 
    })

})(uiController, financeController);
