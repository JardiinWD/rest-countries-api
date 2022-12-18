# Rest Countries API

I've created this repo because I wanted to verify my React skills. In this challenge I had to use a lot of React `utilities and library`, like:

- `reactstrap` : For the design I've used it for my `container`, `row` etc. It was much faster than create and install `bootstrap` because all its utilities were created as `components`.
- `react-icons`: It's a React library where I can find free icons and all of them were created as `components` (like `bootstrap`).
- `react-router-dom` : It's a React library where I can build my `web routes` for the site' pages.

## Analysis

I've noticed that the header component repeated itself in every design screen, so I supposed that in this project I needed to use `react-router-dom` and to change the `main content` on every page. So in this case I created this structure inside `src` folder :

- `components` : It's the folder where all my `components` are created that will then be called on the various `pages`.
- `context` : It's the folder where the file for the global state of my application was created.
- `Layout` : It's the folder where the layout file for my application was created. 
- `pages` : It's the folder where the various pages of my application are created.  
- `routes` : It is the folder where my file was created for all the routes in the application. Pages like the `homepage.js` or `countrydetails.js`
- `styles` : That's the folder where I created my utilities file to import into all the stylesheets
- `utils` : It is the folder where I created my utilities `components` or certain functions.
