# Dracula for Paseo

A minimal, data-only [Dracula Classic](https://draculatheme.com/spec) theme plugin for Paseo.
It registers one dark theme and no other surfaces, commands, RPCs, filesystem access, process access,
or network behavior.

Paseo expands the eight contributed seed colors into its full theme: app surfaces, panels, menus,
diffs, status colors, syntax colors, terminal colors, focus treatment, and shadows.

## Requirements

- Paseo 0.7.x. The plugin targets the 0.7.2 plugin SDK.
- Bun 1.4.0 or newer to install development dependencies from a checkout.

## Install locally

Paseo plugins are trusted, unsandboxed code. Review the source before installing it on the daemon
host.

```bash
git clone https://github.com/omercnet/paseo-dracula.git
cd paseo-dracula
bun install --frozen-lockfile
paseo plugin install "$PWD"
```

Open **Settings → Appearance** and select **Dracula**.

## Palette mapping

Every Paseo 0.7 contributed-theme seed is set explicitly from the official Dracula Classic palette
and UI palette.

| Paseo seed | Dracula token | Value |
| --- | --- | --- |
| `background` | Background | `#282A36` |
| `foreground` | Foreground | `#F8F8F2` |
| `raised` | Floating interactive elements / Background Light | `#343746` |
| `control` | Selection | `#44475A` |
| `border` | Background Lighter | `#424450` |
| `accent` | Purple | `#BD93F9` |
| `mutedForeground` | Comment / Current Line | `#6272A4` |
| `ring` | Current Line / Comment | `#6272A4` |

Paseo 0.7 accepts only these eight seed fields. Derived terminal, syntax, status, diff, and other UI
colors are owned by Paseo rather than duplicated in this plugin.

## Develop

```bash
bun install
bun run check
bun run typecheck
bun run test
bun run test:coverage
bun run package:release
paseo plugin install /absolute/path/to/paseo-dracula
```

Release Please maintains versions, changelog entries, tags, and GitHub releases from Conventional
Commits. Each release archive contains the complete installable plugin source.

## Credits

The palette and token names come from the
[official Dracula Theme specification](https://draculatheme.com/spec), maintained by the Dracula
Theme contributors. This Paseo plugin is released under the [MIT License](LICENSE).
