const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const query = parsedUrl.query;
  const name = query.name;
  let lowercaseName;
  if (name) {
    lowercaseName = name.toLowerCase();
  }
  const matchingNames = [];
  fs.readFile('users.json', 'utf8' , (err,data) => {
        if(err) throw err;
        const users = JSON.parse(data);
        users.forEach((user) => {
            if (user.ime.toLowerCase() === lowercaseName) {
              matchingNames.push(user);
            }
          });

    res.end(`
          <!DOCTYPE html>
          <html>
            <body>
            <h1>MATCH: </h1>
                <ul>
                ${matchingNames.map((user) => `<li>${user.ime} ${user.prezime} ${user.adresa} ${user.broj_telefona}</li>`).join('')}
                </ul>
            </body>
          </html>
        `);   
  }); 
});

// Start the server
server.listen(8080, () => {
  console.log('Server listening on port 8080');
});
