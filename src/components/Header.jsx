import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-primary">
      <Link to="/"><h1 className="text-xl font-bold">My Blog</h1></Link>


      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to="/create">
              <Button variant="ghost" className="font-semibold text-xl">CREATE A NEW POST</Button>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* User Profile Avatar */}
      <Avatar>
        <AvatarImage src="https://avatar.url/user.jpg" alt="User" />
        <AvatarFallback>YOU</AvatarFallback>
      </Avatar>
    </header>
  )
}

export default Header
