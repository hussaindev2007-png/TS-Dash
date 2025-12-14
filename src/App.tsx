import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import Dashboard from "./components/dashboard";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import { AppSidebar } from "./components/app-sidebar";
import  Profile from "./components/profile";



export default function App() {
  return (<div>

    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <SidebarProvider defaultOpen={true}>

           <AppSidebar />
           <Routes>
 <Route path="*" element={<Dashboard />} />
 <Route path="/profile" element={<Profile/>} />

           </Routes>
          {/* <Dashboard /> */}
          
        </SidebarProvider>
      </ThemeProvider>
    </BrowserRouter>
  </div>
  );
}



























// import { ThemeProvider } from "@/components/theme-provider";
// import { SidebarProvider } from "@/components/ui/sidebar";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Dashboard from "./components/dashboard";
// // import Profile from "./components/profile";
// // import Orders from "./components/orders";
// // import Menu from "./components/menu";
// import { AppSidebar } from "./components/app-sidebar";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
//         <SidebarProvider defaultOpen={true}>
//           {/* Sidebar */}
//           <AppSidebar />

//           {/* Main Content */}
//           <div className="ml-64 p-6"> {/* ml-64 = sidebar width */}
//             <Routes>
//               <Route path="/dashboard" element={<Dashboard />} />
//               {/* <Route path="/profile" element={<Profile />} />
//               <Route path="/orders" element={<Orders />} />
//               <Route path="/menu" element={<Menu />} /> */}
//               {/* <Route path="*" element={<Dashboard />} />  */}
//             </Routes>
//           </div>
//         </SidebarProvider>
//       </ThemeProvider>
//     </BrowserRouter>
//   );
// }
