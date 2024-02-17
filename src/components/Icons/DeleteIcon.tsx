const DeleteIcon: React.FC<React.SVGAttributes<{}>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M9.99984 18.3327C14.5832 18.3327 18.3332 14.5827 18.3332 9.99935C18.3332 5.41602 14.5832 1.66602 9.99984 1.66602C5.4165 1.66602 1.6665 5.41602 1.6665 9.99935C1.6665 14.5827 5.4165 18.3327 9.99984 18.3327Z"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.6416 12.3592L12.3583 7.64258"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.3583 12.3592L7.6416 7.64258"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DeleteIcon;
