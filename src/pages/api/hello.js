// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    movies: [
      {
        name: "Mulan",
        quote:
          "The flower that blooms in adversity is the most rare and beautiful of all.",
      },
      {
        name: "The Lion King",
        quote:
          "The past can hurt. But the way I see it, you can either run from it or learn from it.",
      },
      {
        name: "Saving Mr. Banks",
        quote:
          "Disappointments are to the soul what thunderstorms are to the air.",
      },
    ],
  });
}
