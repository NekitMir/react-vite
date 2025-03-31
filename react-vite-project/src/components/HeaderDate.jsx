import { useEffect, useState } from"react"


export function HeaderDate() {

  //императивный подход
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  //Декларативный подход
  return(
    <header>
      <h2>Дата и время:</h2>
      <span>{now.toLocaleString()}</span>
    </header>
  )
}