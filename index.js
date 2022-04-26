// Import Modules
const express = require('express');
const cheerio = require('cheerio');
const { default: axios } = require('axios');
const res = require('express/lib/response');
const cors = require('cors');

//Application Setup.
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());

const url = 'https://www.theguardian.com/uk';

app.get('/results', (req, res) => {
    axios(url)
        .then((response) => {
            const html = response.data;
            const $ = cheerio.load(html);
            const articles = [];

            $('.fc-item__title', html).each(function() {
                const title = $(this).text();
                const url = $(this).find('a').attr('href');

                articles.push({
                    title,
                    url
                })
            })

            res.json(articles);

        }).catch((error) => { console.log(error) })
})



// Route.
app.get('/', (req, res) => { res.send('Welcome to the Express Node Backend to Frontend API Version 1...'); })

// Initialization of Server.
app.listen(PORT, () => { console.log(`Server Application Running on http://localhost:${PORT}`); });