import { useEffect, useState } from 'react';
import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';

function App() {

  const produto = {
    id : 0,
    nome : '',
    marca : ''
  }

  // UseState
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [produtos, setProdutos] = useState([]);
  const [objProduto, setObjProduto] = useState(produto);

  // UseEffect
  useEffect(() => {
    fetch("http://localhost:8080/produtos")
    .then(retorno => retorno.json())
    .then(retorno_convertido => setProdutos(retorno_convertido));
  }, []);

  // Obtendo dados do formulario
  const aoDigitar = (e) => {
    setObjProduto({...objProduto, [e.target.name]:e.target.value});
  }

  // Cadastrar produto
  const cadastrar = () => {
    fetch('http://localhost:8080/produtos', {
      method: 'post',
      body: JSON.stringify(objProduto),
      headers: {
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {
      console.log(retorno_convertido);
      if(retorno_convertido.error !== undefined){
        alert("Dados inválidos! Digite corretamente.")
      }else{
        setProdutos([...produtos, retorno_convertido]);
        alert('Produto cadastrado!');
        limparFormulario();
      }
    })
  }

  // Limpar formulário
  const limparFormulario = () => {
    setObjProduto(produto);
  }

  // Retorno
  return (
    <div>
      <Formulario botao={btnCadastrar} eventoTeclado = {aoDigitar} cadastrar = {cadastrar} obj={objProduto} />
      <Tabela vetor={produtos} />
    </div>
  );
}

export default App;
