

const express = require('express');
const path = require('path');



const app = express();

app.set('view engine', 'pug');
// app.set('views', 'views');
app.set('views', path.join(__dirname, 'views'));

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});




app.listen(3000,()=>{
    console.log(`node server is running in port 3000`)
});
