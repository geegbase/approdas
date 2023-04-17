import { slideIn } from '@/utils/motion';
import { EarthCanvas, StarCanvas } from '../canvas';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer>
      <div className="h-full max-w-[1200px] my-0 mx-auto py-0 px-[5px]">
        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          // className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
          <StarCanvas />
        </motion.div>
      </div>
    </footer>
  );
}
