import React, { useState } from "react";
import SaldoTotal from "../../components/molecules/SaldoTotal";
import LimitesDiarios from "../../components/molecules/LimitesDiarios";
import Historico from "../../components/molecules/Historico";
import MoedaForm from "../../components/molecules/MoedaForm";
import Transferencia from "../../components/molecules/Transferencia";
import HistoricoCompra from "../../components/molecules/HistoricoCompra";
import styles from "./index.module.scss";
import GraficoSemanal from "../../components/molecules/GraficoSemanal";
import GraficoLucro from "../../components/molecules/GraficoLucro";

const Transactions = () => {
  const [historicoTransacoes, setHistoricoTransacoes] = useState([
    { id: 1, name: "Bitcoin", symbol: "BTC", quantidade: 0.002, preco: 120000, acao: "COMPRA", status: "Pendente" },
    { id: 2, name: "Ethereum", symbol: "ETH", quantidade: 0.5, preco: 8500, acao: "VENDA", status: "OK" },
    { id: 3, name: "Ripple", symbol: "XRP", quantidade: 200, preco: 3.5, acao: "COMPRA", status: "Cancelado" },
  ]);

  const adicionarTransacao = (moeda, quantidade, preco, acao, status = 'OK') => {
    const novaTransacao = {
      id: historicoTransacoes.length + 1,
      name: moeda.name,
      symbol: moeda.symbol,
      quantidade,
      preco,
      acao,
      status
    };
    setHistoricoTransacoes([novaTransacao, ...historicoTransacoes]);
  };

  const handleComprar = (moeda, quantidade, preco) => {
    adicionarTransacao(moeda, quantidade, preco, 'COMPRA');
    alert("Comprar ação executada!");
  };

  const handleVender = (moeda, quantidade, preco) => {
    adicionarTransacao(moeda, quantidade, preco, 'VENDA');
    alert("Vender ação executada!");
  };

  const handleTransferir = (moeda, quantidade, empresa, conta) => {
    adicionarTransacao(moeda, quantidade, moeda.preco, 'TRANSFERENCIA', `Transferido para ${conta}`);
    alert("Transferência realizada!");
  };

  return (
    <div className={styles.transactionsPage}>
      <div className={styles.transactions}>
        <SaldoTotal />
        <LimitesDiarios />
        <Historico />
      </div>
      <div className={styles.actions}>
        <MoedaForm
          tipo="Comprar"
          qtd={1}
          preco={3252.27}
          onAction={(moeda, quantidade, preco) => handleComprar(moeda, quantidade, preco)}
        />
        <MoedaForm
          tipo="Vender"
          qtd={0.00007}
          preco={1500.00}
          onAction={(moeda, quantidade, preco) => handleVender(moeda, quantidade, preco)}
        />
        <Transferencia
          moeda={{ name: 'CAKE', symbol: 'CAKE', preco: 520 }}
          empresa="PatinhasBusiness"
          conta="Tio Patinhas"
          onTransferir={handleTransferir}
        />
      </div>
      <div className={styles.historico}>
        <HistoricoCompra historicoTransacoes={historicoTransacoes} />
      </div>
            <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'stretch',
        marginBottom: '30px',
        flexWrap: 'wrap'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '62%',
          marginBottom: '20px', 
        }} className="grafico">
          <GraficoSemanal />
        </div>
        
        <div style={{
          width: '100%',
          maxWidth: '30%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '20px', 
        }} className="grafico">
          <GraficoLucro />
        </div>
      </div>
    </div>
  );
};

export default Transactions;
