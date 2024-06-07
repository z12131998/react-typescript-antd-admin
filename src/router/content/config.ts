/**
 * icon:菜单项图标
 * path:路由地址
 * titile:首页标题
 */
const menuList = [
    {
        key: 'index',
        label: '首页',
        path: '/index'
    },
    {
        key: 'blog',
        label: "作者页面",
        path: "/author",
        // icon:"<GithubOutlined />",
    },
    {
        key: 'other',
        label: "额外功能",
        path: "/other",
        children: [{ label: '子菜单项1', key: 'submenu-item-1', path: "/other/other1" }, { label: '子菜单项2', key: 'submenu-item-2', path: "/other/other2" }]
    }
]

export default menuList;