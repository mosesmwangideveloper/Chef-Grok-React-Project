import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function GrokRecipe(props) {
  return (
    <section className="suggested-recipe-container">
      <h2>Chef Grok Recommends:</h2>

      <ReactMarkdown remarkPlugins={[remarkGfm]}>{props.recipe}</ReactMarkdown>
    </section>
  );
}
