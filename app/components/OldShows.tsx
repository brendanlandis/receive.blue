'use client';
import useAxios from 'axios-hooks';
import { Show, RawShowData } from '@/app/types';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
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

    const MasonryImages = [
        'https://api.slownames.net/uploads/medium_flyer_230914_receive_1bdeced660.jpg',
        'https://api.slownames.net/uploads/sept25flyer_a2bcc12ae3.jpeg',
        'https://api.slownames.net/uploads/medium_IMG_1732_fa6503f7d8.png',
        'https://api.slownames.net/uploads/medium_98_C1_E617_8095_4101_B86_F_4_D4_F368_A49_CF_57cc45c5bb.jpg',
        'https://api.slownames.net/uploads/medium_220604_flyer_8449d8401f.jpg',
        'https://api.slownames.net/uploads/medium_IMG_0909_263ccb8a4c.jpg',
    ];

    return (
        <div className="show-listd">
            <Masonry
                items={MasonryImages}
                config={{
                    columns: [2, 3, 4],
                    gap: [16, 16, 16],
                    media: [768, 1024, 1280],
                }}
                render={(item, idx) => (
                    <img
                        key={idx}
                        src={item}
                        style={{ width: '100%', height: 'auto' }}
                    />
                )}
            />
            {formattedShows.map((show: Show) => (
                <div className="show" key={show.id}>
                    <div className="show-flyer">
                        {/* {show.flyers.map((flyer) => (
                            <a href={flyer.urlLarge} key={flyer.id}>
                                <img src={flyer.urlSmall} alt={flyer.alt} />
                            </a>
                        ))} */}
                    </div>
                </div>
            ))}
        </div>
    );
}
