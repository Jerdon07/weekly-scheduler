import Image from "next/image";

export default function Home() {
  const weeks = [
    {
      name: "Sunday",

    }, {
      name: "Monday",

    }, {
      name: "Tuesday",

    }, {
      name: "Wednesday",

    }, {
      name: "Thursday",

    }, {
      name: "Friday",

    }, {
      name: "Saturday",
    }
  ]

  return (
    <main>
      <div className="grid grid-cols-7">
        {weeks.map((week) => (
          <div key={week.name} className="border border-gray-600 p-2">
            <div className="border-b text-center">{ week.name }</div>
          </div>
        ))}
      </div>
    </main>
  );
}
