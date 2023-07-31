## System Design Template for the Project

### 1. Overview

**Project Name:** Financial Management System

**Description:** The Financial Management System is a web application that allows users to efficiently manage their personal finances. It offers features for recording and analyzing expenses, monitoring investments, setting financial goals, and visualizing graphs to track financial performance over time.

### 2. Functional Requirements

1. **User Authentication**
   - The system should allow users to register and log in with their credentials.
   - Users should have the option to change their password.

2. **Homepage with Monthly Evolution Charts**
   - The homepage should display five monthly evolution charts, including: Monthly Income, Debt, Invested Amount, Goals, and Reserves.
   - The charts should be interactive and display updated data.

3. **Monthly Expenses Registration**
   - The system should provide a simple way for users to register their monthly expenses.
   - Expenses should be categorized as Non-Essential, Essential, or Investments.

4. **Screen with 3 Tables**
   - The screen should contain three tables: Investments, Non-Essential Expenses, and Essential Expenses.
   - Each table should have fields for Description, Expected Amount, and Paid Amount.

5. **Viewing Previous Months**
   - Users should be able to view information from previous months.
   - It is allowed to register information for succeeding months, but only for the next month.

### 3. System Architecture

**Programming Languages:**
- Frontend: React
- Backend: Spring Boot
- DevOps: Docker, AWS (using RDS for the database), Pipelines, Terraform

**Database:**
- Relational Database (using SQL)

**Integrations/APIs:**
- Frontend-Backend Integration via RESTful APIs.

**Version Control:**
- Using Git for code version control.

**Third-Party Services:**
- Utilizing Adobe's color palette to ensure a consistent appearance.
- Utilizing Figma for design and prototyping of the interface.

### 4. Scope of Work per Team Member

**Marcelo Távora**
- PO (Product Owner): Responsible for defining and prioritizing project requirements.
- Backend: Development of backend functionalities using Spring Boot.
- Frontend: Collaboration in developing the interface using React.

**Caio Moretti**
- SCRUM Master: Responsible for facilitating meetings and ensuring agile practices.
- DevOps: Configuration of the deployment environment in the cloud, creating pipelines, and using Docker for containerization of dependencies.
- QA: Development of automated tests in Python.

**Gabriel Quinderé**
- Backend: Collaboration in developing backend functionalities using Spring Boot.
- DevOps: Configuration of the deployment environment in the cloud, creating pipelines, and using Docker for containerization of dependencies.
- DB Eng: Creation, configuration, and maintenance of the relational database (SQL and RDS).

**Aguiar**
- Backend: Collaboration in developing backend functionalities using Spring Boot.
- DB Eng: Creation, configuration, and maintenance of the relational database (SQL and RDS).
- Data Analyst: Assisting in creating charts using SQL and Python.

**Guilherme**
- QA: Development of automated tests in Python.
- Data Analyst: Assisting in creating charts using SQL and Python.

### 5. Interface Design

The interface design will be based on the prototype created in Figma, following Adobe's color palette. The Frontend developers will use the provided design to implement the application screens.

### 6. Version Control and Repositories

- The code version control will be done with Git.
- Repositories will be hosted on GitHub:
  - [https://github.com/CR3WDev/ascf](https://github.com/CR3WDev/ascf)

### 7. Final Remarks

This is an initial template for the Financial Management System project based on the provided requirements. The development will follow agile practices, with deliveries in Sprints. The focus will be on the initial MVP, prioritizing essential features for the first version of the system. Over time, the project may evolve to add new features and improvements based on user feedback and business needs.
