const usernameMap = {
    admin: "admin",
    editor: "ediot"
}


const login = (config) => {
    const { username } = JSON.parse(config.body);
    if (username) {
        return {
            code: 200,
            msg: "操作成功",
        };
    } else {
        return {
            code: 501,
            msg: "操作失败",
        }
    }
}

const loginMock = {
    login,
}
export default loginMock;