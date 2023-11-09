import React, { useState } from "react";

export default function Transactions () {

    const [localStorageItem, setlocalStorageItem] = useState('');
    const [localStorageNameItem, setlocalStorageNameItem] = useState('');

    function setItem() {
        let result = localStorage.setItem(localStorageItem);
    }

    function getItem() {
        let result = localStorage.getItem(localStorageNameItem);
        console.log(JSON.parse(result));
    }

    function removeItem() {
        localStorage.removeItem(localStorageItem);
    }

    function saveLocalStorage() {
        localStorage.setItem(localStorageNameItem, localStorageItem);
    }

    return (
        <div>
            <div>
                <h1>CONNEXION</h1>
                <input></input>
            </div>
            
            <div>
               <h1>TRANSACTIONS</h1>
                <input></input>
                <buton onClick={saveLocalStorage} type="button">Save</buton>
                <buton onClick={setItem} type="button">Update</buton>
                <buton onClick={getItem} type="button">Display</buton> 
            </div>
            
        </div>
    );


};