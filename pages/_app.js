import '../styles/globals.css'
import { ModalProvider } from "react-modal-hook";



function MyApp({ Component, pageProps }) {
  return (
    <ModalProvider>
    <Component {...pageProps} />
    </ModalProvider>
  )
}

export default MyApp
