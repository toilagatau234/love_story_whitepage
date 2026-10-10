import { StoryData } from '../types/story';

export const storyDataOriginal: StoryData = {
  meta: {
    title: 'A Story Only We Know',
    description: 'Hành trình tình yêu và lời hẹn ước chân thành dành riêng cho em.',
    bgMusicUrl: '/audio/ambient.mp3',
  },

  hero: {
    eyebrow: 'A Story Only We Know',
    title: 'Có một câu chuyện anh muốn kể em nghe',
    subtitle: 'Từng thước phim, từng kỷ niệm của riêng hai chúng ta.',
    ctaText: 'Bắt đầu hành trình',
    dateText: '6 Years & Beyond',
  },

  chapters: [
    // 1. SÁU NĂM THƯƠNG THẦM (3 ảnh)
    {
      id: 'chapter-01-wishes',
      tag: '6 Năm Thương Thầm',
      title: 'Nguyện ước trong lòng',
      lead: 'Thương em suốt 6 năm, từng nghĩ mình chỉ dám đứng từ xa nhìn lại.',
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

    // 2. TẤM ẢNH BÁU VẬT (1 ảnh)
    {
      id: 'chapter-02-treasure',
      tag: 'Báu Vật Thời Gian',
      title: 'Tấm hình duy nhất',
      lead: 'Tấm hình chụp chung duy nhất còn lại sau bao năm tháng, anh gìn giữ như báu vật của riêng mình.',
      textPosition: 'bottom-left',
      layoutVariant: 'grand-single',
      photos: [
        {
          id: 'treasure-01',
          url: '/images/01-treasure/photo-01.jpg',
          alt: 'Tấm hình duy nhất',
          aspectRatio: '4/3',
        },
      ],
    },

    // 3. ÂM THẦM BÊN EM (3 ảnh)
    {
      id: 'chapter-03-helping',
      tag: 'Từng Điều Nhỏ Bé',
      title: 'Âm thầm bên em',
      lead: 'Phụ giúp em mọi việc nhỏ nhặt nhất, không màng báo đáp, chỉ đơn giản vì quá thương em.',
      textPosition: 'right',
      layoutVariant: 'asymmetric-trio',
      photos: [
        {
          id: 'helping-01',
          url: '/images/02-helping/photo-01.jpg',
          alt: 'Khoảnh khắc phụ giúp 01',
          aspectRatio: '3/4',
        },
        {
          id: 'helping-02',
          url: '/images/02-helping/photo-02.jpg',
          alt: 'Khoảnh khắc phụ giúp 02',
          aspectRatio: '3/4',
        },
        {
          id: 'helping-03',
          url: '/images/02-helping/photo-03.jpg',
          alt: 'Khoảnh khắc bữa cơm 03',
          aspectRatio: '3/4',
        },
      ],
    },

    // 4. BUỔI DATE ĐẦU TIÊN (4 ảnh)
    {
      id: 'chapter-04-first-date',
      tag: 'Khoảnh Khắc Đáng Nhớ',
      title: 'Buổi hẹn hò đầu tiên',
      lead: 'Đàng hoàng thưa chuyện ba mẹ để được đón em đi chơi, từng nụ cười hôm ấy vẫn còn nguyên hơi ấm.',
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

    // 5. XẺO QUÝT & NHỮNG CHUYẾN ĐI (4 ảnh)
    {
      id: 'chapter-05-xeo-quyt',
      tag: 'Những Chuyến Đi',
      title: 'Từng dặm đường cùng em',
      lead: 'Những chuyến đi xa, bình yên bên em trong từng khoảnh khắc giản dị.',
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
      lead: 'Từng trang ảnh gắn kết tình cảm son sắt của hai đứa qua năm tháng.',
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
    tag: 'Lời Hẹn Ước',
    title: 'Món quà cuối cùng dành cho em',
    lead: 'Có một điều anh muốn trực tiếp nói với em lúc này.',
    buttonText: 'Mở điều bất ngờ',
    openedTitle: 'Dành trọn cho em',
    bouquetImage: {
      id: 'bouquet-final',
      url: '/images/04-album/photo-01.jpg',
      alt: 'Bó hoa tươi thắm dành riêng cho em',
      aspectRatio: '4/3',
    },
    confessionLines: [
      '6 năm trước, anh chỉ dám đứng từ xa nhìn em.',
      'Còn hôm nay, anh muốn đường hoàng nắm tay em đi tiếp chặng đường phía trước.',
    ],
    proposalQuestion: 'Em đồng ý làm người yêu anh nhé?',
    epilogue: 'Bó hoa này và anh đang đợi em ngoài đời thực.',
  },
};
