import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-primary">
      <NavLink to="/"><h1 className="text-2xl font-bold italic">RETROVERSE</h1></NavLink>


      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavLink to="/create">
              <Button variant="ghost" className="font-semibold text-xl">CREATE A NEW POST</Button>
            </NavLink>
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
