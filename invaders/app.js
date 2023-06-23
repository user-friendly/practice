'use strict'

import path from 'path'
import express from 'express'
import { readFileSync } from 'fs';

const app = express()

const hostname = '0.0.0.0'
const port = 3000

const docroot = path.dirname((new URL(import.meta.url)).pathname)
const pubroot = docroot + '/public'

const indexHtml = readFileSync(docroot + '/tpl/index.html')

app.use(express.static(pubroot))

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.set('Content-Type', 'text/html')
  res.send(indexHtml)
})

app.listen(port, hostname, () => {
  console.log(`Docroot is ${docroot}`);
  console.log(`Public root is ${pubroot}`);
  
  console.log(`Server running at http://${hostname}:${port}/`);
})
