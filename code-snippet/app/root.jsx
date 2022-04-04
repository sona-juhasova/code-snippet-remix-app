import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from "remix";
import connectDb from "./db/connectDb.server";
import styles from "~/styles/global.css";
import SnippetList from "./components/SnippetList";
import CategoryList from "./components/CategoryList";

export function meta() {
  return {
    charset: "utf-8",
    title: "New Remix App",
    viewport: "width=device-width,initial-scale=1",
  };
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}
export async function loader({request}) {
  const db = await connectDb();
  const url = new URL(request.url);
  const category = url.searchParams.get("category");
  var searchParams = {};
 if(category != null && category != '')
 {
   searchParams.language = category;
 }
  const snippets = await db.models.CodeSnippet.find(searchParams);
 
  return snippets;

}



export default function App() {
  var snippets = useLoaderData();

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <main>
          <div id='header'>
            <h1>Code Snippet App</h1>

            <Link to="./snippets/AddNew">
              <button>Create New</button>
            </Link>

          </div>
          <div id='window-wrapper'>
            <CategoryList />
            <SnippetList snippets={snippets} />
            <Outlet />
          </div>
        </main>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
