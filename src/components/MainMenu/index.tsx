import React, {useState} from "react";
import {DesktopOutlined, PieChartOutlined, UserOutlined} from "@ant-design/icons";
import type {MenuProps} from "antd";
import {Menu} from "antd";
import {useNavigate, useLocation} from "react-router-dom";

//  MenuItem 的类型  Required<> 是 TypeScript 内置的一个工具类型，将所有属性设置为必需。
// MenuProps 是一个类型，假设它具有一个属性 items，它是一个数组。
// MenuProps['items'] 表示访问 MenuProps 类型的 items 属性，得到它的类型，即数组的类型。
// [number] 表示访问数组的索引类型，即数组中元素的类型
type MenuItem = Required<MenuProps>['items'][number];

// label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[] 是参数类型
// : MenuItem 返回一个  MenuItem 类型
function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem; // 断言成 : MenuItem类型
}

const items: MenuItem[] = [
    getItem('栏目 1', '/page1', <PieChartOutlined />), // <PieChartOutlined /> 是图标
    getItem('栏目 2', '/page2', <DesktopOutlined />),
    getItem('栏目 3', '/about', <UserOutlined />, [
        getItem('Tom', '/about/page3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
]

const MainMenu: React.FC = () => {

    const navigateTo = useNavigate()

    // 获取导航栏路径
    const currentRoute = useLocation()


    // 默认打开的父节点
    let firstOpenKey:string = "";

    // 拿着currentRoute.pathname 跟items数组的每一项的children的key值进行对比，如果找到了相等的，就要它上一级的key
    // 这个key给到openKey组数的元素，作为初始值

    // 使用ES6的find方法查找
    function firstKey (obj:{key:string}) {
        return obj.key === currentRoute.pathname
    }
    for(let i = 1;i < items.length;i++){
        // 判断是否找到
        const currentItem = items[i] as { key: string, children?: Array<any> };
        if (currentItem['children'] && currentItem['children'].length > 1 && currentItem['children'].find(firstKey)) {
            firstOpenKey = currentItem.key
            break;
        }
    }


    // 设置展开的父节点
    const [openKeys, setOpenKeys] = useState([firstOpenKey]);
    //点击跳转对应的路由
    const menuClick = (e:any) =>{
        console.log(e)
        navigateTo(e.key)
    }
    // 设置展开收起的事件
    const handleOpenChange = (keys:string[]) => {
        console.log(keys)
        // 设置只展开译者父节点
        setOpenKeys([keys[keys.length-1]])
    }
    return (
        <Menu
            theme="dark"
            defaultSelectedKeys={[currentRoute.pathname]}
            mode="inline"
            items={items}
            onClick={menuClick}
            onOpenChange={handleOpenChange}
            openKeys={openKeys}
        />
    )
}

export default MainMenu