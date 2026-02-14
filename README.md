# COMP 2156 – Student Information System (SPA)

[![CI](https://github.com/masrafiapurba/masrafi-apurba/actions/workflows/ci.yml/badge.svg)](https://github.com/masrafiapurba/masrafi-apurba/actions/workflows/ci.yml)

| Field | Details |
|-------|---------|
| **Student Name** | Masrafi Apurba |
| **Student ID** | 101468860 |
| **Course** | COMP 2156 – DevOps for System Administration |
| **Lab** | Lab 05 – Hosting Single Page Apps with GitHub Pages |

---

## Live Demo

**https://masrafiapurba.github.io/masrafi-apurba/**

---

## Project Overview

This is a **React-based Single Page Application (SPA)** built as part of Lab 05 for COMP 2156. The application is a Student Information System that allows users to add and view student records. It demonstrates:

- Building and deploying a React SPA using **GitHub Pages**
- Setting up a **CI/CD pipeline** with **GitHub Actions**
- Managing project dependencies with **npm**
- Working with **Git branching** strategies (feature branch → main)

---

## Tech Stack

- **React** 18.2.0
- **Node.js** / **npm**
- **GitHub Actions** (CI/CD)
- **GitHub Pages** (Hosting)

---

## How to Run Locally

```bash
# Clone the repository
git clone https://github.com/masrafiapurba/masrafi-apurba.git
cd masrafi-apurba

# Install dependencies
npm install

# Start the development server
npm start
```

The app will be available at `http://localhost:3000/masrafi-apurba/`

---

## How to Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder with bundling, minification, and compression.

---

## CI/CD Pipeline

This project uses **GitHub Actions** to automatically:

1. Install dependencies (`npm ci`)
2. Build the production bundle (`npm run build`)
3. Deploy to **GitHub Pages**

The workflow is defined in `.github/workflows/ci.yml` and runs on every push to the `main` branch.

---

## Project Structure

```
├── .github/workflows/ci.yml   # GitHub Actions CI/CD workflow
├── public/                     # Static assets (index.html, icons, manifest)
├── src/
│   ├── App.js                  # Main application component
│   ├── components/
│   │   ├── StudentCard.js      # Individual student display card
│   │   ├── StudentForm.js      # Form to add new students
│   │   └── StudentList.js      # List of all students
│   ├── index.js                # React entry point
│   └── App.css                 # Application styles
├── package.json                # Dependencies and scripts
└── README.md
```
