import { PiWarningCircleBold } from "react-icons/pi";
import { PiWarningBold } from "react-icons/pi";
import { PiWarningOctagonBold } from "react-icons/pi";
import { IoIosCheckmarkCircle } from "react-icons/io";

export default function determineToastStyle(newToast) {
  if (newToast.variant === "notice") {
    return {
      toastBgColor: "bg-blue-200",
      toastIcon: <PiWarningCircleBold size={30} />,
    };
  }
  if (newToast.variant === "warning") {
    return {
      toastBgColor: "bg-yellow-200",
      toastIcon: <PiWarningBold size={30} />,
    };
  }
  if (newToast.variant === "success") {
    return {
      toastBgColor: "bg-lime-200",
      toastIcon: <IoIosCheckmarkCircle size={30} />,
    };
  }
  if (newToast.variant === "error") {
    return {
      toastBgColor: "bg-red-200",
      toastIcon: <PiWarningOctagonBold size={30} />,
    };
  }
}
