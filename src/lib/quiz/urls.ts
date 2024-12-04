export const getQuizShareUrl = (quizId: string): string => {
  const baseUrl = window.location.origin + '/Alemarco_raridades';// Adiciona o subdiretorio
  return `${baseUrl}/quiz/${quizId}`;
};

export const getQuizPreviewUrl = (quizId: string): string => {
  return `/Alemarco_raridades/quiz/${quizId}/preview`; // Ajuste para subdiretorio
};
