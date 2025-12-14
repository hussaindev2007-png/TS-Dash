

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Mail, User } from "lucide-react";
// import Navbar from "./navbar";

// const Profile = () => {
//   const [isFollowing, setIsFollowing] = useState(false);

//   return (
//     <div className="flex min-h-screen bg-gradient-to-b from-[#0f172a] to-[#020617] text-white">
//         <Navbar />

//       {/* MAIN CONTENT */}
//       <div className="flex-1 px-10 py-8 flex justify-center items-start">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="w-full max-w-3xl bg-[#111827] rounded-2xl shadow-xl overflow-hidden"
//         >
//           {/* Cover */}
//           <div className="h-36 bg-gradient-to-r from-indigo-500 to-blue-600 relative">
//             <img
//               src="https://res.cloudinary.com/saylani-welfare/image/upload/v1762073154/SMIT/Students/4240166173265.jpg"
//               alt="profile"
//               className="w-28 h-28 rounded-full absolute -bottom-14 left-10 border-4 border-[#111827] object-cover"
//             />
//           </div>

//           {/* Profile Content */}
//           <div className="pt-20 px-10 pb-8">
//             <div className="flex justify-between items-center">
//               <div>
//                 <h2 className="text-2xl font-bold">Hussain Ali</h2>
//                 <p className="text-gray-400">Frontend Developer</p>
//               </div>

//               <button
//                 onClick={() => setIsFollowing(!isFollowing)}
//                 className={`px-6 py-2 rounded-lg font-medium transition ${
//                   isFollowing
//                     ? "bg-green-600"
//                     : "bg-blue-600 hover:bg-blue-700"
//                 }`}
//               >
//                 {isFollowing ? "Following" : "Follow"}
//               </button>
//             </div>

//             {/* Info */}
//             <div className="mt-6 space-y-3 text-gray-300">
//               <p className="flex items-center gap-2">
//                 <Mail size={18} /> Hussaindev2007@gmail.com
//               </p>
//               <p className="flex items-center gap-2">
//                 <User size={18} /> Admin User
//               </p>
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8">
//               <div className="bg-[#1f2937] rounded-xl p-4 text-center">
//                 <p className="text-xl font-bold">3.2M</p>
//                 <p className="text-gray-400 text-sm">Followers</p>
//               </div>
//               <div className="bg-[#1f2937] rounded-xl p-4 text-center">
//                 <p className="text-xl font-bold">300k</p>
//                 <p className="text-gray-400 text-sm">Following</p>
//               </div>
//               <div className="bg-[#1f2937] rounded-xl p-4 text-center">
//                 <p className="text-xl font-bold">120</p>
//                 <p className="text-gray-400 text-sm">Orders</p>
//               </div>
//               <div className="bg-[#1f2937] rounded-xl p-4 text-center">
//                 <p className="text-xl font-bold">85</p>
//                 <p className="text-gray-400 text-sm">Customers</p>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Profile;























import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, User } from "lucide-react";
import Navbar from "./navbar";

const Profile = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#0f172a] to-[#020617] text-white">
      {/* Navbar Full Width */}
      <div className="w-full">
        <Navbar />
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 px-4 sm:px-10 py-8 flex justify-center items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-3xl bg-[#111827] rounded-2xl shadow-xl overflow-hidden"
         >
          {/* Cover */}
          <div className="h-36 bg-gradient-to-r from-indigo-500 to-blue-600 relative">
            <img
              src="https://res.cloudinary.com/saylani-welfare/image/upload/v1762073154/SMIT/Students/4240166173265.jpg"
              alt="profile"
              className="w-28 h-28 rounded-full absolute -bottom-14 left-10 border-4 border-[#111827] object-cover"
            />
          </div>

          {/* Profile Content */}
          <div className="pt-20 px-6 sm:px-10 pb-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div>
                <h2 className="text-2xl font-bold">Hussain Ali</h2>
                <p className="text-gray-400">Frontend Developer</p>
              </div>

              <button
                onClick={() => setIsFollowing(!isFollowing)}
                className={`mt-4 sm:mt-0 px-6 py-2 rounded-lg font-medium transition ${
                  isFollowing
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {isFollowing ? "Following" : "Follow"}
              </button>
            </div>

            {/* Info */}
            <div className="mt-6 space-y-3 text-gray-300">
              <p className="flex items-center gap-2">
                <Mail size={18} /> Hussaindev2007@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <User size={18} /> Admin User
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-8">
              <div className="bg-[#1f2937] rounded-xl p-4 text-center">
                <p className="text-xl font-bold">3.2M</p>
                <p className="text-gray-400 text-sm">Followers</p>
              </div>
              <div className="bg-[#1f2937] rounded-xl p-4 text-center">
                <p className="text-xl font-bold">300k</p>
                <p className="text-gray-400 text-sm">Following</p>
              </div>
              <div className="bg-[#1f2937] rounded-xl p-4 text-center">
                <p className="text-xl font-bold">120</p>
                <p className="text-gray-400 text-sm">Orders</p>
              </div>
              <div className="bg-[#1f2937] rounded-xl p-4 text-center">
                <p className="text-xl font-bold">85</p>
                <p className="text-gray-400 text-sm">Customers</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
