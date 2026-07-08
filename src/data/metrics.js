import { TrendingUp, CheckCircle, Zap, Settings, BarChart2, Target } from 'lucide-react';

// Impact metrics. `value` counts up; `decimals` controls precision;
// `suffix` is one of '', 'plus' ("+"), or 'percent' ("%").
export const metrics = [
  {
    id: 'years',
    icon: TrendingUp,
    value: 4,
    decimals: 0,
    suffix: 'plus',
    label: 'Years of Data Engineering Experience',
  },
  {
    id: 'consistency',
    icon: CheckCircle,
    value: 99.9,
    decimals: 1,
    suffix: 'percent',
    label: 'Data Consistency Delivered at PwC',
  },
  {
    id: 'processing',
    icon: Zap,
    value: 40,
    decimals: 0,
    suffix: 'percent',
    label: 'Reduction in Data Processing Time',
  },
  {
    id: 'manual',
    icon: Settings,
    value: 60,
    decimals: 0,
    suffix: 'percent',
    label: 'Reduction in Manual Pipeline Intervention',
  },
  {
    id: 'apps',
    icon: BarChart2,
    value: 30,
    decimals: 0,
    suffix: '',
    label: 'Applications Assessed at Protiviti',
  },
  {
    id: 'kpis',
    icon: Target,
    value: 200,
    decimals: 0,
    suffix: 'plus',
    label: 'KPIs Defined Across GCC Banking Systems',
  },
];

// The three hero summary cards (a focused subset of the metrics above).
export const heroMetrics = [
  { id: 'h-years', displayText: 'Almost 5', label: 'Years of Data Engineering Experience' },
  { id: 'h-consistency', value: 99.9, decimals: 1, suffix: 'percent', label: 'Data Consistency Delivered at PwC' },
  { id: 'h-processing', value: 40, decimals: 0, suffix: 'percent', label: 'Faster Processing Time Achieved' },
];
