const inquirer = require("inquirer");
const { getAllDirs, generateModulesMap } = require("./utils");
const webpackPromise = require("./utils").webpackPromise;

const _core = require("./webpack.build.core");
const _common = require("./webpack.build.common");

const promptList = [
  {
    type: "checkbox",
    message: "请选择需要打包的基座:",
    name: "frames",
    choices: getAllDirs("./src/frames"),
    validate: function(val) {
      var done = this.async();
      if (val.length == 0) {
        done("请至少选择一个基座！");
        return;
      }
      done(null, true);
    }
  },
  {
    type: "checkbox",
    message: "请选择需要打包的模块:",
    name: "materials",
    choices: getAllDirs("./src/materials"),
    validate: function(val) {
      var done = this.async();
      if (val.length == 0) {
        done("请至少选择一个模块/物料！");
        return;
      }
      done(null, true);
    }
  }
];

(async function() {
  // 选择打包内容
  let answers = await inquirer.prompt(promptList);
  console.log('\n SELECTED FRAMES :',[answers.frames]); // 返回的结果

  console.log('\n SELECTED MATERIALS :',answers.materials); // 返回的结果

  // 打包核心
  console.log("\n--------------- BUILD CORE ---------------");
  await webpackPromise(_core);

  // 打包基座
  console.log("\n--------------- BUILD FRAMES ---------------");
  for (let item of answers.frames) {
    await webpackPromise(_common("frames", item));
  }

  // 打包模块或物料
  console.log("\n--------------- BUILD MODULES OR MATERIALS ---------------");
  for (let item of answers.materials) {
    await webpackPromise(_common("materials", item));
  }
})().then(() => {
  // 处理缓存问题
  generateModulesMap();

  console.log("\n--------------- ALL DONE ---------------\n");
});
