type Props = {
    tema: string
}

export default function CadastroConsumo({ tema }: Props) {
    return (
        <div className="container-fluid px-5">
            <form className="container-fluid px-5 py-4">
                <h1 className="pb-4">Cadastrar Venda</h1>

                {/* campo cliente */}
                <div className="input-group mb-5">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="CPF do Cliente" 
                        aria-label="CPF do Cliente" 
                        aria-describedby="basic-addon1" 
                    />
                </div>

                {/* Produto/Serviço e Quantidade */}
                <div className="row">
                    <div className="mb-3 col-10">
                        <div className="input-group mb-3">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Nome do Produto/Serviço" 
                                aria-label="Nome do Produto/Serviço" 
                                aria-describedby="basic-addon1" 
                            />
                        </div>
                    </div>

                    {/* campo qtd */}
                    <div className="col-2">
                        <div className="input-group">                 
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Quantidade" 
                                aria-label="Quantidade" 
                                aria-describedby="basic-addon1" 
                            />
                        </div>
                    </div>
                </div>

                {/* botão de cadastrar */}
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
    );
}