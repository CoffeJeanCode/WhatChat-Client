import { useState, useEffect } from 'react'

const errorMessage =
  'matchMedia is not supported, this could happen both because window.matchMedia is not supported by' +
  " your current browser or you're using the useMediaQuery hook whilst server side rendering."

export const useMediaQuery = (mediaQuery) => {
  if (!window || !window.matchMedia) {
    console.warn(errorMessage)
    return null
  }

  const [isVerified, setIsVerified] = useState(
    !!window.matchMedia(mediaQuery).matches,
  )

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQuery)
    const documentChangeHandler = () => setIsVerified(!!mediaQueryList.matches)

    mediaQueryList.addEventListener('change', documentChangeHandler)

    documentChangeHandler()
    return () => {
      mediaQueryList.removeEventListener('change', documentChangeHandler)
    }
  }, [mediaQuery])

  return isVerified
}
