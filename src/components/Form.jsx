
import React from "react"
import './Form.css'


function Form({ addList, text, setText,valor,setValor }) {

    return (
        <>
            <section className="form">
               
                <form onSubmit={addList}>
                    <input className="valor" type="text" onChange={(e) => setValor(e.target.value)} value={valor} placeholder="valor..." />
                    <input className="text" type="text" onChange={(e) => setText(e.target.value)} value={text} placeholder="descrição..."/>
                <button > add </button>
                </form>
                <br />
            </section>

        </>
    )
}

export default Form