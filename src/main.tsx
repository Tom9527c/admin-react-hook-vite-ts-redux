import React from 'react'
import ReactDOM from 'react-dom/client'
// 初始化样式一般放在最前面
import 'reset-css'
// UI框架的样式

//全局样式
import '@/assets/styles/sassConfig.scss'

// 组件的样式

import App from './App.tsx'

import{BrowserRouter} from "react-router-dom"


// import Router from "@/router"; // 组件形式的路遇

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    {/*  <Router/>*/}
  </React.StrictMode>,
)
