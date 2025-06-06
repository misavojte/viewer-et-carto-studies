<script lang="ts">
import { modalStore } from '../stores/modalStore.js';
import { onMount, tick } from 'svelte';

// Subscribe to the modal store
const modal = $derived($modalStore);

let modalElement: HTMLDivElement;
let modalDialog: HTMLDivElement;

// Focus the modal when it becomes visible
$effect(() => {
  if (modal.visible && modalDialog) {
    // Use setTimeout to handle the async tick properly
    setTimeout(async () => {
      await tick();
      
      // Focus the first focusable element that's NOT the close button, or the modal itself
      const focusableElements = modalDialog.querySelectorAll(
        'button:not([aria-label="Close modal"]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      if (focusableElements.length > 0) {
        (focusableElements[0] as HTMLElement).focus();
      } else {
        modalDialog.focus();
      }
    }, 0);
  }
});

function handleBackdropClick(event: MouseEvent) {
  if (event.target === modalElement && modal.config.backdrop && modal.config.closable) {
    modalStore.close();
  }
}

function handleClose() {
  if (modal.config.closable) {
    modalStore.close();
  }
}

// Get size classes
function getSizeClasses(size: string) {
  switch (size) {
    case 'sm':
      return 'max-w-md';
    case 'lg':
      return 'max-w-4xl';
    case 'xl':
      return 'max-w-6xl';
    default:
      return 'max-w-2xl';
  }
}

// Check if content is a component
function isComponentContent(content: any): content is { component: any; props?: Record<string, any> } {
  return typeof content === 'object' && content !== null && 'component' in content;
}
</script>

{#if modal.visible}
  <!-- Backdrop -->
  <div
    bind:this={modalElement}
    class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
    on:click={handleBackdropClick}
    role="presentation"
  >
    <!-- Modal Dialog -->
    <div
      bind:this={modalDialog}
      class="relative w-full {getSizeClasses(modal.config.size)} max-h-[90vh] bg-white rounded-xl shadow-2xl transform transition-all duration-300 ease-out animate-modal-enter border border-gray-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby={modal.config.title ? `${modal.id}-title` : undefined}
      aria-describedby="{modal.id}-content"
      tabindex="-1"
    >
      <!-- Header -->
      {#if modal.config.title || modal.config.closable}
        <div class="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white rounded-t-xl">
          {#if modal.config.title}
            <h2 id="{modal.id}-title" class="text-xl font-bold text-gray-900 truncate pr-4">
              {modal.config.title}
            </h2>
          {:else}
            <div></div>
          {/if}
          
          {#if modal.config.closable}
            <button
              type="button"
              class="flex-shrink-0 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer group"
              on:click={handleClose}
              aria-label="Close modal"
            >
              <svg class="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          {/if}
        </div>
      {/if}
      
      <!-- Content -->
      <div class="px-6 py-6 overflow-y-auto" style="max-height: calc(90vh - 180px);">
        <div id="{modal.id}-content" class="text-gray-700 leading-relaxed">
          {#if isComponentContent(modal.content)}
            <!-- Render Svelte component -->
            <svelte:component this={modal.content.component} {...(modal.content.props || {})} />
          {:else}
            <!-- Render string content -->
            <div class="whitespace-pre-wrap font-mono text-sm bg-gray-50 p-4 rounded-lg border">{modal.content}</div>
          {/if}
        </div>
      </div>
      
      <!-- Footer -->
      <div class="flex justify-end gap-3 px-6 py-4 border-t border-gray-200 bg-gradient-to-r from-white to-gray-50 rounded-b-xl">
        {#if modal.config.closable}
          <button
            type="button"
            class="px-6 py-2.5 text-sm font-medium text-gray-700 bg-white border-2 border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
            on:click={handleClose}
          >
            Close
          </button>
        {/if}
      </div>
    </div>
  </div>
{/if}

<style>
  /* Ensure smooth transitions */
  :global(body.modal-open) {
    overflow: hidden;
  }
  
  /* Enhanced animations */
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  @keyframes modal-enter {
    from {
      opacity: 0;
      transform: scale(0.95) translateY(-10px);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
  
  .animate-fade-in {
    animation: fade-in 0.2s ease-out;
  }
  
  .animate-modal-enter {
    animation: modal-enter 0.3s ease-out;
  }
  
  /* Custom scrollbar for content area */
  .overflow-y-auto {
    scrollbar-width: thin;
    scrollbar-color: #d1d5db #f9fafb;
  }
  
  .overflow-y-auto::-webkit-scrollbar {
    width: 8px;
  }
  
  .overflow-y-auto::-webkit-scrollbar-track {
    background: #f9fafb;
    border-radius: 4px;
  }
  
  .overflow-y-auto::-webkit-scrollbar-thumb {
    background: #d1d5db;
    border-radius: 4px;
    border: 1px solid #f9fafb;
  }
  
  .overflow-y-auto::-webkit-scrollbar-thumb:hover {
    background: #9ca3af;
  }
</style> 