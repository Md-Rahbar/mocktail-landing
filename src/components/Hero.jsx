import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText, ScrollTrigger } from "gsap/all"
import { useRef } from "react"
import { useMediaQuery } from "react-responsive"

gsap.registerPlugin(SplitText, ScrollTrigger)


const Hero = () => {
  const videoRef=useRef(null);

  const isMobile= useMediaQuery({maxWidth:767});

  useGSAP(()=>{
    const heroSplit=new SplitText('.title',{type:'chars,words'});

    const paragraphSplit=new SplitText('.subtitle',{type:'lines'});

    heroSplit.chars.forEach((char)=> char.classList.add('text-gradient'))

    gsap.from(heroSplit.chars,{
      yPercent:100,
      duration:1.3,
      delay:0.1,
      ease:'expo.out',
      stagger:0.05
    })

    gsap.from(paragraphSplit.lines,{
      opacity:0,
      yPercent:100,
      duration:1,
      ease:'expo.out',
      stagger:0.05,
      delay:1,
    });

    gsap.timeline({
      scrollTrigger:{
        trigger:'#hero',
        start:'top top',
        end:'bottom top',
        scrub:true,
      }
    })
    .to('.right-leaf',{y:150},0)
    .to('.left-leaf',{y:-150},0)

    const startValue=isMobile? 'top 50%':'center 60%';
    const endValue= isMobile? '120% top' : 'bottom top';

    let tl=gsap.timeline({
      scrollTrigger:{
        trigger:'video',
        start:startValue,
        end: endValue,
        scrub:true,
        pin:true,
      }
    })

    if (videoRef.current) {
      videoRef.current.onloadedmetadata = () => {
        const videoElement = videoRef.current;
        if (!videoElement) return;

        const duration = videoElement.duration ?? 0;

        tl.to(videoElement, {
          currentTime: duration,
        });
      };
    }
  },[]);
  return (
    <>
    <section id="hero" className='noisy'>
        <h1 className="title">COCKTAIL</h1>

        <img src="/images/hero-left-leaf.png" alt="left-leaf" className="left-leaf" />

        <img src="/images/hero-right-leaf.png" alt="right-leaf" className="right-leaf" />

        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Cool. Calm. Crazy</p>
              <p className="subtitle">
                Sip the Cool <br/> from this Summer 
              </p>
            </div>

            <div className="view-cocktails">
              <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit distinctio, dolor ut ipsum quisquam libero officia saepe, totam iste quo molestiae architecto iure. Culpa aliquid, pariatur atque consequuntur ipsam quo.</p>
              <a href="#cocktails">View Cocktails</a>
            </div>
          </div>
        </div>
        </section>

        <div className="video absolute inset-0">
          <video 
          ref={videoRef}
          src="/videos/output.mp4"
          muted
          playsInline
          preload="auto"
          ></video>
        </div>
    </>
  )
}

export default Hero