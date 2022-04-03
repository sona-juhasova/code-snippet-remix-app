import { Link, useLoaderData } from 'remix';
import connectDb from '~/db/connectDb.server';

export async function loader() {
    const db = await connectDb();
    const snippets = await db.models.CodeSnippet.find();

    return snippets;

}



export default function AddNewSnippet() {


    const snippets = useLoaderData();



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

                            <Link to={"snippets/" + snippet._id}>{snippet.title}</Link>
                        </div>
                    );
                })}

            </div>

            {/* code - snippet content -------------------------------------------------------------- */}


            <div id='add-new-section'>
                <div className='content-wrapper'>
                    <h1>Create new</h1>



                    <form method="post" action="../index">

                        <label><input name="name" type="text" placeholder='Title' /></label>  <br></br>
                        <label><textarea name="description" placeholder='Description'></textarea></label>    <br></br>
                        <label><textarea name="code-snippet" placeholder='Code Snippet'></textarea></label>   <br></br>
                        <select id="language" name="language">
                            <option value="HTML">HTML</option>
                            <option value="CSS">CSS</option>
                            <option value="JavaScript">JavaScript</option> 
                        </select>                             <br></br>
                        <button type="submit">Create</button>   <br></br>

                    </form>


                </div>
            </div>
        </div>
    );

}
