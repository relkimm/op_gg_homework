export const toKRPositionName = (position: string) => {
  switch (position) {
    case "Top":
      return "탑";
    case "Bottom":
      return "원딜";
    case "Middle":
      return "미드";
    case "Jungle":
      return "정글";
    case "Support":
      return "서폿";
    default:
      return "탑";
  }
};
