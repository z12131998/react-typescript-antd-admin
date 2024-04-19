import request from "@/utils/reqeust";
export function reqLogin(data){
    return request({
        url:"/login",
        method:"post",
        data,
    });
}