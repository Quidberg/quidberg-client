import { memo, useState } from "react";

const Analysis = () => {
  const [isReadMore, setIsReadMore] = useState(false);
  return (
    <div className="flex flex-col items-start justify-center gap-2">
      <h3 className="font-main_header_weight">{"Analysis"}</h3>
      <main className="flex flex-col items-center justify-center">
        <section className="flex flex-col gap-2 max-w-[1000px]">
          <p>
            {`Why are you doing this bit? We're gonna die. You can run, but you
            can't hide bitch! Prepare to be emancipated from your own inferior
            genes! Aw, man! I really liked this life! Well, at least I didn't
            really crap my pants.`}
          </p>
          <p>
            {`I mixed in some praying mantis DNA. You know a praying mantis is the
            exact opposite of a vole, Morty? They mate once and then bluergh cut
            each other's heads off. Did you just come into the cafeteria through
            a portal? I turned myself into a pickle, Morty! Boom! Big reveal!
            I'm a pickle! What do you think about that? I turned myself into a
            pickle! W-what are you just staring at me for, bro? I turned myself
            into a pickle, Morty.`}
          </p>
          <p>
            {`Nice to wheat you! I don't get it and I don't need to. Close. It's
            gonna make your kidneys shut down. I don't discuss problems. I
            incinerate them! Don't be a baby! You avoid getting shot in real
            life all the time, Morty! Just do the same thing here and we'll be
            fine!`}
          </p>
        </section>
      </main>
    </div>
  );
};

const MemoizedAnalysis = memo(Analysis);
export default MemoizedAnalysis;
