import { toast } from "react-hot-toast"

import { setUser } from "../../slices/profileSlice"
import { apiConnector } from "../apiconnector"
import { settingsEndpoints } from "../apis"
import { logout } from "./authAPI"

const {
  UPDATE_DISPLAY_PICTURE_API,
  UPDATE_PROFILE_API,
  CHANGE_PASSWORD_API,
  DELETE_PROFILE_API,
} = settingsEndpoints

export function updateDisplayPicture(token, formData,user) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector(
        "PUT",
        UPDATE_DISPLAY_PICTURE_API,
        formData,
        {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        }
      )
      console.log(
        "UPDATE_DISPLAY_PICTURE_API API RESPONSE............",
        response
      )

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      console.log("user,......",user)
      const updatedData={...user,image:response.data.data.image}
      console.log("xxxxxx",updatedData)
      toast.success("Display Picture Updated Successfully")
      console.log("checker",response.data.data,response.data.data.image)
      dispatch(setUser({...response.data.data,image:response.data.data.image}))
      localStorage.setItem("user",JSON.stringify(updatedData ))
      console.log("hhhh")
    } catch (error) {
      console.log("UPDATE_DISPLAY_PICTURE_API API ERROR............", error)
      toast.error("Could Not Update Display Picture")
    }
    toast.dismiss(toastId)
  }
}

export function updateProfile(token, formData) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector("PUT", UPDATE_PROFILE_API, formData, {
        Authorization: `Bearer ${token}`,
      })
      console.log("UPDATE_PROFILE_API API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
     
     
      // const { firstName, lastName, image, additionalDetails } = response.data.updatedUser.userDetails;
      console.log("fmmmmmmm",response.data.updatedUser);
      console.log("l",response.data.updatedUser.lastName);
      console.log("f",response.data.updatedUser.firstName);
      console.log("g",response.data.updatedUser.additionalDetails.gender);

      
      
      // const userImage = response.data.updatedUser.image
      //   ? response.data.updatedUser.image
      //   : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data..firstName} ${response.data.updatedUser.lastName}`
      

  const userImage=`https://api.dicebear.com/5.x/initials/svg?seed=${response.data.updatedUser.firstName} ${response.data.updatedUser.lastName}`

        console.log("ImageURL",userImage);
      
         
        dispatch(setUser({ ...response.data.updatedUser, image: userImage }))
        
      
      localStorage.setItem("user",JSON.stringify(response.data.updatedUser ))
      
      toast.success("Profile Updated Successfully")
    } catch (error) {
      console.log("UPDATE_PROFILE_API API ERROR............", error)
      toast.error("Could Not Update Profile")
    }
    toast.dismiss(toastId)
  }
}

export async function changePassword(token, formData) {
  const toastId = toast.loading("Loading...")
  try {
    console.log("Checker---->",CHANGE_PASSWORD_API)
    const response = await apiConnector("POST", CHANGE_PASSWORD_API, formData, {
      Authorization: `Bearer ${token}`,
    })
    console.log("CHANGE_PASSWORD_API API RESPONSE............", response)

    if (!response.data.success) {
      throw new Error(response.data.message)
    }
    toast.success("Password Changed Successfully")
  } catch (error) {
    console.log("CHANGE_PASSWORD_API API ERROR............", error)
    toast.error(error.response.data.message)
  }
  toast.dismiss(toastId)
}

export function deleteProfile(token, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    try {
        console.log("API checker",DELETE_PROFILE_API)
      const response = await apiConnector("DELETE", DELETE_PROFILE_API,null, {
        Authorization: `Bearer ${token}`,
      })
  
       console.log("hello")
      console.log("DELETE_PROFILE_API API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      toast.success("Profile Deleted Successfully")
      dispatch(logout(navigate))
    } catch (error) {
      console.log("DELETE_PROFILE_API API ERROR............", error)
      toast.error("Could Not Delete Profile")
    }
    toast.dismiss(toastId)
  }
}

