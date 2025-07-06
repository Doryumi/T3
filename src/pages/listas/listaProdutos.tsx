import React from 'react';

type Props = {
    tema: string;
};

type Produto = {
    id: number;
    nome: string;
    preco: string;
};

const ListaProdutos: React.FC<Props> = ({ tema }) => {
    const produtos: Produto[] = [
        { id: 1, nome: 'Guia Retrátil Premium', preco: 'R$79,90' },
        { id: 2, nome: 'Coleira Antipulgas', preco: 'R$45,90' },
        { id: 3, nome: 'Ração Super Premium para Cães', preco: 'R$129,90' },
        { id: 4, nome: 'Arranhador para Gatos', preco: 'R$120,00' },
        { id: 5, nome: 'Caixa Transportadora', preco: 'R$65,00' }
    ];

    const handleEditar = (id: number) => {
        console.log(`Editar produto com ID: ${id}`);
    };

    const handleExcluir = (id: number) => {
        console.log(`Excluir produto com ID: ${id}`);
    };

    return (
        <div className="mx-5 px-5 py-4">
            <h1 className="pb-4">Lista de Produtos</h1>
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
                    {produtos.map((produto) => (
                        <tr key={produto.id}>
                            <td scope="row">{produto.id}</td>
                            <td>{produto.nome}</td>
                            <td>{produto.preco}</td>
                            <td style={{ width: '10px' }}>
                                <div className="d-flex gap-1">
                                    <button 
                                        className="btn btn-outline-secondary"
                                        onClick={() => handleEditar(produto.id)}
                                    >
                                        Editar
                                    </button>
                                    <button 
                                        className="btn btn-outline-danger"
                                        onClick={() => handleExcluir(produto.id)}
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
};

export default ListaProdutos;