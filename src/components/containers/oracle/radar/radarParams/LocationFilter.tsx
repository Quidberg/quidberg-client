import FieldWithArrowDown from "../../../../ui/fields/FieldWithArrowDown"

const LocationFilter = () => {
    const handleLocationSelect = ()=>{
        
    }
  return (
    <div>
        <FieldWithArrowDown
        placeholder="Search for states in Nigeria"
        dropDownText = 'Where do you want to study?'
        title="Location"
        id= ""
        value= ""
        handleListClick={handleLocationSelect}
        titleClassName="font-normal"
        />
    </div>
  )
}

export default LocationFilter