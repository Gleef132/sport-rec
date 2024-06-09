interface useCookiesReturn {
  getCookie: (name: string) => string | undefined;
  setCookie: (name: string, value: string) => void;
}

export const useCookies = (): useCookiesReturn => {
  const getCookie = (name: string) => {
    if (typeof window !== 'undefined') {
      let matches = document.cookie.match(
        new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
      );
      return matches ? decodeURIComponent(matches[1]) : undefined;
    }
    return undefined;
  };
  const setCookie = (key: string, value: string) => {
    if (typeof window !== 'undefined') {
      document.cookie = `${key}=${value}`;
    }
  };
  return { getCookie, setCookie };
};
