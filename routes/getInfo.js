const express = require('express');
const router = express.Router();

router.get('/getInfo', (req, res) => {
    res.render('getInfo');
});

router.post('/postInfo', (req, res) => {
    const { name, address, phone, email } = req.body;
    // Handle the form submission, e.g., save the data to a database or send it to another API
    res.send('Form submitted successfully');
});

module.exports = router;
