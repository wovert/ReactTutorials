import Link from "next/link";
import Hello from "../components/Hello";
import dynamic from "next/dynamic";

const DynamicHello = dynamic(import("../components/Hello"));

export default () => (
  <div>
    <h1>Index</h1>
    <Hello />
    <DynamicHello />
    <nav>
      {/* prefech预加载 about 内容 */}
      <Link href="/about" prefetch>
        <a>About</a>
      </Link>
    </nav>
  </div>
);
