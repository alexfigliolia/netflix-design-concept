import "./styles.scss";

export const ContentRating = ({ voteAverage }: Props) => {
  return (
    <div className="content-rating">
      <span>Rating</span>
      <div>
        <strong>
          {voteAverage.toFixed(1)} <span>/ 10</span>
        </strong>
      </div>
    </div>
  );
};

interface Props {
  voteAverage: number;
}
