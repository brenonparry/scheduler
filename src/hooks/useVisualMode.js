import { useState } from 'react';


export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace = false) => {

    if (!replace) {
      setMode(newMode);
      setHistory([...history, newMode]);
    } else {
      setMode(newMode);
      setHistory([...history.slice(0, -1), newMode]);
    };

  };

  const back = () => {

    if (history.length > 1) {
      setHistory(history.slice(0, -1));
      setMode(history[history.length - 2]);
    };
  };

  return { mode, transition, back, history };

};
