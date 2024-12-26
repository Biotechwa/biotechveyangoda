const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handle POST request to login
app.post('/biotechmedicallaboratorywhatsappsystemloginsucesspageandyoucancollectwhatsapp', (req, res) => {
    const { username, password } = req.body;
    // Validate the login credentials (this is just an example)
    if (username === 'admin_btlab' && password === 'admin_btlab') {
        res.send('Login Successful');
    } else {
        res.status(401).send('Invalid Credentials');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
