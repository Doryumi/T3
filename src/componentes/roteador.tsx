
import { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import CadastroIndex from "../pages/cadastro/cadastro";
import CadastroCliente from "../pages/cadastro/cadastroCliente";
import CadastroPet from "../pages/cadastro/cadastroPet";
import CadastroProduto from "../pages/cadastro/cadastroProduto";
import CadastroServico from "../pages/cadastro/cadastroServico";
import CadastroConsumo from "../pages/cadastro/cadastroConsumo";
import ListaIndex from "../pages/listas/lista";
import ListaCliente from "../pages/listas/listaClientes";
import ListaPet from "../pages/listas/listaPets";
import ListaProduto from "../pages/listas/listaProdutos";
import ListaServico from "../pages/listas/listaServicos";
import ListaConsumo from "../pages/listas/listaConsumo";

type Tela = 
  | 'Listar'
  | 'ListaCliente'
  | 'ListaPet'
  | 'ListaProduto'
  | 'ListaServico'
  | 'ListaConsumo'
  | 'Cadastrar'
  | 'CadastroCliente'
  | 'CadastroPet'
  | 'CadastroProduto'
  | 'CadastroServico'
  | 'CadastroConsumo';

export default function Roteador() {
    const [tela, setTela] = useState<Tela>('Listar');

    const selecionarView = (novaTela: string, evento: React.MouseEvent) => {
        evento.preventDefault();
        // Verifica se a tela é válida antes de atualizar
        if (novaTela as Tela) {
            console.log(novaTela);
            setTela(novaTela as Tela);
        }
    };

    const barraNavegacao = (
        <BarraNavegacao 
            seletorView={selecionarView} 
            tema="#e3f2fd" 
            botoes={['Listar', 'Cadastrar']} 
        />
    );

    const renderizarTela = () => {
        switch (tela) {
            case 'Listar':
                return <ListaIndex tema="#e3f2fd" seletorView={selecionarView} />;
            case 'ListaCliente':
                return <ListaCliente tema="e3f2fd" />;
            case 'ListaPet':
                return <ListaPet tema="e3f2fd" />;
            case 'ListaProduto':
                return <ListaProduto tema="e3f2fd" />;
            case 'ListaServico':
                return <ListaServico tema="e3f2fd" />;
            case 'ListaConsumo':
                return <ListaConsumo tema="e3f2fd" />;
            case 'Cadastrar':
                return <CadastroIndex tema="e3f2fd" seletorView={selecionarView} />;
            case 'CadastroCliente':
                return <CadastroCliente tema="e3f2fd" />;
            case 'CadastroPet':
                return <CadastroPet tema="e3f2fd" />;
            case 'CadastroProduto':
                return <CadastroProduto tema="e3f2fd" />;
            case 'CadastroServico':
                return <CadastroServico tema="e3f2fd" />;
            case 'CadastroConsumo':
                return <CadastroConsumo tema="e3f2fd" />;
            default:
                return <ListaIndex tema="#e3f2fd" seletorView={selecionarView} />;
        }
    };

    return (
        <>
            {barraNavegacao}
            <div className="container-fluid">
                {renderizarTela()}
            </div>
        </>
    );
}