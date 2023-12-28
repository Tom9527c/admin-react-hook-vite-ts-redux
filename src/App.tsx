// import { useState } from 'react'
// import {Button} from "antd"
// import {UpCircleFilled} from "@ant-design/icons";
import {useRoutes} from "react-router-dom";
import router from "@/router";

function App() {
  // const [count, setCount] = useState(0)
  const  outlet = useRoutes(router)
  return (
    <div className="App">
{/*        <Link to="/home">Home</Link>|
        <Link to="/about">About</Link>*/}

        {/* 占位符组件，类似窗口，用来展示组件的，有点像vue中的router-view */}
        {/*<Outlet/>*/}
        {outlet}
    </div>
  )
}

export default App
