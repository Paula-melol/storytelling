import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
var timeLineNotification = gsap.timeline({
  scrollTrigger: {
    trigger: ".l-homepage",
    scrub: 1,
    pin: true,
  },
});

timeLineNotification.to(".l-homepage-notification-1", {
  opacity: 1,
  scale: "1",
  duration: 3,
});
timeLineNotification.to(".l-homepage-notification-2", {
  opacity: 1,
  scale: "1",
  duration: 3,
});
timeLineNotification.to(".l-homepage-notification-3", {
  opacity: 1,
  scale: "1",
  duration: 3,
});
timeLineNotification.to(".l-homepage-notification-4", {
  opacity: 1,
  scale: "1",
  duration: 3,
});

timeLineNotification.to(".l-homepage-notification-5", {
  opacity: 1,
  scale: "1",
  duration: 3,
});

timeLineNotification.to(
  ".l-homepage-notification-1, .l-homepage-notification-2, .l-homepage-notification-3,.l-homepage-notification-4,.l-homepage-notification-5",
  {
    opacity: 0,
    scale: "0",
    duration: 1,
  }
);
timeLineNotification.to(".l-homepage-title", {
  opacity: 0,
  scale: "0",
  duration: 1,
});

timeLineNotification.to(".l-homepage-flash-wrapper", {
  opacity: 1,
  scale: "1",
  duration: 2,
});

timeLineNotification.to(".l-homepage-flash-wrapper", {
  opacity: 0,
  scale: "1",
});

// animation homepage

gsap.to(".l-homepage-scene2-bulle1", {
  opacity: 1,
  x: "50%",
  scrollTrigger: {
    trigger: "l-homepage-scene2-background",
    start: "top top",
    start: "-=800",
    scrub: 1,
  },
});

gsap.to(".l-homepage-scene2-bulle2", {
  opacity: 1,
  x: "-50%",
  scrollTrigger: {
    trigger: "l-homepage-scene2-background",
    start: "top top",
    start: "-=800",
    scrub: 1,
  },
});

gsap.to(".l-homepage-scene2-bulle3", {
  opacity: 1,
  y: "100%",
  scrollTrigger: {
    trigger: "l-homepage-scene2-background",
    start: "top top",
    start: "-=800",
    scrub: 1,
  },
});

gsap.to(".l-homepage-scene4-bulle1", {
  opacity: 1,
  y: "200%",
  scrollTrigger: {
    trigger: "l-homepage-scene2-background",
    start: "top top",
    scrub: 1,
  },
});

gsap.to(".l-homepage-scene4-bulle2", {
  opacity: 1,
  y: "250%",
  scrollTrigger: {
    trigger: ".l-homepage-scene4-background",
    start: "top top",
    start: "-=800",
    scrub: 1,
  },
});

gsap.to(".l-homepage-scene4-bulle3", {
  opacity: 1,
  y: "250%",
  scrollTrigger: {
    trigger: ".l-homepage-scene4-background",
    start: "top top",
    start: "-=800",
    scrub: 1,
  },
});

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".l-slider-scene5",
      start: "top top",
      end: "+=300%",
      pin: true,
      scrub: true,
      markers: true,
    },
  })
  .to(".l-slider-scene5", {
    x: "-75%",
    ease: "sine.inOut",
  })
  .to(".l-black-car-scene5", { x: "100%" }, 0);
