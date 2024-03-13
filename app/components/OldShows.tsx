'use client';
import useAxios from 'axios-hooks';
import { Show, RawShowData } from '@/app/types';
import { Masonry } from 'react-plock';
import { GetShowDetails } from './GetShowDetails';

// TODO if two of our bands are playing, the one that isn't Receive should be added to the otherBands field

export default function OldShows() {
    const [{ data: shows, loading, error }, refetch] = useAxios(
        'https://api.slownames.net/api/shows?populate=deep&filters[myBand][band][id]=32'
    );

    if (loading) return <p>loading</p>;
    if (error) return <p>error</p>;

    const formatShows = (shows: { data: RawShowData[] }): Show[] => {
        return shows.data.map(GetShowDetails);
    };

    // format the shows
    const formattedShows = shows ? formatShows(shows) : [];

    // sort the shows from newest to oldest
    const sortedShows = formattedShows.sort((b, a) => new Date(a.date).getTime() - new Date(b.date).getTime());

    // filter the shows:
    // - only keep shows that have already happened
    // - only keep shows that have flyers
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 1);
    const filteredShows = sortedShows
        .filter((show) => new Date(show.date) <= currentDate)
        .filter((show) => show.flyers && show.flyers.length > 0);

    const MasonryImages = filteredShows.reduce(
        (images: { urlSmall: string; urlLarge: string }[], show) =>
            images.concat(
                show.flyers?.map((flyer) => ({
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
                            <img key={idx} src={item.urlSmall} style={{ width: '100%', height: 'auto' }} />
                        </a>
                    </>
                )}
            />
        </div>
    );
}
