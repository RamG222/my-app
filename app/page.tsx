import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex">
        <h1 className="m-2">Ram</h1>
        <div>
          <ul className="flex">
            <li className="m-2">Home</li>
            <li className="m-2">About</li>
          </ul>
        </div>
      </div>
      <div>
        <h2>THis is main content</h2>
      </div>
      <div>
        <h3>THis is Footer</h3>
      </div>
    </>
  );
}
