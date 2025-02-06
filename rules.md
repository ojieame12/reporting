# Project Rules and Guidelines

## 1. Project Overview
This project is an MVP for a Designer Reporting Tool that aggregates and reports work entries—including manual inputs, meeting attendance, and dummy integration data from services like Jira and Figma. The tool serves two primary user roles:
- **Designers:** Log daily/weekly work activities, review personal progress, and export reports.
- **Administrators:** Monitor overall team performance, manage user accounts, and generate aggregated reports.

The goal is to minimize manual reporting, provide actionable analytics, and facilitate data-driven decisions.

## 2. Repository Structure
Maintain a clear, organized directory structure:
project-root/ ├── src/ │ ├── server.js # Main server file │ ├── routes/ # API endpoint definitions │ │ ├── auth.js # Authentication endpoints │ │ ├── manualEntry.js # CRUD endpoints for manual entries │ │ ├── jira.js # Dummy Jira integration endpoint │ │ ├── figma.js # Dummy Figma integration endpoint │ │ ├── analytics.js # Data aggregation/analytics endpoints │ │ └── export.js # CSV report export endpoint │ ├── models/ # Data models and schema definitions │ │ ├── manualEntry.js # Manual entry data model │ │ └── designer.js # (Optional) Designer data model │ └── db/ │ └── db.js # Lowdb configuration and initialization ├── public/ # Static front-end files (HTML, CSS, JS) │ ├── login.html # Login screen │ ├── dashboard.html # Designer dashboard (analytics, notifications) │ ├── manualEntry.html # Manual work entry form │ ├── adminDashboard.html # Administrator dashboard │ ├── userManagement.html # User management screen for admin │ └── integrationSettings.html # (Optional) Integration configuration screen ├── tests/ # Unit and integration tests ├── package.json # Node.js package manifest and scripts └── rules.md # Project rules and guidelines (this file)


## 3. Coding Conventions
- **Language & Framework:**
  - Use JavaScript (ES6+) on Node.js with Express for backend development.
  - Leverage modern ECMAScript features and asynchronous patterns (async/await).
- **Formatting & Style:**
  - Enforce style rules using ESLint and Prettier. Follow a recognized style guide (e.g., Airbnb).
  - Maintain consistent indentation, spacing, and line breaks.
- **Naming Conventions:**
  - **Variables & Functions:** Use camelCase (e.g., `getManualEntries`).
  - **Files:** Use lowercase with dashes (e.g., `manual-entry.js`).
  - **Constants:** Use UPPER_CASE for fixed configuration values.
- **Documentation & Comments:**
  - Comment functions and complex logic using JSDoc or inline comments.
  - Update comments if code changes.
- **Commit Messages:**
  - Write clear, descriptive messages (e.g., "Module 7: Implemented manual entry CRUD endpoints").
  - Commit frequently to document progress and ease debugging.

## 4. Environment Setup
- **Node.js Version:**
  - Use the current LTS version of Node.js.
- **Dependency Management:**
  - Run `npm install` to install all packages listed in `package.json`.
- **Development Scripts:**
  - Use `npm run dev` for development with auto-reload (using nodemon).
  - Use `npm start` for production.
- **Environment Variables:**
  - Use a `.env` file to manage sensitive data like API keys and tokens.
  - Exclude the `.env` file from version control by listing it in `.gitignore`.
- **Database:**
  - This project uses [lowdb](https://github.com/typicode/lowdb) for a lightweight JSON-based database.
  - Ensure that `db.json` is present in the project root and follows the defined schema.

## 5. Module Integration & Testing
- **Modular Development:**
  - Build the project in small, testable modules (as outlined in the module breakdown).
  - Verify each module’s functionality independently (using Postman, browser testing, or unit tests) before integration.
- **Unit Testing:**
  - Write unit tests for API endpoints, data models, and utility functions using a framework like Jest or Mocha.
  - Ensure tests cover edge cases and error handling.
- **Integration Testing:**
  - Perform end-to-end testing after module integration to simulate full user journeys.
  - Document test cases and expected outcomes.
- **Static File Testing:**
  - Open HTML files in a browser to confirm that forms, charts, and dynamic content work as expected.

## 6. Integration Guidelines
- **Authentication:**
  - Secure sensitive endpoints by validating tokens for each request (except for public endpoints like `/api/health`).
  - Use a dummy authentication mechanism initially, with plans for more secure methods (JWT/SSO) in the future.
- **Data Consistency:**
  - Always use the provided database module to interact with the data store.
  - Follow the defined schema in the models for reading and writing data.
- **Error Handling:**
  - Use try-catch blocks around asynchronous code.
  - Return clear and descriptive error messages with appropriate HTTP status codes.
  - Log errors for debugging purposes.
- **API Conventions:**
  - Follow RESTful principles:
    - **GET:** Retrieve data.
    - **POST:** Create new entries.
    - **PUT/PATCH:** Update existing data.
    - **DELETE:** Remove data.
  - All endpoints should return JSON-formatted responses unless otherwise specified.

## 7. Developer Best Practices
- **Version Control:**
  - Use Git for version control. Commit changes frequently.
  - Use descriptive commit messages and a branching strategy (e.g., feature branches).
- **Code Reviews:**
  - Perform peer reviews on pull requests before merging into the main branch.
  - Ensure adherence to coding conventions and proper documentation.
- **AI Assistance:**
  - Use AI tools (like GitHub Copilot) to generate boilerplate code, but always review and test the output.
- **Continuous Integration:**
  - (Optional) Integrate with CI/CD pipelines (e.g., GitHub Actions) to run automated tests on every push.
- **Data Backup:**
  - Regularly back up the `db.json` file during development, especially in shared environments.

## 8. Continuous Integration/Continuous Deployment (CI/CD) Guidelines
- **CI/CD Setup:**
  - Use platforms like GitHub Actions, Travis CI, or CircleCI to automate testing.
  - Ensure that all tests pass before merging code.
- **Automated Testing:**
  - Run unit and integration tests automatically on each commit.
  - Fail builds when tests do not pass, and require fixes before deployment.
- **Deployment:**
  - Use environment-specific configurations (e.g., for development, staging, and production).
  - Verify deployments with automated smoke tests.

## 9. Documentation & Maintenance Guidelines
- **Documentation:**
  - Maintain and update this `rules.md` file as the project evolves.
  - Document API endpoints, data models, and any architectural decisions.
  - Keep a comprehensive README with project overview, setup instructions, and usage guidelines.
- **Issue Tracking:**
  - Use an issue tracker (e.g., GitHub Issues) to manage bugs and feature requests.
  - Link commits and pull requests to specific issues for traceability.
- **Refactoring:**
  - Regularly review code for clarity and efficiency.
  - Refactor code where necessary and update tests accordingly.

## 10. Miscellaneous Guidelines
- **Collaboration:**
  - Follow agreed-upon coding standards and communication protocols.
  - Use shared tools (e.g., Slack, Microsoft Teams) for internal communication.
- **Questions & Support:**
  - Consult the team lead or project documentation for any uncertainties.
  - Use internal documentation channels for clarifications.
- **Future Enhancements:**
  - Keep the code modular to allow easy addition of new features or integrations.
  - Document future integration points (e.g., additional APIs) for seamless expansion.

---

By adhering to these rules and guidelines, we ensure consistent coding practices, efficient module integration, and robust testing. This document should be considered a living guide—update it as the project evolves to reflect new requirements or improvements in development practices.
