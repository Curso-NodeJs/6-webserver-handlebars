require('dotenv').config()
const express = require('express')
const hbs = require('hbs');
const app = express()
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');



// Servir contenido estatico
app.use( express.static('public/templated-roadtrip') );

app.get('/',  (req, res) => {
  res.render('home', {
      nombre: 'Juan David Mendez',
      titulo: 'Curso de Node'
  })

})

app.get('/generic',  (req, res) => {
    res.render('generic', {
        nombre: 'Juan David Mendez',
        titulo: 'Curso de Node'
    })
  
  })

  app.get('/elements',  (req, res) => {
    res.render('elements', {
        nombre: 'Juan David Mendez',
        titulo: 'Curso de Node'
    })
  
  })

// app.get('/generic', (req, res) => {
//     res.sendFile(__dirname + '/public/templated-roadtrip/generic.html')
// });

// app.get('/elements', (req, res) => {
//     res.sendFile(__dirname + '/public/templated-roadtrip/elements.html')
// });



  app.get('*',  (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
  })
 
app.listen(port, () => console.log(`La aplicación está corriendo en el puerto: ${ port }`))