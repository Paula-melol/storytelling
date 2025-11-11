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
});
timeLineNotification.to(".l-homepage-notification-2", {
  opacity: 1,
  scale: "1",
});
timeLineNotification.to(".l-homepage-notification-3", {
  opacity: 1,
  scale: "1",
});
timeLineNotification.to(".l-homepage-notification-4", {
  opacity: 1,
  scale: "1",
});

timeLineNotification.to(".l-homepage-notification-5", {
  opacity: 1,
  scale: "1",
});
timeLineNotification.to(".l-homepage-flash", {
  opacity: 1,
  scale: "1",
});

// animation homepage
