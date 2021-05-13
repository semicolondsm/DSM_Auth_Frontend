function getDivTop(name) {
    if (document.getElementById(name) == null) return;
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
        document.getElementById("header").style.background =
            "rgba(26, 26, 28, 1)";
    } else {
        document.getElementById("header").style.background =
            "rgba(26, 26, 28, 0)";
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
    if (getScroll() > getDivTop("count") + 400) {
        timer = setInterval(() => {
            number += 1;
            self.innerText = number;
            if (number >= max) clearInterval(timer);
        }, 1000 / max);
        isPro = true;
    }
    window.addEventListener("scroll", () => {
        if (pathname != window.location.pathname) return;
        if (getScroll() > getDivTop("count") + 400) {
            if (isPro) return;
            timer = setInterval(() => {
                number += 1;
                self.innerText = number;
                if (number >= max) clearInterval(timer);
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
    let scTop;
    let sc;
    let isKey = false;

    function easeOutSine(x) {
        return Math.sqrt(1 - Math.pow(x - 1, 2));
    }

    const scroll = () => {
        let count = 0;
        let prevNum = 0;
        sc = setInterval(() => {
            if (count >= 100) {
                clearInterval(sc);
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
        scTop = setInterval(() => {
            if (count >= sh) {
                clearInterval(scTop);
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

    if (getScroll() > getDivTop("scrollWrap") + 800) {
        const sh = self.scrollHeight;
        const ch = self.clientHeight;
        timer = setInterval(() => {
            if (self.scrollTop + ch === sh) {
                scrollTop();
            } else {
                scroll();
            }
        }, 4000);
        isOn = true;
    }
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
            }, 4000);
            isOn = true;
        } else {
            clearInterval(timer);
            isOn = false;
        }
    });

    self.addEventListener("scroll", () => {
        clearInterval(timer);
        const sh = self.scrollHeight;
        const ch = self.clientHeight;
        timer = setInterval(() => {
            if (self.scrollTop + ch === sh) {
                scrollTop();
            } else {
                scroll();
            }
        }, 4000);
    });

    self.addEventListener("mousedown", () => {
        clearInterval(sc);
        clearInterval(scTop);
        clearInterval(timer);
        isKey = true;
    });

    window.addEventListener("mouseup", () => {
        if (!isKey) return;
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
            }, 4000);
            isOn = true;
        }
        isKey = false;
    });
};
