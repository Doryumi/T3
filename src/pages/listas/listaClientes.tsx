import { useState } from "react";

type Cliente = {
  id: number;
  nome: string;
  nomeSocial: string;
  cpf: string;
  email: string;
  rgs: { numero: string; dataEmissao: string }[];
  telefones: { ddd: string; numero: string }[];
  pets: { id: number; nome: string; tipo: string }[];
};

export default function ListaCliente({ tema }: { tema: string }) {
  const [clientes] = useState<Cliente[]>([
    {
      id: 1,
      nome: "Maria Silva",
      nomeSocial: "Maria Silva",
      cpf: "615.699.040-22",
      email: "mariasilva@email.com",
      rgs: [{ numero: "14.056.298-9", dataEmissao: "22/06/2025" }],
      telefones: [{ ddd: "(96)", numero: "98860-6919" }],
      pets: [{ id: 1, nome: "Rex", tipo: "Cachorro" }],
    },
    {
      id: 2,
      nome: "João Oliveira",
      nomeSocial: "João Oliveira",
      cpf: "603.584.590-87",
      email: "joaooliveira@email.com",
      rgs: [{ numero: "19.031.403-5", dataEmissao: "25/12/2014" }],
      telefones: [{ ddd: "(92)", numero: "98894-8900" }],
      pets: [{ id: 2, nome: "Bella", tipo: "Cachorro" }],
    },    
    {
      id: 3,
      nome: "Carlos Santos",
      nomeSocial: "Carlos Santos",
      cpf: "544.479.780-16",
      email: "carlossantos@email.com",
      rgs: [{ numero: "40.552.516-3", dataEmissao: "01/01/2012" }],
      telefones: [{ ddd: "(47)", numero: "99895-5486" }],
      pets: [{ id: 3, nome: "Lucky", tipo: "Gato" }],
    },    
    {
      id: 4,
      nome: "Ana Costa",
      nomeSocial: "Ana Costa",
      cpf: "614.892.590-74",
      email: "anacosta@email.com",
      rgs: [{ numero: "16.550.054-2", dataEmissao: "10/04/2015" }],
      telefones: [{ ddd: "(62)", numero: "98610-4164" }],
      pets: [{ id: 4, nome: "Nina", tipo: "Gato" }],
    },    
    {
      id: 5,
      nome: "Pedro Souza",
      nomeSocial: "Pedro Souza",
      cpf: "309.594.320-27",
      email: "pedrosouza@email.com",
      rgs: [{ numero: "41.406.624-8", dataEmissao: "07/09/2011" }],
      telefones: [{ ddd: "(68)", numero: "99882-3571" }],
      pets: [{ id: 5, nome: "Toby", tipo: "Cachorro" }],
    },
    {
      id: 6,
      nome: "Laura Mendes",
      nomeSocial: "Laura Mendes",
      cpf: "158.058.970-75",
      email: "lauramendes@email.com",
      rgs: [{ numero: "12.547.316-3", dataEmissao: "12/04/2014" }],
      telefones: [{ ddd: "(95)", numero: "99526-6459" }],
      pets: [{ id: 6, nome: "Lola", tipo: "Gato" }],
    },    
    {
      id: 7,
      nome: "Ricardo Alves",
      nomeSocial: "Ricardo Alves",
      cpf: "246.654.560-89",
      email: "ricardoalves@email.com",
      rgs: [{ numero: "23.062.731-6", dataEmissao: "31/01/2000" }],
      telefones: [{ ddd: "(81)", numero: "99697-0745" }],
      pets: [{ id: 7, nome: "Zoe", tipo: "Coelho" }],
    },    
    {
      id: 8,
      nome: "Fernanda Lima",
      nomeSocial: "Fernanda Lima",
      cpf: "818.320.460-01",
      email: "fernandalima@email.com",
      rgs: [{ numero: "34.150.739-8", dataEmissao: "11/10/2001" }],
      telefones: [{ ddd: "(67)", numero: "99667-1969" }],
      pets: [{ id: 8, nome: "Rocky", tipo: "Cachorro" }],
    },    
    {
      id: 9,
      nome: "Gustavo Rocha",
      nomeSocial: "Gustavo Rocha",
      cpf: "937.844.350-84",
      email: "gustavorocha@email.com",
      rgs: [{ numero: "12.384.756-4", dataEmissao: "04/06/2013" }],
      telefones: [{ ddd: "(16)", numero: "99908-2654" }],
      pets: [{ id: 9, nome: "Mia", tipo: "Gato" }],
    },    
    {
      id: 10,
      nome: "Juliana Pereira",
      nomeSocial: "Juliana Pereira",
      cpf: "620.614.790-81",
      email: "julianapereira@email.com",
      rgs: [{ numero: "14.210.339-1", dataEmissao: "29/03/2004" }],
      telefones: [{ ddd: "(68)", numero: "99897-8412" }],
      pets: [{ id: 10, nome: "Charlie", tipo: "Pássaro" }],
    },
  ]);

  const handleAtualizar = (id: number) => {
    console.log(`Atualizar cliente ${id}`);
    // Lógica para atualização aqui
  };

  const handleRemover = (id: number) => {
    console.log(`Remover cliente ${id}`);
    // Lógica para remoção aqui
  };

  return (
    <div className="px-5 mx-5 py-4">
      <h1 className="pb-4">Lista de Clientes</h1>

      <div className="accordion accordion-flush" id="accordionClientes">
        {clientes.map((cliente) => (
          <div className="accordion-item" key={cliente.id}>
            <h2 className="accordion-header" id={`heading-${cliente.id}`}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse-${cliente.id}`}
                aria-expanded="false"
                aria-controls={`collapse-${cliente.id}`}
              >
                {cliente.nome}
              </button>
            </h2>

            <div
              id={`collapse-${cliente.id}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading-${cliente.id}`}
            >
              <div className="accordion-body">
                <div className="row">
                  <div className="col">
                    <h5>Nome</h5>
                    <p>{cliente.nome}</p>
                  </div>
                  <div className="col">
                    <h5>Nome Social</h5>
                    <p>{cliente.nomeSocial}</p>
                  </div>
                  <div className="col d-flex flex-column">
                    <h5>CPF</h5>
                    <span>{cliente.cpf}</span>
                  </div>
                  <div className="col">
                    <h5>Email</h5>
                    <p>{cliente.email}</p>
                  </div>
                </div>

                <hr />

                <div className="row">
                  <div className="col">
                    <h5>RG's</h5>
                    <table className="table table-hover table-borderless">
                      <thead>
                        <tr>
                          <th scope="col">RG</th>
                          <th scope="col">Data de Emissão</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cliente.rgs.map((rg, index) => (
                          <tr key={index}>
                            <td>{rg.numero}</td>
                            <td>{rg.dataEmissao}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="col">
                    <h5>Telefones</h5>
                    <table className="table table-hover table-borderless">
                      <thead>
                        <tr>
                          <th scope="col">DDD</th>
                          <th scope="col">Número</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cliente.telefones.map((tel, index) => (
                          <tr key={index}>
                            <td>{tel.ddd}</td>
                            <td>{tel.numero}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <hr />

                <h5>Pets</h5>
                <table className="table table-hover table-striped table-borderless">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Nome</th>
                      <th scope="col">Tipo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cliente.pets.map((pet) => (
                      <tr key={pet.id}>
                        <td scope="row">{pet.id}</td>
                        <td>{pet.nome}</td>
                        <td>{pet.tipo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <br />

                <div className="row">
                  <div className="col">
                    <button
                      className="btn btn-outline-warning w-100"
                      onClick={() => handleAtualizar(cliente.id)}
                    >
                      <i className="bi bi-pencil-fill"></i> Atualizar
                    </button>
                  </div>

                  <div className="col">
                    <button
                      className="btn btn-outline-danger w-100"
                      onClick={() => handleRemover(cliente.id)}
                    >
                      <i className="bi bi-trash-fill"></i> Remover
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}