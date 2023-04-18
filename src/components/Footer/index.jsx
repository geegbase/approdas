/* import { slideIn } from '@/utils/motion';
import { EarthCanvas, StarCanvas } from '../canvas';
import { motion } from 'framer-motion'; */

const LinkedInIcon = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill={color}
    >
      <path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path>
    </svg>
  );
};

const FacebookIcon = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill={color}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
    </svg>
  );
};

export default function Footer() {
  return (
    <footer className="bg-slate-800/40">
      <div className="h-full max-w-[1200px] my-0 mx-auto py-5 px-[5px] flex flex-col items-center justify-end gap-5">
        <div>
          <ul className="flex gap-3">
            <li className="flex justify-center items-center w-10 h-10 bg-white rounded-full">
              <LinkedInIcon color={'rgb(30 41 59'} />
            </li>
            <li className="flex justify-center items-center w-10 h-10 bg-white rounded-full">
              <FacebookIcon color={'rgb(30 41 59'} />
            </li>
          </ul>
        </div>
        <div className="font-exo2 text-slate-200 font-semibold">
          &copy; 2023 Approdas
        </div>
        {/* <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          // className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
          <StarCanvas />
        </motion.div> */}
      </div>
    </footer>
  );
}
