import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("http://localhost:3030/scoops", () => {
    // Note that you DONT'T have to stringify the json body. msw handles that for you
    return HttpResponse.json([
      { name: "Chocolate", imagePath: "/images/chocolate-scoop.png" },
      { name: "Vanilla", imagePath: "/images/vanilla-scoop.png" },
    ]);
  }),

  http.get("http://localhost:3030/toppings", () => {
    return HttpResponse.json([
      { name: "Cherries", imagePath: "/images/cherries.png" },
      { name: "M&Ms", imagePath: "/images/m-and-ms.png" },
      { name: "Hot fudge", imagePath: "/images/hot-fudge.png" },
    ]);
  }),
];
