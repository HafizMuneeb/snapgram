import { Routes, Route } from "react-router-dom";

import { Toaster } from "@/components/ui/toaster"

import './globals.css'
import SigninForm from "./_auth/form/SigninForm";
import Home from "./_root/pages/Home";
import SignupForm from "./_auth/form/SignupForm";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";

const App = () => {
  return (
    <main className="flex h-screen ">
      <Routes>
        {/* {public routes} */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>

        {/* {Private Routes} */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>

      <Toaster />
    </main>
  )
}

export default App