import { useLoaderData, Form, redirect, json } from 'remix'; 

// import { sessionCookie } from "~/cookies.js";
import { getSession, destroySession} from "~/session.js"


export async function action({ request }) {
  const session = await getSession(request.headers.get("Cookie"));
  session.set("userId","1001"); 
  return redirect('/login', {
    headers: {
      "Set-Cookie": await destroySession(session),
    },
  });
}


export async function loader({ request }) { 
const sessions = await getSession(request.headers.get("Cookie"));

  // return json({
  //   cookie: await sessionCookie.parse(request.headers.get("Cookie")),
  // });

  return json({
    userId: sessions.get("userId"),
  })


}



export default function Login() {


  const {userId} = useLoaderData();


  return (
    <div id='content-section'>
      <h1>{userId}</h1>
      <Form method="post" reloadDocument> 
        <button type="submit">Logout</button>
      </Form>




    </div>

  );

}
