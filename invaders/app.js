'use strict'

import path from 'path'
import express from 'express'
import { engine } from 'express-handlebars';
import { readFileSync } from 'fs';

const app = express()

const hostname = '0.0.0.0'
const port = 3000

const docroot = path.dirname((new URL(import.meta.url)).pathname)
const pubroot = docroot + '/public'

const disableHttpCache = true

const indexHtml = readFileSync(docroot + '/tpl/index.html')

const setResponseHeaders = function(res, path, stat) {
	if (disableHttpCache) {
		res.set('Expires', 'Mon, 01 Jan 1990 00:00:00 GMT')
    	// See "Kitchen-sink headers" at https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching
	    res.set('Cache-Control', 'no-cache, no-store, max-age=0, must-revalidate')
	    res.set('Pragma', 'no-cache')
	}
}

app.use(express.static(pubroot, {
  setHeaders: setResponseHeaders
}))

app.engine('.html', engine({extname: '.html'}));
app.set('view engine', '.html')
app.set('views', './views')

app.get('/', (req, res) => {
  setResponseHeaders(res)
  res.render('home');
})

app.get('/about', (req, res) => {
  setResponseHeaders(res)
  res.render('about');
})

app.get('/contact', (req, res) => {
  setResponseHeaders(res)
  res.render('contact');
}).post('/contact', (req, res) => {
  setResponseHeaders(res)
  res.render('contact');
})

app.listen(port, hostname, () => {
  console.log(`Docroot is ${docroot}`);
  console.log(`Public root is ${pubroot}`);
  
  console.log(`Server running at http://${hostname}:${port}/`);
})
