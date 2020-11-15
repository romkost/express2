//mongoose = alternatywa dla modułu mongodb
const mongo = require('mongodb');
const client = new mongo.MongoClient('mongodb://localhost:27017', {useNewUrlParser: true});

client.connect(err => {
    if (err) {
    console.log('Błąd połączenia!', err);
    } else {
    console.log('Połączenie udane!');

    ///nazwa bazy = test
    const db = client.db('test');
    ///nazwa kolekcji = cars
    const cars = db.collection('cars');
    const clients = db.collection('clients');
    
    //cars.insertOne({brand: 'Infiniti', model: 'Q50',}),

    //cars.deleteOne({_id: mongo.ObjectID('5facffd461dcf9dbe68d818b')});
    


    clients.updateOne({
        age: {
            $gt: 18,
        }}, {
            $set: {
                active: false,
            },
        }, err => {
            if (err) {
                console.log('Błąd podczas aktualizacji!');
            } else {
                console.log('Wszystko OK! - UPDATE');
            }
        });

        clients.find({}).toArray( (err, klienci) => {
            if (err) {
                console.log('Błędne zapytanie!');
            } else {
                console.log('Klienci:', klienci);
            }
        });

    //////

    client.close();
    }

});





