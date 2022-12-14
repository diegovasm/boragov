import { Route, Routes } from 'react-router-dom'
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Questoes from "./components/questoes/Questoes"
import NavigationBar from "./components/navigationBar/NavigationBar"
import MenuLateral from "./components/menuLateral/MenuLateral"
import DetalhesQuestoes from './components/detalhesQuestoes/DetalhesQuestoes'
import CadastrarQuestoes from "./components/cadastrarQuestao/CadastrarQuestao"
import Login from "./components/login/Login"
import ErrorPage from "./components/errorPage/ErrorPage"
import { useState } from "react"

import { Container } from 'react-bootstrap'
import BuscaQuestoes from './buscaQuestoes/BuscaQuestoes'

export default function App() {
  
  const apiUrl = "https://ironrest.cyclic.app/boraGOV"
  const [form, setForm] = useState({
    titulo: "",
    problema: "",
    resultadoesperado: "",
    tags: [],
    datacadastro: "",
    orgao: "",
    respostas: 0,
    views: 0,
    votos:0
  })

  const [login, setLogin] = useState(true)

  if(login){
    return(
      <div className="App">  
        <Container className='principal'>

          <Routes>
            <Route path= "/" element={<Login setLogin={setLogin}/>}> </Route>
            <Route path= "/questoes" element={<Questoes apiUrl={apiUrl}/>}> </Route>
            <Route path= "/detalhes/:id" element={<DetalhesQuestoes apiUrl={apiUrl}/>}> </Route>
            <Route path= "/cadastrar" element={<CadastrarQuestoes apiUrl={apiUrl} form={form} setForm={setForm}/>}> </Route>
            <Route path= "/questoes/:busca" element={<BuscaQuestoes apiUrl={apiUrl}/>}> </Route>
            <Route path= "*" element={<ErrorPage />}> </Route>
          </Routes>

        </Container>
      </div>
    )
  }
  return (
    <div className="App">
      

      <NavigationBar setLogin={setLogin}/>
      <Container className='principal ms-0'>

        <MenuLateral/>
        <Routes>
          <Route path= "/questoes" element={<Questoes apiUrl={apiUrl}/>}> </Route>
          <Route path= "/detalhes/:id" element={<DetalhesQuestoes apiUrl={apiUrl}/>}> </Route>
          <Route path= "/cadastrar" element={<CadastrarQuestoes apiUrl={apiUrl} form={form} setForm={setForm}/>}> </Route>
          <Route path= "/questoes/:busca" element={<BuscaQuestoes apiUrl={apiUrl}/>}> </Route>
          <Route path= "*" element={<ErrorPage />}> </Route>
        </Routes>

      </Container>

  
    </div>
  )
}


