import FacebookIcon from '../Icons/FacebookIcon';
import LinkedInIcon from '../Icons/LinkedinIcon';

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
