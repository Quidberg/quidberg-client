// A SIMPLE COMPONENT TO INDICATE COLORS IN 

type ColorCodePropType= {
    color:string;
    text:string
}

const ColorCode = ({color, text}:ColorCodePropType) => {
  return (
    <div className="flex gap-1 items-center">
        <div className={`h-3 aspect-square rounded-[20%]`} style={{backgroundColor:color}}></div>
        <p className="text-xs font-light text-light_font">{text}</p>
    </div>
  )
}

export default ColorCode