import { copyFileSync, cpSync, rmSync } from 'node:fs';
// Commit the static production entry point beside the source project for Pages.
// game.html is retained as the development entry point.
rmSync('assets', { recursive: true, force: true });
cpSync('dist/assets', 'assets', { recursive: true });
copyFileSync('dist/game.html', 'index.html');
