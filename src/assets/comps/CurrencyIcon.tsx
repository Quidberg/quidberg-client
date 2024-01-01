import { ReactElement } from "react"

type Props = {
    children: ReactElement
}
const CurrencyIcon = ({children}:Props)=>{
    
    return(
        <div className="text-light_font text-sm">
            {children}
        </div>
    )
}

export default CurrencyIcon