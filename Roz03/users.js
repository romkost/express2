const users = [
    {id:1, name:"Adam"},
    {id:2, name:"Marysia"},
    {id:3, name:"Jagienka"},
    {id:4, name:"Roman"}
];

module.exports ={
    showUsers(){
      const names =users.map(user => user.name);
      console.log('Nasi uzytkownicy to:')
      names.forEach(name => console.log(name))
    },
    showUserObj(id){
        console.log('Szukany uzytkownik to:');
        const user = users.find(user => id === user.id);
        console.log(user);
    },
    userListLength: users.length
}