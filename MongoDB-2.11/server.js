const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/newDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('✅ Connected to MongoDB: newDB');
    })
    .catch((err) => {
        console.error('MongoDB connection failed:', err.message);
    });

const studentSchema = new mongoose.Schema({
    name: String,
    email: String,
    course: String
});

const Student = mongoose.model('Student', studentSchema);
