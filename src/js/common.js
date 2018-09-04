/*
* 1.获取路由中的参数值
* 2.深拷贝
*
* */
function getQueryStringByName(name) {
  const result = location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
  if (result == null || result.length < 1) {
    return '';
  }
  return result[1];
}

function deepCopy(obj1, obj2) {
  var obj2 = obj2 || {};
  for (var name in obj1) {
    if (typeof obj1[name] === "object") {
      obj2[name] = (obj1[name].constructor === Array) ? [] : {};
      copy(obj1[name], obj2[name]);
    } else {
      obj2[name] = obj1[name];
    }
  }
  return obj2;
}


export default {
  getQueryStringByName,
  deepCopy,
}
