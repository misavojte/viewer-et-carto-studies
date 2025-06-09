# Eye-tracking Studies on Interactive Geovisualisations - Data Viewer

An interactive web application that accompanies the scoping review *"Scoping Review of Eye-Tracking Studies on Usability of Interactive Geovisualisations"*. This tool provides an accessible overview of 87 peer-reviewed studies included in the review.

## What it does

This application presents an interactive table where users can:
- **Explore** 87 studies with detailed metadata including methods, participants, and findings
- **Filter and sort** studies by various criteria (year, relevance ratings, methodology, etc.)
- **Search** through study characteristics to find relevant research
- **View** expert-assigned relevance ratings across four dimensions:
  - Usability evaluation
  - Interactivity  
  - Geovisualisation
  - Eye-tracking

The goal is to help researchers, designers, and practitioners explore the current state of empirical evidence in this interdisciplinary domain.

## Data Source

The application processes data from `input/table_studies.xlsx` - a structured dataset of the reviewed studies. A data generation script converts this Excel file into TypeScript data for the web application.

## Development

Install dependencies:
```bash
npm install
```

Generate the data from the Excel file:
```bash
npm run generate-data
```

Start the development server:
```bash
npm run dev
```

## Building for Production

```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Technical Stack

- **SvelteKit** - Web application framework
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Styling and responsive design
- **Vite** - Build tool and development server
- **xlsx** - Excel file processing for data generation
