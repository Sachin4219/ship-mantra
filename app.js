const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 4000;
const router = require('./routes/index');

const URI = "mongodb+srv://sachin4219:Texas4holdem@cluster0.3ov0bjf.mongodb.net/ShipMantra?retryWrites=true&w=majority"


mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router)  

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

