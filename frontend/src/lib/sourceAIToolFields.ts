export type SourceAIToolField = {
  name: string;
  label: string;
  type: string;
  defaultValue: string;
  placeholder: string;
  options: string[];
  required?: boolean;
  source: string;
};

export const sourceAIToolFieldsByToolId: Record<string, SourceAIToolField[]> = {
  "esports-performance-deep-workflows-copilot": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve the Esports Performance Deep Workflows workflow and produce a decision-ready output.",
      "placeholder": "Describe the review goal, business context, or decision needed",
      "options": [],
      "required": true,
      "source": "AIEsportsPerformanceAnalyzer"
    },
    {
      "name": "source_context",
      "label": "Source Context",
      "type": "textarea",
      "defaultValue": "Paste notes, records, documents, transcript text, metrics, or case details for Esports Performance Deep Workflows.",
      "placeholder": "Paste the source context to analyze",
      "options": [],
      "required": true,
      "source": "AIEsportsPerformanceAnalyzer"
    },
    {
      "name": "workflow_focus",
      "label": "Workflow Focus",
      "type": "select",
      "defaultValue": "Scrim Review",
      "placeholder": "Select the workflow to optimize",
      "options": [
        "Scrim Review",
        "Map Pick/Ban Analysis",
        "Player Wellness Load",
        "Tournament Prep Plan"
      ],
      "required": true,
      "source": "AIEsportsPerformanceAnalyzer"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Professional action plan",
      "placeholder": "Select output format",
      "options": [
        "Professional action plan",
        "Evidence table",
        "Risk review",
        "Checklist",
        "Executive summary"
      ],
      "required": true,
      "source": "AIEsportsPerformanceAnalyzer"
    }
  ],
  "esports-performance-copilot": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve the Esports Performance workflow and produce audit-ready next actions.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AIEsportsPerformanceAnalyzer"
    },
    {
      "name": "source_context",
      "label": "Source Context",
      "type": "textarea",
      "defaultValue": "Paste Esports Performance source details, notes, records, or documents.",
      "placeholder": "Paste source context",
      "options": [],
      "required": true,
      "source": "AIEsportsPerformanceAnalyzer"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output format",
      "options": [
        "Action plan",
        "Executive summary",
        "Evidence table",
        "Checklist"
      ],
      "required": true,
      "source": "AIEsportsPerformanceAnalyzer"
    }
  ]
};
