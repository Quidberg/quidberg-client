const CheckedIcon = ({ fill }: { fill?: string }) => {
  return (
      <svg
        width="23"
        height="23"
        viewBox="0 0 23 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.26097 9.07236L4.47224 10.8611L10.2222 16.6111L23 3.83333L21.2113 2.0446L10.2222 12.9693L6.26097 9.07236ZM20.4444 20.4444H2.55558V2.55558H15.3333V0H2.55558C1.14988 0 0 1.14988 0 2.55558V20.4444C0 21.8501 1.14988 23 2.55558 23H20.4444C21.8501 23 23 21.8501 23 20.4444V10.2222H20.4444V20.4444Z"
          fill={fill ? fill : "#1DA1F2"}
        />
      </svg>
  );
};

export default CheckedIcon;
