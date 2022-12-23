const { response } = require("express");

const {blog} = require('../db/connect');




const getAllBlogs =  async(req,res) => {
   const blogs =  await blog.findAll()

   res.send(blogs);
}



const createBlog = async (req,res) => {
    const id = req.body.id;
    const blogTitle = req.body.title;
    const blogDescription = req.body.blogDesc;

    await blog.create(
        {
           blogID :id,
           title  : blogTitle,
           description  : blogDescription
        }
        )


    res.send("create edildi...")
}


const updateBlog = async (req,res) => {

    const updatingBlogID = req.params.id;
    const desc = req.body.blogDesc;

    await blog.update({ description: desc}, {
    
        where: {
            blogID: updatingBlogID
        } 
    }
     )

    res.send("update edildi");
}

const deleteBlog = async (req,res) => {
    const deleteBlogID = req.params.id;

    await blog.destroy( {
        where: {
            blogID:  deleteBlogID
        }
    }
        )
   

    res.send("silindi");
}


const findAndCountAll = async (req,res) => {


  const items =   await blog.findAndCountAll({ // 2. veriden sonraki 1 tane veriyi bana getir..
        limit: 1,
        offset: 2,
        logging: true
    })



    res.send(items);
    console.log(JSON.stringify(items));
}



module.exports =  {
    getAllBlogs,
    createBlog,
    updateBlog,
    deleteBlog,
    findAndCountAll
}