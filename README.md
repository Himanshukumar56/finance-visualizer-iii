# Personal Finance Visualizer

This is a simple web application designed to help you track your personal finances. It allows you to add, view, and delete transactions, and it provides a visual representation of your monthly expenses through a bar chart.

## Features

- **Add Transactions**: Easily log new transactions with a description, amount, and date.
- **View Transactions**: See a list of all your logged transactions.
- **Delete Transactions**: Remove transactions you no longer need.
- **Monthly Expense Chart**: A bar chart that visualizes your total expenses for each month.
- **Date Restriction**: Prevents users from entering transactions for future dates.

## Technologies Used

### Frontend

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Recharts**: A composable charting library built on React components.
- **Axios**: A promise-based HTTP client for making requests to the backend.

### Backend

- **Node.js**: A JavaScript runtime environment.
- **Express**: A fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB**: A NoSQL database for storing transaction data.
- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js.
- **CORS**: A Node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- **Node.js and npm**: Make sure you have Node.js and npm installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).
- **MongoDB**: You will need a MongoDB database. You can use a local installation or a cloud service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone <repository-url>
    cd finance-visualizer
    ```

2.  **Install backend dependencies:**
    Navigate to the `server` directory and install the required npm packages.
    ```sh
    cd server
    npm install
    ```

3.  **Configure the backend:**
    Open `server/server.js` and replace the `uri` variable with your own MongoDB connection string.
    ```javascript
    const uri = "YOUR_MONGODB_CONNECTION_STRING";
    ```

4.  **Install frontend dependencies:**
    Navigate back to the root `finance-visualizer` directory, then into the main project folder, and install the npm packages.
    ```sh
    cd ..
    npm install
    ```

### Running the Application

1.  **Start the backend server:**
    In the `server` directory, run the following command:
    ```sh
    npm start
    ```
    The server will start on `http://localhost:5000`.

2.  **Start the frontend development server:**
    In the root `finance-visualizer` directory, run the following command:
    ```sh
    npm start
    ```
    The React application will open in your browser at `http://localhost:3000`.
