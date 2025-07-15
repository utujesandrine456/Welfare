const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./Routes/route.js');


app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', authRoutes);

const uri = "mongodb+srv://sandrine:12345@cluster0.ejten.mongodb.net/Wellnest?retryWrites=true&w=majority";
const PORT = 3000;

mongoose.connect(uri)
    .then(() => console.log("MongoDb connected"))
    .catch(err => console.error(err));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});











