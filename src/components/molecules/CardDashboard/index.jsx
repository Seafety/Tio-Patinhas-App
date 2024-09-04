import React from 'react';
import style from './index.module.scss'; 
import Graph from '../../atoms/Graph';
import btcIcon from '../../../asset/btcIcon.svg';
import ethIcon from '../../../asset/ethIcon.svg';
import dogeIcon from '../../../asset/dogeIcon.svg';

const icons = {
  BTC: btcIcon,
  ETH: ethIcon,
  DOGE: dogeIcon,
};

const CardDashboard = ({ currency, value, percentage, graphData, color }) => {
  const [baseCurrency, quoteCurrency] = currency.split('⮀');

  return (
    <div className={style.card}>
      <div className={style.iconWrapper}>
        <img src={icons[quoteCurrency.trim()]} alt={`${quoteCurrency} icon`} className={style.icon} />
      </div>
      <div className={style.header}>
        <span className={style.currency}>{currency}</span>
        <span className={style.percentage} style={{ color: percentage > 0 ? '#00C287' : '#E72D04' }}>
          {percentage > 0 ? `+${percentage}%` : `${percentage}%`}
        </span>
      </div>
      <div className={style.value}>{value}</div>
      <div className={style.graph}>
        <Graph data={graphData} color={color} />
      </div>
    </div>
  );
};

export default CardDashboard;
