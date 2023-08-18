export default interface ICountry {
  name: {
    common: string;
    official: string;
    nativeName?: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  independent: boolean;
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
}
