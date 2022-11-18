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

  // Aterar produto
  const alterar = () => {
    fetch('http://localhost:8080/produtos/' + objProduto.id, {
      method: 'put',
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

        // Mensagem
        alert('Produto alterado!');

        //Copia do vetor de produtos
        let vetorTemp = [...produtos];

        //Indice
        let indice = vetorTemp.findIndex((p) => {
          return p.id === objProduto.id;
        });

        // Alterar produto do vetor temp
        vetorTemp[indice] = objProduto;

        //Atualizar vetor de produtos
        setProdutos(vetorTemp);

        // Limpar formulario
        limparFormulario();
      }
    })
  }

  // Remover produto
  const remover = () => {
    fetch('http://localhost:8080/produtos/' + objProduto.id, {
      method: 'delete',
      headers: {
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    //.then(retorno => retorno.json())
    .then(() => {

      alert("Produto excluido!");

      //Copia do vetor de produtos
      let vetorTemp = [...produtos];

      //Indice
      let indice = vetorTemp.findIndex((p) => {
        return p.id === objProduto.id;
      });

      // Remover produto do vetor temp
      vetorTemp.splice(indice, 1);

      //Atualizar vetor de produtos
      setProdutos(vetorTemp);

      //Limpar formulario
      limparFormulario();

    })
  }

  // Limpar formulário
  const limparFormulario = () => {
    setObjProduto(produto);
    setBtnCadastrar(true);
  }

  // Selecionar produto
  const selecionarProduto = (indice) => {
    setObjProduto(produtos[indice]);
    setBtnCadastrar(false);
  }

  // Retorno
  return (
    <div>
      <Formulario botao={btnCadastrar} eventoTeclado = {aoDigitar} cadastrar = {cadastrar} obj={objProduto} cancelar={limparFormulario} remover={remover} alterar={alterar} />
      <Tabela vetor={produtos} selecionar={selecionarProduto} />
    </div>
  );
}

export default App;
