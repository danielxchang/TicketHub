import buildClient from "../api/build-client";

const LandingPage = ({ currentUser }) => {
  const status = `You are ${currentUser ? "signed" : "NOT signed"} in`;
  return <h1>{status}</h1>;
};

LandingPage.getInitialProps = async (context) => {
  const client = buildClient(context);
  const { data } = await client.get("/api/users/currentuser");
  return data;
};

export default LandingPage;
