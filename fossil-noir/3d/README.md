# Fossil Noir 3D — The Neon District

An original retro first-person shooter set in Vesper, 2091. Elias Vane follows Mara's signal from his abandoned detective agency into an Axiom research facility, where Project Lazarus has escaped containment.

Play at **https://pta19059.github.io/fossil-noir/3d/**. The original eight-chapter game remains at https://pta19059.github.io/fossil-noir/.

## Development and publication

Requires Node.js 20.19+ or 22.12+.

```sh
npm ci
npm run dev
```

Open `/fossil-noir/3d/game.html` on the Vite development server. `game.html` is the source HTML entry point; `index.html` is the generated production entry point served by GitHub Pages.

```sh
npm test
npm run build
```

The build type-checks TypeScript, bundles Three.js with Vite, and copies the generated entry point and hashed assets into this folder. Commit `index.html`, `assets/`, and the source project. No backend, CDN, API key or paid service is required. Vite's base path is `/fossil-noir/3d/`; assets use that same prefix.

## The mission

1. Collect the revolver and ammunition in the office. Read the case evidence.
2. Open the agency door with **E** and enter the Neon District.
3. Recover the shotgun, fight escaped raptors, and approach Axiom's facility. The Last Chance hides extra supplies and a plasma rifle.
4. Enter the research lobby. The security annex contains a keycard and heavy machine gun.
5. Use the keycard to open the restricted laboratory. Your checkpoint is saved in this browser.
6. Survive the containment breach, restore the freight lift's power at the switch, and escape through the lift.

Interact with the cyan-saddled Strider in the street to ride it. Interact again to dismount. Health, armor and ammunition are collected on contact. Evidence and the secret room reward exploration.

## Controls

| Action | Keyboard / mouse |
| --- | --- |
| Move | WASD |
| Look | Mouse; click to capture the pointer |
| Fire | Left mouse button |
| Sprint | Shift |
| Jump | Space |
| Crouch | Ctrl or C |
| Interact / ride / dismount | E |
| Reload | R |
| Change weapon | Mouse wheel or 1–4 |
| Instinct | Hold Q |
| Pause / release pointer | Esc or P |

Touch mode provides a movement joystick, drag-to-look area, and action buttons. Landscape orientation is recommended.

## Retro presentation

Actual 3D geometry is rendered at 320×200 or 640×400 and scaled with nearest-neighbor filtering. Procedural pixel textures, faceted animated creatures, neon signage, fog, a visible mechanical arm, four animated weapon sprites, impacts and synthesized audio are original artwork and code. No Duke Nukem assets, characters or music are distributed.

Settings include mouse sensitivity, render resolution, graphics quality, volume and difficulty. Checkpoints and settings are browser-local, with defensive handling when storage is unavailable. WebGL2 hardware acceleration is required. Performance depends on the browser and GPU; 60 FPS is a target, not a measured guarantee.

## Source modules

| Module | Responsibility |
| --- | --- |
| `main.ts` | Game lifecycle, checkpoint persistence, integration |
| `types.ts` | Shared state and input contracts |
| `level.ts` | Level geometry, objects, progression and spawns |
| `simulation.ts` | Movement, physics, weapons, AI and interactions |
| `renderer.ts` | Three.js world, original textures and creature models |
| `viewmodel.ts` | Animated first-person arm and weapons |
| `input.ts` | Pointer Lock, keyboard, mouse and touch |
| `ui.ts` / `style.css` | HUD, menus and settings |
| `audio.ts` | Web Audio sounds and atmosphere |

Three.js is MIT licensed. Dependency versions and licenses are recorded by npm; the compiled bundle retains relevant license notices.

## Validation

The production build passes TypeScript compilation. Fourteen simulation tests cover weapons, reloads, AI, wall and door occlusion, physics, hazards, riding, keycard and elevator gates, checkpoint restoration, death and a complete input-only playthrough with all 20 enemies defeated.

Chromium with software WebGL2 was used to inspect the office, street, security wing, laboratory, lift and all four weapons, with no JavaScript or shader errors. The compiled production page was separately served under `/fossil-noir/3d/`: both hashed assets returned HTTP 200, no TypeScript source was requested, Pointer Lock worked, movement collected the revolver and Escape paused the mission.

Browser interaction checks also passed for keyboard and touch input, firing, reloading, office door interaction, pause/resume, settings persistence and mobile portrait/landscape layouts. Touch checks used a browser device emulation rather than a physical phone.

Physical-device performance, Firefox/Edge execution and the intended 5–10 minute human playtime have not been benchmarked.
