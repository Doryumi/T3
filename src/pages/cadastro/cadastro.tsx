type MenuItem = {
  tela: string;
  label: string;
};

type Props = {
  tema: string;
  seletorView: (tela: string, e: React.MouseEvent) => void;
};

export default function CadastroIndex({ tema, seletorView }: Props) {
  const menuItems: MenuItem[] = [
    { tela: 'CadastroCliente', label: 'Cadastro de Cliente' },
    { tela: 'CadastroPet', label: 'Cadastro de Pet' },
    { tela: 'CadastroProduto', label: 'Cadastro de Produto' },
    { tela: 'CadastroServico', label: 'Cadastro de Serviço' },
    { tela: 'CadastroConsumo', label: 'Cadastro de Venda' }
  ];

  const handleClick = (tela: string, e: React.MouseEvent) => {
    e.preventDefault();
    seletorView(tela, e);
  };

  return (
    <div className="mx-5 px-5 py-4">
      <h1 className="pb-4">Cadastro</h1>
      <ul className="list-group list-group-flush">
        {menuItems.map((item) => (
          <li
            key={item.tela}
            className="list-group-item list-group-item-action"
            onClick={(e) => handleClick(item.tela, e)}
            style={{ cursor: 'pointer' }}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}