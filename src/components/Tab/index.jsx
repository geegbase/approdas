import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import WebDevelopmentIcon from '@/components/Icons/WebDevelopmentIcon';
import TickIcon from '@/components/Icons/TickIcon';
import MobileApplicationDevelopmentIcon from '@/components/Icons/MobileApplicationDevelopmentIcon';

const options = [
  {
    title: 'Mobile App Development',
    description:
      'We build mobile applications both in iOS and Android while taking care of the UX/UI aspect of the product.',
    ticks: [
      'Building for iOS and Android Platforms',
      'React Native Development',
      'Routine Maintenance',
    ],
    icon: <MobileApplicationDevelopmentIcon />,
  },
  {
    title: 'Web Development',
    description:
      'We create web solutions from scratch or scale already existing web applications so that the final outcome is functional and bulletproof.',
    ticks: [
      'ReactJS and NextJS Development',
      'Responsive Layout',
      'SEO Friendly',
      'Third-party Integration',
      'Routine Maintenance',
    ],
    icon: <WebDevelopmentIcon />,
  },
  {
    title: 'Custom Development',
    description:
      'Do you have an idea that could change the world? Is it a game idea? Or a business? Or anything else? If you can dream it, we can code it! Our apps are well designed, fluid and loved by everyone',
    ticks: [
      'Building for iOS and Android Platforms',
      'React Native Development',
      'Routine Maintenance',
    ],
    icon: <WebDevelopmentIcon />,
  },
];

const Tab = () => {
  const ulRef = useRef(null);
  const index = useRef(0);

  const [indicatorInfo, setIndicatorInfo] = useState({
    offsetLeft: 0,
    clientWidth: 0,
  });

  const handleResize = () => {
    setIndicatorInfo({
      offsetLeft: ulRef.current.children[index.current].offsetLeft,
      clientWidth: ulRef.current.children[index.current].clientWidth,
    });
  };

  const handleClickMenuItems = (e, idx) => {
    setIndicatorInfo({
      offsetLeft: e.target.offsetLeft,
      clientWidth: e.target.clientWidth,
    });
    index.current = idx;
  };

  useEffect(() => {
    setIndicatorInfo({
      offsetLeft: ulRef.current.children[index.current].offsetLeft,
      clientWidth: ulRef.current.children[index.current].clientWidth,
    });

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="w-full rounded-lg overflow-hidden">
      <ul className="relative flex flex-row flex-nowrap" ref={ulRef}>
        {options.map((menu, idx) => {
          return (
            <li
              className="px-3 py-1 z-[1] w-max cursor-pointer select-none"
              onClick={(e) => handleClickMenuItems(e, idx)}
              key={idx}
            >
              {menu.title}
            </li>
          );
        })}
        <div
          className="bg-[green] top-0 left-0 h-full rounded-lg absolute transition-all duration-500 ease-in-out z-[0]"
          style={{
            left: indicatorInfo.offsetLeft,
            width: indicatorInfo.clientWidth,
          }}
        />
      </ul>

      <div className="flex-auto relative overflow-x-hidden">
        <div
          style={{
            width: `300%`,
            transform: `translateX(-${(
              (index.current / options.length) *
              100
            ).toFixed(1)}%)`,
          }}
          className="top-0 left-0 transition-all duration-500 flex"
        >
          {options.map((option, idx) => {
            return (
              <div
                className="w-full flex flex-col lg:flex-row mt-5 gap-5"
                key={idx}
              >
                <div>{option.icon}</div>
                <div className="flex flex-col p-5">
                  <p className="text-2xl font-semibold">{option.title}</p>
                  <p className="break-words mt-5">{option.description}</p>
                  <ul className="flex flex-col gap-1 mt-5">
                    {option.ticks.map((tick, tickIndex) => {
                      return (
                        <li key={tickIndex}>
                          <div className="flex items-center gap-2">
                            <div>
                              <TickIcon />
                            </div>
                            <p>{tick}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                  <p className="mt-5">
                    <Link
                      href="/"
                      className="hover:text-[#1ffff4dd] font-bold text-white "
                    >
                      Learn More
                    </Link>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tab;
