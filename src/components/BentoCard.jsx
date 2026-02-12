import clsx from 'clsx';
import { useRef, useState } from 'react';
import PropTypes from "prop-types";
const BentoTilt = ({ children, className = ''}) => {
    const [transformStyle, setTransformStyle] = useState('');
    const  itemRef = useRef(null);

    const handleMouseMove = (e) => {
        if(!itemRef.current) return;

        const { left, top, width, height } = itemRef.current.getBoundingClientRect();

        const relativeX = (e.clientX - left) / width;
        const relativeY = (e.clientY - top) / height;
        
        const tiltX = (relativeY - 0.5) * 7;
        const tiltY = (relativeX - 0.5) * -7;

        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`;

        setTransformStyle(newTransform);
    }

    const handleMouseLeave = () => {
        setTransformStyle('');
    }

    return (
        <div className={className} ref={itemRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{transform: transformStyle}}>
            {children}
        </div>
    )
}

const BentoCard = ({src, title, description,containerClass, hoverPlay = false, autoPlay = false}) => {

    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        if (hoverPlay && videoRef.current) {
            videoRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        if (hoverPlay && videoRef.current) {
            videoRef.current.pause();
        }
    };

  return (
    <div className={clsx("relative size-full",containerClass)}  onMouseEnter={hoverPlay ? handleMouseEnter : undefined}
    onMouseLeave={hoverPlay ? handleMouseLeave : undefined}>
        <video 
            ref={videoRef}
            src={src}
            loop
            muted
            autoPlay={autoPlay}
            className="absolute left-0 top-0 size-full object-cover object-center rounded-xl"
        />
        <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
            <div>
                <h1 className="bento-title special-font">
                    {title}
                </h1>
                {description && (
                    <p className="mt-3 max-w-64 text-sm md:text-base font-medium">
                        {description}
                    </p>
                )}
            </div>
        </div>
    </div>
  )
}

BentoTilt.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };
  
  BentoCard.propTypes = {
    src: PropTypes.string.isRequired,
    title: PropTypes.node.isRequired,
    description: PropTypes.string,
    containerClass: PropTypes.string,
    hoverPlay: PropTypes.bool,
    autoPlay: PropTypes.bool,
  };

export {BentoCard, BentoTilt}
