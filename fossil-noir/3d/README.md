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

Shoot the marked fuel canisters to damage nearby enemies, but keep your distance from their blast. The diner and Eden display windows shatter when hit; the shop walls remain solid. Destruction is preserved at a checkpoint and resets with a new mission.

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

Actual 3D geometry is rendered at 640×400 by default, with a 320×200 classic option, and scaled with nearest-neighbor filtering. Saved resolution preferences are preserved. Original 128-pixel material tiles have brick relief, rivets, vents, rust, aggregate, cracks and scuffed floors. Detailed creatures have articulated limbs, teeth, claws, scales and armor, with rigid geometry batched within each animation pivot. Four native 320×200 weapon sprites use broad painted steel shading, restrained dithering, mechanical fingers, copper coils and ammo indicators. Office case files, laboratory instruments and containment plumbing enrich the mission. Neon signage, fog, impacts and synthesized audio are original artwork and code. No Duke Nukem assets, characters or music are distributed.

Six distinct street frontages include a terracotta diner, the Last Chance, a cinema, a blue record shop, Eden's nightclub and a cream-and-teal Helix clinic. Cornices, pilasters, projecting signs, striped awnings and original illustrated posters give each building a recognizable silhouette. Lit window grids on surrounding towers extend the skyline. Neutral moonlight reveals cracked asphalt and pale masonry, while warm diner light, magenta club light and green laboratory light distinguish the areas. Raptors have earthy hide and ivory claws, soldiers have cool armor and amber visors, and mutants have pale scarred flesh so targets remain readable against their surroundings.

Weathered plaster, chipped ceramic, stone patches and worn paint add material detail to those facades. Original 256×384 painted posters show Elias, an Eden singer and Helix's genetic advertising; the diner has a pictorial coffee-cup landmark. Painted shop interiors give the breakable windows depth. Creature surfaces use intentional dorsal patterns, layered scales, cloth folds, armor bevels and surgical scars, with a low texture-matched light floor to keep details visible in shadow. Stable half-pixel world edges at the default resolution and a softer vignette reveal the pixel art without a full-screen scanline overlay.

Marked fuel canisters have collision, bullet detection, blast damage, smoke, debris, a brief dynamic light and charred remains. Shop glazing breaks into pixel shards with its recess visible behind it. Weapon firing adds layered muzzle flares, localized flash reflections, plasma arcs, drifting smoke and ejected cases. Revolver reloads eject retained cases; machine-gun bolts and revolver hammers move with firing. These effects freeze during pause and clear on mission restart. Closed-door visibility culling avoids drawing creatures in hidden sectors without stopping their simulation.

World effects use a small original eight-cell pixel atlas on up to 192 instanced billboards: ragged fire lobes, fading smoke, electric cores, blood spatter, sparks and glass facets. Elias's muzzle flash is drawn by the weapon sprite instead of a near-camera particle cloud, keeping aiming clear.

Creatures use original pixel-painted hide, scarred skin, fabric and worn armor. Evidence threads, window blinds, a wall clock, sagging service cables, shop meters and covered laboratory specimens add further scene detail. Dithered contact shadows ground the characters; rain is confined to the outdoor street and steam rises at selected drains and vents. High effects quality enables rain and steam. Static wall hits leave up to 64 pixel scars, and defeated enemies leave textured blood stains; those marks reset with a new mission. These effects use fixed instance budgets and do not change combat or collision rules.

Creature anatomy includes a horizontal raptor ribcage, muscular haunches, a tapered skull, an articulated jaw, digitigrade feet and a four-joint counterbalance tail. Humanoids have separate pelvis, chest, knee and elbow joints. Their gait follows actual collision-resolved travel, with planted stance feet, inverse kinematics, lifted swing feet and natural step cadence. Pursuit accelerates and brakes; turning follows the route and the tail reacts to a change in direction. Stationary creatures breathe without walking in place, attack poses follow real combat windups, and defeated creatures settle into a fallen pose. Smooth shading and stable animated vertices improve silhouettes while the world keeps subtle quantized edges and nearest-filtered textures.

The original soundtrack is a sixteen-bar D-minor industrial/noir composition at 112 BPM: syncopated kick and snare, ghost notes, metallic percussion, a gritty bass line, wide dark chords and a recurring detective motif. A synchronized heavier percussion and distorted riff stem fades in when nearby enemies are alerted. The score is generated once into stereo sample buffers, loops continuously, and resumes at the same musical position after pause. Each weapon has a different locally generated sample with layered muzzle crack, pressure-wave body, filtered powder noise, asymmetric room reflections and mechanical detail; the plasma rifle uses a layered energy discharge. Reloads, doors, footsteps and creature attacks have distinct effects. Music briefly dips during shots, and a master compressor preserves attack while controlling overlapping peaks. No external music or sound recordings are required.

Settings include mouse sensitivity, render resolution, graphics quality, separate master/music/effects volumes and difficulty. Existing saved master-volume preferences are preserved. Checkpoints and settings are browser-local, with defensive handling when storage is unavailable. WebGL2 hardware acceleration is required. Performance depends on the browser and GPU; 60 FPS is a target, not a measured guarantee.

## Source modules

| Module | Responsibility |
| --- | --- |
| `main.ts` | Game lifecycle, checkpoint persistence, integration |
| `types.ts` | Shared state and input contracts |
| `level.ts` | Level geometry, objects, progression and spawns |
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
| `ui.ts` / `style.css` | HUD, menus and settings |
| `audio.ts` | Web Audio playback, adaptive music mix, layered effects and volume controls |
| `audio-synthesis.ts` | Original stereo instruments, weapon samples and industrial/noir composition |

Three.js is MIT licensed. Dependency versions and licenses are recorded by npm; the compiled bundle retains relevant license notices.

## Validation

All 31 automated tests pass. The suite covers weapons, reloads, AI, wall and door occlusion, physics, hazards, riding, keycard and elevator gates, checkpoint restoration, death and a complete input-only playthrough with all 20 enemies defeated. Creature checks additionally verify collision-resolved motion, stopping, attack synchronization, articulated knees, planted feet, pause, fresh-mission pose reset and geometry budgets. Destructible checks verify collision removal, barrel-top landings, bullet and blast occlusion, finite chain reactions, distance falloff, armor, glass boundary preservation and checkpoint/restart state.

Audio checks verify substantial weapon transients and bodies, decaying tails, different shotgun/machine-gun/plasma waveforms, bounded finite samples, synchronized score-stem lengths, stereo separation and closed loop boundaries.

Chromium with software WebGL2 was used to inspect the office, street, security wing, laboratory, lift and all four weapons, with no JavaScript or shader errors. The compiled production page was separately served under `/fossil-noir/3d/`: both hashed assets returned HTTP 200, no TypeScript source was requested, Pointer Lock worked, movement collected the revolver and Escape paused the mission.

The current district was visually inspected at both retro resolutions and multiple desktop viewport sizes. Browser checks confirmed barrel collision removal, rendered explosion/light decay, glass shards, restored props after restart and creature visibility after a door opens. A rendered input-only run completed the mission with all 20 kills. Production-page checks exercised aiming, firing, reload, door interaction, pause/resume, settings and resizing. Test runs use a controlled frame clock with software rendering; simulated completion time is not a human playtime measurement. Weapon checks confirmed frozen paused frames and one muzzle flash per automatic shot at both 60 and 120 simulated frame rates.

Browser interaction checks also passed for keyboard and touch input, firing, reloading, office door interaction, pause/resume, settings persistence and mobile portrait/landscape layouts. Touch checks used a browser device emulation rather than a physical phone.

Physical-device performance, Firefox/Edge execution and the intended 5–10 minute human playtime have not been benchmarked.
