// 对象形式的写法
import React, {lazy} from "react";
import Home from "@/views/Home.tsx";
import Error404 from "@/views/Error404.tsx";
// import About from "@/views/About.tsx";
//路由懒加载
const About = lazy(()=> import("../views/About"))
const Page1 = lazy(()=> import("../views/Page1"))
const Page2 = lazy(()=> import("../views/Page2"))
const Page3 = lazy(()=> import("../views/Page3"))

// 报错 Uncaught Error: A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.
// 懒加载模式的组件写法，外面需要套一层loading的提示加载组件

//Navigate 重定向组件
import {Navigate} from "react-router-dom";
import Login from "@/views/login";




const withLoadingComponent = (comp:React.ReactElement) => {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            {comp}
        </React.Suspense>
    )
}

const routes = [
    {
        path:"/",
        element:<Navigate to="/page1"/>

    },
    //设置子路由
    {
        path:"/",
        element: <Home/>,
        children: [
            {
                path:"/about",
                // element:<Home/>
                // element:<React.Suspense fallback={<div>Loading...</div>}><About/></React.Suspense> // 解决上面报错的写法
                element: withLoadingComponent(<About/>)

            },
            {
                path:"/page1",
                // element:<Home/>
                // element:<React.Suspense fallback={<div>Loading...</div>}><About/></React.Suspense> // 解决上面报错的写法
                element: withLoadingComponent(<Page1/>)

            },
            {
                path:"/page2",
                // element:<Home/>
                // element:<React.Suspense fallback={<div>Loading...</div>}><About/></React.Suspense> // 解决上面报错的写法
                element: withLoadingComponent(<Page2/>)

            },
            {
                path:"/about/page3",
                // element:<Home/>
                // element:<React.Suspense fallback={<div>Loading...</div>}><About/></React.Suspense> // 解决上面报错的写法
                element: withLoadingComponent(<Page3/>)

            }
        ]
    },

    // 登录页
    {
        path:'/login',
        element: <Login/>
    },
    // 可设置404页面
    {
        path:'*',
        element:<Error404/>
    }


    /*{
        path:"/home",
        element:<Home/>

    },
    {
        path:"/about",
        // element:<Home/>
        // element:<React.Suspense fallback={<div>Loading...</div>}><About/></React.Suspense> // 解决上面报错的写法
        element: withLoadingComponent(<About/>)

    },
    {
        path:"/page1",
        // element:<Home/>
        // element:<React.Suspense fallback={<div>Loading...</div>}><About/></React.Suspense> // 解决上面报错的写法
        element: withLoadingComponent(<Page1/>)

    },
    {
        path:"/page2",
        // element:<Home/>
        // element:<React.Suspense fallback={<div>Loading...</div>}><About/></React.Suspense> // 解决上面报错的写法
        element: withLoadingComponent(<Page2/>)

    }*/
]
 export default routes