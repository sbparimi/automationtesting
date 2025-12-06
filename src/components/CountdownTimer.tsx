import { useState, useEffect } from "react";

interface CountdownTimerProps {
  initialMinutes?: number;
  onComplete?: () => void;
}

export const CountdownTimer = ({ initialMinutes = 10, onComplete }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(() => {
    // Check localStorage for existing timer
    const saved = localStorage.getItem('qaforge_countdown');
    if (saved) {
      const { expiry } = JSON.parse(saved);
      const remaining = Math.max(0, Math.floor((expiry - Date.now()) / 1000));
      if (remaining > 0) return remaining;
    }
    // Set new timer
    const seconds = initialMinutes * 60;
    localStorage.setItem('qaforge_countdown', JSON.stringify({
      expiry: Date.now() + seconds * 1000
    }));
    return seconds;
  });

  useEffect(() => {
    if (timeLeft <= 0) {
      onComplete?.();
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, onComplete]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <span className="font-mono font-bold animate-countdown">
      {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
    </span>
  );
};
