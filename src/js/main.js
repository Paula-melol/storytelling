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

timeLineNotification.to(".l-homepage-flash", {
  opacity: 1,
  scale: "1",
});

// animation homepage

gsap.to(".slider-scene5", {
  scrollTrigger: {
    trigger: ".slider-scene5",
    start: "top top",
    end: "+=300%",
    pin: true,
    scrub: true,
    markers: true,
  },
  x: "-75%",
  ease: "sine.inOut",
});
