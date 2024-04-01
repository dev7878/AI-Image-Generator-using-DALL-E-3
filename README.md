# AI Image Generator using DALL-E 3

This project is a full-stack application that integrates the OpenAI DALL-E 3 model to generate images based on user prompts. It uses React for the frontend, Express.js for the backend, and MongoDB for data storage.

## Features

- Generate images using OpenAI's DALL-E 3 model based on user input prompts.
- View a gallery of previously generated images.
- Lightbox feature to view images in full size.
- Responsive design for a seamless experience across different devices.

## Technologies

- React
- Express.js
- MongoDB
- OpenAI API
- Cloudinary
- React Query
- Axios

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- MongoDB
- Cloudinary account

### Installation

1. Clone the repository

   ```sh
   git clone https://github.com/dev7878/ai-image-generator-dalle3.git
   cd ai-image-generator-dalle3
   ```

2. Install NPM packages for the backend

   ```sh
   cd backend
   npm install
   ```

3. Install NPM packages for the frontend

   ```sh
   cd ../frontend
   npm install
   ```

4. Set up your environment variables
   - Create a `.env` file in the backend directory.
   - Add the following variables:
     ```
     MONGODB_URI=your_mongodb_connection_string
     CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
     CLOUDINARY_API_KEY=your_cloudinary_api_key
     CLOUDINARY_API_SECRET=your_cloudinary_api_secret
     OPENAI_API_KEY=your_openai_api_key
     ```

### Running the application

1. Start the backend server

   ```sh
   cd backend
   npm start
   ```

2. Start the React development server

   ```sh
   cd frontend
   npm start
   ```

3. Open `http://localhost:3000` in your browser to view the application.

## Usage

- Enter a prompt in the input field on the home page and click "Generate Image" to create a new image.
- Browse the gallery to view all generated images.
- Click on an image in the gallery to view it in full size.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
