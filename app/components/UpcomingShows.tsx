'use client';
import useAxios from 'axios-hooks';
import { Show, RawShowData } from '@/app/types';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import { Masonry } from 'react-plock';

// TODO if two of our bands are playing, the one that isn't Receive should be added to the otherBands field

export default function UpcomingShows() {
    const [{ data: shows, loading, error }, refetch] = useAxios(
        'https://api.slownames.net/api/shows?populate=deep&filters[myBand][band][id]=32'
    );

    if (loading) return <p>loading</p>;
    if (error) return <p>error</p>;

    const formattedShowsData: Show[] = shows.data.map((show: RawShowData) => ({
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
        documentation: show.attributes.documentation.data?.map((document) => ({
            id: document.id,
            alt: document.attributes.alternativeText,
            urlLarge: `${process.env.NEXT_PUBLIC_STRAPI_URL}${document.attributes.url}`,
            urlSmall: document.attributes.formats.medium
                ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${document.attributes.formats.medium.url}`
                : `${process.env.NEXT_PUBLIC_STRAPI_URL}${document.attributes.url}`,
        })),
    }));

    console.log(formattedShowsData);

    const formatUpcomingShows = (shows: { data: RawShowData[] }): Show[] => {
        formattedShowsData.sort(
            (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        );
        const currentDate = new Date();
        const filteredShowsData = formattedShowsData.filter(
            (show) => new Date(show.date) >= currentDate
        );
        return filteredShowsData;
    };

    const formatLastShow = (shows: { data: RawShowData[] }): Show | null => {
        const currentDate = new Date();

        const mostRecentShow = formattedShowsData.reduce(
            (maxShow: Show | null, show) => {
                const showDate = new Date(show.date);

                if (
                    showDate < currentDate &&
                    (!maxShow || showDate > new Date(maxShow.date))
                ) {
                    return show;
                }

                return maxShow;
            },
            null
        );

        return mostRecentShow;
    };

    const upcomingShows = shows ? formatUpcomingShows(shows) : [];

    const lastShow: Show | null = shows ? formatLastShow(shows) : null;

    const MasonryImages =
        lastShow?.documentation.map((document) => ({
            urlSmall: document.urlSmall,
            urlLarge: document.urlLarge,
        })) || [];

    return (
        <>
            <div className="shows">
                <h2>shows</h2>
                {upcomingShows.length > 0 ? (
                    <>
                        <div className="show-list">
                            {upcomingShows.map((show: Show) => (
                                <div className="show" key={show.id}>
                                    <div className="show-details">
                                        <div className="show-when">
                                            <div className="show-when-wrapper">
                                                <div className="show-month">
                                                    {show.shortMonth}
                                                </div>
                                                <div className="show-day">
                                                    {show.shortDay}{' '}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="show-etc">
                                            <div className="show-where">
                                                <span className="show-venue">
                                                    {show.venue}{' '}
                                                </span>
                                                {show.city !==
                                                'Brooklyn, NY' ? (
                                                    <span className="show-city">
                                                        <span>(</span>
                                                        {show.city}
                                                        <span>)</span>{' '}
                                                    </span>
                                                ) : null}
                                            </div>
                                            {show.otherBands && (
                                                <div className="show-otherbands">
                                                    with {show.otherBands}
                                                </div>
                                            )}
                                            {show.eventLinks.length > 0 && (
                                                <div className="show-links">
                                                    {show.eventLinks.map(
                                                        (link) => (
                                                            <a
                                                                key={link.id}
                                                                href={link.url}
                                                            >
                                                                {link.text}{' '}
                                                            </a>
                                                        )
                                                    )}
                                                </div>
                                            )}
                                            {show.notes && (
                                                <div className="show-notes">
                                                    {show.notes}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="show-flyer">
                                        {show.flyers.map((flyer) => (
                                            <a
                                                href={flyer.urlLarge}
                                                key={flyer.id}
                                            >
                                                <img
                                                    src={flyer.urlSmall}
                                                    alt={flyer.alt}
                                                />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <>
                        {lastShow ? (
                            <>
                                <div className='toptext'>
                                    Nothing announced right now, but here are
                                    some pics from our set at {lastShow.venue}{' '}
                                    on {lastShow.shortDate}:
                                </div>
                                <div className="lastshow-pics">
                                    <Masonry
                                        items={MasonryImages}
                                        config={{
                                            columns: [1, 1, 2],
                                            gap: [16, 16, 16],
                                            media: [768, 1024, 1280],
                                        }}
                                        render={(item, idx) => (
                                            <>
                                                <a href={item.urlLarge}>
                                                    <img
                                                        key={idx}
                                                        src={item.urlSmall}
                                                        style={{
                                                            width: '100%',
                                                            height: 'auto',
                                                        }}
                                                    />
                                                </a>
                                            </>
                                        )}
                                    />
                                </div>
                            </>
                        ) : (
                            <div>nothin</div>
                        )}
                    </>
                )}
            </div>
        </>
    );
}
