import { TiLocationArrow } from "react-icons/ti"
import {BentoCard, BentoTilt} from "./BentoCard"

const Features = () => {
  return (
    <section id="arena" className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="text-blue-50 font-circular-web text-xl">
            Your Mind is the Ultimate Weapon
          </p>
          <p className="max-w-md font-circular-web text-blue-50 text-xl opacity-50">
            Beyond bullets, choose an Agent with lethal, adaptive abilities. Forge strategies, outsmart rivals, and let your gunplay steal the spotlight.
          </p>
        </div>
        <BentoTilt className="w-full h-[65vh] md:h-[70vh] border-hsla rounded-xl relative mb-10 overflow-hidden">
          <BentoCard 
            src="https://videos.ctfassets.net/m3x6aw9x53qp/6pGz528JKYIzI9aWeFqxdi/201a38cd37af35cb7b6afaa348f2e118/feature-1.webm"
            title = {<>Do<b>m</b>i<b>n</b>ate the <b>a</b>ren<b>a</b></>}
            description = "Prove your skills, outsmart opponents, seize victory, and claim your well-earned rewards."
            hoverPlay={true}
          />
        </BentoTilt>
        <div className="grid h-[140vh] grid-cols-2 grid-rows-3 gap-10">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2 ">
            <BentoCard 
              src="https://videos.ctfassets.net/m3x6aw9x53qp/6JUZqe8WxMqihNbSp1ItdA/d7b0df9212836110f6108affebd8a8fd/feature-2.webm"
              title = {<> <b>M</b>ast<b>e</b>r the ag<b>e</b><b>n</b>ts</>}
              description = "Unleash unique skills and personalities that redefine. Every battle, discover your favorite agent today"
              autoPlay={true}
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 ms-32 md:ms-0">
            <BentoCard
              src="https://videos.ctfassets.net/m3x6aw9x53qp/3ze5WFuNResPZ2EOrVGANe/e079d68e04503d7e5a2fc3fcd27f62e0/feature-3.webm"
              title = {<><b>w</b>eapo<b>n</b>s </>}
              description = "Each weapon with unique characteristics, find your perfect tools to dominate the battlefield"
              autoPlay={true}
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 me-24 md:me-0">
            <BentoCard
              src="https://videos.ctfassets.net/m3x6aw9x53qp/1qOaCnIvIXMXEKUQbNob0z/2dd8c5d1087812dbbd6ba3b165344e6c/feature-4.webm"
              title = {<>meet <b>V</b>ip<b>e</b>r</>}
              description = "Discover Viper, uniquely lethal weaponry and game-changing ultimates to dominate every battle."
              autoPlay={true}
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-red-secondary p-5">
              <h1 className="special-font bento-title max-w-64 text-black"><b>A</b>dditio<b>n</b>al s<b>e</b>cti<b>o</b>ns lau<b>n</b>chi<b>n</b>g s<b>oo</b>n</h1>
              <TiLocationArrow className="m-5 scale-[5] self-end"/>
            </div>
          </BentoTilt>
          <BentoTilt className="bento-tilt_2">
            <video
              src="https://videos.ctfassets.net/m3x6aw9x53qp/3LQFTzcvK53jde2Bz0XTIb/941a04c31eeecdd925a7604e566e8d6e/feature-5.webm"
              loop
              muted
              autoPlay
              className="size-full object-cover object-center"
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  )
}

export default Features
