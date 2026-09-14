# Teamviewer Mobile Studio

Visual mobile interface editor built for Stefano. Drag/drop and touch positioning, resize, layers, colors, fonts, local drafts, JSON import/export and source project generation.

## Run
Source: `_projects/teamviewer-mobile-studio` in `pta19059/pta19059.github.io`.

Use Node 22.13+ and the pinned pnpm version in package.json:

```sh
cd _projects/teamviewer-mobile-studio
pnpm install --frozen-lockfile
pnpm dev
pnpm build
```

`pnpm build` replaces only the repository's `teamviewer-mobile-studio` folder. Commit both the source changes and that generated folder, then push to `main`; the existing GitHub Pages publishing process serves the static app. The repository's other pages and Jekyll settings remain intact.

Public app: https://pta19059.github.io/teamviewer-mobile-studio/

No ChatGPT Sites runtime or sign-in is needed. This is a client-side React app. Browser drafts from the old domain cannot transfer automatically: export JSON on the old origin and import it here if needed. No user drafts or uploaded images are included in this repository.

## Export status
Android ZIP: Java canvas interface, TeamViewer ScreenSharing adapter, design-only and TeamViewer flavors, Gradle build configuration and optional GitHub Actions workflow. Credentials and an actual Android build runner are required to compile the TeamViewer APK. Generated native code has not been compiled or tested on-device here.

iOS ZIP: SwiftUI interface and XcodeGen project definition. The iOS SDK integration is deliberately pending the official SDK package and documentation. Xcode, signing and provisioning are required for IPA distribution.

No hosted native compiler is connected. The export UI explicitly labels source ZIPs and never claims APK/IPA generation. SDK access credentials are not collected by this editor.

Drafts and images stay in browser localStorage. JSON download is the portable backup. This version supports one fixed-size artboard, visual components and a support action; other buttons require business logic in the native project.

## Verification
Web build and TypeScript checks passed. scripts/verify-exports.ts validates schema boundaries, preview escaping, native source generation and ZIP output. ZIP integrity, JSON, XML and YAML were also checked. The original editor was checked in a browser. Generated native projects have not been tested on a physical device. WebMCP read tool is feature-detected; a supported runtime for registration testing was unavailable.

## Sources
- https://teamviewer.github.io/TravelApp/ScreenSharingSdk/Sdk/index.html
- https://github.com/teamviewer/TravelApp
- https://developer.android.com/build/building-cmdline
- https://developer.apple.com/documentation/xcode/distributing-your-app-for-beta-testing-and-releases

## Product name
Teamviewer Mobile Studio is the requested project title. This independent project is not an official TeamViewer product.
