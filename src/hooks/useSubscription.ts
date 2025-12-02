import { useState, useCallback } from 'react';

const FREE_LESSONS_PER_COURSE = 5;

export function useSubscription() {
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [triggerSource, setTriggerSource] = useState<string>('');

  // Check if user has premium (stored in localStorage for demo)
  const isPremium = useCallback(() => {
    return localStorage.getItem('qaforge_premium') === 'true';
  }, []);

  // Check if a specific lesson is free
  const isLessonFree = useCallback((lessonId: string, lessonIndex: number, isFreeMarked?: boolean) => {
    // If explicitly marked as free, it's free
    if (isFreeMarked) return true;
    
    // First 5 lessons of each course are free
    return lessonIndex < FREE_LESSONS_PER_COURSE;
  }, []);

  // Check access and show modal if needed
  const checkAccess = useCallback((lessonTitle: string, lessonIndex: number, isFreeMarked?: boolean): boolean => {
    if (isPremium()) return true;
    if (isLessonFree('', lessonIndex, isFreeMarked)) return true;
    
    setTriggerSource(lessonTitle);
    setShowUpgradeModal(true);
    return false;
  }, [isPremium, isLessonFree]);

  // For demo: set premium status
  const setPremium = useCallback((status: boolean) => {
    localStorage.setItem('qaforge_premium', status.toString());
  }, []);

  return {
    isPremium,
    isLessonFree,
    checkAccess,
    setPremium,
    showUpgradeModal,
    setShowUpgradeModal,
    triggerSource,
  };
}
