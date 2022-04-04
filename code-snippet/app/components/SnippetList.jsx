import {Link} from 'remix'
export default function SnippetList(props)
{
    const snippets = props.snippets;
    return (
       
       <div id='overview-section'>
           <div className='search-wrapper'>

               <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search" title="search"></input>
               <button>
                   <svg xmlns="http://www.w3.org/2000/svg" width="16.727" height="16.728" viewBox="0 0 16.727 16.728">
                       <g id="Icon_feather-search" data-name="Icon feather-search" transform="translate(-3.5 -3.5)">
                           <path id="Path_251" data-name="Path 251" d="M17.223,10.862A6.362,6.362,0,1,1,10.862,4.5a6.362,6.362,0,0,1,6.362,6.362Z" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                           <path id="Path_252" data-name="Path 252" d="M28.434,28.434l-3.459-3.459" transform="translate(-9.621 -9.621)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                       </g>
                   </svg>

               </button>

           </div>
           {snippets.map((snippet) => {
               return (
                   <div key={snippet._id} className="list-item">

                       <Link to={"/snippets/" + snippet._id}>{snippet.title}</Link>
                   </div>
               );
           })}

       </div>

    )
}