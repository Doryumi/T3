type Servico = {
    id: number;
    nome: string;
    preco: string;
}

export default function ListaServico({ tema }: { tema: string }) {
    const servicos: Servico[] = [
        { id: 1, nome: 'Banho e Tosa', preco: 'R$50,00' },
        { id: 2, nome: 'Consulta Veterinária', preco: 'R$100,00' },
        { id: 3, nome: 'Cirurgia de Castração', preco: 'R$300,00' },
        { id: 4, nome: 'Vacinação', preco: 'R$80,00' },
        { id: 5, nome: 'Pet Sitter (diária)', preco: 'R$120,00' }
    ];

    const handleEditar = (id: number) => {
        console.log(`Editar serviço ${id}`);
    };

    const handleExcluir = (id: number) => {
        console.log(`Excluir serviço ${id}`);
    };

    return (
        <div className="mx-5 px-5 py-4">
            <h1 className="pb-4">Lista de Serviços</h1>
            <table className="table table-striped align-middle">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Preço</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {servicos.map((servico) => (
                        <tr key={servico.id}>
                            <td scope="row">{servico.id}</td>
                            <td>{servico.nome}</td>
                            <td>{servico.preco}</td>
                            <td style={{ width: '10px' }}>
                                <div className="d-flex gap-1">
                                    <button 
                                        className="btn btn-outline-secondary"
                                        onClick={() => handleEditar(servico.id)}
                                    >
                                        Editar
                                    </button>
                                    <button 
                                        className="btn btn-outline-danger"
                                        onClick={() => handleExcluir(servico.id)}
                                    >
                                        Excluir
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}