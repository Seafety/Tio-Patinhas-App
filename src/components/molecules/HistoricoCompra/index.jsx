import React from "react";
import styles from "./index.module.scss";

const HistoricoCompra = ({ historicoTransacoes }) => {
  const formatarMoeda = (valor) => {
    const valorCorrigido = valor * 1000;
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(valorCorrigido);
  };

  const formatarQuantidade = (quantidade) =>
    quantidade.toLocaleString("pt-BR", {
      minimumFractionDigits: 3,
      maximumFractionDigits: 3,
    });

  return (
    <div className={styles.historicoContainer}>
      <h2>Histórico de compra</h2>
      <table className={styles.historicoTable}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Quantidade</th>
            <th>Preço</th>
            <th>Ação</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {historicoTransacoes.map((transacao) => (
            <tr key={transacao.id}>
              <td>
                {transacao.name}{" "}
                <span style={{ color: "#9A9A9A", marginLeft: "5px" }}>
                  {transacao.symbol}
                </span>
              </td>
              <td>{formatarQuantidade(transacao.quantidade)}</td>
              <td style={{ fontWeight: "bold" }}>
                {formatarMoeda(transacao.preco)}
              </td>
              <td>
                <span
                  className={
                    transacao.acao === "COMPRA"
                      ? styles.acaoCompra
                      : styles.acaoVenda
                  }
                >
                  {transacao.acao}
                </span>
              </td>
              <td>
                <span
                  className={
                    transacao.status === "OK"
                      ? styles.statusOk
                      : transacao.status === "Pendente"
                      ? styles.statusPendente
                      : styles.statusCancelado
                  }
                >
                  {transacao.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoricoCompra;
