import MDXComponents from "./MDXComponents";
import { MDXProvider } from "@mdx-js/react";
import { MDXRemote } from "next-mdx-remote";

const Render = ({ source }) => {
    return (
        <>
            <article
                className="prose prose-sm
                prose-h1:p-0 prose-h1:m-0
                prose-h2:p-0 prose-h2:m-0
                prose-h3:p-0 prose-h3:m-0
                prose-h4:p-0 prose-h4:m-0
                prose-p0:p-0 prose-p:m-0
                prose-a:p-0 prose-a:m-0
                prose-blockquote:p-1 prose-blockquote:m-0 
                prose-ol:pl-6 prose-ol:py-0 prose-ol:pr-0 prose-ol:m-0
                prose-ul:pl-6 prose-ul:py-0 prose-ul:pr-0 prose-ul:m-0
                prose-li:pl-1 prose-li:m-0
            "
            >
                <MDXRemote {...source} />
            </article>
        </>
    );
};

export default Render;
