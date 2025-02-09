import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";
import Wave from 'react-wavify';

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function Home() {
 
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

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
        {}
  <Wave fill="url(#gradient)">
  <defs>
    <linearGradient id="gradient" gradientTransform="rotate(90)">
      <stop offset="10%"  stopColor="#000DFF7" />
      <stop offset="90%" stopColor="#000DFF7" />
    </linearGradient>
  </defs>
</Wave>
 <div className="absolute bottom-0 left-0 w-full">
          <Wave 
            // fill="#000DFF"
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
