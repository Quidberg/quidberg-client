import { useState } from "react"
import { AuthRegType } from "../../app/slices/auth/types"
import { useAppDispatch, useAppSelector } from "../../app/hooks/regHook"
import { selectAuthRegType, setAuthRegType, setIsForgotPswd } from "../../app/slices/auth/authSlice"
import { AuthType } from "../../utils/enums/AuthEnum"

const useAuthModal = () => {
    const dispatch = useAppDispatch()
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
    const authType = useAppSelector(selectAuthRegType);


    const openAuthModal = (authType:AuthRegType)=>{
        dispatch(setIsForgotPswd(false))   
        dispatch(setAuthRegType(authType))
        if (!isAuthModalOpen){ 
        setIsAuthModalOpen(true)}
    }
    const closeAuthModal = ()=>{
        setIsAuthModalOpen(false)
   }


    const toggleAuthType = ()=>{
        console.log('toggle')
        if (authType === AuthType.signin){
            dispatch(setAuthRegType(AuthType.signup))
        }else{
            dispatch(setAuthRegType(AuthType.signin))

        }
    }

    const openForgotPswdModal = ()=>{
        dispatch(setIsForgotPswd(true))
        if (!isAuthModalOpen){ 
            setIsAuthModalOpen(true)}
    }


    const returnFromForgotPswdModal = ()=>{
        dispatch(setIsForgotPswd(false))

    }

  return {openAuthModal,isAuthModalOpen, closeAuthModal, toggleAuthType, openForgotPswdModal, returnFromForgotPswdModal}
}

export default useAuthModal