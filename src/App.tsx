import { NextUIProvider } from '@nextui-org/react'
import './App.css'
import MyRoutes from './config/routes/routes'


function App() {
  return (
    <NextUIProvider>
      <MyRoutes />
    </NextUIProvider>
  )
}

export default App

