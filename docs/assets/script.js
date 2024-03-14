var script = script || {};

script.markdown = {
  space: () => (
    ''
  ),
  text: ({ text }) => (
    `<p>${text}</p>`
  ),
  paragraph: ({ text }) => (
    `<p>${text}</p>`
  ),
  list_start: () => (
    '<ul>'
  ),
  list_end: () => (
    '</ul>'
  ),
  list_item_start: () => (
    '<li>'
  ),
  list_item_end: () => (
    '</li>'
  ),
  html: ({ text }) => (
    text
  ),
};

script.markdown.code = ({ lang, text }) => {
  // Remove indentation
  // const initIndent = text.match(/^\s*/)[0];
  // if (initIndent.length) {
  //   const lines = text .split(/\r?\n/);
  //   const isIndented = lines.every((line) => (
  //     !line.length
  //     || line.startsWith(initIndent)
  //   ));
  //
  //   if (isIndented) {
  //     text = lines.map((line) => (
  //       line.substring(initIndent.length)
  //     )).join('\n');
  //   }
  // }
  //
  // // Generate highlighted HTML
  let styledCode;
  try {
    styledCode = Prism.highlight(text,
                                 Prism.languages[lang],
                                 lang);
  } catch (e) {
    return text;
  }
  if(lang === 'js'){
    return (
      `<div data-runkit>
       <pre data-lang="${lang}">`
      + `<code class="lang-${lang}">`
      + `${styledCode}\n`
      + '</code>'
      + '</pre>'
      + `</div>`
    )
  }else{
    return (
      (
        `<pre data-lang="${lang}">`
          + `<code class="lang-${lang}">`
          + `${styledCode}\n`
          + '</code>'
          + '</pre>'
      )
        .replace(/[*]/g, '&#42;')
        .replace(/[_]/g, '&#95;')
    );
  }
}

script.hasSidebar = (file) => (
  !file.match(/^[^/]*\.md$/)
);

script.docsifyPlugin = (hook, vm) => {

  hook.doneEach(() => {
    const file = vm.route.file;

    const body = document.querySelector('body');

    if (script.hasSidebar(file)) {
      body.classList.remove('no-sidebar');
    } else {
      body.classList.add('no-sidebar');
    }
  });
};
