import React from "react";
import { useParams } from "react-router-dom";
import { DefaultSummonerIcon } from "../../../../shared/constant";
import { SummonerDetailParams } from "../../summonerDetail.params";
import { useFindSummoner } from "../summonerProfile.hook";

export function SummonerIcon() {
  const { username } = useParams<SummonerDetailParams>();
  const { data: summoner } = useFindSummoner(username);

  const onError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = DefaultSummonerIcon();
  };

  return (
    <div className="icon">
      <img src={summoner?.profileImageUrl} onError={onError} />
      <span>{summoner?.level}</span>
    </div>
  );
}
