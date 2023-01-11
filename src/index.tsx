import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import "./index.css";

const App = lazy(() => import("./App"));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <RecoilRoot>
    <Suspense fallback={<p>Loading...</p>}>
      <App />
    </Suspense>
  </RecoilRoot>
);
