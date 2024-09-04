import React from 'react';
import style from './index.module.scss';
import CardDashboard from '../../molecules/CardDashboard';
import ProfitLossCard from '../../molecules/ProfitLossCard';

const FinancialDashboard = ({ walletTotal }) => { 
  const financialData = [
    { currency: 'BRL ⮀ BTC', value: '361130.16', percentage: 6.2, graphData: [10, 20, 15, 30, 25], color: 'orange' },
    { currency: 'BRL ⮀ ETH', value: '19113.37', percentage: -3.8, graphData: [25, 30, 20, 15, 10], color: 'black' },
    { currency: 'BRL ⮀ DOGE', value: '0.70', percentage: 0.84, graphData: [5, 10, 8, 12, 9], color: 'goldenrod' },
  ];

  return (
    <div className={style.dashboard}>
      <ProfitLossCard 
        currencySymbol="R$" 
        value={`R$ ${walletTotal.toFixed(2)}`}
        profit="+ 7,89%" 
        loss="- 0,32%" 
        neutral="3,78%"
      />
      {financialData.map((data, index) => (
        <CardDashboard
          key={index}
          currency={data.currency}
          value={data.value}
          percentage={data.percentage}
          graphData={data.graphData}
          color={data.color}
        />
      ))}
    </div>
  );
};

export default FinancialDashboard;
