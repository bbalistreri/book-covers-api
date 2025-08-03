# Book Cover Viewer

This project is a simple web application that displays book covers for a predefined list of books. It fetches cover images from the [bookcover-api](https://github.com/w3slley/bookcover-api) and presents them in a clean, responsive grid layout.

## How to View

There are two ways to view this project:

### 1. Local Viewing
1. Clone the repository to your local machine.
2. Open the `index.html` file directly in your web browser (e.g., Chrome, Firefox, Safari).

### 2. GitHub Pages
This repository can be hosted as a live website using GitHub Pages. See the instructions below on how to set this up.

## Project Structure

*   `index.html`: The main HTML file that provides the structure for the web page.
*   `style.css`: The CSS file that contains all the styling rules, including the responsive grid layout.
*   `script.js`: The JavaScript file that handles the core logic. It fetches the book cover data from the API and dynamically populates the page.

## Responsive Design

The application is designed to be responsive and should work well on both desktop and mobile devices.

### Desktop View
On larger screens, the book covers are displayed in a grid format that adjusts to the width of the screen.

### Mobile View
On smaller screens, the grid collapses into a single column, making it easy to scroll through the book covers on a mobile device. This is achieved using a responsive grid layout in the `style.css` file.

## How to Set Up GitHub Pages

To host this project as a live website on GitHub, you need to enable GitHub Pages for your repository. Here are the steps:

1.  **Go to your repository's settings.**
    *   Navigate to the main page of your repository on GitHub.
    *   Click on the "Settings" tab.

2.  **Go to the "Pages" section.**
    *   In the left sidebar, click on "Pages".

3.  **Configure the source.**
    *   Under "Build and deployment", select "Deploy from a branch" as the source.
    *   Choose the branch you want to deploy from (e.g., `main` or `feat/book-cover-viewer`).
    *   For the folder, select `/ (root)`.
    *   Click "Save".

4.  **Access your site.**
    *   GitHub will generate a URL for your new website (e.g., `https://<your-username>.github.io/<repository-name>/`).
    *   It may take a few minutes for the site to be deployed. You can check the status in the "Actions" tab of your repository.

Once the site is live, you can add the URL to your repository's description and "Website" link section for easy access.
