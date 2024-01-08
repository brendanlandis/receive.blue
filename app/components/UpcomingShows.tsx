'use client';
import useAxios from 'axios-hooks';
import { Show, RawShowData } from '@/app/types';
import { Masonry } from 'react-plock';
import { GetShowDetails } from './GetShowDetails';

// TODO if two of our bands are playing, the one that isn't Receive should be added to the otherBands field

export default function UpcomingShows() {
    const [{ data: shows, loading, error }, refetch] = useAxios(
        'https://api.slownames.net/api/shows?populate=deep&filters[myBand][band][id]=32'
    );

    if (loading) return <p>loading</p>;
    if (error) return <p>error</p>;

    const formatShows = (shows: { data: RawShowData[] }): Show[] => {
        return shows.data.map(GetShowDetails);
    };

    const formattedShows = shows ? formatShows(shows) : [];

    const formatUpcomingShows = (shows: { data: RawShowData[] }): Show[] => {
        formattedShows.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        const currentDate = new Date();
        const filteredShowsData = formattedShows.filter((show) => new Date(show.date) >= currentDate);
        return filteredShowsData;
    };

    const formatLastShow = (shows: { data: RawShowData[] }): Show | null => {
        const currentDate = new Date();

        const mostRecentShow = formattedShows.reduce((maxShow: Show | null, show) => {
            const showDate = new Date(show.date);

            if (showDate < currentDate && (!maxShow || showDate > new Date(maxShow.date))) {
                return show;
            }
            console.log(maxShow);
            return maxShow;
        }, null);

        return mostRecentShow;
    };

    const upcomingShows = shows ? formatUpcomingShows(shows) : [];

    const lastShow: Show | null = shows ? formatLastShow(shows) : null;

    const MasonryImages =
        lastShow?.documentation?.map((photo) => ({
            urlSmall: photo.urlSmall,
            urlLarge: photo.urlLarge,
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
                                                <div className="show-month">{show.shortMonth}</div>
                                                <div className="show-day">{show.shortDay} </div>
                                            </div>
                                        </div>
                                        <div className="show-etc">
                                            <div className="show-where">
                                                <span className="show-venue">{show.venue} </span>
                                                {show.city !== 'Brooklyn, NY' ? (
                                                    <span className="show-city">
                                                        <span>(</span>
                                                        {show.city}
                                                        <span>)</span>{' '}
                                                    </span>
                                                ) : null}
                                            </div>
                                            {show.otherBands && (
                                                <div className="show-otherbands">with {show.otherBands}</div>
                                            )}
                                            {show.eventLinks.length > 0 && (
                                                <div className="show-links">
                                                    {show.eventLinks.map((link) => (
                                                        <a key={link.id} href={link.url}>
                                                            {link.text}{' '}
                                                        </a>
                                                    ))}
                                                </div>
                                            )}
                                            {show.notes && <div className="show-notes">{show.notes}</div>}
                                        </div>
                                    </div>
                                    <div className={`show-flyer grid-col-${show.flyers.length}`}>
                                        {show.flyers.map((flyer) => (
                                            <a href={flyer.urlLarge} key={flyer.id}>
                                                <img src={flyer.urlLarge} alt={flyer.alt} />
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
                                <div className="toptext">
                                    Nothing announced right now, but here's us at {lastShow.venue} on{' '}
                                    {lastShow.shortDate}:
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
