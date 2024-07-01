"use client";

import { useEffect, useState } from "react";

const WorkoutTimer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const hours = Math.floor(minutes / 60);
    return (
      <div className="flex pt-4 items-center text-3xl justify-center">
        <h2>{hours.toString().padStart(2, "0")}</h2> :
        <h2>{minutes.toString().padStart(2, "0")}</h2> :
        <h2>{remainingSeconds.toString().padStart(2, "0")}</h2>
      </div>
    );
  };

  return (
    <div className="w-[500px] mt-60 mx-auto border border-gray-100 p-5">
      <h2 className="text-3xl font-semibold text-center">Workout Timer</h2>
      {formatTime(time)}
      <div className="flex items-center justify-center pt-4 gap-x-4">
        <button
          className="border border-gray-200 px-5 py-2"
          onClick={startTimer}
          disabled={isRunning}
        >
          ▶️ Start
        </button>
        <button
          className="border border-gray-200 px-5 py-2"
          onClick={pauseTimer}
          disabled={!isRunning}
        >
          ⏸️ Pause
        </button>
        <button
          className="border border-gray-200 px-5 py-2"
          onClick={resetTimer}
        >
          🔄 Reset
        </button>
      </div>
    </div>
  );
};

export default WorkoutTimer;
