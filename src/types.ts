export default interface ICountry {
    name: {
        common: string
        official: string
        nativeName: {
            [key: string]: {
                official: string
                common: string
            }
        }
    }
    flags: {
        png: string
        svg: string
        alt: string
    }
}