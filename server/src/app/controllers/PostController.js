const express = require('express');
const { mongooseToObject} = require('../util/mongose');
const {mutipleMongooseToObject} = require('../util/mongose');
const router = express.Router();
const Posts = require('../models/Post');
const Recruitment = require('../models/Recruitment');

class PostController{
    //get [post/by/:id]
getbyid(req, res, next) {
    const idd = req.params.id;
    console.log(idd);
        Posts.findOne({id:idd})
            .then(element => {
                if (!element) {
                    const error = new Error('Không tìm thấy bài viết');
                    error.status = 404;
                    throw error;
                }

                res.json(element);
                console.log(element.text);
            })
            .catch(next);
        }
    //get [/data/]
    show(req,res,next){
       Posts.find({})
        .then((data)=>{
            console.log('Found record:', data);
            res.json(data);     
        })
        .catch(next);
    }
    create(req,res,next){
        Recruitment.find({})
            .then((data)=>{
                console.log('Found record:', data);
                res.json(data);    
            })
            .catch(next);
    }
    createpost(req,res,next){
        const recruitment = new Recruitment(req.body);
        recruitment.save()
            .then(()=>console.log('Recruitment saved:',req.body ))
            .catch(error => {
                console.error('Error saving recruitment:', error);
            })
    }

}
module.exports = new PostController;


