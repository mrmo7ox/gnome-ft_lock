# 🌙 GNOME Sleep Icon Extension

A GNOME Shell extension that adds a 💤 Sleep icon to the top bar. Clicking the Sleep icon puts the system into suspend mode.

## ✨ Features

- 🖼️ Adds a symbolic "Sleep" icon (`media-playback-pause-symbolic`) to the GNOME top bar.
- 🖱️ Executes the `ft_lock` command when clicked to put the system to sleep.

## 📥 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mrmo7ox/gnome-ft_lock.git
   ```

2. Copy the extension directory to GNOME Shell's extensions folder:
   ```bash
   mkdir -p ~/.local/share/gnome-shell/extensions/
   ```
   ```bash
   cp -r gnome-ft_lock ~/.local/share/gnome-shell/extensions/topbar-icon@mrmo7ox
   ```

3. Enable the extension:
   - 🔄 Reload GNOME Shell (on X11): `Alt + F2`, type `r`, and press Enter.
   - 🔒 On Wayland, restart your session (log out and log back in).
   - Then enable the extension:
     ```bash
     gnome-extensions enable topbar-icon@mrmo7ox
     ```

## 📂 Files

- `metadata.json`: 📋 Defines metadata for the extension, such as name, description, and supported GNOME versions.
- `extension.js`: 🖥️ Main JavaScript file that implements the functionality.
- `stylesheet.css`: 🎨 Optional CSS for styling the icon.

## 🛠️ Requirements

- 🖥️ GNOME Shell version 42 or higher.
- ⚙️ `ft_lock` command for suspend functionality.

