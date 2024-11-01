import {useEffect, useState} from 'react';
import PostCard from '@/components/PostCard';
import { fetchPosts } from '@/utils/api';
import Spinner from '@/components/Spinner';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOrder, setSortOrder] = useState('desc');


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

  const sortedPosts = posts.sort((a, b) => {
    if (sortOrder === 'desc') {
      return new Date(b.date) - new Date(a.date);
    } else if (sortOrder === 'asc') {
      return new Date(a.date) - new Date(b.date);
    } else if (sortOrder === 'A-Z') {
      return a.title.localeCompare(b.title);
    } else if (sortOrder === 'Z-A') {
      return b.title.localeCompare(a.title);
  }  }
  );

  if (loading) return <div className="min-h-screen bg-background dark flex justify-center items-center">
  <Spinner />
  </div>;
  if (error) return <div>Error: {error.message}</div>;


  return (
    <div className="min-h-screen bg-background dark p-8">

      <Select onValueChange={setSortOrder} defaultValue={sortOrder} >
        <SelectTrigger className="w-[160px] text-foreground">
          <SelectValue placeholder="Sort by"/>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="desc">Newest</SelectItem>
          <SelectItem value="asc">Oldest</SelectItem>
          <SelectItem value="A-Z">A - Z by title</SelectItem>
          <SelectItem value="Z-A">Z - A by title</SelectItem>
        </SelectContent>
      </Select>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {sortedPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      </div>
    </div>
  )
}

export default HomePage