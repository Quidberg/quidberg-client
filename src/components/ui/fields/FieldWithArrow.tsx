// import React, { memo, useState } from "react";
// import { ArrowDown } from "../../assets/svg";
// import { DropDownFieldType } from "../../../shared/types/FieldTypes";
// import { DropListType } from "../../../shared/types/RegistrationDataTypes";
// import { useListenForOutsideClicks } from "../../../shared/hooks/listenForOutsideClicks";

// const FieldWithArrowDown = memo(
//   ({
//     placeholder,
//     title,
//     list,
//     className,
//     handleListClick,
//     id,
//     value,
//     dropDownText,
//     fieldName,
//     error,
//   }: DropDownFieldType) => {
//     const [isFieldFocus, setisFieldFocus] = useState(false);
//     const [text, setText] = useState<string>("");
//     // const [arr, setArr] = useState(list);

//     const { dropdownRef } = useListenForOutsideClicks(() => {
//       console.log("first");
//       setisFieldFocus(false);
//     },isFieldFocus);

//     const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
//       const value = e.target.value;
//       setText(value);
//     };

//     const handleListAction = (item: DropListType) => {
//       handleListClick({ item, id });
//     };

//     const handleDropDown = () => {
//       setisFieldFocus(!isFieldFocus);
//     };

//     return (
//       <div className=" relative w-full flex flex-col justify-between items-center">
//         <div className="w-full min-w-fit">
//           {title && (
//             <header>
//               <h2 className="font-semibold">{title}</h2>
//             </header>
//           )}

//           {/* INPUT FIELD */}
//           <section className="relative w-full" ref={dropdownRef}>
//             {/* ARROW DOWN FIELD WITH ERROR MSG */}
//             <div>
//             <input
//                   className={`w-full bg-[inherit] border-[2px] border-light_font capitalize pl-3 ${className} placeholder:text-sm`}
//                   type="text"
//                   placeholder={placeholder}
//                   onFocus={() => setisFieldFocus(true)}
//                   onChange={handleChange}
//                   value={text}
//                   autoFocus={true}
//                   name={fieldName}
//                 />
//               <p></p>
//             </div>

//             {/* DROP DOWN LIST */}
//             {isFieldFocus && (
//               <div
//                 id={"drop-down-list"}
//                 className="flex flex-col gap-3 w-full absolute top-full bg-light_pry_bg shadow-sm p-2 z-drop_down_menu"
//               >

//                 <section className="max-h-[300px] overflow-y-scroll">
//                   {list
//                     ?.sort((a, b) => {
//                       if (a.name < b.name) {
//                         return -1;
//                       }
//                       if (a.name > b.name) {
//                         return 1;
//                       }
//                       return 0;
//                     })
//                     ?.map((item, index) => (
//                       <button
//                         className={`p-1 text-left w-full capitalize ${
//                           index < list.length - 1 ? "border-b-[0.8px]" : ""
//                         } border-light_border_color hover:bg-main_bg/20`}
//                         key={item?.id}
//                         onClick={(e) => {
//                           handleListAction(item);
//                           setisFieldFocus(false);
//                         }}
//                       >
//                         <p>{item?.name}</p>
//                       </button>
//                     ))}
//                 </section>
//               </div>
//             )}
//           </section>
//         </div>
//       </div>
//     );
//   }
// );

// export default FieldWithArrowDown;
