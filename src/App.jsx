/*https://www.geeksforgeeks.org/expense-tracker-using-react/
https://medium.com/@bomber.marek/how-to-use-dialog-in-react-easy-modals-tooltips-81e44d570c8a
https://www.freecodecamp.org/portuguese/news/como-passar-dados-e-eventos-entre-componentes-em-react/
*/

import { useState, useEffect } from 'react'
import Form from './components/Form'
import List from './components/List'
import Total from './components/Total'
import Container from './components/Container'
import './App.css'
import Modal from './components/Modal'


function App() {
  const [list, setList] = useState(parseContent('dbList') || [])
  const [valores, setValores] = useState(parseContent('dbValores') || { entrada: 0, saida: 0, total: 0 })
  const [text, setText] = useState('')
  const [valor, setValor] = useState('')
  const [isOpen, setIsOpen] = useState(false)


  function parseContent(content) {
    const newContent = JSON.parse(localStorage.getItem(content))
    return newContent
  }


  useEffect(() => {
    localStorage.setItem("dbList", JSON.stringify(list))
    localStorage.setItem("dbValores", JSON.stringify(valores))
  }, [list, valores])


  function updateValues(value) {
    let {entrada,saida,total} = valores

    total = total + value

    if (value > 0) {
      entrada = entrada + value
    } else {
      saida = saida + value
    }
    
    setValores({ entrada: entrada, saida: saida, total: total })
  }


  function removeValues(value) {
    let {entrada,saida,total} = valores

    total = total - value

    if (value > 0) {
      entrada = entrada - value
    } else {
      saida = saida - value
    }
    
    console.log(entrada,saida,total)
    setValores({ entrada: entrada, saida: saida, total: total })
  }


  function addList(e) {
    e.preventDefault()

    const data = new Date
    const hora = `${data.getHours()}:${data.getMinutes()}`
    const mes = data.getMonth() + 1 > 9 ? data.getMonth() + 1 : `0${data.getMonth() + 1}`
    const dataCompleta = `${data.getDate()}/${mes}/${data.getYear().toString().substr(-2)}`

    const content = {
      dia: dataCompleta,
      hora: hora,
      descricao: text,
      valor: parseFloat(valor)
    }

    if (content.valor) {
      setList([...list, content])
      setText('')
      setValor('')

      updateValues(content.valor)
      setIsOpen(false)

    }

  }

  
function removeList(content){
  const newList = list.filter((item) => item !== content)
  
  setList([...newList])
  setText('')
  setValor('')

  removeValues(content.valor)
 
}


  return (
    <>
      <Container>

        <Total total={valores.total}
          entrada={valores.entrada}
          saida={valores.saida}
          abrirModal={() => setIsOpen(true)} />
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <Form
            addList={addList}
            total={valores.total}
            text={text}
            setText={setText}
            valor={valor}
            setValor={setValor} />
        </Modal>
        <List list={list} removeList={removeList} />
        <br />
      </Container>
    </>
  )
}

export default App
