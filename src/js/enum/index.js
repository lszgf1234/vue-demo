import loginStatus from './login'

let obj = Object.assign(
  {},
  loginStatus,
  );

function enumerate(obj) {
  window.ENUM = [];
  for (var key1 in obj) {
    var arr = [];
    for (var i = 0; i < obj[key1].length; i++) {
      arr[obj[key1][i]['key']] = obj[key1][i];
    }
    window.ENUM[key1] = arr;
  }
}

function init() {
  enumerate(obj)
}

init()

export default ENUM
