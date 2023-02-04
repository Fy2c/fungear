import NavMenu from '../components/navMenu'
import ExportedImage from "next-image-export-optimizer";
import Rooms from '../api/rooms.json';
import Facilities from '../api/facilities.json';
import Script from 'next/script';

export default function Home() {
  return (
    <>
      <NavMenu></NavMenu>
      <section id="about-us" class="hero h-screen bg-black text-white">
        <div class="overlay">
          <div class="container px-3 mx-auto flex flex-wrap flex-row items-center h-screen">
            <div class="flex flex-col w-full justify-center text-center items-center ">
              <div class="mx-0 md:text-left items-start text-center">
                <p class="uppercase tracking-loose w-full">24小時自助形式使用</p>
                <h1 class="my-4 text-5xl font-bold leading-tight md:ml-0 mx-auto">舒適環境，優質服務</h1>
                <p class="leading-normal text-2xl mb-8 md:ml-0 mx-auto">讓你盡情享受派對和聚會！</p>
                <button 
                  class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                  onClick={(e) => toWhatsApp()}
                >立即預約</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="w-full bg-white mt-24">
        <div class="container max-w-6xl m-8 px-3 mx-auto flex flex-wrap flex-row items-center h-screen">
          <div class="flex flex-wrap w-full">
            <div class="md:w-1/2 w-full p-6">
              <div class="relative w-full h-96">
                <ExportedImage
                  src="/images/light.jpg"
                  alt="Static Image"
                  layout="fill"
                  objectFit="cover"
                />;
              </div>
            </div>
            <div class="w-full sm:w-1/2 p-6 flex flex-wrap flex-row items-center">
              <div>
                <h2 class="text-4xl text-gray-800 font-bold leading-none mb-3">關於我們</h2>
                <div class="w-full mb-4">
                  <div class="h-1 mx-auto gradient w-full opacity-50 my-0 py-0 rounded-t"></div>
                </div>
                <p class="text-xl text-gray-600 mb-8">
                  FunGear 擁有12間特式主題Party Room，24小時自助形式使用，為商廈獨立房間，安全、衛生、私隱度高，我們定時安排專人清潔房間，24小時為客人提供協助，提供優質派對娛樂服務。
                  <br />
                  <br />
                  房間: <span class="text-pink-500">FunGear Chicago</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="room" class="w-full bg-slate-100 pt-24">
        <div class="container max-w-6xl mb-8 px-3 mx-auto flex flex-wrap flex-row items-center">
          <div class="w-full mx-0 my-10 text-center">
            <h2 class="text-4xl text-gray-800 font-bold leading-none mb-0">場地簡介</h2>
          </div>

          {
            Rooms &&
            Rooms.map((room, i) => (
              <div class="md:w-1/2 w-full p-10">
                <div class="relative w-full h-96">
                  <ExportedImage
                    src={room.image}
                    alt="Static Image"
                    layout="fill"
                    objectFit="cover"
                  />;
                </div>
                <h5 class="font-semibold text-2xl my-2">{room.name}</h5>
                <p>{room.desc}，適合{room.capacity.min}-{room.capacity.max}人</p>
              </div>
            ))
          }

        </div>
      </section>

      <section id="facility" class="w-full bg-white py-24">
        <div class="container max-w-6xl mb-8 px-3 mx-auto flex flex-wrap flex-row items-center">
          <div class="w-full mx-0 my-10 text-center">
            <h2 class="text-4xl text-gray-800 font-bold leading-none mb-0">場地設施</h2>
          </div>

          {
            Facilities &&
            Facilities.map((item, i) => (
              <div class="mx-10 my-5 w-34">
                <div class="relative mx-auto w-24 h-24">
                  <ExportedImage
                    src={item.image}
                    alt="Static Image"
                    layout="fill"
                    objectFit="cover"
                  />;
                </div>
                <h5 class="text-center text-xl mt-4">{item.name}</h5>
                <p class="text-center"></p>
              </div>
            ))
          }
        </div>
      </section>

      <section id="price-list" class="w-full bg-slate-100 pt-24 pb-4">
        <div class="container mx-auto flex flex-wrap justify-center">
          <div class="w-full mx-0 my-10 text-center">
            <h2 class="text-4xl text-gray-800 font-bold leading-none mb-3">3人或以上收費表</h2>
          </div>
          <div class="flex flex-col md:w-2/6 w-full mx-auto md:mx-2 rounded-none lg:rounded-l-lg bg-white mt-2">
            <div class="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow p-6 pb-10">
              <div class="p-4 text-2xl font-bold text-center">星期一至四平日</div>
              <div class="w-full mb-4">
                <div class="h-1 mx-auto gradient w-full opacity-50 my-0 py-0 rounded-t"></div>
              </div>
              <table class="table-auto text-left w-full">
                <thead>
                  <tr>
                    <th class="pt-4">時段</th>
                    <th class="pt-4">每位收費</th>
                    <th class="pt-4"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="pt-4">10:00-19:00</td>
                    <td class="pt-4">$90 / 3小時</td>
                    <td class="pt-4">其後 $20 / 小時</td>
                  </tr>
                  <tr>
                    <td class="pt-4">19:00-00:00</td>
                    <td class="pt-4">$120 / 3小時</td>
                    <td class="pt-4">其後 $20 / 小時</td>
                  </tr>
                  <tr>
                    <td class="pt-4">00:00-10:00</td>
                    <td class="pt-4">$150 / 8小時</td>
                    <td class="pt-4">其後 $20 / 小時</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="flex flex-col md:w-2/6 w-full mx-auto md:mx-2 rounded-none lg:rounded-l-lg bg-white mt-2">
            <div class="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow p-6 pb-10">
              <div class="p-4 text-2xl font-bold text-center">星期五及假期前夕</div>
              <div class="w-full mb-4">
                <div class="h-1 mx-auto red-gradient w-full opacity-50 my-0 py-0 rounded-t"></div>
              </div>
              <table class="table-auto text-left w-full">
                <thead>
                  <tr>
                    <th class="pt-4">時段</th>
                    <th class="pt-4">每位收費</th>
                    <th class="pt-4"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="pt-4">10:00-19:00</td>
                    <td class="pt-4">$90 / 3小時</td>
                    <td class="pt-4">其後 $20 / 小時</td>
                  </tr>
                  <tr>
                    <td class="pt-4">19:00-00:00</td>
                    <td class="pt-4">$180 / 3小時</td>
                    <td class="pt-4">其後 $20 / 小時</td>
                  </tr>
                  <tr>
                    <td class="pt-4">00:00-10:00</td>
                    <td class="pt-4">$220 / 8小時</td>
                    <td class="pt-4">其後 $20 / 小時</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="flex flex-col md:w-2/6 w-full mx-auto md:mx-2 rounded-none lg:rounded-l-lg bg-white mt-2">
            <div class="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow p-6 pb-10">
              <div class="p-4 text-2xl font-bold text-center">星期六及假期</div>
              <div class="w-full mb-4">
                <div class="h-1 mx-auto red-gradient w-full opacity-50 my-0 py-0 rounded-t"></div>
              </div>
              <table class="table-auto text-left w-full">
                <thead>
                  <tr>
                    <th class="pt-4">時段</th>
                    <th class="pt-4">每位收費</th>
                    <th class="pt-4"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="pt-4">10:00-19:00</td>
                    <td class="pt-4">$150 / 3小時</td>
                    <td class="pt-4">其後 $20 / 小時</td>
                  </tr>
                  <tr>
                    <td class="pt-4">19:00-00:00</td>
                    <td class="pt-4">$180 / 3小時</td>
                    <td class="pt-4">其後 $20 / 小時</td>
                  </tr>
                  <tr>
                    <td class="pt-4">00:00-10:00</td>
                    <td class="pt-4">$220 / 8小時</td>
                    <td class="pt-4">其後 $20 / 小時</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="flex flex-col md:w-2/6 w-full mx-auto md:mx-2 rounded-none lg:rounded-l-lg bg-white mt-2">
            <div class="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow p-6 pb-10">
              <div class="p-4 text-2xl font-bold text-center">星期日</div>
              <div class="w-full mb-4">
                <div class="h-1 mx-auto red-gradient w-full opacity-50 my-0 py-0 rounded-t"></div>
              </div>
              <table class="table-auto text-left w-full">
                <thead>
                  <tr>
                    <th class="pt-4">時段</th>
                    <th class="pt-4">每位收費</th>
                    <th class="pt-4"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="pt-4">10:00-19:00</td>
                    <td class="pt-4">$150 / 3小時</td>
                    <td class="pt-4">其後 $20 / 小時</td>
                  </tr>
                  <tr>
                    <td class="pt-4">19:00-00:00</td>
                    <td class="pt-4">$150 / 3小時</td>
                    <td class="pt-4">其後 $20 / 小時</td>
                  </tr>
                  <tr>
                    <td class="pt-4">00:00-10:00</td>
                    <td class="pt-4">$180 / 8小時</td>
                    <td class="pt-4">其後 $20 / 小時</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="flex flex-col md:w-4/6 w-full px-5 md:px-0 xd:w-full md:mx-auto rounded-none lg:rounded-l-lg my-5">
            <p>* 確認預約後加鐘收費為每位$30 / 小時</p>
            <p>* 若預約時段橫跨兩個或以上時段，收費以收費較高時段計算</p>
            <p>* 訂單總收費受限於每房低消，詳情請向職員查詢</p>
            <p>* 以上只供參考，不適用於八號風球日子、中秋、聖誕、元旦及新年假期，收費以FunGear報價為準</p>
            <p>* 詳情請參閱：<a class="underline decoration-sky-500" href="/price-term-and-condition">收費條款及細則</a><span class="px-1">和</span><a class="underline decoration-sky-500" href="/rental-term-and-condition">預約條款及細則</a></p>
          </div>
        </div>
      </section>

      <section id="price-list-two" class="w-full bg-slate-100 pt-24 pb-4">
        <div class="container mx-auto flex flex-wrap justify-center">
          <div class="w-full mx-0 my-10 text-center">
            <h2 class="text-4xl text-gray-800 font-bold leading-none mb-3">2人收費表</h2>
          </div>
          <div class="flex flex-col md:w-2/6 w-full mx-auto md:mx-2 rounded-none lg:rounded-l-lg bg-white mt-2">
            <div class="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow p-6 pb-10">
              <div class="p-4 text-2xl font-bold text-center">星期一至四平日</div>
              <div class="w-full mb-4">
                <div class="h-1 mx-auto gradient w-full opacity-50 my-0 py-0 rounded-t"></div>
              </div>
              <table class="table-auto text-left w-full">
                <thead>
                  <tr>
                    <th class="pt-4">時段</th>
                    <th class="pt-4">每位收費</th>
                    <th class="pt-4"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="pt-4">10:00-19:00</td>
                    <td class="pt-4">$150 / 3小時</td>
                    <td class="pt-4">其後 $10 / 小時</td>
                  </tr>
                  <tr>
                    <td class="pt-4">19:00-00:00</td>
                    <td class="pt-4">$275 / 6小時</td>
                    <td class="pt-4">其後 $30 / 小時</td>
                  </tr>
                  <tr>
                    <td class="pt-4">00:00-10:00</td>
                    <td class="pt-4">$225 / 8小時</td>
                    <td class="pt-4">其後 $30 / 小時</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="flex flex-col md:w-2/6 w-full mx-auto md:mx-2 rounded-none lg:rounded-l-lg bg-white mt-2">
            <div class="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow p-6 pb-10">
              <div class="p-4 text-2xl font-bold text-center">星期五及假期前夕</div>
              <div class="w-full mb-4">
                <div class="h-1 mx-auto red-gradient w-full opacity-50 my-0 py-0 rounded-t"></div>
              </div>
              <table class="table-auto text-left w-full">
                <thead>
                  <tr>
                    <th class="pt-4">時段</th>
                    <th class="pt-4">每位收費</th>
                    <th class="pt-4"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="pt-4">10:00-19:00</td>
                    <td class="pt-4">$150 / 3小時</td>
                    <td class="pt-4">其後 $10 / 小時</td>
                  </tr>
                  <tr>
                    <td class="pt-4">19:00-00:00</td>
                    <td class="pt-4">$400 / 7小時</td>
                    <td class="pt-4">其後 $30 / 小時</td>
                  </tr>
                  <tr>
                    <td class="pt-4">00:00-10:00</td>
                    <td class="pt-4">$300 / 8小時</td>
                    <td class="pt-4">其後 $30 / 小時</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="flex flex-col md:w-2/6 w-full mx-auto md:mx-2 rounded-none lg:rounded-l-lg bg-white mt-2">
            <div class="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow p-6 pb-10">
              <div class="p-4 text-2xl font-bold text-center">星期六及假期</div>
              <div class="w-full mb-4">
                <div class="h-1 mx-auto red-gradient w-full opacity-50 my-0 py-0 rounded-t"></div>
              </div>
              <table class="table-auto text-left w-full">
                <thead>
                  <tr>
                    <th class="pt-4">時段</th>
                    <th class="pt-4">每位收費</th>
                    <th class="pt-4"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="pt-4">10:00-19:00</td>
                    <td class="pt-4">$225 / 6.5小時</td>
                    <td class="pt-4">其後 $30 / 小時</td>
                  </tr>
                  <tr>
                    <td class="pt-4">19:00-00:00</td>
                    <td class="pt-4">$400 / 7小時</td>
                    <td class="pt-4">其後 $30 / 小時</td>
                  </tr>
                  <tr>
                    <td class="pt-4">00:00-10:00</td>
                    <td class="pt-4">$300 / 8小時</td>
                    <td class="pt-4">其後 $30 / 小時</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="flex flex-col md:w-2/6 w-full mx-auto md:mx-2 rounded-none lg:rounded-l-lg bg-white mt-2">
            <div class="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow p-6 pb-10">
              <div class="p-4 text-2xl font-bold text-center">星期日</div>
              <div class="w-full mb-4">
                <div class="h-1 mx-auto red-gradient w-full opacity-50 my-0 py-0 rounded-t"></div>
              </div>
              <table class="table-auto text-left w-full">
                <thead>
                  <tr>
                    <th class="pt-4">時段</th>
                    <th class="pt-4">每位收費</th>
                    <th class="pt-4"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="pt-4">10:00-19:00</td>
                    <td class="pt-4">$225 / 6.5小時</td>
                    <td class="pt-4">其後 $30 / 小時</td>
                  </tr>
                  <tr>
                    <td class="pt-4">19:00-00:00</td>
                    <td class="pt-4">$275 / 4.5小時</td>
                    <td class="pt-4">其後 $30 / 小時</td>
                  </tr>
                  <tr>
                    <td class="pt-4">00:00-10:00</td>
                    <td class="pt-4">$270 / 8小時</td>
                    <td class="pt-4">其後 $30 / 小時</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="flex flex-col md:w-4/6 w-full px-5 md:px-0 xd:w-full md:mx-auto rounded-none lg:rounded-l-lg my-5">
            <p>* 確認預約後加鐘收費為每位$50 / 小時</p>
            <p>* 若預約時段橫跨兩個或以上時段，收費以收費較高時段計算</p>
            <p>* 訂單總收費受限於每房低消，詳情請向職員查詢</p>
            <p>* 以上只供參考，不適用於八號風球日子、中秋、聖誕、元旦及新年假期，收費以FunGear報價為準</p>
            <p>* 詳情請參閱：<a class="underline decoration-sky-500" href="/price-term-and-condition">收費條款及細則</a><span class="px-1">和</span><a class="underline decoration-sky-500" href="/rental-term-and-condition">預約條款及細則</a></p>
          </div>
        </div>
      </section>

      <Script>{
        `
        function toWhatsApp() {
          let url = "https://wa.me/56220401";
          window.open(url, '_blank');
        }
        `
      }</Script>
    </>
  )
}
