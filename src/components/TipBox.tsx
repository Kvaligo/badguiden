interface TipBoxProps {
  variant: "tip" | "obs" | "anbefaling";
  title: string;
  children: React.ReactNode;
}

const config = {
  tip: {
    borderColor: "border-accent",
    bgColor: "bg-[#E8B86D]/10",
    iconColor: "text-accent",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
        />
      </svg>
    ),
  },
  obs: {
    borderColor: "border-[#E07B39]",
    bgColor: "bg-[#E07B39]/8",
    iconColor: "text-[#E07B39]",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
        />
      </svg>
    ),
  },
  anbefaling: {
    borderColor: "border-[#4A8C5C]",
    bgColor: "bg-[#4A8C5C]/8",
    iconColor: "text-[#4A8C5C]",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
} as const;

export function TipBox({ variant, title, children }: TipBoxProps) {
  const { borderColor, bgColor, iconColor, icon } = config[variant];

  return (
    <div
      className={`rounded-lg border-l-4 ${borderColor} ${bgColor} px-5 py-4 my-6`}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className={iconColor}>{icon}</span>
        <span className="font-serif text-base font-bold text-text-main">
          {title}
        </span>
      </div>
      <div className="text-sm leading-relaxed text-text-main/85 font-sans [&>p]:mt-1.5 [&>p:first-child]:mt-0">
        {children}
      </div>
    </div>
  );
}
