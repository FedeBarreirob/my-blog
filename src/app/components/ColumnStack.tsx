import Image from "next/image";
import { Technology } from "../types/technology";

interface ColumnStackProps {
  title: string;
  stack: Technology[];
  color: string;
}

export default function ColumnStack({ title, stack, color }: ColumnStackProps) {
  return (
    <div className="text-center">
      <h3
        className={`text-xl font-semibold mb-6 p-3 rounded-lg shadow-lg ${color}`}
      >
        {title}
      </h3>
      <ul className="grid grid-cols-3 gap-6 justify-items-center text-gray-200">
        {stack.map((item) => (
          <li key={item.name} className="flex flex-col items-center text-sm">
            <Image
              src={item.icon}
              alt={item.name}
              className="object-contain"
              width={40}
              height={40}
            />
            <span className="mt-2">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
