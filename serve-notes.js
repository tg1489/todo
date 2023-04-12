let express = require('express');
let mongodb = require('mongodb').MongoClient;
let app = express();
let db;

app.use(express.static('public'));


//=================================================================================================
// Open MongoDB Connection:
// - Pick up mongodb driver from npm for node environment
// - npm install mongodb
// - var mongodb = require("mongodb").MongoClient;
// - Look at code below:
let connectionString = 'mongodb+srv://tg1489:RUBYruby2808!!@cluster0.hr6x6af.mongodb.net/TodoApp?retryWrites=true&w=majority';
mongodb.connect(connectionString,{useNewUrlParser: true, useUnifiedTopology: true} , function(err, client) {
    db = client.db();  //client.db() points to our database. We can then use db anywhere to work
    //with our database
    app.listen(5000); // Listen for requests
});
//==================================================================================================
// Boilerplate
app.use(express.urlencoded({extended: false})); //Automatically take submitted form data and add it to a body object that lives on the request object
app.use(express.json()); // Same thing as above but for async requests

app.get('/', function (req, res) {

    // find() is the same as load. toArray converts the data to a readable
    // array format.
    // toArray is going to pass that db data into our function
    // as the items parameter so we have access to our db data
    // within the body of our function
    db.collection('items').find().toArray(function(err, items){
        res.send(`
        
        <!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Simple To-Do App</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
</head>
<body>
  <div class="container">
    <h1 class="display-4 text-center py-1">To-Do App</h1>
    
    <div class="jumbotron p-3 shadow-sm">
      <form action="/create-item" method="POST"> 
        <div class="d-flex align-items-center">
          <input name="item" autofocus autocomplete="off" class="form-control mr-3" type="text" style="flex: 1;">
          <button class="btn btn-primary">Add New Item</button>
        </div>
      </form>
    </div>
    
    <ul class="list-group pb-5">
      ${items.map(function (item) {
            return `<li class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
        <span class="item-text">${item.text}</span>
        <div>
          <button data-id="${item._id}" class="edit-me btn btn-secondary btn-sm mr-1">Edit</button>
          <button class="delete-me btn btn-danger btn-sm">Delete</button>
        </div>
      </li>`
        }).join(' ')}
    </ul>
    
  </div>
  <script src="https://unpkg.com/axios@1.1.2/dist/axios.min.js"></script>
  <script src="javascripts/browser.js"></script>
</body>
</html>`)

    });
// map() will return a new array we can created based on the original array
    // from items. It's convienant looping through the array doing something
    // once for each item in it
    // inside the map() we give it a function that its going to call
    // once for each item in the array
    // whatever we return in that function will get added on to the
    // newly generated array
    // join() will let us convert an array to a string of text

// HTML <button data-anything="${item._id}"> will let you use data from database

// Now we need to adjust browser based js, so that when we use axios to send
// our async req to our server, we need to send the user input text AND _id
// So we can tell MongoDB which doc the user wants to update
}); // If it receives a GET request (Somebody goes to that page)

//  What we do in response to a user submitting a form:
app.post('/create-item', function (req, res){
    db.collection('items').insertOne({text: req.body.item}, function(){
        res.redirect('/')
    })
});









// This is where we setup our express server to receive that incoming post req
// to the url of /update-item
app.post('/update-item', (req, res) => {
    // Communicate with database to update a document
    console.log(req.body.text)
    res.send("Success")
        //a arg- we need to receive text they typed in, but need to keep
        //track which item they clicked the edit button for (_id field)
        //we need to adjust html to include _id value from mongoDB
    })
    //findOneAndUpdate
    //1arg-Which doc we want to update
    //2arg-What we wanna update on that doc
    //3arg-A function that gets called once the db action completes

    // console.log(req.body.text);
    // .body is the data the axios is sending over
    // .text is the property we have named
    // res.send("Success");
});


/*

Part 1: User interface / Send their new typed in text value to our Node server
- Write js code for the web browser environment, not node.

Part 2: Write Node code to update document in MongoDB database.

 */