import UpdatePassword from "./UpdatePassword";
import ChangeProfilePicture from "./ChangeProfilePicture";
import EditProfile from "./EditProfile";
import DeleteAccount from "./DeleteAccount";

export default function Settings() {
  return (
    <div className=" bg-richblack-900 flex flex-col  py-10">
      {/* Main Heading */}
      <h1 className="mb-6 text-3xl text-start font-medium text-richblack-5">Edit Profile</h1>
      
      <div className="w-full max-w-4xl space-y-8">
        {/* Change Profile Picture */}
        <ChangeProfilePicture />
        
        {/* Edit Profile */}
        <EditProfile />
        
        {/* Update Password */}
        <UpdatePassword />
        
        {/* Delete Account */}
        <DeleteAccount />
      </div>
    </div>
  );
}
