"use client"

import React from "react"
import { useActionState } from "react"
import {
  Button,
  Input,
  Label,
  Textarea,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Alert,
  AlertDescription,
} from "../components/ui"
import { Mail, CheckCircle, AlertCircle } from "lucide-react"
import { sendContactEmail } from "../actions/Contact"

const initialState = {
  message: "",
  type: "" as "success" | "error" | "",
}

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContactEmail, initialState)

  return (
    <section id="contact" className="w-full max-w-md">
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-900">
          <Mail className="h-6 w-6 text-white" />
        </div>
        <CardTitle>Get in Touch</CardTitle>
            </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="Your full name" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" name="subject" placeholder="What's this about?" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us more about your inquiry..."
              required
              className="min-h-[120px]"
            />
          </div>

          {state.message && (
            <Alert
              className={
                state.type === "success"
                  ? "border-green-200 bg-green-50 text-green-800"
                  : "border-red-200 bg-red-50 text-red-800"
              }
            >
              {state.type === "success" ? (
                <CheckCircle className="h-4 w-4" />
              ) : (
                <AlertCircle className="h-4 w-4" />
              )}
              <AlertDescription>{state.message}</AlertDescription>
            </Alert>
          )}

          <Button
            type="submit"
            disabled={pending}
            className="w-full bg-gray-900 hover:bg-gray-800 text-white"
          >
            {pending ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </CardContent>
    </Card>
    </section>
  )
}
