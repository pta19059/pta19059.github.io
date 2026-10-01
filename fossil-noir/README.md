# Fossil Noir — Three.js 2.5D Edition

An eight-chapter 2.5D pixel noir run and gun, playable at <https://pta19059.github.io/fossil-noir/>.
All game text, menus, case files, controls and documentation are in English.

## Play

Serve the complete folder over HTTP or HTTPS. The Three.js modules require a web server; opening `index.html` directly uses classic graphics. With Node.js 18 or later:

```sh
npm start
```

Visit <http://127.0.0.1:4173/>. No package installation or build step is needed.
Continue restores the beginning of your last saved chapter on the same browser and address.

## Three.js 2.5D graphics

The side view, pixel characters, collision geometry and controls are preserved. Three.js r186 renders solid platforms with visible tops and sides, chapter scenery at different depths, and lighting that reacts to gunfire and explosions. The illustrated backgrounds sit behind the geometry, and the animated pixel characters are composited into the scene.

Each chapter has its own scenery: rooftop vents and neon signs, safehouse shelves, laboratory tanks, a reactor ring, harbour containers and cranes, train carriages, jungle ruins, and tower machinery. Architecture is batched by material to reduce draw calls. The fixed 480 × 360 render size keeps the pixel art crisp and avoids high-resolution GPU work on phones.

Use **2.5D ON / CLASSIC** below the game to switch graphics during a mission. The choice is saved separately from your checkpoint. If WebGL2 is unavailable, a module fails to load or the graphics context is lost, classic rendering takes over and the mission continues. Click **CLASSIC** to retry 2.5D graphics.

Three.js is bundled in `vendor/three/`; gameplay makes no requests to a graphics CDN. See `vendor/three/README.md` and `vendor/three/LICENSE` for version, provenance and licensing.

## Original artwork

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

### Smarter creatures (3.3)

Eighteen additional creatures bring the opening encounters to 65 enemies across the seven combat chapters, plus the existing reinforcements. Safehouse 09 remains a rest stop.

- Nearby predators stagger their melee attacks and close faster when they observe a reload.
- Spitters remember recent gunfire, back away from sustained fire or a shotgun, and relax when the pressure stops.
- Mobile ground creatures try to escape nearby grenades while staying on their platform. They remain vulnerable to the blast.
- Ranged attackers use delayed observations with a small amount of movement prediction.
- Wirewings commit to a dive before the warning ends, allowing a change of direction to evade them.
- Stalkers avoid occupied ambush positions and mark their destination before teleporting.

This lightweight, rule-based AI runs entirely in the browser, including on GitHub Pages. It needs no AI service, API key or backend. Observation slows with Instinct; Easy gives more reaction time. Creature health and damage are unchanged. Short combat memories reset at each chapter or retry, and existing checkpoints remain compatible.

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

Touch controls support movement and firing at the same time. Landscape fullscreen places the joystick and action buttons beside the game.

## Music

The original chiptune score, **Vesper After Dark**, starts when you begin a mission. It combines melody, bass, arpeggios and drums, with chapter variations, a softer safehouse arrangement and a faster boss arrangement. The browser synthesizes the score locally; no audio downloads are needed.

Use **MUSIC ON / OFF** and **SFX ON / OFF** below the game to control music and sound effects separately. Your choices are saved. Music pauses with the game and when you leave the tab.

## Checks

```sh
npm test
npm run check
```

The tests run the real game code in a small DOM/canvas host. They cover movement across every gap, ammunition, grenades, supplies, jumping, checkpoints, access codes, boss attacks, progression, English text and the artwork package. Combat checks cover delayed perception, fading memory, grenade evasion, pack attacks, reload openings, committed dives, ambush warnings and safe movement near gaps. They also verify that the renderer receives the real chapter and muzzle positions and that a failed 2.5D frame cannot stop gameplay.

Browser checks cover all eight chapters using WebGL2, graphics switching and saved preferences, real context loss and recovery, blocked renderer imports, keyboard and touch input, pause, reload/continue, small screens and fullscreen. Headless checks use software WebGL; frame rates on physical mobile devices still depend on the device.

## Publish

Upload these together to the folder served by GitHub Pages:

- `index.html`
- `style.css`
- `chapters.js`
- `rendering.js`
- `music.js`
- `graphics.js`
- `three-scene.js`
- `game.js`
- `assets/`
- `vendor/`

Relative paths also work under `/fossil-noir/`. The game falls back to its procedural backgrounds if the illustrated atlas fails to load. Google Fonts are optional; local font fallbacks are included.

The source lives in the [`fossil-noir` folder of pta19059.github.io](https://github.com/pta19059/pta19059.github.io/tree/main/fossil-noir). GitHub Pages publishes the `main` branch at <https://pta19059.github.io/fossil-noir/>. Local `.work/` references, backups and QA artifacts are excluded from publication.

## Three.js showcase

The game uses Three.js and is hosted on GitHub Pages. The [official showcase](https://discourse.threejs.org/t/about-the-showcase-category/25) accepts projects built with Three.js; submissions require moderator approval and may be considered for the threejs.org homepage. No showcase submission has been made for this update.
