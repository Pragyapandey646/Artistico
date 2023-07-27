# Artistico
Artistico is a website developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). It leverages the power of the DALL-E API to generate images from text and utilizes Cloudinary to store and share those images with the public.


## Features
- Image Generation: Utilizes the DALL-E API to generate images from text input.
- Cloud Storage: Images are stored using Cloudinary, a cloud-based media management platform.
- Public Sharing: Enables users to share generated images with the public.

## Technologies Used
- MERN Stack:
  - MongoDB: A NoSQL database for storing data.
  - Express.js: A backend framework for building APIs.
  - React.js: A JavaScript library for building user interfaces.
  - Node.js: A JavaScript runtime environment for server-side development.
- DALL-E API: An AI-powered API that generates images from textual descriptions.
- Cloudinary: A cloud-based media management platform for storing and sharing images.

## Installation
1. Clone the repository.
2. Install the required dependencies by running the following command:
   ```
   npm install
   ```
3. Configure the MongoDB connection in the `.env` file.
4. Sign up for the DALL-E API and obtain an API key.
5. Sign up for Cloudinary and obtain your cloudinary URL and API key.
6. Update the configuration files with the respective API keys.
7. Start the development server:
   ```
   npm start
   ```
8. Open your web browser and visit `http://localhost:3000` to access the website.

## Usage
1. Visit the homepage of the website.
2. Enter a textual description of the image you want to generate.
3. Click the "Generate" button.
4. Wait for the DALL-E API to process your request and generate the image.
5. The generated image will be displayed on the page.
6. Click the "Share with Community" button to upload the image to Community Showcase.
7. Copy the public URL and share it with others.
