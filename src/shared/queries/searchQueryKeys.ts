export const searchQueryKeys = {
  searchAutoComplete: (keyword: string) =>
    ["searchAutoComplete", keyword] as const,
} as const;
