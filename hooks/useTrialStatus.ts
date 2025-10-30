export function useTrialStatus() {
  return {
    isInTrial: true,
    trialDaysLeft: 2,
    trialEndDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)
  };
}