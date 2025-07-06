type Props = {
    tema: string
}

export default function CadastroProduto({ tema }: Props) {
    return (
        <div className="container-fluid px-5">
            <form className="container-fluid px-5 py-4">
                <h1 className="pb-4">Cadastrar Produto</h1>

                {/* Campos do Produto */}
                <div className="row">
                    <div className="mb-3 col-10">
                        <div className="input-group mb-3">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Nome do Produto" 
                                aria-label="Nome do Produto" 
                                aria-describedby="basic-addon1" 
                            />
                        </div>
                    </div>

                    {/* Campo de preço */}
                    <div className="col-2">
                        <div className="input-group">
                            <span 
                                className="input-group-text" 
                                id="basic-addon1" 
                                style={{ background: tema }}
                            >
                                R$
                            </span>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Valor" 
                                aria-label="Valor" 
                                aria-describedby="basic-addon1" 
                            />
                        </div>
                    </div>
                </div>

                {/* Botão de cadastrar */}
                <div className="input-group mb-3">
                    <button 
                        className="btn btn-outline-secondary" 
                        type="button" 
                        style={{ background: tema }}
                    >
                        Cadastrar
                    </button>
                </div>
            </form>
        </div>
    )
}