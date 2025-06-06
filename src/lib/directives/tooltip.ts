import type { Action } from 'svelte/action';
import { tooltipStore } from '../stores/tooltipStore.js';

export const tooltip: Action<HTMLElement, string> = (node, content) => {
  if (!content) return;
  
  let timeoutId: number;
  
  function showTooltip() {
    timeoutId = window.setTimeout(() => {
      tooltipStore.show(content, node);
    }, 200); // Small delay to prevent flickering
  }
  
  function hideTooltip() {
    clearTimeout(timeoutId);
    tooltipStore.hide();
  }
  
  node.addEventListener('mouseenter', showTooltip);
  node.addEventListener('mouseleave', hideTooltip);
  node.addEventListener('focus', showTooltip);
  node.addEventListener('blur', hideTooltip);
  
  return {
    update(newContent: string) {
      content = newContent;
    },
    destroy() {
      clearTimeout(timeoutId);
      node.removeEventListener('mouseenter', showTooltip);
      node.removeEventListener('mouseleave', hideTooltip);
      node.removeEventListener('focus', showTooltip);
      node.removeEventListener('blur', hideTooltip);
    }
  };
}; 