
// function App(app){
//     app.get("/api",(req,res)=>{
//         res.json({"users":["userOne","userTwo","userThree","usersFour"]})
//     });
//     app.get('/data',(req,res)=>{
//         res.send("Danh Sách Người Dùng");
//     })
//     app.get('/page',(req,res)=>{
//     })
// }

const pageRouter = require('./page');
const postRouter = require('./post');
function route(app){
    app.use('/data',pageRouter);
    app.use('/post',postRouter);
    
}
module.exports = route;
