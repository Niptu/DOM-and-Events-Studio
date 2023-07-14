// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init () {
    let takeOffButton = document.getElementById("takeoff");
    

    takeOffButton.addEventListener("click", function(event){
        console.log ("Confurm that the shuttle is ready for takeoff.");

    })
} window.addEventListener ("load", init);