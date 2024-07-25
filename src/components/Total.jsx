import './total.css'
//https://www.geeksforgeeks.org/build-an-expense-tracker-using-javascript/

function Total({ total, entrada, saida, abrirModal }) {
    return (
        <>
            <div className='valor_total'>
                <h3> Total </h3>
                <div>
                    <h3>
                        R$ {total.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
                    </h3>
                </div>

                <div className='btn_add'>
                    <button  onClick={abrirModal}>Novo</button>
                </div>
            </div>

            <fieldset className="total">
                <div>
                    Entrada
                    <div>
                        <h4 className='entrada'>
                            R$ {entrada.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
                        </h4>
                    </div>
                </div>
                <hr className="verticle" />
                <div>
                    Saida
                    <div>
                        <h4 className='saida'>
                            R$ {saida.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
                        </h4>
                    </div>
                </div>

            </fieldset>
        </>
    )
}

export default Total