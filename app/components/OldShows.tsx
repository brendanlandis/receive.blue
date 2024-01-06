'use client';
import useAxios from 'axios-hooks';
import { Show, RawShowData } from '@/app/types';
import { format } from 'date-fns/format';
import { parseISO } from 'date-fns/parseISO';
import { Masonry } from 'react-plock';

// TODO if two of our bands are playing, the one that isn't Receive should be added to the otherBands field

export default function OldShows() {
    const [{ data: shows, loading, error }, refetch] = useAxios(
        'https://api.slownames.net/api/shows?populate=deep&filters[myBand][band][id]=32'
    );

    if (loading) return <p>loading</p>;
    if (error) return <p>error</p>;

    const formatShows = (shows: { data: RawShowData[] }): Show[] => {
        const formattedShowsData: Show[] = shows.data.map((show) => ({
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
                urlSmall: photo.attributes.formats.medium
                    ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${photo.attributes.formats.medium.url}`
                    : `${process.env.NEXT_PUBLIC_STRAPI_URL}${photo.attributes.url}`,
            })),
        }));

        formattedShowsData.sort(
            (b, a) => new Date(a.date).getTime() - new Date(b.date).getTime()
        );
        const currentDate = new Date();
        const filteredShowsData = formattedShowsData.filter(
            (show) => new Date(show.date) <= currentDate
        );

        return filteredShowsData;
    };

    const formattedShows = shows ? formatShows(shows) : [];

    const MasonryImages = formattedShows.reduce(
        (images: { urlSmall: string; urlLarge: string }[], show) =>
            images.concat(
                show.flyers.map((flyer) => ({
                    urlSmall: flyer.urlSmall,
                    urlLarge: flyer.urlLarge,
                }))
            ),
        []
    );

    return (
        <div className="show-list">
            <Masonry
                items={MasonryImages}
                config={{
                    columns: [2, 3, 4],
                    gap: [16, 16, 16],
                    media: [768, 1024, 1280],
                }}
                render={(item, idx) => (
                    <>
                        <a href={item.urlLarge}>
                            <img
                                key={idx}
                                src={item.urlSmall}
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </a>
                    </>
                )}
            />
        </div>
    );
}
