# Gaming Esports Operations Suite

Wave:
- Portfolio next-20 completion batch

Source candidates represented:
- `AIGamingEsportsOperationsAssistant`
- `AIGamingEsportsOperationsOperations`
- `AIGamingEsportsOperationsAnalytics`
- `AIGamingEsportsOperationsWorkflow`

This suite is a runnable merged app with one login, one dashboard, one feature-first sidebar, PostgreSQL-backed records/documents/notifications/audit, role behavior, and smoke coverage.

## Local Run

```bash
cd /Users/erolakarsu/projects/merged/gaming-esports-operations-suite
./start.sh
```

Local URL:
- `http://127.0.0.1:5220`

Seeded users:
- `admin@gaming-esports-operations.local / admin123`
- `manager@gaming-esports-operations.local / manager123`
- `analyst@gaming-esports-operations.local / analyst123`

## Validation

```bash
cd /Users/erolakarsu/projects/merged/gaming-esports-operations-suite/frontend
npm run typecheck
SMOKE_BASE_URL=http://127.0.0.1:5220 npm run smoke
```
