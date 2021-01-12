import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const HeaderAnimation = () => {
  const asd = gsap.timeline();

  asd.to("#header", { background: "rgba(26, 26, 28, 1)", duration: 0.1 });

  ScrollTrigger.create({
    animation: asd,
    trigger: ".headerPoint",
    start: "-=80",
    end: "top top",
    toggleActions: "play play play reverse",
  });
};

export const FirstAnimation = () => {
  const asd = gsap.timeline();

  asd
    .from("#first", { x: -50, opacity: 0 })
    .to("#first", { x: 0, opacity: 1, duration: 0.2 });

  ScrollTrigger.create({
    animation: asd,
    trigger: "#first",
    start: "-=500",
    end: "+=200",
    toggleActions: "play complete pause reset",
  });
};

export const Show = (name) => {
  const asd = gsap.timeline();

  asd
    .from(name, { opacity: 0, x: -80, duration: 1 })
    .to(name, { x: 0, opacity: 1, duration: 1 });
};
