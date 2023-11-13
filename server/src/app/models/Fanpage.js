const mongoose = require('mongoose');
const  Schema  = mongoose.Schema;
// const page = new Schema({
//     follow: {type:String,maxlength:600},
//     like: {type:String},
//     post: {type:String},
//     namegroup: {type:String}
// });
// module.exports = mongoose.model('page',page);

const pages = new Schema({
    name: {type: String,maxlength:600},
    like: {type: String},
    follow:{type:String}

},{
    timestamps:true
});
module.exports = mongoose.model('pages',pages);

