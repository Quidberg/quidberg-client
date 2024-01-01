
import GenericWarningModal, { WarningProps } from "./GenericWarningModal";

const RemoveExamWarningModal = ({isOpen, close, proceed, }:WarningProps) => {
  return (      
    <GenericWarningModal proceedButtonText="Remove" close={close} isOpen={isOpen} proceed={proceed} warningMsg="Removing this Examination will delete the grades you have entered" headerText="Are you sure you want to remove this Examination?"/>      
  )
}

export default RemoveExamWarningModal



