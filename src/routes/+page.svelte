<script>
  import Table from "$lib/components/Table.svelte";
  import Divider from "$lib/components/Divider.svelte";
  
  let formData = {
    name: '',
    subject: 'Recommend new article to include',
    message: ''
  };
  
  function handleSubmit() {
    // Construct the email body
    const emailBody = `Hi,

I'm writing to you about: ${formData.subject}

${formData.message}

Best regards,
${formData.name}`;
    
    // Create mailto link
    const recipient = 'tomas.vanicek@upol.cz';
    const subject = encodeURIComponent(`[Contact Form] ${formData.subject}`);
    const body = encodeURIComponent(emailBody);
    
    const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Optional: Reset form after submission
    formData = {
      name: '',
      subject: 'Recommend new article to include',
      message: ''
    };
  }
</script>

<div class="max-w-4xl mx-auto px-6 py-8">
  <div class="text-center mb-4">
    <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
      Scoping Review of <span class="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">Eye-tracking</span> Studies on Usability of Interactive <span class="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">Geovisualisations</span>
    </h1>
    <div class="max-w-3xl mx-auto text-left space-y-4">
      <p class="text-lg text-gray-700 leading-relaxed">This interactive table accompanies the scoping review titled <i>“Scoping Review of Eye-Tracking Studies on Usability of Interactive Geovisualisations”</i> and provides an accessible overview of the 87 peer-reviewed studies included in the review. Each entry summarises a study's focus, methods, task types, and participant characteristics, along with expert-assigned relevance ratings across four thematic dimensions: <strong>usability evaluation</strong>, <strong>interactivity</strong>, <strong>geovisualisation</strong>, and&nbsp;<strong>eye‑tracking</strong>.</p>
      <p class="text-lg text-gray-700 leading-relaxed">The goal of this tool is to enable researchers, designers, and practitioners to explore the current state of empirical evidence in this interdisciplinary domain. The table supports filtering and sorting to help users identify studies aligned with their interests—whether by methodological approach, visualisation type, or research objective.</p>
      <p class="text-lg text-gray-700 leading-relaxed">This table forms part of a systematic review conducted using the PRISMA-ScR methodology and highlights key trends and research gaps in the evaluation of interactive cartographic interfaces using eye-tracking methods. For a deeper synthesis and discussion, including identified limitations and recommendations for future research, please refer to the full article (DOI link will be added upon publication).</p>
    </div>
  </div>
</div>

<Divider />

<Table />

<Divider />

<div class="max-w-2xl mx-auto px-6 py-8">
  <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center leading-tight">Contact us</h2>
  
  <div class="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8 rounded-lg">
    <div class="flex">
      <div class="flex-shrink-0">
        <svg class="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
        </svg>
      </div>
      <div class="ml-3">
        <p class="text-sm text-blue-700">
          <strong>How this works:</strong> This form will open your email client (like Outlook, Gmail, etc.) with a pre-filled message to <strong>tomas.vanicek@upol.cz</strong>. You can review and edit the message before sending it from your email client.
        </p>
      </div>
    </div>
  </div>
  
  <form on:submit|preventDefault={handleSubmit} class="space-y-6">
    <div>
      <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Name</label>
      <input
        type="text"
        id="name"
        bind:value={formData.name}
        required
        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
        placeholder="Your full name"
      />
    </div>
    
    <div>
      <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">Subject</label>
      <select
        id="subject"
        bind:value={formData.subject}
        required
        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
      >
        <option value="Recommend new article to include">Recommend new article to include</option>
        <option value="Feedback on the scoping review">Feedback on the scoping review</option>
        <option value="Request for collaboration">Request for collaboration</option>
        <option value="Technical issue">Technical issue</option>
        <option value="Other">Other</option>
      </select>
    </div>
    
    <div>
      <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message</label>
      <textarea
        id="message"
        bind:value={formData.message}
        required
        rows="6"
        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
        placeholder="Please describe your inquiry in detail..."
      ></textarea>
    </div>
    
    <div class="text-center">
      <button
        type="submit"
        class="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105"
      >
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-1M14 6h6l-3-3zM14 6v6l3-3"></path>
        </svg>
        Open Email Client
      </button>
    </div>
  </form>
</div>