import { useNavigate } from "react-router-dom";
import { Button } from "../../../../shared/comps/ui/buttons/Button";
import FormCard from "../../../../shared/comps/ui/cards/FormCard";
import { AdminAppRoutes } from "../../../../routes/AppRoutes";

type Props = {
  meta: {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    numberOfSections: number;
  };
};

const MngClassCard = ({ meta }: Props) => {
  const navigate = useNavigate();
  const handleEditCourse = (id: string) => {
    // Logic for creating a course
    navigate(`${AdminAppRoutes.learning.edit}/${id}`);
  };
  return (
    <FormCard className="flex flex-col gap-2 h-full">
      <div className="w-full aspect-square flex">
        <img
          src={meta.imageUrl}
          alt={meta.title}
          className="w-full flex-1 bg-slate-400/50"
        />
      </div>

      <section>
        <h3 className="line-clamp-2">{meta.title}</h3>
        <p className="line-clamp-1 text-sm opacity-80">
          {meta.description}
        </p>
        <p className="line-clamp-1 opacity-70 text-sm">
          {meta.numberOfSections} sections
        </p>
      </section>
      <Button
        className="self-end"
        onClick={() => handleEditCourse(meta.id)}
      >
        Edit
      </Button>
    </FormCard>
  );
};

export default MngClassCard;
