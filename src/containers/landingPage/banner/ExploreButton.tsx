import { ReactElement } from 'react'
import OutlineButton from '../../../components/buttons/OutlineButton'
// import RightArrow from '../../../assets/comps/RightArrow'
import RightCaret from '../../../assets/comps/RightCaret'
import { useHandleNavToLink } from '../../../shared/hooks/useHandleNavLink'

type Props = {
    children: string | ReactElement
    // handleExplore: (id: string)=> void;
    image: ({color}:{color?: string})=>ReactElement
    id :string
}

const ExploreButton = ({children, image:Image, id}: Props) => {
    const {navigate} = useHandleNavToLink()

    const handleExploreButton = ()=>{
        navigate(id)
    }
  return (
    <OutlineButton onClick = {handleExploreButton} className='text-sm rounded-full border-[1.2px] botder-light_font p-2 px-3' borderColor={"#858181"}>
        <div className='flex gap-2 px-2 items-center'>
            <div className='w-6 h-6 flex items-center'>
            <Image color='#858181'/>
            </div>
            <p className='text-main_bg/70'>{children}</p>
            <div className='w-5 h-5 flex items-center'>
            <RightCaret />
            </div>
        </div>
    </OutlineButton>
  )
}

export default ExploreButton