import { writable } from 'svelte/store';

interface ModalConfig {
  title: string;
  size: 'sm' | 'md' | 'lg' | 'xl';
  closable: boolean;
  backdrop: boolean;
  triggerElement?: HTMLElement;
}

type ModalContent = 
  | string 
  | { 
      component: any; 
      props?: Record<string, any> 
    };

interface ModalState {
  content: ModalContent;
  visible: boolean;
  config: ModalConfig;
  id: string;
}

const initialState: ModalState = {
  content: '',
  visible: false,
  config: {
    title: '',
    size: 'md',
    closable: true,
    backdrop: true
  },
  id: ''
};

const { subscribe, set, update } = writable<ModalState>(initialState);

// Focus management
let previousActiveElement: HTMLElement | null = null;
let modalId = 0;

export const modalStore = {
  subscribe,
  open: (content: ModalContent, config: ModalConfig) => {
    // Store the currently focused element to restore later
    previousActiveElement = document.activeElement as HTMLElement;
    
    modalId++;
    const id = `modal-${modalId}`;
    
    update(state => ({
      ...state,
      content,
      visible: true,
      config,
      id
    }));
    
    // Add event listeners for keyboard navigation
    document.addEventListener('keydown', handleKeyDown);
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
  },
  close: () => {
    update(state => ({
      ...state,
      visible: false,
      content: '',
      id: ''
    }));
    
    // Remove event listeners
    document.removeEventListener('keydown', handleKeyDown);
    
    // Restore body scroll
    document.body.style.overflow = '';
    
    // Restore focus to the trigger element
    if (previousActiveElement) {
      previousActiveElement.focus();
      previousActiveElement = null;
    }
  }
};

function handleKeyDown(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    const currentState = $modalStore;
    if (currentState.visible && currentState.config.closable) {
      modalStore.close();
    }
  }
  
  // Focus trap
  if (event.key === 'Tab') {
    trapFocus(event);
  }
}

function trapFocus(event: KeyboardEvent) {
  const modal = document.querySelector('[role="dialog"]') as HTMLElement;
  if (!modal) return;
  
  const focusableElements = modal.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  const firstFocusable = focusableElements[0] as HTMLElement;
  const lastFocusable = focusableElements[focusableElements.length - 1] as HTMLElement;
  
  if (event.shiftKey) {
    if (document.activeElement === firstFocusable) {
      event.preventDefault();
      lastFocusable?.focus();
    }
  } else {
    if (document.activeElement === lastFocusable) {
      event.preventDefault();
      firstFocusable?.focus();
    }
  }
}

// Create a derived store to access current state
function createDerivedStore() {
  let currentState: ModalState = initialState;
  subscribe(state => {
    currentState = state;
  });
  return currentState;
}

const $modalStore = {
  get visible() { return createDerivedStore().visible; },
  get config() { return createDerivedStore().config; }
}; 