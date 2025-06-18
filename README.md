# VideoHub Frontend

**Live Demo:** <mcurl name="VideoHub Live" url="https://videohub-official.netlify.app/"></mcurl>

## Project Description

This project is the frontend application for VideoHub, a comprehensive video-sharing platform. It provides a user-friendly interface for browsing, watching, uploading, and managing videos, as well as interacting with other users through comments, likes, and subscriptions. The application is built with React and leverages modern web technologies to deliver a responsive and engaging user experience.

## Features

- **User Authentication:** Secure user registration, login, and logout functionalities.
- **Video Upload and Management:** Users can upload their own videos, edit video details, and manage their content.
- **Video Playback:** Seamless video streaming with a custom video player.
- **Search Functionality:** Efficient search to find videos by title, description, or tags.
- **User Profiles:** Dedicated profile pages for users to showcase their uploaded videos, liked videos, and channel information.
- **Comments and Likes:** Interact with videos by leaving comments and liking/disliking content.
- **Subscriptions:** Subscribe to channels to stay updated with new content from favorite creators.
- **Watch History:** Keep track of watched videos.
- **Playlists:** Create and manage custom playlists.
- **Responsive Design:** Optimized for various screen sizes, from desktops to mobile devices.

## Technologies Used

- **Frontend:** React.js
- **State Management:** Redux Toolkit
- **Styling:** Tailwind CSS (or similar utility-first CSS framework)
- **Routing:** React Router DOM
- **API Communication:** Axios
- **Build Tool:** Vite

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/shubhmboghara/Frontend-of-VideoHub.git
   cd Frontend-of-VideoHub
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add your API base URL:
   ```
   VITE_API_BASE_URL=YOUR_BACKEND_API_URL
   ```
   (Replace `YOUR_BACKEND_API_URL` with the actual URL of your backend API.)

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   The application will be accessible at `http://localhost:5173` (or another port if 5173 is in use).

## Usage

Once the application is running, you can:

- Register a new account or log in with existing credentials.
- Browse videos on the homepage.
- Use the search bar to find specific videos.
- Click on a video to watch it, leave comments, and like/dislike.
- Navigate to your profile to manage your videos, view watch history, and create playlists.
- Subscribe to channels you enjoy.

## Contributing

Contributions are welcome! Please feel free to fork the repository, create a new branch, and submit a pull request with your improvements.

## License

This project is licensed under the MIT License.