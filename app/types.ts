export interface RawShowData {
    id: number;
    attributes: {
        date: string;
        myBand: Array<{
            id: number;
            displayBandname: string;
            band: {
                data: {
                    id: number;
                    attributes: {
                        bandname: string;
                    };
                };
            };
        }>;
        doors: string;
        sound: string;
        venue: string;
        city: string;
        notes: string;
        otherBands: string;
        link: string;
        flyers: {
            data: Array<{
                id: number;
                attributes: {
                    alternativeText: string;
                    url: string;
                    formats: {
                        medium: {
                            url: string;
                        };
                    };
                };
            }>;
        };
    };
}

export interface Show {
    id: number;
    bands: Array<{
        id: number;
        bandname: string;
        displayBandname: string;
    }>;
    date: string;
    doors: string;
    sound: string;
    venue: string;
    city: string;
    notes: string;
    otherBands: string;
    link: string;
    flyers: Array<{
        id: number;
        alt: string;
        urlLarge: string;
        urlSmall: string;
    }>;
}
