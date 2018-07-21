export default {
  selectedGroupId: 1,
  groups: [
    {
      id: 1,
      title: 'Cats group',
    },
    {
      id: 2,
      title: 'Dogs group',
    },
  ],
  items: [
    {
      id: 1,
      groupId: 1,
      title: 'Siamese',
      checked: true,
    },
    {
      id: 2,
      groupId: 1,
      title: 'Cheshire',
      checked: false,
    },
    {
      id: 3,
      groupId: 1,
      title: 'Nyan',
      checked: true,
    },
    {
      id: 4,
      groupId: 2,
      title: 'Sausage dog',
      checked: true,
    },
    {
      id: 5,
      groupId: 2,
      title: 'Dalmatian',
      checked: true,
    },
    {
      id: 6,
      groupId: 2,
      title: 'Pitbull',
      checked: false,
    },
  ],
};
