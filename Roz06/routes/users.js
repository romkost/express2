function usersRoutes(app) {
app.get('/', (req, res) => {
        const {visitor_name} = req.cookies; //odczyt cookie
            if (visitor_name) {
                res.send(`Witaj, ${visitor_name}`)
            } else {
                res.send('Czy my się znamy?')
            }
    });
    
app.get('/hi/:name', (req, res) => {
const { name } = req.params;
const dt = new Date();
dt.setDate(dt.getDate() + 7);
res.cookie('visitor_name', name, { //zapis cookie
    expires: dt,
    //maxAge: 5 * 60 * 1000,
    });
    res.send('Imie zapisano');
});
    
app.get('/logout', (req, res) => {
    res.clearCookie('visitor_name');
    res.redirect('/');
    });
}

module.exports = usersRoutes;
