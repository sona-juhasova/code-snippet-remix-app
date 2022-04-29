import { hydrate } from "react-dom";
import { RemixBrowser } from "remix";

hydrate(<RemixBrowser />, document);



if("serviceworker" in navigator) { 
    window.addEventListener(" load", () => {
        navigator.serviceWorker
            .register("/sw.js", { type: "module" })
            .catch((error) => {
            console.error("Service worker registration failed", error);
        });
});
}