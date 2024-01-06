'use client';
import useAxios from 'axios-hooks';
import { Tab, RawTabData } from '@/app/types';

// TODO if the post is about two of our bands, the one that isn't Receive should be added to the otherBands field

export default function Tabs() {
    const [{ data: tabs, loading, error }, refetch] = useAxios(
        'https://api.slownames.net/api/tabs?populate=*&filters[bands][id]=32&pagination[page]=1&pagination[pageSize]=5&sort=id:desc'
    );

    if (loading) return <p>loading</p>;
    if (error) return <p>error</p>;

    const formatTabs = (tabs: { data: RawTabData[] }): Tab[] => {
        const formattedTabsData: Tab[] = tabs.data.map((tab) => ({
            id: tab.id,
            date: tab.attributes.createdAt,
            url: tab.attributes.url,
            linkText: tab.attributes.linkText,
            description: tab.attributes.description,
        }));

        formattedTabsData.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        const currentDate = new Date();
        const filteredPostsData = formattedTabsData.filter(
            (post) => new Date(post.date) <= currentDate
        );

        return filteredPostsData;
    };

    const formattedTabs = tabs ? formatTabs(tabs) : [];

    return (
        <>
            {formattedTabs.map((tab: Tab) => (
                <div className="opentab" key={tab.id}>
                    <a href={tab.url} target="_blank">
                        {tab.linkText}
                    </a>
                    <div className='tab-description'>{tab.description}</div>
                </div>
            ))}
        </>
    );
}
