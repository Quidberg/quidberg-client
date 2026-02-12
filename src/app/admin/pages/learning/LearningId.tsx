import { Input } from "../../../../shared/comps/ui/input/Input";
import FormCard from "../../../../shared/comps/ui/cards/FormCard";
import { Button } from "../../../../shared/comps/ui/buttons/Button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../shared/comps/ui/input/select";
import { useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { z } from "zod";
import { sectionSchema } from "../../libs/dto/learning/section";
// import { dummySectionList } from "../../data/learningData";
import {
  DraggableList,
  SortableItem,
} from "../../../../shared/comps/ui/list/DraggableList";

const sectionTypeOptions = [
  { id: "video", name: "video" },
  { id: "article", name: "article" },
  { id: "quiz", name: "quiz" },
];

type SectionType = Omit<
  Partial<z.infer<typeof sectionSchema>>,
  "id"
> & { id: string };

// const newSectionCard = {
//   title: "",
//   type: "",
//   lecture: z.instanceof(File),}

const fileTypes = ["mp4", "webm"];

const LearningId = () => {
  const [sectionList, setSectionList] = useState<SectionType[]>([]);
  const [videoFile, setVideoFile] = useState<File | null | File[]>(
    null
  );
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleSectionType = (
    value: "video" | "article" | "quiz",
    currentSectionId: string
  ) => {
    // Update the section type in the section list
    setSectionList((prev) =>
      prev.map((section) =>
        section.id === currentSectionId
          ? { ...section, type: value }
          : section
      )
    );
  };

  const handleFileChange = (val: File | File[]) => {
    if (!val) return;

    // Keep the original value in state (File or File[] as the uploader may return either)
    setVideoFile(val);

    // Ensure we pass a single File/Blob to createObjectURL
    const file = Array.isArray(val) ? val[0] : val;
    if (!file) return;

    // Create preview URL
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
  };

  const updateSectionList = (val: SectionType[]) => {
    setSectionList(val);
  };

  useEffect(
    // watch for change in section and update order
    () => {
      setSectionList(
        sectionList.map((sect, index) => ({
          ...sect,
          order: index,
        }))
      );
    },
    [sectionList]
  );

  return (
    <div className="flex flex-col gap-4 mb-7 w-full max-w-[900px]">
      <section className="flex flex-col gap-4">
        <div>
          <label>Title</label>
          <Input placeholder="Enter Title" />
        </div>

        <div>
          <label>SubTitle (optional)</label>
          <Input placeholder="Enter SubTitle" />
        </div>

        <div>
          <label>Thumbnail</label>
          <FileUploader
            name="file"
            types={fileTypes}
            label="Upload thumbnail"
            handleChange={handleFileChange}
          />
        </div>
      </section>

      <section>
        <p>Sections</p>
        <div className="flex flex-col gap-3">
          <Button
            className="bg-black/80 hover:bg-black/60"
            onClick={() => {
              setSectionList((prev) => [
                ...prev,
                {
                  id: crypto.randomUUID(),
                  title: "",
                  type: "video",
                  order: sectionList.length,
                },
              ]);
            }}
          >
            Add Section
          </Button>
          <DraggableList
            items={sectionList}
            updateItems={updateSectionList}
          >
            <div className="space-y-2">
              {sectionList.map((section) => (
                <SortableItem key={section.id} item={section}>
                  {
                    <SectionCard
                      key={section.id}
                      section={section}
                      handleSectionType={handleSectionType}
                      handleFileChange={handleFileChange}
                      previewUrl={previewUrl}
                    />
                  }
                </SortableItem>
              ))}
            </div>
          </DraggableList>
        </div>
      </section>

      <Button className="bg-main_bg text-white font-semibold rounded-full h-auto py-2">
        Upload
      </Button>
    </div>
  );
};

const SectionCard = ({
  section,
  handleSectionType,
  handleFileChange,
  previewUrl,
}: {
  section: SectionType;
  handleSectionType: (
    value: "video" | "article" | "quiz",
    currentSectionId: string
  ) => void;
  handleFileChange: (val: File | File[]) => void;
  previewUrl?: string | null;
}) => {
  return (
    <FormCard className="flex flex-col gap-3 bg-gray-50">
      <p className="text-gray-500 text-lg font-bold whitespace-nowrap border-gray-500/60 border w-fit p-1 aspect-square flex justify-center text-center rounded-md ">
        {(section?.order ?? 0) + 1}
      </p>
      <div>
        <label>Section Title</label>
        <Input
          placeholder="Enter Section Title"
          value={section.title}
        />
      </div>

      <div>
        <label>Section Type</label>
        <Select
          value={section.type}
          onValueChange={(value) => {
            handleSectionType(
              value as "video" | "article" | "quiz",
              section?.id ?? ""
            );
          }}
        >
          <SelectTrigger className={"max-w-[400px] flex-1"}>
            <SelectValue placeholder={"Select Section Type"} />
          </SelectTrigger>
          <SelectContent className="bg-light_pry_bg">
            {sectionTypeOptions.map((sect) => (
              <SelectItem key={sect.id} value={`${sect.id}`}>
                {sect.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-3">
        {section.type === "video" && (
          <FileUploader
            name="file"
            types={fileTypes}
            label="Upload Video"
            handleChange={handleFileChange}
          />
        )}

        {previewUrl && (
          <video
            src={previewUrl}
            controls
            className="w-full max-w-lg rounded-lg aspect-video"
          />
        )}
      </div>
    </FormCard>
  );
};

export default LearningId;
