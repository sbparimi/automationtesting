import { useCallback } from 'react';
import { useAuth } from './useAuth';

// All content is now FREE - no premium restrictions
export function useSubscription() {
  const { user, loading } = useAuth();

  // Always return true - all content is free
  const isPremium = useCallback(() => {
    return true;
  }, []);

  // All lessons are free
  const isLessonFree = useCallback(() => {
    return true;
  }, []);

  // Always grant access - no modal needed
  const checkAccess = useCallback((): boolean => {
    return true;
  }, []);

  return {
    isPremium,
    isLessonFree,
    checkAccess,
    showUpgradeModal: false,
    setShowUpgradeModal: () => {},
    triggerSource: '',
    user,
    loading,
  };
}
