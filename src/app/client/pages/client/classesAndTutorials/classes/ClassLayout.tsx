import { Disclosure } from "@headlessui/react";
import TextWithIcon from "../../../../../../shared/comps/ui/styledTexts/TextWithIcon";
import { ArrowDown } from "../../../../../../assets/svg";
import { Checkbox } from "../../../../../../shared/comps/ui/checkBox/CheckBox";
import { useState } from "react";
import { motion } from "framer-motion";

type ClassContent = Array<{
  courseId: string;
  courseTitle: string;
  topics: Array<{
    topicId: string;
    topicTitle: string;
    completed: boolean;
  }>;
}> | null;

const sampleClassContent = [
  {
    courseId: "mathematics",
    courseTitle: "Mathematics",
    topics: [
      { topicId: "Algebra", topicTitle: "Algebra", completed: true },
      {
        topicId: "Statistics",
        topicTitle: "Statistics",
        completed: false,
      },
      {
        topicId: "Differentiation",
        topicTitle: "Differentiation",
        completed: true,
      },
    ],
  },
  {
    courseId: "english",
    courseTitle: "english",
    topics: [
      { topicId: "Essay", topicTitle: "Essay", completed: true },
      {
        topicId: "Phrases",
        topicTitle: "Phrases",
        completed: false,
      },
      { topicId: "Clauses", topicTitle: "Clauses", completed: true },
    ],
  },
  {
    courseId: "Furthermathematics",
    courseTitle: "Further mathematics",
    topics: [
      { topicId: "Vectors", topicTitle: "Vectors", completed: true },
      {
        topicId: "Geometry",
        topicTitle: "Geometry",
        completed: false,
      },
      {
        topicId: "Calculus",
        topicTitle: "Calculus",
        completed: true,
      },
    ],
  },
];

const ClassLayout = () => {
  const [classContent, setClassContent] =
    useState<ClassContent | null>(sampleClassContent);
  const handleTopicComplete = (
    topicId: string,
    courseId: string,
    completed: boolean
  ) => {
    if (classContent) {
      setClassContent(
        classContent?.map((course) => {
          // console.log(course.courseId, courseId);
          if (course.courseId === courseId) {
            return {
              ...course,
              topics: course["topics"].map((topic) =>
                topic.topicId === topicId
                  ? { ...topic, completed: completed }
                  : topic
              ),
            };
          }
          return course;
        })
      );
    }
  };
  return (
    <div className="relative flex gap-8 w-full h-fit ">
      <main className="w-[70%] h-full ">
        <div className="w-full h-full flex flex-col gap-3">
          <section className="w-full aspect-video bg-black/90">
            {/* slide or video screen */}
          </section>
          <section>
            {/* <h2 className="font-semibold">Description</h2> */}
            <div className="min-h-screen bg-gray-50 text-gray-900 p-6 md:p-12">
              <header className="max-w-6xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45 }}
                  className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-2xl p-8 shadow-2xl"
                >
                  <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                    Foundations & Applications of Mathematics
                  </h1>
                  <p className="mt-3 text-indigo-100 max-w-3xl leading-relaxed">
                    A comprehensive course that takes learners from
                    core concepts to advanced problem-solving —
                    blending theory, practice, and real-world
                    applications across arithmetic, algebra, geometry,
                    trigonometry, statistics, probability, and
                    calculus.
                  </p>
                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <span className="inline-block bg-white/10 px-3 py-1 rounded-full text-sm">
                      Suitable for: High school, college,
                      professionals
                    </span>
                    <span className="inline-block bg-white/10 px-3 py-1 rounded-full text-sm">
                      Format: Topics, projects, quizzes
                    </span>
                  </div>
                </motion.div>
              </header>

              <main className="max-w-6xl mx-auto mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left: Overview & Outcomes */}
                <section className="lg:col-span-2 space-y-6">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow"
                  >
                    <h2 className="text-2xl font-semibold">
                      Course Description
                    </h2>
                    <p className="mt-3 text-gray-700 leading-relaxed">
                      This course emphasizes concept mastery over rote
                      memorization. Students will explore number
                      systems, algebraic structures, geometric
                      reasoning, trigonometry techniques, statistical
                      thinking, probability models, and calculus
                      foundations. Practical projects demonstrate how
                      mathematics underpins architecture, coding,
                      economics, and AI.
                    </p>

                    <h3 className="mt-6 font-semibold">
                      Key Learning Outcomes
                    </h3>
                    <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <li className="flex items-start gap-3">
                        <span className="text-indigo-600 font-bold">
                          •
                        </span>
                        <span>
                          Apply mathematical reasoning to solve
                          complex problems.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-indigo-600 font-bold">
                          •
                        </span>
                        <span>
                          Translate real-world scenarios into
                          mathematical models.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-indigo-600 font-bold">
                          •
                        </span>
                        <span>
                          Use mathematical tools for data analysis and
                          optimization.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-indigo-600 font-bold">
                          •
                        </span>
                        <span>
                          Develop critical thinking skills for STEM
                          and finance applications.
                        </span>
                      </li>
                    </ul>
                  </motion.div>

                  {/* Modules list */}
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="space-y-4"
                  >
                    {modules.map((m, i) => (
                      <article
                        key={m.title}
                        className="bg-white rounded-2xl p-5 shadow-sm"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold">
                              {i + 1}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold">
                              {m.title}
                            </h4>
                            <p className="mt-1 text-gray-600 leading-relaxed">
                              {m.brief}
                            </p>
                            <ul className="mt-3 list-disc list-inside text-sm text-gray-700 space-y-1">
                              {m.topics.map((t) => (
                                <li key={t}>{t}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </article>
                    ))}
                  </motion.div>

                  {/* Assessments & Audience */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-2xl p-6 shadow"
                  >
                    <h3 className="text-xl font-semibold">
                      Assessment & Activities
                    </h3>
                    <p className="mt-3 text-gray-700 leading-relaxed">
                      The course uses a blend of quizzes, practical
                      problem sets, applied projects (budget analysis,
                      architectural tasks, prediction models), peer
                      discussions, and a final cumulative exam to test
                      mastery.
                    </p>

                    <h4 className="mt-4 font-medium">
                      Who this course is for
                    </h4>
                    <p className="mt-2 text-gray-700">
                      High school & college students, professionals,
                      aspiring engineers, data scientists, and curious
                      learners.
                    </p>
                  </motion.div>
                </section>

                {/* Right: CTA, Instructor, Quick Stats */}
                <aside className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 shadow">
                    <h3 className="text-lg font-semibold">
                      Course At-a-Glance
                    </h3>
                    <dl className="mt-4 grid grid-cols-2 gap-3">
                      <div>
                        <dt className="text-sm text-gray-500">
                          Duration
                        </dt>
                        <dd className="font-medium">12 weeks</dd>
                      </div>
                      <div>
                        <dt className="text-sm text-gray-500">
                          Level
                        </dt>
                        <dd className="font-medium">
                          Beginner → Advanced
                        </dd>
                      </div>
                      <div>
                        <dt className="text-sm text-gray-500">
                          Format
                        </dt>
                        <dd className="font-medium">
                          Modules + Projects
                        </dd>
                      </div>
                      <div>
                        <dt className="text-sm text-gray-500">
                          Effort
                        </dt>
                        <dd className="font-medium">4–6 hrs/week</dd>
                      </div>
                    </dl>

                    {/* <div className="mt-6">
                      <button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700">
                        Enroll Now
                      </button>
                    </div> */}
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow">
                    <h4 className="font-semibold">Instructor</h4>
                    <div className="mt-4 flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center font-medium text-gray-700">
                        A
                      </div>
                      <div>
                        <div className="font-medium">
                          Dr. Ada Matheson
                        </div>
                        <div className="text-sm text-gray-500">
                          PhD — Applied Mathematics
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow text-sm text-gray-700">
                    <h4 className="font-semibold">
                      Why this course?
                    </h4>
                    <ul className="mt-3 list-inside list-disc space-y-2">
                      <li>
                        Builds deep conceptual understanding, not
                        memorization.
                      </li>
                      <li>
                        Practical projects with real-world context.
                      </li>
                      <li>
                        Progressive modules that scaffold learning.
                      </li>
                    </ul>
                  </div>
                </aside>
              </main>

              {/* <footer className="max-w-6xl mx-auto mt-12 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} Foundations &
                Applications of Mathematics — Designed with Tailwind
                CSS
              </footer> */}
            </div>
          </section>
        </div>
      </main>
      <section className="flex flex-col gap-3 flex-1 h-[80%] top-0 sticky  min-w-[300px]">
        <h2 className="font-semibold">Class Content</h2>

        <div className="flex flex-col gap-2">
          {classContent &&
            classContent.map((course) => (
              <Disclosure key={course.courseId} defaultOpen>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      key={course.courseId}
                      className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-1 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                    >
                      <TextWithIcon
                        text={course.courseTitle}
                        image={ArrowDown}
                        width={4}
                        textClass="capitalize"
                        height={4}
                        imageClassName={
                          open
                            ? "-rotate-180 transform transition-all"
                            : "transform transition-all"
                        }
                        flexPositions="justify-between items-center"
                        buttonClassName="w-full"
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="flex flex-col gap-3 px-4 pt-4 pb-2 text-sm text-gray-500">
                      {course.topics.map((topic) => (
                        <TopicItem
                          title={topic.topicTitle}
                          completed={topic.completed}
                          markAsComplete={(checked: boolean) =>
                            handleTopicComplete(
                              topic.topicId,
                              course.courseId,
                              checked
                            )
                          }
                          key={topic.topicId}
                          id={topic.topicId}
                        />
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
        </div>
      </section>
    </div>
  );
};

export default ClassLayout;

type TopicItemProps = {
  title: string;
  completed: boolean;
  markAsComplete: (completed: boolean) => void;
  id: string; //topic id
};

const TopicItem = ({
  title,
  completed,
  markAsComplete,
}: TopicItemProps) => {
  return (
    <div className="flex items-center justify-start gap-2 w-full rounded-lg bg-white/10 hover:bg-white/20 cursor-pointer">
      <Checkbox
        checked={completed}
        onCheckedChange={(checked: boolean) =>
          markAsComplete(checked)
        }
        className="text-white data-[state=checked]:bg-main_bg"
      />
      <p className="text-sm font-medium capitalize">{title}</p>

      {completed && (
        <p className=" text-main_bg ml-3 text-xs">completed</p>
      )}
      {/* <span className="text-xs text-gray-500">View</span> */}
    </div>
  );
};

const modules = [
  {
    title: "Topic 1 – Introduction to Mathematics & Number Systems",
    brief:
      "Explore the role of mathematics, number types, primes, and sequences.",
    topics: [
      "Natural, whole, integer, rational, and irrational numbers",
      "Prime numbers, factors, and multiples",
      "Place value, scientific notation, rounding",
      "Number patterns and sequences",
    ],
  },
  {
    title: "Topic 2 – Arithmetic & Proportional Reasoning",
    brief:
      "Master operations, fractions, percentages, and real-world ratio problems.",
    topics: [
      "Operations with whole numbers, fractions, and decimals",
      "Order of operations (BODMAS/PEMDAS)",
      "Ratios, proportions, and percentages",
      "Simple and compound interest; speed, distance, time",
    ],
  },
  {
    title: "Topic 3 – Algebra & Symbolic Reasoning",
    brief:
      "From variables to polynomials and real-world algebraic modeling.",
    topics: [
      "Variables, expressions, and equations",
      "Linear and quadratic equations",
      "Inequalities and graphs",
      "Polynomials and factorization; functions and mappings",
    ],
  },
  {
    title: "Topic 4 – Geometry & Spatial Understanding",
    brief:
      "Understand shapes, angles, area, volume, and coordinate geometry.",
    topics: [
      "Points, lines, planes, and angles",
      "Triangles: congruence and similarity",
      "Circles: chords, tangents, arcs",
      "Perimeter, area, and volume calculations",
    ],
  },
  {
    title: "Topic 5 – Trigonometry & Measurement",
    brief:
      "Trigonometric ratios, laws of sines/cosines, and real-world uses.",
    topics: [
      "Sine, cosine, tangent",
      "Solving triangles; laws of sines and cosines",
      "Angle of elevation and depression",
      "Applications in navigation, physics, and architecture",
    ],
  },
  {
    title: "Topic 6 – Statistics & Probability",
    brief:
      "Collect, analyze, and interpret data; basics of probabilistic thinking.",
    topics: [
      "Data collection and representation",
      "Mean, median, mode, variance, standard deviation",
      "Probability experiments and conditional probability",
      "Predictive analysis and risk assessment",
    ],
  },
  {
    title: "Topic 7 – Calculus Fundamentals",
    brief:
      "Limits, derivatives, integrals, and applied optimization.",
    topics: [
      "Limits and continuity",
      "Differentiation and applications",
      "Integration and area under a curve",
      "Rates of change and optimization problems",
    ],
  },
  {
    title: "Topic 8 – Applied Mathematics & Problem-Solving",
    brief:
      "Mathematical modeling, optimization, and domain-specific applications.",
    topics: [
      "Mathematical modeling of real-world situations",
      "Optimization in business and logistics",
      "Intro to financial mathematics",
      "Mathematics in computer science and encryption",
    ],
  },
];
