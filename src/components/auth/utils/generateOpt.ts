export const generateOpt = (): string => {
  const otp = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10));
  return otp.join('');
};
