[![Last Deploy](https://github.com/Landmark-Analytics/landmark-public-web/actions/workflows/deploy-prod.yml/badge.svg)](https://github.com/Landmark-Analytics/landmark-public-web/actions/workflows/deploy-prod.yml)

# Landmark Analytics Public Website

Live at: http://landmarkanalytics.com

## Branches

- Make sure you are doing active development in the `dev` or other branch in git!
- Any changes made in the `main` branch will be published to the live site, please avoid this!

## VSCode Extensions

When you open this project in VSCode for the first time, be sure to install all of the extensions it recommends when prompted

If you missed the prompt:

- Click the "Extensions" icon on the left side (or select the "View" menu > "Extensions")
- Click the little filter/funnel icon and select "Recommended"
- Install everything that appears under "Workspace Recommendations" - You can click the little cloud icon by this title to install them all

## Development

- This uses [Eleventy](https://www.11ty.dev/) to generate a static website
- Run `npm start` for local development (allows hot reload as files change)
- Run `npm run build` for a production build (generates output once, and compresses HTML & CSS output)
