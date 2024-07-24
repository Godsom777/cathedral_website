import React, { useState } from 'react';
import { Tabs, Tab } from '@material-ui/core';
import MiniCarousel from '../assets/miniCarousel';
import { FaChurch, FaVideo } from 'react-icons/fa';

const TodayInChurch: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const currentDate = new Date();
  const dateString = `${currentDate.getDate()}-${currentDate.getMonth()+1}-${currentDate.getFullYear()}`;


  const handleTabChange = (_: React.ChangeEvent<{}>, newValue: number) => {
    setSelectedTab(newValue);
  };

  const [isHoveredBtn1, setIsHoveredBtn1] = useState(false);
  const [isHoveredBtn2, setIsHoveredBtn2] = useState(false);



  return (
    <div >
      <Tabs value={selectedTab} onChange={handleTabChange}>
        <Tab className='tab-link' label="MASS & OFFICES" />
        <Tab className='tab-link' label="CONFESSION TIMES" />
        <Tab className='tab-link' label="CATHEDRAL CALENDAR" />
      </Tabs>
     { /* for the mass and Confessions */}
        {selectedTab === 0 && (
        <div className='scrollable-container'>
          {/*  */}
            <MiniCarousel
          content={[
            <div className='tab-contents'>              
          <h6 className='miniTab-h1 danger red'>{`${dateString}`}</h6>
              
              <h6 className='miniTab-h2 red' >12:30am - 2:00 am</h6>
              <p className='miniTab-h3'>St. Anthony Catholic Church</p>
            </div>,
            <div>Slide 2</div>,
            <div>Slide 3</div>,
            <div>Slide 4</div>
          ]}
            />
        <div className='button-row'>
  <button 
    className='button myLarge-btn1'
    onMouseEnter={() => setIsHoveredBtn1(true)}
    onMouseLeave={() => setIsHoveredBtn1(false)}
  >
    {isHoveredBtn1 ? <> <FaChurch /> MASS & OFFICE TIMES</> : 'MASS & OFFICE TIMES'}
  </button>
  <button 
    className='button myLarge-btn2'
    onMouseEnter={() => setIsHoveredBtn2(true)}
    onMouseLeave={() => setIsHoveredBtn2(false)}
  >
    {isHoveredBtn2 ?<><FaVideo /> LIVE STREAM </> : 'LIVE STREAM'}
  </button>
</div>
          </div>
        )}
      
     

      {/* For Confession Times */}
      {selectedTab === 1 && <div></div>}

      {/* For Cathedral Calendar */}
      {selectedTab === 2 && <div></div>}
    </div>
  );
};

export default TodayInChurch;