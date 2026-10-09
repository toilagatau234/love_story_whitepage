export type LayoutVariant = 
  | 'grand-single'       // 1 image: Trang trọng, kích thước lớn, text đặt lệch góc
  | 'offset-duo'          // 2 images: So le cao thấp, text ở góc đối diện
  | 'asymmetric-trio'     // 3 images: 1 ảnh lớn chính bên trái/phải, 2 ảnh phụ so le
  | 'editorial-quad'      // 4 images: Bố cục tạp chí 4 ảnh lệch tầng (2x2 bất đối xứng)
  | 'grand-photobook';    // 6 images: Cuốn Album Lớn mở trang với 6 ảnh đính bên trong

export interface PhotoItem {
  id: string;
  url: string;
  alt: string;
  aspectRatio?: '3/4' | '4/3' | '1/1' | '16/9';
}

export interface StoryChapter {
  id: string;
  tag: string;           // e.g., '6 NĂM THƯƠNG THẦM'
  title: string;         // e.g., 'Nguyện ước trong lòng'
  lead: string;          // 1-2 câu cô đọng
  textPosition: 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
  layoutVariant: LayoutVariant;
  photos: PhotoItem[];
}

export interface StoryData {
  meta: {
    title: string;
    description: string;
    bgMusicUrl?: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaText: string;
    dateText: string;
  };
  chapters: StoryChapter[];
  climax: {
    tag: string;
    title: string;
    lead: string;
    buttonText: string;
    openedTitle: string;
    bouquetImage: PhotoItem;
    confessionLines: string[];
    proposalQuestion: string;
    epilogue: string;
  };
}
