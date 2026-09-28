# LeadFlow CMS

A performance-focused lead generation website built with a custom WordPress theme, vanilla JavaScript, and a Node.js/TypeScript API, featuring CMS-driven content, CRM-ready lead processing, campaign attribution, automated testing, and CI/CD.

## Overview

LeadFlow CMS is a portfolio project that demonstrates the development and maintenance of a modern marketing website using WordPress, HTML, CSS, JavaScript, Node.js, and TypeScript.

The project combines WordPress content management with a lightweight API layer for lead processing, newsletter subscriptions, and external service integrations.

It was designed to demonstrate practical frontend and website engineering skills including responsive development, WordPress customization, REST API integration, technical SEO, performance optimization, marketing attribution, automated testing, shell scripting, and GitHub Actions.

## Features

- Custom responsive WordPress theme built with HTML, CSS, PHP, and JavaScript
- Dynamic WordPress blog and CMS-managed service content
- WordPress REST API integration through a Node.js/TypeScript API
- Lead generation form with reusable server-side validation
- CRM-ready lead processing architecture
- Newsletter subscription integration architecture
- UTM campaign attribution for lead submissions
- Lightweight analytics event tracking using `dataLayer`
- Technical and on-page SEO implementation
- Responsive and mobile-friendly interface
- API health endpoint and consistent error handling
- Automated API tests with Vitest and Supertest
- Shell scripts for project auditing and frontend performance checks
- Automated build, test, audit, and performance checks with GitHub Actions
## Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript (ES6+)
- PHP
- WordPress

### API
- Node.js
- TypeScript
- Express.js
- WordPress REST API

### Testing
- Vitest
- Supertest

### Development & Automation
- Git
- GitHub
- GitHub Actions
- Bash shell scripting
- npm

### Integrations
- CRM provider abstraction with mock provider
- Newsletter/mail provider abstraction
- WordPress REST API
- Analytics-ready `dataLayer`
## Architecture

```text
Visitor
   |
   v
Custom WordPress Theme
   |
   |-- HTML / CSS / JavaScript
   |-- Lead & Newsletter Forms
   |-- UTM Campaign Tracking
   |-- Analytics Events
   |
   v
Node.js + TypeScript API
   |
   |-- Input Validation
   |-- Error Handling
   |-- Lead Processing
   |-- Newsletter Processing
   |-- Health Endpoint
   |
   +--------------------+
   |                    |
   v                    v
WordPress REST API   External Providers
   |                 (Mock CRM / Mail)
   v
WordPress CMS

### Step 36.4 — Add API endpoints

Continue with:

```markdown
## API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/health` | API health/status check |
| GET | `/api/services` | Retrieve CMS-managed services |
| POST | `/api/leads` | Validate and process lead submissions |
| POST | `/api/newsletter` | Process newsletter subscriptions |

Unknown API routes return a consistent JSON `404` response, while unexpected server errors are handled through centralized Express error middleware.
## Getting Started

### Prerequisites

Make sure the following are installed:

- Node.js 24+
- npm
- Git
- A local WordPress environment
- PHP and MySQL through your WordPress environment

### 1. Clone the Repository

```bash
git clone https://github.com/shubhamkagewad/leadflow-cms.git
cd leadflow-cms
```

### 2. Install API Dependencies

```bash
cd api
npm install
```

### 3. Configure Environment Variables

Create an `.env` file inside the `api` directory using `.env.example` as a reference.

```env
PORT=3000
WORDPRESS_API_URL=http://your-wordpress-site.local/wp-json/wp/v2

CRM_PROVIDER=mock
MAIL_PROVIDER=mock

CRM_API_URL=
CRM_API_KEY=

MAIL_API_URL=
MAIL_API_KEY=
```

Do not commit the `.env` file.

### 4. Set Up WordPress

Copy the LeadFlow theme from:

```text
wordpress/wp-content/themes/leadflow
```

into your local WordPress installation's:

```text
wp-content/themes/
```

Activate **LeadFlow** from:

```text
WordPress Admin → Appearance → Themes
```

Configure the WordPress site and create the required CMS content.

### 5. Start the API

From the `api` directory:

```bash
npm run dev
```

The API will run locally on:

```text
http://localhost:3000
```

### 6. Verify the API

Open:

```text
http://localhost:3000/api/health
```

A successful response should report the API status as `healthy`.
## Development Commands

### API

Run the development server:

```bash
cd api
npm run dev
```

Build the TypeScript API:

```bash
npm run build
```

Run the automated test suite:

```bash
npm run test:run
```

### Project Quality Checks

From the project root:

```bash
npm run audit
```

Run the frontend performance and accessibility checks:

```bash
npm run performance
```
## Testing

The API uses Vitest for automated testing and Supertest for HTTP endpoint testing.

Current test coverage includes:

- Lead processing
- Lead controller behavior
- Required-field validation
- Email validation
- Lead submissions with and without UTM attribution
- Newsletter/mail processing
- API health endpoint

The test suite can be executed with:

`npm run test:run`
## CI/CD

GitHub Actions automatically validates the project on pushes and pull requests to `main`.

The CI workflow performs:

1. Repository checkout
2. Node.js setup
3. Dependency installation
4. TypeScript build
5. Automated tests
6. Project audit
7. Performance and accessibility checks

Workflow configuration:

`.github/workflows/ci.yml`
## SEO & Performance

The project includes practical website optimization work such as:

- Responsive and mobile-friendly layouts
- Semantic HTML structure
- Image alternative text checks
- Viewport configuration
- Frontend asset-size monitoring
- Detection of development `console.log` statements
- Image-format checks
- Technical and on-page SEO implementation
- Performance auditing through a custom Bash script
- Lighthouse-based manual verification

Performance results are measured rather than hardcoded into the project documentation so that scores are not presented as permanent guarantees.
## Key Technical Decisions

### Custom WordPress Theme

A custom theme was used instead of a page builder to demonstrate hands-on HTML, CSS, JavaScript, PHP, responsive development, and WordPress customization.

### Lightweight API Layer

Node.js, Express, and TypeScript provide a small integration layer for lead processing, newsletter subscriptions, CMS data retrieval, validation, and external-provider integration.

### Provider Abstraction

CRM and mail integrations use provider-style abstractions with mock implementations, allowing the project to demonstrate integration architecture without requiring paid third-party services or exposing credentials.

### Environment-Based Configuration

Environment-specific API URLs and integration settings are stored outside the application source using environment variables.

### UTM Attribution

Campaign parameters are captured from the visitor URL and preserved during lead submission to demonstrate marketing attribution workflows.

### Analytics Event Layer

CTA clicks, successful lead submissions, and newsletter subscriptions generate structured `dataLayer` events without sending personal form information to the analytics layer.

### Automated Quality Checks

Vitest, Supertest, Bash scripts, and GitHub Actions provide repeatable checks for application behavior, builds, frontend assets, performance-related issues, and accessibility basics.
## Project Structure

```text
leadflow-cms/
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── api/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── app.ts
│   │   └── server.ts
│   ├── tests/
│   ├── .env.example
│   ├── package.json
│   └── tsconfig.json
│
├── scripts/
│   └── performance-check.sh
│
├── wordpress/
│   └── wp-content/
│       └── themes/
│           └── leadflow/
│               ├── assets/
│               │   ├── css/
│               │   └── js/
│               ├── front-page.php
│               ├── functions.php
│               ├── index.php
│               └── single.php
│
├── package.json
└── README.md
```
## Challenges & Solutions

### WordPress REST API Integration

**Challenge:** CMS-managed service content needed to be available through the Node.js API and dynamically rendered on the frontend.

**Solution:** Exposed the WordPress content through the WordPress REST API, consumed it through a TypeScript service layer, and provided a dedicated `/api/services` endpoint for the frontend.

### Environment-Specific Configuration

**Challenge:** Local WordPress and external integration URLs should not be hardcoded throughout the application.

**Solution:** Moved environment-specific configuration into environment variables and provided `.env.example` for setup documentation.

### Reliable API Validation

**Challenge:** Lead and newsletter endpoints needed to reject incomplete or invalid submissions without duplicating validation logic.

**Solution:** Added reusable validation utilities and consistent JSON error responses.

### Marketing Attribution

**Challenge:** Lead submissions needed to preserve the marketing campaign that brought the visitor to the website.

**Solution:** Captured UTM parameters from the URL and passed them through the frontend and API lead-processing flow.

### Automated Quality Verification

**Challenge:** Builds, tests, and quality checks needed to remain repeatable as the project evolved.

**Solution:** Added automated tests, shell-based project checks, and a GitHub Actions workflow that runs on pushes and pull requests.
## Future Improvements

- Connect the provider abstraction to a production CRM such as HubSpot
- Connect newsletter processing to a production email marketing provider
- Connect the existing `dataLayer` events to a production analytics platform
- Expand automated frontend testing
- Add production deployment configuration
## Author

**Shubham Kagewad**

Web Developer focused on frontend development, WordPress, JavaScript, TypeScript, Node.js, performance optimization, SEO, and API-driven web applications.