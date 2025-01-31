import { useEffect } from 'react'
import "./fight.scss"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Fight = () => {

    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    return (
        <div id='fight' className="fight">
            <div className="container">
                <div className="fight__box">
                    <h2 className="fight__title">Odilxon Kamolov Janglari</h2>
                    <div className="fight__youtube-box">
                        <iframe width="400" height="250" src="https://www.youtube.com/embed/N-FH4LDlBek" title="Сумасшедшая заруба Тайсона и Одилхона! Одилхон Камолов vs Жасурбек Жураев." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="400" height="250" src="https://www.youtube.com/embed/l2FIMt0QzvM" title="ЧТО ЗА ФИНИШ? Одилхон Камолов vs Арсенхан Урматов" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="400" height="250" src="https://www.youtube.com/embed/Sxv5g903xdw" title="Мощная победа узбекского бойца: Одилхон Камолов vs Сержан Сериков" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="400" height="250" src="https://www.youtube.com/embed/VQi2SQtLmFY" title="Легендарный бой Камиля Карате и Одилхона Камолова" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="400" height="250" src="https://www.youtube.com/embed/tV-fCjMKa9k" title="Абсолютный рекорд ММА! Камил Карате vs Одилхон Камолов II" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="400" height="250" src="https://www.youtube.com/embed/TABmhQylozs" title="Odilxon Kamolov Toktarni Yorib Tashladi" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="400" height="250" src="https://www.youtube.com/embed/3K8qXSYhhJE" title="Одилхон Камолов vs Еркебулан Токтар. Сумасшедший РЕМАТЧ ГОДА!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="400" height="250" src="https://www.youtube.com/embed/qF-4MMS7K-4" title="Одилхон Камолов VS Жаксылык Турсынбай. Жесткий нокаут | OCTAGON 37" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="400" height="250" src="https://www.youtube.com/embed/4bFqT-CyXCg" title="Мощный дебют звезды из Узбекистана: Одилхон Камолов vs Дидар Алипхан" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="400" height="250" src="https://www.youtube.com/embed/XvBijd_muBY" title="БОЙ | ОДИЛХОН vs АБЫЛАЙ | АЛПАМЫС vs АЛИХАН | МОЩНЫЙ ДЕБЮТ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <p id='infoo' className="info__txt fight__txt">Odilxon Kamolov jang san’atida yuqori natijalarga erishish maqsadida Baha Aka Team sport zalida muntazam shug‘ullanadi. Ushbu sport zalida tajribali murabbiylar rahbarligida u jismoniy tayyorgarligini oshirib, jang taktikalari ustida mukammal ishlaydi.Shuningdek, uning ukasi Nodirxon Kamolov yaqinda Octagon League bilan rasmiy shartnoma imzoladi. Uning dastlabki jangida raqibi sifatida Saturn taxallusi bilan tanilgan Og‘abek Abdumominov bilan to‘qnashishi aniq bo‘ldi.</p>
                </div>
            </div>
        </div>
    )
}

export default Fight