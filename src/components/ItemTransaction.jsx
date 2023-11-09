import React, { useState } from "react";
import '../App.css';

export default function ItemTransaction() {
    const [category, setCategory] = useState('');
    const [subcategory, setSubcategory] = useState('');
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [amount, setAmount] = useState('');

    return (
        <div className="item-transaction">
            <div className="icon-sub-category">{subcategory}</div>
            <h3>{title}</h3>
            <p>{date}</p>
            <p>{location}</p>
            <div className="category">{category}<p className="amount">{amount}</p></div>
        </div>
    )
}