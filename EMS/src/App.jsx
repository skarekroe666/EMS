import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthProvider";
import { getLocalStorage, setLocalStorage } from "./utils/localstorage";
import { useContext, useEffect, useState } from "react";

const App = () => {

  const [user , setUser] = useState(null);
  const [loggedInUserData, setloggedInUserData] = useState(null)
  const [userData, setUserData] = useContext(AuthContext);
  
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggeInUser");

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setloggedInUserData(userData.data)
    }
  },[])
  

  const handleLogin = (email, password) => {
    if(email == "admin@example.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({role: "admin"}));
    }
    else if(userData){
      const employee = userData.find((e)=>email==e.email && password==e.password);
      if(employee){
        setUser("employee");
        setloggedInUserData(employee);
        localStorage.setItem("loggedInUser", JSON.stringify({role: "employee", data: employee}));
      }
    }
    else{
      alert("Invalid Credentials");
    }
  }

  
  return (
    <>
      {!user ? <Login handleLogin= {handleLogin}/> : ""}
      {user == "admin" ? <AdminDashboard changeUser={setUser}/> : (user == "employee" ? <EmployeeDashboard changeUser={setUser} data= {loggedInUserData}/> : null)}
    </>
  )
}

export default App