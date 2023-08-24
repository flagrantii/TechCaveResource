"use client"
import { CustomButtonProps } from "@/type"
import Image from "next/image"

const CustomButton = ({title, containerStyles, handleClick, btnType }:CustomButtonProps) => {
  return (
    <button
    disabled={false}
    type={btnType ||"button"}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
    >
    <span className={`span_btn`}>
    {title}
    </span>
    </button>
  )
}

export default CustomButton