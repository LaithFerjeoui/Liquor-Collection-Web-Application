const MenuSvg = ({ openNavigation, isScrolled }) => {
  return (
    <svg
      className="overflow-visible"
      width="20"
      height="12"
      viewBox="0 0 20 12"
    >
      <rect
        className={`transition-all origin-center ${openNavigation ? 'fill-white' : (isScrolled ? 'fill-black' : 'fill-white')}`}
        y={openNavigation ? "5" : "0"}
        width="20"
        height="2"
        rx="1"
        transform={`rotate(${openNavigation ? "45" : "0"})`}
      />
      <rect
        className={`transition-all origin-center ${openNavigation ? 'fill-white' : (isScrolled ? 'fill-black' : 'fill-white')}`}
        y={openNavigation ? "5" : "10"}
        width="20"
        height="2"
        rx="1"
        transform={`rotate(${openNavigation ? "-45" : "0"})`}
      />
    </svg>
  );
};

export default MenuSvg;
