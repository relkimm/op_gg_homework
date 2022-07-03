export const kdaRateStyle = (kdaRate: number) => {
  if (kdaRate >= 3.0) {
    return {
      color: "#2daf7f",
    };
  } else if (kdaRate >= 4.0) {
    return {
      color: "#1f8ecd",
    };
  } else if (kdaRate >= 5.0) {
    return {
      color: " #e19205",
    };
  }
  return {};
};

export const winRateStyle = (winRate: number) => {
  if (winRate >= 60) {
    return {
      color: "#c6443e",
    };
  }
  return {};
};

export const totalRateStyle = (totalRate: number) => {
  if (totalRate >= 6.0) {
    return {
      color: "#e19205",
    };
  }
  return {};
};
