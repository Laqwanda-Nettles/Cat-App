# Cat App

## Day 1: Planning

### Objectives

In this project, I analyzed a mockup to identify key components of a webpage and broke down the user interface into reusable React components. I mapped data from a JSON file to the appropriate components, planned the project's structure, and documented it. Finally, I began coding the project by following a structured approach based on the analysis.

### Mockup Wireframe

![alt text](<Screenshot 2024-10-18 215222.png>)

### Components

Based on the provided mockup (`mockup-single-cat.png`), the following components were identified:

1. **Header**
   - Description: A navigation bar or website header that appears at the top of the page.
   - Data Required: None
2. **CatCard**
   - Description: A card that can nest other componets like title, image, description.
   - **Title**
     - Description: Displays the name of the cat.
     - Data Required: name (string) from cat-data.json file.
   - **Image**
     - Description: Displays the cat's image.
     - Data Required: image_link (string/url)
   - **Description**
     - Description: Displays rating like information about the cat.
     - Data Required: Examples - family_friendly, general_health, and grooming (number, object)
3. **Support**
   - Description: A CTA section with a button where you can receive support or Like a Cat.
   - Data Required: none (string, button)

## Day 2: Setup

In this project, I started a Next.js project from the ground up and incorporated Tailwind CSS for styling. Through building a splash page, I practiced using both Next.js and Tailwind, while also learning how to set up and test the workflow effectively. Additionally, I established a habit of regularly testing my work throughout the development process.

### Setting Up Project

1. Create a Next.js Project
   Open terminal and run the following command:

```bash
npx create-next-app@latest
```

NOTE: For Window, you can right-click and select 'Show More Options' directly into your project's folder to open the terminal.

Then choose the following options:

- Name of Project: `my-example-app`
- TypeScript: No
- ESLint: Yes
- Tailwind CSS: Yes
- Use src/ directory: Yes
- Use App Router: No
- Customize import alias: No

2. Navigate into project directory:

```bash
cd my-example-app
```

3. Open VS Code:

```bash
code .
```

4. Start the development server:

```bash
npm run dev
```

Note: You can use the already opened terminal or Open a new terminal in VS Code. 5. Open `http://localhost:3000` in browser.

### Creating A Home Component

1. Remove preloaded code from `src/pages/index.js` file.
2. Create a simple component:

```jsx
export default function Home() {
  return (
    <>
      <h1>Welcome to the Cat App!</h1>
    </>
  );
}
```

3. Test it by visiting `http://localhost:3000`. The website should show 'Welcome to the Cat App!'.
4. Implement Tailwind CSS and explore Tailwind's documentation.

```jsx
export default function Home() {
  return (
    <>
      <h1 className="text-center text-4xl font-semibold text-[#03045e]">
        Welcome to the Cat App!
      </h1>
    </>
  );
}
```

5. Save and confirm changes were applied by visiting `http://localhost:3000`.

## Day 3: Components

This project involves building a Cat App that displays a cat image and additional information about the cat. The application is structured using Next.js and Tailwind CSS for styling. The main objective is to create a single page that fetches mock data from a JSON file and presents it through reusable React components.

### Key Components

#### Home (`src/pages/index.js`)

Sets up the homepage with a `NavBar` and `CatFacts` components, displaying a welcoming message and random cat facts.

#### Navbar.jsx

Defines a navigation bar with links to "Home" and "Cat" pages, and includes a logo SVG component.

#### CatLogoSvg.jsx

Contains the SVG for the logo, rendered within the Navbar. Credit: Iconify.

#### CatFacts.jsx

Displays a random cat fact with a button to fetch another fact using `useState`.

#### Cat (`src/pages/cat/index.js`)

The Cat page displays a "Cat of the Day" using mock data from `cat-data.json` and renders the `CatCard` and `CatDetails` components.

#### CatCard.jsx

Displays the cat's name and image using props passed from the parent.

#### CatDetails.jsx

Shows additional details about the cat (origin, life expectancy, etc.) and uses the `StarRating` component to display ratings for attributes like family-friendliness and health.

#### StarRating.jsx

A simple star rating system that visually represents the rating (1-5) with filled and empty stars.

## Screenshots

### Home

![alt text](<Screenshot 2024-10-18 234800.png>)

### Cat

![alt text](<Screenshot 2024-10-18 235039.png>)  
![alt text](<Screenshot 2024-10-18 235132.png>)

## How To Run Project

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.  
Cat Page: [http://localhost:3000/cat](http://localhost:3000/cat)
