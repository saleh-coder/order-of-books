import { error } from "@sveltejs/kit";
import series from "../../../constant/series.js";

export function load({ params }) {
  const serie = series.find((s) => s.id === params.id);
  if (!serie) throw error(404, "Serie not found");
  return { serie };
}
