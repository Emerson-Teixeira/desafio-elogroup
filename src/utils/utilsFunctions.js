export function getColor(status) {
  switch (status) {
    case "0":
      return "hsl(0, 100%, 43%)";
    case "1":
      return "hsl(62, 100%, 43%)";
    case "2":
      return "hsl(118, 100%, 43%)";
    default:
      return "hsl(0, 0%, 0%)";
  }
}
