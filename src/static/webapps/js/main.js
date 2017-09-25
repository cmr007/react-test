import React from 'react'
import ReactDom from 'react-dom'
import App from './router'
import './lib/flexible.min'
import '../stylesheet/global.less'
import '../stylesheet/iconfont/iconfont.css'
ReactDom.render(<App />, document.getElementById('main'));