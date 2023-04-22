import React from 'react';
import {motion} from 'framer-motion';
import { fadeIn } from '../variants';

import Img1 from '../assets/portfolio-img1.png'
import Img2 from '../assets/portfolio-img2.png'
import Img3 from '../assets/portfolio-img3.png'




const Work = () => {
  return <section className='section' id='work'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <motion.div 
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once : false, amount: 0.3}}
          className='flex-1 flex flex-col gap-y-12 mb-10 lg:mg-0'>
          {/*text*/}
          <div>
            <h2 className='h2 leading-tight text-accent'>
              My Latest <br/>
              Work.
            </h2>
            <p className='max-w-sm mb-16'>
              este es un texto donde yo tengo que ponerme a escribir
              para que sea un texto de 20 palabras si no me equivoco
              pero bueno es asi.
            </p>
            <button className='btn btn-sm'>View all projects</button>
          </div>
          {/*image*/}
          <div className='group relative overflow-hidden border-2
           border-white/50 rounded-x1'>

            <div className='group-hover:bg-black/70 w-full h-full absolute
             z-40 transition-all duration-300'></div>

            <img className='group-hover:scale-125 transition-all duration-500' 
                src={Img1} 
                alt=''
                />
            {/*pretittle*/}
            <div className='absolute -bottom-full left-12
            group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>UI/UX Design</span>
              </div>
            {/*title*/}
            <div className='absolute -bottom-full left-12
            group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3x1 text-white'>Project Title</span>
            </div>

          </div>
        </motion.div>
        <motion.div
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once : false, amount: 0.3}}
          className='flex-1 flex flex-col gap-y-10'>
          {/*image */}
          <div className='group relative overflow-hidden border-2
           border-white/50 rounded-x2'>

            <div className='group-hover:bg-black/70 w-full h-full absolute
             z-40 transition-all duration-300'></div>

            <img className='group-hover:scale-125 transition-all duration-500' 
                src={Img2} 
                alt=''
                />
            {/*pretittle*/}
            <div className='absolute -bottom-full left-12
            group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>UI/UX Design</span>
              </div>
            {/*title*/}
            <div className='absolute -bottom-full left-12
            group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3x1 text-white'>Project Title</span>
            </div>

          </div>
           {/*image */}
           <div className='group relative overflow-hidden border-2
           border-white/50 rounded-x1'>

            <div className='group-hover:bg-black/70 w-full h-full absolute
             z-40 transition-all duration-300'></div>

            <img className='group-hover:scale-125 transition-all duration-500' 
                src={Img3} 
                alt=''
                />
            {/*pretittle*/}
            <div className='absolute -bottom-full left-12
            group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>UI/UX Design</span>
              </div>
            {/*title*/}
            <div className='absolute -bottom-full left-12
            group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3x1 text-white'>Project Title</span>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
    </section>;
};

export default Work;
