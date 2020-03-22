import React, { useEffect, useState } from 'react'
import { Container } from '../../design-system/container'
import { fetchWebtoons } from '../../service/webtoons'
import Webtoon from './webtoon'

function Webtoons() {
  const [webtoons, setwebtoons] = useState(null) //새상태 저장, 기본값: 널

  useEffect(() => {
    async function fetchAndSetWebtoons() {
      const webtoons = await fetchWebtoons()
      setwebtoons(webtoons)
    }
    fetchAndSetWebtoons()
    //비동기 -> 동기 : Promise-then(then이 많아질수록 보기 어려운 단점), async-await
  }, []) //[dependency]가 비어있으므로 안의 내용을 한 번 실행후 보여짐

  if (!webtoons) return null

  return (
    <Container>
      {webtoons.map((webtoon, i) => (
        <Webtoon key={i} source={webtoon} />
      ))}
    </Container>
  )
}

export default Webtoons
