import { Button } from "@/components/ui/button"
import Logo from "./Logo"

const Footer = () => {

  return (
    <div className='flex items-center w-full p-6 bg-background dark:bg-[#1F1F1F] z-50'>
        <Logo/>
        <div className="md:ml-auto flex justify-between w-full items-center md:justify-end gap-x-2 text-muted-foreground">
            <Button variant={"ghost"} size="sm">
                Privacy Policy
            </Button>

            <Button variant={"ghost"} size="sm">
                Terms & Conditions
            </Button>
        </div>
    </div>
  )
}

export default Footer