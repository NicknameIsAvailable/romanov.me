import { MDXRemote } from 'next-mdx-remote/rsc'

const components = {
    p: (props: any) => (
        <p {...props} className="font-sans text-base text-white my-2">
            {props.children}
        </p>
    ),
    code: (props: any) => {
      <p {...props} className="font-sans text-base text-white my-2">
        {props.children}
      </p>
    },
    li: (props: any) => (
        <li {...props} className="font-sans text-base text-white my-2">
            - {props.children}
        </li>
    ),
    h1: (props: any) => (
      <h1 {...props} id={props.children} className="font-sans text-white text-5xl font-bold my-5">
        {props.children}
      </h1>
    ),
    h2: (props: any) => (
        <h2 {...props} id={props.children} className="font-sans text-white text-4xl font-bold my-5">
          {props.children}
        </h2>
      ),
    h3: (props: any) => (
      <h3 {...props} id={props.children} className="font-sans text-white text-3xl font-bold my-5">
        {props.children}
      </h3>
    ),
    h4: (props: any) => (
        <h4 {...props} id={props.children} className="font-sans text-white text-2xl font-bold my-5">
          {props.children}
        </h4>
      ),
    h5: (props: any) => (
      <h5 {...props} id={props.children} className="font-sans text-white text-xl font-bold my-5">
        {props.children}
      </h5>
    ),   
    h6: (props: any) => (
        <h6 {...props} id={props.children} className="font-sans text-white text-l font-bold my-5">
          {props.children}
        </h6>
    ),   
  }

  interface Props {
    components?: any;
    text?: string;
    [key: string]: any;
  }

export default async function Markdown({ components: customComponents, text, ...props }: Props) {
  return (
    <MDXRemote 
      source={text || "# Загрузка..."} 
      components={{ ...components, ...(props.components || {}) }}
   />
  )
}