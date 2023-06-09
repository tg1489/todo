let express = require('express');
let mongodb = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectId;

let app = express();
let db;

let conn = 'mongodb+srv://tg1489:RUBYruby2808!!@cluster0.hr6x6af.mongodb.net/TodoApp?retryWrites=true&w=majority';
mongodb.connect(conn,{useNewUrlParser: true, useUnifiedTopology: true} , function(err, client) {
    db = client.db();

    app.listen(5000);
});

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static('public'));



// GET
app.get('/', function(req, res) {
    db.collection('items').find().toArray(function(err, items) {

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
      <form id="create-form" action="/create-item" method="POST"> 
        <div class="d-flex align-items-center">
          <input id="create-field" name="item" autofocus autocomplete="off" class="form-control mr-3" type="text" style="flex: 1;">
          <button class="btn btn-primary">Add New Item</button>
        </div>
      </form>
    </div>
    
    <ul id="item-list" class="list-group pb-5">
     
    </ul>
    
    
    
  </div>
  <script>
  let items = ${JSON.stringify(items)} // items because that is the name of our db array of objects
</script>
  <script src="https://unpkg.com/axios@1.1.2/dist/axios.min.js"></script>
  <script src="javascripts/browser.js"></script>
</body>
</html>`)


    })
});

// POST - CREATE ITEM
app.post('/create-item', function (req, res){
    db.collection('items').insertOne({text: req.body.text}, function(err, info){
        res.json({ _id: info.insertedId.toString(), text: req.body.text });
    })
});

// POST - UPDATE ITEM
app.post('/update-item', function(req, res) {

    db.collection('items').findOneAndUpdate({_id: new ObjectID(req.body.id)}, {$set: {text: req.body.text}}, function(){
        res.send("Success")
    })
});

// POST - DELETE ITEM
app.post('/delete-item', function (req, res) {
      db.collection('items').deleteOne({_id: new ObjectID(req.body.id)}, () => {
          res.send('Success')
      })
});