// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  // 1. 1스크롤에 블러 제품 이미지 확대
  const tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".conMain-products",
      start: "0 top",
      end: "600 bottom",
      scrub: 2,
      markers: true,
    },
  });
  tl1.to(".conMain-products", {
    scale: 1,
    opacity: 1,
    filter: "blur(0px)",
  })
  
  // 2. 1스크롤에 핑크타원, be more, dynamic 텍스트 등장 
  const tl1a = gsap.timeline({
    scrollTrigger: {
      trigger: ".conMain-products",
      start: "600 top",
      end: "1200 bottom",
      scrub: 2,
      markers: true,
    },
  });
  tl1a.set(".conMain-ellipseBox", {
    borderRadius: "50%",
    rotate: "-15deg",
    width: "10vw",
    height: "5vw",
  })
  .to(".conMain-ellipseBox", {
    width: "180vw",
    height: "180vh",
    opacity: 1,
  })
  .to(".conMain-text.beMore", {
    right: "8vw",
  }, "<")
  .to(".conMain-text.dynamic", {
    left: "8vw",
  }, "<")

  // 3. 1스크롤에 be more, dynamic 텍스트 사라짐, 핑크 납작해짐, 기기 사라짐
  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".conMain-text",
      start: "1600 top",
      end: "5400 bottom",
      scrub: 2,
      markers: true,
    },
  });
  tl2.fromTo(".conMain-ellipseBox", 
    {
      width: "180vw",
      height: "180vh",
      borderRadius: "50%",
      rotate: "-15deg"
    }, 
    {
      borderRadius: 0,
      rotate: 0,
      width: "100vw",
      height: "100vh"
    }
  )
  .to(".conMain-ellipseBox", {
    scaleY: 0
  })
  .to(".conMain-text.beMore", {
    right: "-100vw"
  }, "<20%")
  .to(".conMain-text.dynamic", {
    left: "-100vw",
  }, "<")
  .to(".conMain-products", {
    y: -100,
    opacity: 0,
  }, "<50%")
  .fromTo(".conMain-products2", {
    y: 70,
    opacity: 0,
  }, {
    y: 0,
    opacity: 1,
  }, "<50%")
    
    
  // 4. conMain-products2 제품 설명 텍스트 등장
  var puffCounter = { var: 0 };
  var count = document.getElementById('count');
  const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".conMain-products2",
      start: "5400 top",
      end: "8400 bottom",
      scrub: 2,
      markers: true,
    },
  });
  tl3.fromTo(".conMain-text2", {
    x: -100,
    opacity: 0,
  }, {
    x: 0,
    opacity: 1,
  })
  .fromTo(".conMain-text3", {
    x: 100,
    opacity: 0,
  }, {
    x: 0,
    opacity: 1,
  })
  .to(puffCounter, {
    var: 5000,
    duration: 2,
    onUpdate: function() {
      count.innerHTML = Math.ceil(puffCounter.var);
    },})
  .fromTo(".conMain-text4", {
    x: 100,
    opacity: 0,
  }, {
    x: 0,
    opacity: 1,
  })

  // 5. 이전 텍스트 사라지고 새로운 설명 텍스트 등장
  const tl3a = gsap.timeline({
    scrollTrigger: {
      trigger: ".conMain-products2",
      start: "8400 top",
      end: "11400 bottom",
      scrub: 2,
      markers: true,
    },
  });
  tl3a.to(".conMain-text2", {
    x: -100,
    opacity: 0,
  })
  .to(".conMain-text3", {
    x: 100,
    opacity: 0,
  })
  .to(".conMain-text4", {
    x: 100,
    opacity: 0,
  })
  .to(".conMain-products2", {
    opacity: 0,
  })
  .to(".conMain-products3", {
    opacity: 1,
  })
  .fromTo(".conMain-text5", {
    x: -100,
    opacity: 0,
  }, {
    x: 0,
    opacity: 1,
  })
  .fromTo(".conMain-text6", {
    x: 100,
    opacity: 0,
  }, {
    x: 0,
    opacity: 1,
  })

  // .to(".conMain-text6", {
  //   opacity: 1,
  // })
  // .to(".conMain-text5", {
  //   opacity: 0,
  // })
  // .to(".conMain-text6", {
  //   opacity: 0,
  // })
  // .to(".conMain-products3", {
  //   opacity: 0,
  // })

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
  // .to(".conQuality-bestQuality .afterimage", {
  //   opacity: 0,
  //   transform: "scale(1)",
  // })
  .to(".conQuality-bg", {
    backgroundColor: "#FF560E",
  }, "<90%")

  const tl5 = gsap.timeline({
    scrollTrigger: {
      trigger: ".conQuality-text1",
      start: "13500 top",
      end: "15000 bottom",
      scrub: 2,
      markers: true,
    },
  });
  tl5.to(".conQuality-text1 .detail.index0", {
    opacity: 1,
  })
  .to(".conQuality-text1 .detail.index1", {
    opacity: 1,
  })
  .to(".conQuality-text1 .detail.index0", {
    opacity: 0,
  })
  .to(".conQuality-text1 .detail.index1", {
    opacity: 0,
  })

  const tl6 = gsap.timeline({
    scrollTrigger: {
      trigger: ".conQuality-text2",
      start: "17000 top",
      end: "18500 bottom",
      scrub: 2,
      markers: true,
    },
  });
  tl6.to(".conQuality-bg", {
    backgroundColor: "#720EFF",
  }, "<90%")
  .to(".conQuality-bestQuality", {
    opacity: 0,
  })
  .to(".conQuality-text2 img", {
    opacity: 1,
  })
  .to(".conQuality-text2 .detail", {
    opacity: 1,
  })
  .to(".conQuality-text2 img", {
    opacity: 0,
  })
  .to(".conQuality-text2 .detail", {
    opacity: 0,
  })

  const tl7 = gsap.timeline({
    scrollTrigger: {
      trigger: ".conQuality-text3",
      start: "20500 top",
      end: "22000 bottom",
      scrub: 2,
      markers: true,
    },
  });
  tl7.to(".conQuality-bg", {
    backgroundColor: "#0E6EFF",
  }, "<90%")
  .to(".conQuality-text3 .detail.index0", {
    opacity: 1,
  })
  .to(".conQuality-text3 .detail.index1", {
    opacity: 1,
  })
  .to(".conQuality-text3 .detail.index0", {
    opacity: 0,
  })
  .to(".conQuality-text3 .detail.index1", {
    opacity: 0,
  })

  const tl8 = gsap.timeline({
    scrollTrigger: {
      trigger: ".conQuality-text4",
      start: "24000 top",
      end: "25500 bottom",
      scrub: 2,
      markers: true,
    },
  });
  tl8.to(".conQuality-text4 .imgBox img", {
    opacity: 1,
    stagger: 1,
  })
  .to(".conQuality-text4 .detail", {
    opacity: 1,
  })

  const tl9 = gsap.timeline({
    scrollTrigger: {
      trigger: ".conQuality-experts",
      start: "25500 top",
      end: "28000 bottom",
      scrub: 2,
      markers: true,
    },
  });
  tl9.set(".conQuality-bg", {
    transformOrigin:"center center"
  })
  tl9.to(".conQuality-text4", {
    opacity: 0,
  })
  .to(".conQuality-bg", {
    borderRadius: "50%",
    width: 150,
    height: 150,
  })
  .to(".conQuality-bg", {
    x: "-400",
  })
  .to(".conQuality-experts-text .detail.index0", {
    opacity: 1,
    x: "150",
  })
  .to(".conQuality-experts-text .detail.index1", {
    opacity: 1,
    x: "150",
  })
  .to(".conQuality-bg", {
    opacity: 0,
    x: "-500",
  })
  .to(".conQuality-experts", {
    opacity: 0,
    x: "-500",
  }, "<")

  const tl10 = gsap.timeline({
    scrollTrigger: {
      trigger: ".conFlavor",
      start: "28500 top",
      end: "29000 bottom",
      scrub: 2,
      markers: true,
    },
  });
  tl10.to(".conFlavor", {
    opacity: 1,
  })
  .to(".conFlavor-description", {
    x: 200,
  }, "<")
  .to(".conFlavor-imgs", {
    x: -200,
  }, "<")
  .from(".conFlavor-title", {
    y: -50,
    opacity: 0,
  }, "<")

  const tl11 = gsap.timeline({
    scrollTrigger: {
      trigger: ".conFlavor",
      start: "30500 top",
      end: "31000 bottom",
      scrub: 2,
      markers: true,
    },
  });
  tl11.to(".conFlavor", {
    opacity: 1,
  })
  .to(".conFlavor-description", {
    x: -200,
    opacity: 0,
  }, "<")
  .to(".conFlavor-imgs", {
    x: 200,
    opacity: 0,
  }, "<")
  .to(".conFlavor-title", {
    y: -50,
    opacity: 0,
  }, "<")

  const tl12 = gsap.timeline({
    scrollTrigger: {
      trigger: ".conAboutUs",
      start: "32000 top",
      end: "38000 bottom",
      scrub: 2,
      markers: true,
    },
  });
  tl12.to(".conAboutUs", {
    opacity: 1,
  })
  .to(".conAboutUs-title", {
    opacity: 1,
  })
  .to(".conAboutUs-descriptionBox img", {
    opacity: 1,
  })
  .to(".conAboutUs-descriptionBox .introduce", {
    opacity: 1,
  })
  .to(".conAboutUs-descriptionBox .promise", {
    opacity: 1,
  })
  .to(".conAboutUs-descriptionBox button", {
    opacity: 1,
  })












  // swiper 설정
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 4,
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  });




});
