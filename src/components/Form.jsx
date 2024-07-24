
import React from "react"
import './Form.css'


function Form({ addList, text, setText,valor,setValor }) {

    return (
        <>
            <section className="form">
               
                <form onSubmit={addList}>
                    <input className="text" type="text" onChange={(e) => setValor(e.target.value)} value={valor} placeholder="valor..." />
                    <input className="text" type="text" onChange={(e) => setText(e.target.value)} value={text} placeholder="descrição..."/>
                <button className="btn"> add </button>
                </form>
                
            </section>

        </>
    )
}

export default Form