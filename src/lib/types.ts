export type IncomeEntry = {
  id: string;
  amount: number;
  source: string;
  date: string;
  status: 'paid' | 'unpaid';
};

export type CapacityTask = {
  id: string;
  title: string;
  weight: 'light' | 'medium' | 'heavy';
};

export type EnvironmentContext = {
  aqi: number;
  noiseDb: number;
  temperature: number;
};
