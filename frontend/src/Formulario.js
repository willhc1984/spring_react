function Formulario({botao, eventoTeclado, cadastrar, obj, cancelar, remover, alterar}){
    return(
        <form>
            <input type='text' value={obj.nome} onChange={eventoTeclado} name='nome' className='form-control' placeholder='Nome' />
            <input type='text' value={obj.marca} onChange={eventoTeclado} name='marca' className='form-control' placeholder='Marca' />

            {
                botao
                ?
                <input type='button' onClick={cadastrar} className='btn btn-primary' value='Cadastrar' />
                :
                <div>
                    <input type='button' onClick={alterar} className='btn btn-warning' value='Alterar' />
                    <input type='button' onClick={remover} className='btn btn-danger' value='Remover' />
                    <input type='button' onClick={cancelar} className='btn btn-secondary' value='Cancelar' />
                </div>
            }
            
            
        </form>
    )
}

export default Formulario;