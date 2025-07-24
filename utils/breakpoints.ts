export const isMobile = (userAgent: string | null): boolean =>{
  if (!userAgent) return false;
  return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|Opera Mini|iemobile|WPDesktop/i.test(userAgent);
}