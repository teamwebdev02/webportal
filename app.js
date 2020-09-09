const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const port = 3001;

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/welcome.html");
});

app.post("/student_register", function (req, res) {
    const fullName = req.body.fName;
    const colName = req.body.collegeName;
    const emailAddress = req.body.emailAdd;
    const password1 = req.body.password1;
    const password2 = req.body.password2;
    var data = {
        members: [
            {
                full_name: fullName,
                college_name: colName,
                email_address: emailAddress,
                password: password2,
                status: "registered"
            },
        ],
    };
    const jsonData = JSON.stringify(data);
    const request = https.request(url, options, function (response) {
        if (response.statusCode === 200) {
            alert("Registeration successful");
        } else {
            alert("Failed to register !!!");
        }
        response.on("data", function (data) {
            console.log(JSON.parse(data));
        });
    });
});

app.post("/student_login", function (req, res) {
    const emailAddress = req.body.Email1;
    const password = req.body.inputPassword1;
    var data = {
        members: [
            {
                email_address: emailAddress,
                password: password
            },
        ],
    };

});

app.post("/admin_login", function (req, res) {
    const emailAddress = req.body.emailAdd;
    const password = req.body.Password1;
    var data = {
        members: [
            {
                email_address: emailAddress,
                password: password
            },
        ],
    };
});

app.listen(port, function () {
    console.log("Server is running on port 3001");
});
