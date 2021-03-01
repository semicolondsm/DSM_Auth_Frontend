import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function getDivTop(name) {
  return document.getElementById(name).getBoundingClientRect().top;
}

function getScroll() {
  return document.documentElement.scrollTop;
}

export const Welcome = () => {
  const self = document.getElementById("welcome");
  self.style.transform = "translate(0, -50%)";
  self.style.opacity = 1;
};

export const HeaderAnimation = () => {
  const pathname = window.location.pathname;
  if (getScroll() >= 100) {
    document.getElementById("header").style.background = "rgba(26, 26, 28, 1)";
  } else {
    document.getElementById("header").style.background = "rgba(26, 26, 28, 0)";
  }
  window.addEventListener("scroll", () => {
    if (pathname !== window.location.pathname) return;
    if (getScroll() >= 100) {
      document.getElementById("header").style.background =
        "rgba(26, 26, 28, 1)";
    } else {
      document.getElementById("header").style.background =
        "rgba(26, 26, 28, 0)";
    }
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

export const SlideShow = () => {
  const pathname = window.location.pathname;
  const self = [...document.getElementsByClassName("aM")];
  let isOn = false;

  window.addEventListener("scroll", () => {
    if (pathname !== window.location.pathname) return;
    if (getScroll() > getDivTop("slidePoint") + 500) {
      isOn = false;
      self.forEach((element, index) => {
        setTimeout(() => {
          if (isOn) return;
          element.style.transform = `translateX(${index * 85}px)`;
          element.style.opacity = 1;
        }, 80 * index);
      });
    } else {
      isOn = true;
      self.forEach((element, index) => {
        element.style.transform = `translateX(${index * 85 - 50}px)`;
        element.style.opacity = 0;
      });
    }
  });
};

export const Count = (max) => {
  const pathname = window.location.pathname;
  const self = document.getElementById("count");
  let number = 0;
  let isPro = false;
  let timer;

  window.addEventListener("scroll", () => {
    if (pathname !== window.location.pathname) return;
    if (getScroll() > getDivTop("count") + 400) {
      if (isPro) return;
      timer = setInterval(() => {
        if (number >= max) clearInterval(timer);
        number += 1;
        self.innerText = number;
      }, 1000 / max);
      isPro = true;
    } else {
      clearInterval(timer);
      isPro = false;
      number = 0;
      self.innerText = 0;
    }
  });
};

export const AutoScroll = () => {
  const pathname = window.location.pathname;
  const self = document.getElementById("scrollWrap");
  let isOn = false;
  let timer;

  function easeOutSine(x) {
    return Math.sqrt(1 - Math.pow(x - 1, 2));
  }

  const scroll = () => {
    let count = 0;
    let prevNum = 0;
    const temp = setInterval(() => {
      if (count >= 100) {
        clearInterval(temp);
        prevNum = 0;
        return;
      }
      const easeNum = easeOutSine(count / 100) * 110;
      const plus = easeNum - prevNum;
      self.scrollTop += plus;
      count += 1;
      prevNum = easeNum;
    }, 1000 / 100);
  };

  const scrollTop = () => {
    let count = 0;
    let prevNum = 0;
    const sh = self.scrollHeight;

    const temp = setInterval(() => {
      if (count >= sh) {
        clearInterval(temp);
        prevNum = 0;
        return;
      }
      const easeNum = easeOutSine(count / sh) * sh;
      const plus = easeNum - prevNum;
      self.scrollTop -= plus;
      count += 1;
      prevNum = easeNum;
    }, 1000 / sh);
  };

  window.addEventListener("scroll", () => {
    if (pathname !== window.location.pathname) return;
    const sh = self.scrollHeight;
    const ch = self.clientHeight;
    if (getScroll() > getDivTop("scrollWrap") + 800) {
      if (isOn) return;
      timer = setInterval(() => {
        if (self.scrollTop + ch === sh) {
          scrollTop();
        } else {
          scroll();
        }
      }, 3500);
      isOn = true;
    } else {
      clearInterval(timer);
      isOn = false;
    }
  });
};

function isInner(name) {
  const self = document.getElementById(name);
  if (document.documentElement.scrollTop >= self.getBoundingClientRect().top) {
    return true;
  } else {
    return false;
  }
}
