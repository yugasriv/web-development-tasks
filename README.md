const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

let users = [];

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
      <title>Cognifyz Level 1 Project</title>
      <style>
          body{
              font-family:Arial,sans-serif;
              background:#f4f6f9;
              display:flex;
              justify-content:center;
              align-items:center;
              height:100vh;
          }
          .container{
              background:white;
              padding:30px;
              width:400px;
              border-radius:15px;
              box-shadow:0 0 15px rgba(0,0,0,0.2);
          }
          h1{
              text-align:center;
          }
          input{
              width:100%;
              padding:10px;
              margin:8px 0;
              border:1px solid #ccc;
              border-radius:5px;
          }
          button{
              width:100%;
              padding:12px;
              background:#007bff;
              color:white;
              border:none;
              border-radius:5px;
              cursor:pointer;
          }
          button:hover{
              background:#0056b3;
          }
      </style>
  </head>

  <body>

  <div class="container">

      <h1>User Registration</h1>

      <form action="/submit" method="POST" onsubmit="return validateForm()">

          <input type="text" id="name" name="name" placeholder="Enter Name">

          <input type="email" id="email" name="email" placeholder="Enter Email">

          <input type="number" id="age" name="age" placeholder="Enter Age">

          <button type="submit">Submit</button>

      </form>

  </div>

  <script>

  function validateForm(){

      let name=document.getElementById("name").value;
      let email=document.getElementById("email").value;
      let age=document.getElementById("age").value;

      if(name==="" || email==="" || age===""){
          alert("All fields are required");
          return false;
      }

      if(age<18){
          alert("Age must be 18 or above");
          return false;
      }

      return true;
  }

  </script>

  </body>
  </html>
  `);
});

app.post("/submit", (req, res) => {

    const { name, email, age } = req.body;

    if (!name || !email || !age) {
        return res.send("<h2>All fields are required!</h2>");
    }

    if (age < 18) {
        return res.send("<h2>Age must be 18 or above!</h2>");
    }

    users.push({ name, email, age });

    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Success</title>
      <style>
        body{
          font-family:Arial;
          background:#f4f6f9;
          display:flex;
          justify-content:center;
          align-items:center;
          height:100vh;
        }
        .card{
          background:white;
          padding:30px;
          border-radius:15px;
          box-shadow:0 0 15px rgba(0,0,0,0.2);
          width:400px;
        }
      </style>
    </head>
    <body>

    <div class="card">
      <h1>Registration Successful 🎉</h1>

      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Age:</strong> ${age}</p>

      <p><strong>Total Users Stored:</strong> ${users.length}</p>

      <a href="/">Go Back</a>
    </div>

    </body>
    </html>
    `);
});

app.listen(PORT, () => {
    console.log("Server Running at http://localhost:3000");
});
