# Parish Website of the Church in Pogorzela
This project involves the creation of a modern website for the Catholic Parish of St. Michael the Archangel in Pogorzela. The objective was to design an intuitive, user-friendly, and aesthetically pleasing platform, enabling parishioners to access the latest information, events, and other important content from parish life. Simultaneously, it was crucial to provide priests and the administrator with an extremely simple way to manage the site.

The scope of work included [graphic design in Figma](https://www.figma.com/file/ZoUBSToIXnBMWNxMKfTIxB/Parafia-Pogorzela?type=design&node-id=0%3A1&mode=design&t=L65c6KqYN0lz3uki-1) and full website implementation.

### First Things First
he most important elements are links to two PDF files: parish announcements and mass intentions. Both files are the main reason for parishioners visiting the site.

### Easier Management
The mentioned files are the reason for using Sanity as a CMS. This system allowed me to design an administrative panel in such a way that all repetitive information could be extracted with a single query. Previously, the administrator had to manually transcribe document contents from Microsoft Office to a WordPress site, which then required reformatting. Now, simply uploading the PDF to the appropriate field suffices.

### Reducing Website Maintenance Costs
Before implementing my solution, the parish had to cover the costs of hosting, domain, and SSL. I promised to reduce the costs to about 60 PLN per year, i.e., the cost of the domain alone. I kept my word, optimizing the site to the extent that it could safely use the free plans of Vercel and Sanity, leaving plenty of bandwidth reserve in both services.

### Solution Reliability
WordPress proved to be unintuitive and too complex for administrators. After a few years, the engine was outdated, and the front-end was damaged. It was a burden for the parish, and the parish could not afford the cost of maintaining the site.

In contrast, Astro supports SSG and SSR. No one has direct access to the site's code. Sanity is easy to use and secure. This time, I could guarantee that in 10 years, the site would look and function the same.

## Technologies
- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [GROQ](https://www.sanity.io/docs/groq) - query language & GraphQL alternative

## Services
- [Sanity.io](https://www.sanity.io/) as CMS
- [Vercel](https://vercel.com/) as hosting

## Optimization and Performance
The website has been optimized to minimize data transmission, which is particularly important given the limitations of Vercel's and Sanity's free plans. This optimization was based on analyzing the monthly visit statistics of the site before implementing the new version.

## Design
[Graphic design](https://www.figma.com/file/ZoUBSToIXnBMWNxMKfTIxB/Parafia-Pogorzela?type=design&node-id=0%3A1&mode=design&t=L65c6KqYN0lz3uki-1) was created in Figma, allowing for precise planning of the layout, color scheme, and interactive elements of the site. Every aspect of the design is rooted in the history of the parish and its daily life, to ensure the site looks familiar and engenders trust in visitors.

## Installation and Running
To run the project locally, follow these steps:

```
git clone https://github.com/frontendkris/parafiapogorzela-pl.git
cd parafiapogorzela-pl
npm install
npm run dev
```

The project requires providing environmental variables for integration with Sanity in the `.env` file.

## CMS Usage
Sanity CMS allows for easy content management of the site. Administrators can add, edit, and delete content using a simple user interface. [CMS Documentation](https://www.sanity.io/docs).

## License
This project is available for review and learning purposes. Cloning this repository is only permitted for code review purposes in a local development environment (IDE).

Any other use of the code, including modification, distribution, commercial use, or public sharing, is strictly prohibited without the express written consent of the author.
