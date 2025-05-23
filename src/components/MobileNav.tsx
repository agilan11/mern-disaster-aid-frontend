import { CircleUserRound, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from './MobileNavLinks';


function MobileNav() {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-emerald-600"/>
      </SheetTrigger>
      <SheetContent className="space-y-3">
      {isAuthenticated ? (
            <span className="flex items-center font-bold gap-2">
              <CircleUserRound className="text-emerald-600" />
              {user?.email}
            </span>
          ) : (
            <span> Welcome to DisasterAid!</span>
          )}
        <Separator />
        <SheetDescription className="flex flex-col gap-4">
          {isAuthenticated ? (
              <MobileNavLinks />
            ) : (
              <Button
                onClick={() => loginWithRedirect()}
                className="flex-1 font-bold bg-emerald-600"
              >
                Log In
              </Button>
            )}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav