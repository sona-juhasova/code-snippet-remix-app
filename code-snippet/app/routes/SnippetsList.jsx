import { useLoaderData,json } from 'remix';
import connectDb from '~/db/connectDb.server';


export async function loader() {
    const db = await connectDb();
    const snippets = await db.models.CodeSnippet.find();
 
     return json(snippets);
    
   }

export default function SnippetList() {
    
    const snippets = useLoaderData();
    return (
        
            <div>

            {snippets.map((snippet) => {
                return (
                    <div key={snippet._id}> 
                            {snippet.title}
                            
                       
                    </div>
                );
            })} 


        </div>
    )
}
