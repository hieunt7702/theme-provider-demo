import { useTheme } from "../theme-context";

export const ThemeSelector = () => {
    const { theme, setTheme } = useTheme();

    return (
        <select
            className="border rounded p-1"
            value={theme}
            onChange={(e) => setTheme(e.target.value as any)}
        >
            <option value="default">Default</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="children">Children</option>
        </select>
    );
};
