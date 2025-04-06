"use client";
import useAxios from "axios-hooks";
import {
  BlocksRenderer,
} from "@strapi/blocks-react-renderer";
import { Post, RawPostData } from "@/app/types";
import { format } from "date-fns/format";
import { parseISO } from "date-fns/parseISO";

export default function Posts() {
  const [{ data: posts, loading, error }] = useAxios(
    "https://slownames.net/api/posts?populate=*&filters[band][name]=Receive&pagination[page]=1&pagination[pageSize]=5&sort=id:desc"
  );

  if (loading) return <p>loading</p>;
  if (error) return <p>error</p>;

  const formatPosts = (posts: { data: RawPostData[] }): Post[] => {
    const formattedPostsData: Post[] = posts.data.map((post) => ({
      id: post.id,
      realDate: post.date,
      date: format(parseISO(post.date), "MMMM do, GGGG yyyy"),
      headline: post.headline,
      text: post.text,
    }));

    formattedPostsData.sort(
      (a, b) => new Date(b.realDate).getTime() - new Date(a.realDate).getTime()
    );
    const currentDate = new Date();
    const filteredPostsData = formattedPostsData.filter(
      (post) => new Date(post.realDate) <= currentDate
    );

    return filteredPostsData;
  };

  const formattedPosts = posts ? formatPosts(posts) : [];

  return (
    <div className="posts">
      {formattedPosts.map((post: Post) => (
        <div className="post" key={post.id}>
          <div className="post-header">
            {post.headline && <h2>{post.headline}</h2>}
            <div className="post-date">{post.date}</div>
          </div>
          <div className="post-text">
            <BlocksRenderer content={post.text} />
          </div>
        </div>
      ))}
    </div>
  );
}
