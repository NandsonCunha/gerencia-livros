import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
    'GLivros', 
    'root', 
    '123456', 
    {
      dialect:'mysql',
      port: 3306
    });

export default sequelize;

