import clsx from "clsx"
import { useState } from "react"

export default function ({
  url,
  size = 28,
  bgColor = "#fff"
}: {
  url: string
  size?: number
  bgColor?: string
}) {
  const [isLoaded, setIsLoaded] = useState(false)

  function faviconURL(u: string) {
    const url = new URL(chrome.runtime.getURL("/_favicon/"))
    url.searchParams.set("pageUrl", u)
    url.searchParams.set("size", size.toString())
    return url.toString()
  }

  return (
    <div
      className="inline-block rounded-md"
      style={{ backgroundColor: bgColor }}>
      <img
        onLoad={() => setIsLoaded(true)}
        src={faviconURL(url)}
        style={{width: `${size}px`, height: `${size}px`}}
        className={clsx({
          "opacity-0": !isLoaded
        })}
        alt="ico"
      />
    </div>
  )
}
