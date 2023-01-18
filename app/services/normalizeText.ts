const normalizeText = (text) => {
  const searchNorm = text?.normalize("NFD").replace(/\p{Diacritic}/gu, "");
  return new RegExp(searchNorm, "i");
};

export default normalizeText;
