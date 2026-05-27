export type SourceDashboardAction = {
  id: string;
  label: string;
  description: string;
  href: string;
  sourceProjects: string[];
  examples: string[];
  count: number;
};

export const sourceDashboardActions: SourceDashboardAction[] = [
  {
    "id": "esports-performance",
    "label": "Esports Performance",
    "description": "Open Esports Performance workflows elevated from AIEsportsPerformanceAnalyzer.",
    "href": "/match-analysis",
    "sourceProjects": [
      "AIEsportsPerformanceAnalyzer"
    ],
    "examples": [
      "Match Analysis",
      "Player Performance",
      "Training Plan"
    ],
    "count": 1
  }
];
