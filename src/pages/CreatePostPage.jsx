import { Button} from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Textarea } from '../components/ui/textarea'
import { useState } from 'react'
import { createPost } from '../utils/api'
import { useNavigate } from 'react-router-dom'

const CreatePostPage = () => {

const [author, setAuthor] = useState('');
  const [title, setTitle] = useState( '');
  const [content, setContent] = useState('');
  const [cover, setCover] = useState('');
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
      const newPost = {
      author,
      title,
      content,
      cover,
    };
    await createPost(newPost);
    navigate(`/`);

  };


  return (
    <div className="flex justify-center items-start pt-10 rounded dark text-lg bg-background text-card-foreground min-h-screen">
      <form onSubmit={handleSubmit} className="grid gap-4 py-4 min-w-[70vw]">
            <div className="grid gap-4 py-4">
            <div className="grid grid-cols-6 items-center gap-4">
                <Label htmlFor="author" className="text-right dark">
                  Author
                </Label>
                <Input
                  id="author"
                  placeholder="Alexandra Example"
                  className="col-span-5"
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-6 items-center gap-4">
                <Label htmlFor="title" className="text-right">
                  Title
                </Label>
                <Input
                  id="title"
                  placeholder="Your Title"
                  className="col-span-5"
                  rows="4"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-6 items-start gap-4">
                <Label htmlFor="content" className="text-right pt-3">
                  Content
                </Label>
                <Textarea
                  id="content"
                  placeholder="Your Text"
                  className="col-span-5 lg:min-h-[10vw]"
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-6 items-center gap-4">
                <Label htmlFor="cover" className="text-right">
                  Image
                </Label>
                <Input
                  id="title"
                  placeholder="https://unsplash.com/de/fotos/beispielfoto"
                  className="col-span-5"
                  rows="4"
                  onChange={(e) => setCover(e.target.value)}
                />
                </div>
                <div className="grid grid-cols-6 items-center gap-4">
                  <p className="col-start-2 col-span-5 text-sm text-muted-foreground">Search <a className="hover:text-foreground underline" href="https://unsplash.com/de/s/fotos/blog?license=free" target="_blank" rel="noopener noreferrer" >Unsplash</a> for your blog foto. </p>
                </div>
                <div className="flex justify-end">
                  <Button type="submit">Create Post</Button>
                </div>
            </div>
      </form>
    </div>
  )
}

export default CreatePostPage