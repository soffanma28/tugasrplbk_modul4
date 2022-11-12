import React, { useState, useContext } from "react";
import { MerkContext } from '../learn_state/counter';
import "./index.css";
const themes = {
  light: {
    id: 1,
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    id: 2,
    foreground: "#ffffff",
    background: "#222222",
  },
};
const ThemeContext = React.createContext(themes.light);
export default function Index() {
  const [theme, setTheme] = useState(themes.dark);
  const changeTheme = () => {
    if (theme.id === themes.light.id) {
      setTheme(themes.dark);
    } else {
      setTheme(themes.light);
    }
  };
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div
        className="Main"
        style={{ background: theme.background, color: theme.foreground }}
      >
        <p className="Text">Theme by useContext</p>
        <p>KELOMPOKXX</p>
        <ThemedButton />
      </div>
    </ThemeContext.Provider>
  );
}
function ThemedButton() {
  const { theme, changeTheme } = useContext(ThemeContext);
  return (
    <button
      className="Button"
      style={{ background: theme.background, color: theme.foreground }}
      onClick={changeTheme}
    >
      i am styled by theme context!
    </button>
  );
}

export const Merk = () => {
  const { setInputContext } = useContext(MerkContext);
  const merk = [
      {
          nama: "Samsung",
          negara: "Korea",
      },
      {
          nama: "Apple",
          negara: "US",
      },
      {
          nama: "Xiaomi",
          negara: "China",
      },
      {
          nama: "Sony",
          negara: "Jepang",
      },
  ];
  const [index, setIndex] = useState(0);
  return (
      <button
          onClick={e => {
              e.preventDefault();
              setInputContext(merk[index].nama + ' ' + merk[index].negara);
              const idx = (index + 1) % merk.length;
              setIndex(idx);
          }}
      >
          Show Merk
      </button>
  );
};
