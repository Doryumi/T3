import React from 'react';

type Props = {
    tema: string;
};

type Pet = {
    id: number;
    nome: string;
    tipo: string;
    raca: string;
    genero: 'Macho' | 'Fêmea';
    tutor: string;
};

const ListaPets: React.FC<Props> = ({ tema }) => {
    const pets: Pet[] = [
        { id: 1, nome: 'Rex', tipo: 'Cachorro', raca: 'Labrador', genero: 'Macho', tutor: '615.699.040-22' },
        { id: 2, nome: 'Bella', tipo: 'Cachorro', raca: 'Poodle', genero: 'Fêmea', tutor: '603.584.590-87' },
        { id: 3, nome: 'Lucky', tipo: 'Gato', raca: 'Persa', genero: 'Macho', tutor: '544.479.780-16' },
        { id: 4, nome: 'Nina', tipo: 'Gato', raca: 'Siamês', genero: 'Fêmea', tutor: '614.892.590-74' },
        { id: 5, nome: 'Toby', tipo: 'Cachorro', raca: 'Bulldog', genero: 'Macho', tutor: '309.594.320-27' },
        { id: 6, nome: 'Lola', tipo: 'Gato', raca: 'SRD', genero: 'Fêmea', tutor: '158.058.970-75' },
        { id: 7, nome: 'Zoe', tipo: 'Coelho', raca: 'Angorá', genero: 'Fêmea', tutor: '246.654.560-89' },
        { id: 8, nome: 'Rocky', tipo: 'Cachorro', raca: 'Husky', genero: 'Macho', tutor: '818.320.460-01' },
        { id: 9, nome: 'Mia', tipo: 'Gato', raca: 'SRD', genero: 'Fêmea', tutor: '937.844.350-84' },
        { id: 10, nome: 'Charlie', tipo: 'Pássaro', raca: 'Canário', genero: 'Macho', tutor: '620.614.790-81' }
    ];

    const handleEditar = (id: number) => {
        console.log(`Editar pet com ID: ${id}`);
    };

    const handleExcluir = (id: number) => {
        console.log(`Excluir pet com ID: ${id}`);
    };

    return (
        <div className="mx-5 px-5 py-4">
            <h1 className="pb-4">Lista de Pets</h1>
            <table className="table table-striped align-middle">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Raça</th>
                        <th scope="col">Gênero</th>
                        <th scope="col">Tutor</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {pets.map((pet) => (
                        <tr key={pet.id}>
                            <td scope="row">{pet.id}</td>
                            <td>{pet.nome}</td>
                            <td>{pet.tipo}</td>
                            <td>{pet.raca}</td>
                            <td>{pet.genero}</td>
                            <td>{pet.tutor}</td>
                            <td style={{ width: '10px' }}>
                                <div className="d-flex gap-1">
                                    <button 
                                        className="btn btn-outline-secondary"
                                        onClick={() => handleEditar(pet.id)}
                                    >
                                        Editar
                                    </button>
                                    <button 
                                        className="btn btn-outline-danger"
                                        onClick={() => handleExcluir(pet.id)}
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

export default ListaPets;