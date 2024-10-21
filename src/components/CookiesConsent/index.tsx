import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import ReactGA from 'react-ga4';
import { useLocation } from 'react-router-dom';

const CookieConsent = () => {
  const [cookies, setCookie] = useCookies(['analytics'], {
    doNotParse: true,
  });
  const [cookiesAlreadySetted, setCookiesAlreadySetted] = useState(cookies.analytics);

  const acceptCookies = () => {
    const currentDate = new Date(Date.now());
    const expiresInOneYear = new Date(currentDate.getTime() + 31536000000);
    setCookie('analytics', true, {
      expires: expiresInOneYear,
    });

    setCookiesAlreadySetted(true);
  };

  const declineCookies = () => {
    const currentDate = new Date(Date.now());
    const expiresInOneDay = new Date(currentDate.getTime() + 86400000 / 2);
    setCookie('analytics', false, {
      expires: expiresInOneDay,
    });

    setCookiesAlreadySetted(true);
  };

  const location = useLocation();
  useEffect(() => {
    if (cookies.analytics) {
      ReactGA.initialize(import.meta.env.VITE_TRACKING_ID);
    }
  }, [cookies.analytics, location.pathname]);

  return (
    <div
      className={`fixed bottom-0 right-0 z-20 m-3 max-w-[360px] rounded-xl bg-solidSecondary p-3 ${cookiesAlreadySetted ? 'hidden' : 'block'}`}
    >
      <p className="mb-3 text-center">
        Este site implementa o Google Analytics. Aceite os cookies para auxiliar no feedback.
      </p>
      <div className="flex gap-6">
        <button className="w-full rounded-xl bg-solidSeason p-3" onClick={acceptCookies}>
          Aceitar
        </button>
        <button className="w-full rounded-xl bg-solidTertiary p-3" onClick={declineCookies}>
          Rejeitar
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
