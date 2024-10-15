import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from "./Pages/Home"
import SignUp from './Components/SignUp'
import SignIn from './Components/SignIn'
import Form from './Components/Form'
import Tickbox from './Pages/Tickbox'
import Patientdashboard from './Pages/Patientdashboard'

const App = () => {
  return (
    <>
    <BrowserRouter>
       <Routes>
           {/* <Route path= "/" Component={Home} />
           <Route path= "SignUp" Component={SignUp} />
           <Route path= "SignIn" Component={SignIn} />
           <Route path= "Tickbox" Component={Tickbox} />
           <Route path= "form" Component={Form}/> */}
           <Route path= "/" Component={Patientdashboard}/>


           </Routes>
            </BrowserRouter>
    
    </>
  )
}

export default App