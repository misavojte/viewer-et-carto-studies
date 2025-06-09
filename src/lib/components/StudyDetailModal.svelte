<script lang="ts">
import type { StudyRow } from '../types.js';
import LikertValue from './LikertValue.svelte';

interface Props {
  study: StudyRow;
}

const { study }: Props = $props();

// Create DOI URL
const doiUrl = study.doi ? `https://doi.org/${study.doi}` : null;

// Format participants count
function formatParticipants(participants: string[]): string {
  if (participants.length === 0) return 'Not specified';
  return participants.join(', ');
}

// Check if experiment was conducted
const hasExperiment = study.studyWithExperiment?.toLowerCase().includes('yes');
</script>

<div class="max-w-none space-y-8">
  <!-- Header Section -->
  <div class="pb-6 border-b border-gray-200">
    <div class="space-y-4">

      
      <!-- Title of study -->
      <div>
        <h2 class="text-lg font-semibold text-gray-900 mb-2">Title of study</h2>
        <p class="text-gray-700">{study.articleTitle}</p>
      </div>
      
      <!-- DOI Button -->
      {#if doiUrl}
        <div>
          <a 
            href={doiUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
          >
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
            Visit Study
          </a>
          <p class="text-xs text-gray-500 mt-1">DOI: {study.doi}</p>
        </div>
      {:else}
        <p class="text-xs text-gray-500 mt-1">No DOI available</p>
      {/if}
    </div>
  </div>

  <!-- Relevance Scores -->
  <div class="pb-6 border-b border-gray-200">
    <h2 class="text-lg font-semibold text-gray-900 mb-4">Relevance Scores</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="text-center">
        <p class="text-sm font-medium text-gray-700 mb-2">Usability</p>
        <LikertValue 
          likertValue={study.relevanceUsability} 
          label="Usability Relevance"
          tailwindCss="w-16 h-4 mx-auto"
        />
      </div>
      <div class="text-center">
        <p class="text-sm font-medium text-gray-700 mb-2">Interactivity</p>
        <LikertValue 
          likertValue={study.relevanceInteractivity} 
          label="Interactivity Relevance"
          tailwindCss="w-16 h-4 mx-auto"
        />
      </div>
      <div class="text-center">
        <p class="text-sm font-medium text-gray-700 mb-2">Geovisualisation</p>
        <LikertValue 
          likertValue={study.relevanceGeovisualisation} 
          label="Geovisualisation Relevance"
          tailwindCss="w-16 h-4 mx-auto"
        />
      </div>
      <div class="text-center">
        <p class="text-sm font-medium text-gray-700 mb-2">Eye Tracking</p>
        <LikertValue 
          likertValue={study.relevanceEyeTracking} 
          label="Eye Tracking Relevance"
          tailwindCss="w-16 h-4 mx-auto"
        />
      </div>
    </div>
  </div>

  <!-- Study Information -->
  <div class="pb-6 border-b border-gray-200">
    <h2 class="text-lg font-semibold text-gray-900 mb-4">Study Information</h2>
    <div class="space-y-3">
      <div class="text-sm text-gray-700 bg-blue-50 p-4 rounded-lg border border-blue-100">
        <span class="font-medium text-gray-700">Participants:</span>
        <span class="text-gray-600 ml-2">{formatParticipants(study.numberOfParticipants)}</span>
      </div>
      <div class="text-sm text-gray-700 bg-blue-50 p-4 rounded-lg border border-blue-100">
        <span class="font-medium text-gray-700">Has Experiment:</span>
        <span class="text-gray-600 ml-2">{study.studyWithExperiment}</span>
      </div>
    </div>
  </div>

  <!-- Main Methods -->
  {#if study.mainMethods && study.mainMethods.length > 0}
    <div class="pb-6 border-b border-gray-200">
      <h2 class="text-lg font-semibold text-gray-900 mb-4">Main Methods</h2>
      <div class="space-y-3">
        {#each study.mainMethods as method}
          <div class="text-sm text-gray-700 bg-gray-100 p-4 rounded-lg border border-gray-200">
            {method}
          </div>
        {/each}
      </div>
    </div>
  {/if}

  <!-- Experiment Design -->
  {#if study.experimentDesign && study.experimentDesign.length > 0}
    <div class="pb-6 border-b border-gray-200">
      <h2 class="text-lg font-semibold text-gray-900 mb-4">Experiment Design</h2>
      <div class="space-y-3">
        {#each study.experimentDesign as design}
          <div class="text-sm text-gray-700 bg-blue-50 p-4 rounded-lg border border-blue-100">
            {design}
          </div>
        {/each}
      </div>
    </div>
  {/if}

  <!-- Task Types -->
  {#if study.taskTypes && study.taskTypes.length > 0}
    <div class="pb-6 border-b border-gray-200">
      <h2 class="text-lg font-semibold text-gray-900 mb-4">Task Types</h2>
      <div class="space-y-3">
        {#each study.taskTypes as task}
          <div class="text-sm text-gray-700 bg-gray-100 p-4 rounded-lg border border-gray-200">
            {task}
          </div>
        {/each}
      </div>
    </div>
  {/if}

  <!-- Eye-tracking Devices -->
  {#if study.eyeTrackingDevices && study.eyeTrackingDevices.length > 0}
    <div class="pb-6 border-b border-gray-200">
      <h2 class="text-lg font-semibold text-gray-900 mb-4">Eye-tracking Devices</h2>
      <div class="space-y-3">
        {#each study.eyeTrackingDevices as device}
          <div class="text-sm text-gray-700 bg-blue-50 p-4 rounded-lg border border-blue-100">
            {device}
          </div>
        {/each}
      </div>
    </div>
  {/if}

  <!-- Evaluation Software -->
  {#if study.evaluationSoftware && study.evaluationSoftware.length > 0}
    <div class="pb-6 border-b border-gray-200">
      <h2 class="text-lg font-semibold text-gray-900 mb-4">Evaluation Software</h2>
      <div class="space-y-3">
        {#each study.evaluationSoftware as software}
          <div class="text-sm text-gray-700 bg-gray-100 p-4 rounded-lg border border-gray-200">
            {software}
          </div>
        {/each}
      </div>
    </div>
  {/if}

  <!-- Stimuli -->
  {#if study.stimuli && study.stimuli.length > 0}
    <div class="pb-6 border-b border-gray-200">
      <h2 class="text-lg font-semibold text-gray-900 mb-4">Stimuli</h2>
      <div class="space-y-3">
        {#each study.stimuli as stimulus}
          <div class="text-sm text-gray-700 bg-blue-50 p-4 rounded-lg border border-blue-100">
            {stimulus}
          </div>
        {/each}
      </div>
    </div>
  {/if}

  <!-- Stimulus Devices -->
  {#if study.stimulusDevices && study.stimulusDevices.length > 0}
    <div class="pb-6 border-b border-gray-200">
      <h2 class="text-lg font-semibold text-gray-900 mb-4">Stimulus Devices</h2>
      <div class="space-y-3">
        {#each study.stimulusDevices as device}
          <div class="text-sm text-gray-700 bg-gray-100 p-4 rounded-lg border border-gray-200">
            {device}
          </div>
        {/each}
      </div>
    </div>
  {/if}

  <!-- Key Findings -->
  {#if study.findings && study.findings.length > 0}
    <div>
      <h2 class="text-lg font-semibold text-gray-900 mb-4">Key Findings</h2>
      <div class="space-y-3">
        {#each study.findings as finding}
          <div class="text-sm text-gray-700 bg-blue-50 p-4 rounded-lg border border-blue-100">
            {finding}
          </div>
        {/each}
      </div>
    </div>
  {/if}
</div> 