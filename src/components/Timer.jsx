import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [background, setBackground] = useState('sky');
  const [showTimeInput, setShowTimeInput] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // Background images from Freepik
  const backgrounds = {
    sky: 'url(https://img.freepik.com/free-vector/realistic-blue-sky-background_1048-6707.jpg?t=st=1730657458~exp=1730661058~hmac=7e42ed19a0c959a63aacef59bb2b8f11eb46493634688677e197ae57303bdcc3&w=740)',  // Sky background
    nature: 'url(https://img.freepik.com/free-photo/vertical-shot-river-surrounded-by-mountains-meadows-scotland_181624-27881.jpg?t=st=1730658273~exp=1730661873~hmac=d980cba443b53ea5a78a5daaf2d8d5bdcb7d8ac9ceac4d8055f0a1f43ad7e3c7&w=360)',  // Nature background
    plant: 'url(https://img.freepik.com/free-vector/outdoor-nature-landscape-background_1308-66256.jpg?t=st=1730658093~exp=1730661693~hm)',  // Plant background
  };

  useEffect(() => {
    let timer;
    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    } else if (time === 0) {
      setIsRunning(false);
    }

    return () => clearInterval(timer);
  }, [isRunning, time]);

  const startTimer = (selectedTime) => {
    setTime(selectedTime);
    setIsRunning(true);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
    setShowTimeInput(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  const changeBackground = (bg) => {
    setBackground(bg);
  };

  const handleTimeInput = () => {
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    startTimer(totalSeconds);
    setShowTimeInput(false);
  };

  return (
    <div
      className={`flex flex-col items-center justify-center p-8 bg-opacity-40 rounded-lg shadow-lg`}
      style={{ backgroundImage: backgrounds[background], backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <motion.div
        className={`text-5xl font-bold mb-4 ${background === 'sky' ? 'text-black' : 'text-white'}`}
        animate={{ scale: isRunning ? 1.2 : 1 }}
        transition={{ duration: 0.5 }}
      >
        {String(Math.floor(time / 3600)).padStart(2, '0')}:
        {String(Math.floor((time % 3600) / 60)).padStart(2, '0')}:
        {String(time % 60).padStart(2, '0')}
      </motion.div>

      <div className="mb-4">
        <button
          onClick={() => setShowTimeInput(true)}
          className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition duration-200"
        >
          Set Timer
        </button>
      </div>

      {showTimeInput && (
        <div className="mb-4">
          <div className={`${background === 'sky' ? 'text-black' : 'text-white'} mb-2`}>Please enter the time for the timer:</div>
          <div className="flex space-x-4">
            <div>
              <label className={`${background === 'sky' ? 'text-black' : 'text-white'}`}>Enter hours:</label>
              <input
                type="number"
                value={hours}
                onChange={(e) => setHours(Math.max(0, e.target.value))}
                placeholder="0"
                className="px-4 py-2 border rounded"
              />
            </div>
            <div>
              <label className={`${background === 'sky' ? 'text-black' : 'text-white'}`}>Enter minutes:</label>
              <input
                type="number"
                value={minutes}
                onChange={(e) => setMinutes(Math.max(0, e.target.value))}
                placeholder="0"
                className="px-4 py-2 border rounded"
              />
            </div>
            <div>
              <label className={`${background === 'sky' ? 'text-black' : 'text-white'}`}>Enter seconds:</label>
              <input
                type="number"
                value={seconds}
                onChange={(e) => setSeconds(Math.max(0, e.target.value))}
                placeholder="0"
                className="px-4 py-2 border rounded"
              />
            </div>
          </div>
          <button
            onClick={handleTimeInput}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Start Timer
          </button>
        </div>
      )}

      <div className="space-x-4 mb-4">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200"
        >
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button
          onClick={resetTimer}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
        >
          Reset
        </button>
      </div>

      <div className="space-x-4">
        {Object.keys(backgrounds).map((bg) => (
          <button
            key={bg}
            onClick={() => changeBackground(bg)}
            className={`px-4 py-2 rounded-lg transition duration-200 ${background === bg ? 'bg-gray-700 text-white' : 'bg-gray-300'}`}
          >
            {bg.charAt(0).toUpperCase() + bg.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Timer;
