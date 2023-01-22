const normalizeText = (text: string) => {
  const searchNorm: string = text?.normalize("NFD").replace(/\p{Diacritic}/gu, "");
  return searchNorm.toLowerCase();
};

export default normalizeText;
