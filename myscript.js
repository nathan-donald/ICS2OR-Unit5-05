document.getElementById("ageday").onclick = function() {
    let day = document.getElementById("daysubmit").value;
    let age = document.getElementById("agesubmit").value;
    if ((age < 18) && (day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday")) {
        alert("Go to school!");
    }
    
    else if ((day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday") && (age >= 18)) {
        alert("Go to work!");
    }
    
    else {
        alert("Enjoy the weekend!");
    }
};