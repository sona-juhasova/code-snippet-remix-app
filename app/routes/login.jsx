import { useLoaderData, Form, redirect, json, Link, useActionData } from 'remix';

// import { sessionCookie } from "~/cookies.js";
import { getSession, commitSession } from "~/session.js"


import connectDb from '~/db/connectDb.server';


export async function action({ request }) {
  const session = await getSession(request.headers.get("Cookie"));
  const db = await connectDb();
  const form = await request.formData();

  session.set("userId", "1001");
  return redirect('/logout', {
    headers: {
      "Set-Cookie": await commitSession(session),
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


  const { userId } = useLoaderData();
  const actionData = useActionData();

  if (userId) {
    return (
      <div>
        <p>You are already logged in as user id {userId}</p>
        <Link to="/">Go home</Link>
        <Form method='post' action='/logout'>

          <button type="submit">Logout</button>
        </Form>
      </div>
    )
  } else {
    return (
      <div id='content-section'>
        <h1>{userId}</h1>
        <h2>Log in</h2>
        {actionData?.errorMessage ? (
          <p>{actionData?.errorMessage} </p>
        ) : null}


        <Form method="post" reloadDocument>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
          />

          <input
            type="text"
            name="password"
            id="password"
            placeholder="Password"
          />

          <button type="submit">Login</button>
        </Form>




      </div>

    );
  }




} 