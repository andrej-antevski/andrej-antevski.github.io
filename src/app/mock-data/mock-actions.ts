import { Action } from '../interface/action.interface';

export const _ACTIONS: Action[] = [
  {
    id: 1,
    header: 'Header 1',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcohenwoodworking.com%2Fwp-content%2Fuploads%2F2016%2F09%2Fimage-placeholder-500x500.jpg&f=1&nofb=1',
    points: 5,
    applicants: ['Andrej Antevski'],
    chat: ['Andrej Antevski: Hello'],
    time: '13:30-15:30',
    date: new Date(),
    location: 'Skopje',
    organizer: 'Grad Skopje',
    pending: [
      {name: 'Filip Filipovski', reason: 'Сакам да помагам', points: 3},
      {name: 'Mario Mariovski', reason: 'Ме исполнува', points: 90},
      {name: 'Trajce Trajcevski', reason: 'Сакам да пробам нешто ново', points: -3}
      ]
  },
  {
    id: 2,
    header: 'Header 2',
    summary: 'Pellentesque habitant morbi tristique senectus et netus et malesuada. In metus vulputate eu scelerisque felis. Sed augue lacus viverra vitae congue. Commodo odio aenean sed adipiscing diam',
    text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada. In metus vulputate eu scelerisque felis. Sed augue lacus viverra vitae congue. Commodo odio aenean sed adipiscing diam. Vitae aliquet nec ullamcorper sit amet risus nullam eget. Nec sagittis aliquam malesuada bibendum arcu. Diam sollicitudin tempor id eu nisl. Turpis egestas sed tempus urna et pharetra. In nibh mauris cursus mattis. Duis ut diam quam nulla. Orci ac auctor augue mauris augue. Duis ultricies lacus sed turpis tincidunt id aliquet risus. Arcu vitae elementum curabitur vitae nunc sed. Non enim praesent elementum facilisis leo vel fringilla. Nulla at volutpat diam ut venenatis tellus in. Ultricies mi eget mauris pharetra et ultrices neque ornare. Sed tempus urna et pharetra pharetra massa massa ultricies. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Interdum velit laoreet id donec ultrices. Non curabitur gravida arcu ac tortor dignissim',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcohenwoodworking.com%2Fwp-content%2Fuploads%2F2016%2F09%2Fimage-placeholder-500x500.jpg&f=1&nofb=1',
    points: 5,
    applicants: ['Andrej Antevski'],
    chat: ['Andrej Antevski: Hello'],
    time: '13:30-15:30',
    date: new Date(),
    location: 'Skopje',
    organizer: 'Grad Skopje',
    pending: [
      {name: 'Filip Filipovski', reason: 'Сакам да помагам', points: 2},
      {name: 'Mario Mariovski', reason: 'Ме исполнува', points: 53},
      {name: 'Trajce Trajcevski', reason: 'Сакам да пробам нешто ново', points: 3}
    ]
  },
  {
    id: 3,
    header: 'Header 3',
    summary: 'Facilisi morbi tempus iaculis urna id volutpat lacus laoreet. Nibh praesent tristique magna sit amet purus gravida quis. Viverra nam libero justo laoreet sit. Mattis enim ut tellus elementum sagittis vitae et leo.',
    text: 'Facilisi morbi tempus iaculis urna id volutpat lacus laoreet. Nibh praesent tristique magna sit amet purus gravida quis. Viverra nam libero justo laoreet sit. Mattis enim ut tellus elementum sagittis vitae et leo. Consectetur adipiscing elit ut aliquam purus sit amet luctus. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Quam lacus suspendisse faucibus interdum posuere. Nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Sagittis id consectetur purus ut faucibus pulvinar. Erat pellentesque adipiscing commodo elit at. Libero justo laoreet sit amet cursus sit amet dictum sit. Sapien faucibus et molestie ac feugiat',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcohenwoodworking.com%2Fwp-content%2Fuploads%2F2016%2F09%2Fimage-placeholder-500x500.jpg&f=1&nofb=1',
    points: 5,
    applicants: ['Andrej Antevski'],
    chat: ['Andrej Antevski: Hello'],
    time: '13:30-15:30',
    date: new Date(),
    location: 'Skopje',
    organizer: 'Grad Skopje',
    pending: [
      {name: 'Filip Filipovski', reason: 'Сакам да помагам', points: 12},
      {name: 'Mario Mariovski', reason: 'Ме исполнува', points: 4},
      {name: 'Trajce Trajcevski', reason: 'Сакам да пробам нешто ново', points: 0}
    ]
  },
  {
    id: 4,
    header: 'Header 4',
    summary: 'Hac habitasse platea dictumst vestibulum rhoncus est. Neque gravida in fermentum et sollicitudin ac orci phasellus egestas. Enim neque volutpat ac tincidunt vitae semper quis lectus nulla.',
    text: 'Hac habitasse platea dictumst vestibulum rhoncus est. Neque gravida in fermentum et sollicitudin ac orci phasellus egestas. Enim neque volutpat ac tincidunt vitae semper quis lectus nulla. Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed. Et pharetra pharetra massa massa ultricies mi quis. Aliquam sem et tortor consequat id porta nibh. Vitae elementum curabitur vitae nunc sed velit. Habitasse platea dictumst vestibulum rhoncus. Eget lorem dolor sed viverra. Duis ut diam quam nulla porttitor massa id neque aliquam. Malesuada pellentesque elit eget gravida cum sociis natoque. Sagittis purus sit amet volutpat consequat mauris nunc. Est ultricies integer quis auctor elit. Nunc consequat interdum varius sit amet mattis vulputate',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcohenwoodworking.com%2Fwp-content%2Fuploads%2F2016%2F09%2Fimage-placeholder-500x500.jpg&f=1&nofb=1',
    points: 5,
    applicants: ['Andrej Antevski'],
    chat: ['Andrej Antevski: Hello'],
    time: '13:30-15:30',
    date: new Date(),
    location: 'Skopje',
    organizer: 'Grad Skopje',
    pending: [
      {name: 'Filip Filipovski', reason: 'Сакам да помагам', points: 5},
      {name: 'Mario Mariovski', reason: 'Ме исполнува', points: 35},
      {name: 'Trajce Trajcevski', reason: 'Сакам да пробам нешто ново', points: 53}
    ]
  }
];
