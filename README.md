# Insight Board

Insight Board is a lightweight admin dashboard that supports small businesses with data-driven decision-making. It provides key performance indicator (KPI) analytics through graphs and tables, and offers CRUD functionality for managing core entities (i.e. Products and Invoices). Insight Board can process and display analytical results and large dataset tables--over 40,000 mock records--in under a second.

## Features - Example Admin Analytics and Use Cases

- **Dashboard** — Analytics on Sales, Revenue, Profit, Top Products, and Top Locations
- **Products** — Full CRUD workflow, batch product uploads, and view products table.
- **Invoices** — Batch invoice uploads, and view invoices table.
- **Live Deployment** — Hosted on Render and Vercel with continuous integration for fast updates and public access.
- **Redis Caching** — Speeds up analytics queries by caching expensive computations, enabling sub-second response times (currently with 40,000+ mock records).
- **API Documentation with Swagger UI** — Interactive documentation for exploring and testing API endpoints easily during development or integration.
- **Test Coverage** — 90%+ test coverage with over 100+ test suites using Jest and Supertest.
- **Scheduled Analytics Jobs** — Uses cron jobs to refresh KPI data, with a schedule that depends on the stakeholder's need.

## Testing

Insight Board is covered by **100+ automated test suites**, covering core functionalities, entities, and analytics.

- Frameworks: **Jest**, **Supertest**

## Tech Stack

**Client:** React, TypeScript, TailwindCSS
**Server:** Node.js, TypeScript, Express, MongoDB
**Tools:** Vite, Axios, Recharts, Tanstack Query, Jest, Supertest, Redis, BullMQ, Swagger UI, GitHub Actions

## Contact

If you want to get in touch:

- Email: belmonte.amp@gmail.com

## License

This project is licensed under the [MIT License](LICENSE).
