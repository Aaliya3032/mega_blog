import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import  authService from './appwrite/auth'
import {login,logout} from './store/authSlice'
import { Footer, Header } from "./components/index"
import { Outlet } from "react-router-dom";


function App() {
  const [loading,setLoading] = useState(true)
  const dispatch = useDispatch()

useEffect(()=>{
  authService.getCurrentUser()
  .then((userData)=>{
     if(userData){
        dispatch(login({userData}))
        console.log("login");
     }else{
      dispatch(logout())
      console.log("logout");
     }
  })
  .finally(()=>{ setLoading(false)})
},[dispatch]) 
  
  return !loading? (<div className="min-h-screen flex flex-wrap content-between bg-gray-400">
    <div className="w-full block">
      <Header/>
      <main>
       Todo: <Outlet/>
      </main>
      <Footer/>
    </div>
  </div>) : null;
}

export default App;
