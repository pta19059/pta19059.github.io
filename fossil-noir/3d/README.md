# Fossil Noir 3D — The Black Rain Campaign

An original eight-chapter retro first-person shooter set in Vesper, 2091. Elias Vane follows Mara Vale's signal from the Neon District through Axiom's laboratories, Blackwater harbour, a moving freight train and the prehistoric breach, before broadcasting the truth from Axiom's tower. The chapter names, order, case files and central story are preserved from Fossil Noir's original 2D campaign.

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

## The campaign

| Chapter | Location and objective |
| --- | --- |
| 01 — Rain Over Vesper | The Neon District: collect weapons, find the witness note, breach the facility and reach Safehouse 09. |
| 02 — Safehouse 09 | A quiet precinct refuge: read both case files, resupply and take the service lift. |
| 03 — Axiom Research Wing | Explore the specimen wing, recover Lazarus evidence and unlock reactor access. |
| 04 — The Fracture | Destroy Crown Rex and seal the first breach. |
| 05 — Blackwater Docks | Fight through container yards, stop the cargo and board the last train. |
| 06 — Iron Express | Cross connected carriages, find Mara's signal and destroy Iron Jaw. |
| 07 — The Lost Canopy | Explore jungle ruins and the Axiom outpost, recover Mara's log and defeat Root Crown. |
| 08 — Axiom Zero | Reach the transmitter, destroy Omega and broadcast the evidence. |

Choose any chapter from the main menu or play them in order using **NEXT CHAPTER**. Acquired weapons, ammunition and recovered dossiers carry forward. Each chapter has its own layout, gates, supplies and exit. Safehouse 09 preserves the original narrative pause. The other chapters include combat encounters; later chapters add triggered reinforcement waves and bosses.

Weapons and colour-coded ammunition are collected by walking over them. Ammunition has separate finite reserves for each weapon, can be stored before its weapon is found, and remains on the ground when that reserve is full. Duplicate weapons supply spare ammunition. Cybernetic soldiers leave physical ammunition packs to collect rather than granting supplies remotely. Side routes and secret rooms reward exploration.

Each successful weapon or ammunition collection displays a non-blocking recovery card with its identity, ammunition type, compatible weapon and the exact quantity accepted after difficulty scaling and reserve limits. Mixed crates list individual supplies rather than claiming universal ammunition. Cards explain when ammunition is stored for a weapon not yet found. Their display timer freezes during pause; phone mode queues one card at a time to keep the controls clear.

Interact with a cyan-saddled Strider to ride it. Press **E** on PC or tap **USE** in touch mode again to dismount. Mounts are restricted to each map's designated riding area. Fuel canisters produce occluded explosions that damage nearby enemies and Elias; marked glass shatters. Destruction, drops, triggered waves and progress are restored at saved checkpoints and reset on a new chapter run.

## Arsenal and difficulty

| Slot | Weapon | Ammunition | Combat role |
| --- | --- | --- | --- |
| 1 | Detective Revolver | .44 rounds | Accurate medium-damage pistol, six-round cylinder. |
| 2 | Tactical Shotgun | 12-gauge shells | Eight pellets and powerful close-range bursts. |
| 3 | Plasma Rifle | Plasma cells | Rapid green energy fire. |
| 4 | Heavy Machine Gun | 7.62 rounds | Automatic fire and sixty-round belts. |
| 5 | Rail Rifle | Rail slugs | Precise high-damage magnetic shots, five-round magazine. |
| 6 | Arc Disruptor | Arc capacitors | Electrical hits chain to up to two nearby enemies with line of sight. |

Four difficulties are selectable before starting: **Rookie, Detective, Nightmare and Extinction**. They change enemy health, movement, attack rate, damage, accuracy and the amount of ammunition collected. Settings changes do not silently change the difficulty of a mission already in progress.

## Controls

| Action | PC: keyboard / mouse | Phone / tablet: touch |
| --- | --- | --- |
| Move | WASD | Left joystick |
| Look | Mouse; click to capture the pointer | Drag the right side |
| Fire and aim | Left mouse button + mouse | Hold and drag FIRE |
| Sprint | Hold Shift | Push joystick fully, or hold RUN |
| Jump | Space | Tap JUMP |
| Crouch | Hold Ctrl or C | Hold CROUCH |
| Interact / ride / dismount | E | Tap USE |
| Reload | R | Tap RELOAD |
| Change weapon | Mouse wheel or 1–6 | Tap GUN |
| Instinct | Hold Q | Hold FOCUS |
| Pause | Esc or P | Tap Ⅱ |

Auto mode detects mobile devices, iPadOS and the primary pointer type, then follows actual touch, keyboard or mouse use. A narrow browser window or touchscreen support alone does not identify a phone. The menu, field manual, interaction hints and touch-control visibility all use the active mode. Choose **Auto**, **PC**, or **Phone / tablet** in Controls or Settings to override detection; the choice is saved. Touch mode never requests mouse capture. Independent pointer ownership allows simultaneous gestures and clears held actions on cancellation, lost capture, blur, pause or mode change. Landscape orientation is recommended.

## Graphics presentation

Enhanced rendering is the default, with adaptive resolution and smooth world scaling. Settings switch immediately between **Enhanced** and **Classic Retro**, with **Adaptive**, **720p**, **1080p**, **640×400** or **320×200** resolution choices. Old saves without a visual-style preference adopt Enhanced/Adaptive once while retaining controls, difficulty and audio settings. Explicit new visual preferences persist. Adaptive resolution responds to frame cost and caps desktop High at 1920×1080; mobile profiles have smaller pixel budgets and omit bloom and dynamic shadows. Fixed HD choices preserve viewport aspect ratio and remain subject to device budgets.

Enhanced uses original 256/512-pixel material maps with shallow relief, roughness, rust, seams, cracked masonry, damp roads, moss, bark, layered stone and worn industrial panels. Room-based ambient reflections, local lamps, restrained bloom, filmic tone mapping, antialiasing and nearby sun/moon shadows improve depth without removing the dark noir atmosphere. Additional distant buildings, weathered relief, cloud layers, contact grime and planted jungle ground give all eight chapters more depth. This scenery does not change collision, routes, pickups or mission objectives.

All six Enhanced weapons are real, lit 3D models with beveled receivers, normalized wear maps, distinct silhouettes and Elias's mechanical arm. Cylinders, pumps, bolts, magazines and energy assemblies animate during firing, reloading, weapon changes and movement. Static details are batched into 9–13 draw calls per weapon. Classic Retro retains the native pixel-painted arm and weapons, nearest-neighbor surfaces and the original low-resolution presentation.

Raptors, soldiers, mutants and bosses have original rounded anatomy, textured 256-pixel hide or armor, articulated jaws, muscular legs, curved claws and six-joint dinosaur tails. Their gait follows actual collision-resolved travel, with planted stance feet, inverse kinematics, lifted swing feet, acceleration, braking and direction-sensitive tail movement. A rigidly weighted skeletal mesh consolidates each Enhanced creature into 6–9 material groups while retaining the original animation pivots; Retro can restore the separate rigid parts. These are original procedural models rather than licensed assets or imported motion-capture animations.

The district retains its six designed storefronts, illustrated posters, window interiors, case-file office and laboratory instruments. Original bounded rain, steam, blood stains, bullet scars, flashes, electrical arcs, smoke, ejected cases, shattering glass and explosive fuel canisters remain functional. Enhanced uses smoother smoke and contact-shadow stamps; Retro keeps pixel effects. Effects and poses freeze during pause, and their transient state resets on restart. Closed-door visibility culling and batched geometry reduce rendering work without stopping gameplay simulation. No Duke Nukem or Unreal assets, characters or music are distributed.

The original soundtrack is a sixteen-bar D-minor industrial/noir composition at 112 BPM: syncopated kick and snare, ghost notes, metallic percussion, a gritty bass line, wide dark chords and a recurring detective motif. A synchronized heavier percussion and distorted riff stem fades in when nearby enemies are alerted. The score is generated once into stereo sample buffers, loops continuously, and resumes at the same musical position after pause. Each weapon has a different locally generated sample with layered muzzle crack, pressure-wave body, filtered powder noise, asymmetric room reflections and mechanical detail; the plasma rifle uses a layered energy discharge. Reloads, doors, footsteps and creature attacks have distinct effects. Music briefly dips during shots, and a master compressor preserves attack while controlling overlapping peaks. No external music or sound recordings are required.

Settings include look sensitivity, automatic or explicit control mode, Enhanced or Classic Retro rendering, adaptive or fixed resolution, effects quality, separate master/music/effects volumes and difficulty. Existing saved master-volume preferences are preserved. Checkpoints and settings are browser-local, with defensive handling when storage is unavailable. WebGL2 hardware acceleration is required. Performance depends on the browser and GPU; 60 FPS is a target, not a measured guarantee.

## Source modules

| Module | Responsibility |
| --- | --- |
| `main.ts` | Eight-chapter transitions, inventory carry, validated local saves, game lifecycle |
| `types.ts` | Shared state and input contracts |
| `level.ts` | Original Neon District geometry and pickups |
| `campaign.ts` / `campaign-levels.ts` | Eight chapters, handcrafted maps, reinforcement triggers and original case files |
| `campaign-dressing.ts` / `campaign-textures.ts` | Batched chapter-specific props, original pixel surfaces and moving scenery |
| `arsenal.ts` | Six weapon definitions, ammunition limits and difficulty rules |
| `simulation.ts` | Movement, physics, weapons, AI and interactions |
| `renderer.ts` | Three.js world, batched scenery and creature integration |
| `creature-rig.ts` / `creature-skin.ts` | Original anatomy, planted gait, attack/death poses and batched skeletal rendering |
| `retro-textures.ts` | Original pixel material tiles, case files, posters and stains |
| `creature-textures.ts` | Original detailed hide, flesh, fabric and armor surfaces |
| `set-dressing.ts` | Batched office, storefront and laboratory props |
| `district.ts` / `district-textures.ts` | Designed street facades, skyline, original urban surfaces and illustrated posters |
| `effect-textures.ts` | Original pixel atlas for bounded instanced world effects |
| `atmosphere.ts` | Instanced rain, steam, contact shadows and impact decals |
| `viewmodel.ts` / `weapon-models.ts` | Classic pixel and Enhanced 3D first-person weapons |
| `surface-materials.ts` / `campaign-surfaces.ts` | Original detailed albedo, bump and roughness maps |
| `enhanced-dressing.ts` | Additional chapter scenery, terrain and distant depth |
| `graphics-policy.ts` / `render-effects.ts` | Device resolution budgets, postprocessing and weapon overlay |
| `input.ts` | Pointer Lock, keyboard, mouse and touch |
| `controls.ts` | Device/input detection, saved automatic or explicit control mode |
| `pickup-notices.ts` | Exact typed ammunition recovery cards, queue and gameplay-time expiry |
| `ui.ts` / `style.css` | HUD, menus and settings |
| `audio.ts` | Web Audio playback, adaptive music mix, layered effects and volume controls |
| `audio-synthesis.ts` | Original stereo instruments, weapon samples and industrial/noir composition |

Three.js is MIT licensed. Dependency versions and licenses are recorded by npm; the compiled bundle retains relevant license notices.

## Validation

All **125 automated tests** pass, and the production build passes TypeScript and Vite. Tests cover simulation, arsenal, campaign, creatures, destructibles, original audio, device detection, graphics budgets, settings migration, added scenery and skeletal transforms. Every chapter completes on Rookie and Detective using movement, combat, finite ammunition, keycards, switches and exits. A continuous Detective campaign also completes using the production inventory-transfer factory and collects all nine original case files. The deterministic player has perfect aim; simulated completion time is not a human play-time estimate.

The rendering update passes **80 integrated Chromium browser checks** across the real game UI and a renderer/simulation harness: all eight maps, all six modeled weapons and their firing/reload/switch poses, actual creature skeletal motion, Enhanced/Retro filtering, adaptive/fixed resolutions, mobile budgets, resizing, Pointer Lock, walking, firing, reloading, preference persistence and old-settings migration. Separate refreshed captures verify the final Enhanced presentation. Focused unique-resource audits check world, weapon, shadow, environment and postprocessing disposal, while species checks cover raptors, soldiers, mutants, brutes and the rideable dinosaur.

The unmodified compiled Pages page is also checked on desktop and emulated phones in landscape and portrait. Actual keyboard/mouse and native CDP touch events cover walking to a weapon, its acquisition card, firing, reloading, opening the office door and pause/resume. A hybrid desktop/touch regression verifies that releasing Pointer Lock after touch cannot let an incidental mouse hover hide the touch controls. Production settings checks cover the graphics choices, saved preferences, migration and chapter transitions. Requests load compiled local JS/CSS under `/fossil-noir/3d/` without TypeScript source imports.

Rendered checks use Chromium with software WebGL2 and controlled fixtures; they are separate from simulated campaign completion. No physical-phone or typical-hardware FPS benchmark, Firefox/Edge run or timed human campaign playthrough is claimed. The visual target is the detailed classic late-1990s presentation shown in the reference, rendered with Three.js in the browser rather than Unreal Engine.
