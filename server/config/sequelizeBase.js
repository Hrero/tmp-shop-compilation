//sequelize基础配置文件
const Sequelize = require('sequelize');
const sequelize = new Sequelize('shop_tmp','root','123456',{
	host:'localhost',
    dialect:'mysql',
    port: 3306,
    pool: {
        validateConnection: res => {
            console.log('连接成功拉------------>', res)
        }
    }
})

module.exports = sequelize;