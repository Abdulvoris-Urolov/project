const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
    name:{
        type: String, 
        require: true, 
        trim: true
    },
    slug:{
        type: String, 
        require: true, 
        unique: true
    },
    parentId:{
        type: String
    }

},  { timestamps: true });

module.exports = mongoose.model('Category', categorySchema);