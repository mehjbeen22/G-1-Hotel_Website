import { useState } from "react"
import "./book.css"
function Book(){
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [number,setNumber]=useState("")
    function Hendal(event){
        event.preventDefault();
        alert("your booking is seccsefull")
    }
    return (
        <>
        <div className="book">
            <form className="bk" onSubmit={Hendal}>
                <h2>Booking</h2>
                <label>
                    Name:-
                    <input type="text" onChange={(e)=>setName(e.target.value)} />
                </label>
                <label>
                    Email:-
                    <input type="email" onChange={(e)=>setEmail(e.target.value)} />
                </label>
                <label>
                    Number:-
                    <input type="number" onChange={(e)=>setNumber(e.target.value)}/>
                </label>
                <button type="submit">Booking</button>
            </form>
        </div>
        </>
    )
}
export default Book