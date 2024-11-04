export const saveGameResult = (level, playTime) => {
  const results = JSON.parse(localStorage.getItem("gameResults") || "[]");
  const newResult = {
    date: new Date().toISOString(), // 현재 시각 저장
    level,
    playTime,
  };

  results.push(newResult);

  // 데이터 정렬
  results.sort((a, b) => {
    // level 내림차순
    if (a.level === b.level) {
      return a.playTime - b.playTime;
    }

    // playTime 오름차순
    return b.level - a.level;
  });

  // 로컬 스토리지에 저장
  localStorage.setItem("gameResults", JSON.stringify(results));
  console.log(results);
};

export const getGameResults = () => {
  return JSON.parse(localStorage.getItem("gameResults") || "[]");
};

export const resetGameResults = () => {
  localStorage.setItem("gameResults", JSON.stringify([]));
};
