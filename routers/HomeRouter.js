const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const {getAllBlogs,createBlog,updateBlog,deleteBlog,findAndCountAll} =  require('../controllers/HomeController');

// create application/json parser
const jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })
   


router.get('/',getAllBlogs);

router.post('/createBlog',[urlencodedParser],createBlog);

router.put('/updateBlog/:id',[urlencodedParser],updateBlog);

router.delete('/deleteBlog/:id',[urlencodedParser],deleteBlog);

router.get('/findAndCount',findAndCountAll);






module.exports = router;