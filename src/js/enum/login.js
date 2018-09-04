/**
 *eg1: loginStatus 没有国际化
 *eg2: registerStatus 已经国际化
 *
 * */
let loginStatus = [{
  key: 'phone',
  name: '手机号注册',
  value: 0,
}, {
  key: 'account',
  name: '账号密码注册',
  value: 1,
}];
let registerStatus = [{
  key: 'phone',
  name: INTERNST.enum.loginStatus.phone,
  value: 0,
}, {
  key: 'account',
  name: INTERNST.enum.loginStatus.account,
  value: 1,
}];

export default {
  loginStatus,
  registerStatus
}
