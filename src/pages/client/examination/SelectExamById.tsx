// import { useParams } from "react-router-dom";
import SearchField from "../../../components/ui/fields/SearchField";

type Exam = {
  category: "year" | "custom";
  title: string;
  id: string;
  created: string;
  questions: { subject: string; total: number }[];
  currentScore: number;
};

const SelectExamById = () => {
  // const { exam } = useParams();
  const handleSearch = () => {
    return;
  };
  return (
    <div className="flex flex-col items-center">
      <SearchField
        placeholder="Search by year or id"
        handleSubmit={handleSearch}
      />
      <section></section>
    </div>
  );
};

export default SelectExamById;

type ExamCardProps = {
  examDetails: Exam;
};

export const ExamCard = ({ examDetails }: ExamCardProps) => {
  return (
    <div>
      <div>
        <p>{examDetails.title}</p>
        <p>{`${examDetails.category}: ${examDetails.id}`}</p>
      </div>
    </div>
  );
};
