# SnapShop_e-commerce
This is a responsive e-commerce platform built with TypeScript, React, and Tailwind CSS. It features product management, user authentication, and user-specific functionalities such as a wishlist and shopping cart.

Features
Responsive UI for a seamless experience on all devices.
Product display, cart, and wishlist management.
User authentication and protected routes.
Form handling and validation with React Hook Form and Yup.
Built With
React (UI framework)
TypeScript (for type safety)
Tailwind CSS (for responsive styling)
React Hook Form (for form handling)
Yup (for form validation)
React Router (for navigation)
useContext & useReducer (for state management, instead of Redux)
Getting Started
These instructions will help you set up and run the project on your local machine.

Prerequisites
Node.js (>=14.x)
npm or yarn package manager
Vite (bundler, initialized with project)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/your-repository.git
cd your-repository
Install the dependencies:

Using npm:

bash
Copy code
npm install
Or, using yarn:

bash
Copy code
yarn install
Start the Development Server:

Run the following command to start the development server on localhost:3000:

Using npm:

bash
Copy code
npm run dev
Or, using yarn:

bash
Copy code
yarn dev
Building for Production:

To build the app for production:

bash
Copy code
npm run build
Or, using yarn:

bash
Copy code
yarn build
Preview Production Build:

To preview the production build:

bash
Copy code
npm run preview
Or, using yarn:

bash
Copy code
yarn preview
Project Structure
/src - Main source directory for the project
/components - Contains reusable components
/pages - Each route has a corresponding page component
/context - Context and Reducer for global state management
/hooks - Custom hooks used in the project
/utils - Utility functions and types
/types - TypeScript interfaces and types
/assets - Static assets
Important Scripts
npm run dev: Runs the app in development mode
npm run build: Builds the app for production
npm run preview: Previews the production build
Dependencies
react
react-dom
typescript
tailwindcss
react-hook-form
yup
react-router-dom
For a full list of dependencies, see the package.json file.

License
Distributed under the MIT License. See LICENSE for more information.
