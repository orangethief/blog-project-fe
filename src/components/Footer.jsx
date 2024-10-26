import { Button } from "@/components/ui/button"

const Footer = () => {
  return (
    <footer className="flex items-center justify-between p-4 bg-primary">
      <p>© 2024 My Blog. All rights reserved.</p>
      <div className="flex space-x-4">
        <Button variant="link" className="text-black">Privacy Policy</Button>
        <Button variant="link" className="text-black">Terms of Service</Button>
      </div>
    </footer>
  )
}

export default Footer
