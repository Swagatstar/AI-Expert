
export interface DiagnosisResult {
  diagnosis: string;
  estimatedCost: string;
  repairTime: string;
  confidence: number;
  recommendations: string[];
}

export interface LeadForm {
  name: string;
  email: string;
  phone: string;
  model: string;
  symptoms: string;
}

export enum ServiceStatus {
  IDLE = 'IDLE',
  DIAGNOSING = 'DIAGNOSING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}
