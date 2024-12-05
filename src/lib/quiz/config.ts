export const getBaseUrl = (): string => {
  // Check if we're in development
  if (import.meta.env.DEV) {
    return window.location.origin;
  }

  // For GitHub Pages, use the repository name as the base path
  const repoName = import.meta.env.VITE_REPO_NAME;
  return repoName 
    ? `${window.location.origin}/${repoName}`
    : window.location.origin;
};