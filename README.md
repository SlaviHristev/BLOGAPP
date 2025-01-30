# Blog App

## Overview
This is a full-stack blog application built with React on the client side and Express with MongoDB on the backend. It allows users to create, edit, delete, and view blog posts, leveraging authentication, image uploads, and infinite scrolling.

## Features
- User authentication via Clerk
- Rich text editor for blog posts
- Image upload via ImageKit
- Infinite scrolling for blog feeds
- API communication using Axios
- Real-time data fetching using React Query
- Toast notifications for better user experience
- Time formatting with Timeago.js

## Tech Stack
### Client:
- React (v19.0.0-rc-66855b96-20241106)
- Clerk for authentication (@clerk/clerk-react)
- React Query for data fetching (@tanstack/react-query)
- Axios for API requests
- ImageKit for image uploads (imagekitio-react)
- React Infinite Scroll Component
- React Quill for rich text editing (react-quill-new)
- React Router for navigation (react-router-dom)
- React Toastify for notifications (react-toastify)
- Timeago.js for date formatting

### API:
- Express (v5.0.1)
- Clerk for authentication (@clerk/express)
- Body-parser for handling request payloads
- CORS for cross-origin requests
- ImageKit for image uploads
- Mongoose for MongoDB interactions
- Svix for webhook handling



## Environment Variables
Create a `.env` file in both the `client` and `api` directories and add necessary environment variables such as:
- Clerk API Keys
- MongoDB connection string
- ImageKit public/private keys



## Contributing
Feel free to open an issue or submit a pull request!

## License
MIT License

