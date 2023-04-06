import { useRouter } from "next/router";
const Review = () => {
  const router = useRouter();
  const { reviewId, productId } = router.query;
  return (
    <div>
      <h3>
        Review id is {reviewId} and ProductId is {productId}
      </h3>
    </div>
  );
};
export default Review;
