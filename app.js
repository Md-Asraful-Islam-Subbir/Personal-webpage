const express=require('express');

const app=express();
const path=require('path');
const fs=require('fs');
app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/' , function(req,res){
    res.redirect('index')
}
)
app.get('/index' , function(req,res){
    res.render('index')
}
)
app.listen(3000);