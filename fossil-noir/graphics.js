/* Optional Three.js renderer. Loading or graphics failures never block a mission. */
(() => {
  'use strict';
  const button = document.getElementById('graphics-button');
  const key = 'fossil-noir-graphics-v1';
  let preferred = true, engine = null, loading = false, failed = false;
  try { preferred = localStorage.getItem(key) !== 'classic'; } catch {}
  const graphics = window.FossilDepth = {
    available: false,
    render(frame) { return engine.render(frame); },
    disable(error) {
      graphics.available = false;
      failed = true;
      try { engine?.canvas.remove();engine?.dispose(); } catch {}
      engine = null;
      updateButton();
      console.warn('2.5D graphics unavailable; classic rendering remains active.', error);
    }
  };
  function updateButton() {
    engine?.canvas.classList.toggle('hidden', !graphics.available);
    if (!button) return;
    button.textContent = graphics.available ? '2.5D ON' : loading ? '2.5D LOADING' : 'CLASSIC';
    button.setAttribute('aria-pressed', String(graphics.available));
    button.title = failed ? 'WebGL is unavailable. Classic graphics are active; click to retry.' : 'Switch between Three.js 2.5D scenery and classic pixel art';
  }
  async function load() {
    if (loading) return;
    loading = true; updateButton();
    try {
      const { createDepthRenderer } = await import('./three-scene.js?v=3.2.0');
      engine = createDepthRenderer(error => graphics.disable(error));
      engine.canvas.className = 'depth-canvas hidden';
      engine.canvas.setAttribute('aria-hidden','true');
      const game=document.getElementById('game');
      game.parentNode.insertBefore(engine.canvas,game);
      failed = false;
      graphics.available = preferred;
    } catch (error) { graphics.disable(error); }
    finally { loading = false; updateButton(); }
  }
  button?.addEventListener('click', () => {
    preferred = failed ? true : !preferred;
    try { localStorage.setItem(key, preferred ? 'depth' : 'classic'); } catch {}
    graphics.available = preferred && !!engine;
    if (preferred && !engine) load();
    updateButton();
    document.getElementById('game').focus({ preventScroll: true });
  });
  updateButton();
  if (preferred) load();
})();
