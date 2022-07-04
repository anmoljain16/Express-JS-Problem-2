const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/student/StudentList', (req, res) => {
    res.json([

        { 
          id:1,
          Name:"Pawan"
        },
        { 
            id:2,
            Name:"Ram"
          },
          { 
            id:3,
            Name:"Pushkar"
          },
          { 
            id:4,
            Name:"Dhawan"
          },
          { 
            id:5,
            Name:"Rohit"
          },
    
    ])
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})