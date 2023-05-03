import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hook/useAuth";


export default function LoginPage() {
   const navigate = useNavigate();
   const location = useLocation();
   const { signIn } = useAuth();

   const [errorInput, setErrorInput] = useState(false);

   const fromPage = location.state?.from?.pathname || '/';

   const login = (e) => {
      setErrorInput(false)
      e.preventDefault();
      const name = e.target.username.value;
      if (!name) return setErrorInput(true);
      signIn(name, () => {
         navigate(fromPage);
      })


   }

   return (
      <div>
         <h1>Login</h1>
         <form onSubmit={login}>
            <label >
               Name: <input type="text" placeholder="name" name="username" />
               <button type="submit">Sign In</button>
            </label>
         </form>
         {errorInput && <p style={{ color: 'red' }}>Введите любое имя</p>}
      </div>
   )
}