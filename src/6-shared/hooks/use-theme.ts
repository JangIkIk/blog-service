// package
import { create } from "zustand";
import { z } from "zod";

// type
const ThemeSchema = z.union([z.literal("dark"), z.literal("light")]);
type Theme = z.infer<typeof ThemeSchema>;

type ThemeState = {
  theme: Theme;
};

type ThemeActions = {
  actions: {
    changeTheme: () => void;
    getTheme: () => void;
  };
};

/**
 * @Desc
 * 테마를 다루는 hook
 * 현재로는 dark | light만 다룸
 */
const useTheme = create<ThemeState & ThemeActions>((set, get) => ({
  theme: "light",

  actions: {
    changeTheme: () => {
      const currentTheme = get().theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", currentTheme);
      document.documentElement.classList.toggle(currentTheme);

      set({ theme: currentTheme });
    },
    getTheme: () => {
      const storageTheme = localStorage.getItem("theme");
      const result = ThemeSchema.safeParse(storageTheme);

      const validTheme = result.success ? result.data : "light";

      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(validTheme);

      set({ theme: validTheme });
    },
  },
}));

export { useTheme };
