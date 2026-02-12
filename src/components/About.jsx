import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger)
const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: 'center center',
        end: '+=800 center',
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      }
    });
    
    clipAnimation.to('.mask-clip-path', {
      width: '100vw',
      height: '100vh',
      borderRadius: 0,
      border: 0,
    })
  });

  return (
    <div id="about" className="min-h-screen w-screen overflow-x-hidden">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
          <h2 className="font-general text-sm uppercase md:text-base text-red-secondary font-semibold">
            Welcome To The Valorant World
          </h2>
          <AnimatedTitle title="Unleash your <br /> V<b>A</b>LOR<b>A</b>NT potential" containerClass="mt-5 !text-black text-center "/>
          <div className="about-subtext ">
            <p>
              Valorant begins—your tactics, your triumphs, your legend
            </p>
            <p className="text-gray-500">
              Blend your style and experience on a global, competitive stage. You
              have 13 rounds to attack and defend your side using sharp gunplay
              and tactical abilities.
            </p>
          </div>
      </div>
      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image border-2 border-gray-500 ">
          <img src="https://images.ctfassets.net/m3x6aw9x53qp/67Hdm2R2ZWbCGICW4lC8Qu/f312dd15237dcd80b34d8fa558948f5f/about.jpeg" alt="background" className="absolute left-0 top-0 size-full object-cover"/>
        </div>
      </div>
    </div>
  )
}

export default About
