import { useEffect, useState } from "react";

function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(darkMode ? 'light' : 'dark');
        root.classList.add(darkMode ? 'dark' : 'light');
      }, [darkMode]);
  return (
    <div className="mr-10">
      <button
      className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-3 py-2 rounded-md"
      onClick={() => setDarkMode(!darkMode)}

    >
dkmwkdm
    </button>
    
    </div>
  )
}

export default ThemeToggle
