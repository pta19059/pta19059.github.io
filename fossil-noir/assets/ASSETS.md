# Artwork

## Original music

`music.js` contains the original score **Vesper After Dark**, composed for Fossil Noir. Melody, harmony, bass and percussion are synthesized with the browser's Web Audio API. The score includes mission, safehouse and boss arrangements, with no sampled music or external audio files.

## Environment atlas

- File: `assets/environment-atlas.png`
- Created with: the built-in image generation tool.
- Layout: two columns by four rows, in chapter order.
- Usage: scrolling in-game scenery and chapter cards.
- Style reference: the user-supplied [Metal Slug Egypt GIF](https://tenor.com/view/metal-slug-egypt-metal-slug3-pyramids-gif-22873969).
- The source GIF was inspected as a reference and is not part of the distributed game.

## Generation prompt

Create an original pixel-art environment atlas for the playable browser game Fossil Noir. The supplied Metal Slug GIF frame is STYLE REFERENCE ONLY: study its highly detailed 1990s arcade pixel clusters, warm material shading, elaborate architecture and atmospheric distance. Do not reproduce the camel, rider, level layout or any existing characters. DELIVER ONE PNG IMAGE, dimensions 1536x2048 if possible, arranged as EXACTLY 2 COLUMNS by 4 ROWS of 8 rectangular environment paintings, equal cells, NO gutters, NO borders, NO labels, NO text, NO UI. Every cell is 768 wide by 512 high. All paintings are side-on 2D game backgrounds, distant scenery and middle distance only, with the lowest 20 percent kept subdued for the separately rendered walkable foreground. Meticulous crisp pixel art, visible individual hard pixel clusters, restricted rich palette, organic broken edges and no smooth vector shapes, no blur, no 3D render. Detail closer to the supplied arcade reference than to simple blocky pixel art. Reading order: cell row1 col1 RAINY NOIR CITY rooftop panorama with layered art-deco towers, old brick facades, copper air ducts, telephone wires, warm amber windows and teal dusk sky; row1 col2 DETECTIVE SAFEHOUSE with old books, evidence board without text, worn oak desk, rain outside tall windows, amber lamplight; row2 col1 ABANDONED BIOTECH LABORATORY with teal glass specimen tanks, ribbed pipes, rusted machinery, pale stone walls and emergency lamps; row2 col2 BROKEN TIME REACTOR with massive copper coils, stone ruins protruding through broken metal, amber energy fissure and tangled cables; row3 col1 INDUSTRIAL HARBOUR with rusted cargo cranes, layered shipping containers, cargo ship silhouettes and a warm hazy orange horizon; row3 col2 EXPRESS TRAIN background landscape of sunlit arid mesas, distant ruined stone pyramid and telegraph poles, horizontal desert panorama only, NO TRAIN in this cell because the train is drawn separately; row4 col1 LOST JUNGLE TEMPLE blending the reference's intricately weathered sandstone pyramid, warm sunlit stone terraces, emerald ferns and ancient trees, bright pale turquoise sky, evocative detailed archaeological ruins; row4 col2 AXIOM TRANSMISSION TOWER with monumental brass-and-steel architecture, violet storm sky, distant layered city, antennae and electrical coils. Keep strong atmospheric separation: lighter low-contrast distance, darker textured architectural middle ground, no people, no creatures, no sprites. Designed to become beautiful detailed scrolling in-game scenery.

## Animated artwork

`rendering.js` draws the detective, creatures, terrain, supply crates and explosions as original canvas pixel art. Character and enemy movement is driven by the game state. The original procedural scenery remains available as a fallback.

## 2.5D scenery

`three-scene.js` builds original platform meshes, architecture, machinery and vegetation with Three.js primitives. Surface grain and sign textures are drawn locally with Canvas. The illustrated atlas remains the distant backdrop, and `rendering.js` supplies the animated actor layer and platform textures. Three.js itself is distributed under its MIT license in `vendor/three/LICENSE`.
