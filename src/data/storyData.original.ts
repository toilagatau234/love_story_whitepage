import { StoryData } from '../types/story';

export const storyDataOriginal: StoryData = {
  meta: {
    title: 'A Story Only We Know',
    description: 'Hành trình kỷ niệm và lời ngỏ chân thành dành riêng cho Bé Cam.',
    bgMusicUrl: '/audio/ambient.mp3',
  },

  hero: {
    eyebrow: 'A Story Only We Know',
    title: 'Có một câu chuyện anh muốn kể Bé Cam nghe',
    subtitle: 'Từng khoảnh khắc giản dị, đong đầy của riêng hai ta.',
    ctaText: 'Bắt đầu câu chuyện',
    dateText: 'From The First Day',
  },

  chapters: [
    // 1. NHỮNG NGÀY THANH XUÂN (3 ảnh)
    {
      id: 'chapter-01-wishes',
      tag: 'Những Ngày Đầu',
      title: 'Khoảng trời riêng có Em',
      lead: 'duy nhất một người, có thể làm cả thanh xuân của anh trở nên đặc biệt. cho anh biết yêu thật sự là như thế nào.',
      textPosition: 'top-left',
      layoutVariant: 'asymmetric-trio',
      photos: [
        {
          id: 'wishes-01',
          url: '/images/01-wishes/photo-01.jpg',
          alt: 'Khoảnh khắc kỷ niệm 01',
          aspectRatio: '3/4',
        },
        {
          id: 'wishes-02',
          url: '/images/01-wishes/photo-02.jpg',
          alt: 'Khoảnh khắc kỷ niệm 02',
          aspectRatio: '1/1',
        },
        {
          id: 'wishes-03',
          url: '/images/01-wishes/photo-03.jpg',
          alt: 'Khoảnh khắc kỷ niệm 03',
          aspectRatio: '3/4',
        },
      ],
    },

    // 2. KỶ NIỆM ĐẦU TIÊN (1 ảnh)
    {
      id: 'chapter-02-treasure',
      tag: 'Kỷ Niệm',
      title: 'Tấm hình chụp chung năm đó',
      lead: 'Tấm hình duy nhất mà 2 đứa chụp cùng với nhau.',
      textPosition: 'bottom-left',
      layoutVariant: 'grand-single',
      photos: [
        {
          id: 'treasure-01',
          url: '/images/01-treasure/photo-01.jpg',
          alt: 'Tấm hình chụp chung',
          aspectRatio: '4/3',
        },
      ],
    },


    // 4. BUỔI HẸN ĐẦU TIÊN (4 ảnh)
    {
      id: 'chapter-04-first-date',
      tag: 'Khoảnh Khắc Đáng Nhớ',
      title: 'Buổi date không bao giờ quên',
      lead: 'Đàng hoàng thưa với cha mẹ để được đón Bé Cam đi chơi, những cuộc trò chuyện, những lời kể vui buồn.',
      textPosition: 'bottom-right',
      layoutVariant: 'editorial-quad',
      photos: [
        {
          id: 'date-01',
          url: '/images/03-first-date/photo-01.jpg',
          alt: 'Buổi date đầu tiên 01',
          aspectRatio: '3/4',
        },
        {
          id: 'date-02',
          url: '/images/03-first-date/photo-02.jpg',
          alt: 'Buổi date đầu tiên 02',
          aspectRatio: '3/4',
        },
        {
          id: 'date-03',
          url: '/images/03-first-date/photo-03.jpg',
          alt: 'Buổi date đầu tiên 03',
          aspectRatio: '3/4',
        },
        {
          id: 'date-04',
          url: '/images/03-first-date/photo-04.jpg',
          alt: 'Buổi date đầu tiên 04',
          aspectRatio: '3/4',
        },
      ],
    },

    // 5. NHỮNG DẶM ĐƯỜNG XA (4 ảnh)
    {
      id: 'chapter-05-xeo-quyt',
      tag: 'Những Chuyến Đi',
      title: 'Từng dặm đường cùng nhau',
      lead: 'Những chuyến đi xa cùng Bé Cam, chỉ cần có em đồng hành ở phía sau, mọi chặng đường đều hóa bình yên.',
      textPosition: 'left',
      layoutVariant: 'editorial-quad',
      photos: [
        {
          id: 'xeo-quyt-01',
          url: '/images/03-xeo-quyt/photo-01.jpg',
          alt: 'Chuyến đi 01',
          aspectRatio: '3/4',
        },
        {
          id: 'xeo-quyt-02',
          url: '/images/03-xeo-quyt/photo-03.jpg',
          alt: 'Chuyến đi 03',
          aspectRatio: '3/4',
        },
        {
          id: 'trips-02',
          url: '/images/03-trips/photo-02.jpg',
          alt: 'Chuyến đi 02',
          aspectRatio: '4/3',
        },
        
        {
          id: 'trips-01',
          url: '/images/03-trips/photo-01.jpg',
          alt: 'Chuyến đi 04',
          aspectRatio: '4/3',
        },
      ],
    },

    // 6. CUỐN ALBUM KỶ NIỆM (6 ảnh)
    {
      id: 'chapter-06-album',
      tag: 'Album Kỷ Niệm',
      title: 'A Story Only We Know',
      lead: 'Mỗi bức ảnh là một mảnh ghép chân thật, ghi lại những khoảnh khắc đẹp nhất mà 2 ta đã dành cho nhau và nhũng câu chuyện của riêng 2 chúng ta.',
      textPosition: 'center',
      layoutVariant: 'grand-photobook',
      photos: [
        {
          id: 'album-02',
          url: '/images/04-album/photo-02.jpg',
          alt: 'Album kỷ niệm 02',
          aspectRatio: '4/3',
        },
        {
          id: 'album-03',
          url: '/images/04-album/photo-03.jpg',
          alt: 'Album kỷ niệm 03',
          aspectRatio: '3/4',
        },
        {
          id: 'album-01',
          url: '/images/04-album/photo-01.jpg',
          alt: 'Album kỷ niệm 01',
          aspectRatio: '3/4',
        },
        {
          id: 'album-04',
          url: '/images/04-album/photo-04.jpg',
          alt: 'Album kỷ niệm 04',
          aspectRatio: '3/4',
        },
        {
          id: 'album-05',
          url: '/images/04-album/photo-05.jpg',
          alt: 'Album kỷ niệm 05',
          aspectRatio: '1/1',
        },
        {
          id: 'album-06',
          url: '/images/04-album/photo-06.jpg',
          alt: 'Album kỷ niệm 06',
          aspectRatio: '4/3',
        },
      ],
    },
  ],

  climax: {
    tag: '',
    title: 'Điều anh muốn gửi gắm đến Bé Tú',
    lead: 'Đi qua từng kỷ niệm, đây là những lời xuất phát từ tận đáy lòng anh muốn trực tiếp nói cùng em.',
    buttonText: 'Mở điều bất ngờ',
    openedTitle: 'Dành Trọn Cho Em',
    bouquetImage: {
      id: 'bouquet-final',
      url: '/images/flower-bouquet.jpg',
      alt: 'Bó hoa tươi thắm dành riêng cho Bé Cam',
      aspectRatio: '4/3',
    },
    confessionLines: [
      'Bó hoa này là bó hoa đầu tiên anh tặng cho một người con gái. Anh muốn tạo cho em bất ngờ cơ, nhưng anh sợ nó chưa đúng ý dù anh biết em sẽ không bận tâm và luôn vui vẻ với những món quà anh tặng cho em. Nhưng anh luôn muốn cho em những cái tốt nhất.',
      'Anh rất hạnh phúc vì em đã xuất hiện trong cuộc đời anh, chưa bao giờ hối hận vì đã thương em. Mong rằng em sẽ luôn bên cạnh anh và không rời đi nữa, để anh được là người được đồng hành và che chở cho em.',
    ],
    proposalQuestion: 'Bé Tú đồng ý làm người yêu anh nhé',
    epilogue: 'Bó hoa này và anh đang đợi em ngoài đời thực.',
  },
};
