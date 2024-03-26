import AOS from "aos";

export function aosInit(disable = false) {
  AOS.init({
    disable,
  });
}
