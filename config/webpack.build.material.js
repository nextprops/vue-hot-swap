const _common = require("./webpack.build.common");

// 获取参数
let material = process.env.npm_config_name;

// 构建单个
console.log('-------material----------', material)
if (material) {
  module.exports = _common("materials", material);
}


