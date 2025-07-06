import { useState } from "react";

type Props = {
    tema: string
}

export default function CadastroCliente({ tema }: Props) {
    const [camposRG, setCamposRG] = useState<number[]>([0]);
    const [camposTel, setCamposTel] = useState<number[]>([0]);

    const adicionarCampoRG = () => {
        setCamposRG(prev => [...prev, prev.length]);
    };

    const adicionarCampoTel = () => {
        setCamposTel(prev => [...prev, prev.length]);
    };

    const removerCampoRG = () => {
        if (camposRG.length > 1) {
            setCamposRG(prev => prev.slice(0, -1));
        }
    };

    const removerCampoTel = () => {
        if (camposTel.length > 1) {
            setCamposTel(prev => prev.slice(0, -1));
        }
    };

    return (
        <div className="container-fluid px-5">
            <form className="container-fluid px-5 py-4">
                <h1 className="pb-4">Cadastrar Cliente</h1>
                
                {/* campo nome */}
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                </div>

                {/* campo nome social*/}
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" />
                </div>

                {/* campo email */}
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>@</span>
                    <input type="text" className="form-control" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1" />
                </div>

                {/* campo CPF e data de emissão*/}
                <div className="row">
                    <div className="col-10">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="CPF" aria-label="CPF" aria-describedby="basic-addon1" />
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Data de Emissão" aria-label="Data de Emissão" 
                            onFocus={(e) => e.target.type = 'date'}
                            onBlur={(e) => e.target.type === 'date' && !e.target.value && (e.target.type = 'text')} aria-describedby="basic-addon1" />
                        </div>
                    </div>
                </div>
                
                {/* botoes RG*/}
                <div className="row">
                    <div className="mb-3 col-3">
                        <button className="btn btn-outline-primary w-100" type="button" style={{ background: tema }} onClick={adicionarCampoRG}>Adicionar RG</button>
                    </div>
                    {camposRG.length > 1 && (
                        <div className="mb-3 col-3">
                            <button className="btn btn-outline-primary w-100" type="button" style={{ background: tema }} onClick={removerCampoRG}>Remover Último RG</button>
                        </div>
                    )}
                </div>

                {/* campos RG e data de emissão*/}
                {camposRG.map((_, index) => (
                    <div className="row" key={index}>
                        <div className="col-10">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="RG" aria-label="RG" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Data de Emissão" aria-label="Data de Emissão" 
                                onFocus={(e) => e.target.type = 'date'}
                                onBlur={(e) => e.target.type === 'date' && !e.target.value && (e.target.type = 'text')} aria-describedby="basic-addon1" />
                            </div>
                        </div>
                    </div>
                ))}

                {/* botoes Tel*/}
                <div className="row">
                    <div className="mb-3 col-3">
                        <button className="btn btn-outline-primary w-100" type="button" style={{ background: tema }} onClick={adicionarCampoTel}>Adicionar Telefone</button>
                    </div>
                    {camposTel.length > 1 && (
                        <div className="mb-3 col-3">
                            <button className="btn btn-outline-primary w-100" type="button" style={{ background: tema }} onClick={removerCampoTel}>Remover Último Telefone</button>
                        </div>
                    )}
                </div>

                {/* campo Telefone*/}
                {camposTel.map((_, index) => (
                    <div className="input-group mb-3" key={index}>
                        <input type="text" className="form-control" placeholder="Telefone" aria-label="Telefone" aria-describedby="basic-addon1" />
                    </div>
                ))}

                {/* botão de cadastrar */}
                <div className="justify-content-center mb-3">
                    <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                </div>
            </form>
        </div>
    );
}