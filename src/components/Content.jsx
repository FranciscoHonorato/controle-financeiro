
import './Content.css'


function Content({ item, className ,removeList}) {

  return (
    <>
      <tr className='content' >
        <td  className={className} id='td-size'> {item.descricao} </td>
        <td className={className}> {item.dia} </td>
        <td className={className}> {item.valor.toLocaleString('pt-br', { minimumFractionDigits: 2 })} </td>
        <td className='btn'> <button onClick={()=>removeList(item)}>Excluir</button></td>
      </tr>
    </>
  )
}
export default Content