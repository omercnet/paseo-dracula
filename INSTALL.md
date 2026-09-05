### Paseo

#### Install from Git

Paseo plugins are trusted code. Review the source before installing a plugin on the daemon host.
This theme is data-only and does not access the filesystem, processes, credentials, or network.

Install the latest release from the public repository:

```bash
paseo plugin add omercnet/paseo-dracula
```

#### Activate the theme

1. Open **Settings → Appearance**.
2. Set **Theme** to **Dracula**.
3. Optionally set **Highlight theme** to **Dracula** for matching code syntax colors. Paseo manages
   syntax highlighting separately from app themes.

#### Update

```bash
paseo plugin update paseo-dracula
```

#### Remove

```bash
paseo plugin remove paseo-dracula
```

#### Install from a local checkout

```bash
git clone https://github.com/omercnet/paseo-dracula.git
cd paseo-dracula
bun install --frozen-lockfile
paseo plugin install "$PWD"
```
