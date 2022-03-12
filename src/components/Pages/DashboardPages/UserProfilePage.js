import Sidebar from "../../dashboard/Sidebar.js";
import UserProfile from "../../dashboard/UserProfile.js"

export default function UserProfilePage() {

    return (
        <div>
            <Sidebar isMain={false} />
            <UserProfile />
        </div>
    );
}