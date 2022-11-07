import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ScrollToTop= ({ history }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  });

  return (null);
}

const ScrollTop = () => {
  const navigate = useNavigate();

  return navigate(ScrollToTop);
}

export default ScrollTop;