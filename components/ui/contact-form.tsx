"use client";

import { isValidEmail } from "../../utils/check-emails";
import axios, { AxiosError } from "axios";
import { useState, ChangeEvent } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";

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

      toast.success("Message sent successfully!");
      setUserInput({
        name: "",
        email: "",
        message: "",
      });
    } catch (error: unknown) {
      const axiosError = error as AxiosError<{ message: string }> | unknown;
      if (axiosError instanceof axios.AxiosError) {
        toast.error(axiosError?.response?.data?.message || "Failed to send message");
      } else {
        toast.error("An error occurred");
      }
    } finally {
      setIsLoading(false);
    };
  };

  return (
    <div className="w-full">
      <div className="w-full text-[hsl(40,20%,95%)] rounded-lg border border-[hsl(220,15%,20%)] p-4 lg:p-8 bg-[hsl(220,18%,10%)]">
        <p className="text-sm text-[hsl(40,20%,80%)]">{"If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests."}</p>
        <form onSubmit={handleSendMail} className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-base text-[hsl(40,20%,95%)]">Your Name: </label>
            <input
              title="Full Name"
              placeholder="Name"
              className="bg-[hsl(220,18%,10%)] w-full border rounded-md border-[hsl(220,15%,20%)] focus:border-[hsl(38,92%,50%)] ring-0 outline-0 transition-all duration-300 px-3 py-2 text-[hsl(40,20%,95%)]"
              type="text"
              maxLength={100}
              required={true}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setUserInput({ ...userInput, name: e.target.value })}
              onBlur={checkRequired}
              value={userInput.name}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base text-[hsl(40,20%,95%)]">Your Email: </label>
            <input
              title="Email Address"
              placeholder="Email"
              className="bg-[hsl(220,18%,10%)] w-full border rounded-md border-[hsl(220,15%,20%)] focus:border-[hsl(38,92%,50%)] ring-0 outline-0 transition-all duration-300 px-3 py-2 text-[hsl(40,20%,95%)]"
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
            <label className="text-base text-[hsl(40,20%,95%)]">Your Message: </label>
            <textarea
              title="Message"
              placeholder="Type your message here..."
              className="bg-[hsl(220,18%,10%)] w-full border rounded-md border-[hsl(220,15%,20%)] focus:border-[hsl(38,92%,50%)] ring-0 outline-0 transition-all duration-300 px-3 py-2 text-[hsl(40,20%,95%)]"
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
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-linear-to-r from-[hsl(38,92%,50%)] to-[hsl(38,80%,45%)] px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-[hsl(220,20%,6%)] no-underline transition-all duration-200 ease-out hover:text-[hsl(220,20%,6%)] hover:no-underline md:font-semibold"
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