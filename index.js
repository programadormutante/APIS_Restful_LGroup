import express from 'express'
import bodyParser from 'body-parser'

const app = express()
app.set('json spaces', 4)
app.use(bodyParser.json())
app.use(express.static('public'))
app.route('/')
    .get((req, res) => {
        res.json({ message: 'Bem vindo ao curso de API Rest com JQuery'})
    })

app.listen(3000, () => console.log(`escutando na porta 3000`))