import "./styles.css";
import React from "react";

export default function App() {
  const [time, settime] = React.useState(0);
  const [timeron, settimeron] = React.useState(false);

  React.useEffect(() => {
    let interval = null;
    if (timeron) {
      interval = setInterval(() => {
        settime((prev) => prev + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timeron]);

  return (
    <div className="App">
      <div>
        <span>{Math.floor(time / 60000) % 60} : </span>
        <span>{Math.floor(time / 1000) % 60} : </span>
        <span>{(time / 10) % 100} </span>
      </div>
      <div>
        {!timeron && time === 0 && (
          <button onClick={() => settimeron(true)}>Start</button>
        )}

        {timeron && <button onClick={() => settimeron(false)}>Stop</button>}

        {!timeron && time !== 0 && (
          <button onClick={() => settimeron(true)}>Resume</button>
        )}

        {!timeron && time > 0 && (
          <button onClick={() => settime(0)}>Reset</button>
        )}
      </div>
    </div>
  );
}
