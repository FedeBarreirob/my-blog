import Image from "next/image";

export default function Avatar() {
  const image = "/me.png";
  return (
    <div className="w-[180px] h-[180px] rounded-full overflow-hidden shadow-lg">
      <Image src={image} alt="an image of me" width={180} height={180} priority />
    </div>
  );
}
