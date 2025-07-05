# Personal Finance Visualizer

This is a full-stack web application designed to help you track and visualize your personal finances. It allows you to add, view, and manage transactions, and provides interactive charts to give you insights into your spending habits.

## Features

- **Add & View Transactions**: Easily log new transactions with a description, amount, category, and date.
- **Interactive Dashboard**: Get a quick overview of your total spending and transaction count.
- **Category-wise Spending**: A pie chart that visualizes your spending distribution across different categories.
- **Monthly Expense Chart**: A bar chart that visualizes your total expenses for each month.
- **Transaction Management**: View all your transactions in a list and delete them as needed.

## Project Structure

The project is organized into a monorepo-like structure with three main parts:

- **`/` (Root)**: The main React frontend application, created with Create React App.
- **`/api`**: A serverless backend designed for production deployment on platforms like Vercel. It contains a version of the Express server that is optimized for a serverless environment.
- **`/server`**: The local development backend. This is a standard Node.js & Express server used for running the application on your local machine.

This structure allows for a clear separation between local development and production environments, making the deployment process smoother.

## Technologies Used

### Frontend
- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Chart.js & react-chartjs-2**: For creating beautiful and interactive charts.
- **Axios**: A promise-based HTTP client for making requests to the backend.

### Backend
- **Node.js**: A JavaScript runtime environment.
- **Express**: A minimalist web framework for Node.js.
- **MongoDB**: A NoSQL database for storing transaction data.
- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB.
- **Vercel**: For deployment of the frontend and serverless backend.

## Live Demo

[Link to the deployed application]

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- **Node.js and npm**: Make sure you have Node.js and npm installed. You can download them from [nodejs.org](https://nodejs.org/).
- **MongoDB**: You will need a MongoDB database. You can use a local installation or a cloud service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone <repository-url>
    cd finance-visualizer
    ```

2.  **Install frontend dependencies:**
    From the root directory, install the npm packages for the React app.
    ```sh
    npm install
    ```

3.  **Install backend dependencies:**
    Navigate to the `server` directory and install its npm packages.
    ```sh
    cd server
    npm install
    ```

4.  **Configure Environment Variables:**
    In the `server` directory, create a file named `.env` and add your MongoDB connection string.
    ```
    ATLAS_URI=YOUR_MONGODB_CONNECTION_STRING
    ```

## Running the Application Locally

1.  **Start the backend server:**
    In the `/server` directory, run the following command:
    ```sh
    npm start
    ```
    The server will start on `http://localhost:5000`.

2.  **Start the frontend development server:**
    In the root `finance-visualizer` directory, run the following command:
    ```sh
    npm start
    ```
    The React application will open in your browser at `http://localhost:3000`. The `proxy` setting in `package.json` will automatically forward API requests to your local backend.

## Deployment

This application is configured for easy deployment on **Vercel**.

1.  **Push to GitHub:** Ensure your project is pushed to a GitHub repository.
2.  **Import Project on Vercel:** Log in to your Vercel account and import the GitHub repository.
3.  **Configure Project:** Vercel should automatically detect that you are using Create React App and apply the correct settings. The `vercel.json` file in the repository will handle the backend routing.
4.  **Add Environment Variables:** In the Vercel project settings, add your `ATLAS_URI` environment variable. This is crucial for the deployed application to connect to your database.
5.  **Deploy:** Click the "Deploy" button. Vercel will build the frontend, deploy the serverless function from the `/api` directory, and your application will be live.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.
