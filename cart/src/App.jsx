import React from 'react'
import Header from './components/Header'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import CardsDetails from './components/CardsDetails'
import Cards from './components/Cards'
import store from './store'
import { Provider } from 'react-redux'
const App = () => {
  return (
    <div>
    <Provider store={store}>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Cards/>}/>
          <Route path='/cart/:id' element={<CardsDetails/>}/>
        </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App