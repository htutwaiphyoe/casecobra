import { cn } from "@/lib/utils";
import Image from "next/image";
import { HTMLAttributes } from "react";

type PhoneProps = HTMLAttributes<HTMLDivElement> & {
  src: string;
  dark?: boolean;
};

const Phone = ({ src, className, dark = false, ...props }: PhoneProps) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
      {...props}
    >
      <Image
        width={300}
        height={500}
        alt="phone image"
        className="pointer-events-none z-50 select-none"
        src={
          dark
            ? "/phone-template-dark-edges.png"
            : "/phone-template-white-edges.png"
        }
      />
      <div className="absolute -z-10 inset-0">
        <Image
          width={300}
          height={500}
          src={src}
          alt="overlaying phone image"
          className="object-cover min-w-full min-h-full"
        />
      </div>
    </div>
  );
};

export default Phone;
