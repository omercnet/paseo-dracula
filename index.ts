import type { PluginContext } from "@getpaseo/plugin";

export default function contribute(plugin: PluginContext) {
  plugin.addTheme({
    id: "paseo-dracula",
    name: "Dracula",
    appearance: "dark",
    colors: {
      background: "#282A36",
      foreground: "#F8F8F2",
      raised: "#343746",
      control: "#44475A",
      border: "#424450",
      accent: "#BD93F9",
      mutedForeground: "#6272A4",
      ring: "#6272A4",
    },
  });

  return () => {};
}
