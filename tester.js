const Lokka = require('lokka').Lokka;
const Transport = require('lokka-transport-http').Transport;

const headers = {
    Authorization: 'Bearer YOUR_AUTH_TOKEN'
}

const client = new Lokka({
    transport: new Transport('https://api.graph.cool/simple/v1/cj8mpquwe0gsm0176pq0djy7q', { headers })
});

function getItems() {
    return client.query(`
      {
      allLinks {
        createdAt
        description
      }
      __schema {
        types {
          name
        }
      }
    }
    
  `)
}

getItems().then((data) => console.log(data));