import { useEffect, useState } from "react";
import TitleWithSub from "../../../../../shared/comps/ui/styledTexts/TitleWithSub";
import AddExamination from "./AddExamination";
import { TrashIcon } from "../../../../../assets/svg";
import ExaminationEntryForm from "./ExaminationEntryForm";
import {
  removeExaminationTaken,
  selectCourseData,
  selectUniversityData,
  // setExaminations,
  // selectExaminationTaken,
  setExaminationTaken,
  selectExaminationTaken,
} from "../../../store/slices/oracleRegistration/registrationSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../store/hooks/regHook";
import NoEntry from "../../../../../shared/comps/ui/info/NoEntry";
import RoundedButton from "../../../../../shared/comps/ui/buttons/RoundedButton";
import ExaminationCheckList from "./ExaminationCheckListModal";
import { ExaminationCheckListType } from "../../../../../shared/types/RegistrationDataTypes";
import { ExaminationType } from "../../../store/slices/oracleRegistration/types";
import { useDisclosure } from "../../../../../shared/comps/ui/modal/useDisclosure";
import { Modal } from "../../../../../shared/comps/ui/modal";
import useAddExam from "./useAddExam";
import useNavRegPage from "../../../../../shared/hooks/navRegPage";
import NoExamEntryModal from "../../modals/warningModal/NoExamEntryModal";
import { useFetchExamsData } from "../hooks/fetchExamsData";
// import GenericWarningModal from "../../modals/warningModal/GenericWarningModal";
import RemoveExamWarningModal from "../../modals/warningModal/RemoveExamWarningModal";

const ExaminationSelectionForm = () => {
  // const examinationTaken = useAppSelector(selectExaminationTaken);
  const examinationTakenComponent = useAppSelector(
    selectExaminationTaken
  );
  const selectedUniversity = useAppSelector(selectUniversityData);
  const selectedCourse = useAppSelector(selectCourseData);

  const dispatch = useAppDispatch();

  // REACT STATE
  const [examinationList, setExaminationList] = useState<
    ExaminationCheckListType[]
  >([]);

  const [isExamListEmpty, setIsExamListEmpty] = useState(false);
  const [validate, setValidate] = useState(false);
  const [examToRemoveId, setExamToRemoveId] = useState("");

  // HOOKS
  const { setExamTakenList } = useAddExam();
  const { handleNextStep, handleBackStep } = useNavRegPage();
  const {
    isOpen: isExamListOpen,
    close: closeExamListModal,
    open: openExamListModal,
  } = useDisclosure();

  const {
    isOpen: isNoEntryModalOpen,
    close: closeNoEntryModal,
    open: openNoEntryModal,
  } = useDisclosure();
  const {
    isOpen: isOpenRemoveExamWarningModal,
    close: handleCloseRemoveExamWarningModal,
    open: openRemoveExamWarningModal,
  } = useDisclosure();
  const { handleFetchExamsData } = useFetchExamsData();
  // const { setSchoolUpdateFalse, isSchoolDataUpdated } = watchSchoolRegStep(
  //   examinationTakenComponent
  // );

  const handleAddExamModal = () => {
    openExamListModal();
  };

  useEffect(() => {
    // Set accepted examinations based on the university
    if (!isExamListOpen) return;
    if (selectedUniversity)
      setExaminationList(
        selectedUniversity?.applicableExaminations
          // .filter(
          //   (exam) =>
          //     !Boolean(
          //       examinationTakenComponent?.find(
          //         (examToFind) => examToFind.id === exam.id
          //       )
          //     )
          // )
          .map((exam) => ({
            ...exam,
            isChecked: false,
            isAlreadySelected:
              examinationTakenComponent?.some(
                (e) => e?.id === exam?.id
              ) || false,
          }))
      );
  }, [isExamListOpen]);

  const handleCloseExamList = () => {
    closeExamListModal();
  };

  const handleCheckExam = (examSelected: ExaminationType) => {
    setIsExamListEmpty(false);

    setExaminationList(
      // updates the exam list before applying to exam taken list
      examinationList.map((exam) => {
        if (exam?.id === examSelected?.id)
          return { ...exam, isChecked: !exam?.isChecked };
        return exam;
      })
    );
  };

  const handleApplyExams = () => {
    // Apply the selected examinations
    if (!examinationList.some((exam) => exam.isChecked)) {
      return setIsExamListEmpty(true);
    }

    // Populate the exam field
    const selectedExams: ExaminationType[] = [];

    examinationList.forEach((exam) => {
      if (exam.isChecked || exam.isAlreadySelected) {
        selectedExams.push(exam);
      }
    });

    if (selectedExams.length) {
      handleFetchExamsData({ exams: selectedExams });
    }

    // Reset
    setExamTakenList([]);
    closeExamListModal();
  };

  const handleExamFormRemove = (id?: string) => {
    if (isOpenRemoveExamWarningModal && examToRemoveId) {
      dispatch(removeExaminationTaken(examToRemoveId));
      handleCloseRemoveExamWarningModal();
      setExamToRemoveId("");
    } else {
      openRemoveExamWarningModal();
      id && setExamToRemoveId(id);
    }
  };

  const checkError = () => {
    return examinationTakenComponent?.some((exam) =>
      exam?.subjectsAndGrades?.some((sub) => !sub?.grade?.value)
    );
  };

  const proceed = () => {
    if (checkError()) {
      return setValidate(true);
    }

    // dispatch value
    if (examinationTakenComponent) {
      dispatch(
        setExaminationTaken(
          examinationTakenComponent.map((exam) => ({
            name: exam.name,
            id: exam.id,
            subjectsAndGrades: exam.subjectsAndGrades,
          }))
        )
      );
      handleNextStep();
    }
  };

  const handleProceed = () => {
    if (!examinationTakenComponent?.length) {
      openNoEntryModal();
    } else {
      proceed();
    }
  };

  const handleSelectExam = () => {
    closeNoEntryModal();
    openExamListModal();
  };

  return (
    <div className="w-full max-w-[700px] flex flex-col items-center">
      <TitleWithSub
        title="Select Available Result Below"
        subtitle="Add available results to improve your analysis or skip this step"
        className="mb-6"
      />

      {/* MODALS */}
      {isExamListOpen && (
        <Modal isOpen={isExamListOpen} close={closeExamListModal}>
          <ExaminationCheckList
            handleClose={handleCloseExamList}
            examinationList={examinationList}
            onCheck={(exam: ExaminationType) => {
              handleCheckExam(exam);
            }}
            onApply={handleApplyExams}
            isExamListEmpty={isExamListEmpty}
            selectedUniversity={selectedUniversity}
            selectedExams={examinationTakenComponent || []}
          />
        </Modal>
      )}
      <NoExamEntryModal
        close={closeNoEntryModal}
        isOpen={isNoEntryModalOpen}
        proceed={handleNextStep}
        handleSelectExam={handleSelectExam}
      />

      {/* <UpdatedDataModal
        isOpen={isSchoolDataUpdated}
        close={setSchoolUpdateFalse}
      /> */}

      <RemoveExamWarningModal
        close={handleCloseRemoveExamWarningModal}
        isOpen={isOpenRemoveExamWarningModal}
        proceed={handleExamFormRemove}
      />

      <main className="w-full max-w-[500px] flex flex-col gap-4 items-center py-4">
        {/* ADD RESULTS BUTTON */}
        {!isExamListOpen && (
          <AddExamination
            isActive={false}
            onClick={handleAddExamModal}
          />
        )}

        {/* EXAMINATION FORMS */}
        {examinationTakenComponent?.length ? (
          examinationTakenComponent?.map((exam) => (
            <ExaminationEntryForm
              key={exam.name}
              title={exam.title ?? exam.name}
              subtitle="Please fill in the field appropriately"
              total={selectedCourse?.subjectsAccepted.length || 2}
              id={exam?.id}
              handleEntryFormEdit={handleExamFormRemove}
              examData={exam}
              validate={validate}
              editImage={TrashIcon}
              editText="Remove"
            />
          ))
        ) : (
          <div className="py-4">
            <NoEntry />
          </div>
        )}

        {/* ACTION BUTTONS */}
        <section className="flex gap-6 justify-between">
          <RoundedButton onClick={handleBackStep} isOutlined>
            Go Back
          </RoundedButton>
          <RoundedButton onClick={handleProceed}>
            Proceed
          </RoundedButton>
        </section>
      </main>
    </div>
  );
};

export default ExaminationSelectionForm;
