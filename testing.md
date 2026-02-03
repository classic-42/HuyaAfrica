# Testing Instructions

To access the test site for HuyaAfrica, follow these steps:

## Deployment via Vercel (Recommended)

Since this is a Next.js project, Vercel is the most seamless platform for deployment.

1.  **Sign up/Login to Vercel**: Go to [vercel.com](https://vercel.com) and sign in with your GitHub account.
2.  **Import Project**: 
    - Click **"Add New"** > **"Project"**.
    - Find the `HuyaAfrica` repository in your GitHub account list and click **"Import"**.
3.  **Configure Project**:
    - The Framework Preset should automatically be detected as **Next.js**.
    - Root Directory: `./`
    - Build Command: `npm run build`
    - Output Directory: `.next`
    - Click **"Deploy"**.
4.  **Access Site**: Once the deployment is complete, Vercel will provide a URL (e.g., `huya-africa.vercel.app`) where you can test the live site.

## Local Testing

If you want to test the production build locally:

1.  Open your terminal in the project folder.
2.  Run `npm run build` to create a production-ready build.
3.  Run `npm run start` to start the production server.
4.  Open `http://localhost:3000` in your browser.

## Features to Test
- **Navigation**: Ensure all links in the navbar and footer work correctly.
- **Responsiveness**: Check how the site looks on mobile, tablet, and desktop screens.
- **Forms**: If there are any contact forms, verify they are accessible.
- **Visuals**: Confirm that all images and components are rendering as expected.
