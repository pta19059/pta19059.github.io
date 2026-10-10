import { AMMO_TYPES, WEAPONS, WEAPON_IDS } from './arsenal';
import type { GameEvent, PickupReceipt, WeaponId } from './types';

const escapeHtml = (value: string) => value.replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]!));
const DESCRIPTIONS: Record<WeaponId, string> = {
  revolver: 'Six-shot precision sidearm. Make every round count.',
  shotgun: 'Close-range buckshot. Eight pellets, one bad decision.',
  plasma: 'Rapid green-energy fire. Axiom technology, Vane justice.',
  machinegun: 'Belt-fed automatic fire. Hold the trigger.',
  railgun: 'Magnetic acceleration. One precise, devastating hit.',
  arc: 'High-voltage fire that chains to nearby enemies.',
};
const SILHOUETTES: Record<WeaponId, string> = {
  revolver: '<path fill="#a3b5ac" d="M10 20h50v6H10zM33 26h21v13H33zM24 29h9v6h-9z"/><path fill="#667970" d="M37 28h5v9h-5zM46 28h5v9h-5zM53 23h9v3h-9z"/><path fill="#9e7251" d="M48 39h10l6 17H50z"/>',
  shotgun: '<path fill="#c0cbb9" d="M6 22h55v4H6z"/><path fill="#586c65" d="M6 27h58v5H6zM45 32h16v7H45z"/><path fill="#ae7955" d="M21 29h19v7H21zM58 31h12v13h-8v-8h-4z"/><path fill="#84978d" d="M21 30h2v5h-2zM26 30h2v5h-2zM31 30h2v5h-2z"/>',
  plasma: '<path fill="#8caaa0" d="M5 23h57v13H5zM37 36h18v8H37z"/><path fill="#253d37" d="M12 20h35v3H12zM56 18h10v20H56zM46 44h9v12h-9z"/><path fill="#63e89b" d="M16 25h21v8H16zM7 26h4v7H7zM58 21h5v13h-5z"/><path fill="#c0e4c4" d="M20 26h3v6h-3zM27 26h3v6h-3z"/>',
  machinegun: '<path fill="#8c9d96" d="M3 24h44v6H3zM28 20h34v20H28zM61 24h12v12H61z"/><path fill="#354b42" d="M14 30h14v5H14zM38 40h12v15H38zM51 40h17v9H51z"/><path fill="#d8b778" d="M53 29h4v13h-4zM59 29h4v13h-4zM65 29h4v13h-4z"/>',
  railgun: '<path fill="#a1bbcf" d="M2 22h50v3H2zM2 31h50v3H2zM49 20h19v19H49z"/><path fill="#354c58" d="M16 25h32v6H16zM54 39h9v15h-9z"/><path fill="#7ebeff" d="M8 26h34v3H8zM51 24h3v11h-3zM57 24h3v11h-3zM63 24h3v11h-3z"/>',
  arc: '<path fill="#929db8" d="M8 20h48v5H8zM8 35h48v5H8zM45 25h24v10H45zM51 40h12v15H51z"/><path fill="#374557" d="M18 26h30v8H18z"/><path fill="#b6a1ff" d="M6 23h4v14H6zM16 25h5v10h-5zM27 25h5v10h-5zM38 25h5v10h-5z"/><path fill="#e3d6ff" d="M5 28h7v2H5zM25 28h11v2H25z"/>',
};

export function pickupIcon(weapon?: WeaponId, ammunition = false): string {
  const color = weapon ? AMMO_TYPES[weapon].color : '#f7be62';
  let shape = weapon ? SILHOUETTES[weapon] : '<path fill="#697b61" d="M10 19h59v35H10z"/><path fill="#b9c593" d="M8 15h63v6H8zM19 22h4v30h-4zM56 22h4v30h-4z"/><path fill="#f7be62" d="M31 30h19v13H31z"/>';
  if (ammunition) {
    const energy = weapon === 'plasma' || weapon === 'arc';
    shape = [16, 34, 52].map((x) => `<path fill="${color}" d="M${x} ${energy ? 17 : 22}h12v31h-12z"/><path fill="#d2dac2" d="M${x + 2} 15h8v7h-8z"/><path fill="#283c32" d="M${x + 2} 29h8v16h-8z"/><path fill="${color}" d="M${x + 3} 31h6v11h-6z"/>`).join('');
  }
  return `<svg viewBox="0 0 80 64" aria-hidden="true" shape-rendering="crispEdges">${shape}</svg>`;
}

/** Render only amounts committed by the simulation, never an advertised box size. */
export function pickupCardContent(receipt: PickupReceipt, owned: WeaponId[]): string {
  const id = receipt.weapon;
  const ammunition = receipt.ammunition.filter((item) => WEAPON_IDS.includes(item.weapon) && item.added > 0);
  if (receipt.kind === 'weapon' && id) {
    const added = ammunition.find((item) => item.weapon === id)?.added ?? 0;
    return `<div class="pickup-icon">${pickupIcon(id)}</div><div class="pickup-copy"><small>WEAPON ACQUIRED</small><h3>${escapeHtml(WEAPONS[id].name)}</h3><p>${DESCRIPTIONS[id]}</p><div class="pickup-compatibility">USES / <b>${escapeHtml(AMMO_TYPES[id].name)}</b></div><div class="pickup-quantity">${receipt.loaded ?? 0} LOADED${added ? ` · RESERVE +${added}` : ''}</div></div>`;
  }
  if (receipt.kind === 'ammo' && id) {
    const added = ammunition.find((item) => item.weapon === id)?.added ?? 0;
    return `<div class="pickup-icon">${pickupIcon(id, true)}</div><div class="pickup-copy"><small>AMMUNITION RECOVERED</small><h3>${escapeHtml(AMMO_TYPES[id].name)} <em>+${added}</em></h3><div class="pickup-compatibility">FOR / <b>${escapeHtml(WEAPONS[id].name)}</b></div><p>${owned.includes(id) ? 'Added to this weapon’s reserve.' : 'Stored until you find this weapon.'}</p></div>`;
  }
  return `<div class="pickup-icon">${pickupIcon()}</div><div class="pickup-copy"><small>SUPPLIES RECOVERED</small><h3>Mixed ammunition crate</h3><ul class="pickup-contents">${ammunition.map((item) => `<li><b>+${item.added}</b> ${escapeHtml(AMMO_TYPES[item.weapon].name)}<span>FOR ${escapeHtml(WEAPONS[item.weapon].name)}</span></li>`).join('')}</ul></div>`;
}

type Notice = { receipt: PickupReceipt; owned: WeaponId[]; life: number; duration: number; node?: HTMLElement };

/** A bounded, non-blocking feed. Expiry uses gameplay time, so pause preserves it. */
export class PickupNotices {
  private visible: Notice[] = [];
  private queue: Notice[] = [];
  private seen = new Set<string>();
  private capacity = 2;

  constructor(private root: HTMLElement) {}

  setCompact(compact: boolean): void {
    this.capacity = compact ? 1 : 2;
    while (this.visible.length > this.capacity) {
      const notice = this.visible.pop()!;
      notice.node?.remove(); notice.node = undefined;
      notice.life = notice.duration; this.queue.unshift(notice);
    }
    this.fill();
  }

  handle(events: GameEvent[], owned: WeaponId[]): void {
    for (const event of events) {
      const receipt = event.pickup;
      if (!receipt || this.seen.has(receipt.pickupId)) continue;
      this.seen.add(receipt.pickupId);
      const duration = receipt.kind === 'cache' ? 7 : 5;
      this.queue.push({ receipt, owned: [...owned], life: duration, duration });
    }
    // A level has fewer than 100 supplies; bound the backlog independently.
    if (this.queue.length > 24) this.queue.splice(0, this.queue.length - 24);
    this.fill();
  }

  tick(dt: number): void {
    for (const notice of this.visible) {
      notice.life = Math.max(0, notice.life - dt);
      notice.node?.style.setProperty('--life', String(notice.life / notice.duration));
      if (notice.life === 0) notice.node?.remove();
    }
    this.visible = this.visible.filter((notice) => notice.life > 0);
    this.fill();
  }

  clear(): void {
    this.visible = []; this.queue = []; this.seen.clear(); this.root.replaceChildren();
  }

  private fill(): void {
    while (this.visible.length < this.capacity && this.queue.length) {
      const notice = this.queue.shift()!;
      const node = document.createElement('article');
      node.className = 'pickup-card';
      node.dataset.kind = notice.receipt.kind;
      if (notice.receipt.weapon) node.dataset.weapon = notice.receipt.weapon;
      node.style.setProperty('--pickup-color', notice.receipt.weapon ? AMMO_TYPES[notice.receipt.weapon].color : '#f7be62');
      node.innerHTML = `${pickupCardContent(notice.receipt, notice.owned)}<div class="pickup-timer" aria-hidden="true"></div>`;
      notice.node = node; this.visible.push(notice); this.root.appendChild(node);
    }
  }
}
