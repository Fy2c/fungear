import Head from 'next/head';
import NavMenu from "../../components/navMenu";


export default function TermAndCondition() {
    return (
        <>
            <Head>
                <title>條款及細則</title>
            </Head>

            <NavMenu />
            <section id="room" className="w-full min-h-screen h-full bg-slate-100 pt-24">
                <div className="container max-w-6xl mb-8 md:px-45 px-5 mx-auto flex flex-wrap flex-row items-center">
                    <div className="w-full mx-0 mt-10 mb-5 md:text-center">
                        <h2 className="text-4xl text-gray-800 font-bold leading-none mb-3">預約條款及細則</h2>
                        <p>請細閱以下條款及細則，客人付款及確認預約後則被視為已同意並會遵守條款及細則。</p>
                    </div>
                    <div className="w-full mx-0 mt-5">
                        <h3 className="text-2xl text-gray-800 font-bold leading-none mb-3">預約</h3>
                        <ul className="list-disc mx-5">
                            <li className="pt-3">訂單人數為當日收費之基本，當日人數增加請提早通知FunGear Co. (FunGear)，並於入場前或即時補付收費，人數減少FunGear亦會以訂單總收費收取費用，所有入場者不論逗留時間長短，一律按人頭收費。</li>
                            <li className="pt-3">若FunGear發現入場人數多於預約人數而客人未有提早通知及補付收費，FunGear同事將進入房間收取相關費用。</li>
                            <li className="pt-3">如客人需加鐘，請退房前 2小時詢問負責預訂的同事，能否加鐘視乎訂房情況，由FunGear 全權決定，3人或以上加鐘收費為每位$30/小時，2人加鐘收費為每位$50/小時。預約一經確認，客人如需更改預約當天的時段，需提前至少預約前一天向FunGear查詢，並只能增加時數，不能減少時數。客人須就該額外時數補付人數收費。</li>
                            <li className="pt-3">除懸掛八號風球/黑色暴雨的情況外，客人如需更改預約，須於不少於預約時間72小時前通知，FunGear將收取預約總數之35%作更改手續費。客人須於通知日起30天內重新預約日期及使用扣除手續費後的金額，逾期將列作放棄預約處理。72小時內的預約不能更改。</li>
                            <li className="pt-3">若掛八號風球/黑色暴雨，FunGear會照常營業，客人可以選擇取消預約，並於預約時間前至少3小時通知FunGear，已付費用可以於下次預約時抵銷番要比嘅費用，使用限期為原定預約日期起計3個月內。如果FunGear無收到客人通知，客人會被視為照樣使用間房，不設改期或退款。</li>
                            <li className="pt-3">任何情況下，包括但不限於減少人數或取消預約，已繳付給FunGear的費用均不設退款，FunGear對款項安排有絕對酌情權及最後決定權。</li>
                            <li className="pt-3">房內如有損壞或遺失，客人須照價賠償。FunGear對客人由於使用場地而承受的任何損失，不論間接或直接損失，不負任何責任。</li>
                        </ul>
                    </div>
                    <div className="w-full mx-0 mt-10">
                        <h3 className="text-2xl text-gray-800 font-bold leading-none mb-3">場地使用</h3>
                        <ul className="list-disc mx-5">
                            <li className="pt-3">客人於完場前須還原場地整理乾淨，並將大件垃圾扔入房間垃圾桶內，離場時關上燈、冷氣同電視，確認房門鎖好。</li>
                            <li className="pt-3">餅乾、雪櫃內飲品、礦泉水只供場內任飲任食，客人切勿攜帶離開。</li>
                            <li className="pt-3">客人可以自帶食物及飲品。</li>
                            <li className="pt-3">酒水及冰須客人自備，我們只提供飲酒器皿 ，例如酒杯子彈杯shooter、榨壺 mixer、洒爵、冰桶及開瓶器。</li>
                            <li className="pt-3">洗手間在商廈走廊，近房間，女廁需要鎖匙(掛在房間門旁)，男廁不需鎖匙。</li>
                            <li className="pt-3">如客人需要設施如switch、指定board game、指定飲酒遊戲，請提前向職員查詢及預訂。</li>
                        </ul>
                    </div>
                </div>

            </section>
        </>
    );
}