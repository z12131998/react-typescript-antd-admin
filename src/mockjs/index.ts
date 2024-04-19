// mock配置类
import Mock from "mockjs";
import loginMock from "./api/loginMock"

Mock.mock("/login","post",loginMock.login);

export default Mock;