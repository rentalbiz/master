const routes = require('express').Router();



routes.get('/', (req, res) => {
    res.send({ message: 'Get user list' });
});
routes.get('/:userid', (req, res) => {
    res.send({ message: req.params.userid });
});
routes.post('/login',(req,res)=>{
    res.send({ message: "this will login user"});
});
routes.post('/register',(req,res)=>{
    res.send({ message: "this will register user"});
});
routes.post('/forgetpassword',(req,res)=>{
    res.send({ message: "this will retreive user password"});
});

module.exports = routes;