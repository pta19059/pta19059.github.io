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

## Retro presentation

Actual 3D geometry is rendered at 640×400 by default, with a 320×200 classic option, and scaled with nearest-neighbor filtering. Saved resolution preferences are preserved. Original 128-pixel material tiles have brick relief, rivets, vents, rust, aggregate, cracks and scuffed floors. Detailed creatures have articulated limbs, teeth, claws, scales and armor, with rigid geometry batched within each animation pivot. Six native 320×200 weapon sprites use broad painted steel shading, restrained dithering, mechanical fingers, copper coils and ammo indicators. Office case files, laboratory instruments and containment plumbing enrich the mission. Neon signage, fog, impacts and synthesized audio are original artwork and code. No Duke Nukem assets, characters or music are distributed.

Six distinct street frontages include a terracotta diner, the Last Chance, a cinema, a blue record shop, Eden's nightclub and a cream-and-teal Helix clinic. Cornices, pilasters, projecting signs, striped awnings and original illustrated posters give each building a recognizable silhouette. Lit window grids on surrounding towers extend the skyline. Neutral moonlight reveals cracked asphalt and pale masonry, while warm diner light, magenta club light and green laboratory light distinguish the areas. Raptors have earthy hide and ivory claws, soldiers have cool armor and amber visors, and mutants have pale scarred flesh so targets remain readable against their surroundings.

Weathered plaster, chipped ceramic, stone patches and worn paint add material detail to those facades. Original 256×384 painted posters show Elias, an Eden singer and Helix's genetic advertising; the diner has a pictorial coffee-cup landmark. Painted shop interiors give the breakable windows depth. Creature surfaces use intentional dorsal patterns, layered scales, cloth folds, armor bevels and surgical scars, with a low texture-matched light floor to keep details visible in shadow. Stable half-pixel world edges at the default resolution and a softer vignette reveal the pixel art without a full-screen scanline overlay.

Marked fuel canisters have collision, bullet detection, blast damage, smoke, debris, a brief dynamic light and charred remains. Shop glazing breaks into pixel shards with its recess visible behind it. Weapon firing adds layered muzzle flares, localized flash reflections, plasma arcs, drifting smoke and ejected cases. Revolver reloads eject retained cases; machine-gun bolts and revolver hammers move with firing. These effects freeze during pause and clear on mission restart. Closed-door visibility culling avoids drawing creatures in hidden sectors without stopping their simulation.

World effects use a small original eight-cell pixel atlas on up to 192 instanced billboards: ragged fire lobes, fading smoke, electric cores, blood spatter, sparks and glass facets. Elias's muzzle flash is drawn by the weapon sprite instead of a near-camera particle cloud, keeping aiming clear.

Creatures use original pixel-painted hide, scarred skin, fabric and worn armor. Evidence threads, window blinds, a wall clock, sagging service cables, shop meters and covered laboratory specimens add further scene detail. Dithered contact shadows ground the characters; rain is confined to the outdoor street and steam rises at selected drains and vents. High effects quality enables rain and steam. Static wall hits leave up to 64 pixel scars, and defeated enemies leave textured blood stains; those marks reset with a new mission. These effects use fixed instance budgets and do not change combat or collision rules.

Creature anatomy includes a horizontal raptor ribcage, muscular haunches, a tapered skull, an articulated jaw, digitigrade feet and a four-joint counterbalance tail. Humanoids have separate pelvis, chest, knee and elbow joints. Their gait follows actual collision-resolved travel, with planted stance feet, inverse kinematics, lifted swing feet and natural step cadence. Pursuit accelerates and brakes; turning follows the route and the tail reacts to a change in direction. Stationary creatures breathe without walking in place, attack poses follow real combat windups, and defeated creatures settle into a fallen pose. Smooth shading and stable animated vertices improve silhouettes while the world keeps subtle quantized edges and nearest-filtered textures.

The original soundtrack is a sixteen-bar D-minor industrial/noir composition at 112 BPM: syncopated kick and snare, ghost notes, metallic percussion, a gritty bass line, wide dark chords and a recurring detective motif. A synchronized heavier percussion and distorted riff stem fades in when nearby enemies are alerted. The score is generated once into stereo sample buffers, loops continuously, and resumes at the same musical position after pause. Each weapon has a different locally generated sample with layered muzzle crack, pressure-wave body, filtered powder noise, asymmetric room reflections and mechanical detail; the plasma rifle uses a layered energy discharge. Reloads, doors, footsteps and creature attacks have distinct effects. Music briefly dips during shots, and a master compressor preserves attack while controlling overlapping peaks. No external music or sound recordings are required.

Settings include look sensitivity, automatic or explicit control mode, render resolution, graphics quality, separate master/music/effects volumes and difficulty. Existing saved master-volume preferences are preserved. Checkpoints and settings are browser-local, with defensive handling when storage is unavailable. WebGL2 hardware acceleration is required. Performance depends on the browser and GPU; 60 FPS is a target, not a measured guarantee.

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
| `creature-rig.ts` | Original creature anatomy, articulated gait, planted feet, attacks and death poses |
| `retro-textures.ts` | Original pixel material tiles, case files, posters and stains |
| `creature-textures.ts` | Original pixel hide, flesh, fabric and armor surfaces |
| `set-dressing.ts` | Batched office, storefront and laboratory props |
| `district.ts` / `district-textures.ts` | Designed street facades, skyline, original urban surfaces and illustrated posters |
| `effect-textures.ts` | Original pixel atlas for bounded instanced world effects |
| `atmosphere.ts` | Instanced rain, steam, contact shadows and impact decals |
| `viewmodel.ts` | Animated first-person arm and weapons |
| `input.ts` | Pointer Lock, keyboard, mouse and touch |
| `controls.ts` | Device/input detection, saved automatic or explicit control mode |
| `pickup-notices.ts` | Exact typed ammunition recovery cards, queue and gameplay-time expiry |
| `ui.ts` / `style.css` | HUD, menus and settings |
| `audio.ts` | Web Audio playback, adaptive music mix, layered effects and volume controls |
| `audio-synthesis.ts` | Original stereo instruments, weapon samples and industrial/noir composition |

Three.js is MIT licensed. Dependency versions and licenses are recorded by npm; the compiled bundle retains relevant license notices.

## Validation

All **101 automated tests** pass, and the production build passes TypeScript and Vite. The checks cover simulation, arsenal, campaign, creatures, destructibles and original audio. Every chapter completes on Rookie and Detective using ordinary movement, combat, finite ammunition, keycards, switches and exits. A continuous Detective campaign also completes with the actual production inventory-transfer factory: **167 hostiles defeated and all nine original case files collected**. The deterministic test player has perfect aim; simulated completion time is not a human play-time estimate.

The pickup and device update passes **96 integrated browser checks** across desktop, a narrow desktop window, and emulated phones in landscape and portrait. Real keyboard/mouse and native CDP touch input cover simultaneous movement, running, aiming and firing, independent finger release, cancellation/lost capture, the touch actions, explicit overrides, pickup-card identity, accepted capped ammunition, mixed crates, paused timers and queued notices. **30 additional checks** run against the unmodified compiled Pages build across desktop and both phone orientations: real walking collects a weapon, FIRE spends ammunition, RELOAD loads it, USE opens a door, and pause/resume restores controls. The production JS/CSS hashes are verified; no TypeScript source is requested. Five further checks on the unmodified compiled page confirm that active Auto Touch on a fine-pointer desktop profile is preserved when changing volume or resolution. These browser profiles emulate mobile input and viewport capabilities rather than proving performance on physical phones.

The eight-chapter campaign release passed **62 Chromium browser checks** with software WebGL2. The 45 integrated checks cover eight rendered maps, six real reinforcement waves, four dinosaur boss models and health displays, all six weapon slots, actual mouse capture and controls, visible ammunition dropped by a killed soldier, restart cleanup, next-chapter inventory transfer, compatible Continue saves and the final ending. Seventeen additional checks use the unmodified compiled production page under `/fossil-noir/3d/`, including doors, new rail/arc firing and reloading, all four difficulty options, settings and resizing; no TypeScript source is requested. Independent rendered checks verify chapter scenery animation, nearest filtering, paused frames, resource cleanup and new weapon fire/reload art. Eight focused save checks cover every chapter/difficulty pairing and reject corrupt or incompatible snapshots. Rendered playability checks are distinct from simulation tests. Physical-device performance, Firefox/Edge execution and human campaign completion time have not been benchmarked.
