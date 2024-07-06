const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


const mongoURI = 'mongodb+srv://marathe8459:CGuJOltNN08n1TJM@cluster0.oco9nvd.mongodb.net/Cluster0?retryWrites=true&w=majority';
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors({
    origin: 'https://portfolio-frontend-rust-three.vercel.app', // Your frontend URL
    methods: 'GET,POST,PUT,DELETE',
    credentials: true // Enable this if you need to include cookies in the requests
}));

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a schema and model
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact = mongoose.model('Contact', contactSchema);

// Define routes
app.post('/', async (req, res) => {
  const { name, email, message } = req.body;
  const newContact = new Contact({ name, email, message });
  try {
    await newContact.save();
    res.status(201).send('Message received');
  } catch (error) {
    res.status(500).send('Error saving message');
  }
});

// Start the server
const PORT =  5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


