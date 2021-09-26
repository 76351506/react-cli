/*
 * @Author: heinan
 * @Date: 2021-09-26 09:23:15
 * @Last Modified by: heinan
 * @Last Modified time: 2021-09-26 10:28:07
 */

export function createModel(obj = {}) {
  const context = require.context("@/store/model", false, /\.js|ts$/);
  //通过context.keys()获取model目录下面的文件名
  //遍历文件名，获取文件内容，返回个数组
  const getModel = context.keys().map((key) => context(key));

  //遍历获取到的model数组集合,分别将每一个model绑定到 app.model()
  getModel.forEach((model) => {
    obj[model.default.name] = model.default;
  });
  return obj;
}
