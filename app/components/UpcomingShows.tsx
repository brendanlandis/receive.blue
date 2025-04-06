'use client';
// import useAxios from 'axios-hooks';
// import { Show, RawShowData } from '@/app/types';
// import { Masonry } from "react-plock";
// import { GetShowDetails } from './GetShowDetails';

// TODO if two of our bands are playing, the one that isn't Receive should be added to the otherBands field

export default function UpcomingShows() {
  // const [{ data: shows, loading, error }] = useAxios(
  //   'https://api.slownames.net/api/shows?populate=deep&filters[myBand][band][id]=32'
  // );

  // if (loading) return <p>loading</p>;
  // if (error) return <p>error</p>;

  // const formatShows = (shows: { data: RawShowData[] }): Show[] => {
  //   return shows.data.map(GetShowDetails);
  // };

  // const formattedShows = shows ? formatShows(shows) : [];

  // const formatUpcomingShows = (shows: { data: RawShowData[] }): Show[] => {
  //   // sort shows by date
  //   formattedShows.sort(
  //     (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  //   );

  //   // filter out shows that have already happened
  //   // and shows that are cancelled
  //   const currentDate = new Date();
  //   currentDate.setDate(currentDate.getDate() - 1);
  //   const filteredShowsData = formattedShows
  //     .filter((show) => new Date(show.date) >= currentDate)
  //     .filter((show) => show.cancelled === false);
  //   return filteredShowsData;
  // };

  // const formatLastShow = (shows: { data: RawShowData[] }): Show | null => {
  //   const currentDate = new Date();

  //   const mostRecentShow = formattedShows.reduce(
  //     (maxShow: Show | null, show) => {
  //       const showDate = new Date(show.date);

  //       if (
  //         showDate < currentDate &&
  //         show.documentation &&
  //         show.documentation.some(
  //           (doc) => doc.usable === true && doc.mime.includes('image')
  //         )
  //       ) {
  //         if (!maxShow || showDate > new Date(maxShow.date)) {
  //           return show;
  //         }
  //       }
  //       return maxShow;
  //     },
  //     null
  //   );

  //   return mostRecentShow;
  // };

  // const upcomingShows = shows ? formatUpcomingShows(shows) : [];

  // const lastShow: Show | null = shows ? formatLastShow(shows) : null;

  // const MasonryImages =
  //   (lastShow?.documentation || [])
  //     .filter((photo) => photo.mime.includes('image') && photo.usable === true)
  //     .map((photo) => ({
  //       urlSmall: photo.urlSmall,
  //       urlLarge: photo.urlLarge,
  //     })) || [];

  return (
    <>
      <div className="shows">
        <h2>shows</h2>
      </div>
    </>
  );
}
