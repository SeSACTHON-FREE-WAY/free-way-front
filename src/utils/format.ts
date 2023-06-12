export const titleEclipse = (title: string) => {
  if (title.length > 6) {
    return [...title].splice(0, 6).join('') + '...';
  }
  return title;
};
