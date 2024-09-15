import { useMediaQuery } from "react-responsive";

const useMediaQueries = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1224px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return { isDesktop, isTablet, isMobile };
};

export default useMediaQueries;
