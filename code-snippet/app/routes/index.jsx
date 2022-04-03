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
        <div className='search-wrapper'>

          <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search" title="search"></input>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="21.205" height="19.285" viewBox="0 0 21.205 19.285">
              <path id="Icon_feather-filter" data-name="Icon feather-filter" d="M22.206,4.5H3l7.682,9.084v6.28l3.841,1.921v-8.2Z" transform="translate(-2 -3.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
            </svg>
          </button>

        </div>
        {snippets.map((snippet) => {
          return (
            <div key={snippet._id} className="list-item">

              <Link to={"snippets/" + snippet._id}>{snippet.title}</Link>
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
