import { useIncome } from '../modules/income/hooks/useIncome';

export default function IncomePage() {
  const { entries } = useIncome();

  return (
    <div>
      <h1>Income</h1>
      <p style={{ color: '#b9b9c9', fontSize: 14, marginBottom: 16 }}>
        Basic income view. Replace mock data with API integration later.
      </p>

      <div className="card">
        <table style={{ width: '100%', fontSize: 13, borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ textAlign: 'left' }}>
              <th>Source</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((e) => (
              <tr key={e.id}>
                <td>{e.source}</td>
                <td>${e.amount.toLocaleString()}</td>
                <td>{e.date}</td>
                <td>{e.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
