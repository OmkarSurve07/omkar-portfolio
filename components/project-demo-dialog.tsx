"use client"

import { useState } from "react"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"

import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"

interface Screenshot {
  image: string
  title: string
}

interface Props {
  title: string
  screenshots: Screenshot[]
}

export function ProjectDemoDialog({
  title,
  screenshots,
}: Props) {
  const [current, setCurrent] = useState(0)

  const next = () =>
    setCurrent((prev) =>
      prev === screenshots.length - 1 ? 0 : prev + 1
    )

  const previous = () =>
    setCurrent((prev) =>
      prev === 0 ? screenshots.length - 1 : prev - 1
    )

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" className="flex-1">
          <ExternalLink className="w-4 h-4 mr-2" />
          View Demo
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-6xl">

        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-5">

          <img
            src={screenshots[current].image}
            alt={screenshots[current].title}
            className="w-full rounded-xl border"
          />

          <div className="text-center text-sm font-medium">
            {screenshots[current].title}
          </div>

          <div className="flex justify-between">

            <Button
              variant="outline"
              onClick={previous}
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>

            <Button
              variant="outline"
              onClick={next}
            >
              Next
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>

          </div>

          <div className="flex gap-2 overflow-auto">

            {screenshots.map((item, index) => (
              <img
                key={index}
                src={item.image}
                alt={item.title}
                onClick={() => setCurrent(index)}
                className={`h-20 rounded-md border cursor-pointer transition ${
                  current === index
                    ? "ring-2 ring-primary"
                    : "opacity-60 hover:opacity-100"
                }`}
              />
            ))}

          </div>

        </div>

      </DialogContent>
    </Dialog>
  )
}