function Formulario({botao}){
    return(
        <form>
            <input type='text' className='form-control' placeholder='Nome' />
            <input type='text' className='form-control' placeholder='Marca' />

            {
                botao
                ?
                <input type='button' className='btn btn-primary' value='Cadastrar' />
                :
                <div>
                    <input type='button' className='btn btn-warning' value='Alterar' />
                    <input type='button' className='btn btn-danger' value='Remover' />
                    <input type='button' className='btn btn-secondary' value='Cancelar' />
                </div>
            }
            
            
        </form>
    )
}

export default Formulario;