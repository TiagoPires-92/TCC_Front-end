import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/globals.css'


export default function App({ Component, pageProps }) {

  useEffect(() => {
		typeof document !== undefined
		? require("bootstrap/dist/js/bootstrap")
		: null;
	}, []);

  return <Component {...pageProps} />

}
