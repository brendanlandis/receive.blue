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
        eventLinks: Array<{
            id: number;
            url: string;
            text: string;
        }>;
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
    shortMonth: string;
    shortDay: string;
    doors: string;
    sound: string;
    venue: string;
    city: string;
    notes: string;
    otherBands: string;
    eventLinks: Array<{
        id: number;
        url: string;
        text: string;
    }>;
    flyers: Array<{
        id: number;
        alt: string;
        urlLarge: string;
        urlSmall: string;
    }>;
}

export interface RawPostData {
    id: number;
    attributes: {
        date: string;
        headline: string;
        text: string;
        bands: {
            data: Array<{
                id: number;
                attributes: {
                    bandname: string;
                };
            }>;
        };
        attachments: Array<{
            id: number;
            linkText: string;
            file: {
                data: {
                    attributes: {
                        url: string;
                    };
                };
            };
        }>;
    };
}

export interface Post {
    id: number;
    date: string;
    headline: string;
    text: string;
    attachments: Array<{
        id: number;
        text: string;
        url: string;
    }>;
}
