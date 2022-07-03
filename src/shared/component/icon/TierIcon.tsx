import "./tierIcon.css";

interface TierIconProps {
  size: "sm" | "md" | "lg";
  imageUrl: string;
}

export function TierIcon({ size, imageUrl }: TierIconProps) {
  return (
    <div className={`tier-icon-${size}`}>
      <img src={imageUrl} alt="tierIcon" />
    </div>
  );
}
