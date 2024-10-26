import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchPostById, deletePost } from '@/utils/api';
import { getFirstSentence, formatDate } from '@/utils/utils';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/Button';
import { SquareArrowLeft } from 'lucide-react';


const PostDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const loadPost = async () => {
      const post = await fetchPostById(id);
      setPost(post);
    };
    loadPost();
  }, [id]);

  const handleDelete = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this post?');
    if (confirmDelete) {
      await deletePost(id);
      navigate('/');
    }
  };

  if (!post) return <p>Loading...</p>;

  const firstSentence = getFirstSentence(post.content);
  const formattedDate = formatDate(post.date);

  return (
    <div className="min-h-screen py-6 bg-background dark text-foreground">

          <Card className="border-none">
            <Link to="/" className="cursor-pointer">
              <SquareArrowLeft className="text-primary h-12 w-12 ml-6 hover:text-primary/90" />
            </Link>
            <CardHeader className="p-8">
              <CardTitle className="text-4xl text-center font-extrabold uppercase tracking-wider mb-1">{post.title}</CardTitle>
              <CardDescription className="text-sm text-center">{firstSentence}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="max-h-[25vh] lg:max-h-[50vh] overflow-hidden">
                {post.cover && <img src={post.cover} alt={post.title} className="w-full max-h-[25vh] lg:max-h-[50vh] object-cover" />}
              </div>

              <CardDescription className="text-bold ">
                <div className="italic pb-1">written by {post.author}</div>
                <div>Published on {formattedDate}</div>
              </CardDescription>
              <CardDescription className="italic text-bold"></CardDescription>
              <CardDescription>{post.content}</CardDescription>
            </CardContent>
            <CardFooter className="flex justify-center space-x-4">
              <Button>Edit Post</Button>
              <Button variant="destructive" onClick={handleDelete}>Delete Post</Button>
            </CardFooter>
          </Card>
    </div>
  )
}

export default PostDetails