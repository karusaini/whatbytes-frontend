import StarRating from "@/components/common/StarRating";

const reviews = [
  {
    name: "Rahul",
    rating: 5,
    comment: "Amazing product! Totally worth the price.",
  },
  {
    name: "Priya",
    rating: 4,
    comment: "Good quality but delivery was a bit late.",
  },
];

export default function Reviews() {
  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>

      <div className="space-y-4">
        {reviews.map((review, index) => (
          <div key={index} className="border rounded-lg p-4 bg-white">
            <div className="flex items-center justify-between mb-2">
              <p className="font-medium">{review.name}</p>
              <StarRating rating={review.rating} />
            </div>
            <p className="text-gray-600 text-sm">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
