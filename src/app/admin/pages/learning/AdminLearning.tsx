import { useNavigate } from "react-router-dom";
import { Button } from "../../../../shared/comps/ui/buttons/Button";
import MngClassCard from "../../containers/learning/mngClassCard";
import { dummyLearningData } from "../../data/learningData";
import { AdminAppRoutes } from "../../../../routes/AppRoutes";

const AdminLearning = () => {
  const navigate = useNavigate();
  const handleCreateCourse = () => {
    // Logic for creating a course
    navigate(`${AdminAppRoutes.learning.create}`);
  };
  return (
    <div className="w-full flex flex-col items-center gap-3">
      <Button className="self-start" onClick={handleCreateCourse}>
        Create Course
      </Button>

      <section className="w-full max-w-[1200px] flex flex-col gap-3">
        <p>All Classes</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6">
          {dummyLearningData?.map((item) => (
            <MngClassCard key={item.id} meta={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AdminLearning;
