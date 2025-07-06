import React from 'react';

type Props = {
    tema: string;
};

type ClienteRanking = {
    posicao: number;
    nome: string;
    cpf: string;
    total: number | string;
};

type ProdutoServicoRanking = {
    posicao: number;
    id: number;
    nome: string;
    total: number;
};

type ConsumoPorTipo = {
    tipo: string;
    servico: {
        id: number;
        nome: string;
        qtd: number;
    };
    produto: {
        id: number;
        nome: string;
        qtd: number;
    };
};

type ConsumoPorRaca = {
    raca: string;
    servico: {
        id: number;
        nome: string;
        qtd: number;
    };
    produto: {
        id: number;
        nome: string;
        qtd: number;
    };
};

const ListaCliente: React.FC<Props> = ({ tema }) => {
    const top10ClientesQtd: ClienteRanking[] = [
        { posicao: 1, nome: 'Maria Silva', cpf: '61569904022', total: 15 },
        { posicao: 2, nome: 'Pedro Souza', cpf: '30959432027', total: 14 },
        { posicao: 3, nome: 'Ricardo Alves', cpf: '24665456089', total: 14 },
        { posicao: 4, nome: 'Fernanda Lima', cpf: '81832046001', total: 14 },
        { posicao: 5, nome: 'Ana Costa', cpf: '61489259074', total: 13 },
        { posicao: 6, nome: 'João Oliveira', cpf: '60358459087', total: 12 },
        { posicao: 7, nome: 'Laura Mendes', cpf: '15805897075', total: 11 },
        { posicao: 8, nome: 'Juliana Pereira', cpf: '62061479081', total: 11 },
        { posicao: 9, nome: 'Gustavo Rocha', cpf: '93784435084', total: 10 },
        { posicao: 10, nome: 'Carlos Santos', cpf: '54447978016', total: 9 },
    ];

    const top5ClientesValor: ClienteRanking[] = [
        { posicao: 1, nome: 'Maria Silva', cpf: '61569904022', total: 'R$ 2375.4' },
        { posicao: 2, nome: 'João Oliveira', cpf: '60358459087', total: 'R$ 1962.5' },
        { posicao: 3, nome: 'Ricardo Alves', cpf: '24665456089', total: 'R$ 1712.7' },
        { posicao: 4, nome: 'Pedro Souza', cpf: '30959432027', total: 'R$ 1397.2' },
        { posicao: 5, nome: 'Laura Mendes', cpf: '15805897075', total: 'R$ 1226.7' },
    ];

    const produtosMaisConsumidos: ProdutoServicoRanking[] = [
        { posicao: 1, id: 1, nome: 'Guia Retrátil Premium', total: 27 },
        { posicao: 2, id: 2, nome: 'Coleira Antipulgas', total: 23 },
        { posicao: 3, id: 5, nome: 'Caixa Transportadora', total: 14 },
    ];

    const servicosMaisConsumidos: ProdutoServicoRanking[] = [
        { posicao: 1, id: 3, nome: 'Cirurgia de Castração', total: 20 },
        { posicao: 2, id: 5, nome: 'Pet Sitter (diária)', total: 13 },
        { posicao: 3, id: 1, nome: 'Pet Banho e Tosa', total: 10 },
    ];

    const consumoPorTipo: ConsumoPorTipo[] = [
        { 
            tipo: 'Cachorro', 
            servico: { id: 1, nome: 'Banho e Tosa', qtd: 12 },
            produto: { id: 2, nome: 'Coleira Antipulgas', qtd: 12 }
        },
        { 
            tipo: 'Gato', 
            servico: { id: 3, nome: 'Cirurgia de Castração', qtd: 5 },
            produto: { id: 1, nome: 'Guia Retrátil Premium', qtd: 16 }
        },
        { 
            tipo: 'Coelho', 
            servico: { id: 3, nome: 'Cirurgia de Castração', qtd: 6 },
            produto: { id: 5, nome: 'Caixa Transportadora', qtd: 3 }
        },
        { 
            tipo: 'Pássaro', 
            servico: { id: 5, nome: 'Pet Sitter (diária)', qtd: 2 },
            produto: { id: 5, nome: 'Caixa Transportadora', qtd: 3 }
        },
    ];

    const consumoPorRaca: ConsumoPorRaca[] = [
        { 
            raca: 'Labrador', 
            servico: { id: 3, nome: 'Cirurgia de Castração', qtd: 4 },
            produto: { id: 2, nome: 'Coleira Antipulgas', qtd: 6 }
        },
        { 
            raca: 'Poodle', 
            servico: { id: 3, nome: 'Cirurgia de Castração', qtd: 5 },
            produto: { id: 2, nome: 'Coleira Antipulgas', qtd: 6 }
        },
        { 
            raca: 'Persa', 
            servico: { id: 3, nome: 'Cirurgia de Castração', qtd: 2 },
            produto: { id: 1, nome: 'Guia Retrátil Premium', qtd: 6 }
        },
        { 
            raca: 'Siamês', 
            servico: { id: 5, nome: 'Pet Sitter (diária)', qtd: 3 },
            produto: { id: 1, nome: 'Guia Retrátil Premium', qtd: 3 }
        },
        { 
            raca: 'Bulldog', 
            servico: { id: 5, nome: 'Pet Sitter (diária)', qtd: 3 },
            produto: { id: 1, nome: 'Guia Retrátil Premium', qtd: 5 }
        },
        { 
            raca: 'SRD', 
            servico: { id: 3, nome: 'Cirurgia de Castração', qtd: 3 },
            produto: { id: 1, nome: 'Guia Retrátil Premium', qtd: 7 }
        },
        { 
            raca: 'Angorá', 
            servico: { id: 3, nome: 'Cirurgia de Castração', qtd: 3 },
            produto: { id: 2, nome: 'Coleira Antipulgas', qtd: 2 }
        },
        { 
            raca: 'Husky', 
            servico: { id: 1, nome: 'Banho e Tosa', qtd: 3 },
            produto: { id: 1, nome: 'Guia Retrátil Premium', qtd: 4 }
        },
        { 
            raca: 'Canário', 
            servico: { id: 2, nome: 'Consulta Veterinária', qtd: 1 },
            produto: { id: 5, nome: 'Caixa Transportadora', qtd: 2 }
        },
        
    ];

    return (
        <div className="mx-5 px-5 py-4">
            <h1 className="pb-4">Estatísticas</h1>
            
            <div className="accordion accordion-flush" id="accordionEstatisticas">
                {/* Top 10 clientes por quantidade */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTop10Qtd">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTop10Qtd">
                            10 clientes que mais consumiram (em quantidade)
                        </button>
                    </h2>
                    <div id="collapseTop10Qtd" className="accordion-collapse collapse">
                        <div className="accordion-body">
                            <table className="table table-striped align-middle">
                                <thead>
                                    <tr>
                                        <th>Posição</th>
                                        <th>Nome</th>
                                        <th>CPF</th>
                                        <th>Total consumido</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {top10ClientesQtd.map(cliente => (
                                        <tr key={cliente.cpf}>
                                            <td>{cliente.posicao}</td>
                                            <td>{cliente.nome}</td>
                                            <td>{cliente.cpf}</td>
                                            <td>{cliente.total}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Top 5 clientes por valor */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTop5Valor">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTop5Valor">
                            5 clientes que mais gastaram (R$)
                        </button>
                    </h2>
                    <div id="collapseTop5Valor" className="accordion-collapse collapse">
                        <div className="accordion-body">
                            <table className="table table-striped align-middle">
                                <thead>
                                    <tr>
                                        <th>Posição</th>
                                        <th>Nome</th>
                                        <th>CPF</th>
                                        <th>Total gasto</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {top5ClientesValor.map(cliente => (
                                        <tr key={cliente.cpf}>
                                            <td>{cliente.posicao}</td>
                                            <td>{cliente.nome}</td>
                                            <td>{cliente.cpf}</td>
                                            <td>{cliente.total}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Produtos mais consumidos */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingProdutos">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseProdutos">
                            Produtos mais consumidos
                        </button>
                    </h2>
                    <div id="collapseProdutos" className="accordion-collapse collapse">
                        <div className="accordion-body">
                            <table className="table table-striped align-middle">
                                <thead>
                                    <tr>
                                        <th>Posição</th>
                                        <th>ID</th>
                                        <th>Nome</th>
                                        <th>Total consumido</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {produtosMaisConsumidos.map(item => (
                                        <tr key={item.id}>
                                            <td>{item.posicao}</td>
                                            <td>{item.id}</td>
                                            <td>{item.nome}</td>
                                            <td>{item.total}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Serviços mais consumidos */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingServicos">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseServicos">
                            Serviços mais consumidos
                        </button>
                    </h2>
                    <div id="collapseServicos" className="accordion-collapse collapse">
                        <div className="accordion-body">
                            <table className="table table-striped align-middle">
                                <thead>
                                    <tr>
                                        <th>Posição</th>
                                        <th>ID</th>
                                        <th>Nome</th>
                                        <th>Total consumido</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {servicosMaisConsumidos.map(item => (
                                        <tr key={item.id}>
                                            <td>{item.posicao}</td>
                                            <td>{item.id}</td>
                                            <td>{item.nome}</td>
                                            <td>{item.total}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Consumo por tipo */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingPorTipo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePorTipo">
                            Produtos e Serviços por tipo de pet
                        </button>
                    </h2>
                    <div id="collapsePorTipo" className="accordion-collapse collapse">
                        <div className="accordion-body">
                            <table className="table table-striped align-middle">
                                <thead>
                                    <tr>
                                        <th rowSpan={2}>Tipo</th>
                                        <th colSpan={3}>Serviços</th>
                                        <th colSpan={3}>Produtos</th>
                                    </tr>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nome</th>
                                        <th>QTD</th>
                                        <th>ID</th>
                                        <th>Nome</th>
                                        <th>QTD</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {consumoPorTipo.map(item => (
                                        <tr key={item.tipo}>
                                            <td>{item.tipo}</td>
                                            <td>{item.servico.id}</td>
                                            <td>{item.servico.nome}</td>
                                            <td>{item.servico.qtd}</td>
                                            <td>{item.produto.id}</td>
                                            <td>{item.produto.nome}</td>
                                            <td>{item.produto.qtd}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Consumo por raça */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingPorRaca">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePorRaca">
                            Produtos e Serviços por raça de pet
                        </button>
                    </h2>
                    <div id="collapsePorRaca" className="accordion-collapse collapse">
                        <div className="accordion-body">
                            <table className="table table-striped align-middle">
                                <thead>
                                    <tr>
                                        <th rowSpan={2}>Raça</th>
                                        <th colSpan={3}>Serviços</th>
                                        <th colSpan={3}>Produtos</th>
                                    </tr>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nome</th>
                                        <th>QTD</th>
                                        <th>ID</th>
                                        <th>Nome</th>
                                        <th>QTD</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {consumoPorRaca.map(item => (
                                        <tr key={item.raca}>
                                            <td>{item.raca}</td>
                                            <td>{item.servico.id}</td>
                                            <td>{item.servico.nome}</td>
                                            <td>{item.servico.qtd}</td>
                                            <td>{item.produto.id}</td>
                                            <td>{item.produto.nome}</td>
                                            <td>{item.produto.qtd}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListaCliente;