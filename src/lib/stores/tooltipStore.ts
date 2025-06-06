import { writable } from 'svelte/store';

interface TooltipState {
  content: string;
  visible: boolean;
  x: number;
  y: number;
  targetRect: DOMRect | null;
}

const initialState: TooltipState = {
  content: '',
  visible: false,
  x: 0,
  y: 0,
  targetRect: null
};

const { subscribe, set, update } = writable<TooltipState>(initialState);

export const tooltipStore = {
  subscribe,
  show: (content: string, targetElement: HTMLElement) => {
    const rect = targetElement.getBoundingClientRect();
    update(state => ({
      ...state,
      content,
      visible: true,
      x: rect.left + (rect.width / 2) + window.scrollX,
      y: rect.bottom + window.scrollY,
      targetRect: rect
    }));
  },
  hide: () => {
    update(state => ({
      ...state,
      visible: false,
      content: '',
      targetRect: null
    }));
  }
}; 