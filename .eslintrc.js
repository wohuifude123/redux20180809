module.exports = {
    "env": {
        //browser 全局变量
        "browser": true,
        // 支持除模块外所有 ECMAScript 6 特性（该选项会自动设置 ecmaVersion 解析器选项为 6）
        "es6": true,
        // Node.js 全局变量和 Node.js 作用域
        "node": true
    },
    // 自定义全局变量
    "globals": {
        "env": true
    },
    // 启用推荐的规则（http://eslint.cn/docs/rules/）
    //"extends": ["eslint:recommended", "plugin:react/recommended"],
    "extends": ["eslint:recommended"],
    parser: "babel-eslint",
    "parserOptions": {
        //你想使用的额外的语言特性
        "ecmaFeatures": {},
        // 设置ECMAScript模块
        "sourceType": "module"
    },
    // 第三方插件
    "plugins": [
        "react"
    ],
    "rules": {
        ////////////////
        // 可能的错误 //
        ////////////////
        /*
        "no-unused-vars": [2, {
            // 允许声明未使用变量
            "vars": "local",
            // 参数不检查
            "args": "none"
        }],
        */
        "no-unused-vars": [1],
        //"no-undef":"off",
        "no-undef":[1],
        // 允许console.log()函数
        "no-console":[1],
        // 禁止使用alert confirm prompt
        "no-alert": 2,

        //////////////
        // 最佳实践 //
        //////////////
        // switch中的case标签不能重复
        "no-duplicate-case": 2,
        // 禁止修改const声明的变量
        "no-const-assign": 2,
        // 禁止使用continue
        "no-continue": 0,
        // 禁止使用eval
        //"no-eval": 1,
        // 禁止多余的冒号
        "no-extra-semi": 2,
        // 禁止switch穿透
        "no-fallthrough": 1,
        // 禁止重复的函数声明
        "no-func-assign": 2,
        // 禁止行内备注
        "no-inline-comments": 0,
        // 禁止使用new Object()
        "no-new-object": 2,
        //禁止使用++，--
        "no-plusplus": 0,
        //禁止重复声明变量
        "no-redeclare": 2,
        //禁止稀疏数组， [1,,2]
        "no-sparse-arrays": 2,
        //未定义前不能使用
        "no-use-before-define": 2,
        // 禁止出现空函数.如果一个函数包含了一条注释，它将不会被认为有问题。
        "no-empty-function":2,
        //
        "no-class-assign":0,

        "linebreak-style": [ // 使用 /n 作为换行标志
            "error",
            "unix"
        ],
        "quotes": [ // 字符串标志 单引号
            //"error",
            "off",
            "single"
        ],


        // 关闭语句强制分号结尾
        "semi": [1],
        //空行最多不能超过100行
        "no-multiple-empty-lines": [0, {"max": 100}],
        //关闭禁止混用tab和空格
        "no-mixed-spaces-and-tabs": [0]
    }
};
