'use client'

import Image from "next/image"
import Link from "next/link"
import { Linkedin, Mail } from "lucide-react"
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"

export function PageComponent() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background to-secondary/10 p-4">
      <div className="text-center">
        <div className="relative w-64 h-64 mx-auto mb-8 transform rotate-6 hover:rotate-0 transition-transform duration-300">
          <Image
            src="/images/my-pic.png"
            alt="bugloper"
            width={256}
            height={256}
            className="rounded-full shadow-lg object-cover"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4">bugloper</h1>
        <h3 className="text-2xl font-bold mb-4">Be competent! 🦾</h3>
        <p className="text-xl text-muted-foreground mb-8">
          I am bugloper, an engineer who loves technologies.
        </p>
        <nav className="mb-8">
          <ul className="flex justify-center space-x-4">
            <li>
              <a href="#projects" className="text-primary hover:underline">
                Projects
              </a>
            </li>
            <li>
              <a href="#about" className="text-primary hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="text-primary hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex justify-center space-x-4">
          <Link href="https://github.com/bugloper">
            <Button variant="outline" size="icon">
              <GitHubLogoIcon className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>

          <Link href="https://www.linkedin.com/in/nima-yonten-a03995227/">
            <Button variant="outline" size="icon">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </Link>

          <Link href="mailto:bugloper@hey.com">
            <Button variant="outline" size="icon">
              <Mail className="h-4 w-4" />
              <span className="sr-only">Email</span>
            </Button>
          </Link>

          <Link href="https://x.com/bugloper">
            <Button variant="outline" size="icon">
              <TwitterLogoIcon className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
