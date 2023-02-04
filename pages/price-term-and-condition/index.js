import Head from 'next/head';
import NavMenu from "../../components/navMenu";


export default function TermAndCondition() {
    return (
        <>
            <Head>
                <title>Term and Condition</title>
            </Head>

            <NavMenu />
            <section id="room" className="w-full min-h-screen h-full bg-slate-100 pt-24">
            <div className="container max-w-6xl mb-8 md:px-45 px-5 mx-auto flex flex-wrap flex-row items-center">
              <div className="w-full mx-0 my-10 md:text-center">
                <h2 className="text-4xl text-gray-800 font-bold leading-none mb-3">收費條款及細則</h2>
              </div>
                <ul className="list-disc">
                    <li className="pt-3">若預約時段橫跨兩個或以上時段，首3小時收費以收費較高的時段計。</li>
                    <li className="pt-3">個別時段訂單總收費受限於每房最低消費，詳情請向FunGear Co. (“FunGear”) 職員查詢。</li>
                    <li className="pt-3">此收費表不適用於中秋、聖誕、元旦及新年假期時段。</li>
                    <li className="pt-3">收費以全單人數、預訂入場時間及實際離場時間計算。</li>
                    <li className="pt-3">訂單人數為當日收費之基本，當日人數增加請提早通知FunGear，並於入場前補付收費，人數減少FunGear亦會以訂單總收費收取費用。</li>
                    <li className="pt-3">客人確認預訂及付款後減少人數或取消預約，不設退款，FunGear對款項安排有絕對酌情權及最後決定權。</li>
                    <li className="pt-3">如客人要求場地佈置或打邊爐，須另外付費，詳情請向FunGear 查詢。</li>
                    <li className="pt-3">此收費表只供參考，實際收費以FunGear 職員Whatsapp、Instagram、Facebook或電話報價為準。</li>
                    <li className="pt-3">FunGear 保留不時更改此收費表的權力，並無需通知客人。</li>
                    <li className="pt-3">預定Switch主機及遊戲須繳付按金每部$500，FunGear會於客人退房後檢查物品，確認物品無遺失或損毀後退回按金。</li>
                    <li className="pt-3">預定Shisha須繳付按金$800，FunGear會於客人退房後檢查設備及場地，確認設備無遺失或損毀、場地設備無損毀後退回按金。</li>
                </ul>
            </div>

            </section>
        </>
    );
}