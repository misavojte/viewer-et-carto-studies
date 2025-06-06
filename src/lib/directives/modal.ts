import type { Action } from 'svelte/action';
import { modalStore } from '../stores/modalStore.js';

interface ModalConfig {
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  closable?: boolean;
  backdrop?: boolean;
}

type ModalContent = 
  | string 
  | { 
      component: any; 
      props?: Record<string, any> 
    };

export const modal: Action<HTMLElement, { content: ModalContent; config?: ModalConfig }> = (node, params) => {
  if (!params?.content) return;
  
  let { content, config = {} } = params;
  
  function openModal(event: Event) {
    event.preventDefault();
    modalStore.open(content, {
      title: config.title || '',
      size: config.size || 'md',
      closable: config.closable !== false,
      backdrop: config.backdrop !== false,
      triggerElement: node
    });
  }
  
  node.addEventListener('click', openModal);
  
  return {
    update(newParams: { content: ModalContent; config?: ModalConfig }) {
      content = newParams.content;
      config = newParams.config || {};
    },
    destroy() {
      node.removeEventListener('click', openModal);
    }
  };
}; 