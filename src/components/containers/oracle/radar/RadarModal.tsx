// Radar is shown in a modal for smaller devices

import { Modal } from "../../../ui/modal"
import Radar from "./Radar";

type Props = {
    isOpen : boolean;
    close : ()=> void
}

const RadarModal = ({close, isOpen}:Props) => {
  return (
    <Modal close={close} isOpen={isOpen} dialogClassName="p-4">
        <Radar/>
    </Modal >
  )
}

export default RadarModal