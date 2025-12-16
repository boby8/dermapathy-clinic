"use client";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Instagram,
  Facebook,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { WhatsAppLink } from "@/components/whatsapp-button";
import { InstagramLink } from "@/components/instagram-button";
import { FacebookLink } from "@/components/facebook-button";
import { contactInfo } from "@/features/contact/constants";

export function ContactInfoCard() {
  return (
    <Card className="border-2 border-slate-200 shadow-xl">
      <CardHeader className="border-b bg-gradient-to-r from-sky-50 to-cyan-50">
        <CardTitle className="text-2xl">Contact Information</CardTitle>
        <p className="text-sm text-slate-600 mt-2">
          Get in touch with us through any of these channels
        </p>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-6">
          {/* Phone Numbers */}
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-100 to-cyan-100 text-sky-600">
              <Phone className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="mb-2 font-semibold text-slate-900">Phone</h3>
              <div className="space-y-1 text-slate-600">
                <p className="text-sm">{contactInfo.phone}</p>
                <p className="text-sm">{contactInfo.phone2}</p>
              </div>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-white shadow-lg">
              <MessageCircle className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="mb-2 font-semibold text-slate-900">WhatsApp</h3>
              <WhatsAppLink>
                <Button
                  className="bg-[#25D366] hover:bg-[#20BA5A] text-white"
                  size="sm"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Chat Now
                </Button>
              </WhatsAppLink>
            </div>
          </div>

          {/* Instagram */}
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white shadow-lg">
              <Instagram className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="mb-2 font-semibold text-slate-900">Instagram</h3>
              <InstagramLink>
                <Button
                  className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 text-white"
                  size="sm"
                >
                  <Instagram className="mr-2 h-4 w-4" />
                  Follow Us
                </Button>
              </InstagramLink>
            </div>
          </div>

          {/* Facebook */}
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1877F2] text-white shadow-lg">
              <Facebook className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="mb-2 font-semibold text-slate-900">Facebook</h3>
              <FacebookLink>
                <Button
                  className="bg-[#1877F2] hover:bg-[#166FE5] text-white"
                  size="sm"
                >
                  <Facebook className="mr-2 h-4 w-4" />
                  Like Us
                </Button>
              </FacebookLink>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-100 to-cyan-100 text-sky-600">
              <Mail className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="mb-2 font-semibold text-slate-900">Email</h3>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-sm text-sky-600 hover:text-sky-700 hover:underline transition-colors"
              >
                {contactInfo.email}
              </a>
            </div>
          </div>

          {/* Timings */}
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-100 to-cyan-100 text-sky-600">
              <Clock className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="mb-2 font-semibold text-slate-900">Timings</h3>
              <p className="text-sm text-slate-600">{contactInfo.timings}</p>
              <p className="text-xs text-slate-500 mt-1">Monday to Saturday</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-100 to-cyan-100 text-sky-600">
              <MapPin className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="mb-2 font-semibold text-slate-900">Address</h3>
              <p className="text-sm leading-relaxed text-slate-600">
                {contactInfo.address}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
