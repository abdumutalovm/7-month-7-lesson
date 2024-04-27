import { Routes, Route, useNavigate } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Cart from './pages/Cart'
import Products from './pages/Products'
import Register from "./pages/Register"
import ErrorPage from './pages/ErrorPage'
import CheckOut from './pages/CheckOut'
import Orders from './pages/Orders'
import Login from './pages/Login'
import Layout from './layout'
import Details from './pages/Details'
import { createContext, useEffect, useState } from "react"

export const ThemeContext = createContext(null);

function App() {
  const navigate = useNavigate();
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (localStorage.getItem('theme')) {
      setTheme(localStorage.getItem('theme'));
    }
  }, []);

  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', theme)
  }, [theme])

  function ProtectedRouter({ children, isAuthentication, redirecTo = '/login' }) {
    if (!isAuthentication) {
      navigate(redirecTo);
    }
    return children;

  }

  return (
    <div>
      <ThemeContext.Provider value={{ theme, setTheme }} >
        <Routes>
          <Route path="/" element={<Layout>
            <Home></Home>
          </Layout>}></Route>
          <Route path="/about" element={<Layout>
            <About></About>
          </Layout>}></Route>
          <Route path="/products" element={<Layout>
            <Products></Products>
          </Layout>}></Route>
          <Route path="/cart" element={<Layout>
            <Cart></Cart>
          </Layout>}></Route>
          <Route path="/product/:id" element={<Layout>
            <Details></Details>
          </Layout>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="*" element={<ErrorPage></ErrorPage>}></Route>


          <Route path="/checkout" element={<ProtectedRouter isAuthentication={false}>
            <Layout>
              <CheckOut></CheckOut>
            </Layout>
          </ProtectedRouter>}></Route>

          <Route path="/orders" element={<ProtectedRouter isAuthentication={false}>
            <Layout>
              <Orders></Orders>
            </Layout>
          </ProtectedRouter>}></Route>
        </Routes>
      </ThemeContext.Provider>
    </div>
  )
}

export default App