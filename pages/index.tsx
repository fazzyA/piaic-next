// next js every thing is a function
// 1. function 2. return html 3. only return 1 thing
import React from 'react'
import Content from '../components/Content'
import Header from '../components/Header'

export default function index() {
    // api calling
    // backend
    // calculations
  return (
    <div>
        {/* <Header></Header> */}
        <Header />
        <Content />
    </div>
  )
}
