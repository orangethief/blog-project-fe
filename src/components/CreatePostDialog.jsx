import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Textarea } from "./ui/textarea";
import { createPost } from "@/utils/api";
import { Navigate, useNavigate } from "react-router-dom";



export function EditPostDialog({ post }) {
  const [isOpen, setIsOpen] = useState(false);
  const [author, setAuthor] = useState(post.author);
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const [cover, setCover] = useState(post.cover);
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
    setIsOpen(false);
    navigate(`/`);

  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen} className="dark">
      <div className="flex justify-center items-center rounded dark text-lg">
        <DialogTrigger asChild>
          <Button  onClick={() => setIsOpen(true)} className="px-4 py-4">
            Edit Post
          </Button>
        </DialogTrigger>
      </div>
      <DialogContent className="sm:max-w-[500px] lg:min-w-[40vw] text-card-foreground">
        <DialogHeader>
          <DialogTitle>Edit Post</DialogTitle>
          <DialogDescription>
            Edit the Post and save changes, when you are done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="author" className="text-right">
                Author
              </Label>
              <Input
                id="author"
                placeholder="Alexandra Example"
                className="col-span-3"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input
                id="title"
                placeholder="Your Title"
                className="col-span-3"
                rows="4"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 items-start gap-4">
              <Label htmlFor="content" className="text-right pt-3">
                Content
              </Label>
              <Textarea
                id="content"
                placeholder="Your Text"
                className="col-span-3 lg:min-h-[10vw]"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="cover" className="text-right">
                Image
              </Label>
              <Input
                id="title"
                placeholder="https://unsplash.com/de/fotos/beispielfoto"
                className="col-span-3"
                rows="4"
                value={cover}
                onChange={(e) => setCover(e.target.value)}
              />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
              <p className="col-start-2 col-span-3 text-sm text-muted-foreground">Search <a className="hover:text-foreground underline" href="https://unsplash.com/de/s/fotos/blog?license=free" target="_blank" rel="noopener noreferrer" >Unsplash</a> for your blog foto. </p>
              </div>

          </div>

        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default EditPostDialog;