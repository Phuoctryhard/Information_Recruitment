const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const recruitments = new Schema({
    congti: {type: String},
    luong :{type: String},
    vitri:{type:String},
    khuvuc: {type:String},
    level: {type:String},
    anh: {type:String},
    timedang:{type : String}
},{
    timestamps:true
});
module.exports = mongoose.model('recruitments',recruitments);


//  companyName: ' Công ty Product Nhật ',
//   salary: '200k',
//   position: 'rs',
//   region: 'd',
//   level: 'senior',
//   'ảnh': '',
//   postingTime: '2023-11-03T18:58',
//   skills: 'd

