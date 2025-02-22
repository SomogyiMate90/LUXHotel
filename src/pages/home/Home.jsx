import Galery from "../../shared/Galery";
import myStyle from "./home.module.css";
const Home = () => {
  return (
    <main className={myStyle["home-page"]}>
      <h1>LuxHotel – Az Élmény és Kényelem Otthona</h1>

      <div className="clearfix">
        <figure className="float-end ps-2">
          <img
            src="/img/LuxHotel épülete.jpg"
            alt="LuxHotel épülete"
            title="LuxHotel épülete"
          />
          <figcaption>LuxHotel kívülről</figcaption>
        </figure>
        <p className="">
          Üdvözöljük a LuxHotel világában, ahol minden vendég egyedi és
          felejthetetlen élményben részesül! Hotelünk a város szívében
          helyezkedik el, modern és kényelmes szobákkal, exkluzív éttermekkel,
          valamint teljes körű wellness és spa szolgáltatásokkal várja Önt.
        </p>

        <ul>
          <li>
            Kényelmes szállodai szobák, melyek mindegyike luxus berendezéssel
            rendelkezik
          </li>
          <li>Kiváló minőségű gasztronómiai élmények több étteremben</li>
          <li>
            Pihentető spa és wellness központ, mely garantálja a relaxációt
          </li>
          <li>
            Modern konferencia- és rendezvénytermek, amelyek tökéletesek üzleti
            megbeszélésekhez és rendezvényekhez
          </li>
          <li>Személyre szabott vendégfogadási és concierge szolgáltatások</li>
        </ul>

        <p>
          Fedezze fel, hogyan teszi felejthetetlenné az itt töltött időt, legyen
          szó pihenésről, üzleti találkozóról vagy akár egy különleges
          eseményről! Készen áll a kihívásra?
        </p>

        <Galery/>

      </div>


    </main>
  );
};

export default Home;
