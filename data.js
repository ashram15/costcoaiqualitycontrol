export const flaggedProducts = [
  { id: "p1", name: "Apple", image: require("./assets/apple.png") },
  { id: "p2", name: "Avocado", image: require("./assets/avocado.png") },
  { id: "p3", name: "Organic Spinach", image: require("./assets/organicspinach.png") },
];

export const scanHistory = [
  {
    id: "s1",
    productName: "Organic Spinach",
    timestamp: "Apr 14, 2026 - 9:20 AM",
    score: 28,
    status: "Critical",
    bestByDate: "Apr 16, 2026",
    problems: "Wilting leaves, moisture build-up",
  },
  {
    id: "s2",
    productName: "Costco Butter",
    timestamp: "Apr 13, 2026 - 5:40 PM",
    score: 88,
    status: "Good",
    bestByDate: "May 10, 2026",
    problems: "No major concerns",
  },
  {
    id: "s3",
    productName: "Frozen Berries",
    timestamp: "Apr 12, 2026 - 11:03 AM",
    score: 91,
    status: "Excellent",
    bestByDate: "Aug 07, 2026",
    problems: "No major concerns",
  },
];
