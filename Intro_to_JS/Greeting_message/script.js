document.addEventListener("DOMContentLoaded", () => {

    const userName = "Komal Rastogi"
    const currHour = new Date().getHours()
    let greeting;

    if(currHour<12){
        greeting = "Good Morning"
    }
    else if(currHour >=12 && currHour <=17){
        greeting = "Good Afternoon"
    }
    else{
        greeting = "Good Evening"
    }

    const greetingElement = document.getElementById("greeting")

    if(greeting){
        greetingElement.textContent = `${greeting} ${userName}!`
    }

})