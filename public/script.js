console.log('Hello World');

function splashClickHandler(){
    console.log("User is progressing");
    window.location.assign('signup.html');
}

function signupClickHandler(event){
    event.preventDefault();
    // select all the form fields 
    // add the values to an object
    // display that object, save it to the back end
    const data = {
        firstName: $('input[name="fname"]').val(),
        lastName: $('input[name="lname"]').val(),
        email: $('input[name="email"]').val()
    }
    
    console.log("User finished signing up!");
    console.log("ready to save user: ", data); 

    fetch('http://localhost:3000/api/leads', {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json());
    window.location.assign('survey.html');
}

function surveyClickHandler(event){
    event.preventDefault();
    const data = {
        league: $('select[name="league"]').val()
    }
    
    console.log("User picked the league!");
    console.log("ready to save legue", data); 
    window.location.assign('offer.html');
}