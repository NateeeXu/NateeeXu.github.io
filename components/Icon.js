// Line icons drawn on a 24px grid, stroked with the current text color.
const paths = {
  school: (
    <>
      <path d="M2.5 9.5 12 5l9.5 4.5L12 14 2.5 9.5Z" />
      <path d="M6.5 11.6V16c1.6 1.4 3.4 2 5.5 2s3.9-.6 5.5-2v-4.4" />
      <path d="M21.5 9.5V15" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0C18.5 15.4 12 21 12 21Z" />
      <circle cx="12" cy="10" r="2.3" />
    </>
  ),
  language: (
    <>
      <path d="M4.5 4.5h9a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5H8.5l-3.5 3v-3h-.5A1.5 1.5 0 0 1 3 12V6a1.5 1.5 0 0 1 1.5-1.5Z" />
      <path d="M15 9h4.5A1.5 1.5 0 0 1 21 10.5v6a1.5 1.5 0 0 1-1.5 1.5H19v3l-3.5-3H11a1.5 1.5 0 0 1-1.5-1.5V16" />
    </>
  ),
  work: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2.5" />
      <path d="M8.5 7V5.5A1.5 1.5 0 0 1 10 4h4a1.5 1.5 0 0 1 1.5 1.5V7" />
      <path d="M3 12.5h18" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.2 19 6v5.3c0 4.4-3 8.1-7 9.5-4-1.4-7-5.1-7-9.5V6l7-2.8Z" />
      <path d="m9 12 2.2 2.2L15.5 10" />
    </>
  ),
  check: (
    <>
      <rect x="5" y="4.5" width="14" height="16.5" rx="2.5" />
      <path d="M9 4.5v-.7a.8.8 0 0 1 .8-.8h4.4a.8.8 0 0 1 .8.8v.7" />
      <path d="m9 13 2 2 4-4.5" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3.5 8.5 4.6L12 12.7 3.5 8.1 12 3.5Z" />
      <path d="m3.5 12 8.5 4.6 8.5-4.6" />
      <path d="m3.5 15.9 8.5 4.6 8.5-4.6" />
    </>
  ),
  phone: (
    <>
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
      <path d="M10.5 18.5h3" />
    </>
  ),
  chip: (
    <>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <rect x="9.5" y="9.5" width="5" height="5" rx="1" />
      <path d="M9 2.5V6M15 2.5V6M9 18v3.5M15 18v3.5M2.5 9H6M2.5 15H6M18 9h3.5M18 15h3.5" />
    </>
  ),
  pipeline: (
    <>
      <rect x="2.5" y="6" width="5" height="12" rx="1.2" />
      <rect x="9.5" y="6" width="5" height="12" rx="1.2" />
      <rect x="16.5" y="6" width="5" height="12" rx="1.2" />
    </>
  ),
  wave: <path d="M2.5 12h3.5l2-5.5 3.5 11 3.5-11 2 5.5h4.5" />,
  transistor: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M10 7.5v9M10 12H5M10 9.7l4.5-3.2M10 14.3l4.5 3.2" />
    </>
  ),
};

export default function Icon({ name, size = 22 }) {
  return (
    <svg
      className="ico"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
