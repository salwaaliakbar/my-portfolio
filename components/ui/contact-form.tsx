"use client";

import { isValidEmail } from "../../utils/check-emails";
import axios, { AxiosError } from "axios";
import { useState, ChangeEvent } from "react";
import { TbMailForward } from "react-icons/tb";
import Swal from 'sweetalert2';

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
        background: '#1B263B',
        color: '#E0E1DD',
        confirmButtonColor: '#06B6D4',
        confirmButtonText: 'Great!',
        iconColor: '#06B6D4',
        customClass: {
          popup: 'border border-[#415A77] rounded-lg shadow-[0_0_20px_rgba(6,182,212,0.3)]',
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
        background: '#1B263B',
        color: '#E0E1DD',
        confirmButtonColor: '#06B6D4',
        confirmButtonText: 'Try Again',
        iconColor: '#ef4444',
        customClass: {
          popup: 'border border-[#415A77] rounded-lg shadow-[0_0_30px_rgba(6,182,212,0.2)]',
        }
      });
    } finally {
      setIsLoading(false);
    };
  };

  return (
    <div className="w-full">
      <div className="w-full text-[#E0E1DD] rounded-lg border border-[#415A77] p-4 lg:p-8 bg-[#1B263B] shadow-[0_0_30px_rgba(6,182,212,0.15),0_20px_60px_rgba(0,0,0,0.3)]">
        <p className="text-sm text-[#778DA9]">{"If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests."}</p>
        <form onSubmit={handleSendMail} className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-base text-[#E0E1DD] font-medium">Your Name: </label>
            <input
              title="Full Name"
              placeholder="Name"
              className="bg-[#0D1B2A] w-full border-2 rounded-md border-[#415A77] focus:border-[#06B6D4] focus:shadow-[0_0_20px_rgba(6,182,212,0.3)] ring-0 outline-0 transition-all duration-300 px-3 py-2 text-[#E0E1DD]"
              type="text"
              maxLength={100}
              required={true}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setUserInput({ ...userInput, name: e.target.value })}
              onBlur={checkRequired}
              value={userInput.name}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base text-[#E0E1DD] font-medium">Your Email: </label>
            <input
              title="Email Address"
              placeholder="Email"
              className="bg-[#0D1B2A] w-full border-2 rounded-md border-[#415A77] focus:border-[#06B6D4] focus:shadow-[0_0_20px_rgba(6,182,212,0.3)] ring-0 outline-0 transition-all duration-300 px-3 py-2 text-[#E0E1DD]"
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
            {error.email && <p className="text-sm text-red-400">Please provide a valid email!</p>}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base text-[#E0E1DD] font-medium">Your Message: </label>
            <textarea
              title="Message"
              placeholder="Type your message here..."
              className="bg-[#0D1B2A] w-full border-2 rounded-md border-[#415A77] focus:border-[#06B6D4] focus:shadow-[0_0_20px_rgba(6,182,212,0.3)] ring-0 outline-0 transition-all duration-300 px-3 py-2 text-[#E0E1DD]"
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
            {error.required && <p className="text-sm text-red-400">
              All fields are required!
            </p>}
            <button
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-linear-to-r from-[#06B6D4] via-[#0EA5E9] to-[#06B6D4] px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold shadow-[0_0_20px_rgba(6,182,212,0.3),0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6),0_15px_40px_rgba(0,0,0,0.4)] hover:scale-105 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
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