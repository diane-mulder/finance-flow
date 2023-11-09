import React from "react";
import '../App.css';

export default function Header() {
    const [total, setTotal] = useState('')

    return (
        <div className="header">
            <h2>TOTAL</h2>
            <p>{total}</p>
        </div>
    )
}