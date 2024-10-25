export default function StarRating({ rating }) {
  return (
    <div className="flex space-x-1 text-3xl font-semibold">
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <span
            key={index}
            className={index < rating ? "text-yellow-400" : "text-gray-300"}
          >
            {index < rating ? "★" : "☆"}
          </span>
        ))}
    </div>
  );
}
