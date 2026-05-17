import React from 'react';
import './Timeline.css';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import { ThemeContext } from '../../Context/theme';

export const Timeline = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className='section mainsection'>
        <h2 className='section__title' data-aos='fade-right'>
          My <span className='different'>Timeline 💫</span>
        </h2>
        <div className='timeline__container'>
          {/* Highest Qualification */}
          <div className='timeline__card' data-aos='fade-up'>
            <div className='timeline__date'>Jun 2019 - Aug 2022</div>
            <div className='timeline__card-header'>
              {/* <div className='timeline__icon'>
                <SchoolIcon />
              </div> */}
              <div>
                <h3 className='timeline__title'>Bachelor of Physics</h3>
                <h4 className='timeline__subtitle'>SKMU University, Dumka</h4>
              </div>
            </div>
          </div>
           <div className='timeline__card' data-aos='fade-up'>
            <div className='timeline__date'>Jan 2023 - Jan 2024</div>
            <div className='timeline__card-header'>
              {/* <div className='timeline__icon'>
                <SchoolIcon />
              </div> */}
              <div>
                <h3 className='timeline__title'>Full Stack Development</h3>
                <h4 className='timeline__subtitle'>Masai School</h4>
              </div>
            </div>
          </div>

          {/* Previous Company */}
          <div className='timeline__card' data-aos='fade-up' data-aos-delay='200'>
            <div className='timeline__date'>Jan 2024 - March 2025</div>
            <div className='timeline__card-header'>
              {/* <div className='timeline__icon'>
                <WorkIcon />
              </div> */}
              <div>
                <h3 className='timeline__title'>Software Developer</h3>
                <h4 className='timeline__subtitle'>Matrecomm Technology Private LTD</h4>
              </div>
            </div>
          </div>

          {/* Current Company */}
          <div className='timeline__card' data-aos='fade-up' data-aos-delay='400'>
            <div className='timeline__date'>April 2025 - Present</div>
            <div className='timeline__card-header'>
              {/* <div className='timeline__icon'>
                <WorkIcon />
              </div> */}
              <div>
                <h3 className='timeline__title'>Software Developer</h3>
                <h4 className='timeline__subtitle'>Rhombuz Design Private LTD</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
