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
        documentation: Array<{
            id: number;
            usable: boolean;
            credit: string;
            media: {
                data: {
                    id: number;
                    attributes: {
                        alternativeText: string;
                        mime: string;
                        url: string;
                        formats: {
                            medium: {
                                url: string;
                            };
                        };
                    };
                };
            };
        }>;
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
    shortDate: string;
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
    documentation: Array<{
        id: number;
        usable: boolean;
        credit: string;
        alt: string;
        mime: string;
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
    realDate: string;
    headline: string;
    text: string;
    attachments: Array<{
        id: number;
        text: string;
        url: string;
    }>;
}

export interface RawTabData {
    id: number;
    attributes: {
        createdAt: string;
        url: string;
        linkText: string;
        description: string;
        bands: {
            data: Array<{
                id: number;
                attributes: {
                    bandname: string;
                };
            }>;
        };
    };
}

export interface Tab {
    id: number;
    date: string;
    url: string;
    linkText: string;
    description: string;
}
