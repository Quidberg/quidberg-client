
export type UserIdPropType = {
    fullName: string;
    userName: string;
    dateJoined: string
    pic: string
}

const UserId = ({fullName, userName, dateJoined, pic}: UserIdPropType) => {
  return (
    <div className='flex gap-3'>
        {/* PICTURE */}
        <section className='h-20 aspect-square sm:h-[8rem] xl:h-[10rem] rounded-[24%] bg-light_gray_bg'>
            <img src={pic} alt="avatar" />
        </section>

        {/* INFO */}
        <section className='flex flex-col justify-between gap-3 text-[0.9rem] sm:text-base'>
            <div className='flex flex-col'>
                <p className='font-medium'>{fullName}</p>
                <p className='font-light text-xs sm:text-sm text-light_font'>{userName}</p>
            </div>

            {/* DATE JOINED */}
            <p className="text-xs sm:text-sm text-light_font">{dateJoined}</p>
        </section>
    </div>
  )
}

export default UserId