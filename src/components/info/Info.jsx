import { useEffect } from 'react'
import "./info.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Info = () => {

    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    return (
        <div className="info">
            <div className="container">
                <div className="info__box">
                    <h2 className="info__title">Odilxon Kamolov — O'zbekistonlik Professional MMA Jangchisi</h2>
                    <p data-aos="fade-up" className="info__txt">Odilxon Kamolov O‘zbekiston MMA sportining yorqin yulduzlaridan biri bo‘lib, hozirda <span>OctagonLeague</span> doirasida faoliyat olib boradi. U jang san’atidagi yuqori mahorati va janglarda qo‘lga kiritgan yutuqlari bilan tanilgan. Kamolovning jang uslubi kuchli zarbalari, aniqligi va parterdagi ustunligi bilan ajralib turadi, bu esa uni qit’a miqyosida taniqli jangchiga aylantirgan.</p>
                    <img data-aos="zoom-in" src="1.png" alt="" />
                    <p className="info__txt">Kamolovning mashhurligida nafaqat uning jangdagi mahorati, balki media sohasining ham katta o‘rni bor. Har bir jangi Osiyoda katta qiziqish uyg‘otadi va keng muhokamalarga sabab bo‘ladi. Jang oldidan tayyorgarlik jarayonlarini u odamlarga qiziqarli tarzda yetkazib berishi uning muxlislari sonini yanada oshiradi. Shu bilan birga, Instagram, YouTube va TikTok kabi platformalarda Kamolovning janglari va mashg‘ulotlari asosida tayyorlangan videolar uni yanada mashhur qilmoqda.</p>
                    <img src="8.png" alt="" />
                    <p className="info__txt">Odilxon Kamolovning faoliyati davomida Erkebulan Toktar va Kamil Karate bilan bo‘lgan janglari alohida e’tiborga loyiq. U har ikki jangchi bilan ikki martadan kuch sinashgan va har ikki jangchiga nisbatan 1 ta g‘alaba hamda 1 ta mag‘lubiyat qayd etgan. Bu janglar nafaqat sport yutuqlari, balki omma orasida katta shov-shuvlarga sabab bo‘lgan.</p>
                    <img src="7.jpg" alt="" />
                    <p className="info__txt">Odilxon Kamolov <span>OctagonLeague</span> doirasidagi eng ko‘p gonorar oladigan sportchilardan biri hisoblanadi. 2024-yil 29-dekabr kuni o‘tkazilgan Octagon69 turnirida Jasurbek "Tayson" Jorayev ustidan g‘alaba qozongani bunga yaqqol misol bo‘la oladi. Ushbu jang uchun Kamolov g‘alabasi evaziga 2500 AQSh dollari va jangda ishtiroki uchun yana 2500 AQSh dollari olgan. Bu jang ko‘plab tanqidlarga sabab bo‘ldi, chunki Jasurbek Jorayev o‘zining debyut jangini Odilxon Kamolovga qarshi o‘tkazgan va bu jangni o‘zi tashabbus qilib "Chaqiruv" orqali tashkil qilgan.</p>
                    <img src="9.png" alt="" />
                    <p className="info__txt">Odilxon Kamolovning keyingi jangi Kamil Karatega qarshi "Trilogiya" bo‘lishi kutilmoqda. Ushbu jang juda katta shov-shuvga ega bo‘lishi ehtimoli yuqori, chunki bu jangchilar avvalroq ikki marta kuch sinashgan va har ikki jang shiddatli kechgan. Bu jang nafaqat sport olami, balki OAV va muxlislar orasida ham katta qiziqish uyg‘otishi kutilmoqda.</p>
                    <img src="11.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Info