import { slideIn } from '@/utils/motion';
import { EarthCanvas, StarCanvas } from '../canvas';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <div className="">
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
        <StarCanvas />
      </motion.div>
    </div>
  );
}
