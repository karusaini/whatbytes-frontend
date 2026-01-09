import { Star } from "lucide-react";

type StarRatingProps = {
  rating: number; // e.g. 4.2
};

export default function StarRating({ rating }: StarRatingProps) {
  const fullStars = Math.floor(rating);

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= fullStars
              ? "fill-yellow-500 text-yellow-500"
              : "text-gray-300"
          }`}
        />
      ))}
      <span className="text-sm text-gray-600 ml-1">{rating}</span>
    </div>
  );
}
