import Image from "next/image";

export default function Avatar() {
  return (
    <div className="h-36 w-36 shrink-0 overflow-hidden rounded-full ring-2 ring-line sm:h-44 sm:w-44">
      <Image
        src="/me.png"
        alt="Portrait of Federico Barreiro"
        width={176}
        height={176}
        sizes="(min-width: 640px) 176px, 144px"
        className="h-full w-full object-cover"
        priority
      />
    </div>
  );
}
