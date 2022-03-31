import React from 'react'; 
import App from '../root'; 



export default function Index() {
  return ( 
    <main>
      <div id='header'></div>
      <div id='window-wrapper'>
      

      <div id='category-section'>
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


      <div id='overview-section'>

      <div>
          <h4>Whatever title HTML</h4>
        </div>
        <div>
          <h4>Whatever title CSS</h4>
        </div>
        <div>
          <h4>JavaScript Whatever title</h4>
        </div>

      </div>


      <div id='content-section'>

        <div>
          <h1>Title of the code</h1>
          <p>description description description description description </p>
          <p>code code code code code code code code code </p>

        </div>

      </div>


      </div>
    </main>
  );
}
