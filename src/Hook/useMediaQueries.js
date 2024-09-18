import { useMediaQuery } from "react-responsive";

const useMediaQueries = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 769px) and (max-width: 1024px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return { isDesktop, isTablet, isMobile };
};

export default useMediaQueries;
