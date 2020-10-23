module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    // "off"或0-关闭规则
    // "warn"或1-将该规则作为警告打开（不影响退出代码）
    // "error"或2-将规则作为错误打开（触发时退出代码为1）
    'no-console': process.env.NODE_ENV === 'production' ? 0 : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "space-before-function-paren": 0, // 函数小括号前可以没空格
    "semi": [0], // 语句分号结尾
    "comma-dangle": [0, "never"],//对象字面量项尾不能有逗号
    "camelcase": [0]
  }
}
