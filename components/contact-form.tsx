"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  submit?: string;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    } else if (formData.message.length > 1000) {
      newErrors.message = "Message must be less than 1000 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      setErrors({
        submit: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="border-2 border-slate-200 shadow-xl">
      <CardHeader className="border-b bg-gradient-to-r from-sky-50 to-cyan-50">
        <CardTitle className="text-2xl">Send us a Message</CardTitle>
        <CardDescription>
          Have a question? Fill out the form below and we&apos;ll get back to
          you as soon as possible.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {/* Success Message */}
          {isSuccess && (
            <div
              className="flex items-center gap-3 rounded-lg bg-green-50 p-4 text-green-800"
              role="alert"
              aria-live="polite"
            >
              <CheckCircle2 className="h-5 w-5 shrink-0" aria-hidden="true" />
              <p className="text-sm font-medium">
                Thank you! Your message has been sent successfully. We&apos;ll
                get back to you soon.
              </p>
            </div>
          )}

          {/* Error Message */}
          {errors.submit && (
            <div
              className="flex items-center gap-3 rounded-lg bg-red-50 p-4 text-red-800"
              role="alert"
              aria-live="polite"
            >
              <AlertCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
              <p className="text-sm font-medium">{errors.submit}</p>
            </div>
          )}

          {/* Name Field */}
          <div>
            <label
              htmlFor="contact-name"
              className="mb-2 block text-sm font-medium text-slate-900"
            >
              Full Name <span className="text-red-500">*</span>
            </label>
            <Input
              id="contact-name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className={
                errors.name ? "border-red-500 focus-visible:ring-red-500" : ""
              }
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p
                id="name-error"
                className="mt-1.5 text-sm text-red-600"
                role="alert"
              >
                {errors.name}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="contact-email"
              className="mb-2 block text-sm font-medium text-slate-900"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <Input
              id="contact-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className={
                errors.email ? "border-red-500 focus-visible:ring-red-500" : ""
              }
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p
                id="email-error"
                className="mt-1.5 text-sm text-red-600"
                role="alert"
              >
                {errors.email}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="contact-message"
              className="mb-2 block text-sm font-medium text-slate-900"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <Textarea
              id="contact-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us how we can help you..."
              rows={6}
              className={
                errors.message
                  ? "border-red-500 focus-visible:ring-red-500"
                  : ""
              }
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            <div className="mt-1.5 flex items-center justify-between">
              {errors.message ? (
                <p
                  id="message-error"
                  className="text-sm text-red-600"
                  role="alert"
                >
                  {errors.message}
                </p>
              ) : (
                <div />
              )}
              <p className="text-xs text-slate-500">
                {formData.message.length}/1000
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-sky-600 hover:bg-sky-700"
            disabled={isSubmitting}
            size="lg"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
