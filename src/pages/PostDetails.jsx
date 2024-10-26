import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchPostById } from '@/utils/api';

const PostDetails = () => {
  const { id } = useParams();
  console.log(id)
  const [post, setPost] = useState(null);

  useEffect(() => {
    const loadPost = async () => {
      const post = await fetchPostById(id);
      setPost(post);
    };
    loadPost();
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div>

      <h1>{post.title}</h1>
      {post.cover && <img src={post.cover} alt={post.title} className="w-full h-auto" />}
      <p>{post.content}</p>
    </div>
  )
}

export default PostDetails