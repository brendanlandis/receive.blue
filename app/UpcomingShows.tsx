'use client';
import useAxios from 'axios-hooks';
import { Show, RawShowData } from '@/app/types';

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
            doors: show.attributes.doors,
            sound: show.attributes.sound,
            venue: show.attributes.venue,
            city: show.attributes.city,
            notes: show.attributes.notes,
            otherBands: show.attributes.otherBands,
            link: show.attributes.link,
            flyers: show.attributes.flyers.data.map((flyer) => ({
                id: flyer.id,
                alt: flyer.attributes.alternativeText,
                urlLarge: flyer.attributes.url,
                urlSmall: flyer.attributes.formats.medium.url,
            })),
        }));

        return formattedShowsData;
    };

    const formattedShows = shows ? formatShows(shows) : [];

    return (
        <>
            {formattedShows.map((show: Show) => (
                <div key={show.id}>
                    <div>id: {show.id}</div>
                    <div>date: {show.date}</div>
                    <div>doors: {show.doors}</div>
                    <div>sound: {show.sound}</div>
                    <div>
                        bands:
                        <ul>
                            {show.bands.map((band) => (
                                <li>
                                    <div>- bandname: {band.bandname}</div>
                                    <div>- playing as: {band.displayBandname}</div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>venue: {show.venue}</div>
                    <div>city: {show.city}</div>
                    <div>notes: {show.notes}</div>
                    <div>other bands: {show.otherBands}</div>
                    <div>link: {show.link}</div>
                    <div>
                        flyers:
                        <ul>
                            {show.flyers.map((flyer) => (
                                <li>
                                    <div>- alt: {flyer.alt}</div>
                                    <div>- urlLarge: {flyer.urlLarge}</div>
                                    <div>- urlSmall: {flyer.urlSmall}</div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
            {/* <pre>{JSON.stringify(shows, null, 2)}</pre> */}
        </>
    );
}
