import './Conteiner.css'

function Container({ children }) {
    return (
        <>
            <fieldset className="todo">
                <legend>
                    <h2>Controle Financeiro</h2>
                </legend>
                {children}
            </fieldset>

        </>

    )
}

export default Container