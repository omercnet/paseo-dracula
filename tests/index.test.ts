import { describe, expect, test } from "bun:test";
import type { PluginContext } from "@getpaseo/plugin";
import contribute from "../index";

type ThemeDefinition = Parameters<PluginContext["addTheme"]>[0];

describe("Dracula theme contribution", () => {
  test("registers the exact theme once and returns callable cleanup", () => {
    const registrations: ThemeDefinition[] = [];
    const plugin = {
      addTheme(theme: ThemeDefinition) {
        registrations.push(theme);
      },
    } as unknown as PluginContext;

    const cleanup = contribute(plugin);

    expect(registrations).toHaveLength(1);
    expect(registrations[0]).toEqual({
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
        mutedForeground: "#F8F8F2",
        ring: "#6272A4",
      },
    });
    expect(typeof cleanup).toBe("function");
    expect(cleanup()).toBeUndefined();
  });
});
