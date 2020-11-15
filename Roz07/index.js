const mongo = require('mongodb');
const client = new mongo.MongoClient('mongodb://localhost:27017', {useNewUrlParser: true});


function deleteAllDoneTasks(todosCollection) {
    todosCollection.deleteMany({        
        done: true,   //kryteria
    }, err => {
        if (err) {
            console.log('Błąd podczas usuwania!', err);
        } else {
            console.log('Wyczyszczono zakończone zadania');
        }
        client.close();
    });
}




function deleteTask(todosCollection, id) {
    todosCollection.find({
        _id: mongo.ObjectID(id),
    }).toArray((err, todos) => {
        if (err) {
            console.log('Błąd podczas pobierania!', err);
        } else if (todos.length !== 1) {
            console.log('Nie ma takiego zadania!');
            client.close();
        } else {
            todosCollection.deleteOne({        
                _id: mongo.ObjectID(id),    
            }, err => {
                if (err) {
                    console.log('Błąd podczas usuwania!', err);
                } else {
                    console.log('Zadanie usunięte');
                }
                client.close();
            });
        }
    });
}


function markTaskAsDone(todosCollection, id) {
    todosCollection.find({
        _id: mongo.ObjectID(id),
    }).toArray((err, todos) => {
        if (err) {
            console.log('Błąd podczas pobierania!', err);
        } else if (todos.length !== 1) {
            console.log('Nie ma takiego zadania!');
            client.close();
        } else if (todos[0].done) { //todos[0] - jeden elemnt, która ma index=0
            console.log('To zadanie było już ukończone!');
            client.close();            

        } else {
            todosCollection.updateOne({        
                _id: mongo.ObjectID(id),    
            }, {        
                $set: {  // nie będą nadpisane wszystkie pola, tylko te, które chcę          
                    done: true,        
                },
            }, err => {
                if (err) {
                    console.log('Błąd podczas ustawiania zakończenia!', err);
                } else {
                    console.log('Zadanie oznaczone jako zakończone');
                }
                client.close();
            });
        }
    });

}

function showAllTodos(todosCollection) {
    todosCollection.find({}).toArray((err, todos) => {
        if (err) {
            console.log('Błąd podczas pobierania!', err);
        } else {
            const todosToDo = todos.filter(todo => !todo.done);
            const todosDone = todos.filter(todo => todo.done);
            
            console.log(`# Lista zadań do zrobienia (niezakończone): ${todosToDo.length}`);
            for (const todo of todosToDo) {
                //console.log(` - ${todo.title} - ${todo.done ? 'Zakończony' : 'Do zrobienia'}`);
                console.log(`- [${todo._id}] ${todo.title}`);
            }

            console.log(`# Lista zadań zrobionych (zakończone): ${todosDone.length}`);            
            for (const todo of todosDone) {
                //console.log(` - ${todo.title} - ${todo.done ? 'Zakończony' : 'Do zrobienia'}`);
                console.log(`- [${todo._id}] ${todo.title}`);
            }


        }
        client.close();
            });
}



function addNewTodo(todosCollection, title) {
    todosCollection.insertOne({
        title: title,
        done: false,
    }, err => {
        if (err) {
            console.log('Błąd podczas dodawania! ', err)
        } else {
            console.log('Zadanie dodane.');
        }
        client.close();
    });
    
}


function doTheToDo(todosCollection) {
    const [command, ...args] = process.argv.splice(2);
    console.log(command, args);

    switch(command) {
        case 'add':
            addNewTodo(todosCollection, args[0]);
            break;
        case 'list':
            showAllTodos(todosCollection);
            break;
        case 'done':
            markTaskAsDone(todosCollection, args[0]);
            break;
        case 'delete':
            deleteTask(todosCollection, args[0]);
            break;
        case 'cleanup':
            deleteAllDoneTasks(todosCollection);
            break;
        default:
            console.log(`
         ### Lista ToDo - MongoDB ###
         Dostępne komendy:
         add <nazwa zadania> - dadaj zadanie do wykonania
         list - wyświetl zadania
         done <id zadania> - oznacz wybrane zadanie jako zakończone
         delete <id zadania> - usuń wybrane zadanie
         cleanup - usuń zakończone zadania, jeżeli istnieją   
            `)
            client.close()
            break;
    }

}


client.connect(err => {
    if (err) {
    console.log('Błąd połączenia!', err);
    } else {
    console.log('Połączenie udane!');

    ///nazwa bazy = test
    const db = client.db('test');
    const todosCollection = db.collection('todos');
    
    doTheToDo(todosCollection);
    //////


    }

});





