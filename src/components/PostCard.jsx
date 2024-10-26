import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const PostCard = ({ post }) => {
    const previewText = post.content.length > 50 ? post.content.slice(0, 50) + '...' : post.content;

    return (
        <Link to={`/post/${post.id}`} className="cursor-pointer transition-transform transform hover:scale-105 duration-500 ease-in-out">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">{post.title}</CardTitle>
              <CardDescription className="text-sm">by {post.author}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              {post.cover && <img src={post.cover} alt={post.title} className="w-96 h-48 object-cover" />}
              <CardDescription>{previewText}</CardDescription>
            </CardContent>
          </Card>
        </Link>
    );
};

export default PostCard;
