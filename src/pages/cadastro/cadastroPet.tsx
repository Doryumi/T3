type Props = {
    tema: string
}

export default function CadastroPet({ tema }: Props) {
    return (
        <div className="container-fluid px-5">
            <form className="container-fluid px-5 py-4">
                <h1 className="pb-4">Cadastrar Pet</h1>

                {/* campo tutor */}
                <div className="input-group mb-5">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="CPF do Tutor" 
                        aria-label="CPF do Tutor" 
                        aria-describedby="basic-addon1" 
                    />
                </div>

                {/* campo nome */}
                <div className="input-group mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Nome" 
                        aria-label="Nome" 
                        aria-describedby="basic-addon1" 
                    />
                </div>

                {/* campo tipo */}
                <div className="input-group mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Tipo" 
                        aria-label="Tipo" 
                        aria-describedby="basic-addon1" 
                    />
                </div>

                {/* campo raça */}
                <div className="input-group mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Raça" 
                        aria-label="Raça" 
                        aria-describedby="basic-addon1" 
                    />
                </div>

                {/* campo gênero */}
                <div className="input-group mb-3">
                    <select 
                        className="form-control" 
                        aria-label="Gênero" 
                        aria-describedby="basic-addon1"
                        defaultValue=""
                    >
                        <option value="" disabled>Gênero do Pet</option>
                        <option value="macho">Macho</option>
                        <option value="femea">Fêmea</option>
                    </select>
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