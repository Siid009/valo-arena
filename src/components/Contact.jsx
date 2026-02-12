import AnimatedTitle from './AnimatedTitle'
import Button from './Button'
import PropTypes from "prop-types";
import { HeartPulse } from 'lucide-react';

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
)

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-[70vh] w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden shadow-xl shadow-gray-600">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
           src='/img/image.webp'
           clipClass="contact-clip-path-1 md:scale-150"
          />
          <ImageClipBox
           src='/img/contact-item.webp'
           clipClass="contact-clip-path-2 lg:translate-y-52 translate-y-60"
          />
        </div>
        <div className="absolute -top-40 left-20 w-60 md:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="/img/sova.webp"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>
        <div className="flex flex-col items-center text-center">
          <p className="mb-16 font-general text-base text-blue-75 uppercase font-semibold">
            Join Valo-Arena
          </p>

          <AnimatedTitle 
              title="S<b>h</b>ow y<b>o</b>ur s<b>k</b>ills in <br /> V<b>a</b>lo Are<b>n</b>a—wh<b>e</b>re <br />cha<b>m</b>pio<b>n</b>s are ma<b>d</b>e!"
              containerClass=" !text-4xl md:!text-[5rem] w-full !leading-[.8] md:!leading-none"
          />
          <a href="https://www.linkedin.com/in/siddhantshaw/" target="_blank" rel="noopener noreferrer">
            <Button title="contact us" containerClass="mt-16 cursor-pointer shadow-xl shadow-gray-400/40 hover:bg-red-primary hover:shadow-red-primary/40" titleClass="text-sm font-medium"/>
          </a>
        </div>
      </div>
      <div className="absolute right-[20%] md:right-[40%] w-60 py-2 bg-gradient-to-r from-blue-300 to-violet-300 mt-6 md:mt-12 rounded-md justify-center items-center flex shadow-lg shadow-gray-400">
        <p className='flex gap-2 font-robert-medium text-gray-800'>Made with <span className='text-red-700'><HeartPulse/></span> by Siddhant</p>
      </div>
    </div>
  )

}


ImageClipBox.propTypes = {
  src: PropTypes.string.isRequired,
  clipClass: PropTypes.string,
};
export default Contact
