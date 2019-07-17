const express = require('express');
const app = express();
const port = 3000;
const connection = require('./db')

const bodyParser = require('body-parser');
// Support JSON-encoded bodies
app.use(bodyParser.json());
// Support URL-encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
}));

// http attractions //

app.get('/attractions', (req, res) => {
    connection.query('SELECT * FROM attractions', (err, results) => {
        if(err) {
            res.status(500).send('Erreur lors de la récupération des attractions');
        } else {
            res.json(results)
        }
    });
});

app.put('/attractions/:id', (req, res) => {
    const id = req.params.id;
    const formData = req.body;
    connection.query('UPDATE attractions SET ? WHERE id = ?', [formData, id], err => {
        if(err) {
            res.status(500).send('Erreur lors de la modification');
        } else {
            res.sendStatus(200);
        }
    });
});


// http spectacles //

app.get('/spectacles', (req, res) => {
    connection.query('SELECT * FROM spectacles', (err, results) => {
        if(err) {
            res.status(500).send('Erreur lors de la récupération des spectacles');
        } else {
            res.json(results)
        }
    });
});

app.get('/spectacles/:id', (req, res) => {
    const id = req.params.id;
    connection.query('SELECT * FROM spectacles WHERE id = ?', id, (err, results) => {
        if(err) {
            res.status(500).send('Erreur lors de la récupération du spectacle');
        } else {
            res.json(results)
        }
    });
});

app.post('/spectacles', (req, res) => {
    const formData = req.body;
    connection.query('INSERT INTO spectacles SET ?', formData, (err, results) => {
        if(err) {
            res.status(500).send('Erreur lors de la sauvegarde du spectacle');
        } else {
            res.json(results)
        }
    });
});


app.delete('/spectacles/:id', (req, res) => {
    const id = req.params.id;
    connection.query('DELETE FROM spectacles WHERE id = ?', id, err => {
        if(err) {
            res.status(500).send('Erreur lors de la suppression du spectacle');
        } else {
            res.status(204).send()
        }
    });
});



app.listen(port, (err) => {
    if (err) {
        throw new Error('Something bad happened...');
    }

    console.log(`Server is listening on ${port}`);
});