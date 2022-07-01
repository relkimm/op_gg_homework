interface TierItemProps {
  season: number;
  tier: string;
}

export function TierItem({ season, tier }: TierItemProps) {
  return (
    <li>
      <span>
        <b>S{season}</b> {tier}
      </span>
    </li>
  );
}
