import CancelButton from "../../../components/buttons/CancelButton";
import RoundedButton from "../../../components/buttons/RoundedButton"
import { Modal } from "../../../components/modal"
import { WarningProps } from "./GenericWarningModal";

interface Props extends WarningProps {
    handleSelectExam:()=>void
}

const NoExamEntryModal = ({isOpen, close, proceed, handleSelectExam}:Props) => {
  return (
    <Modal isOpen={isOpen} close={close}>
        <div className="flex flex-col items-center justify-center p-3 py-4 md:p-8 gap-7">
            <div className="absolute top-2 right-2 md:top-4 md:right-4">
                <CancelButton onClick={close} className={"w-4 h-4"} />
            </div>
            <section className="mt-8 text-center flex flex-col gap-4 ">
                <button className="font-semibold text-[18px] md:text-lg text-main_bg hover:text-main_bg/70" onClick={handleSelectExam}>Selecting your Examination results will improve your analysis.</button>
                <p className="">Do you want to proceed without adding Examination results?</p>
            </section>
            <section className="w-full flex gap-4 justify-center">
                <RoundedButton onClick={close} isOutlined textColor="text-[#0A0A0A]" outlineColor="border-[#0A0A0A]">Cancel</RoundedButton>
                <RoundedButton onClick= {proceed}>Proceed</RoundedButton>
            </section>
        </div>
    </Modal>
  )
}

export default NoExamEntryModal