import { useEffect, useRef, useState } from "react";

export default function useCounter({ start, duration }: { start?: boolean; duration: number }) {
  const [time, setTime] = useState(duration);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (start === true) {
      timer.current = setInterval(() => {
        setTime((p) => {
          if (p === 1) {
            return 0;
          }
          return p - 1;
        });
      }, 1000);
    }

    return () => {
      if (timer.current) {
        clearInterval(timer.current);
      }
    };
  }, [start]);

  useEffect(() => {
    if (time === 0 && timer.current) {
      clearInterval(timer.current);
    }
  }, [time]);

  const restart = () => {
    setTime(duration);
  };

  return { time, restart };
}
