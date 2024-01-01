
type ClassCardPropType = {
  sections:string | number
   type:string
   rating:number
   title:string
   handleAdd: ()=> void
   handleCardClick: ()=> void
}

const ClassCard = ({sections, type, rating, title, handleAdd, handleCardClick}:ClassCardPropType) => {
  
  const handleAddAction = ()=>{
    handleAdd()
  }
  
  return (
    <div className='cursor-pointer flex flex-col w-full aspect-[1/1.2] border-main_bg  rounded-border_radius' onClick = {handleCardClick}>

        {/* PICTURE ON CARD */}
        <section className='w-full flex-1  bg-slate-500'>

        </section>

        <section className = 'w-full h-[40%] flex flex-col justify-between border p-2 md:p-3'>
          <div className='flex flex-col justify-between h-full'>
            {/* TYPE and RATING */}
            <div className="flex justify-between text-sm text-light_font">
              <p>{type}</p>
              <p>{`${rating} ratings`}</p>
            </div>

            {/* TITLE */}
              <p className="text-18 font-semibold">{title}</p>
            <div>
            </div>
          </div>
          <div className='flex justify-between'>
            <p>{`${sections} sections`}</p>
            <button onClick = {handleAddAction}>{`Add`}</button>
          </div>
        </section>
    </div>
  )
}

export default ClassCard