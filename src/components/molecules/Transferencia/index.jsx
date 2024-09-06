import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';
import btcIcon from '../../../asset/btcIcon.svg';
import ethIcon from '../../../asset/ethIcon.svg';
import dogeIcon from '../../../asset/dogeIcon.svg';
import cakeIcon from '../../../asset/cakeIcon.svg';
import tether from '../../../asset/tether.svg';
import litecoin from '../../../asset/litecoin.svg';

const initialMoedas = [
  { name: 'Tether', symbol: 'USDT', img: tether, available: 1000 },
  { name: 'Litecoin', symbol: 'LTC', img: litecoin, available: 50 },
  { name: 'Bitcoin', symbol: 'BTC', img: btcIcon, available: 0.5 },
  { name: 'Ethereum', symbol: 'ETH', img: ethIcon, available: 2 },
  { name: 'Doge', symbol: 'DOGE', img: dogeIcon, available: 10000 },
  { name: 'Pancake', symbol: 'CAKE', img: cakeIcon, available: 200 },
];

const initialSaldos = {
  empresas: {
    PatinhasBusiness: { USDT: 500, LTC: 10, BTC: 0.1, ETH: 1, DOGE: 2000, CAKE: 50 },
    DuckEnterprises: { USDT: 300, LTC: 5, BTC: 0.2, ETH: 0.5, DOGE: 1000, CAKE: 30 },
    CryptoVentures: { USDT: 200, LTC: 8, BTC: 0.15, ETH: 0.7, DOGE: 500, CAKE: 40 },
  },
  contas: {
    TioPatinhas: { USDT: 0, LTC: 0, BTC: 0, ETH: 0, DOGE: 0, CAKE: 0 },
    PatolinoFinance: { USDT: 0, LTC: 0, BTC: 0, ETH: 0, DOGE: 0, CAKE: 0 },
    ScroogeMcDuckAccount: { USDT: 0, LTC: 0, BTC: 0, ETH: 0, DOGE: 0, CAKE: 0 },
  },
};

const empresas = ['PatinhasBusiness', 'DuckEnterprises', 'CryptoVentures'];
const contas = ['TioPatinhas', 'PatolinoFinance', 'ScroogeMcDuckAccount'];

const Transferencia = ({ onTransferir }) => {
  const [moedas, setMoedas] = useState(initialMoedas);
  const [moedaSelecionada, setMoedaSelecionada] = useState(moedas[0]);
  const [quantidade, setQuantidade] = useState('');
  const [empresaSelecionada, setEmpresaSelecionada] = useState(empresas[0]);
  const [contaSelecionada, setContaSelecionada] = useState(contas[0]);
  const [erro, setErro] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [saldos, setSaldos] = useState(initialSaldos);

  const handleMoedaChange = (e) => {
    const selectedMoeda = moedas.find((m) => m.symbol === e.target.value);
    setMoedaSelecionada(selectedMoeda);
    setErro('');
    setMensagem('');
  };

  const handleQuantidadeChange = (e) => {
    const valorDigitado = e.target.value.replace(',', '.');
    setQuantidade(valorDigitado);
    setErro('');
    setMensagem('');
  };

  const handleTransferir = () => {
    const valorNumerico = parseFloat(quantidade) || 0;

    if (valorNumerico <= 0) {
      setErro('Digite uma quantidade válida.');
      return;
    }

    const saldoEmpresa = saldos.empresas[empresaSelecionada][moedaSelecionada.symbol];

    if (valorNumerico > saldoEmpresa) {
      setErro(`Saldo insuficiente. A empresa ${empresaSelecionada} possui apenas ${saldoEmpresa} ${moedaSelecionada.symbol}.`);
      return;
    }

    const novosSaldos = { ...saldos };
    novosSaldos.empresas[empresaSelecionada][moedaSelecionada.symbol] -= valorNumerico;
    novosSaldos.contas[contaSelecionada][moedaSelecionada.symbol] += valorNumerico;

    setSaldos(novosSaldos);

    // Sucesso na transferência
    setMensagem(`Transferência de ${valorNumerico.toFixed(5)} ${moedaSelecionada.symbol} de ${empresaSelecionada} para ${contaSelecionada} realizada com sucesso!`);
    setErro('');
    onTransferir(moedaSelecionada, valorNumerico, empresaSelecionada, contaSelecionada);
    setQuantidade(''); 
  };

  useEffect(() => {
    if (erro || mensagem) {
      const timer = setTimeout(() => {
        setErro('');
        setMensagem('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [erro, mensagem]);

  return (
    <div className={styles.transferenciaForm}>
      <div className={styles.header}>
        <span>Transferências - &nbsp; &nbsp; Empresa ⇾ Conta</span>
      </div>

      <div className={styles.inputGroup}>
        <label style={{ backgroundColor: 'rgba(122, 122, 122, 0.70)' }}>Moeda</label>
        <div className={styles.moedaSelect}>
          <select value={moedaSelecionada.symbol} onChange={handleMoedaChange}>
            {moedas.map((moeda) => (
              <option key={moeda.symbol} value={moeda.symbol}>
                {moeda.name}
              </option>
            ))}
          </select>
          <input
            style={{ height: '33px' }}
            type="text"
            value={quantidade}
            onChange={handleQuantidadeChange}
            placeholder="0.00000"
          />
          <span>{moedaSelecionada.symbol}</span>
          <img src={moedaSelecionada.img} alt={moedaSelecionada.name} className={styles.moedaIcon} />
        </div>
        <div className={styles.available}>
          Disponível na Empresa {empresaSelecionada}: {saldos.empresas[empresaSelecionada][moedaSelecionada.symbol].toLocaleString('pt-BR')} {moedaSelecionada.symbol}
        </div>
      </div>

      <div className={styles.inputGroup}>
        <label>Empresa</label>
        <select value={empresaSelecionada} onChange={(e) => setEmpresaSelecionada(e.target.value)}>
          {empresas.map((empresa) => (
            <option key={empresa} value={empresa}>
              {empresa}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.inputGroup}>
        <label>Conta</label>
        <select value={contaSelecionada} onChange={(e) => setContaSelecionada(e.target.value)}>
          {contas.map((conta) => (
            <option key={conta} value={conta}>
              {conta}
            </option>
          ))}
        </select>
      </div>

      {erro && <div className={styles.erro}>{erro}</div>}
      {mensagem && <div className={styles.sucesso}>{mensagem}</div>}

      <button className={styles.transferirButton} onClick={handleTransferir}>
        Transferir
      </button>
    </div>
  );
};

export default Transferencia;
