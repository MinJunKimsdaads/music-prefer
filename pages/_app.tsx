import '../styles/globals.scss';
import { useEffect } from 'react';

function App({ Component, pageProps }) {

  return <Component {...pageProps} />;
}

export default App;

//_app.tsx 
// 서버로 요청이 들어왔을 때 가장 먼저 실행되는 컴포넌트
// 공통 레이아웃을 만들 때 사용
// 글로벌 css 적용