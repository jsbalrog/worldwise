import { useSearchParams } from "react-router-dom"

export function useUrlPosition() {
  const [searchParams] = useSearchParams()
  return [searchParams.get("lat"), searchParams.get("lng")]
}
