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
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "*");
    next();
});

// http attractions //

app.get('/attractions', (req, res) => {
    connection.query('SELECT * FROM attractions', (err, results) => {
        if(err) {
            res.status(500).send('Erreur lors de la récupération des attractions');
        } else {
            res.status(200).json(results);
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
            connection.query('SELECT * FROM attractions WHERE id = ?', id, (err, results) => {
                if(err) {
                    res.status(500).send();
                } else {
                    res.status(200).json(results);
                }
            })
        }
    });
});

app.post('/attractions', (req, res) => {
    const formData = req.body;
    connection.query('INSERT INTO attractions SET ?', formData, (err, results)=> {
        if(err) {
            res.status(500).send('Erreur lors de la sauvegarde');
        } else {
            connection.query('SELECT * FROM attractions WHERE id = ?', results.insertId, (err, results) => {
                if(err) {
                    res.status(500).send('Erreur lors de la récupération');
                } else {
                    res.status(201).json(results);
                }
            })
        }
    });
});


// http spectacles //

app.get('/spectacles', (req, res) => {
    connection.query('SELECT * FROM spectacles', (err, results) => {
        if(err) {
            res.status(500).send('Erreur lors de la récupération des spectacles');
        } else {
            res.status(200).json(results)
        }
    });
});

app.get('/spectacles/:id', (req, res) => {
    const id = req.params.id;
    connection.query('SELECT * FROM spectacles WHERE id = ?', id, (err, results) => {
        if(err) {
            res.status(500).send('Erreur lors de la récupération du spectacle');
        } else {
            res.status(200).json(results)
        }
    });
});

app.post('/spectacles', (req, res) => {
    const formData = req.body;
    connection.query('INSERT INTO spectacles SET ?', formData, (err, results)=> {
        if(err) {
            res.status(500).send('Erreur lors de la sauvegarde du spectacle');
        } else {
            connection.query('SELECT * FROM spectacles WHERE id = ?', results.insertId, (err, results) => {
                if(err) {
                    res.status(500).send('Erreur lors de la récupération du spectacle');
                } else {
                    res.status(201).json(results);
                }
            })
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