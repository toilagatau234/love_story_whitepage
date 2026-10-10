import { StoryData } from '../types/story';
import { storyDataOriginal } from './storyData.original';

// BẬT / TẮT CHẾ ĐỘ CHỮ TƯỢNG TRƯNG (DEMO / PLACEHOLDER)
// true: Hiển thị chữ tượng trưng trung tính để gửi cho bạn bè xem thử.
// false: Trả về nguyên bản toàn bộ lời tâm tư riêng tư của bạn.
export const USE_PLACEHOLDER_MODE = true;

export const storyDataPlaceholder: StoryData = {
  meta: {
    title: 'A Story Only We Know',
    description: 'Một hành trình kỷ niệm và những khoảnh khắc đẹp đẽ.',
    bgMusicUrl: '/audio/ambient.mp3',
  },

  hero: {
    eyebrow: 'A Story Only We Know',
    title: 'Hành trình của những khoảnh khắc',
    subtitle: 'Từng thước phim ghi lại những dấu ấn thời gian tuyệt đẹp.',
    ctaText: 'Khám phá câu chuyện',
    dateText: 'Chapter of Love',
  },

  chapters: [
    // 1. CHƯƠNG 1 (3 ảnh)
    {
      id: 'chapter-01-wishes',
      tag: 'Chương 01',
      title: 'Khởi đầu hành trình',
      lead: 'Nơi những ước mơ đầu tiên bắt đầu được vun đắp qua năm tháng.',
      textPosition: 'top-left',
      layoutVariant: 'asymmetric-trio',
      photos: storyDataOriginal.chapters[0].photos,
    },

    // 2. CHƯƠNG 2 (1 ảnh)
    {
      id: 'chapter-02-treasure',
      tag: 'Chương 02',
      title: 'Khoảnh khắc báu vật',
      lead: 'Một khoảnh khắc ý nghĩa được lưu giữ trọn vẹn theo dòng thời gian.',
      textPosition: 'bottom-left',
      layoutVariant: 'grand-single',
      photos: storyDataOriginal.chapters[1].photos,
    },

    // 3. CHƯƠNG 3 (3 ảnh)
    {
      id: 'chapter-03-helping',
      tag: 'Chương 03',
      title: 'Những điều bình dị',
      lead: 'Sự đồng hành nhẹ nhàng trong từng khoảnh khắc đời thường.',
      textPosition: 'right',
      layoutVariant: 'asymmetric-trio',
      photos: storyDataOriginal.chapters[2].photos,
    },

    // 4. CHƯƠNG 4 (4 ảnh - Buổi date đầu tiên)
    {
      id: 'chapter-04-first-date',
      tag: 'Chương 04',
      title: 'Kỷ niệm khó phai',
      lead: 'Những nụ cười rạng rỡ trong những ngày đầu gặp gỡ.',
      textPosition: 'bottom-right',
      layoutVariant: 'editorial-quad',
      photos: storyDataOriginal.chapters[3].photos,
    },

    // 5. CHƯƠNG 5 (4 ảnh - Những chuyến đi)
    {
      id: 'chapter-05-xeo-quyt',
      tag: 'Chương 05',
      title: 'Những chuyến đi xa',
      lead: 'Từng bước chân đồng hành trên những cung đường khám phá.',
      textPosition: 'left',
      layoutVariant: 'editorial-quad',
      photos: storyDataOriginal.chapters[4].photos,
    },

    // 6. CHƯƠNG 6 (6 ảnh - Cuốn Album Kỷ Niệm)
    {
      id: 'chapter-06-album',
      tag: 'Chương 06',
      title: 'Cuốn Album Kỷ Niệm',
      lead: 'Nơi lưu giữ trọn vẹn những trang ảnh đẹp nhất của hành trình.',
      textPosition: 'center',
      layoutVariant: 'grand-photobook',
      photos: storyDataOriginal.chapters[5].photos,
    },
  ],

  climax: {
    tag: 'Thông Điệp Cuối',
    title: 'Món quà dành riêng cho người thương',
    lead: 'Một thông điệp ý nghĩa được gửi gắm trong khoảnh khắc này.',
    buttonText: 'Mở thông điệp',
    openedTitle: 'Gửi trọn yêu thương',
    bouquetImage: storyDataOriginal.climax.bouquetImage,
    confessionLines: [
      'Cảm ơn vì đã luôn đồng hành trong suốt chặng đường đã qua.',
      'Hy vọng chúng ta sẽ cùng nhau viết tiếp những chương mới thật trọn vẹn.',
    ],
    proposalQuestion: 'Cùng nhau bước tiếp nhé?',
    epilogue: 'Món quà đặc biệt đang đợi bạn ở phía trước.',
  },
};

export const storyData: StoryData = USE_PLACEHOLDER_MODE
  ? storyDataPlaceholder
  : storyDataOriginal;
