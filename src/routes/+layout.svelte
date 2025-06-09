<script lang="ts">
	import '../app.css';
	import GlobalTooltip from '../lib/components/GlobalTooltip.svelte';
	import GlobalModal from '../lib/components/GlobalModal.svelte';
	
	let { children } = $props();
</script>

<svelte:head>
	<title>Scoping Review: Eye-tracking Studies on Interactive Geovisualisations | Research Database</title>
	<meta name="description" content="Comprehensive scoping review of eye-tracking studies examining the usability of interactive geovisualisations. Research by Tomáš Vaníček, Michaela Vojtěchovská, and Stanislav Popelka from Palacky University Olomouc." />
	<meta name="keywords" content="eye-tracking, geovisualization, interactive maps, usability, cartography, research, scoping review, eye movement, spatial cognition, Palacky University Olomouc" />
	<meta name="author" content="Tomáš Vaníček, Michaela Vojtěchovská, Stanislav Popelka - Department of Geoinformatics, Palacky University Olomouc, Czechia" />
	<meta name="robots" content="index, follow" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta charset="utf-8" />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Scoping Review: Eye-tracking Studies on Interactive Geovisualisations" />
	<meta property="og:description" content="Comprehensive research database examining eye-tracking studies on the usability of interactive geovisualisations by researchers from Palacky University Olomouc, Department of Geoinformatics." />
	<meta property="og:site_name" content="Eye-tracking Geovisualisation Research - Palacky University Olomouc" />
	<meta property="og:locale" content="en_US" />
	
	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Scoping Review: Eye-tracking Studies on Interactive Geovisualisations" />
	<meta name="twitter:description" content="Research database of eye-tracking studies examining interactive geovisualization usability from Palacky University Olomouc." />
	
	<!-- Academic/Research specific -->
	<meta name="citation_title" content="Scoping Review of Eye-tracking Studies on Usability of Interactive Geovisualisations" />
	<meta name="citation_author" content="Vaníček, Tomáš" />
	<meta name="citation_author" content="Vojtěchovská, Michaela" />
	<meta name="citation_author" content="Popelka, Stanislav" />
	<meta name="citation_institution" content="Department of Geoinformatics, Palacky University Olomouc, Czechia" />
	<meta name="DC.title" content="Scoping Review of Eye-tracking Studies on Usability of Interactive Geovisualisations" />
	<meta name="DC.creator" content="Tomáš Vaníček" />
	<meta name="DC.creator" content="Michaela Vojtěchovská" />
	<meta name="DC.creator" content="Stanislav Popelka" />
	<meta name="DC.subject" content="Eye-tracking, Geovisualisation, Cartography, Usability, Interactive Maps" />
	<meta name="DC.description" content="Comprehensive scoping review examining eye-tracking methodologies in interactive geovisualization research conducted by the Department of Geoinformatics at Palacky University Olomouc" />
	<meta name="DC.type" content="Dataset" />
	<meta name="DC.format" content="text/html" />
	<meta name="DC.language" content="en" />
	<meta name="DC.publisher" content="Department of Geoinformatics, Palacky University Olomouc" />
	
	<!-- Favicons -->
	<link rel="apple-touch-icon" sizes="57x57" href="/favicon-57x57.png">
	<link rel="apple-touch-icon" sizes="60x60" href="/favicon-60x60.png">
	<link rel="apple-touch-icon" sizes="72x72" href="/favicon-72x72.png">
	<link rel="apple-touch-icon" sizes="76x76" href="/favicon-76x76.png">
	<link rel="apple-touch-icon" sizes="114x114" href="/favicon-114x114.png">
	<link rel="apple-touch-icon" sizes="120x120" href="/favicon-120x120.png">
	<link rel="apple-touch-icon" sizes="144x144" href="/favicon-144x144.png">
	<link rel="apple-touch-icon" sizes="152x152" href="/favicon-152x152.png">
	<link rel="apple-touch-icon" sizes="180x180" href="/favicon-180x180.png">
	<link rel="icon" type="image/svg+xml" href="/favicon.svg">
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
	<link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png">
	<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">
	<link rel="icon" type="image/x-icon" href="/favicon.ico">
	<meta name="msapplication-TileColor" content="#ffffff">
	<meta name="msapplication-TileImage" content="/favicon-144x144.png">
	<meta name="msapplication-config" content="/browserconfig.xml">
	<link rel="manifest" href="/manifest.json">
	
	<!-- Additional SEO -->
	<link rel="canonical" href="https://yourdomain.com" />
	<meta name="theme-color" content="#2563eb" />
	
	<!-- Structured Data for Research Dataset -->
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "Dataset",
		"name": "Scoping Review of Eye-tracking Studies on Usability of Interactive Geovisualisations",
		"description": "A comprehensive scoping review examining eye-tracking studies that investigate the usability of interactive geovisualisations and cartographic interfaces. This research database provides systematic analysis of methodologies, findings, and trends in eye-tracking research applied to interactive geographic visualizations.",
		"creator": [
			{
				"@type": "Person",
				"name": "Tomáš Vaníček",
				"affiliation": {
					"@type": "Organization",
					"name": "Department of Geoinformatics, Palacky University Olomouc",
					"address": {
						"@type": "PostalAddress",
						"addressCountry": "Czech Republic",
						"addressLocality": "Olomouc"
					}
				},
				"email": "tomas.vanicek@upol.cz",
				"url": "https://scholar.google.com/citations?user=rjtKDrYAAAAJ"
			},
			{
				"@type": "Person",
				"name": "Michaela Vojtěchovská",
				"affiliation": {
					"@type": "Organization",
					"name": "Department of Geoinformatics, Palacky University Olomouc",
					"address": {
						"@type": "PostalAddress",
						"addressCountry": "Czech Republic",
						"addressLocality": "Olomouc"
					}
				},
				"email": "mail@vojtechovska.com",
				"url": "https://vojtechovska.com",
				"sameAs": [
					"https://scholar.google.com/citations?user=9-3pXmMAAAAJ",
					"https://www.researchgate.net/profile/Michaela-Vojtechovska"
				]
			},
			{
				"@type": "Person",
				"name": "Stanislav Popelka",
				"affiliation": {
					"@type": "Organization",
					"name": "Department of Geoinformatics, Palacky University Olomouc",
					"address": {
						"@type": "PostalAddress",
						"addressCountry": "Czech Republic",
						"addressLocality": "Olomouc"
					}
				},
				"email": "stanislav.popelka@upol.cz",
				"url": "https://www.geoinformatics.upol.cz/lide/stanislav-popelka/",
				"sameAs": [
					"https://scholar.google.de/citations?user=4-OZEvwAAAAJ",
					"https://www.researchgate.net/profile/Stanislav-Popelka",
					"https://eyetracking.upol.cz"
				]
			}
		],
		"publisher": {
			"@type": "Organization",
			"name": "Department of Geoinformatics, Palacky University Olomouc",
			"url": "https://www.geoinformatics.upol.cz",
			"address": {
				"@type": "PostalAddress",
				"streetAddress": "17. listopadu 50",
				"addressLocality": "Olomouc",
				"postalCode": "779 00",
				"addressCountry": "Czech Republic"
			}
		},
		"keywords": [
			"eye-tracking", 
			"geovisualization", 
			"interactive maps", 
			"usability", 
			"cartography", 
			"spatial cognition",
			"human-computer interaction",
			"cognitive cartography",
			"visual perception"
		],
		"license": "https://creativecommons.org/licenses/by/4.0/",
		"datePublished": "2024",
		"inLanguage": "en",
		"about": [
			{
				"@type": "Thing",
				"name": "Geovisualisation Usability Research"
			},
			{
				"@type": "Thing", 
				"name": "Eye-tracking Methodology"
			},
			{
				"@type": "Thing",
				"name": "Interactive Cartography"
			}
		],
		"spatialCoverage": {
			"@type": "Place",
			"name": "Global research scope with focus on interactive geovisualization studies"
		},
		"temporalCoverage": "2005/2025",
		"includedInDataCatalog": {
			"@type": "DataCatalog",
			"name": "Eye-tracking Research Database",
			"publisher": {
				"@type": "Organization",
				"name": "Palacky University Olomouc"
			}
		}
	}
	</script>
</svelte:head>

<div class="m-2 sm:m-4 lg:m-6 box-border">
	{@render children()}
</div>
<GlobalTooltip />
<GlobalModal />
