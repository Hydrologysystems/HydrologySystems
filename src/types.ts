/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface SystemAdvantage {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ComparisonItem {
  title: string;
  metric: string;
  description: string;
}

export interface ComparisonData {
  risk: {
    title: string;
    items: ComparisonItem[];
  };
  advantage: {
    title: string;
    items: ComparisonItem[];
  };
}

export interface ProcessStep {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  input: string;
  output: string;
  details: string[];
}

export interface ApplicationIndustry {
  id: string;
  title: string;
  description: string;
  details: string;
  imageAlt: string;
}

export interface RoiInputs {
  annualVolume: number; // gallons
  averageCost: number; // USD per gallon
  currentCausticConcentration: string;
  currentFlowRate: string;
}

export interface RoiOutputs {
  currentOpex: number;
  estimatedSavings: number;
  hydrologyOpex: number;
  paybackMonths: number;
  co2OffsetTons: number;
}
