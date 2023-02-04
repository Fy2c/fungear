import { Html, Head, Main, NextScript } from 'next/document'
import Image from 'next/image';

export default function Document() {
  return (
    <Html className='scroll-smooth'>
      <Head>
        <title>FunGear Partyroom</title>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta http-equiv="Content-Language" content="zh-hk" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="title" content="Fungear 24小時通霄營業 Party room : 旺角 | 油麻地" />
        <meta name="description" content="FunGear鄰近鄰近地鐵旺角站E2或油麻地站A2出口，交通非常便利。場地面積約300呎，備有一系列boardgames，卡拉OK，麻雀等不同娛樂設施，而且全場飲品任飲，包括：紙包飲品，可樂，礦泉水等等，為三五知己提供舒適的玩樂聚腳點。" />
        <meta name="keywords" content="fungear, 自助形式 Party room, Party room, 24小時通霄營業 Party Room, 派對場地, 旺角派對場地, 油麻地派對場地, 旺角 party room, 油麻地 party room, 旺角自助打邊爐場地, 旺角旺角自助韓燒場地" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Chinese" />
      </Head>
      <body className='leading-normal tracking-normal bg-slate-100'>
        <Main />
        <NextScript />
        <footer className="bg-slate-100 item-center justify-center text-center">
          <hr className="border-b border-gray-300 opacity-25 my-0 py-0" />
          <div className="container mx-auto px-8 py-5 pb-8">
            <span>Copyright © {(new Date()).getFullYear()} FunGear</span>
          </div>
        </footer>
      </body>
    </Html>
  )
}