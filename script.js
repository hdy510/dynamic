// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.clearScrollMemory();
    // 페이지 새로고침 후에도 스크롤을 맨 위로 초기화
    window.addEventListener("beforeunload", () => {
      ScrollTrigger.clearScrollMemory();
      window.scrollTo(0, 0); // 스크롤 맨 위로 이동
    });

    window.addEventListener("scroll", () => {
        const sc = window.scrollY;
        console.log(sc);
           // 0. scrollDown 스크롤탑 50 이하에서만 보이기
        if (sc > 10) {
            document.querySelector(".scrollDown").style.visibility = "hidden";
            document.querySelector(".scrollDown").style.opacity = "0";
        } else {
            document.querySelector(".scrollDown").style.visibility = "visible";
            document.querySelector(".scrollDown").style.opacity = "1";
        }
    });




    // [반응형 설정]
    const mediaQueryTablet = window.matchMedia("(max-width: 768px)");
    const mediaQueryMobile = window.matchMedia("(max-width: 450px)");
    mediaQueryTablet.addEventListener("change", () => {
    if (mediaQueryTablet.matches) {
        // 화면이 768px 이하일 때 애니메이션을 적용
        gsap.to(".my-element", {
        opacity: 0,
        scrollTrigger: {
            ...scrollTriggerSettings
        }
        });
    } else {
        // 화면이 768px보다 클 때 애니메이션을 적용
        gsap.to(".my-element", {
        opacity: 1,
        scrollTrigger: {
            ...scrollTriggerSettings
        }
        });
    }
    });
    
    // 초기 브레이크포인트 설정
    if (mediaQueryTablet.matches) {
    gsap.to(".my-element", {
        opacity: 0,
        scrollTrigger: {
        ...scrollTriggerSettings
        }
    });
    } else {
    gsap.to(".my-element", {
        opacity: 1,
        scrollTrigger: {
        ...scrollTriggerSettings
        }
    });
    }





    // 1. 1스크롤에 블러 제품 이미지 확대
    const tl1 = gsap.timeline({
        scrollTrigger: {
            trigger: '.conMain-products',
            start: '0 top',
            end: '600 bottom',
            scrub: 1,
            markers: true,
            invalidateOnRefresh: true,
            // fastScrollEnd: true,
        },
    });
    tl1.to('.conMain-products', {
        scale: 1,
        opacity: 1,
        filter: 'blur(0px)',
    });

    // 2. 1스크롤에 핑크타원, be more, dynamic 텍스트 등장
    const tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: '.conMain-products',
            start: '700 top',
            end: '1200 bottom',
            scrub: 1,
            markers: true,
            invalidateOnRefresh: true,
        },
    });
    tl2.set('.conMain-ellipseBox', {
        borderRadius: '50%',
        rotate: '-15deg',
        width: '10vw',
        height: '5vw',
    })
        .to('.conMain-ellipseBox', {
            width: '180vw',
            height: '180vh',
            opacity: 1,
        })
        .to(
            '.conMain-text.beMore',
            {
                right: '8vw',
            },
            '<'
        )
        .to(
            '.conMain-text.dynamic',
            {
                left: '8vw',
            },
            '<'
        );

    // 3. 1스크롤에 be more, dynamic 텍스트 사라짐, 핑크 납작해짐, 기기 사라짐
    const tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: '.conMain-text',
            start: '1600 top',
            end: '5400 bottom',
            scrub: 1,
            markers: true,
            invalidateOnRefresh: true,
        },
    });
    tl3.fromTo(
        '.conMain-ellipseBox',
        {
            width: '180vw',
            height: '180vh',
            borderRadius: '50%',
            rotate: '-15deg',
        },
        {
            borderRadius: 0,
            rotate: 0,
            width: '100vw',
            height: '100vh',
        }
    )
        .to('.conMain-ellipseBox', {
            scaleY: 0,
        })
        .to(
            '.conMain-text.beMore',
            {
                right: '-100vw',
            },
            '<20%'
        )
        .to(
            '.conMain-text.dynamic',
            {
                left: '-100vw',
            },
            '<'
        )
        .to(
            '.conMain-products',
            {
                y: -100,
                opacity: 0,
            },
            '<50%'
        )
        .fromTo(
            '.conMain-products2',
            {
                y: 70,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
            },
            '<50%'
        );


    // 4. conMain-products2 제품 설명 텍스트 등장
    var puffCounter = { var: 0 };
    var count = document.getElementById('count');
    const tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: '.conMain-products2',
            start: '5400 top',
            end: '8400 bottom',
            // scrub: 2,
            scrub: 1,
            markers: true,
            invalidateOnRefresh: true,
        },
    });
    tl4.fromTo(
        '.conMain-text2',
        {
            x: -100,
            opacity: 0,
        },
        {
            x: 0,
            opacity: 1,
        }
    )
        .fromTo(
            '.conMain-text3',
            {
                x: 100,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
            }
        )
        // .to(puffCounter, {
        //   var: 5000,
        //   duration: 2,
        //   onUpdate: function() {
        //     count.innerHTML = Math.ceil(puffCounter.var);
        //   },})
        .fromTo(
            '.conMain-text4',
            {
                x: 100,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
            }
        );
    // 스크롤탑이 7000 이상되면 puffs 숫자 0 에서 5000으로 증가
    addEventListener('scroll', () => {
        let sc = window.pageYOffset || document.documentElement.scrollTop;
        console.log(sc);
        if (sc > 7000) {
            gsap.to(puffCounter, {
                var: 10000,
                duration: 1,
                onUpdate: function () {
                    count.innerHTML = Math.ceil(puffCounter.var);
                },
            });
        }
    });

    // 5. 이전 텍스트 사라지고 새로운 설명 텍스트 등장
    const tl5 = gsap.timeline({
        scrollTrigger: {
            trigger: '.conMain-products2',
            start: '10000 top',
            end: '14400 bottom',
            scrub: 1,
            markers: true,
            invalidateOnRefresh: true,
        },
    });
    tl5.to('.conMain-text2', {
        x: -100,
        opacity: 0,
    })
        .to('.conMain-text3', {
            x: 100,
            opacity: 0,
        })
        .to('.conMain-text4', {
            x: 100,
            opacity: 0,
        })
        .to('.conMain-products2', {
            opacity: 0,
        })
        .to('.conMain-products3', {
            opacity: 1,
        })
        .fromTo(
            '.conMain-text5',
            {
                x: -100,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
            }
        )
        .fromTo(
            '.conMain-text6',
            {
                x: 100,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
            }
        );

    // 6. bestQuality 화면 등장
    const tl6 = gsap.timeline({
        scrollTrigger: {
            trigger: '.conQuality-bestQuality',
            start: '15000 top',
            end: '17500 bottom',
            scrub: 1,
            markers: true,
            invalidateOnRefresh: true,
        },
    });
    tl6.to('.conMain-products3', {
        opacity: 0,
    })
        .to(
            '.conMain-text5',
            {
                x: -100,
                opacity: 0,
            },
            '<'
        )
        .to(
            '.conMain-text6',
            {
                x: 100,
                opacity: 0,
            },
            '<'
        )
        .to('.conQuality-bestQuality', {
            opacity: 1,
            top: '32%',
            transform: 'translate(-50%, -50%) scale(0.3)',
        })
        .to(
            '.conQuality-bg.orange',
            {
                backgroundColor: '#FF560E',
            },
            '<10%'
        )
        .to('.conQuality-bestQuality img.afterimage', {
            opacity: 0,
            transform: 'scale(1.3)',
        });

    // 7. quality 의 텍스트1 등장
    const tl7 = gsap.timeline({
        scrollTrigger: {
            trigger: '.conQuality-text1',
            start: '16500 top',
            end: '18500 bottom',
            scrub: 1,
            markers: true,
            invalidateOnRefresh: true,
        },
    });
    tl7.to('.conQuality-text1 .detail.index0', {
        opacity: 1,
    }).to(
        '.conQuality-text1 .detail.index1',
        {
            opacity: 1,
        },
        '<100%'
    );

    // 8. quality 의 purple 배경 우측에서 들어와 orange 배경 덮음
    const tl8 = gsap.timeline({
        scrollTrigger: {
            trigger: '.conQuality-bg.orange',
            start: '19500 top',
            end: '21500 bottom',
            scrub: 1,
            markers: true,
            invalidateOnRefresh: true,
        },
    });
    tl8.to(
        '.conQuality-bg.purple',
        {
            x: '-100%',
        },
        '<'
    );

    // 9.  quality 의 blue 배경 우측에서 들어와 purple 배경 덮음
    const tl9 = gsap.timeline({
        scrollTrigger: {
            trigger: '.conQuality-bg.purple',
            start: '22500 top',
            end: '24500 bottom',
            scrub: 1,
            markers: true,
            invalidateOnRefresh: true,
        },
    });
    tl9.to(
        '.conQuality-bg.purple',
        {
            x: '-100%',
        },
        '<90%'
    ).to(
        '.conQuality-bg.blue',
        {
            x: '-100%',
        },
        '<'
    );

    // 10. quality 의 text4 등장
    const tl10 = gsap.timeline({
        scrollTrigger: {
            trigger: '.conQuality-text4',
            start: '25500 top',
            end: '30500 bottom',
            scrub: 1,
            markers: true,
            invalidateOnRefresh: true,
        },
    });
    tl10.to('.conQuality-text3', {
        // x: "26.8vw",
        // y: '-1vw',
        // opacity: 0,
        y: '-16vw',
    })
    .fromTo('.conQuality-text4 .imgBox', {
        opacity: 0,
        y: '16vw',
    }, {
        opacity: 1,
        y: '0',
    }, 
    "<")
    .to('.conQuality-text4', {
        marginLeft: '-19vw'
    })
    .to('.conQuality-text3 .detail', {
        opacity: 0,
    }, "<")
    .fromTo(
        '.conQuality-text4 .detail span',
        {
            // opacity: 0,
            // rotation: -65,
            // y: "1vw",
            // scale: 0.5,
            opacity: 0,
        },
        {
            stagger: {
                each: 0.06,
            },
            rotation: 0,
            y: 0,
            scale: 1,
            opacity: 1,
        }
    );

    // 11. conQuality-experts 등장
    const tl11 = gsap.timeline({
        scrollTrigger: {
            trigger: '.conQuality-experts',
            start: '31500 top',
            end: '35500 bottom',
            scrub: 1,
            markers: true,
            invalidateOnRefresh: true,
        },
    });
    tl11.to('.conQuality-text4', {
        opacity: 0,
    })
        .to('.conQuality-bg.blue .colorBox', {
            borderRadius: '50%',
            width: '10vw',
            height: '10vw',
            left: '46%',
            top: '33vh',
        })
        .to(
            '.conQuality-bg.blue .colorBox',
            {
                x: '-14vw',
            },
            '<100%'
        )
        .to(
            '.conQuality-experts-text .detail.index0',
            {
                opacity: 1,
                x: '6vw',
            },
            '<50%'
        )
        .to(
            '.conQuality-experts .imgExpertsWrap',
            {
                opacity: 1,
            },
            '<'
        )
        .to('.conQuality-experts-text .detail.index1', {
            opacity: 1,
            x: '6vw',
        });

    // 12. conFlavor 등장
    const tl12 = gsap.timeline({
        scrollTrigger: {
            trigger: '.conFlavor',
            start: '36500 top',
            end: '38500 bottom',
            scrub: 1,
            markers: true,
            // invalidateOnRefresh: true, 설정하면 안보임
        },
    });
    tl12.to('.conFlavor', {
        opacity: 1,
    }).from(
        '.conFlavor-bg',
        {
            top: '100%',
        },
        '<'
    );


    // 13. aboutUs 등장
    const tl13 = gsap.timeline({
      scrollTrigger: {
          trigger: '.conAboutUs',
          start: '39500 top',
          end: '47000 bottom',
          scrub: 1,
          markers: true,
          invalidateOnRefresh: true,
      },
    });
    tl13.to(".conAboutUs", {
      opacity: 1,
      zIndex: 10,
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
    .to(".conAboutUs .topBtn", {
        opacity: 1,
      })
    .to(".conAboutUs footer", {
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
            delay: 5000,
            disableOnInteraction: false,
        },
    });

    // [conFlavor 의 이미지 슬라이드에 해당하는 맛 설명 나오는 함수]
    // 설명 업데이트 함수
    function updateDescription(flavor) {
      // 모든 설명 숨기기
      document.querySelectorAll('.conFlavor-description .list').forEach(list => {
        list.classList.remove('active');
      });
      // 현재 맛에 해당하는 설명 보이기
      const activeDescription = document.querySelector(`.conFlavor-description .list[data-flavor="${flavor}"]`);
      if (activeDescription) {
        activeDescription.classList.add('active');
      }

      // [맛 설명 바 수치 값 적용]
      let sweetness = document.querySelector(`.conFlavor-description .list[data-flavor="${flavor}"] .sweetness .value`);
      let sour = document.querySelector(`.conFlavor-description .list[data-flavor="${flavor}"] .sour .value`);
      let neck = document.querySelector(`.conFlavor-description .list[data-flavor="${flavor}"] .neck .value`);
      let weight = document.querySelector(`.conFlavor-description .list[data-flavor="${flavor}"] .weight .value`);
      let cooling = document.querySelector(`.conFlavor-description .list[data-flavor="${flavor}"] .cooling .value`);
      // 맛 설명 바 의 data-value 값 가져오기
      let sweetnessValue = sweetness.dataset.value;
      let sourValue = sour.dataset.value;
      let neckValue = neck.dataset.value;
      let weightValue = weight.dataset.value;
      let coolingValue = cooling.dataset.value;
      // 맛 설명 바 수치 값 적용
      // 1.초기화
        sweetness.style.width = '0%'; 
        sour.style.width = '0%';
        neck.style.width = '0%';
        weight.style.width = '0%';
        cooling.style.width = '0%';
      // 2. 브라우저가 스타일 변경을 인지하도록 강제 트리거
      requestAnimationFrame(() => {
        sweetness.style.width = `${sweetnessValue * 10}%`;
        sour.style.width = `${sourValue * 10}%`;
        neck.style.width = `${neckValue * 10}%`;
        weight.style.width = `${weightValue * 10}%`;
        cooling.style.width = `${coolingValue * 10}%`;
      });
    }

    // 초기 설명 표시
    const initialSlide = swiper.slides[swiper.activeIndex];
    const initialFlavor = initialSlide.getAttribute('data-flavor');
    updateDescription(initialFlavor);

    // 슬라이드 변경 시 설명 업데이트
    swiper.on('slideChange', function () {
      const activeSlide = swiper.slides[swiper.activeIndex];
      const activeFlavor = activeSlide.getAttribute('data-flavor');
      updateDescription(activeFlavor);
    });


    // [swiper 각 슬라이드 클릭 시 active 상태로 변경]
    let swiperSlides = document.querySelectorAll('.conFlavor .conFlavor-imgs .swiper-slide');
    swiperSlides.forEach((slide, index) => {
        slide.addEventListener("click", (event) => {
            // 클릭된 슬라이드의 인덱스 가져오기
            const slideIndex = index;

            // 해당 슬라이드로 이동
            swiper.slideToLoop(slideIndex);

            // 모든 슬라이드에서 active 클래스 제거
            swiperSlides.forEach(slide => {
                slide.classList.remove("swiper-slide-active");
            });
            // 클릭한 슬라이드에 active 클래스 추가
            slide.classList.add("swiper-slide-active");

            // 해당하는 맛 설명으로 변화
            const clickedSlide = event.currentTarget;
            const clickedFlavor = clickedSlide.getAttribute('data-flavor');
            updateDescription(clickedFlavor);
        });
    });





  // [header 클릭 시 스크롤탑 이동] 
  const mainMenu = document.querySelector('header nav div:nth-child(1)');
  const qualityMenu = document.querySelector('header nav div:nth-child(2)');
  const flavorMenu = document.querySelector('header nav div:nth-child(3)');
  const aboutUsMenu = document.querySelector('header nav div:nth-child(4)');

  const transitionBox = document.querySelector(".transitionBox");
  function scrollToTop (destination) {
    transitionBox.style.visibility = "visible";
    transitionBox.style.opacity = "1";
    setTimeout(() => {
        window.scrollTo({
          top: destination,
          behavior: "smooth" // 부드럽게 스크롤 이동
        });
      }, 500);
      setTimeout(() => {
          transitionBox.style.opacity = "0";
      }, 1500);
      setTimeout(() => {
        transitionBox.style.visibility = "hidden";
      }, 2000);
  }
  // mainMenu 클릭 시 스크롤 위치 이동
  mainMenu.addEventListener("click", () => {
    scrollToTop(0);
  });

  // qualityMenu 클릭 시 스크롤 위치 이동
  qualityMenu.addEventListener("click", () => {
    scrollToTop(16000);
  });

  // flavorMenu 클릭 시 스크롤 위치 이동
  flavorMenu.addEventListener("click", () => {
    scrollToTop(30500);
  });

  // aboutUsMenu 클릭 시 스크롤 위치 이동
  aboutUsMenu.addEventListener("click", () => {
    scrollToTop(40000);
  });
  


    // [top 버튼 클릭 시 상단으로 이동]
    const topBtn = document.querySelector(".conAboutUs .topBtn");
    topBtn.addEventListener("click", () => {
        scrollToTop(0);
        // 모든 스크롤트리거 초기화
        ScrollTrigger.clearScrollMemory();

        // 기존 애니메이션 초기화
    });


});