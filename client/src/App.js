import React from 'react'
import { Link } from 'react-router-dom'
import CategoryPage from './components/CategoryPage/CategoryPage'
import RegisterForm from './components/General/RegisterForm/RegisterForm'
import LoginForm from './components/General/LoginForm/LoginForm'
import IndexPage from './components/IndexPage/IndexPage'
import ProductPage from './components/ProductPage/ProductPage'
import NewProduct from './components/NewProduct/NewProduct'



export default function App() {
  return (
    <div>
      <IndexPage/>
      {/* <CategoryPage/> */}
      {/* <ProductPage/> */}
      {/* <RegisterForm/> */}
      {/* <LoginForm/> */}
      {/* <NewProduct/> */}
    </div>
  )
}
