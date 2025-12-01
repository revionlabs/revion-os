import { useIncome } from '../hooks/useIncome';

export function IncomeSummaryCard() {
  const { monthTotal, unpaidCount } = useIncome();

  return (
    <div className="card">
      <div style={{ fontSize: 12, textTransform: 'uppercase', opacity: 0.7 }}>
        Income This Month
      </div>
      <div style={{ fontSize: 24, fontWeight: 600, marginTop: 4 }}>
        ${monthTotal.toLocaleString()}
      </div>
      <div style={{ marginTop: 8, fontSize: 13, color: '#b9b9c9' }}>
        Unpaid invoices: {unpaidCount}
      </div>
    </div>
  );
}
