const ViewIcon: React.FC<React.SVGAttributes<{}>> = (props) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="icon"
        {...props}
      >
        <path
          d="M12.4998 9.99935C12.4998 11.3801 11.3805 12.4993 9.9998 12.4993C8.61908 12.4993 7.4998 11.3801 7.4998 9.99935C7.4998 8.61864 8.61908 7.49935 9.9998 7.49935C11.3805 7.49935 12.4998 8.61864 12.4998 9.99935Z"
          stroke="#231231"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.04834 9.99932C3.11023 6.61841 6.2688 4.16602 10.0002 4.16602C13.7315 4.16602 16.8901 6.61844 17.952 9.99938C16.8901 13.3803 13.7315 15.8327 10.0002 15.8327C6.2688 15.8327 3.11022 13.3803 2.04834 9.99932Z"
          stroke="#231231"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };
  
  export default ViewIcon;
  