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
    subtitle: 'Từng thước phim, từng khoảnh khắc giản dị mà đong đầy của riêng hai chúng mình.',
    ctaText: 'Bắt đầu câu chuyện',
    dateText: 'From The First Day',
  },

  chapters: [
    // 1. NHỮNG NGÀY THANH XUÂN (3 ảnh)
    {
      id: 'chapter-01-wishes',
      tag: 'Những Ngày Đầu Tiên',
      title: 'Khoảng trời riêng có Bé Cam',
      lead: 'Có những người, chỉ cần xuất hiện là đủ làm cả năm tháng tuổi trẻ trở nên đặc biệt. Với anh, người ấy là Bé Cam.',
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
      tag: 'Kỷ Niệm Đọng Lại',
      title: 'Tấm hình chụp chung năm ấy',
      lead: 'Tấm hình chụp cùng nhau sau bao năm tháng, mỗi lần nhìn lại vẫn luôn nhắc anh nhớ về lý do nụ cười của em làm anh rung động.',
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
      title: 'Buổi hẹn hò đầu tiên',
      lead: 'Đàng hoàng thưa chuyện với ba mẹ để được đón Bé Cam đi chơi, nụ cười rạng rỡ của em hôm ấy anh vẫn nhớ như in.',
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
          url: '/images/03-xeo-quyt/photo-02.jpg',
          alt: 'Chuyến đi 02',
          aspectRatio: '4/3',
        },
        {
          id: 'xeo-quyt-03',
          url: '/images/03-xeo-quyt/photo-03.jpg',
          alt: 'Chuyến đi 03',
          aspectRatio: '3/4',
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
      lead: 'Mỗi bức ảnh là một mảnh ghép chân thật, ghi lại những khoảnh khắc đẹp nhất mà chúng mình đã dành cho nhau.',
      textPosition: 'center',
      layoutVariant: 'grand-photobook',
      photos: [
        {
          id: 'album-01',
          url: '/images/04-album/photo-01.jpg',
          alt: 'Album kỷ niệm 01',
          aspectRatio: '3/4',
        },
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
    tag: 'Lời Bày Tỏ Chân Thành',
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
      'Khoảng thời gian qua được ở cạnh bên em là những ngày tháng anh thấy trọn vẹn và bình yên nhất.',
      'Anh muốn được đường hoàng nắm tay Bé Tú, được thương, được lo lắng và che chở cho em bằng một mối quan hệ rõ ràng nhất.',
    ],
    proposalQuestion: 'Bé Tú đồng ý làm người yêu anh nhé?',
    epilogue: 'Bó hoa này và anh đang đợi em ngoài đời thực.',
  },
};
