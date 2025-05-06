
import { CircleUserRound } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

function UsernameMenu() {
    const { user, logout } = useAuth0();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-emerald-600 gap-2">
        <CircleUserRound className="text-emerald-600" />
        {user?.email}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link
            to="/manage-supplyshed"
            className="font-bold hover:text-emerald-600"
          >
            Manage Supply Warehouse
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/user-profile" className="font-bold hover:text-emerald-600">
            User Profile
          </Link>
        </DropdownMenuItem>
        <Separator />
        <DropdownMenuItem>
          <Button
            onClick={() => logout()}
            className="flex flex-1 font-bold bg-emerald-600"
          >
            Log Out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UsernameMenu