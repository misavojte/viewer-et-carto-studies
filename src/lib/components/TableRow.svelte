<script lang="ts">
import type { StudyRow } from '../types.js';
import LikertValue from './LikertValue.svelte';
import ParticipantsValue from './ParticipantsValue.svelte';
import BadgeList from './BadgeList.svelte';
import ExperimentValue from './ExperimentValue.svelte';

interface Props {
  study: StudyRow;
  participantPercentiles: {
    p20: number;
    p40: number;
    p60: number;
    p80: number;
    max: number;
  };
}

const { study, participantPercentiles }: Props = $props();
</script>

<td class="px-6 py-3 align-middle border-r border-gray-200" style="width: 384px;">
  <div class="flex flex-col">
    <span class="font-medium text-gray-900">
      {study.study}
    </span>
    <span class="text-sm text-gray-600 mt-0.5">{study.articleTitle}</span>
  </div>
</td>

<td class="px-4 py-3 text-center align-middle border-r border-gray-200" style="width: 120px;">
  <ExperimentValue experimentValue={study.studyWithExperiment} />
</td>

<td class="px-4 py-3 text-center align-middle border-r border-gray-200" style="width: 120px;">
  <ParticipantsValue 
    participantValues={study.numberOfParticipants} 
    percentiles={participantPercentiles}
  />
</td>

<td class="px-4 py-3 text-center align-middle border-r border-gray-200" style="width: 128px;">
  <div class="flex justify-center">
    <LikertValue 
      likertValue={study.relevanceUsability} 
      label="Usability Relevance"
      tailwindCss="w-24 h-4"
    />
  </div>
</td>

<td class="px-4 py-3 text-center align-middle border-r border-gray-200" style="width: 128px;">
  <div class="flex justify-center">
    <LikertValue 
      likertValue={study.relevanceInteractivity} 
      label="Interactivity Relevance"
      tailwindCss="w-24 h-4"
    />
  </div>
</td>

<td class="px-4 py-3 text-center align-middle border-r border-gray-200" style="width: 128px;">
  <div class="flex justify-center">
    <LikertValue 
      likertValue={study.relevanceGeovisualisation} 
      label="Geovisualisation Relevance"
      tailwindCss="w-24 h-4"
    />
  </div>
</td>

<td class="px-4 py-3 text-center align-middle border-r border-gray-200" style="width: 128px;">
  <div class="flex justify-center">
    <LikertValue 
      likertValue={study.relevanceEyeTracking} 
      label="Eye Tracking Relevance"
      tailwindCss="w-24 h-4"
    />
  </div>
</td>

<td class="px-4 py-3 text-center align-middle border-r border-gray-200" style="width: 256px;">
  <BadgeList 
    items={study.mainMethods}
    maxItems={3}
    variant="purple"
  />
</td>

<td class="px-4 py-3 text-center align-middle border-r border-gray-200" style="width: 256px;">
  <BadgeList 
    items={study.experimentDesign}
    maxItems={3}
    variant="blue"
  />
</td>

<td class="px-4 py-3 text-center align-middle border-r border-gray-200" style="width: 256px;">
  <BadgeList 
    items={study.eyeTrackingDevices}
    maxItems={1}
    variant="green"
  />
</td>

<td class="px-4 py-3 text-center align-middle" style="width: 256px;">
  <BadgeList 
    items={study.evaluationSoftware}
    maxItems={3}
    variant="orange"
  />
</td> 