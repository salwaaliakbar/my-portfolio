"use client";

import { isValidEmail } from "../../utils/check-emails";
import axios, { AxiosError } from "axios";
import { useState, ChangeEvent } from "react";
import { TbMailForward } from "react-icons/tb";
import Swal from 'sweetalert2';
import { useTheme } from "../../context/ThemeContext";

interface ErrorState {
  email: boolean;
  required: boolean;
}

interface UserInputState {
  name: string;
  email: string;
  message: string;
}

function ContactForm() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [error, setError] = useState<ErrorState>({ email: false, required: false });
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState<UserInputState>({
    name: "",
    email: "",
    message: "",
  });

  const checkRequired = () => {
    if (userInput.email && userInput.message && userInput.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!userInput.email || !userInput.message || !userInput.name) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    } else {
      setError({ ...error, required: false });
    };

    try {
      setIsLoading(true);
      await axios.post(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/contact`,
        userInput
      );

      // Show custom themed success popup
      Swal.fire({
        icon: 'success',
        title: 'Message Sent!',
        text: 'Thank you for reaching out! I will get back to you soon.',
        background: isDark ? '#1B263B' : '#F5F5F7',
        color: isDark ? '#E0E1DD' : '#1D1D1F',
        confirmButtonColor: isDark ? '#06B6D4' : '#0071E3',
        confirmButtonText: 'Great!',
        iconColor: isDark ? '#06B6D4' : '#0071E3',
        customClass: {
          popup: isDark ? 'border border-[#415A77] rounded-lg shadow-[0_0_20px_rgba(6,182,212,0.3)]' : 'border border-[#D5D5D7] rounded-lg shadow-[0_0_20px_rgba(0,113,227,0.2)]',
        }
      });

      setUserInput({
        name: "",
        email: "",
        message: "",
      });
    } catch (error: unknown) {
      const axiosError = error as AxiosError<{ message: string }> | unknown;
      const errorMessage = axiosError instanceof axios.AxiosError 
        ? axiosError?.response?.data?.message || "Failed to send message"
        : "An error occurred";
      
      // Show custom themed error popup
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: errorMessage,
        background: isDark ? '#1B263B' : '#F5F5F7',
        color: isDark ? '#E0E1DD' : '#1D1D1F',
        confirmButtonColor: isDark ? '#06B6D4' : '#0071E3',
        confirmButtonText: 'Try Again',
        iconColor: '#ef4444',
        customClass: {
          popup: isDark ? 'border border-[#415A77] rounded-lg shadow-[0_0_30px_rgba(6,182,212,0.2)]' : 'border border-[#D5D5D7] rounded-lg shadow-[0_0_30px_rgba(0,113,227,0.15)]',
        }
      });
    } finally {
      setIsLoading(false);
    };
  };

  return (
    <div className="w-full">
      <div className={`w-full rounded-lg p-4 lg:p-8 border transition-colors duration-300 ${isDark ? "shadow-[0_0_30px_rgba(6,182,212,0.15)] text-[#E0E1DD] border-[#415A77] bg-[#1B263B]" : "shadow-[0_6px_24px_rgba(0,0,0,0.06)] text-[#1D1D1F] border-[#D5D5D7] bg-[#F5F5F7]"}`}>
        <p className={`text-sm transition-colors duration-300 ${isDark ? "text-[#778DA9]" : "text-[#86868B]"}`}>{"If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests."}</p>
        <form onSubmit={handleSendMail} className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className={`text-base font-medium transition-colors duration-300 ${isDark ? "text-[#E0E1DD]" : "text-[#1D1D1F]"}`}>Your Name: </label>
            <input
              title="Full Name"
              placeholder="Name"
              className={`w-full border-2 rounded-md ring-0 outline-0 transition-all duration-300 px-3 py-2 ${isDark ? "bg-[#0D1B2A] border-[#415A77] focus:border-[#06B6D4] text-[#E0E1DD] placeholder-[#778DA9]" : "bg-[#FFFFFF] border-[#D5D5D7] focus:border-[#0071E3] text-[#1D1D1F] placeholder-[#A1A1A6]"}`}
              type="text"
              maxLength={100}
              required={true}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setUserInput({ ...userInput, name: e.target.value })}
              onBlur={checkRequired}
              value={userInput.name}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className={`text-base font-medium transition-colors duration-300 ${isDark ? "text-[#E0E1DD]" : "text-[#1D1D1F]"}`}>Your Email: </label>
            <input
              title="Email Address"
              placeholder="Email"
              className={`w-full border-2 rounded-md ring-0 outline-0 transition-all duration-300 px-3 py-2 ${isDark ? "bg-[#0D1B2A] border-[#415A77] focus:border-[#06B6D4] text-[#E0E1DD] placeholder-[#778DA9]" : "bg-[#FFFFFF] border-[#D5D5D7] focus:border-[#0071E3] text-[#1D1D1F] placeholder-[#A1A1A6]"}`}
              type="email"
              maxLength={100}
              required={true}
              value={userInput.email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setUserInput({ ...userInput, email: e.target.value })}
              onBlur={() => {
                checkRequired();
                setError({ ...error, email: !isValidEmail(userInput.email) });
              }}
            />
            {error.email && <p className="text-sm text-red-500">Please provide a valid email!</p>}
          </div>

          <div className="flex flex-col gap-2">
            <label className={`text-base font-medium transition-colors duration-300 ${isDark ? "text-[#E0E1DD]" : "text-[#1D1D1F]"}`}>Your Message: </label>
            <textarea
              title="Message"
              placeholder="Type your message here..."
              className={`w-full border-2 rounded-md ring-0 outline-0 transition-all duration-300 px-3 py-2 ${isDark ? "bg-[#0D1B2A] border-[#415A77] focus:border-[#06B6D4] text-[#E0E1DD] placeholder-[#778DA9]" : "bg-[#FFFFFF] border-[#D5D5D7] focus:border-[#0071E3] text-[#1D1D1F] placeholder-[#A1A1A6]"}`}
              maxLength={500}
              name="message"
              required={true}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setUserInput({ ...userInput, message: e.target.value })}
              onBlur={checkRequired}
              rows={4}
              value={userInput.message}
            />
          </div>
          <div className="flex flex-col items-center gap-3">
            {error.required && <p className="text-sm text-red-500">
              All fields are required!
            </p>}
            <button
              className={`flex items-center gap-1 hover:gap-3 rounded-full px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out md:font-semibold hover:scale-105 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed bg-linear-to-r ${isDark ? "from-[#06B6D4] via-[#0EA5E9] to-[#06B6D4] shadow-[0_0_20px_rgba(6,182,212,0.3),0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6),0_15px_40px_rgba(0,0,0,0.4)]" : "from-[#0071E3] via-[#0077ED] to-[#0071E3] shadow-[0_0_20px_rgba(0,113,227,0.2),0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_0_30px_rgba(0,113,227,0.4),0_15px_40px_rgba(0,0,0,0.2)]"}`}  
              type="submit"
              disabled={isLoading}
            >
              {
                isLoading ?
                <span>Sending Message...</span>:
                <span className="flex items-center gap-1">
                  Send Message
                  <TbMailForward size={20} />
                </span>
              }
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;