import Content from "./Content"
import './List.css'

function List({ list, removeList }) {

    return (
        <>
            <table className="list" >
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Data</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                {list.map((item, key) =>
                    <tbody className="lista" key={key}>
                        {item.valor > 0 ? <Content item={item} removeList={removeList} className='positivo' />
                            : <Content item={item} removeList={removeList} className='negativo' />}
                    </tbody>
                )}
            </table>
        </>
    )
}
export default List