"use client"
import { useRouter } from "next/navigation"
import { X } from "lucide-react"
import { Button } from "./ui/Button"

const CloseModal = ()=>{
    const router = useRouter()
    return <Button onClick={()=>router.back()} aria-label="Close Modal" variant='subtle' className="h-6 w-6 p-0 rounded-md"><X /></Button>
}

export default CloseModal