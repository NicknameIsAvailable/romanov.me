import React from 'react';
import Markdown from '@/widgets/markdown/ui';
import TableOfContents from '@/widgets/table-of-contents/ui';

const fetchData = async (id: number) => {
  const response = await fetch(`http://localhost:3000/api/blog?id=${id}`)
  const data = await response.json()
  return data
}

const Page = async ({params}: {params: {id: number}}) => {

  const data: any = await fetchData(params.id)
  const state = data.data
  const createdAt = new Date(state?.createdAt)

  return (
    <>
      <head>
        <title>{state.title || "Загрузка"}</title>
        <meta name="description" content={state.description || "Загрузка"}/>
      </head>
      <main className="bg-light min-h-screen pt-10">
        <div className="container mx-auto">
          <div className="border-b-2 border-b-accent-3/30 flex flex-col gap-5">
          <h1 className="text-5xl font-bold text-accent-3">{state?.title}</h1>
          <h3 className="text-accent-3">{createdAt?.getDate()?.toString()}.{createdAt?.getUTCMonth()?.toString()}.{createdAt?.getFullYear()?.toString()}</h3>
          {
            state?.tags.map((tag: string, key: number) => <div key={key}>{tag}</div>)
          }
        </div>
        <div className="mt-10 flex gap-10">
          <div className="max-w-6xl">
            <Markdown text={state?.content}/>
          </div>
          <div>
            <TableOfContents text={state?.content}/>
          </div>
        </div>
        </div>
      </main>
    </>
  );
};

export default Page;