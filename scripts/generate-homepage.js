const fs = require("fs");

const DOMAIN = "jslib.k6.io";


const logo = `
  <svg width="199px" height="142px" viewBox="0 0 199 142">
  <defs>
    <path
      d="M174.53,137.573 C175.036003,137.573 175.465332,137.749332 175.818,138.102 C176.170668,138.454668 176.339333,138.883997 176.324,139.39 C176.324,139.896003 176.143835,140.325332 175.7835,140.678 C175.423165,141.030668 174.990003,141.207 174.484,141.207 C173.993331,141.191667 173.571668,141.007668 173.219,140.655 C172.866332,140.302332 172.697667,139.865336 172.713,139.344 C172.713,138.853331 172.889332,138.431668 173.242,138.079 C173.594668,137.726332 174.023997,137.557667 174.53,137.573 Z M177.842,124.9 L181.2,124.9 L181.2,141 L177.842,141 L177.842,124.9 Z M190.607,124.693 C191.741672,124.693 192.799662,124.911498 193.781,125.3485 C194.762338,125.785502 195.61333,126.37583 196.334,127.1195 C197.05467,127.86317 197.618165,128.737162 198.0245,129.7415 C198.430835,130.745838 198.634,131.815328 198.634,132.95 C198.634,133.916005 198.488335,134.835996 198.197,135.71 C197.905665,136.584004 197.491669,137.373663 196.955,138.079 C196.418331,138.784337 195.77817,139.386164 195.0345,139.8845 C194.29083,140.382836 193.474338,140.739332 192.585,140.954 L190.975,138.217 C191.619003,138.171 192.205497,137.998501 192.7345,137.6995 C193.263503,137.400499 193.719665,137.017169 194.103,136.5495 C194.486335,136.081831 194.785332,135.537503 195,134.9165 C195.214668,134.295497 195.322,133.640003 195.322,132.95 C195.322,132.22933 195.203168,131.547003 194.9655,130.903 C194.727832,130.258997 194.402002,129.699336 193.988,129.224 C193.573998,128.748664 193.079503,128.373001 192.5045,128.097 C191.929497,127.820999 191.297003,127.683 190.607,127.683 C189.916997,127.683 189.284503,127.820999 188.7095,128.097 C188.134497,128.373001 187.636169,128.748664 187.2145,129.224 C186.792831,129.699336 186.463168,130.258997 186.2255,130.903 C185.987832,131.547003 185.869,132.22933 185.869,132.95 C185.869,133.67067 185.987832,134.352997 186.2255,134.997 C186.463168,135.641003 186.792831,136.200664 187.2145,136.676 C187.636169,137.151336 188.134497,137.526999 188.7095,137.803 C189.284503,138.079001 189.916997,138.217 190.607,138.217 L190.607,141.207 C189.472328,141.207 188.414338,140.992335 187.433,140.563 C186.451662,140.133665 185.60067,139.543337 184.88,138.792 C184.15933,138.040663 183.595835,137.162838 183.1895,136.1585 C182.783165,135.154162 182.58,134.084672 182.58,132.95 C182.58,131.815328 182.783165,130.745838 183.1895,129.7415 C183.595835,128.737162 184.15933,127.86317 184.88,127.1195 C185.60067,126.37583 186.451662,125.785502 187.433,125.3485 C188.414338,124.911498 189.472328,124.693 190.607,124.693 Z"
    />
  </defs>
  <g id="Page-2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
    <g id="Group-3" transform="translate(-257.000000, -1.000000)">
      <g id="K6.IO" transform="translate(257.000000, 1.000000)">
        <g id=".IO">
          <use fill="#FFFFFF" xlinkHref="#path-1" />
          <use fill="#5C5C5C" xlinkHref="#path-1" />
        </g>
        <path
          d="M156.9,116.8 L155.192,116.8 L147.02,128.5 C146.443997,129.196003 146.000002,129.987996 145.688,130.876 C145.375998,131.764004 145.22,132.699995 145.22,133.684 C145.22,134.860006 145.447998,135.969995 145.904,137.014 C146.360002,138.058005 146.977996,138.969996 147.758,139.75 C148.235339,140.227339 148.762109,140.644005 149.338315,141 L142.649607,141 L134.24,130.084 L132.188,135.736 L136.211632,141 L128.516,141 L128.516,136.132 L143.42,116.8 L136.976,116.8 L128.516,127.852 L128.516,116.8 L123.26,116.8 L123.26,141 L28,141 L0,141 L49.5,42 L63.5,70 L98.5,0 L156.9,116.8 Z M158.780917,120.561835 L169,141 L158.309685,141 C158.885891,140.644005 159.412661,140.227339 159.89,139.75 C160.670004,138.969996 161.281998,138.058005 161.726,137.014 C162.170002,135.969995 162.392,134.860006 162.392,133.684 C162.392,132.675995 162.230002,131.722005 161.906,130.822 C161.581998,129.921996 161.132003,129.112004 160.556,128.392 C159.979997,127.671996 159.302004,127.054003 158.522,126.538 C157.741996,126.021997 156.884005,125.644001 155.948,125.404 L154.832,130.3 C155.624004,130.540001 156.271997,130.989997 156.776,131.65 C157.280003,132.310003 157.532,133.059996 157.532,133.9 C157.532,134.428003 157.436001,134.913998 157.244,135.358 C157.051999,135.802002 156.782002,136.191998 156.434,136.528 C156.085998,136.864002 155.690002,137.127999 155.246,137.32 C154.801998,137.512001 154.328003,137.608 153.824,137.608 C153.319997,137.608 152.840002,137.512001 152.384,137.32 C151.927998,137.127999 151.526002,136.864002 151.178,136.528 C150.829998,136.191998 150.560001,135.802002 150.368,135.358 C150.175999,134.913998 150.08,134.428003 150.08,133.9 C150.08,133.419998 150.169999,132.964002 150.35,132.532 C150.530001,132.099998 150.775998,131.716002 151.088,131.38 L158.780917,120.561835 Z"
          fill="#218db3"
        />
      </g>
    </g>
  </g>
  </svg>
`;

const createLink = (name, version, main) => {
  return `<a target="_blank" href="${DOMAIN}/${name}/${version}/${main}">${version}</a>`;
};

const versionsTable = () => {
  const supported = require('../supported.json');
  const trs = Object.entries(supported).map(([name, versionsMap]) => {
    const versionLinks = Object.keys(versionsMap).map(version => createLink(name, version, "index.js")).join(", ");
    return `<tr>
      <td>${name}</td>
      <td>${versionLinks}</td>
    </tr>`
  }).join("");

  return `
    <table class="table">
      ${trs}
    </table>
  `;
};

const codeExample = name => {
  const snippet = fs.readFileSync(`./static/examples/${name}`, 'utf-8');
  return `<pre><code class="code language-js">${snippet}</code></pre>`;
};

function main() {
  const markup = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" href="https://jslib.k6.io/favicon.png" sizes="32x32">
    <title>lib.k6.io - JS std lib</title>
    <style> ${fs.readFileSync('./static/styles.css', 'utf-8')}</style>
  </head>
  <body>
    <main class="page">
      <header class="header">
        <div class="logo">
          ${logo}
        </div>
        <div>
          <h1 class="title"><span class="text-yellow">js</span>lib.<span class="text-blue">K6</span>.io</h1>
          <p class="description">Useful utility libs for K6 scripts</p>
        </div>
      </header>
      <section class="page-section">
        <h2>Available libs</h2>
        ${versionsTable()}
      </section>
      <section class="page-section">
        <h2>Examples</h2>
        <p>Importing from jslib.k6.io</p>
        ${codeExample('imports.js')}
        <p>Full script showcase</p>
        ${codeExample('full-script.js')}
      </section>

      <section class="page-section">
        <h2>Resources</h2>
        <ul class="list-unstyled">
          <li>
            <p>
              <a href="https://docs.k6.io/docs">K6 API docs</a>
            </p>
          </li>
        </ul>
      </section>
    </main>
    <script>
      ${fs.readFileSync('./static/prisms.js', 'utf-8')}
    </script>
  </body>
  </html>
  `;

  fs.writeFileSync('./lib/index.html', markup);
}

main();