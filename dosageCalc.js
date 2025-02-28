

function calculatemillagramsTotal(gramsCannabis, percentTHC) {

    const millagramsTotal = (gramsCannabis * (percentTHC / 100))*1000;

    return  millagramsTotal;
};

function calculatemillagramsTbsp(liquidCups) {

    //get millagramsTotal from calculatemillagramsTotal function
    const total = calculatemillagramsTotal(...["cannabisAmount", "percentTHC"].map(elementId => (document.getElementById(elementId).value)));
    let millagramsTbsp = 0;

    //check so we dont return NaN
    if(liquidCups <= 0 ) {
        millagramsTbsp = 0;
    } else {
        //math
        millagramsTbsp = (total / liquidCups) / 16;
        
    }

    return millagramsTbsp;
};

function calculatemillagramsPerServing(tablespoons, servings) {

    let THCPerServing = 0;

    //check so we dont return NaN
    if(tablespoons <= 0 || servings <= 0) {
        THCPerServing = 0;
    } else {
        //get millagramsTbsp from calculatemillagramsTbsp function and math
        THCPerServing = (calculatemillagramsTbsp(document.getElementById("cupsOfLiquid").value) * tablespoons) / servings;
        
    }

    return THCPerServing;
};



document.querySelector("#cannabisAmount").addEventListener("input", () => {
    document.getElementById("totalResult").innerText = calculatemillagramsTotal(...["cannabisAmount", "percentTHC"].map(elementId => (document.getElementById(elementId).value))) + "mg";
    document.getElementById("tbspResult").innerText = calculatemillagramsTbsp(document.getElementById("cupsOfLiquid").value) + "mg";
    document.getElementById("perServingResult").innerText = calculatemillagramsPerServing(...["tablespoons", "servings"].map(elementId => (document.getElementById(elementId).value))) + "mg";

});

document.querySelector("#percentTHC").addEventListener("input", () => {
    document.getElementById("totalResult").innerText = calculatemillagramsTotal(...["cannabisAmount", "percentTHC"].map(elementId => (document.getElementById(elementId).value))) + "mg";
    document.getElementById("tbspResult").innerText = calculatemillagramsTbsp(document.getElementById("cupsOfLiquid").value) + "mg";
    document.getElementById("perServingResult").innerText = calculatemillagramsPerServing(...["tablespoons", "servings"].map(elementId => (document.getElementById(elementId).value))) + "mg";


});

document.querySelector("#cupsOfLiquid").addEventListener("input", () => {
    document.getElementById("totalResult").innerText = calculatemillagramsTotal(...["cannabisAmount", "percentTHC"].map(elementId => (document.getElementById(elementId).value))) + "mg";
    document.getElementById("tbspResult").innerText = calculatemillagramsTbsp(document.getElementById("cupsOfLiquid").value) + "mg";
    document.getElementById("perServingResult").innerText = calculatemillagramsPerServing(...["tablespoons", "servings"].map(elementId => (document.getElementById(elementId).value))) + "mg";
});

document.querySelector("#tablespoons").addEventListener("input", () => {
    document.getElementById("totalResult").innerText = calculatemillagramsTotal(...["cannabisAmount", "percentTHC"].map(elementId => (document.getElementById(elementId).value))) + "mg";
    document.getElementById("tbspResult").innerText = calculatemillagramsTbsp(document.getElementById("cupsOfLiquid").value) + "mg";
    document.getElementById("perServingResult").innerText = calculatemillagramsPerServing(...["tablespoons", "servings"].map(elementId => (document.getElementById(elementId).value))) + "mg";
});

document.querySelector("#servings").addEventListener("input", () => {
    document.getElementById("totalResult").innerText = calculatemillagramsTotal(...["cannabisAmount", "percentTHC"].map(elementId => (document.getElementById(elementId).value))) + "mg";
    document.getElementById("tbspResult").innerText = calculatemillagramsTbsp(document.getElementById("cupsOfLiquid").value) + "mg";
    document.getElementById("perServingResult").innerText = calculatemillagramsPerServing(...["tablespoons", "servings"].map(elementId => (document.getElementById(elementId).value))) + "mg";

});
