type SortArrowIconProps = {
  direction?: 'asc' | 'desc' | null;
};


export const ArrowIcon = ({ direction }: SortArrowIconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: direction === 'desc' ? 'rotate(180deg)' : 'none',
        transition: 'transform 0.2s ease'
      }}>
      <path d="M5.25 1.5C5.25 1.08579 5.58579 0.75 6 0.75C6.41422 0.75 6.75 1.08579 6.75 1.5V8.68945L8.96973 6.46973C9.26262 6.17683 9.73738 6.17683 10.0303 6.46973C10.3232 6.76262 10.3232 7.23738 10.0303 7.53027L6.53028 11.0303C6.23738 11.3232 5.76262 11.3232 5.46973 11.0303L1.96973 7.53027C1.67684 7.23738 1.67684 6.76262 1.96973 6.46973C2.24433 6.19512 2.67906 6.17766 2.97364 6.41797L3.03028 6.46973L5.25 8.68945V1.5Z" fill={direction ? "#FF6B00" : "#FAFCFF"}/>
    </svg>
  );
};