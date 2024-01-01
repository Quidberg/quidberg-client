export function capitalize(str?: string) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function pxToRem(value: number | string): string {
  if (typeof value === "number") {
    return `${value / 16}`;
  }
  if (typeof value === "string") {
    return `${parseInt(value) / 16}`;
  }
  return "1";
}

export const sizeConverterTW = (
  { width, height }: { width: string | number; height: string | number },
  sizeType?: "px" | "rem" | "em"
) => {
  // CONVERTS SIZES TO TAILWIND LINGO
  switch (sizeType) {
    case "px":
      return `w-${pxToRem(width)} h-${pxToRem(height)}`;
    case "rem":
    case "em":
      return `w-${width} h-${height}`;
    default:
      return `w-${width} h-${height}`;
  }
};

export function stringParser(payload?:string|null|number):string{
  payload = String(payload)
  return (payload ? payload : 'n/a')
}

export function classConverter(grade: number | string){
    grade = Number(grade)
    if (grade >= 7 && grade <=9) {
      return{sec:`JS ${grade - 6}`, grade:`Grade ${grade}`}
    } 
    else if(grade >= 10 && grade <=12){
      return{sec:`SS ${grade - 9}`, grade:`Grade ${grade}`}

    }else{
      return{sec:`N/A`, grade:`N/A`}

    }
  
}

export function numToCurrency({ value, currency}:{currency: string, value:number}){
  let formatCurrency = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: currency
  });

  return formatCurrency.format(value)
}

// export function curToNumber({ value, currency}:{currency: string, value:string}){
//   let formatCurrency = new Intl.NumberFormat('en-NG', {
//     style: 'number',
//     currency: currency
//   });

//   return formatCurrency.format(value)
// }



