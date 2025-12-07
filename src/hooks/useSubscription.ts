import { useState, useCallback } from 'react';
import { useAuth } from './useAuth';

const FREE_LESSONS_PER_COURSE = 5;

export function useSubscription() {
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [triggerSource, setTriggerSource] = useState<string>('');
  const { isPremium: isPremiumFromAuth, user, loading } = useAuth();

  // Check if user has premium (from server-side auth)
  const isPremium = useCallback(() => {
    return isPremiumFromAuth;
  }, [isPremiumFromAuth]);

  // Check if a specific lesson is free
  const isLessonFree = useCallback((lessonId: string, lessonIndex: number, isFreeMarked?: boolean) => {
    // If explicitly marked as free, it's free
    if (isFreeMarked) return true;
    
    // First 5 lessons of each course are free
    return lessonIndex < FREE_LESSONS_PER_COURSE;
  }, []);

  // Check access and show modal if needed
  const checkAccess = useCallback((lessonTitle: string, lessonIndex: number, isFreeMarked?: boolean): boolean => {
    // If user is premium, always grant access
    if (isPremiumFromAuth) return true;
    
    // If lesson is free, grant access
    if (isLessonFree('', lessonIndex, isFreeMarked)) return true;
    
    // Show upgrade modal
    setTriggerSource(lessonTitle);
    setShowUpgradeModal(true);
    return false;
  }, [isPremiumFromAuth, isLessonFree]);

  return {
    isPremium,
    isLessonFree,
    checkAccess,
    showUpgradeModal,
    setShowUpgradeModal,
    triggerSource,
    user,
    loading,
  };
}
