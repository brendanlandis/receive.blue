'use client';
import useAxios from 'axios-hooks';
import { Show } from '@/app/types';

export default function UpcomingShows() {
    const [{ data: shows, loading, error }, refetch] = useAxios(
        'https://api.slownames.net/api/shows?populate=*&filters[bands][id]=32'
    );

    if (loading) return <p>loading</p>;
    if (error) return <p>error</p>;

    return (
        <>
            {shows.data.map((show: Show) => (
                <div key={show.id}>
                    <div>{show.id}</div>
                </div>
            ))}
            {/* <pre>{JSON.stringify(shows, null, 2)}</pre> */}
        </>
    );
}
