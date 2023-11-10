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
            date: post.attributes.date,
            headline: post.attributes.headline,
            text: post.attributes.text,
            attachments: post.attributes.attachments.map((attachment) => ({
                id: attachment.id,
                text: attachment.linkText,
                url: `${process.env.NEXT_PUBLIC_STRAPI_URL}${attachment.file.data.attributes.url}`,
            })),
        }));

        return formattedPostsData;
    };

    const formattedPosts = posts ? formatPosts(posts) : [];

    return (
        <>
            {formattedPosts.map((post: Post) => (
                <div className="post" key={post.id}>
                    <div>date: {post.date}</div>
                    <div>headline: {post.headline}</div>
                    <div>text: {post.text}</div>
                    <div>
                        {post.attachments.map((attachment) => (
                            <div>
                                <a href={attachment.url} key={attachment.id}>
                                    {attachment.text}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
        </>
    );
}
