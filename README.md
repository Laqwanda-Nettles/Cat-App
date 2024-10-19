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
