import { useState } from 'react';


export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace = false) => {

    if (!replace) {
      setHistory([...history, newMode]);
    }
    setMode(newMode);
  };
   
  const back = () => {
    
    if (history.length > 1) {
      history.pop();
    }
    const previous = history.slice(-1)[0];
    setMode(previous);
  };

  return { mode, transition, back, history };

}
