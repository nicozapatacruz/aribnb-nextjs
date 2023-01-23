const normalizeText = (text) => {
  const searchNorm = text?.normalize("NFD").replace(/\p{Diacritic}/gu, "");
  return searchNorm.toLowerCase();
};

export default normalizeText;
