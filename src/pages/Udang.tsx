import Prawn from "../assets/prawn.png";

export default function Udang() {
    return (
        <>
            <div class="wrapper pb-[25vh]">
                <h1 class="text-4xl text-left title-text py-4">🦐 Udang</h1>
                <p class="text-2xl text-left">
                    Udang juga kaya dengan pelbagai nutrisi untuk kesihatan
                    badan. Antaranya ialah, udang adalah kandungan protein yang
                    tinggi, namun tergolong rendah lemak. Dalam daging udang,
                    Anda juga bisa mendapatkan kandungan mineral, seperti
                    kalsium, kalium, dan fosfor, serta sumber vitamin A dan
                    vitamin E yang baik untuk tubuh. Lemak pada udang umumnya
                    berupa lemak tak jenuh yang bagus untuk tubuh. Lemak tak
                    jenuh dapat membantu meningkatkan kadar kolesterol baik
                    dalam darah. Selain tinggi protein, udang juga memiliki
                    kandungan vitamin D dan zat besi yang meningkatkan leptin
                    dalam tubuh. Dengan meningkatkan kadar hormon leptin dalam
                    tubuh.
                </p>
                <div class="flex justify-center">
                    <img
                        src={Prawn}
                        class="text-center object-cover my-4 rounded-xl aspect-video border-4 border-accent drop-shadow-lg"
                    />
                </div>
            </div>
        </>
    );
}
