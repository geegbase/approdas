const SliderArrowIcon = ({ className, onClick }) => {
  return (
    <svg
      id="prev"
      viewBox="0 0 31 101"
      version="1.1"
      onClick={onClick}
      className={className}
    >
      <path d="M 0,0 30,50 0,100" />
    </svg>
  );
};

export default SliderArrowIcon;
