import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const useGoPush = () => {
  const navigate = useNavigate();
  return useCallback(
    (url: string, state?: any) => navigate(url, { state }),
    [navigate]
  );
};
