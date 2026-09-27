# Fossil Noir

Playable, original side-scrolling pixel-art action survival horror demo for GitHub Pages. Built in plain HTML, CSS and JavaScript; no build step, account, analytics, or backend required.

Open `index.html` locally, or visit `https://pta19059.github.io/fossil-noir/` once GitHub Pages publishes the directory.

## Controls

| Action | Desktop | Mobile |
| --- | --- | --- |
| Move | A/D or left/right | Joystick |
| Jump / wall leap | W, up or Space | JUMP |
| Shoot | Mouse click or J (auto aim) | FIRE (auto aim) |
| Backbend dodge | Shift while standing still | DODGE with joystick centered |
| Shoot-dive | Move + Shift (or Shift in the air) | Joystick + DODGE |
| Slow time | Hold Q | Hold TIME |
| Melee | F | MELEE |
| Interact | E | USE |
| Reload | R | RELOAD |
| Select weapon | 1 / 2 / 3, or C to cycle | WEAPON |
| Mount / dismount | G near a cyan saddle; dismount on solid ground | RIDE / GET OFF |
| Strider bite / charge | F / Shift while mounted | BITE / CHARGE |

Four side-scrolling scenes, roof gaps, two code locks, a safehouse checkpoint, limited ammunition and a final bio-weapon encounter. Compact characters, six-pose footwork, distinct backbend and shoot-dive poses, telegraphed dinosaur attacks, a parallax city and pixel bullet-time rings are drawn directly on the Canvas. Gun rendering and projectile spawning share one shoulder/barrel transform, including during dodges. Sprites use original designs: Elias, Razor raptors, Ironback armored quadrupeds, skull sentries and the Crown Rex. Progress is kept in memory for the current session.


## The setting

Vesper, 2091. A distress call on a lost partner's radio frequency draws Elias back to the Black Rain case. Five years ago, an Axiom raid cost him an eye, an arm and his partner. Now the corporation's cloned, genetically modified prehistoric weapons are loose.

1. **Rain over Vesper** — Midnight rooftops, neon hotels, surveillance drones, wet masonry and the witness's stairwell code.
2. **Safehouse 09** — A dry, amber-lit office inside the abandoned precinct. The evidence board and mechanical-arm workbench explain Elias's past. The service lift descends into Axiom's utility tunnels.
3. **Axiom Research Wing** — Sublevel B6: living specimens, broken containment tanks, claw marks, coolant vapor and steel catwalks over service shafts. The Lazarus file identifies the cloning program and emergency reactor code.
4. **The Fracture** — Sublevel B9: a containment ring opens onto a living prehistoric forest. Spores, roots and floating debris surround Crown Rex. Defeat it and use the shutdown console to seal the breach.

Five optional case files can be inspected with E / USE. Reading pauses gameplay; close a file with E, Enter, Escape or the on-screen button. Outdoor rain is confined to Vesper and the safehouse windows. Chapters have distinct materials, lighting, architecture, objectives and entry narration. The case files are original fictional lore for this game.


## Arsenal and mounted combat

All three weapons are available from the start, with separate magazines and reserves. Switching cancels a reload without transferring ammunition. Caches resupply each weapon; the safehouse checkpoint preserves the complete inventory.

- Pistol: 12 rounds, deliberate accurate fire.
- Shotgun: 4 shells, five pellets per shot and a short effective range.
- Carbine: 18 rounds, faster automatic fire, lower damage per round.

The friendly cyan-armored R-09 Strider appears in chapters 1, 3 and 4. G / RIDE links Elias's arm to its control saddle. Mounted movement is faster, jumps are higher, and every firearm works from the saddle. F / BITE delivers a close-range bite; Shift / CHARGE spends instinct to ram each enemy once per charge. Six armor points absorb incoming damage. A disabled mount ejects Elias with brief protection. Dismounting requires solid ground and finds a safe spot on the current platform. Mounts stay in their own chapter.

New threats: Venom Spitters launch arcing acid that leaves temporary damaging pools; Wirewings telegraph aerial dives; Rift Stalkers telegraph short teleports to a valid platform before resuming their attack. All new enemy actions and acid pools respond to bullet time.


## Difficulty

Choose a difficulty in the start menu. Normal preserves the original balance. All weapons, mounts, chapters and case files are available in every mode.

| Setting | Easy / Rookie | Normal / Detective | Hard / Nightmare |
| --- | --- | --- | --- |
| Incoming damage, including Strider armor | 60% | 100% | 140% |
| Starting reserve ammunition and ammo caches | 150% | 100% | 70% |
| Enemy simulation speed (movement, attack timers, enemy projectiles) | 85% | 100% | 115% |
| Instinct drain per second in bullet time | 20 | 27 | 34 |
| Passive Instinct recovery per second | 8 | 5 | 3 |

Ammunition is rounded to whole rounds and capped per weapon. Starting magazines, player health and mount armor are unchanged. Falling into a shaft is fatal on every difficulty. A safehouse checkpoint retains its difficulty and full inventory; use NEW CASE on the retry screen to choose a different difficulty and restart from Chapter 1. Checkpoints exist only during the current page session.
