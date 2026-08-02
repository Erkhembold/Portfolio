"use client"
import { motion, useInView } from "framer-motion"
import { useRef, ElementType } from "react"

type RevealTextProps = {
  children: React.ReactNode
  as?: ElementType
  className?: string
  delay?: number
}

export default function RevealText({ children, as: Tag = "div", className = "", delay = 0 }: RevealTextProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-10% 0px" })

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={inView ? { y: "0%", opacity: 1 } : {}}
        transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1], delay }}
      >
        <Tag className={className}>{children}</Tag>
      </motion.div>
    </div>
  )
}
