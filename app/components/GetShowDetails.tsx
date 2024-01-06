import { Show, RawShowData } from '@/app/types';
import { format } from 'date-fns/format';
import { parseISO } from 'date-fns/parseISO';

export const GetShowDetails = (show: RawShowData): Show => {
    return {
        id: show.id,
        bands: show.attributes.myBand.map((band) => ({
            id: band.id,
            bandname: band.band.data.attributes.bandname,
            displayBandname: band.displayBandname,
        })),
        date: show.attributes.date,
        shortMonth: format(parseISO(show.attributes.date), 'MMM'),
        shortDay: format(parseISO(show.attributes.date), 'do'),
        shortDate: format(parseISO(show.attributes.date), 'M/d'),
        doors: show.attributes.doors,
        sound: show.attributes.sound,
        venue: show.attributes.venue,
        city: show.attributes.city,
        notes: show.attributes.notes,
        otherBands: show.attributes.otherBands,
        eventLinks: show.attributes.eventLinks.map((link) => ({
            id: link.id,
            url: link.url,
            text: link.text,
        })),
        flyers: show.attributes.flyers.data.map((flyer) => ({
            id: flyer.id,
            alt: flyer.attributes.alternativeText,
            urlLarge: `${process.env.NEXT_PUBLIC_STRAPI_URL}${flyer.attributes.url}`,
            urlSmall: flyer.attributes.formats.medium
                ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${flyer.attributes.formats.medium.url}`
                : `${process.env.NEXT_PUBLIC_STRAPI_URL}${flyer.attributes.url}`,
        })),
        documentationUploads: show.attributes.documentationUploads?.usableDocumentation?.data?.map((photo) => ({
            id: photo.id,
            alt: photo.attributes.alternativeText,
            urlLarge: `${process.env.NEXT_PUBLIC_STRAPI_URL}${photo.attributes.url}`,
            urlSmall: photo.attributes.formats?.medium
                ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${photo.attributes.formats.medium.url}`
                : `${process.env.NEXT_PUBLIC_STRAPI_URL}${photo.attributes.url}`,
        })),
    };
};
