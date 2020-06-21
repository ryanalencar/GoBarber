import Sequelize from 'sequelize';

import User from './models/User';

import databaseCfg from '../config/database';

const models = [User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseCfg);

    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
