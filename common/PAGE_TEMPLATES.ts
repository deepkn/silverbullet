export const SETTINGS_TEMPLATE = `#meta

This page contains settings for configuring SilverBullet. A list of built-in settings [[!silverbullet.md/SETTINGS|can be found here]].

To update \`libraries\` specified here: {[Libraries: Update]}

\`\`\`yaml
indexPage: index
libraries:
- source: "[[!silverbullet.md/Library/Core/*]]"
\`\`\`
`;

export const INDEX_TEMPLATE =
  `This is the index page of your fresh SilverBullet space. It is the default page that is loaded when you open a space. In addition, there is also a [[SETTINGS]] page that contains settings for configuring SilverBullet.

For your convenience we're embedding some on-boarding info below. Feel free to delete it once you're done reading it.

![[!silverbullet.md/Getting Started]]
`;
