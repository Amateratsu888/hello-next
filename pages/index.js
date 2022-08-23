import React from "react";
import Navbar from "../components/Navbar/Navbar";

export default function index(props) {
  console.log("🚀 ~ file: index.js ~ line 5 ~ index ~ props", props);

  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-20">Hello next js</h1>
      <table className="tableau border border-slate-700border-separate border-spacing-2 border border-slate-500 colunms-5 mr-0 ml-60 mt-20 text-center">
        <thead>
          <tr>
            <th className="border border-slate-600">Eglish</th>
            <th className="border border-slate-600">French</th>
          </tr>
        </thead>
        <tbody>
          {props.array.map((el,index) => (
            <tr key={index}>
              <td className="border border-slate-700 px-8 py-4">{el.en}</td>
              <td className="border border-slate-700 px-8 py-4">{el.fr}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export async function getStaticProps() {
  const data = await import("../vocabulary.json");
  const array = data.vocabulary;
  if(array.length === 0) {
    return {
      notFound: true,
    }
  }
  if(array.length === 1) {
    return {
      redirect: {
        destination : "/"
      }
    }
  }
  return {
    props: { array },
  };
}
