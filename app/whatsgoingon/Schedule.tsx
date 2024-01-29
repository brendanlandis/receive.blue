'use client';
import useAxios from 'axios-hooks';
import { Show, RawShowData } from '@/app/types';
import { GetShowDetails } from '../components/GetShowDetails';

export default function Schedule() {
    const [{ data: shows, loading, error }, refetch] = useAxios(
        'https://api.slownames.net/api/shows?populate=deep&filters[myBand][band][id]=43&filters[myBand][band][id]=34&filters[myBand][band][id]=35&filters[myBand][band][id]=40&filters[myBand][band][id]=32&filters[myBand][band][id]=42&filters[myBand][band][id]=41&publicationState=preview'
    );

    if (loading) return <p>loading shows...</p>;
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

    const upcomingShows = shows ? formatUpcomingShows(shows) : [];

    return (
        <>
            {upcomingShows.length > 0 ? (
                <>
                    <ul>
                        {upcomingShows.map((show: Show) => (
                            <li key={show.id}>
                                <span className="date">{show.shortDate} &mdash; </span>
                                {show.bands.map((band) => (
                                    <strong key='band.id'>{band.bandname}</strong>
                                ))}{' '}
                                {show.venue && <>at {show.venue} </>}
                                {show.city && <>in {show.city} </>}
                                {show.otherBands && <>with {show.otherBands} </>}
                                {show.notes && <>({show.notes})</>}
                                {(show.eventLinks.length > 0 || show.flyers) && (
                                    <>
                                        <span className="links">
                                            (
                                            {show.eventLinks.length > 0 && (
                                                <>
                                                    {show.eventLinks.map((link) => (
                                                        <span key={link.id}>
                                                            <a href={link.url}>
                                                                {link.text}
                                                            </a>
                                                        </span>
                                                    ))}
                                                </>
                                            )}
                                            {show.flyers && (
                                                <>
                                                    {show.flyers.map((flyer) => (
                                                        <span key={flyer.id}>
                                                            <a href={flyer.urlLarge}>
                                                                flyer
                                                            </a>
                                                        </span>
                                                    ))}
                                                </>
                                            )}
                                            )
                                        </span>
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <>nothing booked wow</>
            )}
        </>
    );
}
