# Fossil Noir — Illustrated Arcade Edition

An eight-chapter pixel noir run and gun, based on the game at <https://pta19059.github.io/fossil-noir/>.
All game text, menus, case files, controls and documentation are in English.

## Play

Open `index.html` in a modern browser. Keep `chapters.js`, `game.js`, `rendering.js`, `style.css` and the `assets` folder alongside it.
For a local server and a stable save location, use Node.js 18 or later:

```sh
npm start
```

Visit <http://127.0.0.1:4173/>. No package installation or build step is needed.
Continue restores the beginning of your last saved chapter on the same browser and address.

## Visual update

- Eight original illustrated backgrounds, with textured architecture, weathered stone, warm material shading and distant scenery.
- A slimmer detective sprite, shaded creature silhouettes, articulated walking and wing animation, muzzle flashes and defeat animations.
- Textured platforms, supply crates, debris, rain, drifting particles, layered fire and smoke explosions.
- Scrolling scenery moves more slowly than platforms and characters to give the scene depth.
- Lost Canopy combines jungle vegetation with sunlit sandstone temple ruins, following the atmosphere of the supplied reference.

The visual reference was the [Metal Slug Egypt GIF supplied by the user](https://tenor.com/view/metal-slug-egypt-metal-slug3-pyramids-gif-22873969). The scenery is newly generated and the animated sprites are original canvas artwork. The reference GIF is not distributed with the game. See `assets/ASSETS.md` for the artwork prompt and provenance.

## Gameplay

**Arcade** starts with unlimited pistol ammunition, continuous fire, faster reloads and unlocked access terminals. Falling costs health and returns you to safe ground.
**Story** retains limited ammunition, access-code puzzles and lethal falls.

Both modes include grenades, a temporary heavy machine gun, destructible crates, hostage rescues, combos up to ×5, rideable Striders and a checkpoint at every chapter. All eight chapters can be selected from the menu.

| Chapter | Mission |
| --- | --- |
| 01 — Rain over Vesper | Cross the rooftops and reach Safehouse 09. |
| 02 — Safehouse 09 | Read the case files and resupply. |
| 03 — Axiom Research Wing | Recover the Lazarus evidence. |
| 04 — The Fracture | Defeat Crown Rex, then follow the trail to the harbour. |
| 05 — Blackwater Docks | Stop the shipment and board the train. |
| 06 — Iron Express | Cross the carriages and destroy Iron Jaw. |
| 07 — The Lost Canopy | Find Mara among ancient ruins and defeat Root Crown. |
| 08 — Axiom Zero | Destroy Omega and broadcast the evidence. |

## Controls

| Input | Action |
| --- | --- |
| A / D or ← / → | Move |
| Space / W | Jump; hold for a higher jump |
| J / left mouse button | Hold for continuous fire |
| ↑ / ↓ | Aim up / slightly down (20° maximum); combine with movement for diagonal aim |
| K / X | Throw a grenade |
| Shift | Dodge; charge while mounted |
| Q | Slow time |
| F | Melee; bite while mounted |
| E | Read, interact or enter an exit |
| R | Reload |
| 1 / 2 / 3 or C | Select or cycle weapons |
| G | Mount or dismount |
| P / Esc | Pause |

Touch controls support movement and firing at the same time. Landscape fullscreen places the joystick and action buttons beside the game. Sound can be switched off.

## Checks

```sh
npm test
npm run check
```

The tests run the real game code in a small DOM/canvas host. They cover movement across every gap, ammunition, grenades, supplies, jumping, checkpoints, access codes, boss attacks, progression, English text and the artwork package. Browser checks cover all chapters, image loading, keyboard and touch input, pause, reload/continue, small screens and fullscreen.

## Publish

Upload these together to the folder served by GitHub Pages:

- `index.html`
- `style.css`
- `chapters.js`
- `rendering.js`
- `game.js`
- `assets/`

Relative paths also work under `/fossil-noir/`. The game falls back to its procedural backgrounds if the illustrated atlas fails to load. Google Fonts are optional; local font fallbacks are included.

The source lives in the [`fossil-noir` folder of pta19059.github.io](https://github.com/pta19059/pta19059.github.io/tree/main/fossil-noir). GitHub Pages publishes the `main` branch at <https://pta19059.github.io/fossil-noir/>. Local `.work/` references, backups and QA artifacts are excluded from publication.
