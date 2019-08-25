'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async zevi() {
    const { ctx } = this;
    ctx.body = 'hi, zevi';
  }

}

module.exports = HomeController;
