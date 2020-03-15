export async function fetchWebtoons() {
  const response = [
    {
      title: '여신강림',
      src:
        'https://shared-comic.pstatic.net/thumb/webtoon/703846/thumbnail/thumbnail_IMAG10_35503130-16ce-4236-b913-0fe76226de36.jpg',
      updated: true, // 뱃지 컴포넌트
    },
    {
      title: '약한영웅',
      src:
        'https://shared-comic.pstatic.net/thumb/webtoon/710751/thumbnail/thumbnail_IMAG10_eed99ea4-5908-4445-b89a-d3881797f909.jpg',
      updated: false,
    },
    {
      title: '외모지상주의',
      src:
        'https://shared-comic.pstatic.net/thumb/webtoon/641253/thumbnail/title_thumbnail_20141120112141_t83x90.jpg',
      updated: false,
    },
  ]
  return response
}
