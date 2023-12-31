import { Routes, Route } from "react-router-dom";

import { Toaster } from "@/components/ui/toaster"

import './globals.css'
import SigninForm from "./_auth/form/SigninForm";
import Home from "./_root/pages/Home";
import SignupForm from "./_auth/form/SignupForm";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import { AllUsers, CreatePost, EditPost, Explore, PostDetails, Saved, UpdateProfile, Profile } from "./_root/pages";



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
          <Route path="/explore" element={<Explore />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/all-users" element={<AllUsers />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:id" element={<EditPost />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/profile/:id/*" element={<Profile />} />
          <Route path="/update-profile/:id" element={<UpdateProfile />} />
        </Route>
      </Routes>

      <Toaster />
    </main>
  )
}

export default App