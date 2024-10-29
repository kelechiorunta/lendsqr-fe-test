'use client'

import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { usePathname } from "next/navigation"

export function Nav({ navlinks, isCollapsed }) {
  const pathname = usePathname()

  return (
    <TooltipProvider>
      <div
        data-collapsed={isCollapsed}
        // Added transition and max-width changes for smooth effect
        className={cn(
          " group flex flex-col items-center overflow-hidden transition-all duration-300 ease-in-out",
          isCollapsed ? "w-16" : "w-64" // Adjust width for collapse/expand
        )}
      >
        <nav className={cn("grid gap-1 px-2 transition-all duration-300 ease-in-out", isCollapsed && 'gap-0')}>
          {navlinks.map((link, index) => {
            const IconComponent = link.icon
            if (!IconComponent) {
              console.error(`Icon for link ${link.title} is undefined`)
              return null
            }

            return isCollapsed ? (
              <Tooltip key={index} delayDuration={0}>
                <TooltipTrigger asChild>
                  <Link
                    href={link.href || "#"}
                    className={cn(
                      buttonVariants({ variant: pathname === link.href ? "default" : link.variant }),
                      "w-14 flex items-center transition-all duration-300"
                    )}
                  >
                    <IconComponent className="h-5 w-5" />
                    <span className="sr-only">{link.title}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right" className="flex items-center gap-4">
                  {link.title}
                  {link.label && (
                    <span className="ml-auto text-muted-foreground">
                      {link.label}
                    </span>
                  )}
                </TooltipContent>
              </Tooltip>
            ) : (
              <Link
                key={index}
                href={link.href || "#"}
                className={cn(
                  buttonVariants({ variant: pathname === link.href ? "default" : link.variant, size: "sm" }),
                  "flex items-center justify-start transition-all duration-300"
                )}
              >
                <IconComponent className="mr-2 h-5 w-5" />
                {link.title}
                {link.label && (
                  <span
                    className={cn(
                      "ml-auto",
                      link.variant === "default" && "text-background dark:text-white"
                    )}
                  >
                    {link.label}
                  </span>
                )}
              </Link>
            )
          })}
        </nav>
      </div>
    </TooltipProvider>
  )
}