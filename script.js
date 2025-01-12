// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);

    // 1. 1스크롤에 블러 제품 이미지 확대
    const tl1 = gsap.timeline({
        scrollTrigger: {
            trigger: '.conMain-products',
            start: '0 top',
            end: '600 bottom',
            scrub: 2,
            markers: true,
        },
    });
    tl1.to('.conMain-products', {
        scale: 1,
        opacity: 1,
        filter: 'blur(0px)',
    });

    // 2. 1스크롤에 핑크타원, be more, dynamic 텍스트 등장
    const tl1a = gsap.timeline({
        scrollTrigger: {
            trigger: '.conMain-products',
            start: '600 top',
            end: '1200 bottom',
            scrub: 2,
            markers: true,
        },
    });
    tl1a.set('.conMain-ellipseBox', {
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
    const tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: '.conMain-text',
            start: '1600 top',
            end: '5400 bottom',
            scrub: 2,
            markers: true,
        },
    });
    tl2.fromTo(
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
    const tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: '.conMain-products2',
            start: '5400 top',
            end: '8400 bottom',
            scrub: 2,
            markers: true,
        },
    });
    tl3.fromTo(
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
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        console.log(scrollTop);
        if (scrollTop > 7000) {
            gsap.to(puffCounter, {
                var: 5000,
                duration: 1,
                onUpdate: function () {
                    count.innerHTML = Math.ceil(puffCounter.var);
                },
            });
        }
    });

    // 5. 이전 텍스트 사라지고 새로운 설명 텍스트 등장
    const tl3a = gsap.timeline({
        scrollTrigger: {
            trigger: '.conMain-products2',
            start: '8400 top',
            end: '11400 bottom',
            scrub: 2,
            markers: true,
        },
    });
    tl3a.to('.conMain-text2', {
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
    const tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: '.conQuality-bestQuality',
            start: '13000 top',
            end: '14500 bottom',
            scrub: 2,
            markers: true,
        },
    });
    tl4.to('.conMain-products3', {
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
            top: '25%',
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
    const tl5 = gsap.timeline({
        scrollTrigger: {
            trigger: '.conQuality-text1',
            start: '14500 top',
            end: '16500 bottom',
            scrub: 2,
            markers: true,
        },
    });
    tl5.to('.conQuality-text1 .detail.index0', {
        opacity: 1,
    }).to(
        '.conQuality-text1 .detail.index1',
        {
            opacity: 1,
        },
        '<100%'
    );

    // 8. quality 의 purple 배경 우측에서 들어와 orange 배경 덮음
    const tl5a = gsap.timeline({
        scrollTrigger: {
            trigger: '.conQuality-bg.orange',
            start: '17000 top',
            end: '17500 bottom',
            scrub: 2,
            markers: true,
        },
    });
    tl5a.to(
        '.conQuality-bg.purple',
        {
            x: '-100%',
        },
        '<'
    );

    // 9.  quality 의 blue 배경 우측에서 들어와 purple 배경 덮음
    const tl5b = gsap.timeline({
        scrollTrigger: {
            trigger: '.conQuality-bg.purple',
            start: '19000 top',
            end: '19500 bottom',
            scrub: 2,
            markers: true,
        },
    });
    tl5b.to(
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
    const tl8 = gsap.timeline({
        scrollTrigger: {
            trigger: '.conQuality-text4',
            start: '21000 top',
            end: '25000 bottom',
            scrub: 2,
            markers: true,
        },
    });
    tl8.to('.conQuality-text3', {
        // x: "26.8vw",
        y: '-1vw',
        opacity: 0,
    })
        .to(
            '.conQuality-text4 .imgBox img',
            {
                opacity: 1,
                stagger: 1,
                scale: 1,
            },
            '<'
        )
        .fromTo(
            '.conQuality-text4 .detail span',
            {
                opacity: 0,
                rotation: -65,
                // y: "1vw",
                scale: 0.5,
            },
            {
                stagger: 1,
                opacity: 1,
                rotation: 0,
                y: 0,
                scale: 1,
            }
        );

    // 11. conQuality-experts 등장
    const tl9 = gsap.timeline({
        scrollTrigger: {
            trigger: '.conQuality-experts',
            start: '25500 top',
            end: '29000 bottom',
            scrub: 2,
            markers: true,
        },
    });
    tl9.to('.conQuality-text4', {
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
    const tl10 = gsap.timeline({
        scrollTrigger: {
            trigger: '.conFlavor',
            start: '30000 top',
            end: '30500 bottom',
            scrub: 2,
            markers: true,
        },
    });
    tl10.to('.conFlavor', {
        opacity: 1,
    }).from(
        '.conFlavor-bg',
        {
            top: '100%',
        },
        '<'
    );
    // .to(".conFlavor-description", {
    //   x: 200,
    // }, "<")
    // .to(".conFlavor-imgs", {
    //   x: -200,
    // }, "<")
    // .from(".conFlavor-title", {
    //   y: -50,
    //   opacity: 0,
    // }, "<")

    // const tl11 = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".conFlavor",
    //     start: "35500 top",
    //     end: "35500 bottom",
    //     scrub: 2,
    //     markers: true,
    //   },
    // });
    // tl11.to(".conFlavor", {
    //   opacity: 1,
    // })
    // .to(".conFlavor-description", {
    //   x: -200,
    //   opacity: 0,
    // }, "<")
    // .to(".conFlavor-imgs", {
    //   x: 200,
    //   opacity: 0,
    // }, "<")
    // .to(".conFlavor-title", {
    //   y: -50,
    //   opacity: 0,
    // }, "<")

    // const tl12 = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".conAboutUs",
    //     start: "32000 top",
    //     end: "38000 bottom",
    //     scrub: 2,
    //     markers: true,
    //   },
    // });
    // tl12.to(".conAboutUs", {
    //   opacity: 1,
    // })
    // .to(".conAboutUs-title", {
    //   opacity: 1,
    // })
    // .to(".conAboutUs-descriptionBox img", {
    //   opacity: 1,
    // })
    // .to(".conAboutUs-descriptionBox .introduce", {
    //   opacity: 1,
    // })
    // .to(".conAboutUs-descriptionBox .promise", {
    //   opacity: 1,
    // })
    // .to(".conAboutUs-descriptionBox button", {
    //   opacity: 1,
    // })

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





    


});