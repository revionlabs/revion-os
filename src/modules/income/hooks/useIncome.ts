import { useMemo } from 'react';
import type { IncomeEntry } from '../../../lib/types';

const MOCK_INCOME: IncomeEntry[] = [
  {
    id: '1',
    amount: 1200,
    source: 'Client A',
    date: '2025-11-01',
    status: 'paid',
  },
  {
    id: '2',
    amount: 800,
    source: 'Client B',
    date: '2025-11-07',
    status: 'unpaid',
  },
];

export function useIncome() {
  const entries = MOCK_INCOME;

  const monthTotal = useMemo(
    () => entries.reduce((sum, e) => sum + e.amount, 0),
    [entries]
  );

  const unpaidCount = useMemo(
    () => entries.filter((e) => e.status === 'unpaid').length,
    [entries]
  );

  return {
    entries,
    monthTotal,
    unpaidCount,
  };
}
