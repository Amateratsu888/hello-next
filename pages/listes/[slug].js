import React from "react";
export default function detail(props) {
  return (
    <>
      <div className="w-full h-1/2 flex justify-center mx-0 mt-20 items-center flex-col">
        <h1 className="text-3xl font-bold text-center mt-20">
          Listes of {props.data.name}
        </h1>
        <table className="tableau border border-slate-700border-separate border-spacing-2 border border-slate-500 colunms-5 mr-0  mt-20 text-center">
          <thead>
            <tr>
              <th className="border border-slate-600">Eglish</th>
              <th className="border border-slate-600">French</th>
            </tr>
          </thead>
          <tbody>
            {props.data.data.map((el, index) => (
              <tr key={index}>
                <td className="border border-slate-700 px-8 py-4">{el.en}</td>
                <td className="border border-slate-700 px-8 py-4">{el.fr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const array = await import("../../pathsvoc.json");
  const data = await array.englishList.map((el) => ({
    params: { slug: el.name },
  }));

  return {
    paths: data,
    // [
    //   {params : {slug:"words"}},
    // ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const slug = context.params.slug;
  const array = await import("../../pathsvoc.json");
  const data = await array.englishList.find((el) => el.name === slug);
  return {
    props: { data },
  };
}
