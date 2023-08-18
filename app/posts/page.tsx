import { Inter } from 'next/font/google';
import axios from 'axios';

const inter = Inter({ subsets: ['latin'] });

const getPosts = async (): Promise<any[]> => {
  const data = await axios.get('https://jsonplaceholder.typicode.com/posts');
  const posts = await data.data;

  return posts;
};

export const revalidate = 0;

export default async function Posts() {
  const posts = await getPosts();
  console.log(posts);

  return (
    <div className={inter.className}>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
