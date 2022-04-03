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

    <div id='window-wrapper'>

      {/* category section-------------------------------------------------------------- */}
      <div id='category-section'>
        <div>
          <h3>All</h3>
        </div>
        <div>
          <h3>Favourites</h3>
        </div>
        <div>
          <h3>HTML</h3>
        </div>
        <div>
          <h3>CSS</h3>
        </div>
        <div>
          <h3>JavaScript</h3>
        </div>

      </div>



      {/* list of titles ------------------------------------------------------------- */}

      <div id='overview-section'>
        {snippets.map((snippet) => {
          return (
            <div key={snippet._id} className="list-item">
              
            <Link  to={"snippets/"+snippet._id}>{snippet.title}</Link>
            </div>
          );
        })}

      </div>

      {/* code - snippet content -------------------------------------------------------------- */}


      <div id='content-section'> 


              
 
      </div>
    </div>
  );

}
