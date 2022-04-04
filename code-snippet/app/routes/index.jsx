import { Link, useLoaderData } from 'remix';
import connectDb from '~/db/connectDb.server';

export async function loader() {
  const db = await connectDb();
  const snippets = await db.models.CodeSnippet.find();

  return snippets;

}



export default function Index() {


  const snippets = useLoaderData();

  function listItemActive(e) {
    var active_item = document.getElementByclassName("list-item");
    active_item.classList.add("active-list-item");
    console.log("i work");
  }


  return (
      <div id='content-section'>




      </div>

  );

}
