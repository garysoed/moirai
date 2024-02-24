declare({
  name: 'link',
  as: shell({
    bin: 'npm',
    flags: ['link', 'devbase'],
  }),
});
