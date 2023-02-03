const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M0 256c0 141.4 114.6 256 256 256s256-114.6 256-256S397.4 0 256 0 0 114.6 0 256zm395.3 11.3-112 112c-4.6 4.6-11.5 5.9-17.4 3.5s-9.9-8.3-9.9-14.8v-64h-96c-17.7 0-32-14.3-32-32v-32c0-17.7 14.3-32 32-32h96v-64c0-6.5 3.9-12.3 9.9-14.8s12.9-1.1 17.4 3.5l112 112c6.2 6.2 6.2 16.4 0 22.6z" />
  </svg>
);

export default SvgComponent;
