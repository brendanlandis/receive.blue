'use client';
import useAxios from 'axios-hooks';
import { Show, RawShowData } from '@/app/types';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';

// TODO if two of our bands are playing, the one that isn't Receive should be added to the otherBands field

export default function UpcomingShows() {
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
                urlSmall: `${process.env.NEXT_PUBLIC_STRAPI_URL}${flyer.attributes.formats.medium.url}`,
            })),
        }));

        formattedShowsData.sort(
            (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        );
        const currentDate = new Date();
        const filteredShowsData = formattedShowsData.filter(
            (show) => new Date(show.date) >= currentDate
        );

        return filteredShowsData;
    };

    const formattedShows = shows ? formatShows(shows) : [];

    return (
        <>
            {formattedShows.map((show: Show) => (
                <div className="show" key={show.id}>
                    <div className="show-details">
                        <div className="show-month bigtext">
                            {show.shortMonth}.{' '}
                        </div>
                        <div className="show-day bigtext">{show.shortDay} </div>
                        <div className="show-where">
                            <span className="show-venue bigtext">
                                @ {show.venue}{' '}
                            </span>
                            {show.city !== 'Brooklyn, NY' ? (
                                <span className="show-city">
                                    ({show.city}){' '}
                                </span>
                            ) : null}
                        </div>
                        <div className="show-otherbands">
                            with {show.otherBands}
                        </div>
                        {show.eventLinks.length > 0 && (
                            <div className="show-links">
                                {show.eventLinks.map((link) => (
                                    <a key={link.id} href={link.url}>
                                        {link.text}{' '}
                                    </a>
                                ))}
                            </div>
                        )}
                        <div className="show-notes">{show.notes}</div>
                    </div>
                    <div className="show-flyer">
                        {show.flyers.map((flyer) => (
                            <a href={flyer.urlLarge}>
                                <img src={flyer.urlSmall} alt={flyer.alt} />
                            </a>
                        ))}
                    </div>
                </div>
            ))}
            {/* <pre>{JSON.stringify(shows, null, 2)}</pre> */}
        </>
    );
}
