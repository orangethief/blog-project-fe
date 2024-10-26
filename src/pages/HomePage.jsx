import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import PostCard from '@/components/PostCard';
import { fetchPosts } from '@/utils/api';
import { Button } from '../components/ui/Button'

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const postsData = await fetchPosts();
        setPosts(postsData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getPosts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;


  return (
    <div className="min-h-screen bg-background dark p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      </div>
    </div>
  )
}

export default HomePage