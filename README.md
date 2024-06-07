# Front-End Development Interview Project for ViewAI

## Overview

The purpose of this interview project is to assess the candidate's proficiency in front-end development, particularly in areas critical for the role, such as API interaction, data parsing, and UI development.

## Task

Developed a simple application to fetch and display data from the API given below in the form of a table. The table should include the following fields:
- City
- State
- Country
- Postcode
- Number
- Name
- Latitude
- Longitude

### API Endpoint
```
https://randomuser.me/api/?results=20
```

## Submission Guidelines

- Complete the task within the 48-hour window.
- Provide a link to a GitHub repository containing your code.
- Ensure the repository includes a README file with instructions on how to run your application.

## Project Setup

Follow these steps to set up and run the project on your local machine.

### Prerequisites

Ensure you have the following software installed:
- [Next.js](https://nextjs.org/) (LTS version recommended)
- [Git](https://git-scm.com/)

### Cloning the Repository

Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/ayushsgithub/viewai_task.git
```

### Installing Dependencies

Navigate to the project directory and install the required dependencies using npm or yarn:

```bash
cd viewai_task
npm install
```

### Running the Application

Start the application in development mode with the following command:

```bash
npm run dev
```


The application will run on `http://localhost:3000`. Open this URL in your web browser to view the application.

### Building for Production

To build the application for production, use the following command:

```bash
npm run build
```


This will create a `build` directory with the production build of your application.

## Application Structure

Here's a brief overview of the project's structure:

```
viewai_task
│
├── app
│   ├── components
│   ├── utils
│   ├── layout.tsx
│   ├── page.tsx
│   └── ...
│
├── components
│   ├── ui
│   │   └── table.tsx
│   └── ...
│
├── public
├── components.json
├── next.config.ts
├── package.json
├── README.md
└── ...
```

- `public/` - Contains svgs and static assets.
- `app/` - Contains the React components and main application logic.
- `package.json` - Contains the project metadata and dependencies.

![HeroSection](https://github.com/ayushsgithub/viewai_task/blob/main/public/heroSection.png?raw=true)
![TableSection](https://github.com/ayushsgithub/viewai_task/blob/main/public/tableSection.png?raw=true)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
