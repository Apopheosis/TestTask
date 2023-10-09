import React, { useState } from 'react';
import styles from './Counter.module.css';
import {useDispatch, useSelector} from "react-redux";
import {creds, user} from "../../interfaces/interfaces";


export function LoginForm() {

  const dispatch = useDispatch()
  const user = useSelector<creds, user>(state => state.user)
  const [Username, setUsername] = useState('')
  const [Password, setPassword] = useState('')
  console.log(Username, Password)

  const setUser = (username: string, password: string): any => {
      dispatch({type: "SET_USER", payload: {user: {username: username, password: password}}})
  }

  return (
      <div>
          <div style={{display: "flex"}}>

            <input type="text" value={Username} onInput={e => setUsername((e.target as HTMLInputElement).value)}/>
            <input type="password" value={Password} onInput={e => setPassword((e.target as HTMLInputElement).value)}/>
            <button onClick={() => setUser(Username, Password)}>Submit</button>
          </div>
      </div>
  );
}
