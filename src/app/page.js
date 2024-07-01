"use client";

const WorkoutTimer = () => {
  return (
    <div className="w-[500px] mt-60 mx-auto border border-gray-100 p-5">
      <h2 className="text-3xl font-semibold text-center">Workout Timer</h2>
      <div className="flex pt-4 items-center text-3xl justify-center">
        <h2>00</h2> :<h2>00</h2> :<h2>00</h2>
      </div>
      <div className="flex items-center justify-center pt-4 gap-x-4">
        <button className="border border-gray-200 px-5 py-2">▶️ Start</button>
        <button className="border border-gray-200 px-5 py-2">⏸️ Pause</button>
        <button className="border border-gray-200 px-5 py-2">🔄 Reset</button>
      </div>
    </div>
  );
};

export default WorkoutTimer;
