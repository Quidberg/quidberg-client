import { ExaminationType } from "../app/slices/oracleRegistration/types";
import { ExaminationList } from "./enums/RegistrationEnum";

const generateIdFromField = (arr: any[]) => {
  return arr.map((element: any, i) => ({
    ...element,
    id: (element.name ||= element.value ||= i),
  }));
};

export const universitiesData = [
  { name: "University of Lagos", id: "University of Lagos" },
  { name: "University of Benin", id: "University of Benin" },
  { name: "Obafemi Awolowo University", id: "Obafemi Awolowo University" },
  { name: "Convenant University", id: "Convenant University" },
  { name: "Babcock University", id: "Babcock University" },
];

export const selectedUniversityData = {
  name: "University of Lagos",
  id: "University of Lagos",
  courses: [
    {
      name: "MicroBiology",
      id: "MicroBiology",
      subjectsAccepted: [
        { name: "mathematics", id: "mathematics" },
        { name: "english", id: "english" },
        { name: "chemistry", id: "chemistry" },
        { name: "biology", id: "biology" },
      ],
    },
    {
      name: "Mechanical Engineering",
      id: "Mechanical Engineering",
      subjectsAccepted: [
        { name: "mathematics", id: "mathematics" },
        { name: "english", id: "english" },
        { name: "further mathematics", id: "further mathematics" },
        { name: "biology", id: "biology" },
      ],
    },
    {
      name: "Physics",
      id: "Physics",
      subjectsAccepted: [
        { name: "mathematics", id: "mathematics" },
        { name: "english", id: "english" },
        { name: "further mathematics", id: "further mathematics" },
        { name: "biology", id: "biology" },
      ],
    },
    {
      name: "Pharmacy",
      id: "Pharmacy",
      subjectsAccepted: [
        { name: "mathematics", id: "mathematics" },
        { name: "english", id: "english" },
        { name: "chemistry", id: "chemistry" },
        { name: "biology", id: "biology" },
      ],
    },
    {
      name: "Business Administration",
      id: "Business Administration",
      subjectsAccepted: [
        { name: "mathematics", id: "mathematics" },
        { name: "english", id: "english" },
        { name: "commerce", id: "commerce" },
      ],
    },
  ],
  grades: [
    { name: "A", id: "1" },
    { name: "B", id: "2" },
    { name: "C", id: "3" },
    { name: "D", id: "4" },
    { name: "E", id: "5" },
    { name: "F", id: "6" },
  ],
  applicableExaminations: [
    { name: ExaminationList.WAEC, id: "WAEC" },
    { name: ExaminationList.NECO, id: "NECO" },
  ],
};

export const coursesData = [
  { name: "MicroBiology", id: "MicroBiology" },
  { name: "Mechanical Engineering", id: "Mechanical Engineering" },
  { name: "Physics", id: "Physics" },
  { name: "Pharmacy", id: "Pharmacy" },
  { name: "Business Administration", id: "Business Administration" },
];

var grades = [
  { name: "A" },
  { name: "B" },
  { name: "C" },
  { name: "D" },
  { name: "E" },
  { name: "F" },
];

export const examinations: ExaminationType[] = [
  {
    name: ExaminationList.WAEC,
    id: "WAEC",
    subjects: [
      { name: "mathematics", id: "mathematics" },
      { name: "english", id: "english" },
      { name: "french", id: "french" },
    ],
    grades: generateIdFromField(grades),
  },
  {
    name: ExaminationList.NECO,
    id: "NECO",
    subjects: [
      { name: "mathematics", id: "mathematics" },
      { name: "english", id: "english" },
      { name: "french", id: "french" },
    ],
    grades: generateIdFromField(grades),
  },
  {
    name: ExaminationList.JAMB,
    id: "JAMB",
    score: null,
  },
];

export const tagData = [
  { text: "Linear Algebra" },
  { text: "Organic Chemistry" },
  { text: "Regression" },
  { text: "University of Lagos" },
  { text: "Unilag" },
];

export const searchResults = [
  {
    pic: "https://www.alamy.com/website-development-uiux-front-end-designer-reviewing-sketched-wireframe-image157489996.html?imageid=C2207B2B-2CE3-4192-99E9-1B7B2372305C&p=533685&pn=1&searchId=4e2606d97d79b241b4cb3939eec2359b&searchtype=0",
    title: "Organic Chemistry I",
    tag: ["class", "chemistry"],
  },
  {
    pic: "https://www.alamy.com/profile-photo-of-cheerful-front-end-developer-sitting-chair-keyboard-typing-operating-server-indoors-image485714137.html?imageid=D9992725-5BF9-43A6-847A-EDF8E9A3BB33&p=255993&pn=1&searchId=4e2606d97d79b241b4cb3939eec2359b&searchtype=0",
    title: "Indices Quick Hacks",
    tag: ["tutorial"],
  },
  {
    pic: "https://www.alamy.com/profile-photo-of-cheerful-front-end-developer-sitting-chair-keyboard-typing-operating-server-indoors-image485714137.html?imageid=D9992725-5BF9-43A6-847A-EDF8E9A3BB33&p=255993&pn=1&searchId=4e2606d97d79b241b4cb3939eec2359b&searchtype=0",
    title: "Essay writing",
    tag: ["tutorial"],
  },
];

export const topSearches = [
  {
    pic: "https://www.alamy.com/website-development-uiux-front-end-designer-reviewing-sketched-wireframe-image157489996.html?imageid=C2207B2B-2CE3-4192-99E9-1B7B2372305C&p=533685&pn=1&searchId=4e2606d97d79b241b4cb3939eec2359b&searchtype=0",
    title: "Organic Chemistry I",
    tag: ["class"],
  },
  {
    pic: "https://www.alamy.com/profile-photo-of-cheerful-front-end-developer-sitting-chair-keyboard-typing-operating-server-indoors-image485714137.html?imageid=D9992725-5BF9-43A6-847A-EDF8E9A3BB33&p=255993&pn=1&searchId=4e2606d97d79b241b4cb3939eec2359b&searchtype=0",
    title: "Indices Quick Hacks",
    tag: ["tutorial"],
  },
  {
    pic: "https://www.alamy.com/profile-photo-of-cheerful-front-end-developer-sitting-chair-keyboard-typing-operating-server-indoors-image485714137.html?imageid=D9992725-5BF9-43A6-847A-EDF8E9A3BB33&p=255993&pn=1&searchId=4e2606d97d79b241b4cb3939eec2359b&searchtype=0",
    title: "Essay writing",
    tag: ["tutorial", "English Language"],
  },
];
