import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from './ui/badge.jsx';



const PostCard = ({ post }) => {

    return (
        <Link to={`/post/${post.id}`} className="cursor-pointer transition-transform transform hover:scale-105 duration-500 ease-in-out">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl min-h-[5.1rem] ">{post.title}</CardTitle>
              <CardDescription className="text-sm">
                <Badge  className="rounded-md">{post.author}
                </Badge>
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              {post.cover && <img src={post.cover} alt={post.title} className="w-96 h-48 object-cover" />}
              <CardDescription className="line-clamp-2">{post.content}</CardDescription>
            </CardContent>
          </Card>
        </Link>
    );
};

export default PostCard;
