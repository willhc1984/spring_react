function Formulario(){
    return(
        <form>
            <input type='text' className='form-control' placeholder='Nome' />
            <input type='text' className='form-control' placeholder='Marca' />

            <input type='button' className='btn btn-primary' value='Cadastrar' />
            <input type='button' className='btn btn-warning' value='Alterar' />
            <input type='button' className='btn btn-danger' value='Remover' />
            <input type='button' className='btn btn-secondary' value='Cancelar' />
        </form>
    )
}

export default Formulario;