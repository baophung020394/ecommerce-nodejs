'use strict';

const mongoose = require('mongoose');

const connectString = "mongodb://localhost:27017/shopDEV";

class Database {
  constructor() {
    this.connect();
  }

  connect(type = 'mongodb') {
      if(1 === 1) {
        mongoose.set('debug', true);
        mongoose.set('debug', {color: true})
      }
  }
}