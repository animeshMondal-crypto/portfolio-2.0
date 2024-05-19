"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import axios, { AxiosError } from "axios";
import { useToast } from "./ui/use-toast";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const onSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await axios.post("/api/send-email", { email, message });

      if (res.data.success) {
        toast({
          title: res.data.message,
        });
      }
    } catch (error) {
      const AxiosError = error as AxiosError;
      toast({
        //@ts-ignore
        title: AxiosError.response?.data.message,
        variant: "destructive",
      });
    } finally {
      setEmail("");
      setMessage("");
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full py-8">
      <h2 className="text-center text-2xl font-semibold text-slate-300 mb-4">
        Contact Me
      </h2>
      <motion.form
        onSubmit={onSubmit}
        className="space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            className="p-3 mt-1 w-full rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-white"
          >
            Message
          </label>
          <textarea
            name="message"
            rows={4}
            className="px-3 py-4 mt-1 w-full rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <div className="text-center flex justify-center mt-6">
          <Button
            variant="secondary"
            className="py-3 px-6 gap-1 flex items-center justify-center bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-md shadow-lg hover:from-blue-600 hover:to-teal-600 transition-transform transform hover:scale-105"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <Loader2 className="animate-spin" />
            ) : (
              <div className="group flex items-center gap-1">
                <span>Send</span>
                <Send
                  className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
                  size={15}
                />
              </div>
            )}
          </Button>
        </div>
      </motion.form>
    </section>
  );
}

export default ContactForm;
