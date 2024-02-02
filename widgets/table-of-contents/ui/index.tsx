import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import React from 'react';


const components = {
    p: () => (""),
    li: () => (""),
    code: () => (""),
    h1: (props: any) => (
      <Link href={`#${props.children}`} {...props} id={props.children} className="text-accent-3/70 text-xl font-bold my-1">
        {props.children}
      </Link>
    ),
    h2: (props: any) => (
        <Link href={`#${props.children}`} {...props} id={props.children} className="ml-2 text-accent-3/70 text-xl font-bold my-1">
          {props.children}
        </Link>
      ),
    h3: (props: any) => (
      <Link href={`#${props.children}`} {...props} id={props.children} className="ml-4 text-accent-3/70 text-xl font-bold my-1">
        {props.children}
      </Link>
    ),
    h4: (props: any) => (
        <Link href={`#${props.children}`} {...props} id={props.children} className="ml-6 text-accent-3/70 text-xl font-bold my-1">
          {props.children}
        </Link>
      ),
    h5: (props: any) => (
      <Link href={`#${props.children}`} {...props} id={props.children} className="ml-8 text-accent-3/70 text-xl font-bold my-1">
        {props.children}
      </Link>
    ),   
    h6: (props: any) => (
        <Link href={`#${props.children}`} {...props} id={props.children} className="ml-10 text-accent-3/70 text-xl font-bold my-1">
          {props.children}
        </Link>
    ),   
  }

  interface Props {
    components?: any;
    text?: string;
    [key: string]: any;
  }

const TableOfContents = ({ components: customComponents, text, ...props }: Props) => {
    return (
        <div className='sticky top-28'>
            <h3 className='text-xl font-bold text-accent-3'>Содержание</h3>
            <div className="flex flex-col">
                <MDXRemote
                    source={text || "# Загрузка..."}
                    components={{ ...components, ...(props.components || {}) }}
                />
            </div>
        </div>
      )
};

export default TableOfContents;