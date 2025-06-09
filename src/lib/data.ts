/* Auto-generated from table_studies.xlsx — DO NOT EDIT */
import type { StudyRow } from '$lib/types';

export const data: readonly StudyRow[] = [
  {
    "study": "Alam et al. (2017)",
    "articleTitle": "analysing Eye-Tracking Information in Visualization and Data Space: From Where on the Screen to What on the Screen",
    "year": 2017,
    "doi": "10.1109/TVCG.2016.2535340",
    "relevanceUsability": 3,
    "relevanceInteractivity": 4,
    "relevanceGeovisualisation": 2,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "eye-tracking"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Within-subjects design"
    ],
    "eyeTrackingDevices": [
      "Tobii EyeX (60Hz)"
    ],
    "evaluationSoftware": [
      "Custom object-detection library integrated with D3.js visualizations"
    ],
    "taskTypes": [
      "Structured tasks (e.g., finding commonalities between movies, ranking collaborations) + Semi-structured tasks (e.g., recommending a movie) + Unstructured tasks (e.g., exploring connections between actors and movies)"
    ],
    "numberOfParticipants": [
      "9"
    ],
    "stimuli": [
      "Interactive visualization of IMDB data (PivotPaths visualization)"
    ],
    "stimulusDevices": [
      "Computer with a 17” monitor"
    ],
    "findings": [
      "The proposed predictive gaze-to-object mapping algorithm was more accurate than traditional AOI-based methods.",
      "Viewing biases (e.g., preference for highlighted or connected items) significantly influenced gaze patterns.",
      "The approach enabled real-time, highly granular analysis of eye-tracking data in interactive visualizations.",
      "The methodology facilitated novel insights into user interactions with dynamic data visualizations."
    ]
  },
  {
    "study": "Almahmoud et al. (2017)",
    "articleTitle": "Visual Exploration Patterns in Information Visualizations: Insights from Eye Tracking",
    "year": 2017,
    "doi": "10.1007/978-3-319-58562-8_27",
    "relevanceUsability": 5,
    "relevanceInteractivity": 4,
    "relevanceGeovisualisation": 1,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Eye-tracking combined with retrospective think-aloud (RTA) protocol"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Within-subjects design"
    ],
    "eyeTrackingDevices": [
      "Tobii X120 (120Hz)"
    ],
    "evaluationSoftware": [
      "Tobii Studio V 3.4"
    ],
    "taskTypes": [
      "Informational tasks (e.g., answering specific questions by finding information in visualizations) + Navigational tasks (e.g., exploring a webpage from the visualization platform)"
    ],
    "numberOfParticipants": [
      "23"
    ],
    "stimuli": [
      "Treemap and Stacked Graph visualizations from the Observatory of Economic Complexity by MIT"
    ],
    "stimulusDevices": [
      "Computer with a 23” monitor (1920 x 1080 resolution)"
    ],
    "findings": [
      "The study proposed a framework of eye-tracking metrics for evaluating information visualizations, linking human gaze behavior with design factors.",
      "Visual exploration patterns differed significantly between treemap and stacked graph visualizations.",
      "Eye-tracking metrics such as mean fixation duration and gaze heat maps revealed cognitive processing differences during information search and comparison tasks.",
      "Mean fixation duration was sensitive to cognitive load, indicating the mental effort required to process information.",
      "Animated gaze heat maps showed distinct orientation and convergence phases during visual exploration.",
      "The proposed framework can be used by designers and analysts to map eye-tracking metrics to usability and user experience evaluations for interactive information visualizations."
    ]
  },
  {
    "study": "Anagnostopoulos et al. (2017)",
    "articleTitle": "Gaze-Informed location-based services",
    "year": 2017,
    "doi": "10.1080/13658816.2017.1334896",
    "relevanceUsability": 3,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Eye-tracking integrated with computer vision techniques for real-time gaze-to-object mapping in outdoor environments"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Proof-of-concept experiment and performance evaluation (testing different head movement speeds, weather conditions, and gaze mapping accuracy)"
    ],
    "eyeTrackingDevices": [
      "SMI Eye Tracking Glasses v.1.84 (30Hz)"
    ],
    "evaluationSoftware": [
      "Custom implementation using OpenCV for feature extraction and matching"
    ],
    "taskTypes": [
      "Exploratory tasks (e.g., freely exploring city panoramas) + Directed tasks (e.g., fixating on specific buildings for a given time)"
    ],
    "numberOfParticipants": [
      "5"
    ],
    "stimuli": [
      "City panoramas from three different vantage points in Zurich"
    ],
    "stimulusDevices": [
      "Head-mounted eye tracker with a forward-facing camera"
    ],
    "findings": [
      "Introduced Gaze-Informed Location-Based Services (GAIN-LBS), enabling real-time adaptation of location-based services based on the user's gaze direction.",
      "Demonstrated the feasibility of GAIN-LBS for tourist assistance by accurately identifying objects (e.g., buildings) in city panoramas.",
      "Achieved high recall rates (>99%) for correctly mapped gazes with minimal buffering.",
      "Performance was robust across different head movement speeds and weather conditions using ORB and CenSurE-BRIEF feature extractors.",
      "The system provides a qualitative way to analyse user gaze behaviour in outdoor environments, opening new possibilities for GeoHCI applications."
    ]
  },
  {
    "study": "Bartling et al. (2019)",
    "articleTitle": "A multi-national human–computer interaction evaluation of the public participatory GIS GeoCitizen",
    "year": 2019,
    "doi": "10.1553/GISCIENCE2019_01_S19",
    "relevanceUsability": 5,
    "relevanceInteractivity": 4,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 4,
    "mainMethods": [
      "Eye-tracking (for Austrian participants) combined with a qualitative survey and observational analysis",
      "Usability metrics evaluated: effectiveness (error rate), efficiency (time on task), and satisfaction (qualitative feedback)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Between-subjects design"
    ],
    "eyeTrackingDevices": [
      "Not specified"
    ],
    "evaluationSoftware": [
      "Not specified"
    ],
    "taskTypes": [
      "General interaction tasks (e.g., entering the application, changing profile configuration) + Map interaction tasks (e.g., changing the basemap, finding a POI, leaving a comment, adding a new POI)"
    ],
    "numberOfParticipants": [
      "73"
    ],
    "stimuli": [
      "GeoCitizen application"
    ],
    "stimulusDevices": [
      "Smartphone (stationary on a desk during the experiment)"
    ],
    "findings": [
      "Significant usability issues were found, particularly among participants with low IT-literacy, due to unfamiliarity with functionally complex applications and interactive maps.",
      "Usability problems varied by region, with Ugandan participants experiencing more difficulties compared to Colombian and Austrian participants.",
      "Eye-tracking data showed that ambiguous button icons and poorly placed search bars led to reduced search efficiency and increased task completion times.",
      "Participants with higher IT-literacy and younger age groups performed better, highlighting the influence of digital experience on usability outcomes.",
      "The study suggested redesigning ambiguous button icons and improving the placement of interactive elements to enhance usability.",
      "Adaptive interfaces were recommended as a solution to address the diverse needs of users from different cultural and digital literacy backgrounds."
    ]
  },
  {
    "study": "Bartling et al. (2021)",
    "articleTitle": "Evaluating PPGIS Usability in a Multi-National Field Study Combining Qualitative Surveys and Eye-Tracking",
    "year": 2021,
    "doi": "10.1080/00087041.2020.1842143",
    "relevanceUsability": 5,
    "relevanceInteractivity": 4,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 4,
    "mainMethods": [
      "Eye-tracking (for Austrian participants) combined with a qualitative survey, observational analysis, and think-aloud protocol",
      "Usability metrics evaluated: effectiveness (error rate), efficiency (time on task), and satisfaction (qualitative feedback)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Between-subjects design"
    ],
    "eyeTrackingDevices": [
      "Dikablis Professional Eye-Tracker (accuracy: 0.1°–0.3°)"
    ],
    "evaluationSoftware": [
      "D-Lab 3 (for processing eye-tracking data)"
    ],
    "taskTypes": [
      "General interaction tasks (e.g., entering the application, changing profile configuration) + Map interaction tasks (e.g., changing the basemap, finding a POI, leaving a comment, adding a new POI)"
    ],
    "numberOfParticipants": [
      "73"
    ],
    "stimuli": [
      "GeoCitizen application"
    ],
    "stimulusDevices": [
      "Smartphone (Samsung Galaxy A3, stationary on a desk during the experiment)"
    ],
    "findings": [
      "Usability issues were strongly influenced by digital literacy and cultural background, with participants from Uganda and Colombia experiencing more difficulties than those from Austria.",
      "The study highlighted significant usability challenges related to interactive maps, with many participants (especially from Uganda) unfamiliar with map-based interfaces.",
      "Eye-tracking data revealed that participants struggled with ambiguous button icons and complex map interactions, leading to increased fixation counts and longer task completion times.",
      "High IT-literate participants (particularly younger users) performed better, suggesting a strong link between digital experience and usability outcomes.",
      "Participants with low-medium IT literacy expressed a desire to learn how to use map interfaces, despite initial difficulties, highlighting the need for guided or adaptive interfaces.",
      "An adaptation gradient was proposed to customize the interface based on user context (e.g., age, IT-literacy, motivation to learn), with axes for GIS features, interactivity, and guidance.",
      "Adaptive interfaces were recommended to address usability challenges and to enhance user experience by adjusting to the users' digital literacy and interaction experience."
    ]
  },
  {
    "study": "Bekele (2019)",
    "articleTitle": "Walkable Mixed Reality Map as interaction interface for Virtual Heritage",
    "year": 2019,
    "doi": "10.1016/j.daach.2019.e00127",
    "relevanceUsability": 3,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 4,
    "relevanceEyeTracking": 1,
    "mainMethods": [
      "User Interaction Analysis (based on user engagement with the Walkable Mixed Reality Map)",
      "Observational analysis and qualitative feedback (to evaluate user experience and interaction)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Proof-of-concept implementation and evaluation with user observations"
    ],
    "eyeTrackingDevices": [
      "Not applicable"
    ],
    "evaluationSoftware": [
      "Not specified"
    ],
    "taskTypes": [
      "Exploratory tasks (e.g., navigating the virtual map, interacting with 3D models and multimedia content) + Contextual interaction tasks (e.g., engaging with cultural content linked to historical geographic locations)"
    ],
    "numberOfParticipants": [
      "Not specified"
    ],
    "stimuli": [
      "Walkable Mixed Reality Map (Room-scale and walkable virtual maps projected on the floor)",
      "Cultural and historical 3D models (e.g., artefacts, multimedia content)"
    ],
    "stimulusDevices": [
      "Microsoft HoloLens 1"
    ],
    "findings": [
      "The Walkable Mixed Reality Map enhanced user engagement and interaction in virtual heritage settings, enabling immersive and contextual cultural learning.",
      "Users were able to navigate virtual maps projected on the floor and interact with 3D models and multimedia content using gesture, gaze, and voice commands.",
      "The study identified the importance of spatial awareness and contextual relationship in Mixed Reality applications, enabling users to establish connections between physical surroundings and virtual cultural content.",
      "The use of room-scale and world-scale experiences provided flexibility in interaction, allowing users to explore virtual maps and cultural artefacts dynamically.",
      "The Walkable Mixed Reality Map contributed to enhancing visiting experiences at museums and heritage sites by enabling digital manipulation of cultural artefacts, which are otherwise inaccessible for physical interaction.",
      "Identified challenges included performance degradation due to occlusion and the need for efficient spatial mapping and tracking to optimize user experience in dynamic environments.",
      "The study suggested the potential application of the Walkable Mixed Reality Map in both indoor and outdoor heritage settings, supporting interactive cultural learning and engagement."
    ]
  },
  {
    "study": "Bertel et al. (2017)",
    "articleTitle": "Spatial knowledge acquired from pedestrian urban navigation systems",
    "year": 2017,
    "doi": "10.1145/3098279.3098543",
    "relevanceUsability": 4,
    "relevanceInteractivity": 4,
    "relevanceGeovisualisation": 3,
    "relevanceEyeTracking": 3,
    "mainMethods": [
      "Eye-tracking (to analyse gaze distribution and visual attention)",
      "User experience evaluation (using UEQ - User Experience Questionnaire)",
      "Spatial knowledge tests (e.g., pointing tasks, photo recognition, and sequence ordering)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Within-subjects design"
    ],
    "eyeTrackingDevices": [
      "SMI Glasses 2.0 (mobile eye tracker with sun filter shields)"
    ],
    "evaluationSoftware": [
      "Not specified"
    ],
    "taskTypes": [
      "Navigation tasks (e.g., navigating through urban routes using either visual or tactile navigation systems)",
      "Spatial knowledge tasks (e.g., pointing tasks, photo recognition, sequence ordering)",
      "Secondary tasks (e.g., searching for letters along the route to increase cognitive load and distractions)"
    ],
    "numberOfParticipants": [
      "28"
    ],
    "stimuli": [
      "Visual navigation system: TomTom GO (continual map access with pedestrian mode)",
      "Tactile navigation system: Shoe me the Way (tactile navigation via vibrators in shoes)"
    ],
    "stimulusDevices": [
      "Smartphone (for TomTom GO navigation)",
      "Shoe-based tactile interface (for Shoe me the Way navigation)"
    ],
    "findings": [
      "Route knowledge acquisition was better with the tactile navigation system, while survey knowledge was better with the visual navigation system.",
      "The tactile system resulted in more fixations on streets and side streets, indicating a more route-focused spatial attention.",
      "The visual system resulted in more fixations on environmental features, supporting the acquisition of survey knowledge.",
      "Eye-tracking data showed that the tactile system encouraged more sustained attention on route features, while the visual system encouraged exploration of the surroundings.",
      "Walking times were slightly faster with the visual system.",
      "In terms of user experience:",
      "The tactile system was rated higher on attractiveness, stimulation, and novelty.",
      "The visual system was rated higher on perspicuity and dependability.",
      "User preference: 19 participants preferred the visual system, while 9 preferred the tactile system. However, 21 participants indicated they would use the tactile system outside of the study.",
      "The study suggests a complementary use of visual and tactile systems to combine the strengths of both approaches for enhanced navigation support.",
      "The results provide insights into designing pedestrian navigation systems that balance route and survey knowledge acquisition."
    ]
  },
  {
    "study": "Bianconi et al. (2022)",
    "articleTitle": "IMMERSIVE VISUAL EXPERIENCE FOR WAYFINDING ANALYSIS",
    "year": 2022,
    "doi": "10.5194/isprs-archives-XLVI-2-W1-2022-89-2022",
    "relevanceUsability": 4,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 4,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Eye-tracking (for visual attention analysis and creating three-dimensional heatmaps)",
      "EEG (Electroencephalography) and GSR (Galvanic Skin Response) (for neuro-analysis of emotional and cognitive states)",
      "Immersive Virtual Reality (VR) with interactive scenarios"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Within-subjects design"
    ],
    "eyeTrackingDevices": [
      "Not specified"
    ],
    "evaluationSoftware": [
      "Unity (game engine) for VR environment and data collection",
      "Grasshopper (Rhinoceros plugin) for spatial discretization and data export",
      "Muse2 for EEG data collection",
      "eSense Mindfield for GSR data collection"
    ],
    "taskTypes": [
      "Wayfinding tasks (e.g., navigating through virtual railway station scenarios with varied signage and spatial cues)",
      "Exploratory tasks (e.g., exploring different spatial configurations and interactive elements)",
      "Orientation tasks (e.g., making spatial decisions and finding specific locations)"
    ],
    "numberOfParticipants": [
      "Not specified"
    ],
    "stimuli": [
      "Immersive Virtual Reality scenarios representing different spatial configurations of Fontivegge Railway Station in Perugia"
    ],
    "stimulusDevices": [
      "HTC VIVE (Head-Mounted Display) with 6DOF locomotion and hand controllers"
    ],
    "findings": [
      "The immersive wayfinding system effectively captured visual attention and emotional responses using eye-tracking, EEG, and GSR.",
      "Heatmaps of visual attention showed significant differences across the four scenarios:",
      "Scene 1 (current state) induced disorientation and negative emotional states (e.g., stress and unhappiness).",
      "Scene 2 (with information totems) improved orientation but maintained neutral to negative emotional states.",
      "Scene 3 (with benches) did not affect wayfinding performance but increased positive emotional states (e.g., pleasure and serenity).",
      "Scene 4 (with a tree and biophilic design) showed the highest attraction and positive emotional states (e.g., tranquillity and happiness), suggesting the positive impact of natural elements in wayfinding environments.",
      "The study demonstrated the effectiveness of immersive VR for wayfinding analysis, highlighting the influence of spatial cues and environmental design on user experience and emotional states.",
      "The use of three-dimensional heatmaps provided insights into visual attraction and spatial behaviour, guiding design decisions for improved wayfinding systems.",
      "The findings support the use of biophilic design elements (e.g., trees and natural components) to enhance emotional well-being and wayfinding efficiency.",
      "The study integrated emotional data with visual attention maps, offering a novel approach to cognitive-emotional analysis in wayfinding research."
    ]
  },
  {
    "study": "Blascheck et al. (2016a)",
    "articleTitle": "VA2: A Visual Analytics Approach for // Evaluating Visual Analytics Applications",
    "year": 2016,
    "doi": "10.1109/TVCG.2015.2467871",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 2,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Eye-tracking (to analyse visual attention and gaze patterns)",
      "Interaction Logs (to capture mouse movements, clicks, and keyboard inputs)",
      "Thinking Aloud Protocols (to understand cognitive processes during interaction)",
      "Visual Analytics (VA) approach combining multi-source data (eye movements, interaction logs, and verbal data)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Within-subjects design"
    ],
    "eyeTrackingDevices": [
      "Tobii T60 XL (60Hz, 24-inch screen, 1920×1200 resolution)"
    ],
    "evaluationSoftware": [
      "Custom Visual Analytics Tool (VA2) for synchronizing and analysing eye-tracking, interaction, and verbal data",
      "Tobii Studio for eye-tracking data collection and processing"
    ],
    "taskTypes": [
      "Exploratory tasks (e.g., finding patterns and insights using Visual Analytics tools)",
      "Investigative tasks (e.g., analysing complex data sets for sense-making and hypothesis testing)",
      "Hypothesis-driven tasks (e.g., verifying predefined hypotheses about user interactions)"
    ],
    "numberOfParticipants": [
      "16"
    ],
    "stimuli": [
      "VarifocalReader (a multi-layered text visualization tool for exploring and understanding complex documents)",
      "Word Cloud Explorer (a text analysis tool using word clouds for exploratory data analysis)"
    ],
    "stimulusDevices": [
      "Desktop Computer with a 24-inch monitor and Tobii T60 XL eye-tracker"
    ],
    "findings": [
      "The VA2 system effectively combined eye-tracking, interaction logs, and thinking aloud data for a holistic evaluation of Visual Analytics systems.",
      "The approach facilitated the discovery of eye-interaction-thinking patterns, enabling the analysis of cognitive processes during complex data exploration.",
      "Thinking Aloud data was used to verify hypotheses generated from eye-tracking and interaction logs, enhancing the understanding of user strategies.",
      "The study demonstrated the usefulness of sequence charts, pattern editors, and hierarchical clustering for identifying common visual exploration patterns.",
      "Clustering analysis revealed similar cognitive strategies among participants, providing insights into common sense-making behaviours in Visual Analytics tasks.",
      "The AOI Sequence Charts effectively visualised gaze and interaction sequences, supporting both top-down (hypothesis-driven) and bottom-up (data-driven) analyses.",
      "The approach enabled the detection of problem-solving strategies, revealing that users employed different visual exploration paths to achieve the same analytic goals.",
      "The study showed the effectiveness of pattern search algorithms (e.g., n-grams, fuzzy search, and Levenshtein distance) for detecting and comparing visual exploration patterns.",
      "The findings highlighted the importance of multi-source data integration for evaluating complex, highly interactive systems like Visual Analytics applications.",
      "The study contributed to the methodology of usability evaluation by proposing a visual analytics approach that supports pattern discovery and hypothesis verification."
    ]
  },
  {
    "study": "Blascheck et al. (2016b)",
    "articleTitle": "Triangulating User Behavior Using Eye Movement, Interaction, and Think Aloud Data",
    "year": 2016,
    "doi": "10.1145/2857491.2857523",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 2,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Eye-tracking (to analyse visual attention and cognitive processes)",
      "Interaction Logs (to capture mouse movements, clicks, and user interactions)",
      "Thinking Aloud Protocols (to understand cognitive reasoning and sense-making)",
      "Triangulation of Data (combining eye movements, interaction logs, and verbal data for holistic evaluation)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Within-subjects design"
    ],
    "eyeTrackingDevices": [
      "Tobii T60 XL (60Hz, 24-inch screen, 1920×1200 resolution)"
    ],
    "evaluationSoftware": [
      "Custom Visual Analytics Tool for synchronizing and analysing eye-tracking, interaction, and verbal data",
      "Tobii Studio for eye-tracking data collection and processing",
      "Levenshtein Distance and Needleman-Wunsch Algorithm for comparing scanpaths and temporal sequences"
    ],
    "taskTypes": [
      "Exploratory tasks (e.g., freely exploring interactive visualizations to find patterns and insights)",
      "Investigative tasks (e.g., making sense of complex data sets and testing hypotheses)",
      "Sense-making tasks (e.g., reasoning and decision-making based on visual data exploration)"
    ],
    "numberOfParticipants": [
      "16"
    ],
    "stimuli": [
      "Interactive Visualization Systems (VarifocalReader and other interactive visual analytics tools)"
    ],
    "stimulusDevices": [
      "Desktop Computer with a 24-inch monitor and Tobii T60 XL eye-tracker"
    ],
    "findings": [
      "The study proposed a Triangulation Approach, integrating eye-tracking, interaction logs, and thinking aloud data for holistic usability evaluation.",
      "The approach enabled the discovery of what, how, and why users engaged in tasks, providing a comprehensive view of cognitive processes.",
      "Eye movements were used to determine what users were focusing on, interaction logs revealed how they navigated the system, and thinking aloud data explained why they made specific decisions.",
      "String-based Analysis was used to represent data as sequences of AOI hits and interactions, facilitating the use of Levenshtein Distance and Needleman-Wunsch Algorithm for pattern comparison.",
      "Temporal binning was employed to accurately analyse fixation durations and interaction sequences, supporting temporal analysis.",
      "The study introduced a Radial AOI Timeline and AOI Sequence Chart to visualize and compare eye-tracking, interaction, and think-aloud data.",
      "Hierarchical AOI structures were used to organize AOIs, enabling analysis at multiple levels of granularity.",
      "Dynamic and overlapping AOIs were handled by mapping uncertainty values and temporal alignment.",
      "The approach effectively captured eye-interaction-thinking patterns, providing insights into cognitive strategies and sense-making processes.",
      "The study demonstrated the utility of multi-source data integration for evaluating complex interactive visualization systems, enhancing the understanding of user experience.",
      "The findings highlighted the importance of holistic analysis for evaluating usability and cognitive processes in interactive data exploration."
    ]
  },
  {
    "study": "Bogucka and Jahnke (2018)",
    "articleTitle": "Feasibility of the Space-Time Cube in Temporal Cultural Landscape Visualization",
    "year": 2018,
    "doi": "10.3390/ijgi7060209",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Eye-tracking (to analyse visual attention and user interaction strategies)",
      "Usability Testing (using benchmark tasks, user interviews, and feedback)",
      "Comparative Analysis (comparing space–time cube with slider-based visualizations)",
      "Thinking Aloud Protocols (for understanding user decision-making and reasoning)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Between-subjects design"
    ],
    "eyeTrackingDevices": [
      "Gazepoint Eye-Tracking Systém"
    ],
    "evaluationSoftware": [
      "Gazepoint Analysis (version 4.1.0) for eye-tracking data collection and analysis",
      "Cesium 1.34 (JavaScript library) for interactive geospatial visualization"
    ],
    "taskTypes": [
      "Event-based temporal queries (e.g., “What happened during this period?”)",
      "Quantity change detection (e.g., “How many objects were built?”, “What is the direction of changes?”)",
      "Exploratory tasks (e.g., freely exploring historical landscapes)",
      "Identification tasks (e.g., finding the location of historical objects)"
    ],
    "numberOfParticipants": [
      "21"
    ],
    "stimuli": [
      "Space–Time Cube and Slider-based Visualization representing the historical changes of the Royal Castle in Warsaw, Poland",
      "3D Historical Objects (buildings, defensive walls, gardens, water bodies)"
    ],
    "stimulusDevices": [
      "27-inch PC monitor with Gazepoint Eye-Tracking Systém"
    ],
    "findings": [
      "The Space–Time Cube was found to be more effective for temporal change perception and spatial reasoning, with a 70% overall success rate compared to 50% for the slider-based visualization.",
      "The Space–Time Cube required more time to explore, but provided a better overview of landscape phenomena.",
      "Users found the stacked prisms in the Space–Time Cube helpful for temporal comparisons, allowing them to relate historical objects across different time periods.",
      "Eye-tracking data revealed distinct gaze patterns:",
      "Triangle-shaped patterns for temporal filtering",
      "Vertical gaze patterns for exploring time prisms in the Space–Time Cube",
      "Completion rates were higher for the Space–Time Cube for tasks requiring change detection and identification of historical buildings.",
      "False answers were obtained faster with the Space–Time Cube, suggesting that its complexity led to cognitive overload in some cases.",
      "Participants appreciated the freedom of exploration in the Space–Time Cube, but found the navigation controls less intuitive.",
      "64% of slider-based users preferred the Space–Time Cube, while 60% of Space–Time Cube users preferred the slider-based visualization, indicating a novelty effect and a preference for simpler interfaces.",
      "Users suggested several improvements for the Space–Time Cube, including:",
      "Enhanced time slider design for more intuitive temporal navigation",
      "More contrast between the background map and 3D objects",
      "Detailed info-boxes with historical facts and multimedia content",
      "The study confirmed the effectiveness of the Space–Time Cube for cultural heritage visualizations, highlighting its potential for spatiotemporal storytelling and historical education."
    ]
  },
  {
    "study": "Brady et al. (2018)",
    "articleTitle": "Usability of MyFireWatch for non-expert users measured by eyetracking",
    "year": 2018,
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Eye-tracking (to analyse visual attention, gaze patterns, and usage behaviour)",
      "Usability Testing (using benchmark tasks, user interviews, and feedback)",
      "Comparative Analysis (comparing usage behaviour across different age groups)",
      "Thinking Aloud Protocols (to understand cognitive strategies and decision-making processes)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Between-subjects design"
    ],
    "eyeTrackingDevices": [
      "Tobii T-120 Eye-Tracking Monitor (17-inch LCD screen)"
    ],
    "evaluationSoftware": [
      "Tobii Studio for eye-tracking data collection and processing",
      "Opacity plots and gaze plots for visualising areas of interest and gaze behaviour"
    ],
    "taskTypes": [
      "Familiarisation tasks (e.g., unguided exploration of the MyFireWatch interface)",
      "Search tasks (e.g., locating active fires near Broome, identifying burnt areas near Mt Isa)",
      "Planning tasks (e.g., planning a travel route considering active fires)",
      "Exploratory tasks (e.g., freely exploring the interactive map)"
    ],
    "numberOfParticipants": [
      "16"
    ],
    "stimuli": [
      "MyFireWatch Interactive Map (showing satellite-derived fire hotspots, burnt areas, lightning activity, and vegetation coverage)"
    ],
    "stimulusDevices": [
      "Desktop Computer with a Tobii T-120 Eye-Tracking Monitor (17-inch LCD screen)"
    ],
    "findings": [
      "MyFireWatch was found to be usable by non-expert users across all age groups, with participants able to locate current fires and burnt areas.",
      "Younger users were generally faster at searching and navigating the map, using features like search boxes, panning, and zooming more effectively than older users.",
      "Older users were more likely to rely on geographical knowledge and traditional navigation strategies, often using zoom buttons instead of scroll wheels or double clicks.",
      "Eye-tracking data revealed distinct gaze patterns:",
      "66% of fixation time was spent on the map area, confirming the map’s central role in user interactions.",
      "Current fires, burnt areas, and lightning activity were the most viewed elements.",
      "Menu bars, logos, and zoom buttons received the least attention.",
      "Opacity plots showed that older users tended to fixate more on the centre of the screen, while younger users explored more peripheral areas and menu items.",
      "Completion rates were generally higher for younger users, who completed tasks more efficiently.",
      "Older users took longer to complete tasks, primarily due to unfamiliarity with interactive map conventions (e.g., panning and zooming).",
      "Planning tasks showed that older users adopted a more linear navigation strategy, panning across the map like “driving” across a physical map.",
      "Younger users were more likely to integrate search, zoom, and pan functionalities fluidly but were less likely to verbalise reasoning processes.",
      "The study identified usability issues related to menu visibility and interaction design:",
      "Low visibility of zoom buttons, site information, and search box led to longer task completion times.",
      "Participants expected Google Maps-like navigation but struggled with the zoom levels and hotspot accuracy on MyFireWatch.",
      "Feedback from participants suggested:",
      "Adding explicit labels for navigation tools to improve usability for non-experts",
      "Restricting zoom levels to reduce disorientation when searching for locations",
      "Improving contrast and visibility of interactive elements (e.g., buttons, menus)",
      "The study confirmed that MyFireWatch is an effective tool for enhancing spatial understanding of fire events and has potential for educational purposes related to fire seasonality and frequency.",
      "The findings highlighted the importance of considering older users in the design of interactive geovisualization systems to ensure usability and accessibility."
    ]
  },
  {
    "study": "Brock et al. (2014)",
    "articleTitle": "Interactivity Improves Usability of Geographic Maps for Visually Impaired People",
    "year": 2014,
    "doi": "10.1080/07370024.2014.924412",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 4,
    "relevanceEyeTracking": 1,
    "mainMethods": [
      "Usability Testing (using benchmark tasks and user interviews)",
      "Comparative Analysis (comparing interactive maps with raised-line tactile maps)",
      "Cognitive Testing (assessing spatial learning, memory, and survey knowledge)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Within-subjects design"
    ],
    "eyeTrackingDevices": [
      "Not applicable"
    ],
    "evaluationSoftware": [
      "Not specified"
    ],
    "taskTypes": [
      "Spatial learning tasks (e.g., learning landmarks, routes, and survey knowledge)",
      "Memory tasks (e.g., recalling spatial configurations after a 2-week delay)",
      "Exploratory tasks (e.g., exploring maps to learn spatial relations)"
    ],
    "numberOfParticipants": [
      "24"
    ],
    "stimuli": [
      "Interactive Map (IM) (a multitouch screen with a raised-line overlay and audio output)",
      "Paper Map (PM) (traditional raised-line map with Braille legend)",
      "Two fictional city maps (low-complexity maps with six streets, six landmarks, and one geographic element)"
    ],
    "stimulusDevices": [
      "3M Inc. M2256PW Multitouch Surface with raised-line overlay (for the interactive map)"
    ],
    "findings": [
      "Interactivity significantly improved efficiency:",
      "Learning times were shorter with the Interactive Map compared to the Paper Map, confirming that audio-tactile interaction enhances efficiency.",
      "User Satisfaction was significantly higher for the Interactive Map, with 17 out of 24 participants preferring the IM due to:",
      "Audio output (simpler than Braille)",
      "No need for a legend (all information available through interaction)",
      "Ease of use (more intuitive for non-Braille readers)",
      "Spatial Learning and Memory:",
      "No significant difference in overall spatial learning between the two maps.",
      "Landmark knowledge was superior immediately after exploration but declined significantly after 2 weeks, while survey knowledge was more robust.",
      "Survey knowledge (e.g., spatial configurations) was preserved better over time, highlighting the advantage of IM for cognitive mapping.",
      "Cognitive insights:",
      "Users demonstrated different spatial strategies and cognitive processes when using the Interactive Map.",
      "Survey knowledge improved with the IM, supporting more flexible mental representations.",
      "Landmark knowledge was better immediately after exploration but declined over time, while survey knowledge remained stable.",
      "User Confidence:",
      "Confidence was high immediately after exploration but decreased after 2 weeks, especially for landmark knowledge.",
      "Users were overconfident in their landmark knowledge but underestimated their survey knowledge.",
      "Cognitive Benefits of Interactive Maps:",
      "Interactive Maps enhanced cognitive mapping by supporting the integration of spatial relations and topographic properties.",
      "The IM supported the development of survey-type mental representations, which are more robust over time.",
      "The Interactive Map was particularly beneficial for early blind participants and those with low Braille reading skills.",
      "Implications for Design:",
      "The study suggested that audio-tactile interactivity is more effective for spatial learning and cognitive mapping compared to traditional Braille-based maps.",
      "Interactive Maps can effectively replace raised-line maps for visually impaired users, particularly for survey knowledge acquisition.",
      "IMs are more inclusive, supporting a broader spectrum of users with diverse literacy and sensory abilities.",
      "Recommendations:",
      "Implement multimodal feedback (e.g., audio and tactile) to enhance usability and spatial cognition.",
      "Consider personal characteristics (e.g., age, Braille proficiency, spatial cognition skills) when designing interactive geovisualization tools."
    ]
  },
  {
    "study": "Buddeberg et al. (2017)",
    "articleTitle": "Interactive shearing for terrain visualization: an expert study",
    "year": 2017,
    "doi": "10.1007/s10707-016-0283-9",
    "relevanceUsability": 4,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 1,
    "mainMethods": [
      "Usability Testing (using expert feedback and qualitative assessment)",
      "Comparative Analysis (comparing different configurations of interactive relief shearing)",
      "Expert Survey and Interviews (to assess usability, acceptance, and potential side effects)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Expert study with qualitative feedback and parameter adjustment"
    ],
    "eyeTrackingDevices": [
      "Not applicable"
    ],
    "evaluationSoftware": [
      "Not specified"
    ],
    "taskTypes": [
      "Configuration tasks (e.g., adjusting spring coefficient and friction force to optimise shearing animations)",
      "Perception tasks (e.g., comparing depth perception across different shearing configurations)",
      "Exploratory tasks (e.g., exploring terrain maps with interactive relief shearing)"
    ],
    "numberOfParticipants": [
      "49"
    ],
    "stimuli": [
      "Interactive Terrain Maps (implemented using OpenLayers 3 and WebGL for rendering)",
      "Elastic Terrain Map Prototype (featuring integrated and hybrid shearing animations)"
    ],
    "stimulusDevices": [
      "Desktop Computer (using a web-based interface)"
    ],
    "findings": [
      "Interactive relief shearing effectively enhanced depth perception and terrain interpretation, making it easier for experts to perceive changes in elevation.",
      "Experts preferred brief and subtle animations (higher friction force values) to avoid distractions and improve usability.",
      "The spring coefficient and friction force were identified as crucial parameters influencing the perception of depth and usability:",
      "Higher spring coefficient led to more dynamic oscillations, which were preferred for mountainous terrain.",
      "Higher friction force reduced oscillations and improved control, preferred for subtle elevation changes.",
      "Integrated Shearing (elastic snap-back) was generally preferred over Hybrid Shearing (freezing terrain in a sheared state), especially for larger terrain scales.",
      "Relief shearing was perceived as more effective for large-scale terrain maps and orthophoto maps compared to traditional 2D maps.",
      "Terrain reversal effects (where valleys appeared as ridges) were rarely experienced (20.4% to 32.7% of participants) and were more common with hybrid shearing.",
      "Motion sickness and disorientation were reported by 35.7% of participants, particularly when extreme parameter settings were used.",
      "Usability and acceptance were high, with 93.9% agreeing that interactive relief shearing is a convenient extension to conventional map panning.",
      "Experts suggested subtler oscillations, optional on/off toggle, and parameter presets to enhance usability and adaptability for general users.",
      "Applications and use cases:",
      "Topographic maps and orthophotos: Enhanced depth perception for general terrain interpretation.",
      "Bathymetric maps: Highly effective for visualizing ocean floor topography and deep-sea trenches.",
      "Educational tools: Useful for teaching geography and spatial thinking.",
      "Tourism and outdoor navigation: Potential for interactive maps in recreational contexts.",
      "The study confirmed the technical feasibility of implementing interactive relief shearing in modern web browsers using WebGL and OpenLayers 3."
    ]
  },
  {
    "study": "Burch (2018)",
    "articleTitle": "Visual Analysis of Eye Movement Data with Fixation Distance Plots",
    "year": 2018,
    "doi": "10.1007/978-3-319-59424-8_21",
    "relevanceUsability": 3,
    "relevanceInteractivity": 4,
    "relevanceGeovisualisation": 2,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Eye-tracking (to collect visual attention and eye movement data)",
      "Fixation Distance Plots (a novel visualisation technique for eye movement sequences)",
      "Visual Analytics (interactive exploration of eye movement data)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Exploratory data analysis with interactive visual analytics"
    ],
    "eyeTrackingDevices": [
      "Not specified"
    ],
    "evaluationSoftware": [
      "Custom Visual Analytics Tool for fixation distance plots and interactive exploration"
    ],
    "taskTypes": [
      "Exploratory tasks (e.g., exploring fixation patterns, saccadic movements, and visual attention sequences)",
      "Comparative tasks (e.g., comparing eye movement patterns across participants and stimuli)",
      "Pattern recognition tasks (e.g., identifying fixation clusters, distance patterns, and saccadic strategies)"
    ],
    "numberOfParticipants": [
      "Not specified"
    ],
    "stimuli": [
      "Public Transport Maps (metro maps used in a route-finding experiment)"
    ],
    "stimulusDevices": [
      "Desktop Computer (for interactive visual analytics)"
    ],
    "findings": [
      "Fixation Distance Plots provide an overview of fixation durations, sequences, and saccadic movements in a clutter-free manner.",
      "The technique effectively visualises spatial distances between fixations, supporting the exploration of visual scanning strategies.",
      "Saccadic information is encoded as lines with varying lengths and orientations, revealing eye movement directions and distances.",
      "The study introduced color-coded parallel distance lines to indicate fixation proximities, enabling the identification of fixation clusters.",
      "Interaction techniques such as filtering, clustering, and aggregation support scalable exploration of large eye movement datasets.",
      "Pattern recognition was facilitated through:",
      "Fixation patterns (e.g., fixation durations, temporal gaps, and cluster formations)",
      "Saccade patterns (e.g., directional changes and saccadic lengths)",
      "Distance patterns (e.g., proximity and spatial relationships between fixations)",
      "Participant patterns (e.g., differences in visual strategies among users)",
      "Visual patterns identified in fixation distance plots enabled the comparison of scanning strategies among participants and across stimuli.",
      "The technique was applied to eye movement data from a route-finding experiment on public transport maps, revealing:",
      "Top-down or bottom-up scanning strategies for metro maps",
      "Cross-checking behaviour when validating route choices",
      "Fixation clusters at interchange points and important landmarks",
      "The study demonstrated the effectiveness of visual analytics for exploratory analysis of eye movement data, enabling hypothesis generation and insight detection.",
      "The study highlighted limitations related to scalability and perceptual complexity, suggesting aggregation and filtering as solutions for large datasets.",
      "The findings contributed to the methodology of eye-tracking data visualisation, proposing fixation distance plots as a scalable and clutter-free technique for visual analytics.",
      "The study concluded that fixation distance plots effectively combine temporal, spatial, and saccadic information, supporting comprehensive eye movement analysis."
    ]
  },
  {
    "study": "Burch (2019)",
    "articleTitle": "Interaction Graphs: Visual Analysis of Eye Movement Data from Interactive Stimuli",
    "year": 2019,
    "doi": "10.1145/3317960.3321617",
    "relevanceUsability": 4,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 1,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Eye-tracking (to collect visual attention and interaction data)",
      "Interaction Graphs (a novel visualisation technique for state-transition analysis in interactive stimuli)",
      "Visual Analytics (exploratory analysis of eye movement patterns with graph-based visualisation)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Exploratory data analysis using visual analytics (no traditional experimental design)"
    ],
    "eyeTrackingDevices": [
      "Not specified"
    ],
    "evaluationSoftware": [
      "Custom Visual Analytics Tool for interaction graphs and state-transition analysis",
      "Graph Visualisation Libraries for node-link diagrams and adjacency matrices"
    ],
    "taskTypes": [
      "Exploratory tasks (e.g., exploring state transitions, interaction patterns, and gaze sequences)",
      "Comparative tasks (e.g., comparing navigation patterns across users and stimuli)",
      "Pattern recognition tasks (e.g., identifying common interaction paths and visual attention strategies)"
    ],
    "numberOfParticipants": [
      "Not specified"
    ],
    "stimuli": [
      "Interactive Web Pages (dynamic stimuli with user interactions and state transitions)"
    ],
    "stimulusDevices": [
      "Desktop Computer (for interactive visual analytics)"
    ],
    "findings": [
      "Interaction Graphs provide a novel approach to analysing eye movement data in interactive stimuli, focusing on state transitions and user navigation paths.",
      "The technique models interactive stimuli as state-transition graphs, where:",
      "Nodes represent different states of the web page (e.g., after clicking a link or opening a dropdown menu).",
      "Links represent transitions between states, encoding interaction frequencies and navigation paths.",
      "Eye movement data is integrated into nodes, allowing visual attention analysis for each state of the interactive web page.",
      "The study introduced adjacency matrices and node-link diagrams for visualising state transitions:",
      "Node-link diagrams effectively represent hierarchical flows and interaction sequences.",
      "Adjacency matrices provide a clutter-free overview for complex state-transition graphs.",
      "Graph-based visualisations enabled the identification of common navigation paths, interaction loops, and drop-off points.",
      "Visual patterns identified in interaction graphs facilitated:",
      "Navigation patterns (e.g., frequent transitions between states, loops, and backtracking)",
      "Attention patterns (e.g., gaze duration and fixation clusters on interactive elements)",
      "Interaction efficiency (e.g., shortest paths and direct navigational sequences)",
      "Interaction Graphs revealed differences in navigation strategies:",
      "Some users followed linear navigation paths while others exhibited exploratory behaviour with multiple loops.",
      "Interaction loops were common when users struggled to find information, indicating potential usability issues.",
      "The study demonstrated the effectiveness of interaction graphs for state-transition analysis, enabling:",
      "Hypothesis generation about user navigation behaviour",
      "Identification of usability issues in interactive web pages",
      "Insight detection into user preferences and interaction strategies",
      "The study highlighted limitations related to scalability and perceptual complexity, suggesting:",
      "Adjacency matrices for dense graphs and node-link diagrams for hierarchical flows",
      "Filtering and clustering techniques to reduce visual complexity in large interaction graphs",
      "The findings contributed to the methodology of visual analytics for eye movement data, proposing interaction graphs as a scalable and flexible technique for state-transition analysis.",
      "The study concluded that interaction graphs effectively combine temporal, spatial, and interaction data, supporting comprehensive analysis of eye movement patterns and user navigation paths.",
      "Applications and use cases:",
      "Web usability evaluation: Identifying navigation bottlenecks and usability issues in interactive web pages.",
      "User experience analysis: Understanding user interaction flows and attention allocation across dynamic stimuli.",
      "Information architecture design: Optimising navigation paths and information hierarchy in web interfaces.",
      "The study confirmed the technical feasibility of implementing interaction graphs in real-time web analytics, suggesting potential for dynamic UX evaluation."
    ]
  },
  {
    "study": "Burch et al. (2021)",
    "articleTitle": "The Power of Linked Eye Movement Data Visualizations",
    "year": 2021,
    "doi": "10.1145/3448017.3457377",
    "relevanceUsability": 4,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 3,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Eye-tracking (to collect visual attention and gaze data)",
      "Linked Visualizations (interactive exploration using multiple coordinated views)",
      "Visual Analytics (scalable visualisation techniques for eye movement data)",
      "User Study (to evaluate usability and effectiveness of the tool)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Within-subjects design"
    ],
    "eyeTrackingDevices": [
      "Not specified"
    ],
    "evaluationSoftware": [
      "Web-based Visualization Tool implemented using React and D3.js",
      "Multiple Linked Views: 2D Density Plot, Scanpath Visualization, Bee Swarm, and Scarf Plot"
    ],
    "taskTypes": [
      "Exploratory tasks (e.g., exploring fixation patterns, temporal sequences, and attention clusters)",
      "Comparative tasks (e.g., comparing gaze patterns across participants and stimuli)",
      "Pattern recognition tasks (e.g., identifying temporal and spatial patterns in visual attention)"
    ],
    "numberOfParticipants": [
      "10"
    ],
    "stimuli": [
      "Public Transport Maps (metro maps used in a route-finding experiment)"
    ],
    "stimulusDevices": [
      "Desktop Computer (web-based interactive visualizations)"
    ],
    "findings": [
      "Linked Visualizations provide a powerful approach for exploring eye movement data by combining multiple coordinated views.",
      "The tool supports four interactive visualizations:",
      "2D Density Plot: Shows visual attention clusters with contour lines, avoiding overplotting and occlusion.",
      "Scanpath Visualization: Displays gaze sequences with numbered circles for fixation points and lines for saccades.",
      "Bee Swarm: Animates gaze movements over time, providing a dynamic overview of temporal patterns.",
      "Scarf Plot: Shows gaze transitions between Areas of Interest (AOIs) over time, useful for comparing temporal behaviour.",
      "Interaction Techniques include:",
      "Brushing and Linking: Selecting data in one view highlights corresponding data in all linked views.",
      "Filtering and Clustering: Users can filter by participant, AOI, and temporal intervals.",
      "Multiple Coordinated Views: Users can arrange and synchronise multiple views for comprehensive data exploration.",
      "The tool enables pattern recognition by integrating spatial, temporal, and participant dimensions, supporting:",
      "Fixation patterns (e.g., duration, density, and clustering)",
      "Saccade patterns (e.g., direction, length, and sequence)",
      "Temporal patterns (e.g., order and duration of attention)",
      "Interaction patterns (e.g., navigation and attention shifts)",
      "The study demonstrated the effectiveness of linked visualizations for:",
      "Identifying complex gaze patterns across participants and stimuli",
      "Comparing visual attention strategies between different user groups",
      "Hypothesis generation for visual behaviour and cognitive processes",
      "User Study Findings:",
      "Linked views were found to be highly useful for comparing gaze behaviour across participants and stimuli.",
      "Participants used multiple views simultaneously, indicating the importance of coordinated visualizations.",
      "2D Density Plot and Bee Swarm were the most used and highly rated visualizations.",
      "Scanpath Visualization received mixed feedback due to visual clutter and lack of participant distinction.",
      "Scarf Plot was useful for comparing AOI transitions but was challenging to interpret without context.",
      "Participants appreciated the flexibility and customizability of linked views, allowing them to explore different perspectives.",
      "Applications and use cases:",
      "User experience research: Comparing gaze patterns in usability studies",
      "Educational tools: Teaching visual attention strategies and cognitive processes",
      "Cognitive psychology: Investigating temporal and spatial attention patterns",
      "The study highlighted limitations related to scalability and performance:",
      "Visual clutter in scanpath visualization when showing large datasets",
      "Performance issues with real-time animations in the Bee Swarm view",
      "Scarf Plot required contextual information to be fully interpretable",
      "The findings contributed to the methodology of interactive visual analytics, proposing linked views as a scalable and flexible technique for eye movement data analysis.",
      "The study concluded that linked visualizations effectively combine spatial, temporal, and interaction data, supporting comprehensive analysis of eye movement patterns and visual attention strategies.",
      "The tool was made available as a web-based solution, supporting public and private data sets with options for session sharing and collaboration.",
      "Future work includes:",
      "Adding more advanced visualizations (e.g., 3D scanpaths, dynamic AOI transitions)",
      "Enhancing performance and scalability for larger datasets",
      "Integrating statistical analysis tools for quantitative evaluation",
      "Conducting more comprehensive user studies to evaluate usability and effectiveness"
    ]
  },
  {
    "study": "Çöltekin et al. (2009)",
    "articleTitle": "Evaluating the Effectiveness of Interactive Map Interface Designs: A Case Study Integrating Usability Metrics with Eye-Movement Analysis",
    "year": 2009,
    "doi": "10.1559/152304009787340197",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Eye-tracking (to analyse visual attention, gaze patterns, and cognitive processing)",
      "Usability Testing (using traditional SEE metrics: Satisfaction, Efficiency, and Effectiveness)",
      "Comparative Analysis (comparing two informationally equivalent but differently designed online interactive map interfaces)",
      "Areas of Interest (AOI) Analysis (to identify usability issues linked to interface elements)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Mixed factorial design (between-subjects for interface comparison, within-subjects for map use tasks)"
    ],
    "eyeTrackingDevices": [
      "Tobii X120 (60Hz)"
    ],
    "evaluationSoftware": [
      "Tobii Studio for eye-tracking data collection and processing",
      "Morae usability software for delivering SUS survey and usability metrics"
    ],
    "taskTypes": [
      "Search tasks (e.g., locating specific information on the map)",
      "Comparison tasks (e.g., comparing spatial distributions and thematic data)",
      "Inference tasks (e.g., deriving relationships between map variables)"
    ],
    "numberOfParticipants": [
      "30"
    ],
    "stimuli": [
      "Two interactive online map interfaces:",
      "Natlas (National Atlas of the U.S.A.) using ESRI’s Map Objects and ArcIMS",
      "Carto.net using Scalable Vector Graphics (SVG) and ECMAScript",
      "Both maps displayed thematic information related to Crime and Poverty in the USA (2000)"
    ],
    "stimulusDevices": [
      "Desktop Computer with a 24-inch flat screen (1600×1200 resolution)",
      "Tobii X120 Eye Tracker"
    ],
    "findings": [
      "Carto.net was more efficient (faster task completion times), but Natlas was more effective (higher accuracy):",
      "Carto.net users were faster due to simpler interface design and larger map area.",
      "Natlas users were more accurate because of isolated query results displayed in pop-up windows.",
      "Eye-tracking data revealed micro-level usability issues:",
      "Natlas:",
      "Identify and Redraw Map buttons were difficult to find and use due to poor labeling, small size, and inconsistent placement.",
      "Higher fixation counts and longer fixation durations indicated cognitive load and inefficient search strategies.",
      "Users spent 61% of task time locating the Identify button.",
      "Carto.net:",
      "The mouse roll-over behaviour on the legend-bar was counterintuitive, leading to usability issues.",
      "40% of users struggled with interpreting the legend, affecting accuracy.",
      "80% of users clicked on the map expecting query results but were confused by the hover-triggered display.",
      "Areas of Interest (AOI) Analysis:",
      "Identified usability issues with specific interface elements (e.g., Identify button, Redraw Map button, and legend bar).",
      "Gaze plots and fixation density maps highlighted problem areas and user strategies.",
      "Usability Metrics (SEE):",
      "Satisfaction: Participants preferred Carto.net for ease of use but found Natlas more reliable.",
      "Efficiency: Carto.net users were faster due to intuitive interactions and larger map area.",
      "Effectiveness: Natlas users were more accurate due to clearer query result presentation.",
      "System Usability Scale (SUS) Results:",
      "Carto.net users had a more positive attitude towards the interface.",
      "Natlas users found the interface more complex and felt they needed more technical support.",
      "Qualitative Feedback:",
      "Participants appreciated the interactivity and responsiveness of both maps but had usability complaints.",
      "Carto.net: Users suggested improvements in legend design and mouse roll-over behaviour.",
      "Natlas: Users found the Identify button confusing and suggested better labeling and placement.",
      "The study demonstrated the value of combining eye movement analysis with traditional usability metrics, offering deeper insights into cognitive processes and usability issues.",
      "Recommendations for interface design:",
      "Improve button labeling and placement to enhance discoverability.",
      "Use isolated pop-up windows for query results to improve accuracy.",
      "Redesign legend interactions to be more intuitive and accessible.",
      "The study validated the use of eye-tracking for evaluating interactive map interfaces, highlighting the importance of cognitive processing insights for interface design improvements."
    ]
  },
  {
    "study": "Coltekin et al. (2016)",
    "articleTitle": "GAZE AND FEET AS ADDITIONAL INPUT MODALITIES FOR INTERACTING WITH GEOSPATIAL INTERFACES",
    "year": 2016,
    "doi": "10.5194/isprsannals-III-2-113-2016",
    "relevanceUsability": 4,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Eye-tracking (as an input modality for panning and zooming in geospatial interfaces)",
      "Foot Input (using a Wii Balance Board for continuous and discrete navigation tasks)",
      "Usability Testing (to evaluate efficiency, effectiveness, and user satisfaction)",
      "Comparative Analysis (comparing gaze and foot input with traditional mouse and toolbar interactions)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Within-subjects factorial design"
    ],
    "eyeTrackingDevices": [
      "Tobii Eye Tracker (model not specified)"
    ],
    "evaluationSoftware": [
      "Tobii SDK 2.0 for gaze data processing",
      "Google Earth Plug-in for geographic visualization",
      "Custom Visual Analytics Tool for integrating gaze and foot input"
    ],
    "taskTypes": [
      "Panning tasks (e.g., navigating in four directions using gaze and foot input)",
      "Zooming tasks (e.g., zooming in and out on geospatial maps)",
      "Combined tasks (e.g., simultaneous panning and zooming)"
    ],
    "numberOfParticipants": [
      "16"
    ],
    "stimuli": [
      "Google Earth Geospatial Visualizations (using satellite imagery and 3D terrain)",
      "Two Interaction Concepts:",
      "Surfing Concept (continuous zooming and panning using gaze and weight shift)",
      "Walking Concept (discrete zooming by tapping feet, continuous panning by shifting weight)"
    ],
    "stimulusDevices": [
      "Tobii Eye Tracker",
      "Wii Balance Board (connected via Bluetooth for foot input)",
      "Desktop Computer (with Google Earth Plug-in for geospatial visualization)"
    ],
    "findings": [
      "Gaze and foot input are promising interaction modalities for geospatial visualizations, offering hands-free navigation.",
      "Continuous foot input was more intuitive and efficient than discrete foot input for panning tasks.",
      "The Surfing Concept was faster for zooming, while the Walking Concept was better for panning:",
      "Surfing Concept:",
      "Continuous zooming using gaze point as a focal area was perceived as fast and easy.",
      "Panning was less intuitive, with participants struggling to distinguish panning directions.",
      "Walking Concept:",
      "Tapping feet for zooming was more physically demanding but provided better control.",
      "Panning by weight shift was more intuitive and symmetric for all directions.",
      "Gaze-directed panning was found to be cognitively demanding:",
      "Participants found it difficult to focus on active borders while panning.",
      "Confusion between zooming and panning occurred due to the Midas Touch problem.",
      "Response Times:",
      "Mouse and toolbar interactions were the fastest due to familiarity.",
      "Walking Concept was faster for panning but slower for zooming compared to Surfing Concept.",
      "Gaze input led to slower response times due to cognitive load and learning curve.",
      "User Satisfaction:",
      "Participants found continuous zooming in the Surfing Concept enjoyable but challenging for precise control.",
      "The Walking Concept was rated as more intuitive and consistent for panning.",
      "Mouse input remained the most satisfying due to familiarity and precision.",
      "Learning Curve and Cognitive Load:",
      "Participants showed a learning curve for gaze and foot input, requiring adaptation and training.",
      "Gaze input required conscious control, leading to cognitive overload.",
      "Applications and Use Cases:",
      "GIS applications: Suitable for hands-free navigation and continuous exploration of geospatial data.",
      "Large displays and immersive environments: Effective for interactive exhibits, virtual globes, and 3D geovisualizations.",
      "Recommendations for Design:",
      "Implement implicit gaze input to minimize cognitive load.",
      "Use continuous foot input for smooth panning and exploration.",
      "Avoid explicit gaze input for mode switching to reduce confusion.",
      "Combine gaze input with other modalities (e.g., hand gestures) for enhanced interactivity.",
      "The study validated the potential of gaze and foot input for multimodal geospatial interactions, suggesting that continuous foot input combined with implicit gaze input is a promising approach for future GIS interfaces."
    ]
  },
  {
    "study": "Cybulski and Horbinski (2020)",
    "articleTitle": "User Experience in Using Graphical User Interfaces of Web Maps",
    "year": 2020,
    "doi": "10.3390/ijgi9070412",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Eye-tracking (to analyse visual attention, fixation patterns, and gaze sequences)",
      "Usability Testing (using time to first click, fixation count, and saccadic amplitude as metrics)",
      "Comparative Analysis (comparing two differently designed GUIs: Google Maps-based and OpenStreetMap-based interfaces)",
      "Questionnaires (to collect user feedback on preferences and experiences)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Between-subjects design"
    ],
    "eyeTrackingDevices": [
      "Tobii X2-60 (60 Hz)"
    ],
    "evaluationSoftware": [
      "Tobii Studio 3.4 for eye-tracking data collection and processing",
      "Leaflet.js for implementing web maps and GUI interactions"
    ],
    "taskTypes": [
      "Geolocation tasks (e.g., finding the user’s current location using the geolocation button)",
      "Search tasks (e.g., searching for a city using the search button)",
      "Route finding tasks (e.g., finding a route between two cities using the route button)"
    ],
    "numberOfParticipants": [
      "40"
    ],
    "stimuli": [
      "Web Maps with two different GUIs:",
      "Google Maps-based GUI (with button placement resembling Google Maps)",
      "OpenStreetMap-based GUI (with button placement resembling OpenStreetMap)",
      "Buttons used in GUI:",
      "Geolocation",
      "Search",
      "Route",
      "Change Layers",
      "Zoom In and Zoom Out"
    ],
    "stimulusDevices": [
      "Desktop Computer with 21.5-inch screen (1920×1080 resolution)",
      "Tobii X2-60 Eye Tracker"
    ],
    "findings": [
      "Different GUIs lead to different user experiences, particularly in visual attention and cognitive load:",
      "Participants visually examined all corners of the screen to locate buttons, regardless of GUI design.",
      "Google Maps-based GUI led to more corner explorations due to button placements.",
      "Time to first click (TC):",
      "Participants were generally faster using the OpenStreetMap-based GUI, but differences were not statistically significant.",
      "Google Maps users performed tasks faster when using the Google Maps-based GUI due to familiarity and user habits.",
      "Eye-tracking Analysis:",
      "Heatmaps showed different spatial distribution of fixations:",
      "Google Maps-based GUI: Fixations were distributed across three corners.",
      "OpenStreetMap-based GUI: Fixations were mainly on two corners.",
      "Saccadic Amplitude (SA):",
      "No significant differences between the two GUIs.",
      "Shorter saccades were observed for users who performed more fixations.",
      "Fixation Count (FC) and Attention Allocation:",
      "More fixations on Google Maps-based GUI, indicating higher cognitive load.",
      "Lower fixation counts on OpenStreetMap-based GUI indicated more efficient visual strategies.",
      "User Preferences and Satisfaction:",
      "Participants preferred GUIs they were more familiar with.",
      "Google Maps users showed a preference for the Google Maps-based GUI due to familiarity with button placement.",
      "Impact of GUI Design on UX:",
      "Button placement significantly influenced visual strategies and task completion times.",
      "Grouping buttons with similar functionalities and placing them in fewer screen corners enhanced usability.",
      "Recommendations for GUI Design:",
      "Place buttons with similar functionalities together to reduce cognitive load.",
      "Minimize the number of screen corners used for buttons to streamline visual attention.",
      "Ensure consistency in button placement to leverage user habits and improve usability.",
      "Applications and Use Cases:",
      "Web mapping services: Optimising GUI design for better user experience and usability.",
      "Cartographic interfaces: Improving spatial interactions and visual strategies for multimedia cartography.",
      "The study confirmed the importance of GUI design for interactive web maps, highlighting the impact of button placement on user experience.",
      "User habits and familiarity with specific web maps significantly influenced task efficiency and satisfaction."
    ]
  },
  {
    "study": "De Cock et al. (2020)",
    "articleTitle": "Google Indoor Maps or Google Indoor No Maps? Usability Study of an Adapted Mobile Indoor Wayfinding Aid",
    "year": 2020,
    "doi": "10.1007/978-3-030-50726-8_54",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 4,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Eye-tracking (to measure cognitive load, fixation duration, saccadic amplitude, and visual attention)",
      "Usability Testing (to evaluate the efficiency and effectiveness of adaptive route instructions)",
      "Comparative Analysis (comparing different route instruction types: photo, symbol, and video)",
      "Space Syntax Analysis (to quantify spatial complexity at decision points)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Within-subjects design"
    ],
    "eyeTrackingDevices": [
      "SMI ETG 2.1 Mobile Eye-Tracking Glasses (60 Hz/30 FPS)"
    ],
    "evaluationSoftware": [
      "BeGaze Software for eye-tracking data analysis",
      "Unity for 3D simulations of indoor environments",
      "MQTT Protocol for real-time data transmission between smartphone and UWB positioning systém"
    ],
    "taskTypes": [
      "Wayfinding tasks (e.g., navigating through a smart building using adaptive route instructions)",
      "Decision-making tasks (e.g., choosing the correct route at complex decision points)"
    ],
    "numberOfParticipants": [
      "33"
    ],
    "stimuli": [
      "Adaptive Mobile Wayfinding System (ARC) with three types of route instructions:",
      "Symbols + Text for starting and ending routes",
      "3D Simulations + Text for complex, central decision points",
      "Photos + Text for other decision points",
      "Smart Building Environment (iGent building in Belgium)",
      "12 Decision Points:",
      "3 Level Changes (e.g., stairs, elevator)",
      "4 Turns (e.g., left, right)",
      "2 Start Points (e.g., starting a new route)",
      "3 End Points (e.g., arriving at the destination)"
    ],
    "stimulusDevices": [
      "Smartphone (connected to UWB positioning system for adaptive navigation)",
      "SMI ETG 2.1 Mobile Eye-Tracking Glasses",
      "UWB (Ultra-Wideband) Positioning System for real-time location tracking"
    ],
    "findings": [
      "Adaptive route instructions significantly improved usability and efficiency in indoor wayfinding.",
      "Video instructions were most effective at complex decision points, resulting in:",
      "Lower cognitive load (measured by shorter fixation durations and higher saccadic amplitudes)",
      "More accurate navigation decisions compared to symbols and photos",
      "Symbol instructions imposed the highest cognitive load at complex decision points:",
      "Longer fixation durations and shorter saccadic amplitudes were observed, indicating increased cognitive effort.",
      "Symbols were less effective at convex spaces, where abstracted information was harder to translate to the environment.",
      "Photos with arrows effectively supported wayfinding at simple decision points, reducing cognitive load and improving efficiency.",
      "Space Syntax Analysis confirmed that complex spatial configurations (e.g., convex spaces) correlated with:",
      "Longer fixation durations",
      "Shorter saccadic amplitudes",
      "Higher cognitive load overall",
      "User Preferences and Feedback:",
      "Participants preferred video instructions for complex decision points due to clear, dynamic guidance.",
      "Symbol instructions were rated as least helpful for complex tasks but useful for simple, repetitive decisions.",
      "Photos were generally well-received for straightforward navigation steps.",
      "Applications and Use Cases:",
      "Indoor Navigation Systems: Optimising adaptive route guidance for complex indoor environments.",
      "Smart Buildings and IoT Integration: Leveraging UWB positioning and linked data systems for real-time navigation.",
      "Recommendations for Route Guidance Design:",
      "Use video instructions at complex decision points (e.g., multiple path options or level changes).",
      "Implement symbol instructions only for simple, repetitive tasks (e.g., starting or ending routes).",
      "Combine photos with directional arrows for easy-to-understand navigation at straightforward decision points.",
      "Design adaptive systems that adjust instruction types based on spatial complexity and cognitive load.",
      "The study validated the effectiveness of the Adaptive Route Communication (ARC) system for cognitively supportive wayfinding, highlighting the importance of adaptive guidance in smart indoor environments.",
      "Space Syntax was found to be an effective tool for quantifying spatial complexity and predicting cognitive load during indoor navigation."
    ]
  },
  {
    "study": "De Cock et al. (2022)",
    "articleTitle": "Linking the cognitive load induced by route instruction types and building configuration during indoor route guidance, a usability study in VR",
    "year": 2022,
    "doi": "10.1080/13658816.2022.2032080",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 4,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Eye-tracking (to measure cognitive load, fixation duration, saccadic amplitude, and visual attention)",
      "Usability Testing (to evaluate the efficiency and effectiveness of adaptive route instructions)",
      "Comparative Analysis (comparing different route instruction types: photo, symbol, and 3D-simulation)",
      "Space Syntax Analysis (to quantify spatial complexity at decision points)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Within-subjects design"
    ],
    "eyeTrackingDevices": [
      "HTC Vive Pro Eye with integrated Tobii eye tracker (120 Hz)"
    ],
    "evaluationSoftware": [
      "Unity for VR simulation and data logging",
      "BeGaze Software for eye-tracking data analysis",
      "Isovist.org for space syntax analysis"
    ],
    "taskTypes": [
      "Wayfinding tasks (e.g., navigating through a virtual building using adaptive route instructions)",
      "Decision-making tasks (e.g., choosing the correct route at complex decision points)"
    ],
    "numberOfParticipants": [
      "32"
    ],
    "stimuli": [
      "Adaptive VR Wayfinding System with three types of route instructions:",
      "Symbols + Text for starting and ending routes",
      "3D Simulations + Text for complex, central decision points",
      "Photos + Text for other decision points",
      "Virtual Building Model with ten different routes designed to cover the entire area",
      "Three Decision Point Categories:",
      "Start/End Points (using Symbol and Photo)",
      "Turns (using Photo and 3D-simulation)"
    ],
    "stimulusDevices": [
      "HTC Vive Pro Eye (with integrated Tobii eye tracker for gaze and position tracking)",
      "VR Environment in Unity (for adaptive wayfinding simulation and data collection)"
    ],
    "findings": [
      "Adaptive route instructions significantly improved usability and efficiency in VR-based indoor wayfinding.",
      "3D Simulations were the most effective at complex decision points, resulting in:",
      "Lower cognitive load (measured by shorter fixation durations and higher saccadic amplitudes)",
      "More accurate navigation decisions compared to symbols and photos",
      "Symbol instructions imposed the highest cognitive load at complex decision points:",
      "Longer fixation durations and shorter saccadic amplitudes were observed, indicating increased cognitive effort.",
      "Symbols were less effective at convex spaces, where abstracted information was harder to translate to the environment.",
      "Photos with arrows effectively supported wayfinding at simple decision points, reducing cognitive load and improving efficiency.",
      "Space Syntax Analysis confirmed that complex spatial configurations (e.g., convex spaces) correlated with:",
      "Longer fixation durations",
      "Shorter saccadic amplitudes",
      "Higher cognitive load overall",
      "User Preferences and Feedback:",
      "Participants preferred 3D simulations for complex decision points due to clear, dynamic guidance.",
      "Symbol instructions were rated as least helpful for complex tasks but useful for simple, repetitive decisions.",
      "Photos were generally well-received for straightforward navigation steps.",
      "Applications and Use Cases:",
      "Indoor Navigation Systems: Optimising adaptive route guidance for complex indoor environments.",
      "Smart Buildings and VR Integration: Leveraging VR simulation and linked data systems for real-time navigation.",
      "Recommendations for Route Guidance Design:",
      "Use 3D simulations at complex decision points (e.g., multiple path options or turns).",
      "Implement symbol instructions only for simple, repetitive tasks (e.g., starting or ending routes).",
      "Combine photos with directional arrows for easy-to-understand navigation at straightforward decision points.",
      "Design adaptive systems that adjust instruction types based on spatial complexity and cognitive load.",
      "The study validated the effectiveness of the adaptive route guidance system for cognitively supportive wayfinding, highlighting the importance of adaptive guidance in VR-based smart indoor environments.",
      "Space Syntax was found to be an effective tool for quantifying spatial complexity and predicting cognitive load during indoor navigation."
    ]
  },
  {
    "study": "de Mendonça and Delazari (2012)",
    "articleTitle": "Remote Evaluation of the Execution of Spatial Analysis Tasks with Interactive Web Maps: A Functional and Quantitative Approach",
    "year": 2012,
    "doi": "10.1179/1743277411Y.0000000020",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 1,
    "mainMethods": [
      "Usability Testing (to evaluate the effectiveness and acceptability of spatial analysis tools)",
      "Remote Evaluation (to simulate natural behaviour of users in real-world internet environments)",
      "Quantitative Statistical Analysis (to compare control and experimental groups)",
      "Comparative Analysis (comparing the use of spatial analysis tools versus traditional map navigation)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Between-subjects design"
    ],
    "eyeTrackingDevices": [
      "Not applicable"
    ],
    "evaluationSoftware": [
      "OpenLayers for interactive web map implementation",
      "PostgreSQL/PostGIS for spatial database management",
      "Geoserver for map server functionalities",
      "R Software for statistical analysis"
    ],
    "taskTypes": [
      "Pathfinding tasks (e.g., choosing the shortest path using a distance measurement tool)",
      "Spatial overlay tasks (e.g., identifying classrooms by overlaying layers)",
      "Feature identification tasks (e.g., finding specific features by querying attributes)"
    ],
    "numberOfParticipants": [
      "302"
    ],
    "stimuli": [
      "Interactive Web Map Interface with two versions:",
      "Control Version: Basic navigation tools (zoom, pan, layer visibility)",
      "Experimental Version: Additional spatial analysis tools:",
      "Distance Measurement Tool (Task 1)",
      "Intersection Tool (Task 2)",
      "Attribute Query Tool (Task 3)",
      "Study Area: Centro Politécnico campus at Paraná Federal University (UFPR)"
    ],
    "stimulusDevices": [
      "Desktop Computer with OpenLayers Web Interface (remote, browser-based interaction)"
    ],
    "findings": [
      "Spatial analysis tools significantly improved task performance:",
      "Distance Measurement Tool: Increased accuracy in choosing the shortest path (94% correct answers with tool vs 81% without)",
      "Intersection Tool: Significantly improved performance in identifying classrooms (90% with tool vs 49% without)",
      "Attribute Query Tool: Enhanced accuracy in feature identification (93% with tool vs 68% without)",
      "Tool usage was influenced by user experience:",
      "Experience with maps was a significant factor for using the Distance Measurement Tool",
      "Higher educational levels influenced usage of the Intersection Tool",
      "No significant factors were found for the Attribute Query Tool",
      "User Preferences and Feedback:",
      "Users found the spatial analysis tools helpful but struggled with discoverability and usability.",
      "Button placement and labeling were identified as usability issues, affecting tool usage.",
      "Applications and Use Cases:",
      "Interactive Web Maps: Optimising spatial analysis tool integration for web mapping applications.",
      "Educational Interfaces: Enhancing geospatial learning tools for students and non-expert users.",
      "Recommendations for Interface Design:",
      "Improve button visibility and labeling to enhance tool discoverability.",
      "Group similar tools and minimize the number of screen corners used for tools to streamline user interactions.",
      "Provide contextual help and on-demand tooltips for spatial analysis tools.",
      "The study demonstrated that remote evaluation is an effective method for usability testing of web map interfaces, simulating real-world user behaviour.",
      "User behaviour and spatial cognition were influenced more by tool usability than by spatial reasoning abilities.",
      "The study validated the effectiveness of spatial analysis tools in interactive web maps, highlighting their potential for functional geovisualization and spatial decision support."
    ]
  },
  {
    "study": "de Mendonça and Delazari (2014)",
    "articleTitle": "Testing Subjective Preference and Map Use Performance: Use of Web Maps for Decision Making in the Public Health Sector",
    "year": 2014,
    "doi": "10.3138/carto.49.2.1455",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 1,
    "mainMethods": [
      "Usability Testing (to evaluate map usability and user performance)",
      "Subjective Preference Analysis (to examine user preferences for different map types)",
      "Comparative Analysis (comparing three different mapping techniques: choropleth maps, range-graded maps, and dot maps)",
      "Decision-Making Simulation (users made decisions for public health resource allocation based on map analysis)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Between-subjects design"
    ],
    "eyeTrackingDevices": [
      "Not applicable"
    ],
    "evaluationSoftware": [
      "HTML/PHP Interface for data collection",
      "Manual Statistical Analysis using Kruskal-Wallis ANOVA and Fisher’s LSD test"
    ],
    "taskTypes": [
      "Direct acquisition tasks (e.g., identifying differences among map symbols and spatial distributions)",
      "Reasoning tasks (e.g., making decisions for public health investment based on spatial patterns)"
    ],
    "numberOfParticipants": [
      "269"
    ],
    "stimuli": [
      "Three Web Map Sets:",
      "Choropleth Maps (using colour value as a visual variable)",
      "Range-Graded Maps (using size as a visual variable)",
      "Dot Maps (using location as a visual variable)",
      "Animated Maps (for temporal comparison, displaying data for the years 1995, 2000, and 2009)",
      "Public Health Indicators:",
      "Infant Mortality",
      "Malnourished Recently Born Children",
      "Malnourished Pregnant Women",
      "Spatial Units: Parishes of Maringá city in Brazil"
    ],
    "stimulusDevices": [
      "Desktop Computer with Web Browser interface"
    ],
    "findings": [
      "Choropleth Maps were the most preferred (73% of users), followed by Range-Graded Maps (15%) and Dot Maps (11%).",
      "There was no correlation between subjective preference and performance:",
      "Users who preferred Choropleth Maps did not perform better using them.",
      "Dot Maps resulted in the best performance for reasoning tasks, even though they were the least preferred.",
      "Performance Analysis:",
      "Direct Acquisition Tasks:",
      "High success rates for all map types, with no significant differences among them.",
      "Reasoning Tasks:",
      "Dot Maps had the highest success rate, followed by Range-Graded Maps and Choropleth Maps.",
      "Choropleth Maps were the least effective for complex reasoning tasks.",
      "Animated Maps were rarely used by participants, who found them confusing and difficult to control.",
      "User Feedback and Preferences:",
      "Users reported frustration with complex interfaces and difficulty navigating multi-window setups.",
      "Color progression was highly appreciated in Choropleth Maps but did not translate to better performance.",
      "Cognitive and Design Insights:",
      "Complex reasoning tasks require cognitive flexibility and are more effective with Dot Maps.",
      "Choropleth Maps are more suitable for simple comparison tasks but not for reasoning.",
      "Interface usability and map attractiveness significantly influence user engagement and performance.",
      "Recommendations for Map Design:",
      "Use Dot Maps for complex spatial reasoning and decision-making tasks.",
      "Use Choropleth Maps for simple comparison tasks and general spatial patterns.",
      "Avoid multi-window interfaces for complex decision-making processes to minimize cognitive overload.",
      "Ensure intuitive navigation and clear instructions to enhance user experience.",
      "The study validated the importance of evaluating user preferences and cognitive processes in web map design, emphasizing the need for adaptive interfaces tailored to task complexity and user experience."
    ]
  },
  {
    "study": "Dedkova and Popelka (2015)",
    "articleTitle": "Virtual 3D restoration of an extinct village and its eye-tracking assessment",
    "year": 2015,
    "relevanceUsability": 4,
    "relevanceInteractivity": 4,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Eye-tracking (to measure visual attention, fixation duration, and fixation count)",
      "Usability Testing (to evaluate the effectiveness and user perception of 3D historical models)",
      "Comparative Analysis (comparing three visualization types: Cadastral Map, Orthophotomap, and 3D Model)",
      "Areas of Interest (AOI) Analysis (to analyse attention allocation and fixation transitions)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Within-subjects design"
    ],
    "eyeTrackingDevices": [
      "SMI RED 250 (Remote Eye-tracker, 120 Hz)"
    ],
    "evaluationSoftware": [
      "BeGaze Software for eye-tracking data analysis",
      "FlowMap (V-Analytics) for visualizing fixation transitions and spatio-temporal aggregation"
    ],
    "taskTypes": [
      "Visual exploration tasks (e.g., observing the overall view of the historical village)",
      "Search tasks (e.g., finding a specific building in the village)"
    ],
    "numberOfParticipants": [
      "28"
    ],
    "stimuli": [
      "Three Types of Visualizations:",
      "Cadastral Map (2D historical map)",
      "Orthophotomap (Aerial photo from 1947)",
      "3D Model (Interactive 3D reconstruction of the extinct village of Čistá)",
      "Significant Buildings as AOIs (e.g., Church, School, Town Hall)"
    ],
    "stimulusDevices": [
      "Desktop Computer with SMI RED 250 Eye-tracker"
    ],
    "findings": [
      "3D Models were found to be the most effective visualization type for historical reconstruction, leading to:",
      "Lower fixation count (indicating more efficient search)",
      "Longer fixation duration (suggesting deeper cognitive processing and visual exploration)",
      "Orthophotomaps were the least effective for building identification tasks, with:",
      "Higher fixation counts and shorter fixation durations, indicating increased cognitive load",
      "More fixation transitions and distributed gaze patterns, showing less focused visual search",
      "Visual Attention Analysis:",
      "FlowMap analysis showed gaze paths that aligned with street patterns in the 3D model.",
      "AOI Analysis revealed that significant buildings (e.g., School, Town Hall) received more attention in the 3D model.",
      "Statistical Analysis:",
      "ANOVA and TukeyHSD showed statistically significant differences in fixation duration between Cadastral Map and 3D Model.",
      "3D Models resulted in deeper perception and more meaningful gaze patterns, supporting better spatial understanding.",
      "Task Performance:",
      "3D Models were the most effective for building identification tasks, reducing search time and cognitive load.",
      "Orthophotomaps resulted in the longest search times and the most distributed gaze patterns.",
      "User Preferences and Feedback:",
      "Participants preferred 3D Models for their realistic representation and immersive experience.",
      "Orthophotomaps were rated as the least intuitive, with users reporting difficulties in cognitive mapping.",
      "Cognitive and Design Insights:",
      "3D Visualizations support spatial cognition by providing a realistic and coherent visual context.",
      "2D Orthophotomaps require higher cognitive transformation and mental rotation, leading to increased cognitive load.",
      "Recommendations for Historical Geovisualisation Design:",
      "Use 3D Models for historical reconstruction and educational purposes to enhance spatial cognition and visual memory.",
      "Use Cadastral Maps for simple visual comparisons but avoid them for building identification tasks.",
      "Avoid using Orthophotomaps for spatial reasoning tasks due to higher cognitive demands.",
      "Implement interactive elements (e.g., zoom, pan, and building information) to support exploratory tasks.",
      "The study confirmed the effectiveness of 3D models for historical geovisualization, validating their use in educational tools, virtual tourism, and cultural heritage preservation.",
      "The study also validated the use of eye-tracking for evaluating geovisualizations, providing insights into user perception, visual attention, and cognitive processing.",
      "Applications and Use Cases:",
      "Virtual Heritage and Education: Enhancing historical education and cultural awareness through immersive 3D experiences.",
      "Spatial Cognition Research: Investigating cognitive processes involved in 3D spatial perception and wayfinding.",
      "Geovisualisation Design: Improving usability and user experience for interactive historical maps and virtual reconstructions."
    ]
  },
  {
    "study": "Demšar and Çöltekin (2017)",
    "articleTitle": "Quantifying gaze and mouse interactions on spatial visual interfaces with a new movement analytics methodology",
    "year": 2017,
    "doi": "10.1371/journal.pone.0181818",
    "relevanceUsability": 4,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Eye-tracking (to analyse gaze trajectories and visual attention)",
      "Mouse Tracking (to analyse pointer trajectories and interactions)",
      "Volumetric Spatio-Temporal Analysis (a novel methodology using Space-Time Densities)",
      "Dynamic Interaction Measure (to quantify gaze-mouse coordination and cognitive processes)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Within-subject factorial design"
    ],
    "eyeTrackingDevices": [
      "Tobii TX300 (300 Hz)"
    ],
    "evaluationSoftware": [
      "Tobii Studio for gaze data collection and processing",
      "Custom Visual Analytics Tool for volumetric analysis and dynamic interaction measure",
      "R and MATLAB for computational analysis"
    ],
    "taskTypes": [
      "Natural tracing tasks (e.g., tracing geometric shapes naturally with the mouse)",
      "Eyes-first tracing tasks (e.g., eyes move first, mouse follows the gaze)",
      "Mouse-first tracing tasks (e.g., mouse moves first, eyes follow the pointer)"
    ],
    "numberOfParticipants": [
      "11"
    ],
    "stimuli": [
      "Geometric Shapes:",
      "Circle, Rectangle, Flower, Star (as proxies for routes on maps)",
      "Three Interaction Types:",
      "Natural tracing (subconscious eye movements, conscious mouse movements)",
      "Eyes-first tracing (conscious saccadic movements, subconscious mouse movements)",
      "Mouse-first tracing (conscious mouse movements, smooth pursuit eye movements)"
    ],
    "stimulusDevices": [
      "Desktop Computer with 23-inch flat screen (1920×1080 resolution)",
      "Tobii TX300 Eye Tracker",
      "Mouse Tracking Software (custom Java-based)"
    ],
    "findings": [
      "Gaze and mouse interactions are influenced by the consciousness of control:",
      "Natural tracing showed the highest level of dynamic interaction, suggesting natural coordination.",
      "Mouse-first tracing showed moderate dynamic interaction, challenging the smooth pursuit hypothesis.",
      "Eyes-first tracing showed the lowest dynamic interaction, supporting the covert attention hypothesis.",
      "Volumetric Space-Time Densities effectively represented gaze and mouse trajectories, revealing:",
      "Temporal and spatial co-occurrence between gaze and mouse movements.",
      "Differences in gaze-mouse coordination based on task type and cognitive load.",
      "Dynamic Interaction Measure:",
      "Defined as the proportion of overlapping voxels between gaze and mouse Space-Time Densities.",
      "Successfully quantified the level of cognitive coupling between gaze and mouse movements.",
      "Task Performance and Cognitive Load:",
      "Natural tracing resulted in the shortest completion times and the highest dynamic interaction.",
      "Eyes-first tracing resulted in the longest completion times and the lowest dynamic interaction.",
      "Mouse-first tracing showed intermediate performance and dynamic interaction.",
      "Applications and Use Cases:",
      "Spatial Visual Interfaces: Enhancing usability by understanding gaze-mouse coordination.",
      "Human-Computer Interaction (HCI): Improving interface design using dynamic interaction insights.",
      "Geovisualisation and Cartography: Optimising route tracing and map navigation tasks.",
      "Recommendations for Interface Design:",
      "Design interfaces that naturally support gaze-mouse coordination to reduce cognitive load.",
      "Use implicit gaze input rather than explicit gaze control to maintain natural interaction.",
      "Avoid overt attention shifts and conscious saccadic movements for continuous spatial tasks.",
      "The study validated the effectiveness of the Space-Time Density methodology for quantifying dynamic interactions, providing a novel approach to cognitive interaction analysis.",
      "Future Research Directions:",
      "Applying the methodology to real-world geospatial tasks (e.g., route tracing on complex maps).",
      "Investigating covert attention using dynamic interaction measures in visual exploration tasks.",
      "Extending the methodology to 3D geovisualizations and immersive VR environments."
    ]
  },
  {
    "study": "Deng et al. (2023)",
    "articleTitle": "An Experimental Study on Web Interface Design Optimization Based on User Cognitive Load",
    "year": 2023,
    "doi": "10.3233/FAIA220744",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 1,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Eye-tracking (to measure cognitive load, fixation count, and gaze patterns)",
      "Usability Testing (to evaluate user experience and effectiveness of web interface design)",
      "Comparative Analysis (comparing two iterations of the DIC website for cognitive load and usability)",
      "Behavioral Analysis (to evaluate user interactions, navigation patterns, and decision-making)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Within-subjects design"
    ],
    "eyeTrackingDevices": [
      "Tobii Pro Glasses 2 (Mobile Eye-tracking Device)"
    ],
    "evaluationSoftware": [
      "Tobii Studio for eye-tracking data analysis",
      "BeGaze Software for visual attention mapping and heatmap generation"
    ],
    "taskTypes": [
      "Browsing tasks (e.g., exploring the homepage and navigation menu)",
      "Decision-making tasks (e.g., selecting design events or workshops)",
      "Comparison tasks (e.g., comparing two versions of the DIC website)"
    ],
    "numberOfParticipants": [
      "12"
    ],
    "stimuli": [
      "Two Iterations of the DIC Website:",
      "Website A: Original design with complex structure",
      "Website B: Optimized design with improved information flow and visual hierarchy",
      "Six Core Functional Sections:",
      "Home Page Content",
      "Creation Camp",
      "D-WILL Lecture",
      "Project Matching",
      "Designers",
      "Cooperative Media and Enterprises"
    ],
    "stimulusDevices": [
      "Tobii Pro Glasses 2 (Mobile Eye-tracking Device)",
      "Desktop Computer for web browsing and interaction tasks"
    ],
    "findings": [
      "Website B (Optimized Design) was found to be more effective than Website A, resulting in:",
      "Lower cognitive load (measured by shorter fixation durations and reduced fixation counts)",
      "Higher usability and user satisfaction due to improved information hierarchy and visual flow",
      "Eye-tracking Analysis:",
      "Heatmaps showed more concentrated visual attention on key areas in Website B, indicating better information prioritization.",
      "Gaze patterns in Website A were more scattered, suggesting increased cognitive load and navigation difficulties.",
      "Fixation Count and Duration:",
      "Website B showed lower fixation counts and shorter fixation durations on navigational elements.",
      "Website A showed higher fixation counts and longer fixation durations on scattered elements, indicating confusion.",
      "Behavioral Analysis:",
      "Users interacted more efficiently with Website B, completing tasks faster with fewer navigational errors.",
      "Website A required more effort to locate information, leading to increased cognitive load and frustration.",
      "User Preferences and Feedback:",
      "Participants preferred Website B for its cleaner layout, clear visual hierarchy, and intuitive navigation.",
      "Website A was rated lower due to cluttered design, confusing navigation, and high cognitive load.",
      "Applications and Use Cases:",
      "Web Interface Design: Optimising web interfaces to reduce cognitive load and improve usability.",
      "Digital Education and E-learning: Enhancing information flow and navigation for better user experience.",
      "Cultural and Creative Industries: Implementing effective website design strategies for creative platforms.",
      "Recommendations for Web Design:",
      "Use clear visual hierarchy and consistent navigation to enhance usability and reduce cognitive load.",
      "Avoid cluttered layouts and complex structures that increase cognitive processing time.",
      "Implement adaptive interface elements to optimize the user experience based on cognitive load analysis.",
      "Prioritize content relevance and readability to guide user attention and enhance information processing.",
      "Cognitive and Design Insights:",
      "Visual hierarchy and information flow significantly influence cognitive load and user satisfaction.",
      "Cognitive Load Theory can be effectively applied to web interface design to optimize information presentation.",
      "Eye-tracking metrics such as fixation count, duration, and heatmaps provide valuable insights into user cognition and attention patterns.",
      "The study confirmed the effectiveness of Cognitive Load Theory for web interface design optimization, demonstrating that improved visual hierarchy and information flow enhance usability and user experience.",
      "The study also validated the use of eye-tracking for cognitive load analysis, offering a novel approach to evidence-based web design."
    ]
  },
  {
    "study": "Dobesova (2020)",
    "articleTitle": "Evaluation of effective cognition for the QGIS processing modeler",
    "year": 2020,
    "doi": "10.3390/app10041446",
    "relevanceUsability": 5,
    "relevanceInteractivity": 4,
    "relevanceGeovisualisation": 4,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Eye-tracking (to measure cognitive load, fixation count, scanpath length, and visual attention)",
      "Usability Testing (to evaluate the effectiveness and cognitive efficiency of the QGIS Processing Modeler)",
      "Comparative Analysis (using the Physics of Notations theory for assessing visual vocabulary)",
      "Areas of Interest (AOI) Analysis (to analyse attention allocation and fixation transitions)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Within-subjects design"
    ],
    "eyeTrackingDevices": [
      "SMI RED 250 (Remote Eye-tracker, 120 Hz)"
    ],
    "evaluationSoftware": [
      "SMI Experiment Suite 360° for data collection",
      "BeGaze Software for eye-tracking data analysis",
      "Ogama 4.5 and V-Analytics for visualizing fixation transitions and spatio-temporal aggregation",
      "STATISTICA for statistical analysis"
    ],
    "taskTypes": [
      "Visual exploration tasks (e.g., understanding workflow diagrams)",
      "Search tasks (e.g., finding specific input or output symbols)",
      "Comparison tasks (e.g., comparing data flow between diagrams)",
      "Cognitive processing tasks (e.g., understanding algorithm sequences)"
    ],
    "numberOfParticipants": [
      "22"
    ],
    "stimuli": [
      "22 Workflow Diagrams from QGIS Processing Modeler:",
      "Different Sizes and Functions (small, medium, large)",
      "Different Flow Orientations (vertical, horizontal, diagonal)",
      "QGIS 2.x and 3.x Versions (to compare visual vocabulary and functionality)"
    ],
    "stimulusDevices": [
      "Desktop Computer with SMI RED 250 Eye-tracker",
      "1920×1080 pixels display resolution"
    ],
    "findings": [
      "Visual Vocabulary and Cognitive Load:",
      "Semiotic Clarity was low due to symbol overload. Symbols in QGIS 3.x represented up to 22 different data types, leading to cognitive confusion.",
      "Perceptual Discriminability was satisfactory for input and output symbols but low for operational symbols due to poor color contrast with the canvas.",
      "Visual Expressiveness was limited, as only color was used as a visual variable. Recommended improvements included using different shapes and orientations.",
      "Eye-Tracking Analysis:",
      "Heatmaps showed concentrated visual attention on symbols and connection lines.",
      "Scanpath analysis revealed that users followed data flows but were confused by curved connector lines, leading to longer fixation durations.",
      "Fixation Count and Duration:",
      "Users took longer to process complex workflow diagrams due to overlapping lines and symbols.",
      "Curved lines caused disorientation, suggesting the need for straight lines or user-defined connectors.",
      "Cognitive Load and Efficiency:",
      "Straight connector lines were more efficient for cognitive processing than curved lines.",
      "Aligned symbols and grid snapping significantly reduced cognitive load and improved efficiency.",
      "Task Performance and Accuracy:",
      "Horizontal and diagonal flow orientations were found to be more intuitive than vertical layouts, aligning with natural reading patterns.",
      "Incorrect answers were recorded more frequently when symbols were unaligned or overlapping.",
      "User Preferences and Feedback:",
      "Participants preferred the QGIS 3.x version for its clearer color palette but reported cognitive overload due to symbol overload.",
      "Text labels were found helpful for dual coding, but text truncation due to small symbols caused confusion.",
      "Recommendations for Visual Vocabulary Design:",
      "Different shapes and larger sizes for symbols to improve Perceptual Discriminability and Semantic Transparency.",
      "Straight connector lines with user control over their shape to minimize line crossings and visual clutter.",
      "Automatic alignment and grid snapping to improve Cognitive Interaction and Symbol Arrangement.",
      "Thumbnail Preview Window for navigation in complex workflow diagrams.",
      "Addition of loop and condition symbols for cognitive expressiveness.",
      "Cognitive and Design Insights:",
      "Visual Expressiveness can be improved by using additional visual variables like shape, size, and orientation.",
      "Reading patterns were influenced by flow orientation and symbol alignment, validating the Cognitive Fit principle.",
      "The study validated the effectiveness of using Physics of Notations and eye-tracking for cognitive evaluation of visual programming languages.",
      "Applications and Use Cases:",
      "GIS Workflow Design: Enhancing usability and cognitive efficiency for geospatial data processing models.",
      "Visual Programming Languages: Improving visual notations for data science workflows and algorithm design.",
      "The study confirmed the importance of visual vocabulary design for cognitively effective workflow diagrams, highlighting the impact of symbol overload and poor discriminability on cognitive load and usability."
    ]
  },
  {
    "study": "Dong et al. (2012)",
    "articleTitle": "Effectiveness and Efficiency of Map Symbols for Dynamic Geographic Information Visualization",
    "year": 2012,
    "doi": "10.1559/1523040639298",
    "relevanceUsability": 4,
    "relevanceInteractivity": 4,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 1,
    "mainMethods": [
      "Usability Testing (to evaluate the effectiveness and efficiency of dynamic map symbols)",
      "Comparative Analysis (comparing the impact of visual variables: size, color, frame rate, and display format)",
      "Quantitative Measures (using deviation and response time to measure effectiveness and efficiency)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Within-subjects design"
    ],
    "eyeTrackingDevices": [
      "Not applicable"
    ],
    "evaluationSoftware": [
      "Custom Dynamic Mapping System developed using JavaScript and Flash",
      "Statistical Analysis of response times and accuracy deviations"
    ],
    "taskTypes": [
      "Temporal pattern recognition tasks (e.g., identifying peak traffic flow periods)",
      "Comparison tasks (e.g., comparing different color classes or size categories)"
    ],
    "numberOfParticipants": [
      "50"
    ],
    "stimuli": [
      "Dynamic Maps displaying real-time traffic flow data using:",
      "Color (varying number of color classes)",
      "Size (Line Thickness) (varying number of size classes)",
      "Frame Rate (2 to 24 frames per second)",
      "Display Formats:",
      "Large Format (1024 × 768 pixels)",
      "Small Format (480 × 320 pixels)"
    ],
    "stimulusDevices": [
      "Desktop Computer with Large Format Display (1024 × 768 pixels)",
      "Mobile Device with Small Format Display (480 × 320 pixels)"
    ],
    "findings": [
      "Color vs Size:",
      "Size (Line Thickness) was found to be more efficient and effective than Color for dynamic map symbols:",
      "Size showed lower deviation and faster response times across all tasks.",
      "The optimal number of size classes was found to be 15, whereas the optimal number of color classes was 10.",
      "Frame Rate:",
      "The optimal frame rate for dynamic map animation was found to be:",
      "3 frames per second for Color Expression",
      "6 frames per second for Size Expression",
      "Faster frame rates (>6 fps) did not improve effectiveness and led to increased cognitive load.",
      "Display Format:",
      "Large Format Display (1024 × 768) was found to be more effective and efficient than Small Format Display (480 × 320):",
      "Users had shorter response times and lower deviation with the large format display.",
      "The optimal frame rate was lower for the small format display due to higher cognitive load and limited screen space.",
      "User Performance and Cognitive Load:",
      "Temporal pattern recognition was faster and more accurate using Size (Line Thickness) compared to Color.",
      "Color categories beyond 10 classes and Size categories beyond 15 classes led to increased cognitive load and longer response times.",
      "Color Expression resulted in higher cognitive load due to visual complexity and short-term memory limitations.",
      "Applications and Use Cases:",
      "Dynamic Geographic Information Visualization: Optimising dynamic symbols for traffic flow maps, weather visualizations, and spatial-temporal data.",
      "Cartographic Design: Guiding the selection of visual variables for effective and efficient dynamic maps.",
      "Recommendations for Dynamic Symbol Design:",
      "Use Size (Line Thickness) as a primary visual variable for dynamic geographic information.",
      "Limit the number of Color Classes to 10 and Size Classes to 15 for optimal usability.",
      "Use a frame rate of 3 fps for Color Expression and 6 fps for Size Expression.",
      "Reduce frame rates on small format displays to minimise cognitive load and improve efficiency.",
      "Ensure consistent symbolization and visual hierarchy to enhance pattern recognition and cognitive processing.",
      "The study confirmed the importance of choosing appropriate visual variables for dynamic map symbols, highlighting the impact of color, size, and frame rate on cognitive load and user performance.",
      "Future Research Directions:",
      "Applying the findings to other types of dynamic geovisualizations (e.g., weather radar maps, animated population flows).",
      "Investigating the impact of animation effects (e.g., motion, transition) on cognitive load and user perception.",
      "Exploring the use of adaptive frame rates and dynamic symbols for real-time geographic data visualization."
    ]
  },
  {
    "study": "Dong et al. (2018)",
    "articleTitle": "Using Eye Tracking to Evaluate the Usability of Flow Maps",
    "year": 2018,
    "doi": "10.3390/ijgi7070281",
    "relevanceUsability": 5,
    "relevanceInteractivity": 4,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Eye-tracking (to measure cognitive load, fixation duration, fixation count, and time to first fixation)",
      "Usability Testing (to evaluate the effectiveness and efficiency of different flow map designs)",
      "Comparative Analysis (comparing straight lines vs. curves and line thickness vs. color gradient)",
      "Questionnaires (to collect user feedback on preferences and visual quality)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Between-subjects design"
    ],
    "eyeTrackingDevices": [
      "Tobii T120 (60 Hz)"
    ],
    "evaluationSoftware": [
      "Tobii Studio 3.2 for eye-tracking data analysis",
      "Gaze opacity maps for visualizing areas of interest (AOIs) and gaze patterns"
    ],
    "taskTypes": [
      "Visual search tasks (e.g., identifying the largest or smallest flow volume)",
      "Comparison tasks (e.g., comparing flow volumes between cities)"
    ],
    "numberOfParticipants": [
      "40"
    ],
    "stimuli": [
      "Flow Maps displaying mobile communication data from Northeast China, using:",
      "Straight Lines vs. Curves to indicate flow direction",
      "Line Thickness vs. Color Gradient to indicate flow volume",
      "Four Flow Datasets and Two Visual Variables:",
      "Straight Line + Line Thickness (SL + LT)",
      "Curve + Line Thickness (CV + LT)",
      "Straight Line + Color Gradient (SL + CG)",
      "Curve + Color Gradient (CV + CG)"
    ],
    "stimulusDevices": [
      "Desktop Computer with 17-inch monitor (1280×1024 resolution)",
      "Tobii T120 Eye Tracker"
    ],
    "findings": [
      "Curves vs. Straight Lines:",
      "Curved flows were more effective than straight flows, leading to:",
      "More correct answers",
      "Higher fixation count and longer fixation durations, indicating deeper cognitive processing",
      "Curved flows required longer finish times but exhibited shorter times to first fixation, guiding visual attention more effectively.",
      "Straight lines resulted in more overlaps and intersections, making information extraction more difficult.",
      "Color Gradient vs. Line Thickness:",
      "Color gradients were more effective than line thickness for representing flow volume:",
      "More correct answers were obtained with color gradients.",
      "Higher percentage of fixations in AOIs, indicating more efficient visual attention.",
      "Line thickness was less intuitive, leading to longer fixation durations and higher cognitive load.",
      "Eye-tracking Analysis:",
      "Heatmaps showed concentrated visual attention on flow lines and target cities.",
      "Gaze opacity maps revealed that participants focused more on the target flows with curved lines and color gradients.",
      "User Preferences and Feedback:",
      "Curved flows were rated as clearer and more aesthetically pleasing than straight lines.",
      "Color gradients were preferred over line thicknesses for representing flow volume.",
      "Applications and Use Cases:",
      "Flow Maps: Improving usability for spatial trajectory visualization, migration maps, transportation networks, and social communication flows.",
      "Geovisualisation Design: Guiding the selection of visual variables for effective flow maps.",
      "Recommendations for Flow Map Design:",
      "Use curved lines to reduce overlaps and intersections and improve visual clarity.",
      "Use color gradients rather than line thickness to represent flow volume for better cognitive efficiency.",
      "Avoid using straight lines in flow maps with complex spatial networks.",
      "Ensure consistent color schemes and clear visual hierarchy to enhance pattern recognition and cognitive processing.",
      "Cognitive and Design Insights:",
      "Curved flows provide better cognitive guidance and visual appeal, leading to more accurate information retrieval.",
      "Color gradients support efficient pattern recognition and quantitative comparison, enhancing usability and user satisfaction.",
      "The study validated the effectiveness of using eye-tracking for evaluating flow maps, providing insights into visual attention, cognitive load, and usability.",
      "The study also confirmed the importance of visual variables for flow map usability, highlighting the impact of line shape and color on cognitive load and user performance."
    ]
  },
  {
    "study": "Fairbairn and Hepburn (2023)",
    "articleTitle": "Eye-tracking in map use, map user and map usability research: what are we looking for?",
    "year": 2023,
    "doi": "10.1080/23729333.2023.2189064",
    "relevanceUsability": 5,
    "relevanceInteractivity": 4,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Eye-tracking (to understand map user behaviour, visual attention, and cognitive processing)",
      "Usability Testing (to evaluate map usability, interactivity, and user experience)",
      "Comparative Analysis (reviewing various eye-tracking methodologies and their effectiveness in cartographic research)",
      "Literature Review (comprehensive overview of existing eye-tracking studies in cartography)"
    ],
    "studyWithExperiment": "ONLY METHODOLOGY (This is an overview paper discussing methodologies and not an experimental study with participants)",
    "experimentDesign": [
      "Not applicable (No experimental design; the study is a literature review and methodological overview)"
    ],
    "eyeTrackingDevices": [
      "Not specified (Discusses various devices used in cartographic research, including fixed and mobile eye-trackers)"
    ],
    "evaluationSoftware": [
      "Not specified (Reviews commonly used software like Tobii Studio and BeGaze in cartographic studies)"
    ],
    "taskTypes": [
      "Not applicable (No tasks performed; the study reviews tasks used in other eye-tracking research)"
    ],
    "numberOfParticipants": [
      "Not applicable (No participants; the study is a methodological review)"
    ],
    "stimuli": [
      "Cartographic Interfaces (discusses map interfaces, geovisualizations, and interactive maps used in previous eye-tracking studies)"
    ],
    "stimulusDevices": [
      "Not applicable (No specific device used; discusses general setups for eye-tracking in cartography)"
    ],
    "findings": [
      "Eye-tracking is a valuable tool for understanding map user behaviour, visual attention, and cognitive processing in cartographic research.",
      "The study emphasizes the importance of methodological choices in eye-tracking research, including participant selection, device selection, testing environment, and data analysis.",
      "Common challenges in eye-tracking research are discussed, including data interpretation, noise filtering, and fixation identification.",
      "The paper reviews different eye-tracking methodologies, such as:",
      "Fixed vs. Mobile Eye-Trackers (Fixed eye-trackers provide higher precision, while mobile eye-trackers allow for realistic in-situ experiments)",
      "Gaze Plots, Heatmaps, and AOI Analysis (Common visualization techniques for eye-tracking data)",
      "Combination with Other Methods (e.g., Thinking Aloud, Mouse Tracking, EEG for cognitive load analysis)",
      "The study provides a comprehensive overview of experimental design choices for eye-tracking in cartography:",
      "Between-subjects vs. Within-subjects designs",
      "Controlled lab environments vs. Naturalistic settings",
      "Applications and Use Cases:",
      "Map Usability Testing: Optimising cartographic interfaces for better user experience and usability.",
      "Cognitive Processing Research: Understanding cognitive load and visual attention in geovisualizations.",
      "Geovisualisation Design: Improving symbolization, layout, and interactivity in cartographic products.",
      "The study highlights emerging trends in eye-tracking research:",
      "Multimodal Integration (combining eye-tracking with EEG and GSR for deeper cognitive insights)",
      "Advanced Data Analysis Techniques (e.g., machine learning for pattern recognition in gaze data)",
      "Cross-disciplinary Applications (applying cartographic eye-tracking research to HCI, VR, and AR interfaces)",
      "The authors advocate for a mixed-methods approach in cartographic eye-tracking research, combining quantitative eye-tracking metrics with qualitative feedback to gain holistic insights.",
      "Future Research Directions include:",
      "Expanding the scope of geospatial stimuli beyond traditional maps (e.g., interactive 3D models, AR/VR environments)",
      "Promoting cartographic research to the wider HCI community for broader impact and interdisciplinary collaboration.",
      "The paper concludes that eye-tracking is a crucial methodology for map usability, user behaviour analysis, and cognitive research, urging cartographers to innovate in methodological approaches and expand research horizons."
    ]
  },
  {
    "study": "Giannopoulos et al. (2015)",
    "articleTitle": "Gaze nav: Gaze-based pedestrian navigation",
    "year": 2015,
    "doi": "10.1145/2785830.2785873",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 4,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Eye-tracking (to capture gaze direction and trigger navigation feedback)",
      "Gaze-based Interaction (using gaze as an input modality for pedestrian navigation)",
      "Usability Testing (comparing gaze-based navigation with traditional map-based turn-by-turn instructions)",
      "Spatial Learning Evaluation (to assess local spatial knowledge acquisition)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Between-subjects design"
    ],
    "eyeTrackingDevices": [
      "Ergoneers Dikablis (25 Hz, head-mounted mobile eye tracker)"
    ],
    "evaluationSoftware": [
      "Unity Game Engine (for virtual environment and navigation tasks)",
      "ESRI CityEngine (for generating the virtual urban environment)",
      "Custom GazeNav Application (on Android for vibro-tactile feedback)"
    ],
    "taskTypes": [
      "Navigation tasks (e.g., finding a target location in a virtual urban environment)",
      "Decision-making tasks (e.g., choosing the correct street at decision points)",
      "Spatial learning tasks (e.g., recognizing street intersections and ordering them chronologically)"
    ],
    "numberOfParticipants": [
      "32"
    ],
    "stimuli": [
      "Virtual Urban Environment (generated using ESRI CityEngine and navigable in first-person view using Unity)",
      "GazeNav System (gaze-based interaction triggering vibro-tactile feedback for navigation)",
      "Turn-by-Turn Instructions (baseline comparison using traditional map-based navigation)"
    ],
    "stimulusDevices": [
      "Ergoneers Dikablis Mobile Eye Tracker (head-mounted)",
      "Samsung Galaxy Nexus Smartphone (for vibro-tactile feedback)",
      "EPSON Projector (1920 × 1200 resolution) for virtual environment display",
      "Logitech 3D Precision Pro Joystick for navigation control"
    ],
    "findings": [
      "GazeNav was more effective and efficient for pedestrian navigation compared to traditional map-based instructions:",
      "No interruption of locomotion was observed with GazeNav, while participants using map-based instructions stopped frequently to check the map.",
      "Significantly better spatial learning was achieved with GazeNav, as users maintained visual attention on the environment.",
      "User Experience was significantly higher for GazeNav, with participants reporting a more natural and intuitive interaction.",
      "Eye-tracking Analysis:",
      "GazeNav users spent 100% of their visual attention on the virtual environment.",
      "Map-based users frequently switched attention between the environment and the navigation device, leading to higher cognitive load.",
      "Spatial Learning:",
      "Participants using GazeNav acquired better local spatial knowledge, indicated by a higher number of correctly recognized intersections.",
      "Scene recognition tasks showed that GazeNav users remembered more intersections and their chronological order better than map-based users.",
      "Navigation Performance:",
      "There was no significant difference in total navigation time between the two systems.",
      "GazeNav users navigated more efficiently at certain decision points, suggesting better cognitive mapping.",
      "User Preferences and Feedback:",
      "100% of GazeNav users preferred the system over map-based instructions.",
      "Participants appreciated the hands-free interaction and the intuitive navigation experience.",
      "Applications and Use Cases:",
      "Pedestrian Navigation Systems: Enhancing usability and spatial learning with gaze-based interaction.",
      "Virtual and Augmented Reality: Applying gaze-based navigation in immersive environments and AR city guides.",
      "Recommendations for Gaze-Based Navigation Design:",
      "Implement continuous vibro-tactile feedback to enhance cognitive mapping and navigation efficiency.",
      "Use gaze-based interaction for hands-free navigation and spatial learning support.",
      "Design implicit gaze interactions to minimize cognitive load and avoid the Midas Touch problem.",
      "Cognitive and Design Insights:",
      "Gaze-based navigation allows for natural interaction with the environment, supporting local spatial knowledge acquisition.",
      "Visual attention on the environment leads to better cognitive mapping and spatial memory.",
      "The study validated the effectiveness of the GazeNav system for gaze-based pedestrian navigation, demonstrating its potential for intuitive and efficient navigation without cognitive overload.",
      "Future Research Directions:",
      "Implementing GazeNav in real-world navigation scenarios.",
      "Comparing GazeNav with other non-visual navigation systems (e.g., auditory or haptic guidance).",
      "Investigating multimodal feedback mechanisms for enhanced user experience in pedestrian and vehicular navigation."
    ]
  },
  {
    "study": "Göbel and Kiefer (2019)",
    "articleTitle": "POITrack: Improving Map-Based Planning with Implicit POI Tracking",
    "year": 2019,
    "doi": "10.1145/3317959.3321491",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Eye-tracking (to capture visual attention and implicit POI tracking)",
      "Gaze-Adaptive Interface (using gaze as an implicit indicator for POI relevance)",
      "Usability Testing (comparing POITrack with traditional interactive web maps)",
      "Spatial Decision-Making Evaluation (to assess map-based planning and POI selection)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Between-subjects design"
    ],
    "eyeTrackingDevices": [
      "Tobii TX 300 (120 Hz, remote eye tracker)"
    ],
    "evaluationSoftware": [
      "Tobii Studio for eye-tracking data analysis",
      "Custom POITrack System for implicit POI tracking and adaptive visualization",
      "Mapbox GL JS for web map rendering and POI visualization"
    ],
    "taskTypes": [
      "Planning tasks (e.g., planning a day trip by selecting POIs in different city districts)",
      "Revisiting tasks (e.g., revisiting previously inspected POIs)",
      "Decision-making tasks (e.g., choosing the best POI based on ratings and proximity)"
    ],
    "numberOfParticipants": [
      "12"
    ],
    "stimuli": [
      "POITrack System (gaze-adaptive map interface with implicit POI tracking and visual highlights)",
      "Traditional Interactive Web Map (baseline for comparison)",
      "Two Cities for Planning Tasks:",
      "Dublin (test task for familiarization)",
      "Glasgow (actual task for usability evaluation)"
    ],
    "stimulusDevices": [
      "Tobii TX 300 Eye Tracker (120 Hz, remote)",
      "Desktop Computer with 23-inch display (1920×1080 resolution)",
      "Mapbox Web Map with implicit POI tracking and adaptive map extent"
    ],
    "findings": [
      "POITrack significantly improved the speed and efficiency of revisiting previously inspected POIs:",
      "Task completion time was 12.07 seconds faster on average with POITrack compared to the baseline.",
      "Fewer interactions were needed for revisiting POIs, leading to a 25.31% reduction in mouse interactions.",
      "Visual highlights guided users back to previously inspected POIs, improving spatial memory and cognitive mapping.",
      "Eye-tracking Analysis:",
      "100% of visual attention was on the map environment with POITrack, while baseline users frequently switched attention between the map and navigation tools.",
      "Gaze opacity maps showed more concentrated visual attention on relevant POIs with POITrack.",
      "Spatial Decision-Making:",
      "Participants made faster and more accurate decisions using POITrack due to implicit POI tracking and visual highlights.",
      "POITrack users remembered more inspected POIs and could revisit them more efficiently.",
      "User Preferences and Feedback:",
      "100% of POITrack users preferred the system over traditional web maps.",
      "Participants appreciated the hands-free interaction, implicit POI tracking, and visual highlights.",
      "Positive feedback on the simplicity and usability of POITrack for complex spatial decision-making tasks.",
      "Usability and Cognitive Load:",
      "User Experience Questionnaire (UEQ) showed higher scores for attractiveness, perspicuity, efficiency, and stimulation with POITrack.",
      "NASA TLX scores were lower (better) for POITrack, indicating reduced cognitive load and improved usability.",
      "System Usability Scale (SUS) scores were above average for both systems, with higher satisfaction for POITrack.",
      "Applications and Use Cases:",
      "Map-Based Planning Systems: Enhancing usability and decision-making with gaze-adaptive interaction.",
      "Spatial Decision Support Systems: Applying implicit POI tracking to improve user experience and spatial cognition.",
      "Tourism and Urban Planning: Supporting trip planning and urban navigation with adaptive geovisualization.",
      "Recommendations for Gaze-Adaptive Map Design:",
      "Use implicit gaze input for POI relevance detection and visual highlights for faster revisits.",
      "Implement adaptive map extent changes to maintain visual context and cognitive mapping.",
      "Design implicit gaze interactions to minimize cognitive load and avoid the Midas Touch problem.",
      "Cognitive and Design Insights:",
      "Implicit gaze input supports natural interaction and cognitive mapping in spatial decision-making.",
      "Visual highlights enhance spatial memory and decision efficiency by guiding visual attention.",
      "The study validated the effectiveness of the POITrack system for gaze-adaptive map-based planning, demonstrating its potential for intuitive, efficient, and cognitively supportive spatial decision-making.",
      "Future Research Directions:",
      "Implementing POITrack in real-world navigation scenarios and smart city applications.",
      "Expanding POITrack to multimodal interactions with voice commands and tactile feedback.",
      "Investigating personalized gaze-adaptive systems to match individual search behavior and decision-making styles."
    ]
  },
  {
    "study": "Göbel et al. (2016)",
    "articleTitle": "The importance of visual attention for adaptive interfaces",
    "year": 2016,
    "doi": "10.1145/2957265.2962659",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Eye-tracking (to capture visual attention and trigger adaptive interface changes)",
      "Gaze-Based Interaction (using gaze data to adapt map interfaces based on user needs)",
      "Usability Framework Development (proposing a new framework for adaptive interfaces using gaze data)",
      "Conceptual Model and Application Scenario (illustrating adaptive cartographic maps using gaze data)"
    ],
    "studyWithExperiment": "ONLY METHODOLOGY (This is a conceptual and framework development paper without an experimental study)",
    "experimentDesign": [
      "Not applicable (No experimental design; the study is a conceptual framework and application scenario)"
    ],
    "eyeTrackingDevices": [
      "Not specified (Discusses general integration of eye-tracking without a specific device)"
    ],
    "evaluationSoftware": [
      "Not specified (Conceptual model; no experimental data)"
    ],
    "taskTypes": [
      "Not applicable (No tasks performed; the study presents a conceptual framework and application scenario)"
    ],
    "numberOfParticipants": [
      "Not applicable (No participants; the study is a methodological and conceptual paper)"
    ],
    "stimuli": [
      "Adaptive Cartographic Map Interface (conceptual example using gaze-based adaptation)",
      "Information Relevance Extraction (using gaze data to determine relevant information)",
      "Intention Recognition and Activity Detection (using visual attention for implicit user interaction)"
    ],
    "stimulusDevices": [
      "Not applicable (No specific device used; the study discusses general gaze-based interaction)"
    ],
    "findings": [
      "Visual attention is a powerful implicit input modality for adaptive interfaces, enabling hands-free interaction and reducing cognitive load.",
      "The study proposes a framework for gaze-informed adaptation, which includes five main processes:",
      "Information Relevance and Extraction: Identifying relevant objects using gaze data and contextual information.",
      "Information Interpretation: Interpreting visual attention to understand user intentions using machine learning.",
      "Adaptation Visualization: Displaying adapted content that aligns with the user's mental model and cognitive load.",
      "Adaptation Timing: Adapting content at the right moment, avoiding interruptions in the user's workflow.",
      "Adaptation Strategy: Choosing between implicit or explicit adaptation to enhance user control and satisfaction.",
      "Gaze data can enhance adaptive interfaces by providing insights into:",
      "User intentions and cognitive load",
      "Information relevance and visual attention patterns",
      "Contextual awareness for better interface adaptation",
      "The proposed gaze-informed adaptation framework is illustrated through an application scenario:",
      "Adaptive Cartographic Map Interface for location-based services:",
      "Gaze data is used to highlight relevant POIs (e.g., restaurants near a bus stop).",
      "Cognitive overload is detected through blink frequency and fixation patterns, triggering contextual adaptation.",
      "The map interface adapts dynamically by showing context-aware recommendations and hiding irrelevant information.",
      "Applications and Use Cases:",
      "Adaptive Cartographic Maps: Enhancing usability and cognitive efficiency with gaze-informed interface adaptation.",
      "Location-Based Services: Using implicit gaze input for contextual recommendations.",
      "Smart City Applications: Applying gaze-based interaction for adaptive urban navigation.",
      "Recommendations for Gaze-Informed Interface Design:",
      "Use implicit gaze input to detect user intentions and reduce cognitive load.",
      "Implement context-aware adaptation strategies that align with user mental models.",
      "Design adaptive interfaces that minimize distractions and maintain user control.",
      "Cognitive and Design Insights:",
      "Implicit gaze input provides a natural and continuous interaction modality for adaptive interfaces.",
      "Gaze-based adaptation supports cognitive mapping and spatial decision-making in dynamic environments.",
      "The study validated the importance of visual attention for adaptive interfaces, demonstrating the potential of gaze-based interaction for contextual adaptation and cognitive efficiency.",
      "Future Research Directions:",
      "Implementing the framework in real-world navigation systems and location-based services.",
      "Developing machine learning models for intention recognition using gaze data and contextual features.",
      "Investigating multi-user systems for collaborative gaze-based interactions.",
      "Applying gaze-informed adaptation to AR and VR interfaces for immersive geovisualizations."
    ]
  },
  {
    "study": "Göbel et al. (2019)",
    "articleTitle": "FeaturEyeTrack: automatic matching of eye tracking data with map features on interactive maps",
    "year": 2019,
    "doi": "10.1007/s10707-019-00344-3",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Eye-tracking (to capture gaze data on dynamic cartographic maps)",
      "FeaturEyeTrack Framework (to automatically match gaze data with map features)",
      "Comparative Analysis (comparing traditional eye-tracking methods with FeaturEyeTrack)",
      "Usability Testing (to evaluate the effectiveness of adaptive maps and dynamic geovisualization)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Within-subjects design"
    ],
    "eyeTrackingDevices": [
      "Tobii TX 300 (120 Hz, remote eye tracker)"
    ],
    "evaluationSoftware": [
      "FeaturEyeTrack System for automatic gaze-feature matching",
      "Tobii Studio for eye-tracking data collection",
      "Mapbox GL JS for rendering interactive maps and vector tiles"
    ],
    "taskTypes": [
      "Visual search tasks (e.g., finding POIs on a dynamic map)",
      "Decision-making tasks (e.g., choosing the best route or POI based on visual analysis)",
      "Spatial reasoning tasks (e.g., comparing spatial distributions and patterns)"
    ],
    "numberOfParticipants": [
      "5"
    ],
    "stimuli": [
      "Interactive Cartographic Maps with dynamic content and POI icons",
      "FeaturEyeTrack System for real-time matching of gaze data with map features",
      "Mapbox Vector Tiles with geospatial data and dynamic rendering",
      "Three Map Tasks:",
      "Focused Search (finding restaurants by analysing POI icons)",
      "Focused Search with Interaction (zooming and panning to find the most northern village on Niue island)",
      "Route Planning (finding the shortest route between two points while naming all streets along the route)"
    ],
    "stimulusDevices": [
      "Desktop Computer with 23-inch display (1920×1080 resolution)",
      "Tobii TX 300 Eye Tracker",
      "Mapbox Web Map with vector tile-based rendering and dynamic cartographic features"
    ],
    "findings": [
      "FeaturEyeTrack significantly improved the accuracy and efficiency of analysing visual attention on dynamic interactive maps:",
      "Automatic matching of gaze data with map features reduced manual annotation time.",
      "High accuracy in matching fixations with POIs, street names, and labels in real time.",
      "Comparison with Traditional Methods:",
      "Traditional heatmaps and scanpaths were less accurate and required manual interpretation.",
      "FeaturEyeTrack provided automated and detailed feature-level analysis without manual labeling.",
      "Gaze Behavior Analysis:",
      "POIs were the most frequently fixated elements, with participants spending 61.68% of overall dwell time on them.",
      "Temporal Analysis revealed search strategies and decision-making patterns, showing that users first scanned for POIs before making spatial decisions.",
      "Spatial Decision-Making:",
      "Participants made faster and more accurate decisions with FeaturEyeTrack due to automatic gaze-feature matching and real-time adaptation.",
      "Visual highlights guided users to relevant POIs, improving spatial cognition and cognitive mapping.",
      "User Preferences and Feedback:",
      "Participants appreciated the hands-free interaction and implicit POI tracking.",
      "Positive feedback on the simplicity and usability of FeaturEyeTrack for complex spatial decision-making tasks.",
      "Applications and Use Cases:",
      "Dynamic Cartographic Maps: Enhancing usability and cognitive efficiency with gaze-feature matching.",
      "Location-Based Services: Using implicit gaze input for contextual POI recommendations.",
      "Smart City Applications: Applying gaze-based interaction for adaptive urban navigation.",
      "Recommendations for Gaze-Adaptive Map Design:",
      "Use implicit gaze input to detect user intentions and reduce cognitive load.",
      "Implement context-aware adaptation strategies that align with user mental models.",
      "Design adaptive interfaces that minimize distractions and maintain user control.",
      "Cognitive and Design Insights:",
      "Implicit gaze input supports natural interaction and cognitive mapping in spatial decision-making.",
      "Visual highlights enhance spatial memory and decision efficiency by guiding visual attention.",
      "The study validated the effectiveness of the FeaturEyeTrack system for gaze-adaptive cartographic maps, demonstrating its potential for intuitive, efficient, and cognitively supportive spatial decision-making.",
      "Future Research Directions:",
      "Implementing FeaturEyeTrack in real-world navigation systems and location-based services.",
      "Expanding FeaturEyeTrack to multimodal interactions with voice commands and tactile feedback.",
      "Investigating personalized gaze-adaptive systems to match individual search behavior and decision-making styles."
    ]
  },
  {
    "study": "Golebiowska et al. (2016)",
    "articleTitle": "For your eyes only? Evaluating a coordinated and multiple views tool with a map, a parallel coordinated plot and a table using an eye-tracking approach",
    "year": 2016,
    "doi": "10.1080/13658816.2016.1191636",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Eye-tracking (to capture visual attention and analyse how users interact with a CMV tool)",
      "Usability Testing (combining eye-tracking data with usability metrics like response time and accuracy)",
      "Comparative Analysis (comparing the use of maps, PCPs, and tables for different types of tasks)",
      "Areas of Interest (AOI) Analysis (to analyse attention allocation and fixation transitions)",
      "Sequence Alignment Analysis (SAA) (to identify patterns in visual behavior)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Within-subjects design"
    ],
    "eyeTrackingDevices": [
      "SMI RED500 (120 Hz, remote eye-tracker)"
    ],
    "evaluationSoftware": [
      "SMI Experiment Suite 360° for data collection",
      "BeGaze Software for eye-tracking data analysis",
      "ClustalG Software for sequence alignment analysis",
      "EMAAT (Eye Movement AOI Aggregation Tool) for visualizing AOI fixations over task execution time"
    ],
    "taskTypes": [
      "Retrieve value tasks (e.g., finding specific data values in the table or map)",
      "Filter tasks (e.g., identifying municipalities with high vulnerability indices)",
      "Characterize distribution tasks (e.g., understanding data distributions in geographical regions)",
      "Correlate tasks (e.g., identifying relationships between different indices)",
      "Find anomalies tasks (e.g., spotting outlier municipalities in terms of exposure to natural hazards)"
    ],
    "numberOfParticipants": [
      "29"
    ],
    "stimuli": [
      "Coordinated and Multiple Views (CMV) Tool with:",
      "Map View (showing geographical data with dynamic linking to other views)",
      "Parallel Coordinate Plot (PCP) (for multivariate analysis)",
      "Table View (for raw data access and sorting)",
      "Integrated Vulnerability Data for Norway:",
      "Indices on Exposure to Floods, Landslides, and Storms",
      "Indices of Social Vulnerability",
      "Dynamic Linking Between Views (e.g., brushing and linking, highlighting, and interactive filtering)"
    ],
    "stimulusDevices": [
      "Desktop Computer with 21-inch display (1680 × 1024 resolution)",
      "SMI RED500 Eye Tracker",
      "Web-based CMV Tool with interactive data visualization and dynamic linking"
    ],
    "findings": [
      "Participants used all three visualization methods (map, PCP, table) for most tasks, showing no aversion to the PCP despite its perceived complexity.",
      "Eye-tracking Analysis:",
      "AOI Analysis showed that the table view received the longest fixation duration, especially for filtering and retrieval tasks.",
      "PCP and Map Views were preferred for distribution and correlation tasks, with PCP being effective for multivariate analysis.",
      "Sequence Alignment Analysis (SAA):",
      "Participants exhibited different visual strategies based on the task:",
      "Map-oriented, PCP-oriented, and table-oriented strategies were identified.",
      "Flexibility in Visualization Use: Participants often changed their strategy based on the task type.",
      "Task Performance and Efficiency:",
      "Retrieve and Filter tasks were completed faster using the table view, supporting rapid data access and sorting.",
      "Multivariate tasks (e.g., Find Anomalies) were best supported by the PCP, with participants showing higher accuracy.",
      "Correlate tasks showed the highest cognitive load, with longer response times when switching from the table to the map view.",
      "User Preferences and Feedback:",
      "Participants appreciated the freedom to choose between visualization methods, allowing them to adapt strategies based on task requirements.",
      "Dynamic linking and brushing between views enhanced cognitive mapping and task efficiency.",
      "Applications and Use Cases:",
      "Geovisualisation Tools: Supporting analytical tasks in hazard vulnerability analysis, urban planning, and spatial decision-making.",
      "Interactive Dashboards: Applying CMV tools for data analysis and exploration in scientific research and public administration.",
      "Recommendations for CMV Tool Design:",
      "Provide dynamic linking and brushing functionalities to enhance cognitive efficiency.",
      "Use interactive PCPs for multivariate analysis, especially when paired with maps and tables.",
      "Implement context-aware adaptation to support task-specific visualization needs.",
      "Cognitive and Design Insights:",
      "Cognitive load increases when users switch between views, but dynamic linking can reduce cognitive effort.",
      "Providing multiple visualization methods within a CMV tool enables adaptability and cognitive support for complex spatial tasks.",
      "The study validated the effectiveness of using eye-tracking for evaluating CMV tools, providing insights into visual attention, cognitive load, and usability.",
      "Future Research Directions:",
      "Investigating adaptive CMV tools that change visualization methods based on user behavior.",
      "Expanding the CMV framework to include advanced visual analytics for big data and real-time geospatial analysis.",
      "Applying eye-tracking data to develop machine learning models for predictive visualization adaptation."
    ]
  },
  {
    "study": "Golebiowska et al. (2020)",
    "articleTitle": "Breaking the Eyes: How Do Users Get Started with a Coordinated and Multiple View Geovisualisation Tool?",
    "year": 2020,
    "doi": "10.1080/00087041.2019.1660513",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Eye-tracking (to capture visual attention and analyse how users interact with a CMV tool)",
      "Usability Testing (combining eye-tracking data with usability metrics like fixation duration and time to first fixation)",
      "Interaction Logs (to capture user interactions with dynamic linking and brushing)",
      "Think-Aloud Protocols (to understand user cognitive processes and problem-solving strategies)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Within-subjects design"
    ],
    "eyeTrackingDevices": [
      "SMI RED500 (120 Hz, remote eye-tracker)"
    ],
    "evaluationSoftware": [
      "SMI Experiment Suite 360° for data collection",
      "BeGaze Software for eye-tracking data analysis",
      "ELAN 3.7.2 for synchronizing eye-gaze recordings with video recordings of verbalizations"
    ],
    "taskTypes": [
      "Free exploration tasks (e.g., exploring the CMV interface without guidance)",
      "Visual attention tasks (e.g., identifying elements that attract attention)",
      "Interaction tasks (e.g., dynamic linking and brushing interactions)"
    ],
    "numberOfParticipants": [
      "29"
    ],
    "stimuli": [
      "Coordinated and Multiple Views (CMV) Tool with:",
      "Map View (univariate choropleth maps)",
      "Parallel Coordinate Plot (PCP) (multivariate analysis)",
      "Table View (raw data display)",
      "Integrated Vulnerability Data for Norwegian Municipalities:",
      "Exposure to Floods, Landslides, and Storms",
      "Social Vulnerability Indices",
      "Dynamic Linking Between Views (e.g., brushing and linking, highlighting, and interactive filtering)"
    ],
    "stimulusDevices": [
      "Desktop Computer with 21-inch display (1680 × 1024 resolution)",
      "SMI RED500 Eye Tracker",
      "Web-based CMV Tool with interactive data visualization and dynamic linking"
    ],
    "findings": [
      "Dynamic Linking and Brushing:",
      "66% of participants discovered dynamic linking spontaneously, but the rest continued to analyse views separately.",
      "Dynamic linking significantly enhanced usability once discovered, helping users perceive the tool as less complex.",
      "Visual Attention Analysis:",
      "PCP attracted the most attention with the shortest time to first fixation, followed by the Map and Table views.",
      "Participants focused on explanatory elements like labels, legends, and headers to understand the tool’s functionality.",
      "Heatmaps showed high fixation density on dynamic elements like the map legend and interactive pop-up windows.",
      "Interaction Behaviour:",
      "Participants hesitated to interact at the beginning, with the average time to first mouse click being 61.4 seconds.",
      "Most interactions involved:",
      "Selecting municipalities on the map (72% of participants)",
      "Scrolling and selecting rows in the table (52% of participants)",
      "Filtering polylines in the PCP (48% of participants)",
      "Visual clutter in the PCP led to lower interaction rates compared to the map and table views.",
      "Usability and Cognitive Load:",
      "PCP was perceived as the most confusing view, causing cognitive overload due to visual clutter and overlapping polylines.",
      "Dynamic linking was the key to reducing cognitive load, enabling users to understand complex multivariate relationships.",
      "User Preferences and Feedback:",
      "Participants preferred the Map View for exploration and Table View for exact values.",
      "PCP was rated as the most confusing but effective for multivariate analysis once dynamic linking was understood.",
      "Participants suggested better visual explanations and more intuitive labels to improve learnability.",
      "Applications and Use Cases:",
      "Geovisualisation Tools: Supporting exploratory data analysis and spatial decision-making.",
      "Educational Tools: Applying CMV tools for teaching geography and spatial analysis.",
      "Recommendations for CMV Tool Design:",
      "Provide clear explanations for dynamic linking and brushing.",
      "Use large informative labels and contextual tooltips for enhanced learnability.",
      "Reduce visual clutter in PCPs by highlighting relevant polylines and using transparent lines for less important data.",
      "Cognitive and Design Insights:",
      "Dynamic linking and brushing enhance cognitive efficiency and usability by integrating multiple views.",
      "Explanatory elements (e.g., legends and labels) play a crucial role in learning complex geovisualization tools.",
      "Visual clutter leads to cognitive overload, especially in PCPs with overlapping polylines.",
      "The study validated the effectiveness of using eye-tracking for evaluating CMV tools, providing insights into visual attention, cognitive load, and usability.",
      "Future Research Directions:",
      "Investigating adaptive CMV tools that change visualization methods based on user behaviour.",
      "Expanding the CMV framework to include advanced visual analytics for big data and real-time geospatial analysis.",
      "Applying eye-tracking data to develop machine learning models for predictive visualization adaptation."
    ]
  },
  {
    "study": "Herman at al. (2017)",
    "articleTitle": "Eye-tracking Analysis of Interactive 3D Geovisualisation",
    "year": 2017,
    "doi": "10.16910/jemr.10.3.2",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Eye-tracking (to capture visual attention and gaze patterns on 3D geovisualizations)",
      "3DgazeR Framework (for calculating 3D gaze coordinates and analysing interactive 3D models)",
      "Comparative Analysis (comparing different visualization techniques: 3D raw data, 3D scanpath, 3D attention map, animation, and Z coordinate variation graph)",
      "Usability Testing (to evaluate the effectiveness and cognitive efficiency of 3D geovisualizations)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Within-subjects design"
    ],
    "eyeTrackingDevices": [
      "SMI RED 250 (120 Hz, remote eye-tracker) and EyeTribe Tracker (60 Hz, low-cost eye-tracker)"
    ],
    "evaluationSoftware": [
      "3DgazeR System for calculating 3D gaze coordinates",
      "OGAMA for eye-tracking data collection and fixation detection",
      "QGIS and ArcScene for visualization and geospatial analysis",
      "X3DOM for interactive 3D rendering"
    ],
    "taskTypes": [
      "Spatial orientation tasks (e.g., finding the highest elevation or the highest peak)",
      "Visibility analysis tasks (e.g., determining which elements are visible from a given position)",
      "Viewpoint analysis tasks (e.g., identifying from which positions a given object is visible)"
    ],
    "numberOfParticipants": [
      "20"
    ],
    "stimuli": [
      "Interactive 3D Models representing terrain covered with:",
      "Hypsometric Color Scale (Green to Brown)",
      "Satellite Images (Landsat 8)",
      "Two Variants of Stimuli:",
      "Variant A: Terrain with hypsometric color scale without transparency",
      "Variant B: Terrain with 30% transparency and satellite imagery",
      "Four Task Types:",
      "Which object has the highest elevation?",
      "Find the highest peak.",
      "Which elements are visible from the given position?",
      "From which positions is a given object visible?"
    ],
    "stimulusDevices": [
      "Desktop Computer with 1600 × 900 resolution",
      "SMI RED 250 and EyeTribe Tracker for eye-tracking",
      "3DgazeR System integrated with X3DOM and OGAMA"
    ],
    "findings": [
      "3DgazeR effectively calculated 3D gaze coordinates and supported interactive 3D geovisualization analysis:",
      "Automatic mapping of gaze data to 3D coordinates reduced manual annotation time.",
      "High accuracy in matching fixations with 3D models and geographic features.",
      "Comparison of Visualization Techniques:",
      "3D Raw Data: Effective for initial exploratory analysis but suffered from clutter in high-density areas.",
      "3D Scanpath: Provided an overview of fixation sequences and gaze trajectories, revealing spatial exploration patterns.",
      "3D Attention Map: Effective for aggregating attention patterns across participants, highlighting important visual areas.",
      "Animation: Useful for visualizing temporal dynamics of gaze movements and cognitive strategies.",
      "Z Coordinate Variation Graph: Provided insights into spatial cognition and elevation perception during tasks.",
      "Task Performance and Cognitive Load:",
      "Variant B (with satellite imagery and transparency) led to better task performance and lower cognitive load.",
      "Transparency enhanced perception of spatial relationships and improved depth perception.",
      "Cartographic novices showed longer fixation durations and more dispersed gaze patterns, indicating higher cognitive load.",
      "Spatial Decision-Making and Visual Attention:",
      "Gaze patterns revealed distinct spatial strategies based on participant expertise:",
      "Cartographic experts used top-down analytical strategies, focusing on elevation patterns and terrain forms.",
      "Novices employed bottom-up exploration, with more random gaze movements and repetitive scanning.",
      "Areas of Interest (AOI) Analysis showed that 3D landmarks received the most visual attention, followed by spatial boundaries and elevation peaks.",
      "User Preferences and Feedback:",
      "Participants preferred Variant B for its realistic representation and better depth perception.",
      "Variant A was perceived as more abstract and less intuitive for spatial orientation tasks.",
      "Applications and Use Cases:",
      "3D Geovisualisation: Enhancing usability and cognitive efficiency for geographic information systems (GIS).",
      "Virtual Reality and AR: Applying 3D gaze data for immersive geospatial exploration.",
      "Cartographic Education: Using interactive 3D geovisualizations for teaching spatial cognition.",
      "Recommendations for 3D Geovisualisation Design:",
      "Use 3D attention maps for aggregating visual attention in multiscale geovisualizations.",
      "Implement interactive transparency controls to enhance depth perception and cognitive mapping.",
      "Design gaze-adaptive 3D interfaces to reduce cognitive load and improve usability.",
      "Cognitive and Design Insights:",
      "3D geovisualizations support spatial cognition by integrating visual attention with dynamic interactions.",
      "Transparency and realistic textures enhance depth perception and spatial decision-making.",
      "The study validated the effectiveness of the 3DgazeR system for interactive 3D geovisualization analysis, demonstrating its potential for intuitive and efficient spatial cognition research.",
      "Future Research Directions:",
      "Extending 3DgazeR to support immersive VR environments and 360-degree geovisualizations.",
      "Applying machine learning for pattern recognition in 3D gaze data.",
      "Investigating adaptive 3D interfaces that dynamically respond to gaze patterns and cognitive load."
    ]
  },
  {
    "study": "Horbinski et al. (2020)",
    "articleTitle": "Graphic Design and Button Placement for Mobile Map Applications",
    "year": 2020,
    "doi": "10.1080/00087041.2019.1631008",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 1,
    "mainMethods": [
      "Usability Testing (to evaluate user preferences and effectiveness of button placements)",
      "Comparative Analysis (comparing button placements and designs across six popular web mapping services)",
      "Online Survey (to gather user preferences for the number and placement of buttons)",
      "Graphical Analysis (analysing graphical designs of buttons across web mapping services)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Between-subjects design"
    ],
    "eyeTrackingDevices": [
      "Not applicable"
    ],
    "evaluationSoftware": [
      "Web-based Survey Platform for collecting user preferences",
      "Manual Analysis for comparing button designs and placements"
    ],
    "taskTypes": [
      "Recognition tasks (e.g., identifying buttons by function and design)",
      "Preference tasks (e.g., selecting preferred button placements)",
      "Arrangement tasks (e.g., arranging buttons in optimal positions on a mobile map)"
    ],
    "numberOfParticipants": [
      "100"
    ],
    "stimuli": [
      "Six Web Mapping Services:",
      "Google Maps (most popular with 100% usage among participants)",
      "Bing Maps",
      "WeGo HERE",
      "OpenStreetMap",
      "ArcGIS Map",
      "Geoportal.gov.pl (local mapping service in Poland)",
      "Uniformly Designed Buttons (created for consistent comparison across services)",
      "Mock Mobile Map Application (22 button positions for arranging preferences)"
    ],
    "stimulusDevices": [
      "Smartphone Display Simulation (with 22 potential button positions)"
    ],
    "findings": [
      "User Preferences for Button Placement:",
      "Users preferred corner placements on the mobile map, especially in the bottom left corner.",
      "Positions 16, 1, 12, and 5 were the most preferred, aligning with natural thumb movements.",
      "Right-handed users preferred bottom left corner placements, supporting one-handed navigation.",
      "Preferred Number of Buttons:",
      "Six buttons was the most preferred option (47 responses), followed by three buttons (23 responses).",
      "The most frequently chosen buttons were:",
      "Search (99 responses)",
      "Route (98 responses)",
      "Geolocation (97 responses)",
      "Change layers, default range maps, and measure were chosen less frequently.",
      "Button Design and Recognizability:",
      "The Google Maps geolocation button had the highest recognizability (70%).",
      "Change layers from OpenStreetMap was the most recognizable button across services (87%).",
      "Search buttons with a left-tilted loupe were more recognizable (79%) than right-tilted loupes (59%).",
      "Graphical Analysis:",
      "Graphical designs varied greatly between services, even for buttons with similar functions.",
      "Geolocation and search buttons were the most consistent in design across services.",
      "Change layers buttons showed the greatest diversity in graphical design.",
      "Applications and Use Cases:",
      "Mobile Map Applications: Improving usability with optimal button placements and intuitive design.",
      "Web Mapping Services: Applying user-centered design principles for enhanced user experience.",
      "Geovisualisation Design: Guiding UI/UX design for interactive cartographic products.",
      "Recommendations for Mobile Map Design:",
      "Place buttons in bottom corners to optimize usability for one-handed navigation.",
      "Use consistent graphical designs to enhance button recognizability and usability.",
      "Limit the number of buttons to six or fewer to reduce cognitive load and visual clutter.",
      "Cognitive and Design Insights:",
      "Bottom left corner placements align with natural thumb movements, supporting one-handed interaction.",
      "Consistent button design across web mapping services improves cognitive mapping and usability.",
      "Usability Implications and Design Choices:",
      "The study identified a gap between user preferences and current button placements on popular web mapping services.",
      "Most web mapping services place buttons at the top of the screen, contradicting user preferences for bottom placements.",
      "The study validated the importance of user-centered design for mobile map applications, demonstrating that bottom corner placements enhance usability and user experience.",
      "Future Research Directions:",
      "Investigating button placements for left-handed users and ambidextrous designs.",
      "Conducting comparative usability testing between preferred user interfaces and current interfaces in web mapping services.",
      "Expanding the study to older user groups and diverse cultural backgrounds to evaluate cross-cultural usability."
    ]
  },
  {
    "study": "Hsiao at al. (2021)",
    "articleTitle": "A method for the analysis of the interaction between users and objects in 3D navigational space",
    "year": 2021,
    "doi": "10.1016/j.aei.2021.101364",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 4,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Eye-tracking (to capture visual attention, gaze patterns, and spatial navigation)",
      "3D Object Attention Heat Map (to visualize user attention on 3D objects)",
      "Computational Visual Attention Model (for different geometric features using feature curves)",
      "Spatial Navigation Analysis (to evaluate user behavior and cognitive load in 3D navigational space)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Within-subjects design"
    ],
    "eyeTrackingDevices": [
      "Gazepoint GP3 (for 2D screen picture) and HTC Vive (for VR with integrated eye-tracking)"
    ],
    "evaluationSoftware": [
      "Lightweight Java Game Library 3 (LWJGL3) for object rendering and navigation",
      "3D Object Attention Heat Map System for gaze data visualization",
      "Gaussian Filter for smoothing gaze data and reducing noise",
      "Unreal Engine 4 (UE4) for VR system development and validation"
    ],
    "taskTypes": [
      "3D Object Exploration (e.g., rotating and examining 3D models)",
      "Spatial Navigation Tasks (e.g., navigating virtual space and interacting with objects)",
      "Geometric Feature Analysis (e.g., exploring different curvatures and feature curves on 3D objects)"
    ],
    "numberOfParticipants": [
      "16"
    ],
    "stimuli": [
      "3D Objects with Geometric Features:",
      "Controlled Spherical Model (with convex and concave squares, circular and cross features)",
      "Stanford Bunny Model (for case study on object attention)",
      "Apple iPhone Model (to analyse attention on geometric design features)",
      "Virtual Space System:",
      "2D Flat Panel Display (for initial exploration)",
      "Virtual Reality Environment using HTC Vive (for immersive navigation and interaction)",
      "Geometric Feature Analysis:",
      "Feature Curves and Normal Vector Analysis for understanding attention patterns"
    ],
    "stimulusDevices": [
      "Gazepoint GP3 Eye Tracker (for 2D screen navigation)",
      "HTC Vive with Integrated Eye-Tracking (for VR environment)",
      "Desktop Computer with 27-inch 5K Display (for 2D navigation)"
    ],
    "findings": [
      "3D Object Attention Heat Map:",
      "The study introduced a novel 3D object attention heat map to visualize user attention on 3D models.",
      "Gaussian filter effectively smoothed gaze data, reducing noise and improving accuracy.",
      "3D heat maps showed higher attention on convex features and areas with greater curvature changes.",
      "Visual Attention and Spatial Navigation:",
      "Participants demonstrated center field of view (cFOV) concentration, rotating objects to keep geometric features in the center.",
      "Spatial navigation behavior was influenced by geometric features, with users showing higher attention to convex features and cross elements.",
      "Gaze and Interaction Analysis:",
      "Implicit gaze input effectively guided user navigation in virtual space, supporting hands-free interaction.",
      "Eye movement patterns revealed cognitive load variations based on geometric complexity and feature density.",
      "Spatial Cognition and Decision-Making:",
      "Geometric features (e.g., convex curves) attracted higher attention and influenced decision-making during spatial navigation.",
      "Normal vector analysis showed that users rotated objects to align normal vectors with their line of sight.",
      "User Preferences and Feedback:",
      "Participants preferred the HTC Vive VR environment for its natural interaction and immersive navigation experience.",
      "Hands-free gaze interaction was rated as more intuitive and efficient than traditional mouse input.",
      "Applications and Use Cases:",
      "3D Geovisualisation: Enhancing usability and cognitive efficiency for 3D geospatial models.",
      "Virtual and Augmented Reality: Applying 3D gaze data for immersive geospatial exploration.",
      "Human-Computer Interaction (HCI): Developing gaze-based adaptive interfaces for natural user experiences.",
      "Recommendations for 3D Interface Design:",
      "Use 3D attention heat maps for aggregating visual attention in multiscale 3D geovisualizations.",
      "Implement interactive feature curves for geometric exploration and cognitive mapping.",
      "Design gaze-adaptive 3D interfaces to reduce cognitive load and enhance spatial cognition.",
      "Cognitive and Design Insights:",
      "3D object attention heat maps effectively visualize spatial attention and cognitive load in 3D navigational space.",
      "Geometric features (e.g., curvature changes) guide spatial navigation and influence decision-making.",
      "The study validated the effectiveness of the 3D object attention heat map for interactive 3D geovisualization, demonstrating its potential for intuitive and efficient spatial cognition research.",
      "Future Research Directions:",
      "Extending the 3D attention heat map to support immersive VR environments and 360-degree geovisualizations.",
      "Applying machine learning for pattern recognition in 3D gaze data.",
      "Investigating adaptive 3D interfaces that dynamically respond to gaze patterns and cognitive load."
    ]
  },
  {
    "study": "Chen and Jin (2017)",
    "articleTitle": "Statistical modeling for visualization evaluation through data fusion",
    "year": 2017,
    "doi": "10.1016/j.apergo.2016.12.016",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 4,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Eye-tracking (to measure visual attention and cognitive load)",
      "EEG (Electroencephalogram) (to assess mental workload and cognitive processing)",
      "Mouse Motion Tracking (to evaluate navigation patterns and user interactions)",
      "Data Fusion Model (integrating eye-tracking, EEG, and mouse data for visualization evaluation)",
      "Regularized Linear Regression Model (using Lasso for feature selection and data fusion)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Within-subjects design"
    ],
    "eyeTrackingDevices": [
      "SMI REDn Remote Eye Tracker (20 Hz)"
    ],
    "evaluationSoftware": [
      "ABM B-Alert X10 for EEG data collection",
      "SMI Experiment Suite 360° for eye-tracking data collection",
      "Custom Logging System for mouse tracking and user interactions",
      "Regularized Linear Regression Model using Lasso for feature selection"
    ],
    "taskTypes": [
      "Free Exploration Tasks (to learn the data sets and visualization structure)",
      "Search tasks (e.g., finding nodes with given names)",
      "Parent Identification tasks (e.g., finding direct parent nodes)",
      "Count tasks (e.g., counting total number of children nodes)"
    ],
    "numberOfParticipants": [
      "15"
    ],
    "stimuli": [
      "Three Hierarchical Visualization Designs:",
      "Static Node-Link Tree (showing all hierarchical information without interactions)",
      "Collapsible Node-Link Tree (allowing branches to expand/collapse on click)",
      "Zoomable Pack Layout (interactive nested circles with zoom in/out functionality)",
      "Hierarchical Data Sets:",
      "252 English Names arranged in a hierarchical tree structure",
      "Three Data Sets mapped to the hierarchical structure using D3.js visualization library",
      "Dynamic Interaction Elements:",
      "Mouse Hover and Click Interactions for expanding/collapsing nodes and zooming in/out"
    ],
    "stimulusDevices": [
      "Desktop Computer with 1920×1200 resolution",
      "SMI REDn Remote Eye Tracker (20 Hz)",
      "ABM B-Alert X10 Wireless EEG Headset (256 Hz, 10 channels)",
      "Custom Logging System for mouse tracking"
    ],
    "findings": [
      "Data Fusion Model effectively integrated eye-tracking, EEG, and mouse data for visualization evaluation, achieving:",
      "Higher accuracy in cognitive load prediction compared to using single sensing data",
      "Reduced noise and improved feature selection through Lasso Regularization",
      "Hierarchical Visualization Design Comparison:",
      "Static Node-Link Tree was found to be most efficient with the lowest cognitive load due to its simplicity.",
      "Zoomable Pack Layout had the highest cognitive load and longest task completion times, indicating cognitive overload due to complex interactions.",
      "Collapsible Node-Link Tree showed intermediate cognitive load, supporting contextual exploration but requiring mental model construction.",
      "Eye-tracking Analysis:",
      "AOI Analysis revealed longer fixation durations on nodes requiring mental calculations.",
      "Gaze transitions indicated hierarchical navigation patterns, with users scanning from root nodes to leaf nodes.",
      "EEG Analysis:",
      "Gamma and Alpha bands were identified as significant predictors of cognitive load.",
      "Wavelet entropy and nonlinear energy were effective features for mental workload analysis.",
      "Mouse Motion Analysis:",
      "Mouse events (clicks and hover interactions) were correlated with visual attention shifts and decision points.",
      "Mouse path distances indicated exploration strategies, with longer paths associated with higher cognitive load.",
      "Feature Selection and Modeling:",
      "Lasso Regularization effectively selected relevant features, reducing model complexity.",
      "EEG and eye-tracking data were more predictive of cognitive load compared to mouse data alone.",
      "User Preferences and Feedback:",
      "Participants preferred the Static Node-Link Tree for its simplicity and ease of use.",
      "Zoomable Pack Layout was rated as the most engaging but also the most mentally demanding.",
      "Applications and Use Cases:",
      "Data Visualization Evaluation: Applying data fusion models for cognitive load prediction and usability evaluation.",
      "Human-Computer Interaction (HCI): Integrating EEG and eye-tracking for real-time cognitive feedback.",
      "Adaptive User Interfaces: Using data fusion insights to personalize user experience and reduce cognitive load.",
      "Recommendations for Visualization Design:",
      "Use Static Node-Link Trees for information-heavy tasks requiring low cognitive load.",
      "Implement Collapsible Trees for contextual exploration with minimal cognitive overhead.",
      "Avoid Zoomable Pack Layouts in cognitively demanding tasks due to mental model construction requirements.",
      "Cognitive and Design Insights:",
      "Data fusion models provide a comprehensive understanding of cognitive processing and user interactions.",
      "Hierarchical navigation patterns are influenced by visual attention shifts, mental workload, and interaction strategies.",
      "The study validated the effectiveness of the data fusion model for quantitative visualization evaluation, demonstrating its potential for real-time cognitive feedback and user-centered design.",
      "Future Research Directions:",
      "Applying the data fusion model to real-world applications in information visualization and geovisualization.",
      "Investigating personalized models for adaptive user interfaces using cognitive load predictions.",
      "Expanding the data fusion framework to immersive environments like AR/VR interfaces and 3D geovisualizations."
    ]
  },
  {
    "study": "Choi et al. (2024)",
    "articleTitle": "WEB-BASED 3D HEATMAP VISUALIZATION OF SPATIAL COGNITION USING EEG AND EYE TRACKING DATA",
    "year": 2024,
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Eye-tracking (to capture visual attention, gaze patterns, and areas of interest)",
      "EEG (Electroencephalography) (to assess cognitive load, emotional responses, and brain wave activity)",
      "3D Heatmap Visualization (using Cesium and WebGL for spatial cognition analysis)",
      "Synchronized Time-Series Analysis (combining eye-tracking and EEG data for dynamic cognitive mapping)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Within-subjects design"
    ],
    "eyeTrackingDevices": [
      "Tobii Glasses 2 (50 Hz)"
    ],
    "evaluationSoftware": [
      "OpenBCI's 8-channel board tool for EEG data collection (250 Hz)",
      "Cesium (WebGL library) for 3D heatmap visualization and spatial cognition analysis",
      "MNE-Python for EEG data processing and power spectral density (PSD) analysis",
      "Time-series synchronization for combining EEG and eye-tracking data"
    ],
    "taskTypes": [
      "Visual exploration tasks (e.g., observing architectural elements and spatial layouts)",
      "Attention and memory tasks (e.g., recalling elements viewed in the environment)",
      "Emotional response tasks (e.g., experiencing varying spatial configurations)"
    ],
    "numberOfParticipants": [
      "Not specified"
    ],
    "stimuli": [
      "Architectural Environment: \"Donor Wall\" in a lobby with mosaic tiles of varying sizes and colors",
      "AOI (Areas of Interest): Defined by donation amounts:",
      "100 Million Won (Yellow)",
      "50 Million Won (Orange)",
      "20 Million Won (Red)",
      "10 Million Won (Green)",
      "5 Million Won (Blue)",
      "Title (Sky)",
      "3D PointCloud Visualization:",
      "Cesium-based 3D environment with PointCloud as a 3D reference object",
      "Web-based interactive heatmap showing gaze and emotional responses"
    ],
    "stimulusDevices": [
      "Tobii Glasses 2 (50 Hz) for eye-tracking",
      "OpenBCI's 8-channel board tool (250 Hz) for EEG data collection",
      "Web-based 3D PointCloud Visualization using Cesium and WebGL"
    ],
    "findings": [
      "3D Heatmap Visualization:",
      "Cesium-based 3D visualization effectively demonstrated the interaction between cognitive responses and architectural elements.",
      "Dynamic heatmaps revealed gaze concentration and emotional responses at different AOIs.",
      "Eye-tracking Analysis:",
      "Fixation count and gaze duration were highest on 100 Million Won and 50 Million Won AOIs, suggesting attention to prominent colors and sizes.",
      "Low fixation but long attention span on 5 Million Won AOI was linked to high information density, requiring concentration and cognitive processing.",
      "EEG Analysis:",
      "Alpha Wave Analysis:",
      "High alpha wave activity around high donation amounts (100M and 50M Won) indicated impression and focus.",
      "Alpha waves were associated with relaxed and attentive states.",
      "Beta Wave Analysis:",
      "High beta wave activity was distributed across complex visual elements, indicating tension and cognitive load.",
      "Beta waves were linked to stress and alertness in visually stimulating environments.",
      "Cognitive Load and Emotional Responses:",
      "High cognitive load was observed in visually complex areas, reflected by beta wave distribution and longer gaze durations.",
      "Emotional responses varied by color and size of donation amounts, influencing visual attention and cognitive processing.",
      "Synchronized Time-Series Analysis:",
      "Temporal synchronization between EEG and eye-tracking data provided insights into dynamic cognitive processes.",
      "Alpha and beta wave patterns were linked to gaze points and emotional responses over time.",
      "Applications and Use Cases:",
      "Architectural Design: Enhancing user experience and emotional engagement with cognitively adaptive environments.",
      "Spatial Cognition Research: Investigating cognitive load and emotional responses in 3D geovisualizations.",
      "HCI and UX Design: Applying EEG and eye-tracking data for user-centered design and cognitive feedback.",
      "Recommendations for 3D Visualization Design:",
      "Use 3D heatmaps to visualize gaze concentration and emotional states in dynamic environments.",
      "Implement time-series synchronisation to analyse cognitive load and emotional responses over time.",
      "Design adaptive architectural elements that respond to cognitive and emotional states in real-time.",
      "Cognitive and Design Insights:",
      "3D geovisualization effectively supports spatial cognition by integrating gaze patterns and emotional responses.",
      "Color and size influence cognitive processing and emotional engagement in architectural environments.",
      "The study validated the effectiveness of the 3D heatmap visualization for spatial cognition analysis, demonstrating its potential for cognitive feedback and adaptive architecture design.",
      "Future Research Directions:",
      "Expanding to other architectural environments and spatial configurations for emotional and cognitive analysis.",
      "Applying machine learning for real-time adaptive interfaces based on cognitive load and emotional states.",
      "Developing immersive VR and AR environments with real-time EEG and eye-tracking integration."
    ]
  },
  {
    "study": "Juřík et al. (2016)",
    "articleTitle": "COGNITIVE ASPECTS OF COLLABORATION IN 3D VIRTUAL ENVIRONMENTS",
    "year": 2016,
    "doi": "10.5194/isprsarchives-XLI-B2-663-2016",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 4,
    "mainMethods": [
      "3D Virtual Environment Interaction (to evaluate cognitive workload, situation awareness, and collaborative decision-making)",
      "Usability Testing (to assess the effectiveness of 3D geovisualizations for collaborative spatial tasks)",
      "Collaborative Task Analysis (to evaluate group strategies and communication effectiveness)",
      "Human Error Analysis (to study cognitive workload and decision-making in high-risk environments)"
    ],
    "studyWithExperiment": "ONLY METHODOLOGY (This is a conceptual paper discussing methodological approaches and frameworks for evaluating 3D virtual environments)",
    "experimentDesign": [
      "Not applicable"
    ],
    "eyeTrackingDevices": [
      "Not specified (Discusses general usage of eye-tracking for analysing visual attention and spots of interest)"
    ],
    "evaluationSoftware": [
      "Not specified (Mentions general usage of virtual environments and 3D geovisualization tools)"
    ],
    "taskTypes": [
      "Collaborative spatial tasks (e.g., solving spatial problems in 3D virtual environments)",
      "Decision-making tasks (e.g., evaluating different spatial strategies for group collaboration)",
      "Situation awareness tasks (e.g., maintaining awareness of spatial elements in 3D environments)"
    ],
    "numberOfParticipants": [
      "Not applicable (No participants; the study is conceptual and focuses on methodological issues)"
    ],
    "stimuli": [
      "3D Virtual Environments:",
      "Multi-User Virtual Environments (MUVEs) for collaborative decision-making",
      "3D Maps and Geovisualisations for spatial awareness and cognitive workload analysis",
      "Avatars and Virtual Agents for interactive collaboration and communication",
      "Collaborative Interaction Scenarios:",
      "Crisis Management (e.g., emergency response and disaster management)",
      "Aviation and Vehicular Traffic (e.g., air traffic control and navigation tasks)"
    ],
    "stimulusDevices": [
      "3D Virtual Environment Platforms (e.g., Unity 3D, VRECKO)",
      "Multi-User Collaborative Systems for virtual interactions",
      "Potential Use of Eye-Tracking and MoCap for analysing visual attention and motor activity"
    ],
    "findings": [
      "3D Virtual Environments (VEs) are highly effective for collaborative decision-making and cognitive workload analysis, especially in high-risk and spatially complex tasks.",
      "Human Error and Cognitive Workload:",
      "Cognitive workload is influenced by the complexity of 3D visualizations and the level of immersion.",
      "Human error increases with higher cognitive workload and complex decision-making tasks.",
      "Multi-user collaboration in 3D VEs introduces communication challenges but enhances situation awareness and spatial decision-making.",
      "Spatial Cognition and Collaboration:",
      "Spatial cognition is enhanced by dynamic interactions and immersive geovisualizations.",
      "Multi-User Virtual Environments (MUVEs) facilitate collaborative problem-solving and information sharing.",
      "Avatars and virtual agents enhance social presence and communication effectiveness.",
      "Applications and Use Cases:",
      "Crisis Management and Disaster Response: Supporting collaborative decision-making and real-time spatial awareness.",
      "Aviation and Traffic Control: Enhancing situation awareness and cognitive efficiency in high-risk environments.",
      "Geovisualisation Design: Applying 3D geovisualizations for spatial decision support and collaborative tasks.",
      "Recommendations for 3D VE Design:",
      "Implement dynamic interactions and immersive geovisualizations to enhance cognitive mapping and spatial cognition.",
      "Use avatars and virtual agents to enhance social presence and communication effectiveness.",
      "Design collaborative interaction scenarios that reduce cognitive workload and enhance situation awareness.",
      "Cognitive and Design Insights:",
      "3D virtual environments support cognitive mapping and situation awareness by integrating dynamic interactions and collaborative tasks.",
      "Multi-User Virtual Environments (MUVEs) provide social presence and communication effectiveness, enhancing collaborative decision-making.",
      "The study validated the effectiveness of 3D virtual environments for collaborative spatial decision-making, demonstrating their potential for cognitive workload analysis and situation awareness.",
      "Future Research Directions:",
      "Implementing real-time cognitive workload analysis using EEG and eye-tracking in 3D VEs.",
      "Investigating collaborative decision-making strategies and social interactions in Multi-User Virtual Environments (MUVEs).",
      "Developing adaptive 3D VE interfaces that dynamically respond to cognitive workload and collaborative behavior."
    ]
  },
  {
    "study": "Keskin and Kettunen (2023)",
    "articleTitle": "Potential of eye-tracking for interactive geovisual exploration aided by machine learning",
    "year": 2023,
    "doi": "10.1080/23729333.2022.2150379",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Eye-tracking (to capture gaze patterns and visual attention during geovisual exploration)",
      "Machine Learning (for processing eye-tracking data and adapting geovisualizations)",
      "Gaze-Aware Interactive Map System (GAIMS) (to learn from and adapt to user behavior)",
      "Literature Review and Conceptual Framework (to propose a new system for gaze-based geovisual exploration)"
    ],
    "studyWithExperiment": "ONLY METHODOLOGY (This is a conceptual and review paper without an experimental study)",
    "experimentDesign": [
      "Not applicable (No experimental design; the study is a literature review and conceptual framework)"
    ],
    "eyeTrackingDevices": [
      "Not specified (Conceptual discussion on using eye-tracking for geovisual exploration)"
    ],
    "evaluationSoftware": [
      "Not specified (Focuses on conceptual integration of eye-tracking with machine learning)"
    ],
    "taskTypes": [
      "Not applicable (No tasks performed; the study proposes interactive tasks for gaze-aware systems)"
    ],
    "numberOfParticipants": [
      "Not applicable (No participants; the study is a methodological and conceptual paper)"
    ],
    "stimuli": [
      "Gaze-Aware Interactive Map System (GAIMS):",
      "Conceptual system that learns from and adapts to user behavior using eye-tracking and machine learning",
      "Interactive vector geospatial data exploration using attention-driven visualization adaptation",
      "Dynamic geovisualization with highlighting, clustering, and pattern detection based on gaze behavior"
    ],
    "stimulusDevices": [
      "Not applicable (No specific device used; the study discusses general gaze-based interaction)"
    ],
    "findings": [
      "Gaze-Aware Interactive Map System (GAIMS):",
      "Proposed a conceptual system to learn from and adapt to user behavior using eye-tracking and machine learning.",
      "GAIMS enables dynamic visualization adaptation by highlighting vector features that receive the most attention.",
      "Utilizes machine learning to cluster map features with similar characteristics, enhancing geoexploration.",
      "Eye-Tracking and Machine Learning Integration:",
      "Eye-tracking is used for real-time detection of visual attention and gaze patterns.",
      "Machine learning clusters similar features based on vector characteristics (e.g., curvature, length, and segmentation).",
      "Revisualization is achieved by highlighting vector features that have similar attributes to those receiving high attention.",
      "Geoexploration and Cognitive Processes:",
      "GAIMS enhances geoexploration by guiding users’ attention to unexamined areas.",
      "Dynamic highlighting steers users’ focus to unseen features, improving pattern recognition and cognitive mapping.",
      "Usability and User Experience:",
      "User experience is enhanced through adaptive visualizations tailored to individual cognitive behavior.",
      "GAIMS reduces cognitive load by highlighting relevant features, allowing users to focus on areas of interest.",
      "Applications and Use Cases:",
      "Geovisual Exploration: Assisting users in discovering unknown patterns and exploring vector geospatial data.",
      "Dynamic Geovisualisation: Applying gaze-aware adaptive visualization for interactive map systems.",
      "Human-Computer Interaction (HCI): Developing user-centered geovisualizations that adapt to cognitive behavior.",
      "Recommendations for Gaze-Aware Geovisualisation:",
      "Implement real-time gaze tracking for adaptive visualization and attention-driven geovisual exploration.",
      "Use machine learning for clustering vector features and dynamic pattern recognition.",
      "Design gaze-aware interfaces that personalize user experience and reduce cognitive overload.",
      "Cognitive and Design Insights:",
      "Gaze-aware interaction supports cognitive mapping and pattern recognition by guiding visual attention.",
      "Dynamic visualization adaptation enhances spatial cognition and geoexploration efficiency.",
      "The study validated the potential of eye-tracking and machine learning for gaze-aware interactive geovisual exploration, demonstrating its promise for adaptive geovisualization systems.",
      "Future Research Directions:",
      "Implementing GAIMS in real-world applications for interactive vector geospatial data exploration.",
      "Combining gaze-aware systems with machine learning for personalized geovisualization and cognitive feedback.",
      "Investigating gaze-driven pattern recognition for dynamic geospatial data and interactive cartography."
    ]
  },
  {
    "study": "Kiefer et al. (2013)",
    "articleTitle": "Using eye movements to recognize activities on cartographic maps",
    "year": 2013,
    "doi": "10.1145/2525314.2525467",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Eye-tracking (to capture eye movements and recognize activities on cartographic maps)",
      "Activity Recognition (using Support Vector Machine (SVM) classifier to recognize six different map activities)",
      "Gaze-Based Assistance (to support gaze-based interaction on maps)",
      "Machine Learning (SVM classification with 229 features extracted from eye movement data)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Within-subjects design"
    ],
    "eyeTrackingDevices": [
      "SMI Head-Mounted Eye Tracking Glasses (30 Hz)"
    ],
    "evaluationSoftware": [
      "SMI Experiment Suite for eye-tracking data collection",
      "LibSVM Package for training and validating the SVM classifier",
      "Custom Software Framework for experimental control and stimulus presentation"
    ],
    "taskTypes": [
      "Free exploration (exploring the map without a specific goal)",
      "Global search (searching for a point of interest)",
      "Route planning (planning the shortest route between two points)",
      "Focused search (finding the three closest objects to a given location)",
      "Line following (following a line and counting intersections)",
      "Polygon comparison (comparing areas of two polygons and naming the bigger one)"
    ],
    "numberOfParticipants": [
      "17"
    ],
    "stimuli": [
      "Google Maps in Classical Style (to ensure familiarity with the cartographic product)",
      "Stimuli from Germany and Austria (to avoid geographical familiarity but maintain cultural context)",
      "Six Tasks with Different Map Activities:",
      "Free exploration: Viewing urban and rural areas without a specific goal",
      "Global search: Searching for points of interest in urban areas",
      "Route planning: Planning the shortest route between two labeled points",
      "Focused search: Searching for the three closest objects from a marked position",
      "Line following: Following a line and counting intersections",
      "Polygon comparison: Comparing areas of two lakes"
    ],
    "stimulusDevices": [
      "SMI Head-Mounted Eye Tracking Glasses (30 Hz)",
      "24” Widescreen Monitor (1920×1200 pixels)",
      "Chin Rest (for stability at a distance of 65 cm)",
      "Custom Software Framework for randomized stimulus presentation and experimental control"
    ],
    "findings": [
      "Activity Recognition Accuracy:",
      "The SVM classifier achieved 77.7% accuracy in recognizing six map activities.",
      "Recall rates were:",
      "Free exploration: 80.4%",
      "Global search: 85.5%",
      "Route planning: 65.0%",
      "Focused search: 63.5%",
      "Line following: 75.3%",
      "Polygon comparison: 98.5%",
      "Classification Features:",
      "229 features were extracted from blinks, fixations, and saccades, including:",
      "Blink-based features: Duration, rate",
      "Fixation-based features: Duration, dispersion, frequency",
      "Saccade-based features: Amplitude, direction, skewness, frequency",
      "Saccadic direction-based features: Cardinal directions and amplitude classifications",
      "String sequence-based features: Pattern recognition in saccadic sequences",
      "Activity Recognition and Cognitive Processes:",
      "Polygon comparison had the highest accuracy due to distinctive inverse saccades.",
      "Focused search had the lowest accuracy due to similarities with global search and free exploration.",
      "Route planning was often confused with line following due to linear feature scanning.",
      "Usability and Cognitive Load:",
      "Free exploration and global search showed high cognitive flexibility, as participants were not restricted to specific areas.",
      "Route planning required cognitive mapping and spatial reasoning for optimal route decisions.",
      "Polygon comparison was the most cognitively focused task, resulting in the highest recall rate.",
      "Applications and Use Cases:",
      "Gaze-Based Assistance on Maps: Enabling context-aware map interfaces that adapt to user activities.",
      "GeoHuman-Computer Interaction (GeoHCI): Supporting cognitive mapping and spatial decision-making.",
      "Adaptive Cartographic Interfaces: Implementing implicit gaze-based interactions for dynamic geovisualization.",
      "Recommendations for Gaze-Based Map Interfaces:",
      "Use SVM classifiers to recognize map activities and adapt geovisualizations in real time.",
      "Implement gaze-based assistance for contextual interactions and cognitive efficiency.",
      "Design gaze-aware geovisualizations that reduce cognitive load and enhance usability.",
      "Cognitive and Design Insights:",
      "Gaze patterns reflect cognitive strategies and visual attention shifts for different map activities.",
      "Activity recognition supports adaptive geovisualizations by anticipating user needs and reducing interaction friction.",
      "The study validated the effectiveness of using SVM classifiers for recognizing map activities from eye movements, demonstrating its potential for gaze-based assistance and adaptive cartographic interfaces.",
      "Future Research Directions:",
      "Expanding the classifier to support other cartographic products and geospatial tasks.",
      "Improving activity recognition by integrating multimodal sensing (e.g., EEG, mouse tracking).",
      "Developing adaptive gaze-based interfaces that personalize geovisualizations and reduce cognitive load."
    ]
  },
  {
    "study": "Kiefer et al. (2017)",
    "articleTitle": "Eye tracking for spatial research: Cognition, computation, challenges",
    "year": 2017,
    "doi": "10.1080/13875868.2016.1254634",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Eye-tracking (to capture visual attention, gaze patterns, and cognitive processing in spatial tasks)",
      "Gaze-Based Interaction (using gaze as an input modality for geovisualization and human-computer interaction)",
      "Literature Review (comprehensive overview of eye-tracking research in spatial cognition and geovisualization)",
      "Conceptual Framework (proposing future directions for eye-tracking research in spatial cognition and HCI)"
    ],
    "studyWithExperiment": "ONLY METHODOLOGY (This is a review and conceptual paper without an experimental study)",
    "experimentDesign": [
      "Not applicable (No experimental design; the study is a literature review and conceptual framework)"
    ],
    "eyeTrackingDevices": [
      "Not specified (Discusses general usage of eye-tracking for spatial cognition and HCI)"
    ],
    "evaluationSoftware": [
      "Not specified (Focuses on conceptual integration of eye-tracking with spatial cognition and HCI)"
    ],
    "taskTypes": [
      "Not applicable (No tasks performed; the study proposes conceptual tasks for spatial cognition research)"
    ],
    "numberOfParticipants": [
      "Not applicable (No participants; the study is a methodological and conceptual paper)"
    ],
    "stimuli": [
      "Cartographic Maps and Geo-Visualizations:",
      "Digital Maps and Web Maps (for spatial cognition and navigation)",
      "Interactive Maps and Dynamic Visualizations (for cognitive processing and decision-making)",
      "Wayfinding Aids and Landmarks (for navigation and spatial decision-making)",
      "Eye-Tracking Paradigms:",
      "Visual Attention Analysis (to understand spatial cognition)",
      "Scanpath Analysis (to study cognitive processing in navigation)",
      "Fixation Duration and Saccadic Movements (to evaluate cognitive load and decision-making)",
      "Gaze-Based Interaction Scenarios:",
      "GeoFoveation (using gaze to display relevant geospatial information)",
      "GeoGazemarks (using gaze history for spatial orientation on maps)",
      "Implicit Interaction (using gaze for natural and intuitive geovisualization)"
    ],
    "stimulusDevices": [
      "Not applicable (No specific device used; the study discusses general gaze-based interaction)"
    ],
    "findings": [
      "Cognitive Processes and Spatial Cognition:",
      "Eye-tracking is an effective tool for understanding spatial cognition and cognitive mapping.",
      "Visual attention and gaze patterns provide insights into spatial decision-making and cognitive processing.",
      "Scanpath analysis and fixation duration can reveal cognitive strategies in navigation and wayfinding.",
      "Eye-Tracking for Spatial Research:",
      "Eye-tracking has been extensively used in:",
      "Wayfinding and Navigation: analysing orientation, route choice, and landmark recognition.",
      "Cartography and Geo-Visualizations: Evaluating cognitive load, map usability, and information acquisition.",
      "Human-Computer Interaction (HCI): Developing gaze-based interfaces for adaptive geovisualizations.",
      "Gaze-Based Interaction and HCI:",
      "Implicit gaze interaction supports natural and intuitive interaction with geovisualizations.",
      "Gaze-based interfaces enable cognitively adaptive maps that reduce cognitive load.",
      "GeoFoveation and GeoGazemarks enhance spatial orientation and cognitive mapping.",
      "Computational Issues and Gaze Analysis:",
      "Eye-tracking data analysis involves:",
      "Fixation and Saccade Classification: Using Savitzky-Golay filters and velocity thresholds.",
      "Scanpath Visualization: Using point-based and Area-Of-Interest (AOI) visualizations.",
      "Dynamic Gaze Analysis: Using temporal and spatio-temporal data visualization.",
      "Challenges include:",
      "Data noise and filtering for accurate gaze classification.",
      "Dynamic stimuli synchronization for interactive maps and web maps.",
      "Applications and Use Cases:",
      "Spatial Cognition and Decision-Making: Understanding cognitive strategies in navigation and wayfinding.",
      "GeoHCI and Adaptive Interfaces: Developing gaze-aware geovisualizations for contextual interaction.",
      "Cartographic Design: Applying eye-tracking insights for cognitively efficient map design.",
      "Recommendations for Spatial Research:",
      "Integrate eye-tracking with machine learning for predictive gaze analysis.",
      "Implement real-time gaze tracking for adaptive geovisualizations.",
      "Use scanpath and fixation analysis for cognitive mapping and spatial decision-making.",
      "Cognitive and Design Insights:",
      "Visual attention patterns provide cognitive feedback for user-centered geovisualizations.",
      "Dynamic gaze analysis supports context-aware interactions and cognitive mapping.",
      "Future Research Directions:",
      "Developing gaze-aware adaptive maps for contextual interactions and cognitive efficiency.",
      "Integrating eye-tracking with VR and AR for immersive spatial cognition research.",
      "Investigating multimodal interactions for holistic cognitive mapping and decision-making."
    ]
  },
  {
    "study": "Krassanakis and Cybulski (2019)",
    "articleTitle": "A review on eye movement analysis in map reading process: the status of the last decade",
    "year": 2019,
    "doi": "10.24425/gac.2019.126088",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Literature Review (systematic review of eye-tracking studies in cartographic research)",
      "Comparative Analysis (comparison of eye-tracking methods across different map types)",
      "Cognitive Process Analysis (examination of cognitive load, attention patterns, and perception strategies)",
      "Methodological Contributions (review of tools and methods for eye movement analysis in cartography)"
    ],
    "studyWithExperiment": "ONLY METHODOLOGY (This is a systematic review paper without an experimental study)",
    "experimentDesign": [
      "Not applicable (No experimental design; the study is a literature review and methodological synthesis)"
    ],
    "eyeTrackingDevices": [
      "Not specified (Discusses general usage of eye-tracking devices in cartographic research)"
    ],
    "evaluationSoftware": [
      "Not specified (Focuses on general analysis tools and methods for eye-tracking in cartography)"
    ],
    "taskTypes": [
      "Not applicable (No tasks performed; the study categorizes tasks from reviewed literature)"
    ],
    "numberOfParticipants": [
      "Not applicable (No participants; the study is a literature review)"
    ],
    "stimuli": [
      "Cartographic Products:",
      "Static Maps (e.g., topographic and thematic maps)",
      "Animated Maps (e.g., dynamic cartographic visualizations)",
      "Interactive Maps and Web GIS (e.g., interactive geovisualization tools)",
      "Multimedia Maps (e.g., maps combined with multimedia elements)",
      "Geovisualisation Elements:",
      "Cartographic Symbolization (e.g., point symbols, lines, polygons)",
      "Visual Variables (e.g., color, size, orientation)",
      "Dynamic Variables (e.g., duration, rate of change)",
      "Acoustic Variables (e.g., sound used in multimedia cartographic products)"
    ],
    "stimulusDevices": [
      "Not applicable (No specific device used; the study reviews a wide range of cartographic stimuli)"
    ],
    "findings": [
      "Trends in Eye-Tracking Research for Cartography:",
      "Eye-tracking research in cartography has increased significantly over the last decade, driven by technological advancements and multimedia cartographic products.",
      "The study identified 76 research articles related to eye-tracking in map reading, published between 2009 and 2018.",
      "Categorization of Eye-Tracking Studies:",
      "Studies were categorized into five main areas:",
      "Cartographic Symbolization and Design Principles (26.3%)",
      "Comparing 2D and 3D Representations (10.5%)",
      "Map Users' Expertise (7.9%)",
      "Other Applications Related to Map Reading (26.3%)",
      "Eye-Tracking Analysis Tools and Methods (23.7%)",
      "Cartographic Symbolization and Design Principles:",
      "Studies examined visual variables (e.g., color, size, hue) and dynamic variables (e.g., duration, rate of change) for map readability and user performance.",
      "Color distance was identified as a critical factor for effective choropleth map readability.",
      "Size and color hue were found to be the most effective visual variables for attention guidance.",
      "2D vs. 3D Representations:",
      "3D perspective views were more effective for visibility analysis, but 2D maps were more efficient for browsing tasks.",
      "Virtual globes and 3D point symbols showed mixed results, with lower accuracy but better spatial cognition.",
      "Map Users' Expertise:",
      "Expert map users demonstrated higher cognitive efficiency, shorter fixation durations, and more goal-oriented visual strategies.",
      "Novices exhibited longer fixation durations and more exploratory gaze patterns.",
      "Interactive and Multimedia Maps:",
      "Dynamic and interactive maps enhanced visual attention and cognitive engagement but increased cognitive load.",
      "Web GIS and multimedia maps were evaluated for usability and cognitive mapping.",
      "Eye-Tracking Analysis Tools and Methods:",
      "ScanGraph and EyeMMV Toolbox were identified as key tools for eye movement analysis in cartographic research.",
      "3DgazeR and GazeGIS were highlighted as innovative tools for 3D geovisualization and gaze-based GIS interactions.",
      "Applications and Use Cases:",
      "Cartographic Design: Enhancing map usability and cognitive efficiency through evidence-based design principles.",
      "Human-Computer Interaction (HCI): Developing gaze-aware interactive maps and dynamic geovisualizations.",
      "Geospatial Data Exploration: Applying gaze-based adaptive visualization for pattern recognition and cognitive mapping.",
      "Recommendations for Eye-Tracking in Cartography:",
      "Implement dynamic visual variables for interactive geovisualization.",
      "Use adaptive gaze-based interfaces to reduce cognitive load and enhance usability.",
      "Design 3D geovisualizations for spatial decision support and cognitive mapping.",
      "Future Research Directions:",
      "Investigating multimodal sensing (e.g., combining eye-tracking with EEG) for cognitive load analysis.",
      "Applying machine learning for automated pattern recognition in eye movement data.",
      "Developing gaze-based adaptive geovisualizations for real-time interaction and personalized user experiences.",
      "The study validated the effectiveness of eye-tracking for usability evaluation and cognitive analysis in cartographic research, demonstrating its potential for dynamic and adaptive geovisualizations."
    ]
  },
  {
    "study": "Kudelka and Dobesova (2015)",
    "articleTitle": "EYE-TRACKING TESTING OF GIS INTERFACES",
    "year": 2015,
    "doi": "10.5593/sgem2015B21",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Eye-tracking (to capture visual attention and cognitive processing in GIS interfaces)",
      "Usability Testing (to evaluate effectiveness and cognitive efficiency of GIS tasks)",
      "Comparative Analysis (comparing Esri ArcGIS and QGIS interfaces for task performance)",
      "Areas of Interest (AOI) Analysis (to analyse attention allocation and fixation durations on GIS interface elements)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Within-subjects design"
    ],
    "eyeTrackingDevices": [
      "SMI RED 250 (250 Hz)"
    ],
    "evaluationSoftware": [
      "SMI Experiment Suite for eye-tracking data collection",
      "SMI BeGaze for AOI analysis and interactive stimulus recording"
    ],
    "taskTypes": [
      "Overlay Analysis with Buffer (e.g., analysing water areas in case of a train accident)",
      "Creation of Thematic Map (e.g., mapping a railway network)",
      "Processing Raster Data (e.g., automatic digitization of raster images)",
      "Querying Spatial Data (e.g., selecting municipalities by population count)",
      "Visual Programming (e.g., designing a model for automatic data processing in ModelBuilder and Processing Modeler)"
    ],
    "numberOfParticipants": [
      "30"
    ],
    "stimuli": [
      "Two GIS Interfaces:",
      "Esri ArcGIS for Desktop Advanced 10.2",
      "QGIS 2.2.0 Valmiera",
      "Five Geo-Tasks:",
      "Overlay Operations (e.g., buffer analysis)",
      "Working with Raster Data (e.g., automatic digitization)",
      "Spatial Querying and Data Extraction (e.g., attribute queries and data export)",
      "Thematic Map Creation (e.g., map composition and legend creation)",
      "Visual Programming (e.g., using ModelBuilder and Processing Modeler)"
    ],
    "stimulusDevices": [
      "Desktop Computer with 1920×1080 resolution",
      "SMI RED 250 Eye Tracker (250 Hz)",
      "SMI Experiment Suite and BeGaze for data collection and analysis"
    ],
    "findings": [
      "Usability and Task Performance:",
      "QGIS Valmiera was generally more efficient for task completion due to a simpler user interface.",
      "Esri ArcGIS required longer task completion times, particularly for Thematic Map Creation due to fragmented tool placement.",
      "Thematic Map Creation was the most time-consuming task with ArcGIS (6 min 48 s) versus QGIS (2 min 50 s).",
      "Overlay Operations showed minimal time differences between ArcGIS (2 min 58 s) and QGIS (2 min 54 s).",
      "Dwell Time and Visual Attention:",
      "Dwell Time was higher on Upper Toolbars in ArcGIS compared to QGIS, indicating more time spent searching for tools.",
      "Data Preview AOI received more attention in QGIS, suggesting a more intuitive workflow.",
      "No respondents used the Help Window despite its availability in both interfaces.",
      "Visual Programming and Cognitive Load:",
      "Visual Programming with ModelBuilder (ArcGIS) and Processing Modeler (QGIS) showed similar cognitive demands.",
      "QGIS Processing Modeler was slightly more efficient due to simplified tool integration.",
      "User Preferences and Feedback:",
      "Participants preferred QGIS Valmiera for its simpler layout and integrated map composition tools.",
      "ArcGIS was perceived as more complex and time-consuming due to fragmented tool placement.",
      "Applications and Use Cases:",
      "GIS Education: Incorporating eye-tracking for usability evaluation in geospatial training and learning environments.",
      "Geovisualisation Design: Applying AOI analysis for evidence-based UI/UX design in GIS software.",
      "Recommendations for GIS Interface Design:",
      "Place frequently used tools in prominent and consistent locations to reduce cognitive load.",
      "Design context-aware toolbars to improve workflow efficiency and visual attention allocation.",
      "Implement integrated Help Windows that are intuitive and easily accessible.",
      "Cognitive and Design Insights:",
      "Consistent UI layout and integrated tool placement support cognitive efficiency in geo-task solutions.",
      "Visual attention patterns reflect cognitive strategies and search behavior in complex GIS interfaces.",
      "The study validated the effectiveness of using eye-tracking for usability testing of GIS interfaces, demonstrating its potential for cognitive load analysis and UI/UX improvement.",
      "Future Research Directions:",
      "Applying eye-tracking to advanced GIS tasks (e.g., 3D geovisualization and dynamic mapping).",
      "Investigating cross-platform usability with QGIS, ArcGIS, and other open-source GIS tools.",
      "Developing adaptive GIS interfaces that dynamically respond to visual attention patterns."
    ]
  },
  {
    "study": "Kwok et al. (2019)",
    "articleTitle": "Gaze-Guided Narratives: Adapting Audio Guide Content to Gaze in Virtual and Real Environments",
    "year": 2019,
    "doi": "10.1145/3290605.3300721",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 4,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Eye-tracking (to capture gaze patterns and adapt audio content in real-time)",
      "Gaze-Guided Narratives (using gaze guidance and content adaptation for interactive audio narratives)",
      "Usability Testing (comparing gaze-guided narratives with traditional audio guides)",
      "Controlled Lab Study and Real-World Field Study (evaluating user experience, cognitive load, and spatial learning)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Controlled Lab Study: Within-subjects design with four conditions:",
      "A: Classic audio guide (baseline)",
      "B: Adaptive narrative (with content adaptation only)",
      "C: Gaze-guiding audio guide (with gaze guidance only)",
      "D: Gaze-Guided Narrative (both gaze guidance and content adaptation)",
      "Real-World Study: Between-subjects design comparing A and D at a tourist viewpoint"
    ],
    "eyeTrackingDevices": [
      "SMI Eye Tracking Glasses (120 Hz) (for both virtual and real-world environments)"
    ],
    "evaluationSoftware": [
      "SMI Experiment Suite for gaze data collection and analysis",
      "Cesium (WebGL library) for 3D heatmap visualization and spatial cognition analysis",
      "SPSS for statistical analysis"
    ],
    "taskTypes": [
      "Exploration tasks (e.g., exploring city panoramas from a fixed vantage point)",
      "Spatial learning tasks (e.g., identifying and locating landmarks)",
      "Memory tasks (e.g., answering content-related questions and drawing sketch maps)"
    ],
    "numberOfParticipants": [
      "60+16"
    ],
    "stimuli": [
      "Panoramic City Views:",
      "Tokyo Tower (Tokyo, Japan)",
      "Top of the Rock (New York, USA)",
      "Lindenhof (Zürich, Switzerland)",
      "Audio Guide Content:",
      "Narratives about historical landmarks and cultural facts",
      "Verbal directional instructions for gaze guidance (e.g., \"far left of what you are looking at\")",
      "Gaze-Guided Narratives System:",
      "Gaze Guidance: Helping users locate landmarks by providing directional cues",
      "Content Adaptation: Adapting audio content based on previously inspected landmarks"
    ],
    "stimulusDevices": [
      "SMI Eye Tracking Glasses (120 Hz)",
      "Bluetooth SONY MDR-ZX770BN Headphones (for audio narratives)",
      "CAVE Automatic Virtual Environment (for controlled lab study)",
      "Real-World Panoramic Viewpoint (Lindenhof, Zürich for field study)"
    ],
    "findings": [
      "Gaze-Guided Narratives significantly improved user experience, cognitive load, and spatial learning:",
      "Better user experience was reported for Condition D (Gaze-Guided Narratives) compared to other conditions.",
      "Lower cognitive load was observed in Condition D, enabling users to allocate more cognitive resources to spatial learning.",
      "Higher spatial learning and memory recall were recorded for Condition D, especially for unfamiliar panoramas (e.g., Tokyo).",
      "Gaze Guidance:",
      "Helped participants identify landmarks more accurately but required longer time to object identification.",
      "Directional cues guided users' gaze more efficiently, reducing visual search times.",
      "Content Adaptation:",
      "Enhanced content comprehension and spatial learning by adapting narratives based on previously viewed landmarks.",
      "Temporal, spatial, and thematic relations between landmarks were used for narrative adaptation.",
      "User Preferences and Feedback:",
      "Participants preferred the Gaze-Guided Narratives for its intuitive interaction and context-aware adaptation.",
      "Condition D received the highest scores in perspicuity (ease of use) and dependability (controllability).",
      "Usability and Cognitive Load:",
      "System Usability Scale (SUS) scores were highest for Condition D in the real-world study (82.81 ± 12.06).",
      "NASA-TLX Cognitive Load scores were lowest for Condition D, indicating reduced cognitive effort.",
      "Spatial Learning and Memory:",
      "Sketch map accuracy was significantly higher for Condition D, showing better spatial cognition and memory recall.",
      "Number of correct answers to content-related questions was also higher for Condition D.",
      "Applications and Use Cases:",
      "Tourist Guides: Enhancing user experience and spatial learning with gaze-guided adaptive narratives.",
      "Educational Environments: Using gaze-adaptive narratives for immersive learning experiences.",
      "Interactive Narratives and Storytelling: Applying gaze-guided interaction to dynamic storytelling.",
      "Recommendations for Gaze-Guided Systems:",
      "Use gaze guidance with directional cues for intuitive and efficient object identification.",
      "Implement content adaptation to enhance narrative relevance and reduce cognitive load.",
      "Design gaze-adaptive interfaces that personalize user experiences based on individual gaze patterns.",
      "Cognitive and Design Insights:",
      "Gaze-guided narratives support cognitive mapping and spatial learning by integrating gaze patterns with adaptive audio content.",
      "Content adaptation enhances cognitive engagement and information retention by contextualizing narratives.",
      "The study validated the effectiveness of Gaze-Guided Narratives for touristic and educational experiences, demonstrating its potential for adaptive storytelling and spatial cognition research.",
      "Future Research Directions:",
      "Expanding the Gaze-Guided Narratives to AR and VR environments for immersive experiences.",
      "Investigating gaze-driven interest detection for personalized content recommendations.",
      "Developing gaze-aware adaptive storytelling systems for interactive narratives and educational applications."
    ]
  },
  {
    "study": "Li et al. (2015)",
    "articleTitle": "An Interactive Radial Visualization of Geoscience Observation Data",
    "year": 2015,
    "doi": "10.1145/2801040.2801061",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Eye-tracking (to measure visual attention, cognitive load, and usability of radial geovisualization)",
      "Usability Testing (to evaluate effectiveness and interactivity of the radial visualization approach)",
      "Comparative Analysis (comparing radial visualization with traditional methods for spatiotemporal data exploration)",
      "AOI (Areas of Interest) Analysis (to analyse attention allocation and fixation transitions)",
      "Gaze Transition Analysis (to examine cognitive processes and usability patterns)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Within-subjects design"
    ],
    "eyeTrackingDevices": [
      "Tobii T60 XL (1920×1200 resolution)"
    ],
    "evaluationSoftware": [
      "Tobii Studio for eye-tracking data analysis",
      "Vismate (multi-view visual analytics tool integrating the radial visualization approach)",
      "Custom Logging System for interaction data and user feedback"
    ],
    "taskTypes": [
      "Cluster Identification (e.g., finding the cluster containing most stations in East China)",
      "Trend Analysis (e.g., identifying turning points of climate changes)",
      "Comparison tasks (e.g., comparing stations with different variation trends)"
    ],
    "numberOfParticipants": [
      "10"
    ],
    "stimuli": [
      "Interactive Radial Visualization System:",
      "Map View (central map showing spatial distributions)",
      "Sector-Based Ring Band (encoding temporal variations)",
      "Cluster Rings (displaying clustered data patterns)",
      "China Surface Meteorological Observation Data:",
      "206 observation stations across East China",
      "Climate attributes: Temperature, precipitation, wind speed, and more",
      "Time Interval: 2001–2012",
      "Three Visual Elements:",
      "Map View (AOI 1)",
      "Sector-Based Ring Band (AOI 2)",
      "Cluster Rings (AOI 3)"
    ],
    "stimulusDevices": [
      "Desktop Computer with Tobii T60 XL Eye Tracker (1920×1200 resolution)",
      "Vismate Visual Analytics Tool integrating the radial visualization systém"
    ],
    "findings": [
      "Effectiveness of Radial Visualization:",
      "The radial visualization approach effectively combined spatial, temporal, and attribute data in a compact and interactive view.",
      "High usability and cognitive efficiency were observed, enabling users to explore spatiotemporal patterns intuitively.",
      "Visual Attention and Cognitive Load:",
      "Sector-Based Ring Band (AOI 2) received the most fixations, indicating its importance for temporal analysis.",
      "Cluster Rings (AOI 3) were crucial for pattern recognition and trend comparison.",
      "Map View (AOI 1) had the least fixations, suggesting improvements needed for spatial interaction.",
      "Gaze Transition Analysis:",
      "Frequent transitions between Cluster Rings and Sector-Based Ring Band revealed cognitive mapping strategies.",
      "Cross-referencing patterns showed that users relied on the radial layout for contextual understanding.",
      "Usability and Cognitive Load:",
      "High completion accuracy (93.33%) and short task completion times indicated low cognitive load and efficient usability.",
      "Sector-Based Ring Band effectively supported temporal pattern recognition, reducing cognitive effort.",
      "User Preferences and Feedback:",
      "Participants appreciated the interactive radial layout for its intuitive design and seamless integration of spatial, temporal, and cluster information.",
      "The polar coordinate-based fisheye view was highlighted as a useful interaction for focusing on detailed patterns.",
      "Cluster Rings were rated as the most useful element for comparing spatiotemporal patterns.",
      "Applications and Use Cases:",
      "Spatiotemporal Geovisualisation: Supporting climate change analysis, environmental monitoring, and spatial decision-making.",
      "Dynamic Geovisualisation: Applying the radial layout for multi-dimensional data exploration.",
      "Visual Analytics: Integrating the radial approach with interactive analytics tools for data-driven decision support.",
      "Recommendations for Radial Geovisualisation:",
      "Use sector-based ring bands for temporal pattern visualization and cluster rings for spatiotemporal comparisons.",
      "Implement polar coordinate-based fisheye views for focus+context interactions.",
      "Enhance the map view with context-aware interactions to improve spatial exploration.",
      "Cognitive and Design Insights:",
      "Radial layouts support cognitive mapping by integrating spatiotemporal dimensions in a compact interactive view.",
      "Cluster rings and sector-based ring bands enhance pattern recognition and cognitive efficiency.",
      "The study validated the effectiveness of the radial visualization approach for interactive spatiotemporal data exploration, demonstrating its potential for geoscience applications and dynamic geovisualization.",
      "Future Research Directions:",
      "Applying the radial approach to big geoscience data for real-time monitoring and pattern analysis.",
      "Developing adaptive radial interfaces that dynamically respond to gaze patterns and cognitive states.",
      "Investigating gaze-driven interaction techniques for personalized geovisualization and context-aware data exploration."
    ]
  },
  {
    "study": "Li et al. (2017)",
    "articleTitle": "An interactive visualization approach to the overview of geoscience data",
    "year": 2017,
    "doi": "10.1007/s12650-016-0352-z",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Eye-tracking (to measure visual attention, cognitive load, and usability of radial geovisualization)",
      "Usability Testing (to evaluate effectiveness and interactivity of the radial visualization approach)",
      "Comparative Analysis (comparing radial visualization with traditional methods for spatiotemporal data exploration)",
      "AOI (Areas of Interest) Analysis (to analyse attention allocation and fixation transitions)",
      "Gaze Transition Analysis (to examine cognitive processes and usability patterns)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Within-subjects design"
    ],
    "eyeTrackingDevices": [
      "Tobii T60 XL (1920×1200 resolution)"
    ],
    "evaluationSoftware": [
      "Tobii Studio for eye-tracking data analysis",
      "Vismate (multi-view visual analytics tool integrating the radial visualization approach)",
      "Custom Logging System for interaction data and user feedback"
    ],
    "taskTypes": [
      "Cluster Identification (e.g., finding the cluster containing most stations in East China)",
      "Trend Analysis (e.g., identifying turning points of climate changes)",
      "Comparison tasks (e.g., comparing stations with different variation trends)"
    ],
    "numberOfParticipants": [
      "10"
    ],
    "stimuli": [
      "Interactive Radial Visualization System:",
      "Map View (central map showing spatial distributions)",
      "Sector-Based Ring Band (encoding temporal variations)",
      "Cluster Rings (displaying clustered data patterns)",
      "China Surface Meteorological Observation Data:",
      "206 observation stations across East China",
      "Climate attributes: Temperature, precipitation, wind speed, and more",
      "Time Interval: 2001–2012",
      "Three Visual Elements:",
      "Map View (AOI 1)",
      "Sector-Based Ring Band (AOI 2)",
      "Cluster Rings (AOI 3)"
    ],
    "stimulusDevices": [
      "Desktop Computer with Tobii T60 XL Eye Tracker (1920×1200 resolution)",
      "Vismate Visual Analytics Tool integrating the radial visualization systém"
    ],
    "findings": [
      "Effectiveness of Radial Visualization:",
      "The radial visualization approach effectively combined spatial, temporal, and attribute data in a compact and interactive view.",
      "High usability and cognitive efficiency were observed, enabling users to explore spatiotemporal patterns intuitively.",
      "Visual Attention and Cognitive Load:",
      "Sector-Based Ring Band (AOI 2) received the most fixations, indicating its importance for temporal analysis.",
      "Cluster Rings (AOI 3) were crucial for pattern recognition and trend comparison.",
      "Map View (AOI 1) had the least fixations, suggesting improvements needed for spatial interaction.",
      "Gaze Transition Analysis:",
      "Frequent transitions between Cluster Rings and Sector-Based Ring Band revealed cognitive mapping strategies.",
      "Cross-referencing patterns showed that users relied on the radial layout for contextual understanding.",
      "Usability and Cognitive Load:",
      "High completion accuracy (93.33%) and short task completion times indicated low cognitive load and efficient usability.",
      "Sector-Based Ring Band effectively supported temporal pattern recognition, reducing cognitive effort.",
      "User Preferences and Feedback:",
      "Participants appreciated the interactive radial layout for its intuitive design and seamless integration of spatial, temporal, and cluster information.",
      "The polar coordinate-based fisheye view was highlighted as a useful interaction for focusing on detailed patterns.",
      "Cluster Rings were rated as the most useful element for comparing spatiotemporal patterns.",
      "Applications and Use Cases:",
      "Spatiotemporal Geovisualisation: Supporting climate change analysis, environmental monitoring, and spatial decision-making.",
      "Dynamic Geovisualisation: Applying the radial layout for multi-dimensional data exploration.",
      "Visual Analytics: Integrating the radial approach with interactive analytics tools for data-driven decision support.",
      "Recommendations for Radial Geovisualisation:",
      "Use sector-based ring bands for temporal pattern visualization and cluster rings for spatiotemporal comparisons.",
      "Implement polar coordinate-based fisheye views for focus+context interactions.",
      "Enhance the map view with context-aware interactions to improve spatial exploration.",
      "Cognitive and Design Insights:",
      "Radial layouts support cognitive mapping by integrating spatiotemporal dimensions in a compact interactive view.",
      "Cluster rings and sector-based ring bands enhance pattern recognition and cognitive efficiency.",
      "The study validated the effectiveness of the radial visualization approach for interactive spatiotemporal data exploration, demonstrating its potential for geoscience applications and dynamic geovisualization.",
      "Future Research Directions:",
      "Applying the radial approach to big geoscience data for real-time monitoring and pattern analysis.",
      "Developing adaptive radial interfaces that dynamically respond to gaze patterns and cognitive states.",
      "Investigating gaze-driven interaction techniques for personalized geovisualization and context-aware data exploration."
    ]
  },
  {
    "study": "Liao et al. (2016)",
    "articleTitle": "Exploring differences of visual attention in pedestrian navigation when using 2D maps and 3D geo-browsers",
    "year": 2016,
    "doi": "10.1080/15230406.2016.1174886",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Eye-tracking (to measure visual attention, cognitive load, and navigation strategies)",
      "Usability Testing (to evaluate effectiveness and cognitive efficiency of 2D and 3D navigation aids)",
      "Comparative Analysis (comparing 2D maps and 3D geo-browsers for navigation performance)",
      "AOI (Areas of Interest) Analysis (to analyse attention allocation and fixation transitions)",
      "Gaze Transition Analysis (to examine cognitive processes and usability patterns)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Between-subjects design"
    ],
    "eyeTrackingDevices": [
      "Tobii T60 (60 Hz)"
    ],
    "evaluationSoftware": [
      "Tobii Studio for eye-tracking data analysis",
      "Google Maps JavaScript API for 2D map navigation",
      "Google Earth for 3D geo-browser navigation"
    ],
    "taskTypes": [
      "Self-Localization (e.g., identifying current location in the urban environment)",
      "Spatial Knowledge Acquisition (e.g., memorizing routes and decision points)",
      "Decision-Making at Complex Intersections (e.g., choosing correct paths at complex decision points)"
    ],
    "numberOfParticipants": [
      "20"
    ],
    "stimuli": [
      "2D Map (Google Map) for the 2D group",
      "3D Geo-Browser (Google Earth) for the 3D group",
      "Google Street View for realistic navigation experience",
      "Three Navigation Tasks:",
      "Self-Localization: Locating the current position on the map",
      "Map Reading and Memorizing: Memorizing the route to the destination",
      "Navigation: Navigating to the destination using memorized information"
    ],
    "stimulusDevices": [
      "Desktop Computer with Tobii T60 Eye Tracker (60 Hz)",
      "Google Maps JavaScript API for 2D navigation",
      "Google Earth for 3D navigation",
      "Google Street View for immersive navigation experience"
    ],
    "findings": [
      "Visual Attention and Cognitive Load:",
      "3D geo-browsers required significantly more visual search, resulting in longer response times for spatial knowledge acquisition.",
      "Landmarks in photorealistic 3D models helped recall spatial knowledge and improved decision-making at complex intersections.",
      "2D maps were more efficient for spatial knowledge acquisition but less effective at complex decision points due to lack of landmark context.",
      "Navigation Performance:",
      "Participants using 2D maps performed better in spatial knowledge acquisition with shorter response times.",
      "3D geo-browser users performed better at decision-making at complex intersections due to landmark recognition.",
      "2D map users relied more on street names and counting intersections for navigation.",
      "3D geo-browser users used landmarks and visual cues for orientation and decision-making.",
      "Usability and Cognitive Load:",
      "3D geo-browsers showed higher cognitive load due to information overload and occluded views.",
      "2D maps showed lower cognitive load but required more analytical reasoning at complex intersections.",
      "User Preferences and Feedback:",
      "Participants preferred 2D maps for memorizing routes and acquiring spatial knowledge.",
      "3D geo-browsers were preferred for navigation and decision-making at complex intersections.",
      "Participants found photorealistic 3D landmarks useful for spatial orientation and self-localization.",
      "Applications and Use Cases:",
      "Pedestrian Navigation Systems: Enhancing usability and cognitive efficiency by combining 2D maps for spatial knowledge acquisition and 3D geo-browsers for decision-making.",
      "Geovisualisation Design: Applying photorealistic 3D landmarks for cognitive mapping and route guidance.",
      "Spatial Decision Support Systems: Using 3D geo-browsers for contextual decision-making at complex intersections.",
      "Recommendations for Navigation System Design:",
      "Use 2D maps for efficient spatial knowledge acquisition and route memorization.",
      "Implement 3D geo-browsers for decision-making at complex intersections and landmark-based navigation.",
      "Combine 2D and 3D visualizations to reduce cognitive load and improve navigation performance.",
      "Cognitive and Design Insights:",
      "Photorealistic 3D landmarks support cognitive mapping and spatial memory recall.",
      "2D maps enhance analytical reasoning and spatial knowledge acquisition but require higher cognitive effort at complex intersections.",
      "The study validated the effectiveness of 2D maps for spatial knowledge acquisition and 3D geo-browsers for decision-making, demonstrating their complementary roles in pedestrian navigation systems.",
      "Future Research Directions:",
      "Investigating adaptive navigation systems that dynamically switch between 2D and 3D views based on user cognitive state.",
      "Developing gaze-guided navigation systems that adapt to user visual attention and cognitive load.",
      "Applying machine learning for real-time decision support and context-aware navigation."
    ]
  },
  {
    "study": "Liao et al. (2022)",
    "articleTitle": "Toward Gaze-Based Map Interactions: Determining the Dwell Time and Buffer Size for the Gaze-Based Selection of Map Features",
    "year": 2022,
    "doi": "10.3390/ijgi11020127",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Eye-tracking (to measure visual attention, cognitive load, and usability of gaze-based map interactions)",
      "Usability Testing (to evaluate effectiveness and cognitive efficiency of gaze-based map selection)",
      "Comparative Analysis (comparing different dwell times and buffer sizes for gaze-based selection)",
      "AOI (Areas of Interest) Analysis (to analyse attention allocation and fixation transitions)",
      "Gaze Transition Analysis (to examine cognitive processes and usability patterns)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Within-subjects desig"
    ],
    "eyeTrackingDevices": [
      "Tobii Eye Tracker 4C (90 Hz)"
    ],
    "evaluationSoftware": [
      "Tobii Interactor APIs for gaze tracking and interaction data collection",
      "Custom Testing Platform built using C# and ESRI ArcObjects 10.2",
      "ANOVA and Pairwise Comparisons for statistical analysis"
    ],
    "taskTypes": [
      "Map Feature Selection Tasks (e.g., selecting points, polylines, and polygons using gaze)",
      "Dwell Time Variation Tasks (e.g., 200 ms, 600 ms, and 1000 ms dwell times)",
      "Buffer Size Variation Tasks (e.g., different buffer sizes for points and polylines)"
    ],
    "numberOfParticipants": [
      "38"
    ],
    "stimuli": [
      "Gaze-Based Map Interaction System:",
      "Point Selection (using buffer sizes of 1°, 1.5°, and 2°)",
      "Polyline Selection (using buffer sizes of 0.5°, 0.7°, and 1°)",
      "Polygon Selection (using dwell times only; no buffer sizes)",
      "Two Types of Maps:",
      "Map Layers (containing a single type of feature)",
      "Thematic Maps (containing all three feature types)",
      "Three Visual Elements:",
      "Points (AOI 1)",
      "Polylines (AOI 2)",
      "Polygons (AOI 3)"
    ],
    "stimulusDevices": [
      "Lenovo Yoga 14C Laptop with Tobii Eye Tracker 4C (90 Hz)",
      "14-inch LED Screen (1920 × 1080 resolution)",
      "Custom Testing Platform integrating C# and ESRI ArcObjects 10.2"
    ],
    "findings": [
      "Effectiveness of Gaze-Based Map Selection:",
      "Gaze-based map selection is effective for interactive geovisualization but depends on dwell time and buffer size.",
      "Dwell Time: A 600 ms dwell time is the most efficient for selecting all three types of map features.",
      "Buffer Size:",
      "1.5° buffer size is most effective for point selection.",
      "0.7° buffer size is most effective for polyline selection.",
      "Visual Attention and Cognitive Load:",
      "Larger buffer sizes increased efficiency but decreased accuracy.",
      "Longer dwell times increased accuracy but decreased efficiency due to visual fatigue.",
      "600 ms dwell time achieved the best balance between accuracy and efficiency.",
      "Usability and Cognitive Load:",
      "High completion accuracy (93.33%) and short task completion times indicated low cognitive load and efficient usability.",
      "Buffer Size and Dwell Time significantly influenced response time and accuracy.",
      "User Preferences and Feedback:",
      "Participants preferred the 600 ms dwell time for its balance of accuracy and efficiency.",
      "1.5° buffer size was preferred for point selection, while 0.7° buffer size was preferred for polyline selection.",
      "Applications and Use Cases:",
      "Gaze-Based Map Interactions: Supporting hands-free interactions for spatial decision-making and geovisualization.",
      "Assistive Technology: Applying gaze-based interactions for accessibility and human-computer interaction (HCI).",
      "Dynamic Geovisualisation: Implementing dwell time and buffer size adaptation for real-time user interactions.",
      "Recommendations for Gaze-Based Map Design:",
      "Use 600 ms dwell time for accurate and efficient gaze-based selection.",
      "Implement 1.5° buffer size for point selection and 0.7° buffer size for polyline selection.",
      "Combine gaze-based interactions with dynamic visualization adaptation to reduce cognitive load.",
      "Cognitive and Design Insights:",
      "Gaze-based selection supports cognitive mapping by integrating spatiotemporal dimensions in a compact interactive view.",
      "Buffer size and dwell time enhance pattern recognition and cognitive efficiency.",
      "The study validated the effectiveness of the gaze-based map interaction approach for interactive spatiotemporal data exploration, demonstrating its potential for geoscience applications and dynamic geovisualization.",
      "Future Research Directions:",
      "Applying the gaze-based approach to 3D geovisualization for immersive experiences.",
      "Investigating adaptive gaze-based systems that dynamically respond to cognitive load and attention patterns.",
      "Developing gaze-driven interaction techniques for personalized geovisualization and context-aware data exploration."
    ]
  },
  {
    "study": "Manson et al. (2012)",
    "articleTitle": "Using Eye-tracking and Mouse Metrics to Test Usability of Web Mapping Navigation",
    "year": 2012,
    "doi": "10.1559/1523040639148",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Eye-tracking (to measure visual attention, cognitive load, and usability of web mapping navigation)",
      "Mouse Tracking (to analyse navigation patterns and user interactions)",
      "Usability Testing (to evaluate effectiveness and cognitive efficiency of different web mapping navigation schemes)",
      "Comparative Analysis (comparing four different navigation methods: pan zoom, double clicking, zoom by rectangle, and wheel zoom)",
      "AOI (Areas of Interest) Analysis (to analyse attention allocation and fixation transitions)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Within-subjects design"
    ],
    "eyeTrackingDevices": [
      "Tobii x50 (50 Hz, remote eye tracker)"
    ],
    "evaluationSoftware": [
      "Tobii Studio for eye-tracking data analysis",
      "Custom Web Mapping Application built with Google Maps-like Interface for navigation tasks",
      "Two-Way Repeated Measures ANOVA for statistical analysis"
    ],
    "taskTypes": [
      "Zooming Tasks (e.g., zooming into a feature of interest using different navigation methods)",
      "Panning Tasks (e.g., moving to a specific area on the map)",
      "Feature Identification Tasks (e.g., finding symbols or landmarks using zoom and pan techniques)"
    ],
    "numberOfParticipants": [
      "54+10"
    ],
    "stimuli": [
      "Custom Web Mapping Application with four navigation methods:",
      "Pan Zoom (default for many web maps)",
      "Double Clicking (to zoom in or out at a set scalar interval)",
      "Zoom by Rectangle (Rectangle Zoom) (standard in GIS)",
      "Wheel Zoom (using mouse wheel to zoom in or out)",
      "Map Interface similar to Google Maps, featuring:",
      "Large Map Frame (for navigation tasks)",
      "Tool Options (on the left side of the screen)",
      "Symbol Markers (e.g., red triangle as the target feature)"
    ],
    "stimulusDevices": [
      "Desktop Computer with Tobii x50 Eye Tracker (50 Hz)",
      "Custom Web Mapping Application built with Google Maps-like Interface"
    ],
    "findings": [
      "Usability and Task Performance:",
      "Rectangle Zoom was the most efficient and preferred navigation method, followed by Wheel Zoom.",
      "Pan Zoom and Double Click Zoom were less preferred due to more clicks and longer navigation times.",
      "Rectangle Zoom allowed users to fine-tune their navigation, providing better control and accuracy.",
      "Wheel Zoom was preferred for its speed and simplicity, despite initial learning challenges.",
      "Pan Zoom was the least preferred due to frequent switching between map and controls.",
      "Visual Attention and Cognitive Load:",
      "Rectangle Zoom required fewer fixations and shorter total fixation times compared to Pan Zoom.",
      "Pan Zoom involved repeated visual oscillations between map and pan controls, increasing cognitive load.",
      "Wheel Zoom showed shorter scan path lengths, indicating more efficient visual processing.",
      "User Preferences and Feedback:",
      "Rectangle Zoom was preferred for precision and ease of use, allowing users to define the zoom extent.",
      "Wheel Zoom was preferred for speed and continuity, maintaining context during zooming.",
      "Pan Zoom was criticized for lack of specificity and excessive clicking.",
      "Applications and Use Cases:",
      "Web Mapping Design: Improving usability by integrating Rectangle Zoom and Wheel Zoom.",
      "Geovisualisation Design: Applying user-centered navigation methods for interactive mapping applications.",
      "HCI and UX Design: Using eye-tracking and mouse metrics for evidence-based UI/UX design.",
      "Recommendations for Web Mapping Design:",
      "Use Rectangle Zoom for accurate navigation and fine-tuning map extent.",
      "Implement Wheel Zoom for fast and continuous navigation.",
      "Avoid excessive use of Pan Zoom due to cognitive load and navigation inefficiency.",
      "Combine multiple navigation methods to cater to different user preferences and tasks.",
      "Cognitive and Design Insights:",
      "Rectangle Zoom supports cognitive mapping and spatial decision-making by integrating visual attention with dynamic interactions.",
      "Wheel Zoom enhances spatial cognition by maintaining visual context during navigation.",
      "The study validated the effectiveness of Rectangle Zoom and Wheel Zoom for web mapping navigation, demonstrating their potential for interactive geovisualization and user-centered map design.",
      "Future Research Directions:",
      "Investigating adaptive navigation systems that dynamically switch between navigation methods based on user cognitive state.",
      "Developing gaze-guided navigation systems for context-aware interactions and spatial decision support.",
      "Applying machine learning for real-time navigation assistance and personalized geovisualization."
    ]
  },
  {
    "study": "May and Gamble (2014)",
    "articleTitle": "Collocating Interface Objects: Zooming into Maps",
    "year": 2014,
    "doi": "10.1145/2556288.2557279",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Eye-tracking (to measure visual attention, cognitive load, and usability of map zooming interactions)",
      "Usability Testing (to evaluate effectiveness and cognitive efficiency of collocating vs. translating zoom interfaces)",
      "Comparative Analysis (comparing collocated and translated map interfaces for task performance)",
      "AOI (Areas of Interest) Analysis (to analyse attention allocation and fixation transitions)",
      "Gaze Transition Analysis (to examine cognitive processes and usability patterns)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Within-subjects design"
    ],
    "eyeTrackingDevices": [
      "SensoMotoric Instruments iView X (sampling rate not specified)"
    ],
    "evaluationSoftware": [
      "SensoMotoric Instruments iView X for eye-tracking data collection",
      "BeGaze for AOI analysis and gaze transition analysis",
      "RealBasic for custom map interface implementation",
      "MANOVA and Paired t-tests for statistical analysis"
    ],
    "taskTypes": [
      "Map Zooming Tasks (e.g., zooming into specific locations and relocating place names)",
      "Relocation Tasks (e.g., finding and clicking on place names after zooming)",
      "Target Identification Tasks (e.g., finding and selecting a target symbol on a detailed map)"
    ],
    "numberOfParticipants": [
      "26+25+12"
    ],
    "stimuli": [
      "Two Map Interfaces:",
      "Collocated Interface (the clicked point is redisplayed in the same screen location after zooming)",
      "Translated Interface (the clicked point is moved to the center of the screen after zooming)",
      "Three Levels of Map Scale:",
      "Overview Map (1:50,000)",
      "Intermediate Map (1:25,000)",
      "Detailed Map (1:12,500)",
      "Geographic Locations:",
      "Ordnance Survey Maps of different cities in Britain (e.g., Sheffield, Cardiff, Plymouth)",
      "Target Symbols:",
      "Black Diamond Symbol for target identification tasks"
    ],
    "stimulusDevices": [
      "Desktop Computer with 20” NEC Multisync 2080UX+ LCD Monitor (1024×768 resolution)",
      "SensoMotoric Instruments iView X Eye Tracker",
      "RealBasic Custom Interface for map navigation and zooming"
    ],
    "findings": [
      "Effectiveness of Collocated Interface:",
      "Collocated Interface significantly reduced visual search time and cognitive load compared to the Translated Interface.",
      "Participants made fewer fixations, shorter gaze path lengths, and completed tasks faster with the Collocated Interface.",
      "Collocation reduced the need for reorientation and visual search after zooming.",
      "Visual Attention and Cognitive Load:",
      "Translated Interface caused more frequent and longer fixations due to the need to relocate points of interest.",
      "Collocated Interface allowed users to maintain visual context, reducing cognitive effort.",
      "User Preferences and Feedback:",
      "Participants preferred the Collocated Interface for its intuitive design and reduced cognitive load.",
      "The Translated Interface was perceived as confusing due to the unexpected relocation of points of interest.",
      "Applications and Use Cases:",
      "Map Navigation Systems: Enhancing usability and cognitive efficiency by implementing collocated zooming interfaces.",
      "Geovisualisation Design: Applying collocation principles to interactive geovisualization tools.",
      "HCI and UX Design: Using evidence-based design principles for user-centered interface design.",
      "Recommendations for Map Interface Design:",
      "Use collocated zooming for spatial navigation tasks to reduce cognitive load and improve usability.",
      "Avoid translating points of interest to the center of the screen to minimize visual search and cognitive overhead.",
      "Design context-aware interfaces that maintain spatial continuity and support cognitive mapping.",
      "Cognitive and Design Insights:",
      "Collocated interfaces support cognitive mapping and spatial cognition by preserving visual context.",
      "Translated interfaces increase cognitive load by disrupting spatial continuity and requiring reorientation.",
      "The study validated the effectiveness of the collocation principle for map navigation, demonstrating its potential for interactive geovisualization and user-centered map design.",
      "Future Research Directions:",
      "Investigating adaptive zooming interfaces that dynamically switch between collocated and translated modes based on task complexity and cognitive load.",
      "Developing gaze-guided navigation systems that adapt to user visual attention and cognitive states.",
      "Applying collocation principles to other interactive geovisualizations and dynamic mapping applications."
    ]
  },
  {
    "study": "Napieralski et al. (2014)",
    "articleTitle": "An evaluation of immersive viewing on spatial knowledge acquisition in spherical panoramic environments",
    "year": 2014,
    "doi": "10.1007/s10055-014-0245-1",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 4,
    "mainMethods": [
      "Gaze Judgments (to evaluate spatial knowledge acquisition and cognitive processes)",
      "Usability Testing (to compare immersive head-mounted display (HMD) vs. desktop viewing)",
      "Spatial Knowledge Acquisition Analysis (to examine spatial updating and cognitive mapping)",
      "Comparative Analysis (comparing immersive and desktop viewing for spatial updating tasks)",
      "Circular Statistics (to analyse perceived landmark directions and spatial updating accuracy)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Between-subjects design"
    ],
    "eyeTrackingDevices": [
      "Not applicable (Gaze judgments were recorded using head orientation tracking, not eye-tracking)"
    ],
    "evaluationSoftware": [
      "Custom System Built on Google Street View API for immersive and desktop navigation",
      "Circular Statistics for spatial updating analysis",
      "ANOVA and Multiple Regression for statistical analysis"
    ],
    "taskTypes": [
      "Spatial Updating Tasks (e.g., estimating the direction to previously seen landmarks)",
      "Gaze Judgment Tasks (e.g., looking or pointing in the perceived direction of landmarks)",
      "Cognitive Mapping Tasks (e.g., maintaining an internal representation of landmark positions)"
    ],
    "numberOfParticipants": [
      "27"
    ],
    "stimuli": [
      "Spherical Panoramic Environment (SPE) using Google Street View:",
      "Immersive HMD Viewing (ISPE): Using eMagin Z800 HMD with head orientation tracking",
      "Desktop Viewing (SPE): Using 17-inch monitor with mouse-based navigation",
      "Navigation Area:",
      "National Mall Area, Washington, DC with landmarks such as:",
      "Marriott Hotel",
      "Washington Monument",
      "Department of Commerce Building",
      "Gallery of Art",
      "Space Center",
      "Sculpture Garden",
      "Smithsonian Center",
      "Old Post Office",
      "US Post Office",
      "IRS Building",
      "Spatial Updating Task:",
      "Participants navigated a pre-specified path in the SPE, observing landmarks.",
      "In the testing phase, they were asked to look in the direction of perceived landmarks at specific waypoints.",
      "Angular differences between gaze directions and actual landmark directions were recorded."
    ],
    "stimulusDevices": [
      "Immersive Condition: eMagin Z800 HMD with head orientation tracking (32°×42° field of view, 800×600 resolution)",
      "Desktop Condition: 17-inch Monitor (800×600 resolution)",
      "Google Street View API for spherical panoramic navigation",
      "Nintendo Wiimote for navigation control in the immersive condition"
    ],
    "findings": [
      "Spatial Knowledge Acquisition and Cognitive Mapping:",
      "No significant difference was found between immersive and desktop viewing in spatial updating accuracy.",
      "Landmark direction judgments were similar in both conditions, with no improvement in accuracy using HMD.",
      "No significant difference in sense of presence scores between immersive and desktop conditions.",
      "Visual Attention and Cognitive Strategies:",
      "Participants in both conditions relied on visual landmarks (e.g., street signs, buildings, and trees) more than egocentric cues (e.g., head rotation and first-person perspective).",
      "Visual landmarks provided stronger spatial updating cues than natural head-coupled motion.",
      "Participants used procedural (route knowledge) and cognitive mapping (survey knowledge) strategies rather than egocentric orientation.",
      "Usability and Cognitive Load:",
      "No significant difference in cognitive load or task completion time between the two conditions.",
      "Immersive HMD viewing provided a higher sense of presence but did not enhance spatial updating accuracy.",
      "User Preferences and Feedback:",
      "Participants preferred the immersive HMD condition for its intuitive navigation and natural head-coupled motion.",
      "Desktop condition was preferred for its familiarity and ease of use.",
      "Discontinuous travel metaphor (teleportation) in Google Street View was criticized for disrupting spatial updating.",
      "Applications and Use Cases:",
      "Pedestrian Navigation Systems: Enhancing usability and spatial cognition with immersive panoramic environments.",
      "Virtual Reality and Augmented Reality: Applying spherical panoramic navigation for spatial decision-making and cognitive mapping.",
      "Geovisualisation Design: Developing immersive geovisualizations for spatial knowledge acquisition.",
      "Recommendations for Immersive Navigation Design:",
      "Use continuous navigation metaphors (e.g., smooth transitions instead of teleportation) to enhance spatial updating.",
      "Combine visual landmarks with egocentric cues for effective spatial cognition.",
      "Design adaptive panoramic interfaces that support procedural and cognitive mapping strategies.",
      "Cognitive and Design Insights:",
      "Visual landmarks play a crucial role in spatial updating and cognitive mapping, outweighing egocentric cues.",
      "Discontinuous navigation metaphors disrupt spatial updating and cognitive mapping.",
      "The study validated the effectiveness of using spherical panoramic environments for spatial knowledge acquisition, demonstrating their potential for immersive geovisualizations and virtual navigation systems.",
      "Future Research Directions:",
      "Investigating continuous navigation metaphors and dynamic panoramic transitions for spatial updating.",
      "Developing gaze-guided navigation systems that adapt to user cognitive states and visual attention.",
      "Applying spherical panoramic environments to AR/VR interfaces for immersive geovisualizations and spatial cognition research."
    ]
  },
  {
    "study": "Nisiforou et al. (2014)",
    "articleTitle": "Using eye tracking to understand the impact of cognitive abilities on search tasks",
    "year": 2014,
    "doi": "10.1007/978-3-319-07509-9_5",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 3,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Eye-tracking (to measure visual attention, cognitive processing, and usability in web search tasks)",
      "Usability Testing (to evaluate task completion time and navigation patterns)",
      "Comparative Analysis (comparing field dependent (FD), field independent (FI), and field mixed (FM) cognitive styles)",
      "AOI (Areas of Interest) Analysis (to analyse attention allocation and fixation transitions)",
      "Scan Path and Heat Map Analysis (to examine cognitive processes and usability patterns)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Within-subjects design"
    ],
    "eyeTrackingDevices": [
      "SMI iViewX (sampling rate not specified)"
    ],
    "evaluationSoftware": [
      "BeGaze 3.1 for eye-tracking data analysis",
      "SPSS for statistical analysis",
      "ViCRAM Algorithm for calculating visual complexity scores of web pages"
    ],
    "taskTypes": [
      "Search Tasks (e.g., finding specific information on web pages)",
      "Fact-Finding Tasks (e.g., known-item search tasks with information located in specific areas)"
    ],
    "numberOfParticipants": [
      "16"
    ],
    "stimuli": [
      "Nine Web Pages with varying visual complexity:",
      "Simple Pages (e.g., Government and Leisure/Social websites)",
      "Medium Complexity Pages (e.g., Education websites)",
      "Complex Pages (e.g., News and Government websites)",
      "ViCRAM Algorithm was used to calculate Visual Complexity Scores (0 for simple, 10 for complex)",
      "Categories of Web Pages:",
      "Government (Simple and Complex)",
      "Leisure/Social (Simple and Medium)",
      "Education (Simple and Medium)",
      "News (Complex)"
    ],
    "stimulusDevices": [
      "Desktop Computer with SMI iViewX Eye Tracker",
      "BeGaze 3.1 for eye-tracking and ViCRAM Algorithm for visual complexity scoring"
    ],
    "findings": [
      "Visual Attention and Cognitive Load:",
      "Field Independent (FI) users demonstrated more efficient visual attention patterns with shorter fixation durations and more organized scan paths.",
      "Field Dependent (FD) users showed longer fixation durations, disoriented scan paths, and higher cognitive load, especially on complex pages.",
      "Field Mixed (FM) users exhibited intermediate performance, with visual attention patterns varying by task complexity.",
      "Task Completion Time:",
      "FI users completed tasks faster than FD users, especially on medium and complex pages:",
      "Complex Pages: FD (M= 157.33s, SD= 72.60) vs. FI (M= 84.70s, SD= 38.53), [t(12)= 2.34, p =.04]",
      "Medium Pages: FD (M= 101.84s, SD= 34.46) vs. FI (M= 50.45s, SD= 9.01), [t(6.82)= 3.82, p=.007]",
      "Simple Pages: No significant differences were found between the groups.",
      "Scan Path and Heat Map Analysis:",
      "Simple Pages: All cognitive groups showed similar attention patterns, with no significant differences in task completion time.",
      "Medium and Complex Pages:",
      "FD users displayed disoriented and scattered scan paths, indicating higher cognitive load and difficulty in extracting information.",
      "FI users demonstrated organized and efficient scan paths, focusing on relevant AOIs.",
      "Cognitive Abilities and Visual Complexity:",
      "FD users were more influenced by external visual cues and showed non-selective information uptake.",
      "FI users were more selective, using internal cognitive strategies and goal-oriented visual attention.",
      "User Preferences and Feedback:",
      "Participants preferred Simple Pages for their clarity and ease of navigation.",
      "Complex Pages were perceived as cognitively demanding, especially by FD users.",
      "Applications and Use Cases:",
      "Web Usability Design: Applying evidence-based design principles to optimize usability for different cognitive groups.",
      "Adaptive User Interfaces: Designing context-aware interfaces that adapt to cognitive styles and visual complexity.",
      "Educational Environments: Enhancing e-learning interfaces by considering cognitive abilities and visual complexity.",
      "Recommendations for Web Design:",
      "Design simple and organized layouts to reduce cognitive load for FD users.",
      "Use visual hierarchy and clear navigation cues to enhance information extraction.",
      "Implement adaptive interfaces that adjust visual complexity based on user cognitive style.",
      "Cognitive and Design Insights:",
      "Field Dependent (FD) users benefit from simplified visual layouts with clear navigation paths.",
      "Field Independent (FI) users prefer complex layouts that support goal-oriented visual attention.",
      "Visual complexity impacts cognitive load and task completion time differently across cognitive groups.",
      "The study validated the effectiveness of using eye-tracking for evaluating cognitive abilities and usability, demonstrating its potential for adaptive web interfaces and personalized user experiences.",
      "Future Research Directions:",
      "Investigating adaptive web interfaces that dynamically adjust visual complexity based on real-time eye-tracking data.",
      "Developing gaze-driven interaction techniques for context-aware web navigation.",
      "Applying machine learning for predicting cognitive load and personalizing user experiences."
    ]
  },
  {
    "study": "Nivala et al. (2008)",
    "articleTitle": "Usability Evaluation of Web Mapping Sites",
    "year": 2008,
    "doi": "10.1179/174327708X305120",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 1,
    "mainMethods": [
      "Usability Testing (to evaluate usability and cognitive efficiency of web mapping sites)",
      "Expert Evaluations (using eight cartographers and eight usability engineers)",
      "User Testing (with eight general users performing predefined tasks)",
      "Qualitative Analysis (categorizing usability problems by severity and functionality)",
      "Comparative Analysis (comparing four web mapping sites: Google Maps, MSN Maps & Directions, MapQuest, and Multimap)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Mixed methods design (Expert evaluations and user tests with predefined tasks)"
    ],
    "eyeTrackingDevices": [
      "Not applicable (Eye-tracking was not used)"
    ],
    "evaluationSoftware": [
      "Video Recording for user tests",
      "Qualitative Coding for categorizing usability problems"
    ],
    "taskTypes": [
      "Location Identification (e.g., finding a street or a point of interest)",
      "Route Planning (e.g., planning a walking route between two points)",
      "Distance Calculation (e.g., calculating the distance between landmarks)",
      "Search Operations (e.g., searching for places, streets, or routes)"
    ],
    "numberOfParticipants": [
      "8+16"
    ],
    "stimuli": [
      "Four Web Mapping Sites:",
      "Google Maps (GM)",
      "MSN Maps & Directions (MD)",
      "MapQuest (MQ)",
      "Multimap (MM)",
      "Predefined Tasks:",
      "Identifying ideal hotel locations in London",
      "Finding streets by name (e.g., Roupell Street)",
      "Calculating distances between landmarks (e.g., Buckingham Palace and Piccadilly Circus)",
      "Planning walking routes (e.g., Sumner Road to Gresham Street)",
      "Finding specific landmarks (e.g., London Bridge)"
    ],
    "stimulusDevices": [
      "Desktop or Laptop PCs in a Windows environment",
      "Web Browsers for accessing the web mapping sites",
      "Video Recording Equipment for user tests"
    ],
    "findings": [
      "Usability Problems and Severity:",
      "403 usability problems were identified, categorized by severity:",
      "33 Catastrophic Problems (Severity 1)",
      "138 Major Problems (Severity 2)",
      "127 Minor Problems (Severity 3)",
      "44 Cosmetic Problems (Severity 4)",
      "343 unique problems were found:",
      "69 in Google Maps (GM)",
      "83 in MSN Maps & Directions (MD)",
      "92 in MapQuest (MQ)",
      "99 in Multimap (MM)",
      "Common Usability Issues:",
      "Search Operations:",
      "Users struggled with ambiguous search results and unclear search logic.",
      "Default settings caused frustration (e.g., US-based defaults for London searches).",
      "Multi-search functionality and map-based search were requested by users.",
      "User Interface (UI) and Layout:",
      "Information overload on start pages due to advertisements and irrelevant links.",
      "Poor layout and grouping of map tools and search boxes, causing confusion.",
      "Hidden or inactive links and distracting animations reduced usability.",
      "Map Visualizations:",
      "Maps were cluttered and visually inconsistent across zoom levels.",
      "Colors and symbols were misleading or non-intuitive.",
      "Text readability was poor due to small font sizes and poor contrast.",
      "Map Tools and Functionality:",
      "Inconsistent zooming behavior and poorly designed scale bars.",
      "Missing customization options for layers and symbols.",
      "Inadequate route visualization and lack of multi-stop routing options.",
      "User Preferences and Feedback:",
      "Users preferred simple and intuitive UIs with clear navigation paths.",
      "Google Maps was favored for its minimalistic design and intuitive search.",
      "Multimap was criticized for its cluttered layout and confusing navigation.",
      "Applications and Use Cases:",
      "Web Mapping Design: Enhancing usability and cognitive efficiency by implementing user-centered design principles.",
      "Geovisualisation Design: Applying evidence-based UI/UX improvements for interactive mapping applications.",
      "Recommendations for Web Mapping Design:",
      "Use intuitive search logic with clear feedback on search results.",
      "Implement context-aware navigation to reduce cognitive load.",
      "Design minimalistic interfaces with consistent visualizations across zoom levels.",
      "Combine multiple navigation methods to cater to different user preferences and tasks.",
      "Cognitive and Design Insights:",
      "Intuitive UIs and clear navigation paths support cognitive mapping and spatial decision-making.",
      "Visual consistency across zoom levels enhances spatial cognition and usability.",
      "The study validated the effectiveness of using usability testing and expert evaluations for web mapping sites, demonstrating its potential for user-centered design and interactive geovisualization.",
      "Future Research Directions:",
      "Investigating adaptive navigation systems that dynamically adjust UI complexity based on user cognitive state.",
      "Developing gaze-guided navigation systems that adapt to user visual attention.",
      "Applying machine learning for predicting cognitive load and personalizing user experiences."
    ]
  },
  {
    "study": "Ooms et al. (2010)",
    "articleTitle": "analysing eye movement patterns to improve map design",
    "year": 2010,
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Eye-tracking (to measure visual attention, cognitive load, and usability of dynamic interactive maps)",
      "Usability Testing (to evaluate effectiveness and cognitive efficiency of interactive maps with pan operations)",
      "Qualitative Analysis (using scanpaths, clustering, and aggregation of eye movement data)",
      "Visual Analytics Toolkit (to visualize scanpaths and analyse spatial patterns in eye movement data)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Within-subjects design"
    ],
    "eyeTrackingDevices": [
      "Eye Link 1000 (1000 Hz, monocular tracking)"
    ],
    "evaluationSoftware": [
      "Visual Analytics Toolkit (CommonGIS) for scanpath visualization and analysis",
      "Qualitative Clustering for aggregating and summarizing eye movement data"
    ],
    "taskTypes": [
      "Visual Search Tasks (e.g., locating city names on interactive maps)",
      "Pan Operation Tasks (e.g., locating labels before and after simulated pan operations)"
    ],
    "numberOfParticipants": [
      "14"
    ],
    "stimuli": [
      "Dynamic Interactive Demo-Maps:",
      "Point Objects (symbolizing cities) and associated Name Labels",
      "List of Five Names displayed on the right side of the map",
      "Simple Background (consistent across all maps)",
      "Pan Operations:",
      "Horizontal Translation after 50 seconds",
      "New List of Names displayed after the pan operation",
      "Twenty Trials:",
      "Each demo-map was presented in a random order",
      "Three new names and two repeated names were displayed after each pan operation"
    ],
    "stimulusDevices": [
      "Desktop Computer with Eye Link 1000 Eye Tracker (1000 Hz)",
      "Visual Analytics Toolkit (CommonGIS) for scanpath visualization"
    ],
    "findings": [
      "Effectiveness of Dynamic Interactive Maps:",
      "The interactive demo-maps effectively simulated dynamic pan operations, revealing visual search patterns and cognitive strategies.",
      "Users started their visual search in the upper part of the map both in the initial view and after the pan operation.",
      "Diagonal search strategies were observed after the pan operation, showing cognitive mapping adjustments.",
      "Visual Attention and Cognitive Load:",
      "Clustered visual attention was observed around name labels and map symbols.",
      "Pan operations influenced visual search strategies, leading to diagonal scanpaths and homogeneous distribution of eye movements.",
      "Visual attention shifted to the list of names during the pan operation, indicating contextual updating and cognitive mapping.",
      "Scanpath and Pattern Analysis:",
      "Time series analysis of scanpaths revealed consistent visual search patterns across users.",
      "Diagonal search strategies were more prominent after pan operations, indicating cognitive adaptation to the new map layout.",
      "Users remembered the left part of the map and used this information to locate new labels more efficiently.",
      "Cognitive Processes and Usability:",
      "Pan operations required cognitive updating and reorientation, influencing spatial cognition.",
      "Users employed cognitive mapping strategies by remembering previously viewed areas, reducing visual search time.",
      "Visual clutter and chaotic scanpaths indicated usability problems, suggesting the need for optimized label positioning.",
      "User Preferences and Feedback:",
      "Participants preferred the interactive demo-maps for their dynamic interactions and contextual updating.",
      "Consistent label positions were recommended to reduce cognitive load during pan operations.",
      "Applications and Use Cases:",
      "Dynamic Geovisualisation: Enhancing usability and cognitive efficiency by optimizing label positioning.",
      "Interactive Cartographic Interfaces: Applying cognitive mapping strategies to improve spatial cognition.",
      "Geovisualisation Design: Using qualitative clustering and scanpath visualization for evidence-based map design.",
      "Recommendations for Dynamic Map Design:",
      "Use consistent label positions to reduce cognitive load and improve usability during pan operations.",
      "Implement adaptive zooming and panning interfaces that maintain visual context and cognitive mapping.",
      "Design context-aware interactions that support cognitive updating and spatial decision-making.",
      "Cognitive and Design Insights:",
      "Consistent label positioning supports cognitive mapping and spatial cognition during dynamic pan operations.",
      "Diagonal search strategies reflect cognitive adaptation and visual attention shifts.",
      "The study validated the effectiveness of dynamic interactive maps for visual search tasks, demonstrating their potential for geovisualization design and cognitive mapping research.",
      "Future Research Directions:",
      "Investigating adaptive pan operations that dynamically adjust based on user gaze patterns and cognitive states.",
      "Developing gaze-guided navigation systems that adapt to user visual attention and cognitive mapping strategies.",
      "Applying machine learning for predicting cognitive load and personalizing dynamic map interactions."
    ]
  },
  {
    "study": "Ooms et al. (2012a)",
    "articleTitle": "Interpreting maps through the eyes of expert and novice users",
    "year": 2012,
    "doi": "10.1080/13658816.2011.642801",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Eye-tracking (to measure visual attention, cognitive load, and usability of dynamic interactive maps)",
      "Usability Testing (to evaluate effectiveness and cognitive efficiency of dynamic maps with simulated pan operations)",
      "Comparative Analysis (comparing expert and novice users in map interpretation)",
      "Fixation Duration and Count Analysis (to analyse cognitive processes and visual attention)",
      "Response Time Measurements (to evaluate task efficiency and cognitive load)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Between-subjects design"
    ],
    "eyeTrackingDevices": [
      "EyeLink 1000 (1000 Hz, monocular tracking)"
    ],
    "evaluationSoftware": [
      "EyeLink Data Viewer for eye-tracking data collection and analysis",
      "Qualitative Clustering for aggregating and summarizing eye movement data",
      "ANOVA and MANOVA for statistical analysis"
    ],
    "taskTypes": [
      "Visual Search Tasks (e.g., locating city names on dynamic interactive maps)",
      "Pan Operation Tasks (e.g., locating labels before and after simulated pan operations)",
      "Cognitive Load and Efficiency Tasks (e.g., response time and fixation duration analysis)"
    ],
    "numberOfParticipants": [
      "16+15"
    ],
    "stimuli": [
      "Dynamic Interactive Maps:",
      "Point Objects (representing cities) and associated Name Labels",
      "Simple Background (homogeneous and controlled across all maps)",
      "Pan Operations:",
      "Horizontal Translation after 50 seconds",
      "New List of Names displayed after the pan operation",
      "Twenty Trials:",
      "Each demo-map was presented in a random order",
      "Three new names and two repeated names were displayed after each pan operation"
    ],
    "stimulusDevices": [
      "Desktop Computer with EyeLink 1000 Eye Tracker (1000 Hz)",
      "21-inch Monitor with 1280×1024 resolution"
    ],
    "findings": [
      "Effectiveness of Dynamic Interactive Maps:",
      "The interactive maps effectively simulated dynamic pan operations, revealing visual search patterns and cognitive strategies.",
      "Users started their visual search in the upper part of the map both in the initial view and after the pan operation.",
      "Diagonal search strategies were observed after the pan operation, showing cognitive mapping adjustments.",
      "Visual Attention and Cognitive Load:",
      "Experts had significantly shorter fixations and more fixations per second than novices, indicating higher cognitive efficiency.",
      "Novices showed longer fixations and disoriented scan paths, indicating higher cognitive load.",
      "Experts were able to interpret more content or a larger part of the map in the same amount of time.",
      "Cognitive Processes and Usability:",
      "Experts showed more efficient cognitive mapping strategies and faster response times than novices.",
      "Novices displayed disorganized scan paths and cognitive overload during the simulated pan operation.",
      "Visual clutter and chaotic scan paths were observed for novices, suggesting the need for optimized label positioning.",
      "User Preferences and Feedback:",
      "Participants preferred the dynamic interactive maps for their contextual updating and dynamic interactions.",
      "Consistent label positions were recommended to reduce cognitive load during pan operations.",
      "Applications and Use Cases:",
      "Dynamic Geovisualisation: Enhancing usability and cognitive efficiency by optimizing label positioning.",
      "Interactive Cartographic Interfaces: Applying cognitive mapping strategies to improve spatial cognition.",
      "Geovisualisation Design: Using qualitative clustering and scanpath visualization for evidence-based map design.",
      "Recommendations for Dynamic Map Design:",
      "Use consistent label positions to reduce cognitive load and improve usability during pan operations.",
      "Implement adaptive zooming and panning interfaces that maintain visual context and cognitive mapping.",
      "Design context-aware interactions that support cognitive updating and spatial decision-making.",
      "Cognitive and Design Insights:",
      "Consistent label positioning supports cognitive mapping and spatial cognition during dynamic pan operations.",
      "Diagonal search strategies reflect cognitive adaptation and visual attention shifts.",
      "The study validated the effectiveness of dynamic interactive maps for visual search tasks, demonstrating their potential for geovisualization design and cognitive mapping research.",
      "Future Research Directions:",
      "Investigating adaptive pan operations that dynamically adjust based on user gaze patterns and cognitive states.",
      "Developing gaze-guided navigation systems that adapt to user visual attention and cognitive mapping strategies.",
      "Applying machine learning for predicting cognitive load and personalizing dynamic map interactions."
    ]
  },
  {
    "study": "Ooms et al. (2012b)",
    "articleTitle": "Investigating the Effectiveness of an Efficient Label Placement Method Using Eye Movement Data",
    "year": 2012,
    "doi": "10.1179/1743277412Y.0000000010",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Eye-tracking (to measure visual attention, cognitive load, and usability of dynamic interactive maps)",
      "Usability Testing (to evaluate effectiveness and cognitive efficiency of dynamic maps with simulated pan operations)",
      "Comparative Analysis (comparing two label placement methods: Border-labels relocated vs. All-labels relocated)",
      "Fixation Duration and Count Analysis (to analyse cognitive processes and visual attention)",
      "Response Time Measurements (to evaluate task efficiency and cognitive load)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Within-subjects design"
    ],
    "eyeTrackingDevices": [
      "EyeLink 1000 (1000 Hz, monocular tracking)"
    ],
    "evaluationSoftware": [
      "EyeLink Data Viewer for eye-tracking data collection and analysis",
      "Qualitative Clustering for aggregating and summarizing eye movement data",
      "ANOVA and MANOVA for statistical analysis"
    ],
    "taskTypes": [
      "Visual Search Tasks (e.g., locating names on dynamic interactive maps)",
      "Pan Operation Tasks (e.g., locating labels before and after simulated pan operations)",
      "Cognitive Load and Efficiency Tasks (e.g., response time and fixation duration analysis)"
    ],
    "numberOfParticipants": [
      "30"
    ],
    "stimuli": [
      "Dynamic Interactive Maps:",
      "Point Objects (representing geographic names) and associated Name Labels",
      "Simple Background (homogeneous and controlled across all maps)",
      "Label Placement Methods:",
      "Border-Labels Relocated (only labels near the border are relocated after panning)",
      "All-Labels Relocated (all labels are recalculated after panning)",
      "Pan Operations:",
      "Horizontal Translation after 50 seconds",
      "New List of Names displayed after the pan operation",
      "Forty Trials:",
      "Two sets of 20 maps with 10 maps using each label placement method",
      "Randomized Display Order to avoid learning effects"
    ],
    "stimulusDevices": [
      "Desktop Computer with EyeLink 1000 Eye Tracker (1000 Hz)",
      "21-inch Monitor with 1280×1024 resolution"
    ],
    "findings": [
      "Effectiveness of Dynamic Interactive Maps:",
      "The interactive maps effectively simulated dynamic pan operations, revealing visual search patterns and cognitive strategies.",
      "No significant difference in response times or fixation durations between Border-Labels Relocated and All-Labels Relocated designs.",
      "Users started their visual search in the upper part of the map both in the initial view and after the pan operation.",
      "Diagonal search strategies were observed after the pan operation, showing cognitive mapping adjustments.",
      "Visual Attention and Cognitive Load:",
      "No significant differences were found in:",
      "Mean Fixation Duration (Border: 229.6 ms, All: 226.9 ms)",
      "Fixation Count (Border: 3.829 fix/s, All: 3.856 fix/s)",
      "Response Times (Border: 5614 ms, All: 5570 ms)",
      "Participants did not notice the difference between the two label placement methods, as revealed in the post-study questionnaire.",
      "Cognitive Processes and Usability:",
      "No significant cognitive load differences were observed between the two label placement methods.",
      "Participants did not have more difficulty processing information with the Border-Labels Relocated design.",
      "User Preferences and Feedback:",
      "No participant noticed the difference between the two label placement methods.",
      "Participants did not express any preference for one label placement type over the other.",
      "Applications and Use Cases:",
      "Dynamic Geovisualisation: Enhancing usability and cognitive efficiency by optimizing label positioning.",
      "Interactive Cartographic Interfaces: Applying cognitive mapping strategies to improve spatial cognition.",
      "Geovisualisation Design: Using qualitative clustering and scanpath visualization for evidence-based map design.",
      "Recommendations for Dynamic Map Design:",
      "Use consistent label positions to reduce cognitive load and improve usability during pan operations.",
      "Implement adaptive zooming and panning interfaces that maintain visual context and cognitive mapping.",
      "Design context-aware interactions that support cognitive updating and spatial decision-making.",
      "Cognitive and Design Insights:",
      "Consistent label positioning supports cognitive mapping and spatial cognition during dynamic pan operations.",
      "Diagonal search strategies reflect cognitive adaptation and visual attention shifts.",
      "The study validated the effectiveness of dynamic interactive maps for visual search tasks, demonstrating their potential for geovisualization design and cognitive mapping research.",
      "Future Research Directions:",
      "Investigating adaptive pan operations that dynamically adjust based on user gaze patterns and cognitive states.",
      "Developing gaze-guided navigation systems that adapt to user visual attention and cognitive mapping strategies.",
      "Applying machine learning for predicting cognitive load and personalizing dynamic map interactions."
    ]
  },
  {
    "study": "Opach and Nossum (2011)",
    "articleTitle": "EVALUATING THE USABILITY OF CARTOGRAPHIC ANIMATIONS WITH EYE MOVEMENT ANALYSIS",
    "year": 2011,
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Eye-tracking (to measure visual attention, cognitive load, and usability of cartographic animations)",
      "Usability Testing (to evaluate effectiveness and cognitive efficiency of semistatic and complex animated maps)",
      "Comparative Analysis (comparing semistatic animations vs. traditional animations and complex animated maps)",
      "AOI (Areas of Interest) Analysis (to analyse attention allocation and fixation transitions)",
      "Temporal Analysis (to examine cognitive processes and usability patterns over time)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Within-subjects design"
    ],
    "eyeTrackingDevices": [
      "Tobii X120 (120 Hz)"
    ],
    "evaluationSoftware": [
      "Tobii Studio for eye-tracking data collection and AOI analysis",
      "Heat Maps and Gaze Plots for visualizing attention patterns",
      "Statistical Analysis for fixation counts, observation length, and time to first fixation"
    ],
    "taskTypes": [
      "Trend Analysis (e.g., observing trends at specific locations over time)",
      "Spatial-Temporal Analysis (e.g., analysing changes across space and time)",
      "Memory Tasks (e.g., recalling specific information from the animations)"
    ],
    "numberOfParticipants": [
      "10"
    ],
    "stimuli": [
      "Two Types of Cartographic Animations:",
      "Semistatic Animations (integrating past, present, and future information in each frame)",
      "Complex Animated Maps (e.g., multi-component map of Kampinos Forest with animated cross-sections and navigation panels)",
      "Semistatic Animation Types:",
      "Temperature Map Animation (numeric information visualized as a line graph)",
      "Weather Map Animation (textual information visualized using pictograms)",
      "Complex Animated Map:",
      "Kampinos Forest Animated Map:",
      "Five Map Scenarios with multi-component views:",
      "Main Animated Map",
      "Small Animated Map",
      "Animated Cross-Sections",
      "Navigation Components with Graphs"
    ],
    "stimulusDevices": [
      "Tobii X120 Eye Tracker (120 Hz)",
      "19” Monitor with Tobii Studio’s Built-in Browser for animation display",
      "HTML Forms for recording task answers"
    ],
    "findings": [
      "Effectiveness of Semistatic vs. Traditional Animations:",
      "Semistatic animations allowed users to look back and forth in time without controlling the flow, enhancing temporal comparison.",
      "Traditional animations required strict attention to temporal changes, increasing cognitive load.",
      "Viewing strategies were surprisingly similar for both types, contradicting initial beliefs.",
      "Time to first fixation and fixation counts showed minor differences, with high variance due to different viewing strategies.",
      "Visual Attention and Cognitive Load:",
      "Complex animated maps (e.g., Kampinos Forest) led to split attention and cognitive overload due to multi-component layouts.",
      "Participants struggled to integrate information from multiple animated components (e.g., graphs, navigation panels).",
      "Longer observation length was recorded for participants who made incorrect scenario choices.",
      "User Preferences and Feedback:",
      "Participants preferred semistatic animations for trend analysis due to temporal comparison flexibility.",
      "Complex animated maps were perceived as cognitively demanding but engaging and informative.",
      "Visual clutter was reported in gaze plots and heat maps, indicating the need for optimized component layout.",
      "Applications and Use Cases:",
      "Cartographic Animation Design: Enhancing usability and cognitive efficiency by integrating semistatic features.",
      "Geovisualisation Design: Applying temporal comparison techniques for spatial-temporal data analysis.",
      "Human-Computer Interaction (HCI): Designing dynamic geovisualizations that support cognitive mapping.",
      "Recommendations for Animated Map Design:",
      "Use semistatic animations for temporal comparison tasks and trend analysis.",
      "Avoid complex multi-component layouts to reduce cognitive load and split attention.",
      "Design context-aware interactions that support temporal comparison and spatial decision-making.",
      "Cognitive and Design Insights:",
      "Semistatic animations enhance temporal comparison and cognitive efficiency by integrating past, present, and future information.",
      "Complex animated maps increase cognitive load due to split attention and multi-component layouts.",
      "The study validated the effectiveness of semistatic animations for temporal comparison tasks, demonstrating their potential for dynamic geovisualization and cartographic animation design.",
      "Future Research Directions:",
      "Investigating adaptive cartographic animations that dynamically adjust temporal comparison views based on user cognitive state.",
      "Developing gaze-guided geovisualizations that adapt to user visual attention and cognitive load.",
      "Applying machine learning for real-time cognitive feedback and personalized geovisualization experiences."
    ]
  },
  {
    "study": "Opach et al. (2014)",
    "articleTitle": "How Do People View Multi-Component Animated Maps?",
    "year": 2014,
    "doi": "10.1179/1743277413Y.0000000049",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Eye-tracking (to measure visual attention, cognitive load, and usability of multi-component animated maps)",
      "Usability Testing (to evaluate effectiveness and cognitive efficiency of multi-component dynamic cartographic displays)",
      "Comparative Analysis (comparing viewing patterns between free-exploration and task-based viewing)",
      "AOI (Areas of Interest) Analysis (to analyse attention allocation and fixation transitions)",
      "Gaze Transition Analysis (to examine cognitive processes and usability patterns)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Within-subjects design"
    ],
    "eyeTrackingDevices": [
      "Tobii X120 (120 Hz)"
    ],
    "evaluationSoftware": [
      "Tobii Studio for eye-tracking data collection and AOI analysis",
      "Heat Maps and Gaze Plots for visualizing attention patterns",
      "Temporal Analysis for fixation durations and attention allocation"
    ],
    "taskTypes": [
      "Free-Exploration Task (e.g., viewing multi-component animated maps without a specific task)",
      "Task-Based Viewing (e.g., viewing all components with specific questions related to temporal and spatial relations)"
    ],
    "numberOfParticipants": [
      "23"
    ],
    "stimuli": [
      "Multi-Component Animated Map:",
      "Main Animated Map (showing the progression of a fictitious forest fire over a satellite image)",
      "Wind Speed and Direction Animation (synchronized with the fire progression)",
      "Static Land Cover Map (showing land cover types of the affected area)",
      "Timeline (displaying temporal changes and context)",
      "Forest Fire Visualisator:",
      "Three Components:",
      "Fire Progression Animation (52.4% of display area)",
      "Wind Speed and Direction Animation (18.4% of display area)",
      "Static Land Cover Map (18.4% of display area)",
      "Timeline (10.8% of display area)",
      "Two Viewing Sessions:",
      "Free Exploration (first session without specific tasks)",
      "Goal-Directed Viewing (second session with questions related to temporal and spatial relations)"
    ],
    "stimulusDevices": [
      "Tobii X120 Eye Tracker (120 Hz)",
      "20” Flat Screen Monitor (1600×1200 resolution)",
      "Forest Fire Visualisator (developed using Adobe Flash)"
    ],
    "findings": [
      "Effectiveness of Multi-Component Animated Maps:",
      "Multi-component animated maps are effective for temporal comparison and spatial analysis but require careful design to avoid split attention.",
      "Component size and dynamic variables attracted most visual attention.",
      "Visual behavior patterns influenced task performance, with differences between free-exploration and goal-directed viewing.",
      "Visual Attention and Cognitive Load:",
      "Fire Progression Animation received the most attention in both viewing sessions, followed by Wind Speed and Direction.",
      "Land Cover Map received the least attention, especially during free exploration.",
      "Dynamic animations attracted more attention than static components, confirming motion as a visual saliency driver.",
      "Cognitive Processes and Usability:",
      "Split attention occurred when users had to integrate information across multiple dynamic components.",
      "More effective users exhibited more frequent transitions between components and more balanced attention allocation.",
      "Less effective users fixated more on the Fire Progression Animation, resulting in less effective cognitive mapping.",
      "User Preferences and Feedback:",
      "Participants preferred dynamic components for temporal comparisons but found static components less engaging.",
      "Free exploration led to intuitive viewing patterns, while task-based viewing guided attention more evenly.",
      "Applications and Use Cases:",
      "Cartographic Animation Design: Enhancing usability and cognitive efficiency by integrating dynamic and static components.",
      "Geovisualisation Design: Applying motion and dynamic variables for temporal comparison and spatial analysis.",
      "Human-Computer Interaction (HCI): Designing context-aware geovisualizations to reduce split attention and cognitive load.",
      "Recommendations for Animated Map Design:",
      "Use dynamic variables for temporal comparison and static components for spatial context.",
      "Reduce cognitive load by minimizing split attention and optimizing component layout.",
      "Design context-aware interactions that support temporal comparison and spatial decision-making.",
      "Cognitive and Design Insights:",
      "Multi-component animated maps support temporal comparison and spatial cognition but require careful layout design.",
      "Motion and dynamic variables enhance visual saliency but can cause split attention and cognitive overload.",
      "The study validated the effectiveness of multi-component animated maps for spatio-temporal analysis, demonstrating their potential for geovisualization design and cognitive mapping research.",
      "Future Research Directions:",
      "Investigating adaptive multi-component interfaces that dynamically adjust based on user cognitive state and attention patterns.",
      "Developing gaze-guided geovisualizations that adapt to user visual attention and cognitive load.",
      "Applying machine learning for real-time cognitive feedback and personalized geovisualization experiences."
    ]
  },
  {
    "study": "Peng and Liao (2016)",
    "articleTitle": "Evaluation of interactive data visualization tools based on gaze and mouse tracking",
    "year": 2016,
    "doi": "10.1109/ISM.2016.77",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 3,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Eye-tracking (to measure visual attention, cognitive load, and usability of interactive data visualization tools)",
      "Mouse Tracking (to analyse navigation patterns and user interactions)",
      "Quantitative Usability Testing (using gaze and mouse tracking data to evaluate usability and cognitive efficiency)",
      "Sequence Analysis (translating user operations into sequences for comparing with optimal sequences)",
      "Edit Distance and Fitts' Law (to evaluate operational efficiency and cognitive load)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Within-subjects design"
    ],
    "eyeTrackingDevices": [
      "Eye Tribe (30 Hz, low-cost eye tracker)"
    ],
    "evaluationSoftware": [
      "OGAMA (Open Gaze and Mouse Analyzer) for data collection and analysis",
      "Sequence Analysis for comparing user sequences with optimal sequences",
      "Edit Distance Calculation for evaluating operational efficiency",
      "Fitts' Law for calculating movement time (MT) between AOIs"
    ],
    "taskTypes": [
      "Search and Navigation Tasks (e.g., finding specific information using interactive visualizations)",
      "Exploration Tasks (e.g., exploring layers of comments and social media usage patterns)",
      "Trend Analysis and Pattern Recognition (e.g., identifying trends and patterns in data visualizations)"
    ],
    "numberOfParticipants": [
      "19"
    ],
    "stimuli": [
      "Two Interactive Data Visualization Tools:",
      "Tool W: Active users on a Facebook fan page and share map of a single post",
      "Tool K: Layers of comments of a post",
      "38 Tasks:",
      "Open-Ended and Short-Answer Questions based on Amar’s taxonomy of low-level analytic tasks for information visualization",
      "Visual Elements:",
      "Main and Secondary Functions (e.g., biggest areas as main functions)",
      "Floating Windows (appearing and disappearing during user operation)"
    ],
    "stimulusDevices": [
      "Desktop Computer with Eye Tribe Eye Tracker (30 Hz)",
      "22-inch Screen (1680×1050 resolution)",
      "OGAMA (Open Gaze and Mouse Analyzer) for data collection and analysis"
    ],
    "findings": [
      "Effectiveness of Gaze and Mouse Tracking:",
      "Gaze and mouse tracking effectively measured usability, cognitive load, and operational efficiency.",
      "Correlation between gaze and mouse movement was observed, validating the eye-mind hypothesis.",
      "Both gaze and mouse tracking were necessary for accurate usability evaluation.",
      "Visual Attention and Cognitive Load:",
      "Main functions (largest areas) were discovered more quickly and used more frequently than secondary functions.",
      "Secondary functions were often overlooked, indicating discoverability issues.",
      "Redundant steps were observed when users repeated or skipped steps, suggesting usability issues.",
      "Usability and Cognitive Load:",
      "Average correct rate ranged from 60% to 80%, indicating moderate usability.",
      "Operating time ranged from 40 to 50 seconds per task, with significant differences between functions.",
      "More efficient users followed optimal sequences or admissible operation sequences, reducing cognitive load.",
      "Sequence Analysis and Operational Efficiency:",
      "User behavior was translated into sequences for pattern analysis.",
      "Edit Distance (ED) and Fitts' Law were used to calculate surplus steps and movement time (MT).",
      "Average surplus operation (Edit Distance) was 44 steps, indicating efficiency issues.",
      "User Preferences and Feedback:",
      "Participants preferred the simpler layouts and intuitive designs.",
      "Complex visualizations led to confusion and redundant operations.",
      "Level differentiation (dividing design into levels of difficulty) was recommended for better usability.",
      "Applications and Use Cases:",
      "Interactive Data Visualization: Enhancing usability and cognitive efficiency by optimizing layout and interaction patterns.",
      "Human-Computer Interaction (HCI): Applying gaze and mouse tracking for user-centered interface design.",
      "Adaptive User Interfaces: Developing context-aware interfaces that adapt to user behavior and cognitive load.",
      "Recommendations for Interactive Data Visualization:",
      "Use simpler layouts with intuitive designs for better discoverability and usability.",
      "Implement context-aware interactions that adapt to user cognitive state and behavior patterns.",
      "Design level differentiation for complex visualizations, allowing users to gradually explore and learn.",
      "Cognitive and Design Insights:",
      "Gaze and mouse tracking support cognitive mapping by integrating visual attention and navigation patterns.",
      "Sequence analysis enhances operational efficiency and usability evaluation by identifying redundant steps.",
      "The study validated the effectiveness of gaze and mouse tracking for interactive data visualization usability evaluation, demonstrating its potential for user-centered design and adaptive interfaces.",
      "Future Research Directions:",
      "Expanding sequence analysis to support more complex interactive visualizations.",
      "Developing gaze-guided interfaces that dynamically adapt to user cognitive state and attention patterns.",
      "Applying machine learning for pattern recognition in gaze and mouse data to personalize user experiences."
    ]
  },
  {
    "study": "Popelka et al. (2019a)",
    "articleTitle": "User Evaluation of Map-Based Visual Analytic Tools",
    "year": 2019,
    "doi": "10.3390/ijgi8080363",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Eye-tracking (to measure visual attention, cognitive load, and usability of map-based visual analytic tools)",
      "Usability Testing (to evaluate effectiveness and cognitive efficiency of three map-based visual analytic tools)",
      "Qualitative Analysis (using AOI analysis, scanpaths, and sequence charts)",
      "Comparative Analysis (comparing three different visual analytic tools: Chicago Map, Pilsen Map, and Flanders Map)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Within-subjects design"
    ],
    "eyeTrackingDevices": [
      "SMI RED 250 (250 Hz)"
    ],
    "evaluationSoftware": [
      "SMI Experiment Center for experiment design",
      "SMI BeGaze for data analysis and AOI metrics",
      "OGAMA (Open Gaze and Mouse Analyzer) for static part analysis",
      "SMI2OGAMA Converter for data transformation"
    ],
    "taskTypes": [
      "Static Viewing Tasks (e.g., free exploration of map interfaces to identify attention hotspots)",
      "Dynamic Interaction Tasks (e.g., filtering data, changing heatmap colors, timeline exploration)",
      "Information Retrieval Tasks (e.g., finding crime numbers, traffic flow details, and accident statistics)"
    ],
    "numberOfParticipants": [
      "17"
    ],
    "stimuli": [
      "Three Map-Based Visual Analytic Tools:",
      "Chicago Map: Visualizes reported crime incidents in Chicago using WebGLayer.",
      "Pilsen Map: Displays historical and real-time traffic flows in Pilsen using HSLayers NG.",
      "Flanders Map: Shows traffic accidents in Flanders using WebGLayer.",
      "Static and Dynamic Stimuli:",
      "Static Part: Six screenshots (two from each map) presented for 10 seconds each.",
      "Dynamic Part: Four tasks for each map, involving data filtering, visualization changes, and timeline analysis.",
      "Tasks for “Chicago Map”:",
      "Change the color of the heatmap.",
      "Display all crimes occurring on Saturdays from 17:00 to midnight.",
      "Find and verbalize the number of these crimes.",
      "Mark any area on the map using the “Polygon” tool.",
      "Tasks for “Pilsen Map”:",
      "Change the map type to “Basic OSM.”",
      "Display the map legend.",
      "Retrieve road closure information for a specific time and date.",
      "Explore the “Timeline of constructions.”",
      "Tasks for “Flanders Map”:",
      "Switch to the accident layer.",
      "Filter accidents occurring during rain.",
      "Estimate accidents within a specific speed range.",
      "Verbally interpret the parallel coordinates plot."
    ],
    "stimulusDevices": [
      "Desktop Computer with SMI RED 250 Eye Tracker (250 Hz)",
      "24-inch Monitor (1920×1080 resolution)",
      "Google Chrome Browser for dynamic web map interaction"
    ],
    "findings": [
      "Effectiveness of Map-Based Visual Analytic Tools:",
      "WebGLayer and HSLayers NG effectively visualized complex spatio-temporal data for decision support.",
      "Dynamic visualizations were more engaging but increased cognitive load and visual complexity.",
      "Chicago Map and Flanders Map were perceived as more user-friendly compared to Pilsen Map.",
      "Visual Attention and Cognitive Load:",
      "Dynamic visualizations attracted more attention but led to split attention and cognitive overload.",
      "Static components were less engaging but provided better contextual understanding.",
      "Usability and Cognitive Load:",
      "Task completion rates were higher for Chicago Map and Flanders Map compared to Pilsen Map.",
      "User feedback highlighted confusing controls and poorly integrated legends.",
      "User Preferences and Feedback:",
      "Participants preferred dynamic animations for temporal comparisons but faced cognitive overload with multi-component layouts.",
      "Interactive filters and timelines were rated as highly useful but complex to operate.",
      "Applications and Use Cases:",
      "Geovisualisation Design: Applying dynamic filtering and timeline exploration for spatio-temporal analysis.",
      "Human-Computer Interaction (HCI): Using eye-tracking insights to optimize UI/UX design for interactive visual analytics.",
      "Recommendations for Map-Based Visual Analytics Design:",
      "Integrate intuitive controls and context-aware legends to enhance usability.",
      "Optimize dynamic animations to reduce cognitive load and split attention.",
      "Use color coding and interactive timelines for temporal comparisons.",
      "Cognitive and Design Insights:",
      "Dynamic visualizations enhance temporal analysis but require careful layout design to minimize cognitive overload.",
      "Static components support contextual understanding and cognitive mapping.",
      "The study validated the effectiveness of map-based visual analytics tools for spatio-temporal analysis, demonstrating their potential for geovisualization design and cognitive mapping research.",
      "Future Research Directions:",
      "Investigating adaptive geovisualizations that dynamically adjust UI complexity based on user cognitive state.",
      "Developing gaze-guided navigation systems that adapt to user visual attention and cognitive load.",
      "Applying machine learning for real-time cognitive feedback and personalized geovisualization experiences."
    ]
  },
  {
    "study": "Popelka et al. (2019b)",
    "articleTitle": "Eye-tracking Evaluation of Weather Web Maps",
    "year": 2019,
    "doi": "10.3390/ijgi8060256",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Eye-tracking (to measure visual attention, cognitive load, and usability of weather web maps)",
      "Usability Testing (to evaluate effectiveness and cognitive efficiency of five weather web maps)",
      "Think-Aloud Protocol (to collect qualitative data on user interactions and experiences)",
      "Qualitative Analysis (using AOI analysis, sequence charts, and user feedback)",
      "Comparative Analysis (comparing five different weather web maps: DarkSky, In-Počasí, Windy, YR.no, and Wundermap)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Within-subjects design"
    ],
    "eyeTrackingDevices": [
      "SMI RED 250 (250 Hz)"
    ],
    "evaluationSoftware": [
      "SMI Experiment Center for experiment design",
      "SMI BeGaze for data analysis and AOI metrics",
      "OGAMA (Open Gaze and Mouse Analyzer) for static part analysis",
      "Sequence Chart and ScanGraph for analysing viewing strategies"
    ],
    "taskTypes": [
      "Dynamic Interaction Tasks (e.g., switching thematic layers, scrolling map, switching timelines)",
      "Information Retrieval Tasks (e.g., identifying wind speed, cloud cover, and precipitation patterns)",
      "Comparison Tasks (e.g., comparing weather conditions across multiple locations)",
      "Trend Analysis and Pattern Recognition (e.g., identifying weather trends and patterns over time)"
    ],
    "numberOfParticipants": [
      "34"
    ],
    "stimuli": [
      "Five Weather Web Maps:",
      "DarkSky: Simple composition, no advanced map features, missing legend",
      "Windy: Highly interactive with customizable layers, animations, and complex visualization",
      "In-Počasí: Simple and intuitive design, Czech Hydrometeorological Institute’s web portal",
      "YR.no: Norwegian web map with interactivity for Nordic countries, well-placed legend",
      "Wundermap: Chaotic layout, complex interaction, and unclear data visualization",
      "Three Test Sections:",
      "Introductory Section: Free viewing of web maps to learn about functionality",
      "Dynamic Section: Interactive tasks with real-time weather data",
      "Static Section: Viewing static screenshots without interactivity",
      "Three Rounds of Questions for Dynamic and Static Sections:",
      "Wind Speed: Identifying areas with highest/lowest wind speed",
      "Cloud Cover: Determining cloud coverage at specific locations and times",
      "Precipitation: Predicting rainfall at particular places and times"
    ],
    "stimulusDevices": [
      "Desktop Computer with SMI RED 250 Eye Tracker (250 Hz)",
      "24-inch Monitor (1920×1080 resolution)",
      "Google Chrome Browser for dynamic web map interaction"
    ],
    "findings": [
      "Usability and Task Performance:",
      "Windy and YR.no provided the best usability with intuitive interfaces and well-organized controls.",
      "Wundermap was the least usable due to chaotic layout, complex interaction, and unclear data visualization.",
      "In-Počasí was highly rated for its simple and intuitive design and clear visualization.",
      "DarkSky lacked advanced features and a missing legend made interpretation difficult.",
      "Visual Attention and Cognitive Load:",
      "Dynamic animations attracted more attention but led to split attention and cognitive overload.",
      "Static components provided better contextual understanding and lower cognitive load.",
      "Windy had the most engaging visualizations, but also the highest cognitive load due to complexity.",
      "User Preferences and Feedback:",
      "Participants preferred static menus over expandable control panels.",
      "Simple and intuitive designs were favored, while cluttered layouts caused confusion.",
      "Interactive filters and timelines were rated as useful but complex to operate.",
      "Applications and Use Cases:",
      "Weather Web Map Design: Enhancing usability and cognitive efficiency by optimizing layout and interaction patterns.",
      "Geovisualisation Design: Applying dynamic filtering and timeline exploration for spatio-temporal analysis.",
      "Human-Computer Interaction (HCI): Using eye-tracking insights to optimize UI/UX design for interactive weather maps.",
      "Recommendations for Weather Web Map Design:",
      "Integrate intuitive controls and context-aware legends to enhance usability.",
      "Optimize dynamic animations to reduce cognitive load and split attention.",
      "Use color coding and interactive timelines for temporal comparisons.",
      "Cognitive and Design Insights:",
      "Dynamic visualizations enhance temporal analysis but require careful layout design to minimize cognitive overload.",
      "Static components support contextual understanding and cognitive mapping.",
      "The study validated the effectiveness of weather web maps for spatio-temporal analysis, demonstrating their potential for geovisualization design and cognitive mapping research.",
      "Future Research Directions:",
      "Investigating adaptive weather web maps that dynamically adjust UI complexity based on user cognitive state.",
      "Developing gaze-guided navigation systems that adapt to user visual attention and cognitive load.",
      "Applying machine learning for real-time cognitive feedback and personalized geovisualization experiences."
    ]
  },
  {
    "study": "Popelka et al. (2022)",
    "articleTitle": "Swipe versus multiple view: a comprehensive analysis using eye-tracking to evaluate user interaction with web maps",
    "year": 2022,
    "doi": "10.1080/15230406.2021.2015721",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Eye-tracking (to measure visual attention, cognitive load, and usability of swipe and multiple view methods)",
      "Usability Testing (to evaluate effectiveness and cognitive efficiency of multiple view vs. swipe methods)",
      "Comparative Analysis (comparing multiple view and swipe for map comparison tasks)",
      "AOI (Areas of Interest) Analysis (to analyse attention allocation and fixation transitions)",
      "Gaze Transition Analysis (to examine cognitive processes and usability patterns)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Within-subjects design"
    ],
    "eyeTrackingDevices": [
      "SMI RED 250 (250 Hz)"
    ],
    "evaluationSoftware": [
      "SMI Experiment Center for experiment design",
      "SMI BeGaze for data analysis and AOI metrics",
      "Sequence Chart and ScanGraph for analysing viewing strategies"
    ],
    "taskTypes": [
      "Map Comparison Tasks (e.g., comparing land suitability using two or four maps)",
      "Information Retrieval Tasks (e.g., identifying highest land suitability areas)",
      "Spatial Pattern Recognition (e.g., recognizing spatial relationships between maps)"
    ],
    "numberOfParticipants": [
      "25"
    ],
    "stimuli": [
      "Two Map Comparison Methods:",
      "Multiple View: Simultaneous side-by-side display of two or four synchronized map windows",
      "Swipe: Dragging and overlapping two maps using a horizontal or vertical slider",
      "Nine Web Map Applications:",
      "Land Suitability Maps created using Urban Planner in Esri ArcGIS Online",
      "Four Types of Suitability: Housing, Recreation, Commercial Activities, and Industry",
      "Tasks:",
      "Task 1: Select the highest suitability area (Training task with one window, not analysed in detail)",
      "Task 2: Select the highest suitability area using two or four maps",
      "Task 3: Select the area with a high value of one suitability type and low values of others"
    ],
    "stimulusDevices": [
      "Desktop Computer with SMI RED 250 Eye Tracker (250 Hz)",
      "24-inch Monitor (1920×1080 resolution)",
      "Google Chrome Browser for dynamic web map interaction"
    ],
    "findings": [
      "Effectiveness of Multiple View vs. Swipe:",
      "Multiple View was more efficient and accurate for comparing four maps.",
      "Swipe was more efficient for comparing two maps but confusing for more than two layers.",
      "Multiple View enabled intuitive comparisons and better spatial pattern recognition.",
      "Swipe caused split attention and cognitive overload during four-layer comparisons.",
      "Visual Attention and Cognitive Load:",
      "Multiple View produced shorter trial durations and lower cognitive load than Swipe.",
      "Swipe required layer switching and order changes, increasing cognitive effort.",
      "Multiple View facilitated visual comparisons and cognitive mapping by displaying all layers simultaneously.",
      "Usability and Cognitive Load:",
      "Swipe was efficient for two maps but confusing for four maps, causing cognitive overload.",
      "Multiple View enabled seamless comparisons by maintaining spatial context across synchronized windows.",
      "User Preferences and Feedback:",
      "Participants preferred Multiple View for its intuitive design and easy-to-use layout.",
      "Swipe was perceived as confusing and difficult to manage with four layers.",
      "Participants toggled layers instead of using the swipe slider for complex tasks.",
      "Applications and Use Cases:",
      "Web Map Design: Enhancing usability and cognitive efficiency by using Multiple View for complex comparisons.",
      "Geovisualisation Design: Applying Multiple View for spatial pattern recognition and map comparison.",
      "Human-Computer Interaction (HCI): Using eye-tracking insights to optimize UI/UX design for interactive web maps.",
      "Recommendations for Web Map Design:",
      "Use Multiple View for comparing more than two maps to reduce cognitive load and split attention.",
      "Avoid Swipe for four-layer comparisons due to confusing interactions and cognitive overload.",
      "Design context-aware interactions that support spatial comparisons and spatial decision-making.",
      "Cognitive and Design Insights:",
      "Multiple View supports cognitive mapping and spatial cognition by integrating all layers in a synchronized layout.",
      "Swipe causes cognitive overload and split attention when used with more than two layers.",
      "The study validated the effectiveness of Multiple View for interactive map comparison, demonstrating its potential for geovisualization design and cognitive mapping research.",
      "Future Research Directions:",
      "Investigating adaptive map comparison interfaces that dynamically switch between Multiple View and Swipe based on user cognitive state.",
      "Developing gaze-guided navigation systems that adapt to user visual attention and cognitive load.",
      "Applying machine learning for real-time cognitive feedback and personalized geovisualization experiences."
    ]
  },
  {
    "study": "Putra and Ogata (2022)",
    "articleTitle": "NAVIGATING THROUGH GOOGLE MAPS USING AN EYE-GAZE INTERFACE SYSTEM",
    "year": 2022,
    "doi": "10.24507/ijicic.18.02.417",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Eye-tracking (to measure visual attention and usability for navigation tasks)",
      "Joystick-Like Controls (converting eye-gaze input into joystick-like movement for Google Maps navigation)",
      "Usability Testing (comparing completion times between eye-gaze controls and joystick-keyboard combinations)",
      "Quantitative Analysis (using completion times, error rates, and user feedback)",
      "Qualitative Analysis (using think-aloud protocol and user feedback)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Within-subjects design"
    ],
    "eyeTrackingDevices": [
      "Wearable Eye-Tracking Device (custom-built using a visible light camera and analog-to-USB adapter)"
    ],
    "evaluationSoftware": [
      "OpenCV for image processing and eye-gaze tracking",
      "Python for system implementation and data analysis",
      "Google Maps API for navigation and map interactions"
    ],
    "taskTypes": [
      "Navigation Tasks (e.g., moving cursor, rotating 360°, moving forward and backward)",
      "Virtual Tour Tasks (e.g., navigating Google Street View and experiencing a virtual tour)",
      "Exploration Tasks (e.g., zooming in and out, selecting locations, opening Street View)"
    ],
    "numberOfParticipants": [
      "5"
    ],
    "stimuli": [
      "Google Maps (Desktop Version):",
      "2D Map View: Interactive map navigation using cursor movements",
      "Street View: Virtual tour using rotation and movement controls",
      "Navigation Functions:",
      "Scroll Function: Moving the map using joystick-like controls",
      "Zoom Function: Zooming in and out using eye-gaze inputs",
      "Rotate Function: Rotating Street View using joystick-like eye-gaze inputs",
      "Move Function: Moving forward and backward using eye-gaze inputs"
    ],
    "stimulusDevices": [
      "Wearable Eye-Tracking Device (Custom-built using a visible light camera)",
      "Google Maps API for navigation and interaction",
      "HP ProBook 640 G4 (15.6\" display, Intel Core i7, Windows 10)"
    ],
    "findings": [
      "Effectiveness of Eye-Gaze Interface System:",
      "Eye-gaze controls were effective for navigating Google Maps but generally slower than joystick-keyboard combinations.",
      "Completion times for eye-gaze controls were 1.15 to 3.69 times longer than joystick-keyboard controls.",
      "Eye-gaze system showed high usability and cognitive efficiency with a rapid reduction in completion times for beginner users.",
      "Joystick-like controls effectively translated eye-gaze movement into cursor movements for intuitive navigation.",
      "Visual Attention and Cognitive Load:",
      "Eye-gaze controls produced longer fixation durations and higher cognitive load compared to joystick-keyboard controls.",
      "Joystick-like controls enhanced cognitive mapping and visual attention by translating gaze into directional inputs.",
      "Split attention occurred when users switched between map controls and navigation tasks.",
      "Usability and Cognitive Load:",
      "Completion times for eye-gaze controls were longer than joystick-keyboard controls but became more consistent with practice.",
      "Eye-gaze controls were most effective for cursor movements and virtual tours but less precise for rotation tasks.",
      "Joystick-like controls provided high precision for rotation tasks compared to eye-gaze controls.",
      "User Preferences and Feedback:",
      "Participants found eye-gaze controls to be intuitive and easy to learn, with a rapid learning curve.",
      "Joystick-like controls were preferred for rotation tasks due to higher precision.",
      "Participants appreciated the hands-free interaction and wearable design of the eye-gaze system.",
      "Applications and Use Cases:",
      "Hands-Free Navigation Systems: Supporting virtual tourism, map exploration, and accessibility applications.",
      "Human-Computer Interaction (HCI): Applying joystick-like eye-gaze controls for interactive navigation systems.",
      "Adaptive User Interfaces: Developing context-aware interfaces that adapt to gaze patterns and cognitive load.",
      "Recommendations for Eye-Gaze Interface Design:",
      "Use joystick-like controls for intuitive navigation and hands-free interactions.",
      "Implement adaptive gaze tracking to enhance precision and usability for rotation tasks.",
      "Design context-aware interactions that support spatial navigation and virtual tourism.",
      "Cognitive and Design Insights:",
      "Joystick-like eye-gaze controls support cognitive mapping and spatial cognition by integrating gaze patterns and navigation inputs.",
      "Hands-free interactions enhance cognitive efficiency but require adaptive controls for precision tasks.",
      "The study validated the effectiveness of eye-gaze interface systems for interactive map navigation, demonstrating their potential for hands-free navigation and virtual tourism.",
      "Future Research Directions:",
      "Investigating adaptive gaze tracking systems that dynamically adjust controls based on user cognitive state.",
      "Developing gaze-guided navigation systems for virtual tourism and interactive map applications.",
      "Applying machine learning for real-time cognitive feedback and personalized navigation experiences."
    ]
  },
  {
    "study": "Qiao and Wu (2024)",
    "articleTitle": "An exploratory tag map for attributes-in-space tasks",
    "year": 2024,
    "doi": "10.1016/j.jag.2024.104127",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Eye-tracking (to measure visual attention, cognitive load, and usability of the exploratory tag map)",
      "Usability Testing (to evaluate effectiveness, efficiency, and cognitive load of the exploratory tag map)",
      "Comparative Analysis (comparing the exploratory tag map with intrinsic tag maps)",
      "AOI (Areas of Interest) Analysis (to analyse attention allocation and fixation transitions)",
      "Sequence Analysis and Heat Maps (to examine cognitive processes and usability patterns)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Between-subjects design"
    ],
    "eyeTrackingDevices": [
      "Desktop Eye Tracker (120 Hz)"
    ],
    "evaluationSoftware": [
      "SMI Experiment Center for experiment design",
      "SMI BeGaze for data analysis and AOI metrics",
      "Sequence Chart and ScanGraph for analysing viewing strategies"
    ],
    "taskTypes": [
      "Global-Within Task (e.g., overview of tags within an attribute class globally)",
      "Local-Within Task (e.g., detailed analysis of tags within an attribute class locally)",
      "Global-Between Task (e.g., comparison of distribution differences between attribute classes globally)",
      "Local-Between Task (e.g., comparison of attribute classes in different local regions)"
    ],
    "numberOfParticipants": [
      "50"
    ],
    "stimuli": [
      "Exploratory Tag Map:",
      "Four Attributes-in-Space Tasks:",
      "Global-Within Task (overview of tags within an attribute class globally)",
      "Local-Within Task (detailed analysis of tags within an attribute class locally)",
      "Global-Between Task (comparison of distribution differences between attribute classes globally)",
      "Local-Between Task (comparison of attribute classes in different local regions)",
      "Intrinsic Tag Map (for comparison; does not differentiate between attributes-in-space tasks)",
      "Two Case Studies:",
      "Major Disaster Occurrences (1981-2020) using data from EM-DAT (Emergency Events Database)",
      "Leading Causes of Death (2000 and 2019) using data from WHO's Global Health Estimates"
    ],
    "stimulusDevices": [
      "Desktop Computer with 120 Hz Eye Tracker",
      "24-inch Monitor (1920×1080 resolution)"
    ],
    "findings": [
      "Effectiveness of Exploratory Tag Map:",
      "Exploratory tag maps were more effective and efficient and had a lower cognitive load compared to intrinsic tag maps.",
      "Higher accuracy was achieved using the exploratory tag map, with users showing more attention in AOIs and requiring fewer fixations.",
      "Visual Attention and Cognitive Load:",
      "Exploratory tag map resulted in shorter trial durations and lower cognitive load for all four attributes-in-space tasks.",
      "Intrinsic tag maps caused split attention and cognitive overload due to undifferentiated attribute analysis.",
      "Usability and Cognitive Load:",
      "Exploratory tag map achieved higher task completion rates and lower cognitive load for all attributes-in-space tasks.",
      "Intrinsic tag maps were less efficient for global-between and local-between tasks.",
      "User Preferences and Feedback:",
      "Participants preferred exploratory tag maps for their intuitive design and better cognitive mapping.",
      "Intrinsic tag maps were perceived as confusing due to undifferentiated attribute visualization.",
      "Exploratory tag maps scored higher in legibility and layout but similar in aesthetics and density.",
      "Applications and Use Cases:",
      "Geovisualisation Design: Enhancing usability and cognitive efficiency by integrating exploratory tag maps for attributes-in-space analysis.",
      "Human-Computer Interaction (HCI): Applying exploratory tag maps for user-centered geovisualization and spatial decision-making.",
      "Recommendations for Tag Map Design:",
      "Use exploratory tag maps for global-between and local-between tasks to reduce cognitive load and improve usability.",
      "Avoid intrinsic tag maps for complex attribute analysis due to cognitive overload and split attention.",
      "Design context-aware interactions that support spatial comparisons and spatial decision-making.",
      "Cognitive and Design Insights:",
      "Exploratory tag maps enhance cognitive mapping and spatial cognition by integrating attributes-in-space tasks.",
      "Intrinsic tag maps cause cognitive overload and split attention due to undifferentiated attribute analysis.",
      "The study validated the effectiveness of exploratory tag maps for attributes-in-space tasks, demonstrating their potential for geovisualization design and cognitive mapping research.",
      "Future Research Directions:",
      "Investigating adaptive exploratory tag maps that dynamically adjust UI complexity based on user cognitive state.",
      "Developing gaze-guided exploratory tag maps that adapt to user visual attention and cognitive load.",
      "Applying machine learning for real-time cognitive feedback and personalized geovisualization experiences."
    ]
  },
  {
    "study": "Qvarfordt et al. (2005)",
    "articleTitle": "RealTourist - A study of augmenting human-human and human-computer dialogue with eye-gaze overlay",
    "year": 2005,
    "doi": "10.1007/11555261_61",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Eye-tracking (to measure visual attention and cognitive processing for spatial dialogue and referencing)",
      "Usability Testing (to evaluate effectiveness and cognitive efficiency of eye-gaze overlay in human-human and human-computer communication)",
      "Qualitative Analysis (using speech-gaze transcription graphs and conversational analysis)",
      "Comparative Analysis (comparing communication with and without eye-gaze overlay)",
      "Ethnographic Field Study Approach (inspective pattern identification rather than quantitative performance metrics)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Within-subjects design"
    ],
    "eyeTrackingDevices": [
      "Tobii ET-17 (30 Hz)"
    ],
    "evaluationSoftware": [
      "Custom Toolkit for playback, annotation, transcription, and gaze analysis",
      "Speech-Gaze Transcription Graphs for qualitative analysis of gaze-speech interaction patterns"
    ],
    "taskTypes": [
      "Trip Planning Tasks (e.g., finding suitable hotels, restaurants, and attractions in two imaginary cities)",
      "Spatial Referencing Tasks (e.g., using gaze overlay for deictic references during conversation)",
      "Interest Detection and Topic Switching (e.g., detecting user interest and managing topic flow using gaze cues)"
    ],
    "numberOfParticipants": [
      "12"
    ],
    "stimuli": [
      "RealTourist System:",
      "Shared Interactive Maps of two imaginary cities (Vapour Bay and Nolia)",
      "Eye-Gaze Overlay (tourist’s gaze superimposed on the consultant’s map view)",
      "Photos and Place Information displayed on the map with lines connecting to corresponding map locations",
      "Maps of Two Imaginary Cities:",
      "Vapour Bay and Nolia with:",
      "13 Hotels",
      "12 Restaurants",
      "9 Attractions",
      "5 Nightclubs",
      "3 Movie Theaters",
      "General Information about transportation and tourism accessible through the TGuide interface"
    ],
    "stimulusDevices": [
      "Tobii ET-17 Eye Tracker (30 Hz)",
      "18” TFT Display (1024×768 resolution)",
      "TGuide Application (Macromedia Director and C++)"
    ],
    "findings": [
      "Effectiveness of Eye-Gaze Overlay:",
      "Eye-gaze overlay enhanced spatial referencing and deictic communication, reducing the need for explicit verbal references.",
      "Implicit deictic referencing was achieved by showing the user’s gaze on specific map locations, increasing communication efficiency.",
      "Topic switching and interest detection were facilitated by observing gaze intensity and duration, allowing consultants to adapt conversation flow.",
      "Visual Attention and Cognitive Load:",
      "Eye-gaze overlay provided real-time visual feedback, reducing communication ambiguity and increasing confidence and assurance.",
      "Split attention was minimized, as users naturally followed the gaze trajectory to maintain contextual awareness.",
      "Reduced cognitive load was observed due to implicit referencing and synchronized dialogue.",
      "Usability and Cognitive Load:",
      "Task completion time was not significantly different between gaze-enhanced and non-gaze conditions, but qualitative feedback indicated more efficient and engaging communication with gaze overlay.",
      "Tourist consultants felt more assured and confident when they could see the tourist’s gaze, leading to more connected and interactive dialogues.",
      "User Preferences and Feedback:",
      "Participants appreciated the natural and intuitive interaction enabled by gaze overlay.",
      "Gaze overlay was not distracting and provided valuable contextual cues for spatial dialogue.",
      "Applications and Use Cases:",
      "Human-Computer Interaction (HCI): Using gaze overlay for natural multimodal interactions in spatial dialogue systems.",
      "Geovisualisation Design: Applying implicit gaze-based referencing for spatial decision-making and contextual communication.",
      "Adaptive User Interfaces: Developing gaze-guided interfaces that adapt to user cognitive state and visual attention patterns.",
      "Recommendations for Gaze Overlay Design:",
      "Use implicit gaze-based references to reduce cognitive load and enhance spatial communication.",
      "Implement context-aware gaze interactions that adapt to conversational flow and topic switching.",
      "Design synchronized gaze overlays that maintain contextual awareness and engagement.",
      "Cognitive and Design Insights:",
      "Eye-gaze overlay supports cognitive mapping and spatial cognition by integrating gaze patterns into conversational flow.",
      "Implicit deictic referencing enhances communication efficiency and reduces cognitive ambiguity.",
      "The study validated the effectiveness of eye-gaze overlay for spatial dialogue and multimodal interactions, demonstrating its potential for geovisualization design and context-aware communication.",
      "Future Research Directions:",
      "Investigating adaptive gaze overlay systems that dynamically adjust contextual cues based on user cognitive state.",
      "Developing gaze-guided navigation systems for context-aware geovisualizations and spatial decision-making.",
      "Applying machine learning for real-time cognitive feedback and personalized multimodal interactions."
    ]
  },
  {
    "study": "Roth (2015)",
    "articleTitle": "Interactivity and Cartography: A Contemporary Perspective on User Interface and User Experience Design from Geospatial Professionals",
    "year": 2015,
    "doi": "10.3138/cart.50.2.2427",
    "relevanceUsability": 4,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 1,
    "mainMethods": [
      "Semi-structured interviews"
    ],
    "studyWithExperiment": "ONLY METHODOLOGY",
    "experimentDesign": [
      "Not applicable (no experiment with participants)"
    ],
    "eyeTrackingDevices": [
      "Not applicable"
    ],
    "evaluationSoftware": [
      "Transana QDA, Microsoft Excel"
    ],
    "taskTypes": [
      "Not applicable (no tasks defined, interview-based study)"
    ],
    "numberOfParticipants": [
      "21"
    ],
    "stimuli": [
      "Not applicable"
    ],
    "stimulusDevices": [
      "Not applicable"
    ],
    "findings": [
      "The study explores contemporary perspectives on UI/UX design for interactive cartographic interfaces from geospatial professionals.",
      "It identifies key themes relevant to cartographic interaction, including the meaning, purpose, timing, user impact, and technological constraints of interactivity.",
      "It highlights the need for increased user involvement in the design process and the importance of responsive and adaptive cartographic interfaces."
    ]
  },
  {
    "study": "Roth et al. (2015)",
    "articleTitle": "User-Centered Design for Interactive Maps: A Case Study in Crime Analysis",
    "year": 2015,
    "doi": "10.3390/ijgi4010262",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 1,
    "mainMethods": [
      "User-Centered Design (UCD) process, including needs assessment interviews, expert-based think-aloud studies, and online surveys"
    ],
    "studyWithExperiment": "ONLY METHODOLOGY",
    "experimentDesign": [
      "Not applicable (no experiment with participants, iterative UCD process)"
    ],
    "eyeTrackingDevices": [
      "Not applicable"
    ],
    "evaluationSoftware": [
      "Not explicitly mentioned, but likely involved web analytics tools for online surveys and qualitative analysis tools for think-aloud studies"
    ],
    "taskTypes": [
      "Benchmark tasks for visual exploration and analysis, including identification and comparison tasks across spatial and temporal dimensions"
    ],
    "numberOfParticipants": [
      "Needs assessment interviews: 9 personnel from 7 law enforcement agencies",
      "Expert-based think-aloud study: 5 design experts",
      "Formative online survey: 10 stakeholders",
      "Summative online survey: 10 different personnel"
    ],
    "stimuli": [
      "GeoVISTA CrimeViz, an interactive web-based mapping application for crime analysis"
    ],
    "stimulusDevices": [
      "Computer (desktop)"
    ],
    "findings": [
      "The UCD process significantly improved the usability and utility of GeoVISTA CrimeViz for law enforcement personnel.",
      "Iterative feedback loops with users and experts led to enhancements in interface design, functionality, and overall user experience.",
      "The study highlighted the importance of balancing usability and utility in interactive geovisualizations for non-technical users.",
      "The approach demonstrated the effectiveness of UCD in designing interactive mapping applications, ensuring they are both functional and user-friendly."
    ]
  },
  {
    "study": "Rzeszewski and Kotus (2019)",
    "articleTitle": "Usability and usefulness of internet mapping platforms in participatory spatial planning",
    "year": 2019,
    "doi": "10.1016/j.apgeog.2019.01.001",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 4,
    "mainMethods": [
      "Usability testing experiment with eye-tracking and Concurrent Thinking Aloud (CTA) protocol"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Between-subjects design"
    ],
    "eyeTrackingDevices": [
      "Tobii X-60 (60 Hz sampling rate, twin-eye measurement mode)"
    ],
    "evaluationSoftware": [
      "Heatmap visualization, System Usability Scale (SUS), Cognitive Load (CL) Scale, Nearest Neighbor Index (NNI) for clustering analysis"
    ],
    "taskTypes": [
      "Map editing tasks (adding points and polygons)",
      "Spatial identification (e.g., locating landmarks)",
      "Commenting and naming map features",
      "Cognitive load measurement and usability feedback"
    ],
    "numberOfParticipants": [
      "30"
    ],
    "stimuli": [
      "Mock PPGIS platform for participatory spatial planning, designed to mimic real-life applications"
    ],
    "stimulusDevices": [
      "Computer (desktop)"
    ],
    "findings": [
      "Older participants found the map interface more challenging and cognitively demanding compared to younger users.",
      "Differences in map navigation and zooming behavior were observed across age groups.",
      "The quality of spatial data was generally low across all groups, indicating challenges in accuracy when using participatory mapping tools.",
      "Positive attitudes were noted towards using online mapping tools for public participation, suggesting potential for wider engagement.",
      "The study highlighted the need for improved usability and user experience in PPGIS tools, particularly for older users.",
      "It also suggested a need for quality control measures and alternative input methods (e.g., mobile apps) for spatial data collection."
    ]
  },
  {
    "study": "Saint-Marc et al. (2017)",
    "articleTitle": "User testing of dynamic geovisualizations: lessons learned and possible improvements for cartographic experiments",
    "year": 2017,
    "doi": "10.1080/23729333.2017.1301347",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 2,
    "mainMethods": [
      "User testing experiment with interactive and animated geovisualizations"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Within-subjects design"
    ],
    "eyeTrackingDevices": [
      "Not used, but interaction logs were recorded for analysis"
    ],
    "evaluationSoftware": [
      "Undertracks software for interaction logs, chi-square test, ANOVA, linear regression"
    ],
    "taskTypes": [
      "Information retrieval tasks (e.g., spatial identification and temporal queries)",
      "Causality reading tasks (understanding causal relationships between events)",
      "Semiology tasks (understanding map symbols and legend)"
    ],
    "numberOfParticipants": [
      "22"
    ],
    "stimuli": [
      "Two versions of a geovisualization tool showing historical flood events:",
      "Interactive map: Displays events as symbols with causality lines on-demand.",
      "Animated interactive map: Events appear sequentially during temporal animation, maintaining a narrative flow."
    ],
    "stimulusDevices": [
      "Computer (desktop)"
    ],
    "findings": [
      "The interactive map was more efficient than the animated map for information retrieval and causality tasks.",
      "Users performed better in information retrieval tasks (86% accuracy) compared to causality tasks (62% accuracy).",
      "Animated maps caused more cognitive load and longer response times, especially for tasks involving spatial and temporal dimensions.",
      "There were significant fatigue effects with the animated map, leading to decreased performance and confidence.",
      "The study highlighted the need for improved experimental design, including standardized cognitive complexity levels and better question wording.",
      "It suggested using open thematic datasets and generalizable tasks to improve comparability of cartographic user studies."
    ]
  },
  {
    "study": "Santos-Torres et al. (2018)",
    "articleTitle": "Exploring interaction mechanisms for map interfaces in virtual reality environments",
    "year": 2018,
    "doi": "10.1145/3233824.3233828",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 1,
    "mainMethods": [
      "Usability testing experiment comparing body-based and device-based interaction in Virtual Reality (VR) for map interfaces"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Within-subjects design"
    ],
    "eyeTrackingDevices": [
      "Not used"
    ],
    "evaluationSoftware": [
      "Unity 5.4, t-test for statistical analysis, SUS (System Usability Scale) questionnaire"
    ],
    "taskTypes": [
      "Selection tasks (locating and marking cities on a VR map)",
      "Navigation tasks (panning and zooming on the VR map)"
    ],
    "numberOfParticipants": [
      "12"
    ],
    "stimuli": [
      "Immersive VR map interface developed in Unity for Oculus Rift™",
      "Two interaction mechanisms:",
      "Body-based interaction: Head Orientation Selection + Hand Gestures using Leap Motion™Sensor",
      "Device-based interaction: Laser Pointer Selection + Oculus Touch® controller"
    ],
    "stimulusDevices": [
      "Oculus Rift™ VR headset with either Leap Motion™ or Oculus Touch® controller"
    ],
    "findings": [
      "Device-based interaction (Oculus Touch®) was more efficient in terms of time selection and accuracy compared to body-based interaction.",
      "Users made fewer errors and were faster with the device-based interaction.",
      "Body-based interaction (using Head Orientation and Hand Gestures) was perceived as more physically demanding and less accurate.",
      "Users rated the device-based interaction as more usable (SUS score: 84.17) than the body-based interaction (SUS score: 74.37).",
      "The study suggested that device-based interaction might be more suitable for VR map interfaces due to familiarity with controllers and reduced physical effort.",
      "It highlighted the need for further research on combining interaction techniques and exploring more natural inputs like voice commands."
    ]
  },
  {
    "study": "Siirtola and Räihä (2011)",
    "articleTitle": "Using gaze data in evaluating interactive visualizations",
    "year": 2011,
    "doi": "10.1007/978-3-642-19641-6_9",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 4,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Eye-tracking experiment with usability evaluation of interactive visualizations using Parallel Coordinate Explorer (PCE)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Within-subjects design"
    ],
    "eyeTrackingDevices": [
      "Not specified"
    ],
    "evaluationSoftware": [
      "Heatmaps for fixation visualization",
      "Balloon plots for AOI analysis using R (gplots package)",
      "Transition graphs using Graphviz"
    ],
    "taskTypes": [
      "Selection tasks (e.g., filtering data points by attributes)",
      "Pattern recognition (e.g., identifying correlations between variables)",
      "Explorative tasks (e.g., describing patterns in complex datasets)"
    ],
    "numberOfParticipants": [
      "Not explicitly mentioned, but conducted with multiple users for gaze data analysis"
    ],
    "stimuli": [
      "Parallel Coordinate Explorer (PCE), an interactive visualization tool for exploring multidimensional data using parallel coordinate plots"
    ],
    "stimulusDevices": [
      "Computer (desktop)"
    ],
    "findings": [
      "Eye-tracking provides valuable insights into user attention and interaction patterns in complex interactive visualizations.",
      "Heatmaps revealed areas of high cognitive load and potential usability issues.",
      "Balloon plots and transition graphs helped in understanding the sequence of user actions and decision-making processes.",
      "The study proposed a \"light-weight\" evaluation approach combining eye-tracking data with usability metrics, allowing a balance between qualitative and quantitative analysis.",
      "It demonstrated the effectiveness of using Areas of Interest (AOI) and transition graphs for detailed gaze analysis in interactive visualization evaluations.",
      "The approach was found to be useful for comparing alternative designs and identifying design flaws before further development."
    ]
  },
  {
    "study": "Slomska (2018)",
    "articleTitle": "Types of maps used as a stimuli in cartographical empirical research",
    "year": 2018,
    "doi": "10.2478/mgrsd-2018-0014",
    "relevanceUsability": 4,
    "relevanceInteractivity": 4,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 3,
    "mainMethods": [
      "Systematic review and meta-analysis of empirical studies in cartography focusing on map stimuli used in experiments"
    ],
    "studyWithExperiment": "ONLY METHODOLOGY",
    "experimentDesign": [
      "Not applicable (systematic review and analysis of existing studies)"
    ],
    "eyeTrackingDevices": [
      "Not applicable (mentions eye-tracking as a method used in some reviewed studies but does not use it itself)"
    ],
    "evaluationSoftware": [
      "Not explicitly mentioned, but systematic review methods and data synthesis techniques were used"
    ],
    "taskTypes": [
      "Not applicable (no direct tasks, analysis of tasks used in other studies)"
    ],
    "numberOfParticipants": [
      "Not applicable (meta-analysis of 103 research papers)"
    ],
    "stimuli": [
      "Various types of maps used as stimuli in 103 empirical studies, categorized by:",
      "Medium: Paper vs. Screen (86% of maps displayed on screen)",
      "Interactivity: Interactive vs. Non-interactive (66% non-interactive, 39% interactive)",
      "Method of cartographic presentation: Qualitative (88%) vs. Quantitative (57%)",
      "Familiarity with data/area: Fictional (13.6%), Familiar (34%), Unfamiliar (62.1%)"
    ],
    "stimulusDevices": [
      "Not applicable (review of studies with various devices)"
    ],
    "findings": [
      "The most common types of maps used as stimuli were non-interactive, qualitative, and displayed on screens.",
      "88% of maps were qualitative, 66% were non-interactive, and 86% were displayed on screens.",
      "Unfamiliar areas and data were most commonly used (62.1%), ensuring participants had no prior knowledge that could bias results.",
      "Interactive maps were underrepresented compared to non-interactive maps despite growing digital trends.",
      "The study highlighted the need for standardized reporting of map stimuli to improve comparability and replication of empirical studies.",
      "It recommended creating a consistent database for documenting map types, potentially enhancing future experimental designs and meta-analyses."
    ]
  },
  {
    "study": "Spur et al. (2020)",
    "articleTitle": "Visualizing multilayered geospatial data in virtual reality to assess public lighting",
    "year": 2020,
    "doi": "10.5194/isprs-archives-XLIII-B4-2020-623-2020",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 4,
    "mainMethods": [
      "Usability testing with immersive Virtual Reality (VR) and eye-tracking for evaluating multilayered geovisualizations in public lighting assessment"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Within-subjects design comparing three Multiple and Coordinated View (MCV) systems in VR:",
      "Blitting: Displaying one layer at a time, switching interactively",
      "Grid: Simultaneously displaying all layers in a grid layout",
      "Stack: Vertically stacked and tilted layers for immersive 3D perception"
    ],
    "eyeTrackingDevices": [
      "HTC Vive HMD with SMI binocular eye-tracking device"
    ],
    "evaluationSoftware": [
      "Unity 3D game engine for VR environment",
      "Mapbox for geospatial data integration",
      "Raycasting for gaze tracking and data layer analysis",
      "Analysis of variance (ANOVA) for statistical evaluation of gaze data and user preferences"
    ],
    "taskTypes": [
      "Decision-making tasks for evaluating urban public lighting",
      "Participants chose areas needing lighting adjustments based on:",
      "Energy consumption (heatmap)",
      "Light pollution (aerial orthophoto)",
      "Night transport network",
      "Nocturnal points of interest (e.g., restaurants, bars)"
    ],
    "numberOfParticipants": [
      "26"
    ],
    "stimuli": [
      "Virtual Reality geovisualization system with three MCV variations:",
      "Blitting, Grid, and Stack displaying multilayered geospatial data",
      "Four data layers: Energy consumption, Light pollution, Night transport, Points of interest"
    ],
    "stimulusDevices": [
      "HTC Vive HMD with controllers for navigation and interaction in VR"
    ],
    "findings": [
      "The Stack system showed a slight advantage in user preference and usability due to its immersive and coherent presentation of layers.",
      "No significant difference in decision quality across the three MCV variations, showing all systems effectively supported urban public participation tasks.",
      "Participants' preferences were highly polarized, linked to their familiarity with 3D video games and VR experiences.",
      "Eye-tracking revealed that:",
      "Participants focused more on energy consumption and light pollution layers.",
      "Points of interest and transport layers were used for spatial orientation but not directly mentioned in decisions.",
      "The immersive MCV systems effectively supported urban public participation by enabling informed decision-making regarding public lighting.",
      "VR environments were positively received, with participants expressing enthusiasm for using immersive geovisualization tools in public participation studies."
    ]
  },
  {
    "study": "Šašinka et al. (2017)",
    "articleTitle": "The Hypothesis Platform: An Online Tool for Experimental Research into Work with Maps and Behavior in Electronic Environments",
    "year": 2017,
    "doi": "10.3390/ijgi6120407",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 4,
    "mainMethods": [
      "Experimental usability testing using the Hypothesis platform with integrated eye-tracking and event logging for interactive maps and electronic environments"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Between-subjects design with two groups:",
      "Control group: Standard topographic maps",
      "Experimental group: Contextual transport maps adapting to user activity"
    ],
    "eyeTrackingDevices": [
      "The Eyetribe eye-tracker with Ogama software"
    ],
    "evaluationSoftware": [
      "Hypothesis platform for data logging and task administration",
      "Ogama for eye-tracking data analysis",
      "IBM SPSS for statistical analysis",
      "ArcGIS for geospatial data visualization and analysis"
    ],
    "taskTypes": [
      "Cartographic Test 1:",
      "Visual search tasks for target objects",
      "Dual-task paradigm with audio cues for cognitive load measurement",
      "Cartographic Test 2:",
      "Multi-click marking of objects",
      "Spatial localization and route planning between landmarks",
      "Memory recall task on a blank map",
      "Psychological Tests:",
      "Flagtest: Selective attention measurement using multi-click and feature layers",
      "Compound Figure Test: Global/local precedence using image-sequence layers",
      "Absolute Relative Test: Cognitive style measurement by estimating object sizes",
      "Stroop Spatial Test: Cognitive control using keyboard input for reaction time"
    ],
    "numberOfParticipants": [
      "43"
    ],
    "stimuli": [
      "Topographic maps for the control group",
      "Contextual transport maps for the experimental group, dynamically adapting to user tasks (e.g., highlighting transport infrastructure during route planning)"
    ],
    "stimulusDevices": [
      "Computer (desktop) with The Eyetribe eye-tracker"
    ],
    "findings": [
      "Contextual transport maps significantly improved efficiency in route planning tasks compared to standard topographic maps.",
      "Dual-task performance indicated higher cognitive load when using standard maps, suggesting contextual maps reduce cognitive effort.",
      "Eye-tracking data revealed that contextual maps facilitated faster target identification and better spatial orientation.",
      "The Hypothesis platform demonstrated high reliability and flexibility for complex experimental designs involving interactive maps and eye-tracking.",
      "The study showcased the effectiveness of adaptive visualization techniques in enhancing map usability and cognitive performance."
    ]
  },
  {
    "study": "Torrens and Kim (2024)",
    "articleTitle": "Evoking embodiment in immersive geosimulation environments",
    "year": 2024,
    "doi": "10.1080/19475683.2024.2316601",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Experimental usability testing using immersive Virtual Reality (VR) with integrated eye-tracking and geosimulation for road-crossing behaviour analysis"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Within-subjects design"
    ],
    "eyeTrackingDevices": [
      "HTC Vive Pro with SMI binocular eye-tracking device"
    ],
    "evaluationSoftware": [
      "Unity3D for immersive geosimulation and VR interactions",
      "Ray-tracing for gaze tracking and data layer analysis",
      "Analysis of variance (ANOVA) for statistical evaluation of gaze data and user behaviours",
      "Likert-scale questionnaires for presence, plausibility, and performance evaluations"
    ],
    "taskTypes": [
      "Decision-making tasks for road-crossing behaviour:",
      "Gap acceptance: Assessing safe crossing opportunities",
      "Risk-taking behaviour: Crossing against signals or in risky situations",
      "Social interaction tasks: Following or avoiding groups of pedestrians",
      "Attention and gaze behaviour: Observing pedestrians, vehicles, and crossing signals"
    ],
    "numberOfParticipants": [
      "22"
    ],
    "stimuli": [
      "Immersive Virtual Reality geosimulation environment depicting a suburban American roadside with:",
      "Signalized zebra crossing (PELICAN) with pedestrian and vehicle traffic signals",
      "Dynamic vehicles and agent-pedestrians using Geographic Automata Systems (GAS)",
      "Three-dimensional urban scene with built components and traversable spaces"
    ],
    "stimulusDevices": [
      "HTC Vive Pro VR headset with integrated eye-tracking and motion tracking"
    ],
    "findings": [
      "The Immersive Geosimulation Environment (IGE) effectively evoked realistic spatial behaviours from participants.",
      "Functional fidelity (e.g., realistic vehicle dynamics and pedestrian interactions) played a crucial role in participants' decision-making processes.",
      "Eye-tracking data revealed that participants paid the most attention to dynamic entities (e.g., moving vehicles and pedestrians) compared to static urban features.",
      "Participants relied on non-verbal communication cues from agent-pedestrians, such as head turns and body orientation, to inform their crossing decisions.",
      "Audio verisimilitude (e.g., engine sounds) significantly enhanced spatial awareness and safety decision-making during road-crossing tasks.",
      "The study confirmed the utility of VR and geosimulation for studying human spatial behaviour, social dynamics, and cognitive decision-making processes in realistic urban scenarios.",
      "The findings contribute to the design of safer urban crossings and the improvement of virtual reality systems for geovisualization and behavioural research."
    ]
  },
  {
    "study": "Woodworth et al (2020)",
    "articleTitle": "Designing Tools To Improve Collaborative Interaction in a VR Environment for Teaching Geosciences Interpretation",
    "year": 2020,
    "doi": "10.18420/muc2020-ws122-326",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Experimental usability testing with collaborative Virtual Reality (VR) using eye-tracking and interactive geovisualizations for educational geoscience interpretation"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Within-subjects design"
    ],
    "eyeTrackingDevices": [
      "HTC Vive Eye with integrated eye-tracking"
    ],
    "evaluationSoftware": [
      "Unity3D for VR interactions and geovisualization",
      "Eye-tracking data used for gaze trails and attention indicators",
      "Informal usability feedback through think-aloud protocol and post-session questionnaires"
    ],
    "taskTypes": [
      "Geological interpretation tasks: Identification and annotation of geological features (e.g., sinkholes, terrain patterns)",
      "Collaborative communication tasks:",
      "Following teacher's gaze for attention alignment",
      "Using gaze trails to enhance communication and focus",
      "Coordinating annotations and discussing interpretations",
      "Usability tasks: Navigation and tool selection using dashboard-style menu and controller-based movement selector"
    ],
    "numberOfParticipants": [
      "5"
    ],
    "stimuli": [
      "Immersive VR environment for geological data interpretation",
      "Terrain visualization of Chicxulub Impact Crater with interactive layers for topography, gravity, and magnetic data",
      "Dashboard-style menu for annotation tools, movement controls, and visualization options",
      "Gaze trail and tether system for collaborative awareness and communication"
    ],
    "stimulusDevices": [
      "HTC Vive Eye VR headset with hand-tracked wands for navigation and interaction"
    ],
    "findings": [
      "The gaze trail significantly improved collaborative communication and attention alignment between teacher and students.",
      "Participants intuitively understood the purpose of the gaze trail, using it to follow discussions and accurately annotate geological features.",
      "Dashboard-style menu and controller-based movement selector were well-received, enabling easy navigation and tool selection.",
      "The tether system was less noticeable but subtly guided users towards each other, improving spatial awareness without active cognitive effort.",
      "Remote view indicators on avatars were underutilized, as participants relied more on gaze trails and wands for attention cues.",
      "The VR environment effectively supported educational interpretation of complex geospatial data, enhancing learning and engagement.",
      "Results support the effectiveness of using eye-tracking in collaborative VR environments for geoscience education.",
      "The study highlighted potential for further enhancement using physiological sensors (e.g., heart rate, emotional state) to gauge student attention and engagement."
    ]
  },
  {
    "study": "Wu et al. (2022)",
    "articleTitle": "Designing Metaphorical Multivariate Symbols to Optimize Dockless Bike Sharing",
    "year": 2022,
    "doi": "10.1080/00087041.2022.2097759",
    "relevanceUsability": 5,
    "relevanceInteractivity": 4,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 4,
    "mainMethods": [
      "Experimental usability testing with eye-tracking and questionnaire techniques for metaphorical multivariate symbols"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Between-subjects design"
    ],
    "eyeTrackingDevices": [
      "Desktop eye-tracker (unspecified model)"
    ],
    "evaluationSoftware": [
      "Eye-tracking metrics: Fixation count, percentage of fixations in AOIs, total saccade number, pupil diameter changes",
      "Statistical analysis: ANOVA for effectiveness, efficiency, and cognitive load evaluation"
    ],
    "taskTypes": [
      "Identification tasks: Identifying blocks with specific usage and activeness patterns",
      "Comparison tasks: Comparing flow volumes across time and vendors",
      "Ranking tasks: Ranking blocks by flow volume or activeness",
      "Association tasks: Associating neighbouring blocks with vendor-specific activeness patterns"
    ],
    "numberOfParticipants": [
      "75"
    ],
    "stimuli": [
      "Metaphorical multivariate symbols for dockless bike-sharing data, designed using metaphor theory:",
      "Wheels for flow (divided into sections for day/night cycle)",
      "Handlebars for usage (using colour and size)",
      "Seats for activeness (height-varying rectangles)",
      "Comparison symbols:",
      "Bin-packing symbols for compact visualization",
      "Multiview symbols for separate visual encoding of variables"
    ],
    "stimulusDevices": [
      "Computer (desktop) with an external eye-tracker"
    ],
    "findings": [
      "Metaphorical symbols significantly improved effectiveness and efficiency compared to bin-packing and multiview symbols.",
      "Effectiveness:",
      "Higher accuracy rates and lower fixation counts for metaphorical symbols.",
      "Participants spent more time interpreting relevant AOIs and had fewer saccades.",
      "Efficiency:",
      "Faster task completion times and quicker first fixations for metaphorical symbols.",
      "Participants showed fewer regressions during tasks.",
      "Cognitive Load:",
      "Lower average pupil diameters and smaller changes in pupil diameter, indicating reduced cognitive effort.",
      "Self-rating indicated lower cognitive load for metaphorical symbols.",
      "Qualitative feedback:",
      "Participants found metaphorical symbols more intuitive and visually structured, facilitating better spatial reasoning.",
      "The study supports the effectiveness of metaphorical multivariate symbols for complex geovisualization tasks.",
      "It highlights the potential of metaphor theory to enhance cognitive efficiency and usability in interactive geovisualizations."
    ]
  },
  {
    "study": "Zagata et al. (2024)",
    "articleTitle": "Impact of the mini-map on the interpretation of spatial situations in the virtual geographical space of a video game",
    "year": 2024,
    "doi": "10.1080/15230406.2024.2410472",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Experimental usability testing using eye-tracking and statistical analysis of mini-map usage in virtual geographical space within the video game League of Legends"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Between-subjects design"
    ],
    "eyeTrackingDevices": [
      "Tobii X2-60 (60 Hz)"
    ],
    "evaluationSoftware": [
      "Tobii Studio 3.4 for eye-tracking data collection",
      "PQStat (v 1.8.0) for statistical analysis (ANOVA Kruskal-Wallis, Dunn’s post hoc test, Mann-Whitney U test)"
    ],
    "taskTypes": [
      "Identification tasks: Recognising point symbols and structures on the mini-map",
      "Spatial relationship tasks: Interpreting linear and areal spatial situations",
      "Spatial navigation tasks: Locating teams and predicting movement based on mini-map data",
      "Cognitive processing tasks: Evaluating visual attention metrics (e.g., fixation count, duration, first fixation duration, saccades)"
    ],
    "numberOfParticipants": [
      "60"
    ],
    "stimuli": [
      "Mini-map in League of Legends used to interpret spatial situations during gameplay",
      "Five short videos depicting various spatial scenarios in the game, designed to evaluate understanding of point, line, and area-based spatial relationships",
      "Survey questions related to each video to measure accuracy and cognitive processing during interpretation"
    ],
    "stimulusDevices": [
      "Computer (desktop) with Tobii X2-60 eye-tracker"
    ],
    "findings": [
      "Mini-map usage significantly influenced the accuracy of spatial interpretation across all groups.",
      "Experienced LoL players (GL):",
      "Had more accurate and faster responses, relying less on the mini-map compared to other groups.",
      "Demonstrated quicker fixation durations and fewer fixations on the mini-map, suggesting familiarity with spatial situations and in-game navigation.",
      "Active gamers unfamiliar with LoL (GnL):",
      "Relied more on the mini-map than GL but less than non-gamers.",
      "Showed improved accuracy over time, indicating a learning effect.",
      "Non-gamers (NG):",
      "Relied heavily on the mini-map and had longer fixation durations.",
      "Demonstrated a higher number of saccades, indicating more cognitive effort in spatial interpretation.",
      "Eye-tracking results:",
      "Time to first fixation and fixation duration on the mini-map were significantly correlated with accuracy.",
      "Percentage of fixations on the mini-map was inversely related to prior gaming experience.",
      "Statistical analysis:",
      "Significant differences were found between groups using ANOVA Kruskal-Wallis and Dunn’s post hoc test.",
      "Mann-Whitney U test showed correlations between accuracy and mini-map fixation metrics.",
      "Qualitative feedback:",
      "Experienced players found the mini-map less essential due to their familiarity with game mechanics.",
      "Novices found the mini-map indispensable for spatial orientation and decision-making.",
      "Conclusions:",
      "The mini-map is a crucial navigational aid in virtual geographical spaces, particularly for less experienced users.",
      "Experienced players rely more on situational awareness and cognitive mapping, reducing dependence on the mini-map.",
      "The study suggests the need for adaptive mini-maps that adjust to the user's expertise level to enhance usability and cognitive processing."
    ]
  },
  {
    "study": "Zhang et al. (2022)",
    "articleTitle": "The effect of color coding and layout coding on users’ visual search on mobile map navigation icons",
    "year": 2022,
    "doi": "10.3389/fpsyg.2022.1040533",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 4,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Experimental usability testing using eye-tracking and statistical analysis of color and layout coding on mobile map navigation icons"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Mixed design (within-subject and between-subject)"
    ],
    "eyeTrackingDevices": [
      "EyeLink1000 desktop eye tracker (SR Company) with a 1,000 Hz sampling frequency"
    ],
    "evaluationSoftware": [
      "Experiment Builder for experiment control",
      "DataViewer for eye movement data collection",
      "SPSS for statistical analysis (Repeated measures ANOVA, One-way ANOVA)"
    ],
    "taskTypes": [
      "Visual search tasks: Identifying target navigation icons among distractors",
      "Color and layout comparison tasks: Evaluating response time, accuracy, and cognitive processing across color and layout combinations",
      "Subjective evaluation tasks: Satisfaction, usability, and emotional preference using a 9-point Likert scale questionnaire"
    ],
    "numberOfParticipants": [
      "30"
    ],
    "stimuli": [
      "Navigation icons from AutoNavi mobile map, presented in five layout conditions:",
      "G0: Single color (Red, Green, Blue)",
      "G1: Random color distribution",
      "G2: 1×5 grouping layout",
      "G3: 3×5 grouping layout",
      "CIE Lab color space used to ensure equal perceptual distance for Red, Green, and Blue icons"
    ],
    "stimulusDevices": [
      "Computer (desktop) with a 19-inch Dell monitor (1024×768 resolution, 100 Hz refresh rate)"
    ],
    "findings": [
      "Layout coding significantly influenced visual search efficiency:",
      "Icons with regular color distribution (G2 and G3) had the highest visual search efficiency.",
      "Icons with random color distribution (G1) had lower search efficiency and accuracy.",
      "The G3 layout (3×5 grouping with larger color areas) yielded the highest accuracy and user satisfaction.",
      "Color coding did not significantly affect accuracy but impacted search strategies:",
      "Red and Green facilitated quicker grouping and classification compared to Blue.",
      "Icons with the same color in larger areas improved search efficiency.",
      "Eye-tracking results:",
      "Number of fixations and fixation duration were lower for regular color groupings (G2 and G3).",
      "Saccade length was shorter for regular color groupings, indicating more efficient visual search paths.",
      "Random color distribution (G1) led to higher cognitive load and disorganized gaze patterns.",
      "Subjective evaluation:",
      "G3 layout received the highest scores for satisfaction, ease of use, and emotional preference.",
      "Participants reported better cognitive flow and less mental effort with regular color distributions.",
      "Statistical analysis:",
      "Significant differences were found between layout groups using Repeated measures ANOVA and One-way ANOVA.",
      "Color had no significant interaction effects with layout on accuracy or search efficiency.",
      "Qualitative feedback:",
      "Participants preferred layouts with consistent color grouping as they facilitated faster pattern recognition.",
      "Random distribution was perceived as chaotic and mentally taxing.",
      "Conclusions:",
      "Color and layout coding together significantly enhance visual search efficiency for navigation icons.",
      "Regular color distributions reduce cognitive load and improve user satisfaction.",
      "The study recommends using larger color areas and structured layouts for mobile map navigation interfaces.",
      "It highlights the importance of spatial organization in designing effective and user-friendly geovisualizations."
    ]
  },
  {
    "study": "Zhang et al. (2023)",
    "articleTitle": "Evaluating the Usability of a Gaze-Adaptive Approach for Identifying and Comparing Raster Values between Multilayers",
    "year": 2023,
    "doi": "10.3390/ijgi12100412",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 5,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Experimental usability testing using gaze-adaptive approaches and eye-tracking for raster value identification and comparison across multilayers"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Within-subjects design"
    ],
    "eyeTrackingDevices": [
      "Tobii Eye Tracker 5 (90 Hz sampling frequency)"
    ],
    "evaluationSoftware": [
      "Tobii Interactor APIs for gaze data collection",
      "Python for data processing and analysis",
      "SPSS v26 for statistical analysis (Kruskal-Wallis test, Mann-Whitney U test, ANOVA)",
      "NASA Task Load Index (NASA-TLX) and User Experience Questionnaire (UEQ) for usability and cognitive load evaluation"
    ],
    "taskTypes": [
      "Single-layer Identification tasks (IDE): Identifying raster values on one layer",
      "Multilayer Comparison tasks (COM): Comparing raster values across multiple layers",
      "Visual search tasks: Using adaptive legend for grid value interpretation",
      "Cognitive processing tasks: Measuring cognitive load and gaze metrics (fixation duration, saccade amplitude)"
    ],
    "numberOfParticipants": [
      "31"
    ],
    "stimuli": [
      "Raster maps with three layers representing different years and thematic contents:",
      "Land use type (Discrete symbology)",
      "Population density (Stratified symbology)",
      "GDP distribution (Continuous symbology)",
      "Adaptive legends for dynamic or fixed adaptation to gaze or mouse pointer"
    ],
    "stimulusDevices": [
      "Tobii Eye Tracker 5 mounted on a HUAWEI MateBook 13 laptop",
      "13-inch LED screen with 2160 × 1440 px resolution"
    ],
    "findings": [
      "Efficiency and Effectiveness:",
      "Gaze-based adaptations (GD and GF) significantly improved task efficiency compared to the traditional method but were less efficient than the mouse dynamic adaptation (MD).",
      "Mouse dynamic adaptation (MD) achieved the highest task accuracy and shortest task time.",
      "Gaze fixed adaptation (GF) caused longer fixation durations and higher cognitive load compared to gaze dynamic adaptation (GD).",
      "The traditional method (TR) had the lowest efficiency and highest cognitive load.",
      "Visual Behavior:",
      "Gaze dynamic adaptation (GD) reduced saccade amplitude and visual search area, enhancing task efficiency.",
      "Gaze fixed adaptation (GF) caused longer fixation durations due to frequent visual switches.",
      "Mouse dynamic adaptation (MD) showed the most efficient visual patterns with shorter saccades and reduced cognitive load.",
      "Traditional method (TR) required frequent layer switching, leading to higher cognitive load and visual fatigue.",
      "User Experience and Feedback:",
      "Gaze dynamic adaptation (GD) was preferred for its convenience and efficiency.",
      "Gaze fixed adaptation (GF) was criticized for blocking map content and causing visual fatigue.",
      "Mouse dynamic adaptation (MD) received the highest user satisfaction scores for ease of use and cognitive flow.",
      "Participants reported accuracy issues with gaze tracking, especially with small grid cells and complex raster layouts.",
      "Visual fatigue and cognitive load were higher for gaze-based methods compared to mouse interaction.",
      "Conclusions and Recommendations:",
      "Gaze dynamic adaptation effectively enhances usability and cognitive efficiency for multilayer raster comparison tasks.",
      "Mouse dynamic adaptation remains the most efficient and accurate method for raster value identification and comparison.",
      "Gaze-based interactions show potential for hands-free geovisualization but require improvements in spatial accuracy and cognitive flow.",
      "The study highlights the need for adaptive geovisualization interfaces that balance cognitive load, efficiency, and usability for complex raster map tasks."
    ]
  },
  {
    "study": "Zhang et al. (2025)",
    "articleTitle": "Evaluating the performance of gaze interaction for map target selection",
    "year": 2025,
    "doi": "10.1080/15230406.2024.2335331",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 4,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Experimental usability testing using gaze interaction and eye-tracking for map target selection"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Within-subjects design"
    ],
    "eyeTrackingDevices": [
      "Tobii Eye Tracker 5 (30 Hz sampling frequency)"
    ],
    "evaluationSoftware": [
      "Tobii Interactor APIs for gaze data collection",
      "Esri ArcObjects 10.2 for map interaction platform",
      "SPSS v26 for statistical analysis (Repeated measures ANOVA, Tukey’s post hoc test)",
      "NASA Task Load Index (NASA-TLX) and User Experience Questionnaire (UEQ) for usability and cognitive load evaluation"
    ],
    "taskTypes": [
      "Point selection tasks: Identifying points by color, name, or spatial relationship",
      "Line selection tasks: Selecting lines by spatial adjacency or attribute value",
      "Area selection tasks: Selecting polygons by thematic attributes or spatial constraints",
      "Cognitive processing tasks: Measuring cognitive load and gaze metrics (fixation duration, fixation frequency, saccade amplitude)"
    ],
    "numberOfParticipants": [
      "36"
    ],
    "stimuli": [
      "Fictional maps designed to simulate real-world map-reading tasks without geographical bias",
      "Three target shapes: Point, Line, and Area",
      "Six task types:",
      "Color: Select by color",
      "Name: Select by name label",
      "Space: Select by spatial relationship",
      "Single: Select by one thematic attribute",
      "Space-Single: Combination of spatial relationship and thematic attribute",
      "Double: Select by two thematic attributes"
    ],
    "stimulusDevices": [
      "Tobii Eye Tracker 5 mounted on a Lenovo Legion R7000P laptop",
      "15.6-inch screen with 1920 × 1080 px resolution",
      "Logitech wireless mouse for mouse interaction mode"
    ],
    "findings": [
      "Efficiency and Effectiveness:",
      "Gaze-based selection provided comparable efficiency to mouse selection for most tasks but was less efficient for color-based tasks due to dwell time requirements.",
      "Mouse-based selection exhibited higher fixation frequency and larger saccade amplitude, indicating more efficient visual processing and search strategies.",
      "Cognitive Load and User Experience:",
      "Gaze-based selection resulted in higher frustration but no significant difference in overall cognitive workload compared to mouse interaction.",
      "User Experience Questionnaire (UEQ): Gaze interaction was rated higher for attractiveness, stimulation, and novelty but lower for perspicuity, efficiency, and dependability compared to mouse interaction.",
      "Visual Behavior:",
      "Fixation duration was significantly longer for gaze-based selection due to the dwell time required for target activation.",
      "Saccade amplitude was smaller for gaze interaction, suggesting shorter visual search paths.",
      "Task-Specific Findings:",
      "Gaze interaction was less efficient for tasks requiring color-based selection but more efficient for complex attribute-based tasks (Double).",
      "Mouse interaction was consistently efficient across all tasks, particularly for Color and Single task types.",
      "Conclusions and Recommendations:",
      "Gaze interaction offers a hands-free alternative with efficiency comparable to mouse selection but requires improved tracking accuracy and reduced cognitive load.",
      "The study suggests integrating gaze and mouse inputs for enhanced usability and adaptability in complex geovisualization tasks.",
      "It recommends context-aware gaze applications that adjust interaction parameters dynamically based on user characteristics and visual context."
    ]
  },
  {
    "study": "Zhou et al. (2023)",
    "articleTitle": "QAVA-DPC: Eye-Tracking Based Quality Assessment and Visual Attention Dataset for Dynamic Point Cloud in 6 DoF",
    "year": 2023,
    "doi": "10.1109/ISMAR59233.2023.00021",
    "relevanceUsability": 5,
    "relevanceInteractivity": 5,
    "relevanceGeovisualisation": 4,
    "relevanceEyeTracking": 5,
    "mainMethods": [
      "Experimental usability testing using eye-tracking and subjective quality assessment for Dynamic Point Cloud (DPC) in Virtual Reality (VR)"
    ],
    "studyWithExperiment": "yes",
    "experimentDesign": [
      "Within-subjects desig"
    ],
    "eyeTrackingDevices": [
      "HTC Vive Pro Eye with built-in eye-tracking (120 Hz sampling frequency)"
    ],
    "evaluationSoftware": [
      "Unity 3D for VR interaction and visualization",
      "SRanipal SDK for eye-tracking data collection",
      "SteamVR Plugin and OpenXR Plugin for VR environment integration",
      "DBSCAN (Density-Based Spatial Clustering) for noise filtering in fixation maps",
      "MATLAB for data analysis and visualization",
      "NASA Task Load Index (NASA-TLX) and Simulator Sickness Questionnaire (SSQ) for cognitive load and simulator sickness evaluation"
    ],
    "taskTypes": [
      "Quality Assessment tasks: Subjective rating of perceptual quality for 50 DPCs using VR controllers",
      "Visual Attention tasks: Gaze tracking and fixation mapping to understand user attention during DPC exploration",
      "Error Profiling tasks: Estimating gaze measurement accuracy using regular circles of 9 eye-ball markers"
    ],
    "numberOfParticipants": [
      "40"
    ],
    "stimuli": [
      "50 Dynamic Point Clouds (DPCs) from 3 public datasets: VsenseVVDB2, 8i, and Owlii",
      "Three codecs with 3 distortion levels each:",
      "GPCC (Octree-RAHT): Static point cloud compression",
      "VPCC (AI mode): Dynamic point cloud compression",
      "CWI-PCL: Real-time DPC compression",
      "DPC Models: Dancer, Exercise, Long Dress, Rafa2, Soldier",
      "Distortion Levels: Low (R01), Medium (R02), High (R03) for each codec"
    ],
    "stimulusDevices": [
      "HTC Vive Pro Eye VR headset with controllers for interaction and navigation in VR"
    ],
    "findings": [
      "Visual Attention and Gaze Behavior:",
      "Users showed higher fixation counts on high-motion DPCs (Dancer and Long Dress) compared to low-motion DPCs (Rafa2 and Soldier).",
      "No significant difference in fixation count based on DPC quality level, suggesting attention is more influenced by motion than quality.",
      "Gaze data indicated that users consistently focused on faces and high-motion areas regardless of distortion levels.",
      "Quality Assessment:",
      "VPCC provided the highest perceptual quality, followed by GPCC and CWI-PCL.",
      "Quality ratings were influenced by the reference quality and contextual content of the DPCs.",
      "The study highlighted the importance of considering reference quality to avoid rating bias.",
      "Cognitive Load and User Experience:",
      "Higher cognitive load and visual fatigue were observed for complex DPCs with higher motion and interaction complexity.",
      "Participants reported higher simulator sickness in the second session, mitigated by a mandatory break.",
      "Task-Specific Findings:",
      "Users paid more attention to unrealistic rendering artifacts (e.g., missing heel pieces, unnatural hair rendering).",
      "Fixation maps revealed that salient regions corresponded to faces and areas with high motion, irrespective of distortion level.",
      "Conclusions and Recommendations:",
      "The study confirmed the effectiveness of using eye-tracking to understand visual attention patterns in dynamic VR environments.",
      "Task-dependent visual attention was noted, indicating that users focus on regions aiding in task completion, such as areas with noticeable artifacts.",
      "The study emphasized the need for adaptive quality metrics that consider both motion and quality levels to improve user experience in dynamic VR environments.",
      "It recommended further research on task-free attention mapping to compare how different tasks influence visual attention in VR."
    ]
  }
] as const;
