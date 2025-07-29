const express = require('express');
const { ObjectId } = require('mongodb');
const app = express();

app.listen(3000, function(){
    console.log('server running on port 3000')
    
})

app.get('/', (request, response) =>{
    let cursor = db.collection('data').find();
})

app.post('/create', (request, response) => {
    db.collection('data').save(request.body, (error, result) => {
        if(error){
            return console.log(error);
        }
        console.log('Salvo no banco de dados.')
        response.redirect("/");
        db.collection('data').find().toArray((error, results) => {
            console.log(results);
        });
    });
});

app.route('/delete/:id').get((request, response) => {
    var id = request.params.id;
    db.collection('data').deleteOne({_id: ObjectId(id)}, (error, result) => {
        if(error) return response.send(500, error);
        console.log("Deletado do banco de dados!");
        response.redirect("/create");
    })
});

app.route('/update/:id').get((request, response) => {
    var id = request.params.id

    db.collection('data').find(ObjectId(id)).toArray((error, result) => {
        if(error) return response.send(error);
        response.render('update', {data: result})
    })
})