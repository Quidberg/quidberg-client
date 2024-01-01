const SupportIcon = ({ color }: { color?: string }) => {
  return (
    <>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 50 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex justify-center items-center"
      >
        <path
          d="M24.5295 38.3708C24.3172 38.7385 23.9896 39.0258 23.5974 39.1883C23.2052 39.3507 22.7704 39.3792 22.3603 39.2693C21.9503 39.1594 21.588 38.9173 21.3296 38.5805C21.0712 38.2437 20.9312 37.831 20.9313 37.4065C20.9312 36.982 21.0712 36.5693 21.3296 36.2325C21.588 35.8957 21.9503 35.6536 22.3603 35.5437C22.7704 35.4338 23.2052 35.4623 23.5974 35.6247C23.9896 35.7872 24.3172 36.0745 24.5295 36.4421H33.4665C34.0683 36.4424 34.6676 36.3636 35.2489 36.2077C36.4627 34.1974 37.1664 31.9207 37.2987 29.576C37.797 29.4513 38.2652 29.2279 38.6757 28.919C38.4243 28.5863 38.2884 28.1805 38.2887 27.7634V24.0991L37.3239 24.8704V21.9773L28.6456 12.5273L8.39562 21.9773V24.8704L6.46692 23.3273V23.2846C5.8445 23.9882 5.50142 24.8954 5.50257 25.8347C5.5027 26.6943 5.78984 27.5291 6.31842 28.2069C6.84701 28.8847 7.58677 29.3665 8.42037 29.576C8.85822 37.1824 15.1411 43.1917 22.8595 43.1917C24.8972 43.1957 26.9126 42.7679 28.7729 41.9364C30.6332 41.1049 32.2962 39.8886 33.6523 38.3677C33.5902 38.369 33.5286 38.3699 33.4665 38.3699L24.5295 38.3708ZM29.6095 23.9065C29.8628 23.9065 30.1135 23.9563 30.3475 24.0532C30.5815 24.1501 30.7941 24.2921 30.9732 24.4712C31.1523 24.6502 31.2944 24.8628 31.3913 25.0968C31.4883 25.3307 31.5382 25.5815 31.5382 25.8347C31.5382 26.088 31.4884 26.3388 31.3915 26.5728C31.2946 26.8067 31.1526 27.0194 30.9735 27.1984C30.7945 27.3775 30.5819 27.5196 30.3479 27.6166C30.114 27.7135 29.8632 27.7634 29.61 27.7634C29.0985 27.7635 28.608 27.5604 28.2463 27.1988C27.8846 26.8371 27.6813 26.3467 27.6813 25.8352C27.6812 25.3237 27.8843 24.8332 28.2459 24.4715C28.6076 24.1098 29.0981 23.9066 29.6095 23.9065ZM16.1095 27.7639C15.598 27.7639 15.1074 27.5607 14.7457 27.199C14.384 26.8373 14.1808 26.3467 14.1808 25.8352C14.1808 25.3237 14.384 24.8331 14.7457 24.4714C15.1074 24.1097 15.598 23.9065 16.1095 23.9065C16.621 23.9065 17.1116 24.1097 17.4733 24.4714C17.835 24.8331 18.0382 25.3237 18.0382 25.8352C18.0382 26.3467 17.835 26.8373 17.4733 27.199C17.1116 27.5607 16.621 27.7639 16.1095 27.7639ZM40.2165 29.6921C40.2165 32.834 38.1289 35.4364 35.2489 36.2077C34.9519 36.6523 34.1829 37.7692 33.6523 38.3677C35.9244 38.3289 38.0897 37.397 39.6793 35.7732C41.2689 34.1493 42.1548 31.9645 42.1452 29.6921V29.4311C41.8524 29.6022 41.5194 29.6923 41.1804 29.6921H40.2165Z"
          fill={color?color:'#1DA1F2'}
        />
        <path
          d="M24.7883 4.62108C32.2133 4.62108 38.2883 10.6961 38.2883 18.1211V23.9067C38.2897 23.3957 38.4933 22.906 38.8546 22.5447C39.2159 22.1833 39.7055 21.9796 40.2165 21.978V18.1211C40.2165 9.63543 33.2735 2.69238 24.7883 2.69238H18.0383C17.4596 2.69238 17.0735 3.07803 17.0735 3.65673C17.0735 4.06353 17.2647 4.37448 17.5793 4.52343C17.712 4.58643 17.8664 4.62108 18.0383 4.62108H24.7883Z"
          fill={color?color:'#1DA1F2'}
        />
        <path
          d="M41.1808 21.9775H40.2165C39.7055 21.9791 39.2158 22.1828 38.8545 22.5442C38.4932 22.9056 38.2896 23.3952 38.2882 23.9062V27.7632C38.2882 28.1956 38.4322 28.5966 38.6752 28.9188C38.8546 29.1583 39.0872 29.3528 39.3547 29.4869C39.6222 29.621 39.9172 29.691 40.2165 29.6914H41.1808C41.5318 29.6914 41.8612 29.596 42.1456 29.4304C42.4382 29.2611 42.6812 29.018 42.8504 28.7253C43.0197 28.4327 43.1091 28.1008 43.11 27.7627V23.9058C43.1082 23.3948 42.9043 22.9052 42.5429 22.544C42.1815 22.1827 41.6918 21.9791 41.1808 21.9775Z"
          fill={color?color:'#1DA1F2'}
        />
      </svg>
    </>
  );
};

export default SupportIcon;
