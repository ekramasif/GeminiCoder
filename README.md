# GeminiCoder - App Idea Generator

GeminiCoder is a web application that helps users transform their app ideas into reality by generating HTML and Tailwind CSS code using AI. The application leverages the Google Generative AI model to provide detailed technical specifications based on user input.

## Features

- **AI-Powered Code Generation**: Generate HTML and Tailwind CSS code based on your app idea.

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ekramasif/GeminiCoder.git
   cd GeminiCoder
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Set up your environment variables. Create a `.env` file in the root directory and add your Google Generative AI API key:

   ```plaintext
   REACT_APP_GEMINI_API_KEY=your_api_key_here
   ```

### Obtaining Your Google Generative AI API Key

To use the Google Generative AI model, you need to obtain an API key. Follow these steps:

1. **Create a Google Cloud Project**:
   - Go to the [ai.google.dev](https://ai.google.dev/gemini-api/docs/api-key).
   - Click on the project drop-down and select or create a new project.

2. **Enable the Google Generative AI API**:
   - In the Google Cloud Console, navigate to the **API & Services** dashboard.
   - Click on **Enable APIs and Services**.
   - Search for "Google Generative AI" and enable it for your project.

3. **Create Credentials**:
   - In the API & Services dashboard, click on **Credentials** in the left sidebar.
   - Click on **Create Credentials** and select **API Key**.
   - Your new API key will be generated. Copy this key.

4. **Add the API Key to Your `.env` File**:
   - Open the `.env` file you created in the root directory of your project.
   - Replace `your_api_key_here` with the API key you copied.

### Running the Application

In the project directory, you can run:

#### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


## Acknowledgments

- [Google Generative AI](https://cloud.google.com/generative-ai) for providing the AI model.
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework.
- [React](https://reactjs.org/) for the JavaScript library for building user interfaces.
