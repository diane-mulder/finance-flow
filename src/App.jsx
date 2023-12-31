import { useEffect, useState } from 'react'
import localStorage from "./localStorage";
import './App.css';
import Login from './components/Login';

export default function App() { 

  const [localStorageItem, setLocalStorageItem] = useState("");
  const [localStorageNameItem, setLocalStorageNameItem] = useState("");
  
  const [user, setUser] = useState({
    username: '',
    password: ''
  });
  const [allUser, setAllUsers] = useState({})

  async function getAllUserList(){
    const response = await fetch('http://localhost/Exemples-kickof-B2-WEB/useEffect/traitement.php?getAllUsers', {
      method:'GET',
      mode:'no-cors'
    })

    const result = await response.json()
    console.log(result,'zefijwsmlkdj')
    setAllUsers(result);
    console.log(allUser)
  }

  function connexion(login, password){
    setUser({
      username: login,
      password: password 
    })
    getAllUserList()
    console.log(allUser)

    console.log(login, password, user, 'ici connexion')
  }

  useEffect(() => {
    console.log(allUser,'useEffect')
  },[allUser]) 

  function getItem() {
    let result = localStorage.getItem(localStorageNameItem)
    console.log(JSON.parse(result),'coucouu')
  }

  function removeItem(){
    localStorage.removeItem(localStorageItem)
  }

function saveLocalStorage(){
  localStorage.setItem(localStorageNameItem,localStorageItem)
  // localStorage.setItem("lastname", "Smith");

}

  return (

    
    <div className='App'>
      {user.username === '' ? (
        <Login connexion={connexion} />
      ): (
        <div className='transactions'>

          <input onChange={(e)=>{setLocalStorageItem(e.target.value)}} placeholder='RENTREZ LE MONTANT' type="text" />

          <h2>Choisissez une catégorie</h2>
    
          <button onClick={getItem} type="button">Display</button>
    
          <button onClick={removeItem} type='button'>Delete</button>
    
          <button onClick={saveLocalStorage}>Save</button>
        </div>
      )
      }
        {allUser.length > 0 && allUser.map(element => {
          <p>toto</p>
        })}
    </div>
  )
}