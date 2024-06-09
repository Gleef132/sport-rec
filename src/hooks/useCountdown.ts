'use client';

/* eslint-disable */

import React from 'react';

interface useCountdownReturn {
  seconds: number | string;
  setSeconds: React.Dispatch<React.SetStateAction<any>>;
  isStart: boolean;
  setIsStart: React.Dispatch<React.SetStateAction<boolean>>;
}

const useCountdown = (): useCountdownReturn => {
  const [seconds, setSeconds] = React.useState<number | string>(0);
  const [isStart, setIsStart] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (isStart) {
      let interval = setInterval(() => {
        if (seconds && typeof seconds === 'number') {
          setSeconds(seconds - 1);
        } else clearInterval(interval);
      }, 1000);
      if (seconds === 0) {
        setSeconds('');
        setIsStart(false);
      }
      return () => {
        clearInterval(interval);
      };
    } else {
      setSeconds(60);
    }
  });

  return { seconds, setSeconds, isStart, setIsStart };
};

export default useCountdown;
