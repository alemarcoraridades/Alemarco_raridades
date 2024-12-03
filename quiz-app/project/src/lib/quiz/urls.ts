export const getQuizShareUrl = (quizId: string): string => {
  const baseUrl = window.location.origin;
  return `${baseUrl}/quiz/${quizId}`;
};

export const getQuizPreviewUrl = (quizId: string): string => {
  return `/quiz/${quizId}/preview`;
};