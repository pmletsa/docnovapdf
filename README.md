# PowerDocsAI

AI-Powered PDF Tools Platform - A modern document processing solution.

## Project Structure

```
powerdocs/
├── apps/
│   └── web/                    # TanStack Start frontend
│       ├── src/
│       │   ├── routes/         # Page routes
│       │   │   ├── tools/      # PDF tool pages
│       │   │   ├── ai/         # AI feature pages
│       │   │   └── dashboard/  # User dashboard
│       │   └── components/     # Shared UI components
│       └── convex/             # Convex backend
│
├── services/
│   ├── pdf-engine/             # PDF manipulation (merge, split, compress)
│   ├── conversion-engine/      # Format conversion (PDF↔Word, PDF↔JPG)
│   ├── ocr-engine/             # Text extraction (Tesseract OCR)
│   └── ai-engine/              # AI features (summarize, chat, extract)
│
├── packages/
│   ├── types/                  # Shared TypeScript types
│   └── storage/                # S3-compatible storage utilities
│
├── infra/
│   ├── docker/                 # Dockerfiles and compose
│   └── deployment/             # Deployment configs
│
└── scripts/                    # Automation scripts
```

## Tech Stack

- **Frontend**: React, TanStack Router, Tailwind CSS v4
- **Backend**: Convex (serverless)
- **Services**: Python FastAPI workers
- **Storage**: S3-compatible (AWS S3, Cloudflare R2)
- **Queue**: Redis + BullMQ

## Getting Started

### Prerequisites

- Node.js 20+
- Python 3.11+
- Docker (for services)

### Development

1. Install dependencies:
```bash
npm install
```

2. Start the web app:
```bash
npm run dev
```

3. Start Convex backend:
```bash
cd apps/web && npx convex dev
```

### Running Services

```bash
cd infra/docker
docker-compose up -d
```

## MVP Features

### Core PDF Tools
- ✅ Merge PDF
- ✅ Split PDF
- ✅ Compress PDF
- ✅ PDF to Word
- ✅ PDF to JPG
- ✅ OCR PDF

### AI Features
- ✅ Chat with PDF
- ✅ Summarize PDF
- ✅ Extract Data

## Database Schema

15 collections designed for scalability:
- users, files, jobs, jobLogs
- aiRequests, workflows, workflowSteps
- folders, fileTags, fileTagRelations
- apiKeys, apiUsage
- subscriptionPlans, userSubscriptions
- activityLogs

## License

MIT

---

Built by [TelVex](https://telvex.net)
# PowerDocsAI
