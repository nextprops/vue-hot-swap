var loadjs = require("loadjs");

export default (type, name, modulesMap) =>
  new Promise((resolve, reject) => {
    loadjs(
      `./${type}/${name}/${name}${
        modulesMap[name] ? "." + modulesMap[name] : ""
      }.js`,
      {
        success: () => {
          window.QIANKUN_SUCCESS = window.QIANKUN_SUCCESS || [];
          window.QIANKUN_SUCCESS.push(name);
          resolve({ default: window[type + "_" + name].default });
        },
        error: err => {
          window.QIANKUN_FAILURE = window.QIANKUN_FAILURE || [];
          window.QIANKUN_FAILURE.push(name);
          reject(err);
        }
      }
    );
  });
