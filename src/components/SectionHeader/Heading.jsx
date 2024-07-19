import React from "react";

function Heading({
  children,
  desc = "",
  title = "",
  className = "mb-10",
  isCenter = false,
  isMain,
  ...props
}) {
  return (
    <div
      className={`nc-Section-Heading relative flex flex-col justify-between sm:flex-row sm:items-end ${className}`}
    >
      <div
        className={
          isCenter ? "mx-auto mb-2 w-full max-w-3xl text-center" : "max-w-4xl"
        }
      >
        {title && (
          <p className="text-2xl font-medium uppercase text-primary">{title}</p>
        )}
        <h2
          style={{ lineHeight: "1.2em" }}
          className={`${
            isMain ? "lineHeight text-3xl lg:text-[55px]" : "text-3xl"
          } mb-5 font-medium`}
          {...props}
        >
          {children}
        </h2>
        {desc && <p className="mt-5 text-neutral-500">{desc}</p>}
      </div>

    </div>
  );
}

export default Heading;
