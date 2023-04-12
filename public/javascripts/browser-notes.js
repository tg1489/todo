document.addEventListener("click", (e) => {

    // Update Feature
    if (e.target.classList.contains("edit-me")) {
        alert('you clicked the edit button')
// Only if the element that was actually clicked on,
// contains a class of edit-me
// Inside here, we give the user a place where to type their new edit text
     let userInput = prompt("Enter your desired new text");
       //Send data to node server(axios)
        axios.post('/update-item', {text: userInput, id: e.target.getAttribute("data-id")}).then(() => {


            //Choose what edit button was clicked on e.target
            //Whatever button was clicked on, look for html ancestor element .parentElement
            //Go up one level again to find parent element .parentElement
            //That will select overall current row for the item
            //Look for span of text that houses actual text value .querySelector(".item-text")
            //Look inside that .item-text class for its .innerHTML property = userInput



            //Choose what edit button was clicked on.
            //Choose what edit button was clicked on.
         //e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = userInput

        }).catch(() => {
         console.log("Please try again later")
        })
        //This is how to send an on-the-fly post request to a server
        //post(url we want to send a post request to, {js object that contains data that will get send to url})
        //post()will return a promise. It is useful when we dont know how long an action is going to take
        //then(function arg) will run when the action of post() has a chance to complete
        //catch(function that will run if the entire process runs into a problem)
    }
});



// This is browser side javascript code to asynchronisly send a request
// to our nodejs server.
// This means I am successfully using javascript on the front and back end