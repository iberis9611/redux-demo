// 这时action的构建函数
const sendAction = () => {
    // 我么需要返回一个action的对象
    return {
        type: 'send_type',
        value: '我是一个action'
    }
}

// commonjs规范
module.exports = {
    sendAction
};