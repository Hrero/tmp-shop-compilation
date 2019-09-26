//sequelize基础配置文件
const Sequelize = require('sequelize');
const sequelize = new Sequelize('shop_tmp','root','123456',{
	host:'localhost',
    dialect:'mysql',
    port: 3306
})

module.exports = sequelize;