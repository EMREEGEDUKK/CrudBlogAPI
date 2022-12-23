const {Sequelize, DataTypes} = require('sequelize');



const sequelize = new Sequelize('blogdb','root','', {
  host: 'localhost',
  dialect: 'mysql',
  pool: 40
});



const test = async () =>{ try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}}

test();


const blog = sequelize.define('blog', 
{
  blogID : 
  {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  title : DataTypes.STRING
  ,
  description : DataTypes.STRING
  
},
{ tableName: 'blog'}

)

blog.sync();

module.exports = {blog}







