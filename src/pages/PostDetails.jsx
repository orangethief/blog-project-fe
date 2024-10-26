import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchPostById } from '@/utils/api';
import { getFirstSentence, formatDate } from '@/utils/utils';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { c } from 'vite/dist/node/types.d-aGj9QkWt';

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

  const firstSentence = getFirstSentence(post.content);
  const formattedDate = formatDate(post.date);

  return (
    <div className="min-h-screen p-6 bg-background dark text-foreground">

          <Card className="border-none">
            <CardHeader className="p-8">
              <CardTitle className="text-4xl text-center font-extrabold uppercase tracking-wider mb-1">{post.title}</CardTitle>
              <CardDescription className="text-sm text-center">{firstSentence}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="max-h-[25vh] lg:max-h-[50vh] overflow-hidden">
                {post.cover && <img src={post.cover} alt={post.title} className="w-full max-h-[25vh] lg:max-h-[50vh] object-cover" />}
              </div>
              <CardDescription className="italic text-bold">written by {post.author}</CardDescription>
              <CardDescription className="italic text-bold">Published on {formattedDate}</CardDescription>
              <CardDescription>{post.content}</CardDescription>
            </CardContent>
          </Card>
    </div>
  )
}

export default PostDetails