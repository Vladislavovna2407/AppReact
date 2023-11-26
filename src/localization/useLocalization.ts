import { useContext } from "react"
import { LocalizationContext } from "./LocalizationProvider"

// And that is our custom hook to use inside our project to get translations
export const useLocalization = () => {
  const localization = useContext(LocalizationContext)

  return localization
}