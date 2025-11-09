/* ========================================
   FILE: /assets/js/main-template.js
   Minimal JS for loading header and footer
   ======================================== */

import { loadPartials } from './partials.js';

document.addEventListener('DOMContentLoaded', async () => {
  // Load header and footer partials
  await loadPartials();
});
