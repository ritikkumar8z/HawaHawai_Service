import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../pages/AuthContext";

import Main from "../pages/main";
import About from "../pages/About";
import FAQ from "../pages/FAQ";
import Features from "../pages/Features";
import Solutions from "../pages/Solutions";
import Explore from "../pages/Explore";

import BookNow from "../pages/BookNow";
import Track from "../pages/Track";

import Contact from "../pages/Contact";
import LetsTalk from "../pages/lets-talk";
import ChatbotPage from "../pages/ChatbotPage";
import TeamPage from "../pages/TeamPage ";
import Teamets from "../pages/Teamets";

import Login from "../pages/Login";
import Signup from "../pages/SignUp";
import ForgotPassword from "../pages/ForgotPassword";

import MainLayout from "../layouts/MainLayout";
import NotFound from "../pages/NotFound";


export default function AppRoutes() {
  const { user, loading } = useContext(AuthContext);

  if (loading)
    return <div className="text-white text-center mt-20">Loading...</div>;

  return (
    <Routes>
      <Route
        path="/"
        element={
          user ? (
            <MainLayout>
              <Main />
              <Features />
              {/* <Solutions /> */}
              <About />
              <Teamets />
              <FAQ />
              <Contact />
            </MainLayout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      <Route
        path="/about"
        element={
          <MainLayout>
            <About />
          </MainLayout>
        }
      />
      <Route
        path="/features"
        element={
          <MainLayout>
            <Features />
          </MainLayout>
        }
      />
      <Route
        path="/solutions"
        element={
          <MainLayout>
            <Solutions />
          </MainLayout>
        }
      />
      <Route
        path="/teamets"
        element={
          <MainLayout>
            <Teamets />
          </MainLayout>
        }
      />
      <Route
        path="/faq"
        element={
          <MainLayout>
            <FAQ />
          </MainLayout>
        }
      />
      <Route path="/book" element={<BookNow />} />
      <Route path="/track" element={<Track />} />
      <Route
        path="/contact"
        element={
          <MainLayout>
            <Contact />
          </MainLayout>
        }
      />
      <Route
        path="/explore"
        element={
          <MainLayout>
            <Explore />
          </MainLayout>
        }
      />
      <Route
        path="/lets-talk"
        element={
          <MainLayout>
            <LetsTalk />
          </MainLayout>
        }
      />
      <Route
        path="/chatbot"
        element={
          <MainLayout>
            <ChatbotPage />
          </MainLayout>
        }
      />
      <Route
        path="/team"
        element={
          <MainLayout>
            <TeamPage />
          </MainLayout>
        }
      />

      <Route
        path="/signup"
        element={!user ? <Signup /> : <Navigate to="/" replace />}
      />
      <Route
        path="/login"
        element={!user ? <Login /> : <Navigate to="/" replace />}
      />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route path="*" element={<Navigate to="/" />} />
      <Route path="not-found" element={<NotFound />} />

    </Routes>
  );
}
