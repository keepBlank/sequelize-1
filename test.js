const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('lg', 'root', '12345', {
    //host:'docker-machine ip'
    dialect: 'mysql'
})

// 创建 User 模型
class User extends Model {}

// 初始化 User
User.init({
    username: DataTypes.STRING,
    birthday: DataTypes.DATE
    // modelName 意思就是表的名字
}, { sequelize, modelName: 'user' });

// 删除数据
User.destroy({
    where: {
        id: 1
    }
});

// 查询数据
async function run () {
    const users = await User.findAll();
    console.log(JSON.stringify(users));
    // 关闭数据库连接
    await sequelize.close()
}
run()


// 同步到数据库
// sequelize.sync()
//     // 创建一条数据
//     .then(() => User.create({
//         username: 'janedoe',
//         birthday: new Date(1980, 6, 20)
//     }))
//     // 打印结果
//     .then(jane => {
//         console.log(jane.toJSON());
//     });