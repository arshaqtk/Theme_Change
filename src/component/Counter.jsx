
import { useState } from "react"
import './Counter.css'

function Counter() {
    let [value, setvalue] = useState(1)
    let [color, setColor] = useState("white")
    return (
        <>
            <div className="parent" style={{ backgroundColor: color }}>
                <div className={color == "white" ? "BoxWhite" : "BoxBlack"}>
                    <h1 className={color=="white"?"textWhite":"textBlack"}>Counter</h1><br />
                    <button onClick={() => { setColor(color = (color == "white" ? "black" : "white")) }}>color</button><br />
                    <button onClick={() => { setvalue(value + 1) }}  >Increment</button><br />
                    <h3 className={color=="white"?"textWhite":"textBlack"}>{value}</h3>
                    <button onClick={() => { setvalue(value - 1) }}>Decrement</button>
                </div>
            </div>

        </>
    )
}



export default Counter