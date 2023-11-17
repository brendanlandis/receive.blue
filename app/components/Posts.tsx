'use client';
import useAxios from 'axios-hooks';
import { Post, RawPostData } from '@/app/types';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';

// TODO if the post is about two of our bands, the one that isn't Receive should be added to the otherBands field

export default function Posts() {
    const [{ data: posts, loading, error }, refetch] = useAxios(
        'https://api.slownames.net/api/posts?populate=deep&filters[bands][id]=32'
    );

    if (loading) return <p>loading</p>;
    if (error) return <p>error</p>;

    const formatPosts = (posts: { data: RawPostData[] }): Post[] => {
        const formattedPostsData: Post[] = posts.data.map((post) => ({
            id: post.id,
            realDate: post.attributes.date,
            date: format(parseISO(post.attributes.date), 'MMMM do, GGGG yyyy'),
            headline: post.attributes.headline,
            text: post.attributes.text,
            attachments: post.attributes.attachments.map((attachment) => ({
                id: attachment.id,
                text: attachment.linkText,
                url: attachment.file.data
                    ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${attachment.file.data.attributes.url}`
                    : '',
            })),
        }));

        formattedPostsData.sort(
            (a, b) =>
                new Date(b.realDate).getTime() - new Date(a.realDate).getTime()
        );
        const currentDate = new Date();
        const filteredPostsData = formattedPostsData.filter(
            (post) => new Date(post.realDate) <= currentDate
        );

        return filteredPostsData;
    };

    const formattedPosts = posts ? formatPosts(posts) : [];

    return (
        <>
            {formattedPosts.map((post: Post) => (
                <div className="post" key={post.id}>
                    <div className="post-header">
                        <div className="post-headline">{post.headline}</div>
                        <div className="post-date">{post.date}</div>
                    </div>
                    <div className="post-text">{post.text}</div>
                    <div className="post-links">
                        {post.attachments.map((attachment) => (
                            <a href={attachment.url} key={attachment.id}>
                                {attachment.text}
                            </a>
                        ))}
                    </div>
                </div>
            ))}
            {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
        </>
    );
}
