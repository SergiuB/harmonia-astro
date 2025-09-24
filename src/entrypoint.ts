import type { Alpine } from "alpinejs";
// @ts-ignore
import collapse from "@alpinejs/collapse";

export default (Alpine: Alpine) => {
  Alpine.plugin(collapse);
};
