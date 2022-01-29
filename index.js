var http = require('http')

const port = process.env.PORT || 3000

let server = http.createServer(function (req, res) {
  let counter = 0
  const styles = `  <style> 
  h1 {
    text-align: center;
    font-family: consolas, sans-serif;
    color: #050505;
  }
  a {color: darkblue; text-decoration:none; padding: 0.5rem 1rem;
    margin: 0.5rem;
    font-size: 1.5rem; }
  a:hover {
    background: #fafafa;
    text-decoration: underline;
    color: salmon;
  }
  html, body {
    margin: 0;
  }
  </style>`

  const nav = ` <div style="width: 100%; background: lightsalmon; ">
      <a href="/index">HOME</a>
      <a href="/about">ABOUT ME</a>
      <a href="/contact">CONTACT ME</a>
      </div>
  `
  if (req.url === '/' || req.url === '/index') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(styles)
    res.write(nav)
    res.write(`
      <h1>WELCOME TO MY SERVER RENDERED APP</h1>
      <img width="100%"; style="max-height:90vh;  background: #fafafa;   object-fit: contain;" alt="img" src="https://source.unsplash.com/random/?nature"/>
      <code style="text-align: right; display: block">Random photo from unsplash</code>
      `)
    return res.end()
  } else if (req.url === '/about') {
    content = `
      <h1>ABOUT PAGE</h1>
    `
    res.write(styles)
    res.write(nav)
    res.write(content)
  } else if (req.url === '/contact') {
    content = `
      <h1>CONTACT PAGE</h1>
      <a href="/404">404 page</a>

    `
    res.write(styles)
    res.write(nav)
    res.write(content)
  } else {
    content = `
      <h1 style="text-align: center">404 PAGE NOT FOUND</h1>
    `
    res.write(styles)
    res.write(nav)
    res.write(content)
  }
})

server.listen(port, () => {
  console.log(`Server running at port ${port}`)
})
