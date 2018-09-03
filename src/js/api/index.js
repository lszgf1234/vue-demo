/*
* 1.引入axios
* 2.定义公共post get方法
* 3.提交数据方式可以配置json form
* */
import axios from 'axios';
// import config from './config';

function _genFormData(p) {
  var data = new FormData();
  var val;
  for (var k in p) {
    val = p[k];
    if (Array.isArray(val)) {
      for (var i = 0, l = val.length; i < l; i++) {
        data.append(k + '[]', val[i]);
      }
    } else {
      data.append(k, val);
    }
  }
  return data
}

// takes a {} object and returns a FormData object
var objectToFormData = function(obj, form, namespace) {

  var fd = form || new FormData();
  var formKey;

  for (var property in obj) {
    if (obj.hasOwnProperty(property)) {

      if (namespace) {
        formKey = namespace + '[' + property + ']';
      } else {
        formKey = property;
      }

      // if the property is an object, but not a File,
      // use recursivity.
      if (typeof obj[property] === 'object' && !(obj[property] instanceof File)) {

        objectToFormData(obj[property], fd, formKey);

      } else {

        // if it's a string or a File object
        if (obj[property] === '' || obj[property] === undefined) {} else {
          fd.append(formKey, obj[property]);
        }

      }

    }
  }

  return fd;

};

function post(url, data, isJson) {
 /* if (url.slice(0, 4) !== 'http') {
    url = config.host + url
  }*/
  return axios.post(url, isJson ? data : objectToFormData(data))
    .then(function(response) {
      if (response.data.status == 200) {
        return response.data.data;
      } else {
        throw response.data.msg;
        // $message({
        //   type: 'danger',
        //   message: response.data.msg
        // });
      }
    })
}

function get(url, data, isJson) {
  /*if (url.slice(0, 4) !== 'http') {
    url = config.host + url
  }*/
  return axios.get(url, isJson ? data : _genFormData(data))
    .then(function(response) {
      if (response.data.status == 200) {
        return response.data.data;
      } else {
        throw response.data.msg;
      }
    })
}

// eg
function login(params){
  return post('/api/login',params)
}

export default {
  login
}
