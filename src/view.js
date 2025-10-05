import { createRoot } from "react-dom/client";
import "./style.scss";
import Style from "./Components/Common/Style";
import Stack from "./Components/Common/Stack";

document.addEventListener("DOMContentLoaded", () => {
  const blockNameEls = document.querySelectorAll(
    ".wp-block-b-blocks-page-stack"
  );
  blockNameEls.forEach((blockNameEl) => {
    const attributes = JSON.parse(blockNameEl?.dataset?.attributes);

    const preEl = blockNameEl.querySelector("pre");
    const content = preEl.innerHTML;

    createRoot(blockNameEl).render(
      <>
        <Style attributes={attributes} id={blockNameEl.id} />

        <Stack attributes={attributes} isEditor={false}>
          <div
            className="prefixContent"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </Stack>
      </>
    );

    blockNameEl?.removeAttribute("data-attributes");
  });
});
