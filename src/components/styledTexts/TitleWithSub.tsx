const TitleWithSub = ({
  title,
  subtitle,
  mainHeaderCol,
  subHeaderCol,
}: {
  title?: string;
  subtitle?: string;
  mainHeaderCol?: string;
  subHeaderCol?: string;
}) => {
  return (
    <header className="w-full flex flex-col gap-2 justify-center items-center mb-4 text-center">
      <h2
        className={`text-18 font-main_header_weight capitalize ${
          mainHeaderCol ? mainHeaderCol : "text-main_font"
        } `}
      >
        {title}
      </h2>
      {subtitle && (
        <h4
          className={`text-sub_header_sizen  ${
            subHeaderCol ? subHeaderCol : "text-subtitle_color"
          }  font-light`}
        >
          {subtitle}
        </h4>
      )}
    </header>
  );
};

export default TitleWithSub;
