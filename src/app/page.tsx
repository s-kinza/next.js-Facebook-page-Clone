// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="bg-gray-200 h-screen flex items-center justify-center">
//       {/* left side */}
//       <div className="text-3xl w-1/2 px-10">
//         <Image
//           src={"/images/faceBook.svg"}
//           alt="Facebook logo"
//           width={300}
//           height={100}
//         />
//         <p className="ml-8 mt-3">
//         Facebook helps you connect and share with the people in your life.
//       </p>
//       </div>
//       {/* Right side  */}
//       <div className="bg-white flex flex-col p-5 rounded-xl w-1/3">
//         <input className="my-2 border border-1 border-gray-100 p-3 rounded-md focus:outline-1 outline-blue-600"

//          type="text" placeholder="Email address or phone number" />

//         <input className="my-2 border border-1 border-gray-100 p-3 rounded-md focus:outline-1 outline-blue-600"

//          type="text" placeholder="Password" />
//         <button className="bg-blue-600 my-2 py-2 text-lg font-bold text-white rounded-md hover:bg-blue-700">Log in</button>
//         <p className="cursor-pointer text-blue-600 text-sm my2 text-center my-2 hover:underline">Forgotten password?
//         </p>
//         <span className="my-2">
//           <hr />
//         </span>
//         <button className="bg-green-500 my-2 py-2 px-2  text-lg font-bold text-white rounded-md hover:bg-green-600 w-fit mx-auto">Create new account</button>
//       </div>
//     </div>
//   );
// }
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-200 min-h-screen flex flex-col md:flex-row items-center justify-center p-4">
      {/* left side */}
      <div className="text-2xl md:text-3xl w-full md:w-1/2 px-4 md:px-10 mb-10 md:mb-0">
        <Image
          src={"/images/faceBook.svg"}
          alt="Facebook logo"
          width={300}
          height={100}
        />
        <p className="ml-0 md:ml-8 mt-3 text-center md:text-left">
          Facebook helps you connect and share with the people in your life.
        </p>
      </div>
      {/* right side */}
      <div className="bg-white flex flex-col p-5 rounded-xl w-full md:w-1/3">
        <input
          className="my-2 border border-gray-300 p-3 rounded-md focus:outline-1 outline-blue-600"
          type="text"
          placeholder="Email address or phone number"
        />
        <input
          className="my-2 border border-gray-300 p-3 rounded-md focus:outline-1 outline-blue-600"
          type="password"
          placeholder="Password"
        />
        <button className="bg-blue-600 my-2 py-2 text-lg font-bold text-white rounded-md hover:bg-blue-700">
          Log in
        </button>
        <p className="cursor-pointer text-blue-600 text-sm text-center my-2 hover:underline">
          Forgotten password?
        </p>
        <span className="my-2">
          <hr />
        </span>
        <button className="bg-green-500 my-2 py-2 px-4 text-lg font-bold text-white rounded-md hover:bg-green-600 w-fit mx-auto">
          Create new account
        </button>
      </div>
    </div>
  );
}
