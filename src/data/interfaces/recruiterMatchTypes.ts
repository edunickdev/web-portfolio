// Types for the Recruiter Match AI Compatibility Analyzer

export interface RadarAxis {
  label: string;
  key: string;
  score: number; // 0-100
  description: string;
}

export type GapStatus = "green" | "yellow" | "red";

export interface GapItem {
  status: GapStatus;
  requirement: string;
  evidence: string;
  suggestion?: string;
}

export interface MatchAnalysis {
  overallScore: number; // 0-100
  radarAxes: RadarAxis[];
  gaps: GapItem[];
  hiringManagerSummary: string;
  relevantProjects: {
    projectName: string;
    relevance: string;
  }[];
  recommendation: string;
}

export interface RecruiterMatchState {
  isModalOpen: boolean;
  jobDescription: string;
  analysis: MatchAnalysis | null;
  isLoading: boolean;
  error: string | null;
}

export interface RecruiterMatchActions {
  openModal: () => void;
  closeModal: () => void;
  setJobDescription: (jd: string) => void;
  analyzeMatch: () => Promise<void>;
  reset: () => void;
}
