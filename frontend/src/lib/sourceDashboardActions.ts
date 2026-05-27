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
    "id": "esports-performance-deep-workflows",
    "label": "Esports Performance Deep Workflows",
    "description": "Open deeper Esports Performance Deep Workflows workflows elevated from AIEsportsPerformanceAnalyzer.",
    "href": "/scrim-review",
    "sourceProjects": [
      "AIEsportsPerformanceAnalyzer"
    ],
    "examples": [
      "Scrim Review",
      "Map Pick/Ban Analysis",
      "Player Wellness Load",
      "Tournament Prep Plan"
    ],
    "count": 1
  },
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
