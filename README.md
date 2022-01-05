# Electron Builder for Angular CLI v13+

This is a fork of @angular-guru/electron-builder which seems to be abandoned.

### Overview

This is a builder for the Angular CLI that allows you to target an Electron environment,
giving you access to all functions available to Electron such as file system access, which currently
is not supported in the Angular CLI.

For example, you can do imports such as:

```typescript
import { readFile } from 'fs';
```

It is important to note, is not schematics or anything that will help scaffold an Electron application for you. This is simply an extension to the Angular CLI build step to allow your Angular app to have full access to Electron's features without any awkward workarounds like message passing.

### How To Use

The setup process is now incredibly simple. First install the package:

```bash
npm install @space-santa/electron-builder --save-dev
```

Next, we need to update `angular.json` to use the `electron-builder` in two places:

```json
"build": {
    "builder": "@space-santa/electron-builder:build",
    ...
}
```

```json
"serve": {
    "builder": "@space-santa/electron-builder:dev-server",
    ...
}
```

```json
"test": {
    "builder": "@space-santa/electron-builder:karma",
    ...
}
```
