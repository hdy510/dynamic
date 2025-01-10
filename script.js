// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".conMain-products",
      start: "top top",
      end: "3000 bottom",
      scrub: 2,
      markers: true,
    },
  });
  tl.to(".conMain-products", {
    scale: 1,
    opacity: 1,
    filter: "blur(0px)",
  })
    // .to(".conMain-ellipseBox", {
    //   width: "200vw",
    //   height: "200vh"
    // })
    .to(".conMain-ellipseBox2", {
      width: "170vw",
      height: "170vh",
    })
    .to(".conMain-text.beMore", {
      right: 60,
    }, "<")
    .to(".conMain-text.dynamic", {
      left: 60,
    }, "<")
    .to(".conMain-ellipseBox2", {
      transform: "translate(-50%, -50%) rotate(0)"
    });

  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".conMain-text",
      start: "5000 top",
      end: "7000 bottom",
      scrub: 2,
      markers: true,
    },
  });
  tl2
    .to(".conMain-text.beMore", {
     right: "-100vw"
    })
    .to(".conMain-text.dynamic", {
      left: "-100vw",
    }, "<")
    .fromTo(".conMain-ellipseBox2", {
        height: "170vh",
    }, {
        height: 0,
        transform: "translate(-50%, 0%) rotate(-15deg)"
    }, "<")
    .to(".conMain-products", {
      filter: "blur(10px)",
      transform: "translate(-50%, -65%) scale(1)",
      opacity: 0,
    }, "<70%")

  const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".conMain-products2",
      start: "7000 top",
      end: "12000 bottom",
      scrub: 2,
      markers: true,
    },
  });
  tl3.to(".conMain-products2", {
    opacity: 1,
  })
  .to(".conMain-text2", {
    opacity: 1,
  })
  .to(".conMain-text2", {
    opacity: 0,
  })
  .to(".conMain-text3", {
    opacity: 1,
  })
  .to(".conMain-text4", {
    opacity: 1,
  })
  .to(".conMain-text3", {
    opacity: 0,
  })
  .to(".conMain-text4", {
    opacity: 0,
  })
  .to(".conMain-products2", {
    opacity: 0,
  })
  .to(".conMain-products3", {
    opacity: 1,
  })
  .to(".conMain-text5", {
    opacity: 1,
  })
  .to(".conMain-text6", {
    opacity: 1,
  })
  .to(".conMain-text5", {
    opacity: 0,
  })
  .to(".conMain-text6", {
    opacity: 0,
  })
  .to(".conMain-products3", {
    opacity: 0,
  })

  const tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".conQuality-bestQuality",
      start: "13000 top",
      end: "13500 bottom",
      scrub: 2,
      markers: true,
    },
  });
  tl4.to(".conQuality-bestQuality", {
    opacity: 1,
    top: "20%",
    transform: "translate(-50%, -50%) scale(0.2)",
  })
  .to(".conQuality-bestQuality .afterimage", {
    opacity: 0,
    transform: "scale(1)",
  })
















});
