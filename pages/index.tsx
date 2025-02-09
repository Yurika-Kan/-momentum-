import Image from "next/image";
import Wave from 'react-wavify';
import Link from 'next/link'; // Make sure to import Link if you plan to use it

export default function Home() {
  // Assuming you're using tRPC or another API query system here
  // const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <div className="bg-black w-screen h-screen text-black"></div>
      <nav className="bg-gradient-to-r from-blue-500 to-black p-4 fixed top-0 w-full z-10">
        <ul className="flex space-x-8">
          <li>
            <Link href="/" className="text-white">Home</Link>
          </li>
          <li>
            <Link href="/about" className="text-white">About</Link>
          </li>
          <li>
            <Link href="/contact" className="text-white">Contact</Link>
          </li>
        </ul>
      </nav>

      <Wave fill="url(#gradient)">
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="10%" stopColor="#000DFF7" />
            <stop offset="90%" stopColor="#000DFF7" />
          </linearGradient>
        </defs>
      </Wave>

      <div className="absolute bottom-0 left-0 w-full">
        <Wave
          fill="rgba(0, 13, 255, 0.8)"
          paused={false}
          style={{ display: "flex" }}
          options={{
            height: 0.01,
            amplitude: 50,
            speed: 0.15,
            points: 3
          }}
        />
      </div>
    </>
  );
}

